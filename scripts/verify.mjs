import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const port = 3107;
const baseUrl = `http://127.0.0.1:${port}`;
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".svg",
  ".ts",
  ".tsx",
]);
const ignoredDirectories = new Set([".git", ".next", "node_modules"]);
const safe = (...parts) => parts.join("");
const bannedTerms = [
  safe("data", "dog"),
  safe("sea", "gate"),
  safe("concen", "trix"),
  safe("ac", "me"),
  safe("aster ", "peak"),
  safe("exo", "s"),
  safe("ly", "ve"),
  safe("north", "wind"),
];
const bannedColors = [
  safe("#", "632ca6"),
  safe("#", "4c1d82"),
  safe("#", "6ebe49"),
  safe("#", "3d6b28"),
  safe("#", "20231f"),
];

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }

    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await filesIn(path)));
    } else if (
      textExtensions.has(extname(entry.name)) &&
      entry.name !== "package-lock.json"
    ) {
      files.push(path);
    }
  }

  return files;
}

async function verifySource() {
  const files = await filesIn(root);
  let source = "";

  for (const file of files) {
    source += `\n${relative(root, file)}\n${await readFile(file, "utf8")}`;
  }

  const lower = source.toLowerCase();
  const wordmark = safe(
    "https://www.",
    "hpe.com/apps/hpeweb-ui/images/gn-icons/logo-lm.svg",
  );

  assert.equal(source.includes("\u2014"), false, "em dash found");
  assert.equal(source.includes("\u2013"), false, "en dash found");
  assert.equal(
    lower.includes(safe("data", "dog-gtm.vercel.app")),
    false,
    "forbidden host found",
  );

  for (const term of bannedTerms) {
    assert.equal(lower.includes(term), false, "prior customer term found");
  }

  for (const color of bannedColors) {
    assert.equal(lower.includes(color), false, "prior customer color found");
  }

  assert.match(source, /"next": "15\.5\./, "Next.js 15.5 is required");
  assert.doesNotMatch(source, /"next": "\^?16\./, "Next.js 16 found");
  assert.match(source, /"vgpu":/, "vgpu dependency missing");
  assert.equal(
    lower.includes(safe("lucide", "-react")),
    false,
    "unwanted icon dependency found",
  );
  assert.match(source, /from "next\/font\/google"/, "Geist font setup missing");
  assert.match(source, /src\/app\/layout\.tsx/, "src app tree missing");
  assert.equal(
    source.split(wordmark).length - 1,
    1,
    "official HPE wordmark must have one source",
  );
  assert.match(
    source,
    /\.brand-hpe\s*\{[^}]*height:\s*17px;/s,
    "HPE wordmark must render at 17px",
  );
  assert.match(source, /hero-watercolor/, "watercolor header missing");
  assert.match(source, /hero-paper-band/, "pinned paper band missing");
  assert.match(source, /Tangible artifact ready/, "final artifact frame missing");
  assert.match(source, /className="gb-thread"/, "agent chat missing");
  assert.match(source, /className={`pc-desk/, "agent computer missing");
  assert.match(source, /Brian Fox/, "footer name missing");
  assert.match(source, /brian\.fox@cursor\.com/, "footer email missing");
}

async function waitForServer(server) {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    assert.equal(server.exitCode, null, "Next.js exited before it was ready");

    try {
      const response = await fetch(`${baseUrl}/login`);

      if (response.ok) {
        return;
      }
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  throw new Error("Next.js did not start within 30 seconds");
}

async function verifyHttp() {
  assert.equal(
    process.env.SITE_PASSWORD,
    "land2expand",
    "run verification with the requested SITE_PASSWORD",
  );

  const server = spawn(
    process.execPath,
    [join(root, "node_modules/next/dist/bin/next"), "start", "-p", String(port)],
    {
      cwd: root,
      env: { ...process.env, NODE_ENV: "production" },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  let logs = "";
  server.stdout.on("data", (chunk) => {
    logs += chunk;
  });
  server.stderr.on("data", (chunk) => {
    logs += chunk;
  });

  try {
    await waitForServer(server);

    const unauthenticated = await fetch(baseUrl, { redirect: "manual" });
    assert.equal(unauthenticated.status, 307);
    assert.equal(
      unauthenticated.headers.get("location"),
      "/login?next=%2F",
    );

    const loginPage = await fetch(`${baseUrl}/login`);
    const loginHtml = await loginPage.text();
    assert.equal(loginPage.status, 200);
    assert.match(loginHtml, /Enter the site password/);
    assert.match(
      loginHtml,
      /https:\/\/www\.hpe\.com\/apps\/hpeweb-ui\/images\/gn-icons\/logo-lm\.svg/,
    );
    assert.equal(loginPage.headers.get("x-frame-options"), "DENY");

    const malformed = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{",
    });
    assert.equal(malformed.status, 400);

    const rejected = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password: "wrong", next: "/" }),
    });
    assert.equal(rejected.status, 401);
    assert.equal(rejected.headers.get("set-cookie"), null);

    const accepted = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        password: process.env.SITE_PASSWORD,
        next: "/",
      }),
    });
    assert.equal(accepted.status, 200);
    const setCookie = accepted.headers.get("set-cookie") ?? "";
    assert.match(setCookie, /^hpe_gtm_session=/);
    assert.match(setCookie, /HttpOnly/i);
    assert.match(setCookie, /SameSite=Lax/i);
    assert.match(setCookie, /Secure/i);

    const protectedPage = await fetch(baseUrl, {
      headers: { cookie: setCookie.split(";")[0] },
    });
    const protectedHtml = await protectedPage.text();
    assert.equal(protectedPage.status, 200);
    assert.match(protectedHtml, /Hewlett Packard Enterprise x SpaceXAI/);
    assert.match(protectedHtml, /A proactive agent fleet/);
    assert.match(protectedHtml, /work while your reps sell/);
    assert.match(protectedHtml, /class="storyboard is-live-flow"/);
    assert.match(protectedHtml, /Tangible artifact ready/);
    assert.match(protectedHtml, /customer-ready brief/);
    assert.match(protectedHtml, /Sourced customer response/);
    assert.match(protectedHtml, /Account point of view/);
    assert.match(protectedHtml, /What people are saying about Grok Bot/);
    assert.match(protectedHtml, /x\.com\/naval\/status\/2090497355649008059/);
    assert.match(protectedHtml, /Brian Fox/);
    assert.match(protectedHtml, /brian\.fox@cursor\.com/);
    assert.match(protectedHtml, /noindex/);
  } catch (error) {
    throw new Error(`${error.message}\n${logs}`);
  } finally {
    server.kill("SIGTERM");
  }
}

await verifySource();
await verifyHttp();
console.log("Verified the template tree, source constraints, and password flow.");
