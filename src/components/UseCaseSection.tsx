import Image from "next/image";
import type { UseCase } from "@/lib/content";
import { JobMore } from "./JobMore";
import { RevealSection } from "./RevealSection";

type UseCaseSectionProps = {
  useCase: UseCase;
};

export function UseCaseSection({ useCase }: UseCaseSectionProps) {
  return (
    <RevealSection
      id={useCase.id}
      className="narrative report-section job"
    >
      <p className="section-number">{useCase.number}</p>
      <div>
        <div className="job-art" aria-hidden="true">
          <Image src={useCase.watercolor} alt="" width={520} height={420} />
        </div>
        <div className="background-agent">
          <span className="background-agent-pulse" aria-hidden="true" />
          <p>
            <strong>Background agent active</strong>
            <small>
              {useCase.trigger} → {useCase.activity}
            </small>
          </p>
        </div>
        <h2 className="job-title">{useCase.title}</h2>
        <p className="job-value">{useCase.value}</p>
        <ol className="storyboard is-live-flow">
          {useCase.frames.map((frame) => (
            <li className="story-beat has-visual" key={frame.when}>
              <div
                className={`story-ui story-work-ui${frame.final ? " is-final" : ""}`}
                aria-hidden="true"
              >
                <header className="story-ui-bar">
                  <span className="story-ui-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <strong>{frame.screen.label}</strong>
                  <span>{frame.final ? "Ready" : "Working"}</span>
                </header>
                <div className="story-work-body">
                  <p>{frame.screen.title}</p>
                  {frame.screen.rows.map((row) => (
                    <span key={row.label}>
                      <small>{row.label}</small>
                      {row.value}
                    </span>
                  ))}
                </div>
                <footer>
                  {frame.final ? "Tangible artifact ready" : "Agent computer active"}
                </footer>
              </div>
              <p className="story-when">{frame.when}</p>
              <p className="story-line">{frame.line}</p>
            </li>
          ))}
        </ol>
        <div className="chapter-payoff">
          <p className="payoff-label">
            <span>Final frame</span>
            The work ends in an artifact a person can review.
          </p>
          <article className="leave hpe-artifact">
            <header>
              <p>{useCase.artifact.eyebrow}</p>
              <span>Ready for review</span>
            </header>
            <h3>{useCase.artifact.title}</h3>
            <div>
              {useCase.artifact.items.map((item) => (
                <section key={item.label}>
                  <p>{item.label}</p>
                  <span>{item.value}</span>
                </section>
              ))}
            </div>
          </article>
        </div>
        <JobMore useCase={useCase} />
      </div>
    </RevealSection>
  );
}
