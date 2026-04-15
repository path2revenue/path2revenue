"use client";

import { useEffect, useRef, useState } from "react";
import { useConfig } from "@/lib/use-config";
import SectionHeader from "./SectionHeader";
import LucideIcon from "./LucideIcon";

export default function PainPoints() {
    const { painPoints: data, design } = useConfig();
    const layout = design?.layout || "centered";
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const cardRadius = layout === "editorial" ? "rounded-xl" : layout === "minimal" ? "rounded-lg" : "rounded-2xl";

    return (
        <section id="probleme" ref={ref} className="py-16 px-6">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader
                    eyebrow={data.eyebrow}
                    headline={data.headline}
                    highlightedText={data.highlightedText}
                    subtitle={data.subtitle}
                />
                <div className="grid md:grid-cols-2 gap-5">
                    {data.items.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-[var(--color-bg-card)] border border-[var(--color-border-default)] ${cardRadius} p-6 hover:border-[var(--color-accent)]/30 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                                    <LucideIcon name={item.icon} size={20} className="text-[var(--color-accent)]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
                                    {item.stat && (
                                        <span className="inline-block mt-3 text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/8 px-2.5 py-1 rounded-full">
                                            {item.stat}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
