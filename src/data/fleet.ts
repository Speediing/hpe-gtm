import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Every HPE seller",
    blurb: "The seller sets the direction. Their agent computers keep the work moving.",
    color: "#E8F4F0",
    mark: "YOU",
    seat: true,
  },
  {
    id: "call",
    name: "Customer call computer",
    blurb: "Turns a live call into a brief, follow-up, and next-meeting draft.",
    jobId: "standardize-room",
    color: "#15A685",
  },
  {
    id: "answers",
    name: "Product answer computer",
    blurb: "Checks approved HPE sources and prepares a response for the seller.",
    jobId: "legal-redlines",
    color: "#0B6B58",
  },
  {
    id: "research",
    name: "Account research computer",
    blurb: "Finds public signals and drafts a sourced point of view.",
    jobId: "attach-engine",
    color: "#4D8CFF",
  },
  {
    id: "deal",
    name: "Deal review computer",
    blurb: "Collects open risks, owners, and next actions before review.",
    color: "#FFB000",
  },
  {
    id: "rfp",
    name: "RFP computer",
    blurb: "Maps questions to approved material and marks the gaps.",
    color: "#4C566A",
  },
  {
    id: "renewal",
    name: "Renewal computer",
    blurb: "Pulls account context into one reviewable renewal brief.",
    color: "#7A9E7E",
  },
];
