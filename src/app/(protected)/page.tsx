import Image from "next/image";
import { BrandLockup } from "@/components/BrandLockup";
import { HeroBotDemo } from "@/components/HeroBotDemo";
import { UseCaseSection } from "@/components/UseCaseSection";
import {
  comparison,
  fleetLanes,
  testimonials,
  useCases,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        <Image
          className="hero-watercolor-image"
          src="/brand/hpe-watercolor-pad.svg"
          alt=""
          width={1600}
          height={360}
          priority
        />
        <header className="site-header site-header-over">
          <a href="#top" className="nav-brand" aria-label="Back to top">
            <BrandLockup />
          </a>
          <nav className="header-actions" aria-label="On this page">
            <a className="text-button" href="#jobs">
              Use cases
            </a>
            <a className="text-button" href="#compare">
              Agent comparison
            </a>
            <a className="text-button" href="#testimonials">
              Testimonials
            </a>
          </nav>
        </header>
      </div>

      <div className="report">
        <div className="report-hero">
          <section className="hero">
            <aside className="hero-paper-band">
              <span className="paper-pin" aria-hidden="true" />
              <p>The work starts the agent</p>
              <strong>
                A call, email, account signal, or workflow event can start the
                next job. No extra prompt is required.
              </strong>
            </aside>
            <HeroBotDemo />
          </section>

          <section className="usecase-framing">
            <p className="eyebrow">Three sample use cases</p>
            <h2>
              HPE can give a fleet of agents the repeatable work around every
              customer conversation.
            </h2>
            <p>
              Each example starts with a real work event. The final frame is the
              artifact a rep can review, share, or reject.
            </p>
          </section>

          <div className="metric-grid">
            {useCases.map((useCase) => (
              <a className="metric-card" href={`#${useCase.id}`} key={useCase.id}>
                <div className="metric-card-top">
                  <p>Sample {useCase.number}</p>
                </div>
                <h2>{useCase.title}</h2>
                <p className="metric-trigger">Starts when {useCase.trigger}</p>
              </a>
            ))}
          </div>

          <section className="roster" aria-labelledby="roster-title">
            <p className="eyebrow">One fleet, separate computers</p>
            <h2 id="roster-title">
              Every rep can put a fleet to work.
            </h2>
            <p className="section-lede">
              The fleet is organized around customer work, not job titles. Each
              computer gets approved tools and returns an artifact for review.
            </p>
            <div className="roster-grid">
              {fleetLanes.map((lane) => (
                <article className="roster-card" key={lane.title}>
                  <div className="roster-computer" aria-hidden="true">
                    <header>
                      <i />
                      <i />
                      <i />
                    </header>
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>{lane.stage}</p>
                  <h3>{lane.title}</h3>
                  <span>{lane.body}</span>
                  <strong>{lane.value}</strong>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div id="jobs">
          {useCases.map((useCase) => (
            <UseCaseSection useCase={useCase} key={useCase.id} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden="true">
        <Image
          src="/brand/hpe-watercolor-orbit.svg"
          alt=""
          width={1600}
          height={420}
        />
      </div>

      <div className="report">
        <section id="compare" className="compare">
          <h2>Grok Bot comparison</h2>
          <p className="section-lede">
            A fleet starts from customer work, runs on separate computers, and
            returns a reviewable result.
          </p>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Capability</span>
                  </th>
                  <th scope="col">Grok Bot</th>
                  <th scope="col">Claude Cowork</th>
                  <th scope="col">ChatGPT</th>
                  <th scope="col">Perplexity</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td data-tool="Grok Bot">{row.fleet}</td>
                    <td data-tool="Claude Cowork">{row.ide}</td>
                    <td data-tool="ChatGPT">{row.computer}</td>
                    <td data-tool="Perplexity">{row.search}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="testimonials" className="quotes">
          <h2>What people are saying about Grok Bot</h2>
          <p className="section-lede">
            Six public reactions to agents that keep working.
          </p>
          <div className="quote-grid">
            {testimonials.map((testimonial) => (
              <article className="quote-card" key={testimonial.handle}>
                <header>
                  <span aria-hidden="true">{testimonial.initials}</span>
                  <p>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.handle}</small>
                  </p>
                </header>
                <blockquote>{testimonial.quote}</blockquote>
                <a
                  href={testimonial.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read source →
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div>
          <strong>Cursor for Hewlett Packard Enterprise</strong>
          <span>Grok Bot for HPE sales</span>
        </div>
        <address>
          <span>HPE&apos;s Cursor contact</span>
          <strong>Brian Fox</strong>
          <a href="mailto:brian.fox@cursor.com">brian.fox@cursor.com</a>
        </address>
      </footer>
    </main>
  );
}
