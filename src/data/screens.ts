import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gong"
  | "sfdc-account"
  | "sfdc-opp"
  | "sheets"
  | "gmail"
  | "slack"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const gdoc = { id: "gdoc", host: "docs.google.com", label: "Docs" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const web = {
  id: "web",
  host: "northstar.example",
  label: "Northstar sample",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening Granola",
      host: "granola.app",
      path: "/notes/northstar-hpe",
      title: "Northstar Systems (sample) <> HPE",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m2: {
      pill: "In Granola",
      host: "granola.app",
      path: "/notes/northstar-hpe",
      title: "Northstar Systems (sample) <> HPE",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m3: {
      pill: "Pulling Granola, still on the call",
      host: "granola.app",
      path: "/notes/northstar-hpe",
      title: "Northstar Systems (sample) <> HPE",
      site: "clip",
      clip: "03-slides-granola",
      tabs: [granola, figma, gmail],
    },
    m4: {
      pill: "Writing their discovery into the deck",
      host: "figma.com",
      path: "/file/northstar-next-meeting",
      title: "Northstar Systems (sample) next meeting",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m5: {
      pill: "Drafting the one-pager",
      host: "figma.com",
      path: "/file/northstar-brief",
      title: "Northstar Systems (sample) brief",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m6: {
      pill: "Building the inside note",
      host: "figma.com",
      path: "/file/northstar-internal-handoff",
      title: "Inside note",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m7: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, figma, gmail],
    },
    m8: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, figma, gmail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Opening Gmail",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m2: {
      pill: "Checking approved sources",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "clip",
      clip: "01-morning-inbox",
      tabs: [gmail, gdoc],
    },
    m3: {
      pill: "Drafting the morning reply, not sent",
      host: "docs.google.com",
      path: "/document/d/northstar-technical-response",
      title: "Northstar Systems (sample) technical response",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m4: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m5: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Researching the account",
      host: "northstar.example",
      path: "/infrastructure",
      title: "Northstar infrastructure program",
      site: "research",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m2: {
      pill: "Pulling public evidence of the pain",
      host: "northstar.example",
      path: "/company-news",
      title: "Northstar company news",
      site: "clip",
      clip: "02-prospecting-pg",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m3: {
      pill: "Writing the 3-why hypothesis",
      host: "docs.google.com",
      path: "/document/d/northstar-account-view",
      title: "Northstar account point of view",
      site: "gdoc",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m4: {
      pill: "Naming who would care",
      host: "docs.google.com",
      path: "/document/d/northstar-account-view",
      title: "Northstar account point of view",
      site: "gdoc",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m5: {
      pill: "Drafting LinkedIn, not sent",
      host: "www.linkedin.com",
      path: "/messaging/compose",
      title: "Message",
      site: "linkedin",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m6: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m7: {
      pill: "Building a page for this account",
      host: "northstar.hpe-demo.local",
      path: "/infrastructure",
      title: "For Northstar infrastructure",
      site: "page",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m8: {
      pill: "Drafts parked. Nothing sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
  }
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
