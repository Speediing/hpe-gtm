import type { CSSProperties } from "react";
import { FLEET, type FleetBot } from "@/data/fleet";

function ComputerMark({ bot }: { bot: FleetBot }) {
  if (bot.seat) {
    return (
      <span className="org-seat" aria-hidden>
        {bot.mark}
      </span>
    );
  }

  return (
    <span
      className="org-computer"
      style={{ "--computer-color": bot.color } as CSSProperties}
      aria-hidden
    >
      <svg viewBox="0 0 32 28">
        <rect x="3" y="3" width="26" height="17" rx="2" />
        <path d="M11 25h10M16 20v5" />
        <circle cx="24" cy="8" r="2" />
      </svg>
    </span>
  );
}

function Box({
  bot,
  chief = false,
}: {
  bot: FleetBot;
  chief?: boolean;
}) {
  const className = chief ? "org-box is-chief" : "org-box";
  const body = (
    <>
      <ComputerMark bot={bot} />
      <span className="org-name">{bot.name}</span>
      <span className="org-blurb">{bot.blurb}</span>
    </>
  );

  if (bot.jobId) {
    return (
      <a className={className} href={`#${bot.jobId}`}>
        {body}
      </a>
    );
  }

  return <div className={className}>{body}</div>;
}

export function RosterChart() {
  const seat = FLEET.find((item) => item.seat);
  const agents = FLEET.filter((item) => !item.seat);

  if (!seat) return null;

  return (
    <section id="roster" className="roster">
      <h2>A computer for each part of the deal</h2>
      <p className="section-lede">
        The work itself is the trigger. A call starts, an email lands, or an
        account enters the list. The right agent picks it up. They keep
        working after the laptop closes. Drafts stay drafts until the rep sends.
      </p>

      <div className="org" role="tree">
        <div className="org-top">
          <Box bot={seat} chief />
        </div>
        <div className="org-branch">
          <div className="org-connect" aria-hidden>
            <i className="org-stem" />
            <i className="org-bar" />
          </div>
          <ul className="org-kids">
            {agents.map((agent) => (
              <li key={agent.id} className="org-kid">
                <Box bot={agent} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
