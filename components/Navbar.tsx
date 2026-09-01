"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CONTRACTOR_DATA, buildWhatsAppEmergencyUrl } from "@/lib/contractor-data";
import {
  Flame,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sun,
  Moon,
  Menu,
  X,
  Clock,
  Sparkles,
  MapPin
} from "lucide-react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: "Emergency Triage", href: "#triage" },
    { label: "Services", href: "#services" },
    { label: "Boiler Brands", href: "#brands" },
    { label: "Fixed Pricing", href: "#pricing" },
    { label: "Bolton Coverage", href: "#coverage" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gas Make-Safe", href: "#gas-safe-guide" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-navy-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand ID */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
            aria-label="GasLegend Emergency Heating & Plumbing Homepage"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-flame-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 flex-shrink-0 group-hover:scale-105 transition-transform">
              <Flame className="w-7 h-7 text-slate-950 fill-current" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  Gas<span className="text-amber-500 dark:text-amber-400">Legend</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700/60 text-amber-800 dark:text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  Gas Safe #{CONTRACTOR_DATA.gasSafeRegisterNumber}
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                24/7 Bolton & Greater Manchester Emergency Plumber
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1.5 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" aria-hidden="true" />
                )}
              </button>
            )}

            {/* WhatsApp Quick SOS */}
            <a
              href={buildWhatsAppEmergencyUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#128C7E] dark:text-[#25D366] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              aria-label="WhatsApp SOS Dispatch"
            >
              <MessageSquare className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>WhatsApp SOS</span>
            </a>

            {/* Direct Phone Callout CTA */}
            <a
              href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-flame-500 hover:from-amber-300 hover:to-flame-400 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              aria-label={`Call Emergency Gas Line directly at ${CONTRACTOR_DATA.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-slate-950 fill-current animate-pulse" aria-hidden="true" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] uppercase font-black tracking-wider text-slate-900 opacity-80">24/7 Rapid Call</span>
                <span className="text-sm font-black">{CONTRACTOR_DATA.phoneDisplay}</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle Theme"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1 font-semibold text-amber-500">
              <ShieldCheck className="w-4 h-4" /> Gas Safe Register #{CONTRACTOR_DATA.gasSafeRegisterNumber}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 30-45m Avg Response
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800/80 hover:text-amber-600 dark:hover:text-amber-400 transition-colors border border-transparent hover:border-amber-200 dark:hover:border-slate-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-flame-500 shadow-md text-base"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call Emergency Gas Engineer: {CONTRACTOR_DATA.phoneDisplay}
            </a>

            <a
              href={buildWhatsAppEmergencyUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Send WhatsApp SOS with Boiler Photo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
