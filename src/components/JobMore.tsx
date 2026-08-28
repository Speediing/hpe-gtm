"use client";

import { useEffect, useState } from "react";
import type { UseCase } from "@/lib/content";

type JobMoreProps = {
  useCase: UseCase;
};

export function JobMore({ useCase }: JobMoreProps) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [mobileView, setMobileView] = useState<"chat" | "computer">("chat");
  const frame = useCase.frames[active];

  useEffect(() => {
    if (!playing || active >= useCase.frames.length - 1) {
      return;
    }

    const last = useCase.frames.length - 1;
    const timer = window.setTimeout(() => {
      const next = active + 1;
      setActive(next);

      if (next >= last) {
        setPlaying(false);
      }
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [active, playing, useCase.frames.length]);

  function togglePlayback() {
    if (active >= useCase.frames.length - 1) {
      setActive(0);
      setPlaying(true);
      return;
    }

    setPlaying((current) => !current);
  }

  return (
    <details className="job-more">
      <summary>Watch the agent work in the background</summary>
      <div className="job-more-body">
        <div className="demo-tools">
          <div>
            <strong>{useCase.title}</strong>
            <span>Agent run</span>
          </div>
          <div className="demo-actions">
            <button type="button" onClick={togglePlayback}>
              {active >= useCase.frames.length - 1
                ? "Replay"
                : playing
                  ? "Pause"
                  : "Play"}
            </button>
            <button
              className="mobile-pc-toggle"
              type="button"
              onClick={() =>
                setMobileView((current) =>
                  current === "chat" ? "computer" : "chat",
                )
              }
            >
              Show {mobileView === "chat" ? "computer" : "chat"}
            </button>
          </div>
        </div>
        <div
          className={`demo-stage is-split mobile-${mobileView}`}
          aria-live="polite"
        >
          <section className="gb-thread" aria-label="Agent chat">
            <header className="gb-titlebar">
              <span className="gb-agent-mark" aria-hidden="true">
                A
              </span>
              <p>
                <strong>Grok Bot agent</strong>
                <small>
                  <i aria-hidden="true" /> Computer active
                </small>
              </p>
            </header>
            <div className="gb-body">
              {useCase.frames.slice(0, active + 1).map((item, index) => (
                <article
                  className={`gb-message is-${item.chat.speaker.toLowerCase()}`}
                  key={`${item.when}-${index}`}
                >
                  <span>{item.chat.speaker}</span>
                  <p>{item.chat.body}</p>
                </article>
              ))}
            </div>
            <footer className="gb-composer">
              <span>Message agent</span>
              <button type="button" aria-label="Send message">
                ↑
              </button>
            </footer>
          </section>

          <section
            className={`pc-desk${frame.final ? " is-final" : ""}`}
            aria-label="Agent computer"
          >
            <header className="desk-bar">
              <span className="story-ui-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <p>Agent computer</p>
              <strong>{frame.final ? "Artifact ready" : "Working"}</strong>
            </header>
            <div className="pc-screen">
              <div className="pc-screen-bar">
                <span>{frame.screen.label}</span>
                <b>{frame.when}</b>
              </div>
              <div className="pc-page">
                <p>{frame.final ? "Final artifact" : "Work in progress"}</p>
                <h3>{frame.screen.title}</h3>
                <div className="pc-rows">
                  {frame.screen.rows.map((row) => (
                    <section key={row.label}>
                      <span>{row.label}</span>
                      <p>{row.value}</p>
                    </section>
                  ))}
                </div>
                {frame.final ? (
                  <strong className="desk-done">Ready for review</strong>
                ) : (
                  <span className="desk-monitor">Agent working</span>
                )}
              </div>
            </div>
          </section>
        </div>
        <div className="demo-timeline" role="tablist" aria-label="Work frames">
          {useCase.frames.map((item, index) => (
            <button
              key={item.when}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={index === active ? "is-active" : undefined}
              onClick={() => {
                setActive(index);
                setPlaying(false);
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.when}
            </button>
          ))}
        </div>
      </div>
    </details>
  );
}
