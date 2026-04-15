"use client";

import { useConfig } from "@/lib/use-config";

export default function SocialProof() {
    const { socialProof } = useConfig();

    if (!socialProof?.items?.length) return null;
    return (
        <section className="py-10 px-6 border-y border-[var(--color-border-default)]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{socialProof.eyebrow}</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
                    {socialProof.items.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group" title={item.description}>
                            {item.image ? (
                                <img src={item.image} alt={item.text} className="h-8 md:h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                            ) : (
                                <span className="text-sm font-semibold text-[var(--color-text-secondary)]">{item.text}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
