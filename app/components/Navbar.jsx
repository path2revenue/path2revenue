"use client";

import { useState, useEffect } from "react";
import { useConfig } from "@/lib/use-config";

export default function Navbar() {
    const { navbar, design } = useConfig();
    const layout = design?.layout || "centered";

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-border-default)] shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 text-lg font-bold shrink-0">
                    {navbar.logo?.image ? (
                        <img
                            src={navbar.logo.image}
                            alt={navbar.logo?.text || "Logo"}
                            className="h-7 w-auto"
                        />
                    ) : (
                        navbar.logo?.emoji && <span className="text-xl">{navbar.logo.emoji}</span>
                    )}
                    <span className={`${layout === "editorial" ? "tracking-tight" : ""}`}>
                        {navbar.logo?.text}
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {navbar.links?.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}

                    {navbar.cta && (
                        <a
                            href={navbar.cta.href}
                            className="px-5 py-2.5 bg-[var(--color-cta)] text-[var(--color-cta-text)] rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            {navbar.cta.text}
                        </a>
                    )}
                </div>

                {/* Mobile hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex flex-col gap-1.5 p-2 cursor-pointer"
                        aria-label="Menu"
                    >
                        <span className={`w-5 h-0.5 bg-[var(--color-text-primary)] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-5 h-0.5 bg-[var(--color-text-primary)] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`w-5 h-0.5 bg-[var(--color-text-primary)] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[var(--color-bg-primary)] border-t border-[var(--color-border-default)] px-6 py-4 space-y-3 animate-[fadeInUp_0.3s_ease-out]">
                    {navbar.links?.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] py-1.5"
                        >
                            {link.label}
                        </a>
                    ))}
                    {navbar.cta && (
                        <a
                            href={navbar.cta.href}
                            onClick={() => setMobileOpen(false)}
                            className="block w-full text-center px-5 py-2.5 bg-[var(--color-cta)] text-[var(--color-cta-text)] rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
                        >
                            {navbar.cta.text}
                        </a>
                    )}
                </div>
            )}
        </nav>
    );
}

