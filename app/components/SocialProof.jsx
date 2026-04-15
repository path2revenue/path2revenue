"use client";

import { useConfig } from "@/lib/use-config";

export default function SocialProof() {
    const { socialProof } = useConfig();
    if (!socialProof?.items?.length) return null;

    // Triple les items pour un scroll continu sans gap visible
    const tripled = [...socialProof.items, ...socialProof.items, ...socialProof.items];

    return (
        <section className="py-12 overflow-hidden border-y border-[var(--color-border-default)] bg-[var(--color-bg-surface)]/50">
            {socialProof.eyebrow && (
                <p className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)] mb-8">
                    {socialProof.eyebrow}
                </p>
            )}

            {/* Marquee container — full width, no max-w constraint */}
            <div className="relative w-full">
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent" />

                {/* Scrolling track */}
                <div
                    className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]"
                >
                    {tripled.map((item, i) => {
                        const isObj = typeof item === "object";
                        const text = isObj ? item.text : item;
                        const img = isObj ? item.image : null;
                        const desc = isObj ? item.description : null;

                        return (
                            <div
                                key={i}
                                className="flex items-center gap-4 mx-10 sm:mx-14 shrink-0"
                            >
                                {img && (
                                    <img
                                        src={img}
                                        alt={text || "client"}
                                        width={48}
                                        height={48}
                                        className="rounded-lg object-contain w-12 h-12 p-1.5 bg-white/5 ring-1 ring-[var(--color-border-default)]"
                                    />
                                )}
                                <div className="whitespace-nowrap">
                                    <span className="text-base font-semibold text-[var(--color-text-primary)]">
                                        {text}
                                    </span>
                                    {desc && (
                                        <p className="text-xs text-[var(--color-text-muted)] leading-tight mt-0.5">
                                            {desc}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
