"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NoorisysLogo } from "@/components/common/NoorisysLogo";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "About Us", href: "/#about" },
  { label: "Our Products", href: "/#products" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Contact Us", href: "/#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07111F]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2 sm:py-2.5"
          : "bg-[#07111F]/60 backdrop-blur-md border-b border-white/5 py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo: Noorisys */}
          <div className="flex items-center shrink-0">
            <NoorisysLogo variant="header" />
          </div>

          {/* Desktop Navigation (single line, no wrapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] whitespace-nowrap transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Primary Navigation CTA: Partner With Us */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#12CDB5] text-[#040810] text-xs font-bold hover:shadow-[0_0_20px_rgba(0,229,255,0.45)] hover:scale-[1.02] transition-all whitespace-nowrap"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/#contact"
              className="px-3.5 py-1.5 rounded-lg bg-[#00E5FF] text-[#040810] text-xs font-bold whitespace-nowrap"
            >
              Partner With Us
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#07111F]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-[#00E5FF] hover:bg-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#12CDB5] text-[#040810] text-sm font-bold"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
