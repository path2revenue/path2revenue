"use client";

import { useEffect, useRef, useState } from "react";
import { useConfig } from "@/lib/use-config";
import SectionHeader from "./SectionHeader";
import LucideIcon from "./LucideIcon";

export default function Services() {
    const { services: data, design } = useConfig();
    const layout = design?.layout || "centered";
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const cardRadius = layout === "editorial" ? "rounded-xl" : layout === "minimal" ? "rounded-lg" : "rounded-2xl";

    return (
        <section id="services" ref={ref} className="py-16 px-6 bg-[var(--color-bg-surface)]/30">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader
                    eyebrow={data.eyebrow}
                    headline={data.headline}
                    highlightedText={data.highlightedText}
                    headlineEnd={data.headlineEnd}
                    subtitle={data.subtitle}
                />
                <div className="grid md:grid-cols-3 gap-5">
                    {data.items.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-[var(--color-bg-card)] border border-[var(--color-border-default)] ${cardRadius} p-6
                                transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:-translate-y-1
                                ${item.span === 3 ? "md:col-span-3" : ""} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                                    <LucideIcon name={item.icon} size={20} className="text-[var(--color-accent)]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="font-bold text-[var(--color-text-primary)]">{item.title}</h3>
                                        {item.badge && (
                                            <span className="text-[10px] font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/8 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap mt-0.5">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
