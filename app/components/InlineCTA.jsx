"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";

const layout = siteConfig.design?.layout || "centered";
const btnRadius = layout === "editorial" ? "rounded-xl" : layout === "minimal" ? "rounded-lg" : "rounded-full";

function resolveHref(href) {
    return href === "__whatsapp__" ? siteConfig.links.whatsapp : href;
}

const WhatsAppIcon = () => (
    <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

/**
 * InlineCTA — Lightweight intermediate call-to-action banner.
 * Reads its config from siteConfig.inlineCTAs[variant].
 * 
 * Usage in sections order: "inlineCTA1", "inlineCTA2"
 */
export default function InlineCTA({ variant = "1" }) {
    const data = siteConfig.inlineCTAs?.[variant];
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    if (!data) return null;

    return (
        <section
            ref={ref}
            className="py-12 px-6 relative overflow-hidden"
        >
            {/* Subtle accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

            <div
                className={`relative max-w-[640px] mx-auto text-center transition-all duration-600 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
                {/* Headline */}
                {data.text && (
                    <p className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] mb-5 leading-snug">
                        {data.text}
                        {data.highlightedText && (
                            <span className="bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] bg-clip-text text-transparent">
                                {" "}{data.highlightedText}
                            </span>
                        )}
                    </p>
                )}

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    {data.ctas?.map((cta, i) => (
                        <a
                            key={i}
                            href={resolveHref(cta.href)}
                            target={cta.href === "__whatsapp__" ? "_blank" : undefined}
                            rel={cta.href === "__whatsapp__" ? "noopener noreferrer" : undefined}
                            className={
                                cta.style === "primary"
                                    ? `group px-6 py-3 bg-[var(--color-cta)] text-[var(--color-bg-primary)] font-semibold ${btnRadius} text-sm hover:bg-[var(--color-cta-hover)] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_0_0_var(--color-cta-glow)] hover:shadow-[0_6px_20px_var(--color-cta-glow)]`
                                    : `group flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-border-hover)] text-[var(--color-text-secondary)] ${btnRadius} text-sm ${
                                        cta.icon === "whatsapp"
                                            ? "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                                            : "hover:bg-white hover:text-black hover:border-white"
                                    } transition-all duration-300`
                            }
                        >
                            {cta.icon === "whatsapp" && <WhatsAppIcon />}
                            {cta.text}
                            {cta.arrow && (
                                <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Optional micro-copy */}
                {data.microcopy && (
                    <p className="mt-3 text-xs text-[var(--color-text-muted)]">{data.microcopy}</p>
                )}
            </div>
        </section>
    );
}
