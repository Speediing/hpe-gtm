import Image from "next/image";
import { HPE_WORDMARK_URL } from "@/lib/site";

type BrandLockupProps = {
  size?: "sm" | "md";
};

export function BrandLockup({ size = "sm" }: BrandLockupProps) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      <Image
        src={HPE_WORDMARK_URL}
        alt="HPE"
        className="brand-hpe"
        width={512}
        height={146}
        priority
        unoptimized
      />
      <span className="brand-times" aria-hidden="true">
        ×
      </span>
      <Image
        src="/brand/spacexai.svg"
        alt="SpaceXAI"
        className="brand-sxai"
        width={1294}
        height={158}
        priority
      />
    </div>
  );
}
