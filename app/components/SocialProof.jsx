"use client";

import { siteConfig } from "@/site.config";

export default function SocialProof() {
    const { socialProof } = siteConfig;
    if (!socialProof?.items?.length) return null;

    const doubled = [...socialProof.items, ...socialProof.items];

    return (
        <section className="py-8 overflow-hidden border-y border-[var(--color-border-default)] bg-[var(--color-bg-surface)]/50">
            <div className="flex animate-[marquee_35s_linear_infinite] whitespace-nowrap">
                {doubled.map((item, i) => {
                    const isObj = typeof item === "object";
                    const text = isObj ? item.text : item;
                    const img = isObj ? item.image : null;

                    return (
                        <span
                            key={i}
                            className="inline-flex items-center gap-4 mx-10 text-base text-[var(--color-text-secondary)] font-medium shrink-0"
                        >
                            {img && (
                                <img
                                    src={img}
                                    alt={text.split("·")[0]?.trim() || "client"}
                                    width={36}
                                    height={36}
                                    className="rounded-full object-cover w-9 h-9 ring-1 ring-[var(--color-border-default)]"
                                />
                            )}
                            {text}
                        </span>
                    );
                })}
            </div>
        </section>
    );
}
