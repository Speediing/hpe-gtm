export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS: HeroJob[] = [
  {
    name: "Sales Outbound",
    icon: "outbound",
    account: "Northstar Systems (sample)",
    signal: "New hybrid cloud program found",
    work: "I reviewed public sources, mapped the HPE fit, and drafted an opening around HPE GreenLake.",
    result: "Draft outreach ready for review",
    user: "show me the draft",
    bot: "ready. i kept the sources attached.",
  },
  {
    name: "Account Research",
    icon: "research",
    account: "Northstar Systems (sample)",
    signal: "Account review starts tomorrow",
    work: "I pulled approved account notes, public priorities, and the open opportunity into one brief.",
    result: "Account brief ready",
    user: "add the likely stakeholders",
    bot: "added. each one is tied to a source.",
  },
  {
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Customer discovery",
    signal: "Customer call ended",
    work: "I captured priorities, updated the brief in their language, and drafted next steps with owners.",
    result: "Recap and brief ready",
    user: "send the recap for review",
    bot: "ready. nothing sends without approval.",
  },
  {
    name: "Technical Answers",
    icon: "deal-desk",
    account: "Customer technical review",
    signal: "Architecture question received",
    work: "I searched approved HPE sources, drafted the answer, and kept citations with the response.",
    result: "Cited response ready",
    user: "share the draft with the specialist",
    bot: "shared. the open question is flagged.",
  },
  {
    name: "Pipeline Review",
    icon: "pipeline",
    account: "HPE pipeline",
    signal: "Weekly review is tomorrow",
    work: "I reviewed activity, next steps, and buyer engagement, then flagged deals that need an owner.",
    result: "Pipeline review ready",
    user: "brief the account teams",
    bot: "briefs ready. i'll track the updates.",
  },
  {
    name: "Expansion Signals",
    icon: "renewal",
    account: "Installed base review",
    signal: "A new workload appeared",
    work: "I matched the workload to approved HPE offers and prepared questions for the account team.",
    result: "Expansion brief ready",
    user: "share this with the account lead",
    bot: "shared. the source links are included.",
  },
  {
    name: "Competitive Prep",
    icon: "competitive",
    account: "Customer evaluation",
    signal: "A competitor came up on the call",
    work: "I found the concern in the notes, matched it to approved proof, and drafted a talk track around this customer's priorities.",
    result: "Talk track ready",
    user: "add it to tomorrow's call brief",
    bot: "added. the proof points are linked.",
  },
  {
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Weekly operating review",
    signal: "Open decisions need owners",
    work: "I gathered pipeline changes, account risks, and team commitments, then prepared the decisions that need attention.",
    result: "Operating brief ready",
    user: "share it with sales leadership",
    bot: "shared. the action list is current.",
  },
];
