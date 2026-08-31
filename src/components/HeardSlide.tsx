import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <article className="heard-slide">
        <header className="heard-bar">
          <span>HPE customer call brief</span>
          <span>Draft for review</span>
        </header>
        <div className="heard-main">
          <h3>Customer priorities</h3>
          <ol>
            {slides
              .filter((slide) => slide.voice === "them")
              .map((slide) => (
                <li key={slide.n}>
                  <p className="heard-tag">{slide.kicker}</p>
                  <p className="heard-quote">
                    <strong>{slide.title}.</strong> {slide.body}
                  </p>
                </li>
              ))}
          </ol>
        </div>
        <div className="heard-map">
          <p>HPE path</p>
          <ul>
            {slides
              .filter((slide) => slide.voice !== "them")
              .map((slide) => (
                <li key={slide.n}>
                  <strong>{slide.title}.</strong> {slide.body}
                </li>
              ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
