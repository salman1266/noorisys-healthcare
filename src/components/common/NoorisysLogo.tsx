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
      <div className="relative flex items-center group-hover:scale-[1.02] transition-transform duration-200">
        <img
          src="/logos/noorisys-logo.png"
          alt="Noorisys Technologies"
          className={`${
            isFooter
              ? "h-14 sm:h-16 md:h-20 lg:h-22 w-auto max-w-[320px] sm:max-w-[380px] md:max-w-[440px]"
              : isStandalone
              ? "h-12 sm:h-14 md:h-16 w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[380px]"
              : "h-12 sm:h-14 md:h-16 lg:h-18 w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]"
          } object-contain`}
        />
      </div>
    </Link>
  );
};
