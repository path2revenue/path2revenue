"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";
import LucideIcon from "./LucideIcon";
import SectionHeader from "./SectionHeader";

const layout = siteConfig.design?.layout || "centered";
const cardRadius = layout === "editorial" ? "rounded-xl" : layout === "minimal" ? "rounded-lg" : "rounded-2xl";
const gridCols = layout === "editorial" ? "md:grid-cols-2" : layout === "minimal" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3";
const badgeRadius = layout === "editorial" ? "rounded-md" : "rounded-full";

export default function Services() {
    const { services: data } = siteConfig;
    const [visibleCards, setVisibleCards] = useState([]);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = refs.current.indexOf(entry.target);
                        if (idx !== -1) setVisibleCards((prev) => [...new Set([...prev, idx])]);
                    }
                });
            },
            { threshold: 0.2 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="py-16 px-6 bg-[var(--color-bg-surface)]/30">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader
                    eyebrow={data.eyebrow}
                    headline={data.headline}
                    highlightedText={data.highlightedText}
                    headlineEnd={data.headlineEnd}
                    subtitle={data.subtitle}
                />

                <div className={`grid ${gridCols} gap-6`}>
                    {data.items.map((svc, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            className={`relative bg-[var(--color-bg-card)] border border-[var(--color-border-default)] ${cardRadius} p-7 hover:border-[var(--color-accent)]/30 hover:shadow-2xl hover:shadow-[var(--color-accent-glow)] transition-all duration-500 cursor-pointer group flex flex-col overflow-hidden ${svc.span === 3 && layout === "centered" ? "md:col-span-2 lg:col-span-3" : svc.span === 2 && layout === "centered" ? "md:col-span-2" : ""
                                } ${visibleCards.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient-from)]/5 to-[var(--color-gradient-to)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {layout === "editorial" ? (
                                /* ─ Editorial: horizontal icon + text ─ */
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/40 flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                                        <LucideIcon name={svc.icon} size={22} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:scale-110" />
                                    </div>
                                    <div className="flex flex-col h-full">
                                        <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1.5 leading-snug group-hover:bg-gradient-to-r group-hover:from-[var(--color-gradient-from)] group-hover:to-[var(--color-gradient-to)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{svc.title}</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-text-primary)] transition-colors duration-300">{svc.description}</p>
                                        <div className="mt-4">
                                            {svc.badge && (
                                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-bg-surface)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/30 ${badgeRadius} text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-all duration-300 font-medium shadow-sm`}>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] group-hover:animate-pulse" />
                                                    {svc.badge}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* ─ Centered / Minimal: icon on top ─ */
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/40 flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm">
                                        <LucideIcon name={svc.icon} size={22} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2 leading-snug group-hover:bg-gradient-to-r group-hover:from-[var(--color-gradient-from)] group-hover:to-[var(--color-gradient-to)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{svc.title}</h3>
                                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-text-primary)] transition-colors duration-300">{svc.description}</p>
                                    
                                    <div className="mt-auto pt-4">
                                        {svc.badge && (
                                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-bg-surface)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/30 ${badgeRadius} text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-all duration-300 font-medium shadow-sm`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] group-hover:animate-pulse" />
                                                {svc.badge}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
