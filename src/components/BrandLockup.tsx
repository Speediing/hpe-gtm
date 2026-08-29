export function BrandLockup({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
}) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/hpe-wordmark.svg"
        alt="Hewlett Packard Enterprise"
        className="brand-hpe"
        width="504"
        height="144"
      />
      <span className="brand-times" aria-hidden>
        ×
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/spacexai.svg"
        alt="SpaceXAI"
        className="brand-sxai"
        width="1294"
        height="158"
      />
    </div>
  );
}
