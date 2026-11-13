import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: "header" | "footer" | "standalone";
}

export const NoorisysLogo: React.FC<LogoProps> = ({
  className = "",
  variant = "header",
}) => {
  const isFooter = variant === "footer";
  const isStandalone = variant === "standalone";

  return (
    <Link
      href="/#hero"
      className={`group inline-flex items-center transition-all duration-200 hover:opacity-95 ${className}`}
      aria-label="Noorisys Technologies Homepage"
    >
      {/* Official Noorisys Healthcare Brandmark */}
      <div
        className={`relative flex items-center rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/30 group-hover:shadow-[0_4px_24px_rgba(0,229,255,0.45)] group-hover:scale-[1.02] transition-all duration-200 ${
          isFooter
            ? "px-5 py-3 sm:px-6 sm:py-3.5"
            : isStandalone
            ? "px-4.5 py-2.5 sm:px-5 sm:py-3"
            : "px-4 py-2 sm:px-5 sm:py-2.5"
        }`}
      >
        <img
          src="/logos/noorisys-logo.png"
          alt="Noorisys Technologies"
          className={`${
            isFooter
              ? "h-12 sm:h-16 md:h-18 w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[360px]"
              : isStandalone
              ? "h-11 sm:h-13 md:h-14 w-auto max-w-[230px] sm:max-w-[270px] md:max-w-[300px]"
              : "h-10 sm:h-12 md:h-14 w-auto max-w-[210px] sm:max-w-[250px] md:max-w-[290px]"
          } object-contain`}
        />
      </div>
    </Link>
  );
};
