export type HeroAgent = {
  id: string;
  name: string;
  account: string;
  signal: string;
  work: string;
  result: string;
  system: string;
  reply: string;
};

export type SceneFrame = {
  when: string;
  line: string;
  screen: {
    label: string;
    title: string;
    rows: readonly {
      label: string;
      value: string;
    }[];
  };
  chat: {
    speaker: "System" | "Agent";
    body: string;
  };
  final?: boolean;
};

export type UseCase = {
  id: string;
  number: string;
  title: string;
  trigger: string;
  activity: string;
  value: string;
  watercolor: string;
  frames: readonly SceneFrame[];
  artifact: {
    eyebrow: string;
    title: string;
    items: readonly {
      label: string;
      value: string;
    }[];
  };
};

export const heroAgents: readonly HeroAgent[] = [
  {
    id: "target-account",
    name: "New target",
    account: "Target account",
    signal: "Account added to the list",
    work: "I am checking public signals, account history, and the HPE products that may fit.",
    result: "Account point of view ready",
    system: "Research the new target",
    reply: "The account brief and first message are ready.",
  },
  {
    id: "customer-call",
    name: "Customer call",
    account: "Live opportunity",
    signal: "Customer call started",
    work: "I am listening for the business goal, technical constraints, and the next decision.",
    result: "Customer call brief ready",
    system: "Capture this call",
    reply: "The call brief and follow-up are ready.",
  },
  {
    id: "technical-question",
    name: "Technical question",
    account: "Customer inbox",
    signal: "Product question received",
    work: "I am checking approved HPE material, the account record, and the right specialist.",
    result: "Sourced answer ready",
    system: "Answer the open question",
    reply: "A sourced response is ready for approval.",
  },
  {
    id: "rfp",
    name: "RFP",
    account: "Active deal",
    signal: "RFP added to the room",
    work: "I am mapping each question to approved product material and marking the gaps.",
    result: "Response matrix ready",
    system: "Start the RFP pass",
    reply: "The draft answers and open owners are ready.",
  },
  {
    id: "deal-review",
    name: "Deal review",
    account: "Open opportunity",
    signal: "Pipeline review scheduled",
    work: "I am checking the customer goal, decision path, missing proof, and next step.",
    result: "Deal review note ready",
    system: "Prepare the deal review",
    reply: "The risks and next actions are ready.",
  },
  {
    id: "renewal",
    name: "Renewal window",
    account: "Customer account",
    signal: "Renewal window opened",
    work: "I am gathering adoption, support, contract, and stakeholder context for the team.",
    result: "Renewal brief ready",
    system: "Prepare the renewal",
    reply: "The renewal brief and open risks are ready.",
  },
  {
    id: "competitor",
    name: "Competitor mention",
    account: "Customer conversation",
    signal: "Competitor entered the deal",
    work: "I am finding approved positioning and matching it to the customer's stated criteria.",
    result: "Talk track ready",
    system: "Prepare the comparison",
    reply: "The approved talk track is ready.",
  },
  {
    id: "partner-update",
    name: "Partner update",
    account: "Joint opportunity",
    signal: "Partner note received",
    work: "I am combining the account plan, partner note, and next customer milestone.",
    result: "Joint action note ready",
    system: "Update the partner plan",
    reply: "The shared next steps are ready.",
  },
];

const callFrames: readonly SceneFrame[] = [
  {
    when: "Call starts",
    line: "The customer call starts the agent.",
    screen: {
      label: "Live customer call",
      title: "Goals and constraints",
      rows: [
        { label: "Goal", value: "The outcome the customer wants." },
        { label: "Constraint", value: "The technical boundary they named." },
      ],
    },
    chat: {
      speaker: "System",
      body: "The customer call is live.",
    },
  },
  {
    when: "Need mapped",
    line: "The agent maps what it heard to the approved HPE story.",
    screen: {
      label: "Solution workspace",
      title: "Customer need and HPE fit",
      rows: [
        { label: "Need", value: "The problem in the customer's words." },
        { label: "Fit", value: "The HPE path that deserves a closer look." },
      ],
    },
    chat: {
      speaker: "Agent",
      body: "I found the customer need, the HPE fit, and the open question.",
    },
  },
  {
    when: "Artifact ready",
    line: "The final frame is a customer call brief the account team can use.",
    screen: {
      label: "Customer call brief",
      title: "Need, fit, and next step",
      rows: [
        { label: "Follow-up", value: "A plain-English recap for the customer." },
        { label: "Next step", value: "The next proof, owner, and open decision." },
      ],
    },
    chat: {
      speaker: "Agent",
      body: "The call brief and follow-up are ready for review.",
    },
    final: true,
  },
];

const answerFrames: readonly SceneFrame[] = [
  {
    when: "Question arrives",
    line: "A technical customer question starts the agent.",
    screen: {
      label: "Customer inbox",
      title: "One open question",
      rows: [
        { label: "Asked", value: "The question in the customer's words." },
        { label: "Context", value: "The product and opportunity in scope." },
      ],
    },
    chat: {
      speaker: "System",
      body: "A customer question needs a checked answer.",
    },
  },
  {
    when: "Sources checked",
    line: "The agent checks approved product material and account context.",
    screen: {
      label: "Knowledge workspace",
      title: "Sources and open gaps",
      rows: [
        { label: "Product", value: "Approved HPE material for this question." },
        { label: "Owner", value: "The specialist for anything still open." },
      ],
    },
    chat: {
      speaker: "Agent",
      body: "I checked the approved sources and marked one item for a specialist.",
    },
  },
  {
    when: "Artifact ready",
    line: "The final frame is a sourced response the rep can approve.",
    screen: {
      label: "Customer response",
      title: "A checked answer in plain English",
      rows: [
        { label: "Answer", value: "A direct response tied to approved material." },
        { label: "Gap", value: "The open item and the person who owns it." },
      ],
    },
    chat: {
      speaker: "Agent",
      body: "The sourced response is ready for approval.",
    },
    final: true,
  },
];

const accountFrames: readonly SceneFrame[] = [
  {
    when: "Signal arrives",
    line: "A new account signal starts the research.",
    screen: {
      label: "Account signal",
      title: "A reason to look now",
      rows: [
        { label: "Signal", value: "A public change tied to the account." },
        { label: "Source", value: "The evidence and when it appeared." },
      ],
    },
    chat: {
      speaker: "System",
      body: "A new account signal is ready to research.",
    },
  },
  {
    when: "Account mapped",
    line: "The agent checks the account record, public sources, and HPE fit.",
    screen: {
      label: "Research workspace",
      title: "A grounded account view",
      rows: [
        { label: "Why HPE", value: "The product path that matches the signal." },
        { label: "Buyer", value: "The role closest to the problem." },
      ],
    },
    chat: {
      speaker: "Agent",
      body: "I found a supported point of view and the right role to start with.",
    },
  },
  {
    when: "Artifact ready",
    line: "The final frame is an account point of view and first message.",
    screen: {
      label: "Account brief",
      title: "Why HPE, why now, and the first move",
      rows: [
        { label: "Point of view", value: "A clear claim with its supporting sources." },
        { label: "First move", value: "One personal message ready for review." },
      ],
    },
    chat: {
      speaker: "Agent",
      body: "The account brief and first message are ready for review.",
    },
    final: true,
  },
];

export const useCases: readonly UseCase[] = [
  {
    id: "customer-call",
    number: "01",
    title: "Turn a live call into a customer-ready brief",
    trigger: "a customer call starts",
    activity: "Listening for the need and building the follow-up",
    value: "The account team gets the customer goal, HPE fit, open question, and next step in one artifact.",
    watercolor: "/brand/hpe-watercolor-room.svg",
    frames: callFrames,
    artifact: {
      eyebrow: "Customer call brief",
      title: "One call, ready for the next move",
      items: [
        { label: "Customer need", value: "The goal and constraint in plain English." },
        { label: "HPE fit", value: "The approved product path worth testing." },
        { label: "Next move", value: "The follow-up, owner, and open decision." },
      ],
    },
  },
  {
    id: "technical-answer",
    number: "02",
    title: "Answer the technical question without the Slack chase",
    trigger: "a customer question lands",
    activity: "Checking approved sources and account context",
    value: "The rep gets a direct response, the sources behind it, and a clear owner for anything still open.",
    watercolor: "/brand/hpe-watercolor-deal.svg",
    frames: answerFrames,
    artifact: {
      eyebrow: "Sourced customer response",
      title: "A checked answer ready to approve",
      items: [
        { label: "Direct answer", value: "Plain English tied to approved material." },
        { label: "Sources", value: "The product pages and account context used." },
        { label: "Open item", value: "The gap and the specialist who owns it." },
      ],
    },
  },
  {
    id: "account-point-of-view",
    number: "03",
    title: "Build the account point of view before the first touch",
    trigger: "a target account enters the list",
    activity: "Researching the signal, buyer, and HPE fit",
    value: "The rep gets a sourced reason to reach out, the role closest to the problem, and a personal first message.",
    watercolor: "/brand/hpe-watercolor-attach.svg",
    frames: accountFrames,
    artifact: {
      eyebrow: "Account point of view",
      title: "A reason to reach out now",
      items: [
        { label: "Why HPE", value: "The fit between the signal and HPE." },
        { label: "Why now", value: "The source that makes this timely." },
        { label: "First move", value: "One personal message ready to review." },
      ],
    },
  },
];

export const fleetLanes = [
  {
    stage: "Account enters the list",
    title: "Research computer",
    body: "Checks public signals, account history, and HPE fit.",
    value: "Returns the account point of view.",
  },
  {
    stage: "Customer call starts",
    title: "Call computer",
    body: "Listens for needs, constraints, and decisions.",
    value: "Returns the call brief.",
  },
  {
    stage: "Product question lands",
    title: "Answer computer",
    body: "Checks approved product material and account context.",
    value: "Returns the sourced response.",
  },
  {
    stage: "RFP arrives",
    title: "Response computer",
    body: "Maps questions to approved answers and open owners.",
    value: "Returns the response matrix.",
  },
  {
    stage: "Deal review is booked",
    title: "Deal computer",
    body: "Checks the decision path, missing proof, and next step.",
    value: "Returns the review note.",
  },
  {
    stage: "Renewal window opens",
    title: "Renewal computer",
    body: "Gathers adoption, support, contract, and stakeholder context.",
    value: "Returns the renewal brief.",
  },
] as const;

export const comparison = [
  {
    label: "What it is",
    fleet: "An always-on agent fleet with its own computers and approved tools",
    ide: "A general computer agent",
    computer: "A general AI assistant",
    search: "An AI research assistant",
  },
  {
    label: "What starts it",
    fleet: "A call, email, account signal, or workflow event",
    ide: "A person assigns a task",
    computer: "A person starts a chat or task",
    search: "A person asks a question",
  },
  {
    label: "What comes back",
    fleet: "A customer-ready artifact with its sources and open decisions",
    ide: "A completed task or artifact",
    computer: "An answer, analysis, or draft",
    search: "A sourced research answer",
  },
] as const;

export const testimonials = [
  {
    name: "Naval",
    handle: "@naval",
    initials: "N",
    quote:
      "Grok Bot is just cool. 😎 Of course an agent should be persistent. Of course it should have its own computer. All that remains is for it to be embodied…",
    source: "https://x.com/naval/status/2090497355649008059",
  },
  {
    name: "Austen Allred",
    handle: "@Austen",
    initials: "AA",
    quote:
      "Maybe it's just because it's new and shiny but I'm obsessed with with Grok Bot. The form factor is so fun, especially when combined with text to speech. You can FLY. Automations just work, cross-bot messaging works perfectly (I do most everything through my \"chief of staff\").",
    source: "https://x.com/Austen/status/2087685264617406963",
  },
  {
    name: "Alex Finn",
    handle: "@AlexFinn",
    initials: "AF",
    quote:
      "Grok Bot is the best AI agent right now It gives you an army of agents that can do work for you around the clock 24/7 If you set it up correctly, you gain super powers In this video I cover setting up Grok Bot, use cases, plugins, and what makes Grok Bot so good:",
    source: "https://x.com/AlexFinn/status/2089505950470459659",
  },
  {
    name: "Lenny Rachitsky",
    handle: "@lennysan",
    initials: "LR",
    quote:
      "I got early access to Grok Bot and I'm hooked. I haven't been this excited about a new AI product in a while. It's like OpenClaw, but super easy, reliable, and less scary to use.",
    source: "https://x.com/lennysan/status/2087241423792087518",
  },
  {
    name: "Gergely Orosz",
    handle: "@GergelyOrosz",
    initials: "GO",
    quote:
      "I continue be surprised how Grok Bot is very good by doing so many things right (not innovating!) Commecting several Gmail accounts / Slack accounts etc is one of these. And yes no other *managed* agent (eg Codex, Claude Cowork) supports this which is just strange. Like, why?",
    source: "https://x.com/GergelyOrosz/status/2090353329771631080",
  },
  {
    name: "Yun-Ta Tsai",
    handle: "@yunta_tsai",
    initials: "YT",
    quote:
      "Grok Bot was able to a) go through the calendars and find out anything I need to make reservations for beforehand that I haven’t done yet, b) determine the best time to make reservations, and c) navigate the reservations on a website. While I was walking in the parking lot before getting to my cars, I was talking to it in mixed Chinese and English. Color me impressed.",
    source: "https://x.com/yunta_tsai/status/2087415205756391461",
  },
] as const;
