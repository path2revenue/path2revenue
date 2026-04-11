"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/site.config";
import LucideIcon from "./LucideIcon";
import SectionHeader from "./SectionHeader";

const layout = siteConfig.design?.layout || "centered";
const cardRadius = layout === "editorial" ? "rounded-xl" : layout === "minimal" ? "rounded-lg" : "rounded-2xl";
const gridCols = layout === "editorial" ? "md:grid-cols-2" : "md:grid-cols-2";
const badgeRadius = layout === "editorial" ? "rounded-md" : "rounded-full";

export default function PainPoints() {
    const { painPoints: data } = siteConfig;
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
            { threshold: 0.3 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="probleme" className="py-16 px-6">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader
                    eyebrow={data.eyebrow}
                    headline={data.headline}
                    highlightedText={data.highlightedText}
                    subtitle={data.subtitle}
                />

                <div className={`grid ${gridCols} gap-6`}>
                    {data.items.map((pain, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            className={`relative bg-[var(--color-bg-card)] border border-[var(--color-border-default)] ${cardRadius} p-7 hover:border-[var(--color-accent)]/30 hover:shadow-2xl hover:shadow-[var(--color-accent-glow)] transition-all duration-500 cursor-pointer group flex flex-col justify-between overflow-hidden ${visibleCards.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            {/* Dégradé doux de fond au survol */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient-from)]/5 to-[var(--color-gradient-to)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {layout === "editorial" || layout === "minimal" ? (
                                <div className="flex items-start gap-5 relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/40 flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                                        <LucideIcon name={pain.icon} size={22} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:scale-110" />
                                    </div>
                                    <div className="flex flex-col h-full">
                                        <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 leading-snug group-hover:bg-gradient-to-r group-hover:from-[var(--color-gradient-from)] group-hover:to-[var(--color-gradient-to)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{pain.title}</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5 group-hover:text-[var(--color-text-primary)] transition-colors duration-300">{pain.description}</p>
                                        <div className="mt-auto">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-bg-surface)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/30 ${badgeRadius} text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-all duration-300 font-medium shadow-sm`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] group-hover:animate-pulse" />
                                                {pain.stat}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/40 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                                        <LucideIcon name={pain.icon} size={24} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 leading-snug text-[var(--color-text-primary)] group-hover:bg-gradient-to-r group-hover:from-[var(--color-gradient-from)] group-hover:to-[var(--color-gradient-to)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{pain.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 group-hover:text-[var(--color-text-primary)] transition-colors duration-300">{pain.description}</p>
                                    
                                    <div className="mt-auto pt-2">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-bg-surface)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/30 ${badgeRadius} text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-all duration-300 font-medium shadow-sm`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] group-hover:animate-pulse" />
                                            {pain.stat}
                                        </div>
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
