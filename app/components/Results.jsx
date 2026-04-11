"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";
import SectionHeader from "./SectionHeader";

const layout = siteConfig.design?.layout || "centered";
const cardRadius = layout === "editorial" ? "rounded-xl" : layout === "minimal" ? "rounded-lg" : "rounded-2xl";
const badgeRadius = layout === "editorial" ? "rounded-md" : "rounded-full";

export default function Results() {
    const { results: data } = siteConfig;
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="resultats" ref={sectionRef} className="py-16 px-6">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader
                    eyebrow={data.eyebrow}
                    headline={data.headline}
                    highlightedText={data.highlightedText}
                    subtitle={data.subtitle}
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.items.map((item, i) => (
                        <div
                            key={i}
                            className={`relative bg-[var(--color-bg-card)] border border-[var(--color-border-default)] ${cardRadius} p-7 hover:border-[var(--color-accent)]/30 hover:shadow-2xl hover:shadow-[var(--color-accent-glow)] transition-all duration-500 cursor-pointer group overflow-hidden flex flex-col ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient-from)]/5 to-[var(--color-gradient-to)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Metric callout */}
                            <div className="flex items-center gap-3 mb-6 relative z-10 w-full justify-between">
                                <span className="text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] group-hover:bg-gradient-to-r group-hover:from-[var(--color-gradient-from)] group-hover:to-[var(--color-gradient-to)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                    {item.metric}
                                </span>
                                {item.badge && (
                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-bg-surface)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/30 ${badgeRadius} text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-all duration-300 font-medium shadow-sm shrink-0`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] group-hover:animate-pulse" />
                                        {item.badge}
                                    </div>
                                )}
                            </div>

                            <div className="relative z-10 flex flex-col flex-1">
                                {/* Label */}
                                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-3 leading-snug group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                                    {item.label}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-text-primary)] transition-colors duration-300 mt-auto">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
