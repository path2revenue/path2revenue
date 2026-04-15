"use client";

import { useState, useEffect, useRef } from "react";
import { useConfig } from "@/lib/use-config";
import SectionHeader from "./SectionHeader";

export default function Process() {
    const { process: data, design } = useConfig();
    const layout = design?.layout || "centered";
    const cardRadius = layout === "editorial" ? "rounded-xl" : layout === "minimal" ? "rounded-lg" : "rounded-2xl";
    const [vis, setVis] = useState([]);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const idx = refs.current.indexOf(entry.target);
                    if (idx !== -1) setVis((prev) => [...new Set([...prev, idx])]);
                }
            }),
            { threshold: 0.3 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="methode" className="py-16 px-6 bg-[var(--color-bg-surface)]/30">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader
                    eyebrow={data.eyebrow}
                    headline={data.headline}
                    highlightedText={data.highlightedText}
                    subtitle={data.subtitle}
                />

                {/* Steps grid */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
                    {data.steps.map((step, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            className={`relative ${vis.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transition: "all 0.6s ease-out", transitionDelay: `${i * 200}ms` }}
                        >
                            <div className={`relative bg-[var(--color-bg-card)] border border-[var(--color-border-default)] ${cardRadius} p-6 hover:border-[var(--color-accent)]/30 hover:shadow-2xl hover:shadow-[var(--color-accent-glow)] transition-all duration-500 cursor-pointer group overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient-from)]/5 to-[var(--color-gradient-to)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="relative z-10">
                                    {/* Step number */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border-hover)] group-hover:border-[var(--color-accent)]/40 flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                                            <span className="text-xl font-extrabold text-[var(--color-text-primary)] group-hover:bg-gradient-to-r group-hover:from-[var(--color-gradient-from)] group-hover:to-[var(--color-gradient-to)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                                {step.number || String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[var(--color-text-primary)] leading-snug group-hover:bg-gradient-to-r group-hover:from-[var(--color-gradient-from)] group-hover:to-[var(--color-gradient-to)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                                {step.title}
                                            </h3>
                                            {step.subtitle && (
                                                <p className="text-xs text-[var(--color-accent)] font-medium mt-0.5">
                                                    {step.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
