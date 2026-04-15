"use client";

import { useEffect, useRef, useState } from "react";
import { useConfig } from "@/lib/use-config";
import SectionHeader from "./SectionHeader";

export default function Results() {
    const { results: data, design } = useConfig();
    const layout = design?.layout || "centered";
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    const cardRadius = layout === "editorial" ? "rounded-xl" : layout === "minimal" ? "rounded-lg" : "rounded-2xl";

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="resultats" ref={ref} className="py-16 px-6">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader
                    eyebrow={data.eyebrow}
                    headline={data.headline}
                    highlightedText={data.highlightedText}
                    subtitle={data.subtitle}
                />
                <div className="grid md:grid-cols-3 gap-5">
                    {data.items.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-[var(--color-bg-card)] border border-[var(--color-border-default)] ${cardRadius} p-6 transition-all duration-500 hover:border-[var(--color-accent)]/30 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <div className="text-2xl font-extrabold bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] bg-clip-text text-transparent mb-2">
                                {item.metric}
                            </div>
                            <h3 className="font-semibold text-[var(--color-text-primary)] mb-2 text-sm">{item.label}</h3>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{item.description}</p>
                            {item.badge && (
                                <span className="inline-block text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/8 px-2.5 py-1 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
