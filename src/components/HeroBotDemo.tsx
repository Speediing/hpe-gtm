"use client";

import { useState } from "react";
import { heroAgents } from "@/lib/content";

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m14.5 6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ComputerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="5"
        width="16"
        height="11"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 5.5h12v13H6zM9 9h6M9 12h6M9 15h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function HeroBotDemo() {
  const [active, setActive] = useState(0);
  const agent = heroAgents[active];

  return (
    <>
      <div className="hero-copy">
        <p className="eyebrow">A proactive agent fleet for every HPE rep</p>
        <h1>The agents that work while your reps sell.</h1>
        <p className="hero-intro">
          Each agent has its own computer and approved tools. A call, email,
          account signal, or workflow event starts the work.
        </p>
        <div className="hero-phone-jobs" aria-label="Choose a work event">
          {heroAgents.map((item, index) => (
            <button
              className={index === active ? "is-active" : undefined}
              key={item.id}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              {index === active ? (
                <span aria-hidden="true">
                  <WorkIcon />
                </span>
              ) : null}
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <aside className="hero-bot-demo" aria-label="Live agent fleet demo">
        <div className="hero-phone">
          <div className="hero-phone-notch" aria-hidden="true" />
          <header className="hero-phone-header">
            <span className="hero-phone-back" aria-hidden="true">
              <BackIcon />
            </span>
            <span className="hero-phone-agent" aria-hidden="true">
              <WorkIcon />
            </span>
            <p>
              <strong>{agent.name}</strong>
              <small>
                <span aria-hidden="true" /> Computer working in the cloud
              </small>
            </p>
            <span className="hero-phone-desktop" aria-hidden="true">
              <ComputerIcon />
            </span>
          </header>
          <div className="hero-phone-thread" key={agent.id}>
            <article className="hero-phone-work">
              <p className="hero-phone-work-label">
                <span aria-hidden="true" />
                Work event detected
              </p>
              <p className="hero-phone-work-meta">
                <span>Scope</span>
                {agent.account}
              </p>
              <p className="hero-phone-work-meta">
                <span>Trigger</span>
                {agent.signal}
              </p>
              <p className="hero-phone-work-copy">{agent.work}</p>
              <strong>{agent.result}</strong>
            </article>
            <p className="hero-phone-message is-system">{agent.system}</p>
            <p className="hero-phone-message is-bot">{agent.reply}</p>
          </div>
          <footer className="hero-phone-composer">
            <span aria-hidden="true">
              <PlusIcon />
            </span>
            <p>Message this agent</p>
            <span aria-hidden="true">
              <WorkIcon />
            </span>
          </footer>
        </div>
      </aside>
    </>
  );
}
