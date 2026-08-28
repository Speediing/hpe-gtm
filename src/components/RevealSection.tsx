"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealSectionProps = {
  id: string;
  className: string;
  children: ReactNode;
};

export function RevealSection({
  id,
  className,
  children,
}: RevealSectionProps) {
  const section = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = section.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={section}
      id={id}
      className={`${className} job-motion${revealed ? " is-revealed" : ""}`}
    >
      {children}
    </section>
  );
}
