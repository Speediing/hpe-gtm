import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { SITE_ORIGIN } from "@/lib/site";

export const SESSION_COOKIE = "hpe_gtm_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30;

function password() {
  const value = process.env.SITE_PASSWORD;

  if (!value) {
    throw new Error("SITE_PASSWORD is required");
  }

  return value;
}

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

function equal(left: string, right: string) {
  return timingSafeEqual(digest(left), digest(right));
}

export function isPasswordValid(candidate: string) {
  return equal(candidate, password());
}

export function createSessionToken() {
  return createHmac("sha256", password())
    .update("hpe-gtm-session-v1")
    .digest("hex");
}

export function hasValidSession(candidate?: string) {
  return candidate !== undefined && equal(candidate, createSessionToken());
}

export function safeRedirect(candidate: unknown) {
  if (
    typeof candidate !== "string" ||
    !candidate.startsWith("/") ||
    candidate.startsWith("//") ||
    candidate.includes("\\")
  ) {
    return "/";
  }

  try {
    const target = new URL(candidate, SITE_ORIGIN);
    return `${target.pathname}${target.search}${target.hash}`;
  } catch {
    return "/";
  }
}
