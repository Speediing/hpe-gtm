import type { Artifact, CroJob, SlideCard } from "./types";

const SAMPLE_ACCOUNT = "Northstar Systems (sample)";

export const HPE_CALL_SLIDES: SlideCard[] = [
  {
    n: 1,
    kicker: "Customer priority",
    voice: "them",
    title: "One hybrid cloud view",
    body: "Bring the private cloud, public cloud, and edge plan into one clear conversation.",
  },
  {
    n: 2,
    kicker: "HPE path",
    voice: "us",
    title: "Start with the operating model",
    body: "Map the priority to approved HPE material before adding product detail.",
  },
  {
    n: 3,
    kicker: "Proof needed",
    voice: "them",
    title: "Security and operations",
    body: "Bring the right specialists and source the answer before the next meeting.",
  },
  {
    n: 4,
    kicker: "Next meeting",
    voice: "us",
    title: "Review the customer brief",
    body: "Confirm the owners, open questions, and the proof the customer wants to see.",
  },
];

export const HPE_TECHNICAL_RESPONSE: Extract<
  Artifact,
  { kind: "redlines" }
> = {
  kind: "redlines",
  title: `${SAMPLE_ACCOUNT} technical response`,
  paperTitle: "Questions to answer",
  from: `${SAMPLE_ACCOUNT} customer email`,
  marks: [
    {
      text: "Can the approach cover private cloud, public cloud, and edge?",
      note: "Use the approved HPE hybrid cloud overview. Keep the answer at the architecture level until the specialist confirms scope.",
      take: true,
    },
    {
      text: "Where does networking fit?",
      note: "Pull the approved HPE Aruba Networking material that matches the customer environment.",
      take: true,
    },
    {
      text: "What can we share on security and governance?",
      note: "Use the approved security brief and keep the source attached to the draft.",
      take: true,
    },
    {
      text: "Which deployment detail still needs an owner?",
      note: "Hold this line until the solution architect confirms the customer boundary.",
      take: false,
    },
  ],
  reply: {
    to: `${SAMPLE_ACCOUNT} contact`,
    subject: "HPE follow-up: sourced answers and one open item",
    body: "Hi,\n\nI pulled the approved HPE material for the hybrid cloud, networking, and security questions. I linked each source below so your team can review the detail.\n\nOne deployment item still needs confirmation from our solution architect. I marked it clearly rather than guessing.\n\nIf useful, I can bring the right specialist to the next call.\n\nBest,",
  },
};

export const HPE_OUTBOUND: Extract<Artifact, { kind: "outbound" }> = {
  kind: "outbound",
  title: `${SAMPLE_ACCOUNT} account point of view`,
  account: SAMPLE_ACCOUNT,
  hypothesis: [
    {
      k: "Why HPE",
      body: "The customer is connecting hybrid cloud, networking, and compute work. HPE can bring those parts into one focused conversation.",
    },
    {
      k: "Why now",
      body: "Current public signals point to active infrastructure work. Confirm the signal before outreach.",
    },
    {
      k: "Why this team",
      body: "Start with the leader responsible for the program. Verify the person and their role before sending.",
    },
  ],
  evidence: [
    {
      source: "Company site",
      finding:
        "A public infrastructure program is active. Confirm the scope in the source before using it.",
    },
    {
      source: "Careers",
      finding:
        "Open roles point to hybrid cloud and networking work. Treat this as a signal, not proof of budget.",
    },
    {
      source: "Account history",
      finding:
        "No recent customer meeting is on file. Keep the first touch narrow and useful.",
    },
  ],
  targets: [
    {
      name: "Role to verify",
      role: "Infrastructure leader",
      why: "Likely owns the program named in the public signal.",
    },
    {
      name: "Role to verify",
      role: "Cloud platform owner",
      why: "Likely owns the day-to-day operating model.",
    },
  ],
  page: {
    headline: `A sourced point of view for ${SAMPLE_ACCOUNT}`,
    body: "Lead with the confirmed program, the HPE areas that may fit, and one clear question. Do not turn the first touch into a catalog.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Turn a customer call into the next step",
    trigger: "A customer call starts",
    backgroundAction: "Listening for priorities + updating the open deck",
    problem:
      "A customer call creates notes, follow-up, product questions, and a new deck. The seller usually rebuilds that work after the meeting.",
    botJob:
      "Grok Bot follows the call, finds the customer priorities, and updates the open deck. Every artifact stays a draft until the seller reviews it.",
    storyboard: [
      {
        when: "The call begins",
        label: "Grok starts listening with the seller. No new prompt is needed.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: `${SAMPLE_ACCOUNT} discovery`,
          people: [
            { initials: "YOU", name: "You" },
            { initials: "CU", name: "Customer" },
            { initials: "SE", name: "Specialist" },
          ],
        },
      },
      {
        when: "During discovery",
        label: "The customer priorities land in the call notes.",
        scene: "demo",
        visual: {
          kind: "live-transcript",
          timestamp: "Live",
          speaker: "Call note",
          note: "Connect the hybrid cloud plan with the operating model and the security path.",
          signals: ["Hybrid cloud", "Security", "Operations"],
        },
      },
      {
        when: "Before the call ends",
        label: "Grok maps the notes to approved HPE material and updates the deck.",
        scene: "notes",
        visual: {
          kind: "deck-update",
          eyebrow: "Customer priorities",
          headline: "One operating model across hybrid cloud",
          product: "Approved HPE material attached",
          status: "Draft updated",
        },
      },
      {
        when: "Artifact ready",
        label: "A customer call brief is ready to present and review.",
        scene: "deck",
        slides: HPE_CALL_SLIDES,
      },
    ],
    unlock:
      "The seller finishes the call with a customer brief, product path, and clear next meeting.",
    outcome:
      "One live call becomes a customer-ready brief before the seller leaves the room.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Call Brief",
      subtitle: "Live discovery · customer brief",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Call Brief",
          role: "bot",
          persona: "Turns the live call into a clear customer brief",
          color: "#15A685",
        },
        {
          id: "slides",
          name: "Deck",
          role: "bot",
          persona: "Maps the call notes to approved HPE material",
          color: "#4D8CFF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "room",
          kind: "routine",
          body: `Customer call started for ${SAMPLE_ACCOUNT}. I am following the notes and watching for priorities, owners, and open questions.`,
        },
        {
          id: "m2",
          from: "room",
          kind: "text",
          body: "The customer connected the hybrid cloud plan with security and day-to-day operations. I am checking the approved HPE material now.",
        },
        {
          id: "m3",
          from: "room",
          kind: "text",
          body: "The call is still live. I have the customer priorities, the open proof, and the next meeting ask.",
        },
        {
          id: "m4",
          from: "slides",
          kind: "draft",
          draftLabel: "Customer call brief",
          artifact: {
            kind: "slides",
            title: "Customer call brief",
            cards: HPE_CALL_SLIDES,
          },
        },
        {
          id: "m5",
          from: "room",
          kind: "draft",
          draftLabel: "One-page follow-up",
          artifact: {
            kind: "one-pager",
            title: `${SAMPLE_ACCOUNT} follow-up`,
            eyebrow: "Customer brief",
            sections: [
              {
                heading: "Customer priority",
                body: "Connect the hybrid cloud plan with the operating model and the security path.",
              },
              {
                heading: "HPE path",
                body: "Start with approved HPE material and bring the right specialists to the next meeting.",
              },
              {
                heading: "Open proof",
                body: "Confirm the customer environment before adding deployment detail.",
              },
              {
                heading: "Next meeting",
                body: "Review the brief, owners, open questions, and the proof the customer wants to see.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "room",
          kind: "draft",
          draftLabel: "Internal handoff",
          artifact: {
            kind: "packet",
            title: `${SAMPLE_ACCOUNT} internal handoff`,
            fields: [
              {
                label: "Customer priority",
                value: "One clear operating model across the hybrid cloud plan.",
              },
              {
                label: "Specialist needed",
                value: "Confirm the security and deployment questions before the next call.",
              },
              {
                label: "Source rule",
                value: "Use approved HPE material. Keep open questions marked as open.",
              },
              {
                label: "Next action",
                value: "Seller reviews the brief and confirms the next meeting owners.",
              },
            ],
          },
        },
        {
          id: "m7",
          from: "room",
          kind: "draft",
          draftLabel: "Customer email",
          artifact: {
            kind: "gmail",
            title: "Customer follow-up",
            to: `${SAMPLE_ACCOUNT} contact`,
            subject: "HPE follow-up and next meeting",
            body: "Thanks for the conversation. I attached a short brief with the priorities, the approved HPE material, and the open questions. I also listed the specialists we can bring to the next meeting.",
          },
        },
        {
          id: "m8",
          from: "room",
          kind: "system",
          body: "Nothing sent. The deck, brief, handoff, and email stay in draft until you approve them.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Find approved answers without the internal chase",
    trigger: "A customer question lands",
    backgroundAction: "Searching approved HPE sources + drafting the response",
    problem:
      "A technical question can turn into a long search across product, security, and solution teams. The customer waits while the seller looks for the current answer.",
    botJob:
      "Grok Bot checks approved HPE material, marks the source, and drafts a reply. If a question is still open, the draft says so.",
    storyboard: [
      {
        when: "Question received",
        label: "The customer questions land. Grok starts checking the source library.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: `${SAMPLE_ACCOUNT} contact`,
          subject: "Hybrid cloud and security questions",
          questions: 4,
        },
      },
      {
        when: "Sources checked",
        label: "Grok finds the approved answers and leaves the open item open.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Hybrid cloud", answer: "Approved overview found" },
            { name: "Networking", answer: "Approved material found" },
            { name: "Security", answer: "Approved brief found" },
          ],
          status: "Sources attached",
        },
      },
      {
        when: "Artifact ready",
        label: "A sourced response is ready for seller approval.",
        scene: "send",
        artifact: HPE_TECHNICAL_RESPONSE,
      },
    ],
    unlock:
      "A customer question becomes a sourced draft with a clear owner for anything still open.",
    outcome:
      "Grok prepares the answer while the seller keeps the customer moving.",
    clips: ["01-morning-inbox"],
    demo: {
      title: "Product Answer",
      subtitle: "Approved sources · draft waiting",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "answer",
          name: "Product Answer",
          role: "bot",
          persona: "Checks approved sources and drafts a customer response",
          color: "#0B6B58",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "answer",
          kind: "routine",
          body: `New technical questions detected for ${SAMPLE_ACCOUNT}. I am checking approved hybrid cloud, networking, and security material.`,
        },
        {
          id: "m2",
          from: "answer",
          kind: "text",
          body: "I found approved sources for three questions. One deployment item still needs the solution architect, so I left it open.",
        },
        {
          id: "m3",
          from: "answer",
          kind: "draft",
          draftLabel: "Response matrix",
          artifact: HPE_TECHNICAL_RESPONSE,
        },
        {
          id: "m4",
          from: "answer",
          kind: "draft",
          draftLabel: "Customer email",
          artifact: {
            kind: "gmail",
            title: "Sourced customer response",
            to: HPE_TECHNICAL_RESPONSE.reply.to,
            subject: HPE_TECHNICAL_RESPONSE.reply.subject,
            body: HPE_TECHNICAL_RESPONSE.reply.body,
          },
        },
        {
          id: "m5",
          from: "answer",
          kind: "system",
          body: "Nothing sent. The response stays in draft until you approve it.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Start outreach with a sourced account point of view",
    trigger: "A target account enters the list",
    backgroundAction: "Researching public signals + building personal drafts",
    problem:
      "A generic sequence starts with a name and a template. Useful outreach starts with a confirmed signal, a clear HPE point of view, and the right person.",
    botJob:
      "Grok Bot researches the account, shows its sources, drafts the point of view, and prepares personal outreach. The seller verifies the facts and chooses what to send.",
    storyboard: [
      {
        when: "Account added",
        label: `${SAMPLE_ACCOUNT} enters the list. Grok starts without a prompt.`,
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: SAMPLE_ACCOUNT,
          sources: ["Company site", "Careers", "Account history"],
          signal: "Infrastructure program",
        },
      },
      {
        when: "Research complete",
        label: "Public signals become a focused HPE account point of view.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why HPE", answer: "One infrastructure conversation" },
            { label: "Why now", answer: "Current public signal" },
            { label: "Why this team", answer: "Program owner to verify" },
          ],
        },
      },
      {
        when: "Drafts ready",
        label: "The seller gets personal drafts with the source beside each claim.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Infrastructure leader · role to verify",
          channels: ["LinkedIn", "Email", "Account page"],
          status: "Drafts only",
        },
      },
      {
        when: "Artifact ready",
        label: "The account point of view and outreach are ready for review.",
        scene: "send",
        artifact: HPE_OUTBOUND,
      },
    ],
    unlock:
      "The seller starts with evidence, a clear HPE point of view, and personal drafts.",
    outcome:
      "One account enters the list. A sourced account brief and outreach drafts come back.",
    clips: ["02-prospecting-pg"],
    demo: {
      title: "Account Research",
      subtitle: "Public signal · sourced drafts",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "research",
          name: "Account Research",
          role: "bot",
          persona: "Builds a sourced point of view and personal outreach",
          color: "#4D8CFF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "research",
          kind: "routine",
          body: `${SAMPLE_ACCOUNT} entered the target list. I am checking the company site, current roles, and account history. Drafts only.`,
        },
        {
          id: "m2",
          from: "research",
          kind: "text",
          body: "The public signals point to infrastructure work across cloud and networking. I am treating that as a lead to verify, not proof of budget.",
        },
        {
          id: "m3",
          from: "research",
          kind: "draft",
          draftLabel: "Account hypothesis",
          artifact: {
            kind: "packet",
            title: `${SAMPLE_ACCOUNT} account point of view`,
            fields: HPE_OUTBOUND.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "research",
          kind: "draft",
          draftLabel: "Evidence and roles",
          artifact: {
            kind: "packet",
            title: "Sources, then the people",
            fields: [
              ...HPE_OUTBOUND.evidence.map((item) => ({
                label: item.source,
                value: item.finding,
              })),
              ...HPE_OUTBOUND.targets.map((person) => ({
                label: `${person.role} · ${person.name}`,
                value: person.why,
              })),
            ],
          },
        },
        {
          id: "m5",
          from: "research",
          kind: "draft",
          draftLabel: "LinkedIn",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn draft",
            to: "Infrastructure leader",
            role: "Role to verify",
            body: "Your public infrastructure work suggests cloud, networking, and compute decisions may be moving together. I put together a short HPE point of view with the sources beside it. Worth comparing notes?",
          },
        },
        {
          id: "m6",
          from: "research",
          kind: "draft",
          draftLabel: "Email",
          artifact: {
            kind: "gmail",
            title: "Email draft",
            to: "Infrastructure leader",
            subject: `${SAMPLE_ACCOUNT} infrastructure point of view`,
            body: "I pulled together a short, sourced view of the infrastructure program shown in your public material. It connects the cloud, networking, and compute questions that may sit with your team. If the signal is wrong, I would value the correction.",
          },
        },
        {
          id: "m7",
          from: "research",
          kind: "draft",
          draftLabel: "Account page",
          artifact: {
            kind: "one-pager",
            title: HPE_OUTBOUND.page.headline,
            eyebrow: "Sourced account page",
            sections: [
              {
                heading: "What we found",
                body: HPE_OUTBOUND.evidence[0].finding,
              },
              {
                heading: "Why this team",
                body: HPE_OUTBOUND.hypothesis[2].body,
              },
              {
                heading: "HPE point of view",
                body: HPE_OUTBOUND.page.body,
              },
            ],
          },
        },
        {
          id: "m8",
          from: "research",
          kind: "system",
          body: "Nothing sent. LinkedIn, email, and the account page stay in draft until you approve them.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
