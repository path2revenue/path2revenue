"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Linkedin } from "lucide-react";

export default function Honesty() {
    const { honesty: data } = siteConfig;
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    if (!data) return null;

    return (
        <section ref={ref} className="py-16 px-6">
            <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="text-center mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">{data.eyebrow}</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        {data.headline}{" "}
                        <span className="bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] bg-clip-text text-transparent">{data.highlightedText}</span>
                    </h2>
                </div>

                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-default)] rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row relative">
                    <div className="p-8 md:p-12 space-y-6 md:w-[45%] z-20 relative bg-[var(--color-bg-card)] md:bg-transparent">
                        {data.paragraphs.map((p, i) => (
                            <p key={i} className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
                                {p}
                            </p>
                        ))}
                        {data.signature && (
                            <div className="pt-6 border-t border-[var(--color-border-default)] flex items-center gap-4">
                                <div className="w-14 h-14 relative shrink-0">
                                    <Image 
                                        src="/photo_profil.jpg" 
                                        alt={data.signature.name} 
                                        fill
                                        className="rounded-full object-cover border border-[var(--color-accent)]/30 shadow-lg shadow-black/20" 
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold text-[var(--color-text-primary)]">{data.signature.name}</span>
                                        {data.signature.linkedin && (
                                            <a href={data.signature.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                    <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{data.signature.role}</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Image side */}
                    <div className="md:w-[55%] h-[400px] md:h-[600px] xl:h-auto relative shrink-0 overflow-hidden">
                        {/* Desktop Gradient: smooth transition from text to image */}
                        <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--color-bg-card)] via-[var(--color-bg-card)]/80 to-transparent z-10" />
                        
                        <Image 
                            src="/bilal_sitting_laptop.jpg" 
                            alt="Bilal EL-JINDI Portrait"
                            fill
                            priority
                            className="object-cover object-center md:object-[60%_center] hover:scale-105 transition-transform duration-1000 ease-out opacity-90" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
