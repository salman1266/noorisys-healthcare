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
              ? "h-11 sm:h-13 md:h-15 w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[360px]"
              : isStandalone
              ? "h-10 sm:h-12 md:h-13 w-auto max-w-[230px] sm:max-w-[270px] md:max-w-[300px]"
              : "h-9 sm:h-10 md:h-11 w-auto max-w-[210px] sm:max-w-[250px] md:max-w-[280px]"
          } object-contain`}
        />
      </div>
    </Link>
  );
};
