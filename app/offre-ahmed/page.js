import Link from "next/link";

export const metadata = {
    title: "Offre White-Label · SBS × Path2Revenue",
    description: "Grille tarifaire white-label pour StarsBridgesSystem.",
    robots: "noindex, nofollow",
};

/* ═══════════════════════════════════════════════════════
   DATA — Services white-label, tarifs grossiste + revente
   ═══════════════════════════════════════════════════════ */
const services = [
    {
        category: "🎯 Stratégie & Positionnement",
        description: "Fondations stratégiques pour chaque client d'Ahmed.",
        items: [
            {
                service: "Définition ICP & Positionnement",
                scope: [
                    "Analyse du marché cible et segmentation",
                    "Identification des personas décisionnaires",
                    "Critères de qualification / disqualification",
                    "Positionnement et proposition de valeur",
                    "Document ICP final livré (brandable SBS)",
                ],
                whiteLabel: 500,
                suggested: 1200,
            },
            {
                service: "Structuration de l'Offre",
                scope: [
                    "Construction de l'offre (naming, pricing, tiers)",
                    "Différenciateurs et matrice concurrentielle",
                    "One-pager / pitch deck (aux couleurs du client)",
                    "Recommandations canaux d'acquisition",
                ],
                whiteLabel: 450,
                suggested: 1000,
            },
        ],
    },
    {
        category: "🌐 Présence Digitale",
        description: "Site, CRM et tracking — prêt à convertir.",
        items: [
            {
                service: "Landing Page Premium",
                scope: [
                    "Design et développement Next.js sur mesure",
                    "Responsive mobile-first, SEO optimisé",
                    "Animations et micro-interactions premium",
                    "Formulaire de booking intégré (GHL ou Calendly)",
                    "Déploiement Vercel + domaine du client configuré",
                    "Itérations illimitées jusqu'à validation",
                ],
                whiteLabel: 1200,
                suggested: 3000,
            },
            {
                service: "Configuration GHL Complète",
                scope: [
                    "Setup CRM : contacts, tags, custom fields",
                    "Pipeline de vente avec stages et automations",
                    "Calendrier de booking (iframe + widget)",
                    "Formulaires de capture (landing + standalone)",
                    "Notifications email/SMS automatiques",
                    "Connexion domaine et DNS du client",
                ],
                whiteLabel: 600,
                suggested: 1500,
            },
            {
                service: "Meta Pixel + Conversions API (CAPI)",
                scope: [
                    "Installation Meta Pixel (client-side)",
                    "API Route serveur pour CAPI (server-side)",
                    "Dual tracking avec déduplication event_id",
                    "Événements customs configurés",
                    "Test et validation dans Events Manager",
                ],
                whiteLabel: 250,
                suggested: 600,
            },
        ],
    },
    {
        category: "⚡ Acquisition & Automatisation",
        description: "Lead gen, nurturing et ads — tout en autopilote.",
        items: [
            {
                service: "Système de Prospection",
                scope: [
                    "Définition des canaux d'acquisition",
                    "Setup outil d'outreach (Lemlist ou équivalent)",
                    "Séquences multicanal (email, LinkedIn, SMS)",
                    "Enrichissement de données prospects",
                    "Scoring et priorisation des leads",
                    "Documentation du process pour réplication",
                ],
                whiteLabel: 900,
                suggested: 2200,
            },
            {
                service: "Automatisations Business",
                scope: [
                    "Workflows lead nurturing (GHL / n8n)",
                    "Relances automatiques no-show / no-decision",
                    "Notifications sur événements clés",
                    "Webhooks et intégrations tierces",
                    "Documentation technique de chaque workflow",
                ],
                whiteLabel: 800,
                suggested: 1800,
            },
            {
                service: "Setup Meta Ads Initial",
                scope: [
                    "Création / configuration Business Manager",
                    "Structure de campagne recommandée",
                    "Audiences cibles (cold, warm, retargeting)",
                    "Premiers visuels et copy d'ads",
                    "Connexion pixel + events de conversion",
                    "Guide d'optimisation et de scaling",
                ],
                whiteLabel: 350,
                suggested: 800,
            },
        ],
    },
    {
        category: "📋 Documentation & Ops",
        description: "Tout documenté. Rien ne repose sur la mémoire.",
        items: [
            {
                service: "Documentation & SOPs",
                scope: [
                    "SOP pour chaque process mis en place",
                    "Guide d'utilisation GHL (pour le client + équipe)",
                    "Procédures de maintenance et troubleshooting",
                    "Vidéos Loom explicatives si nécessaire",
                    "Livrés aux couleurs SBS (white-label)",
                ],
                whiteLabel: 400,
                suggested: 900,
            },
        ],
    },
];

const retainer = {
    service: "Maintenance & Itérations Mensuelles",
    scope: [
        "Maintenance technique (site, GHL, automations)",
        "Itérations et optimisations continues",
        "Support prioritaire WhatsApp / Slack",
        "Ajustements copy, design, workflows",
        "Nouveaux workflows ou automations (raisonnable)",
    ],
    whiteLabel: 250,
    suggested: 550,
};

const fmt = (n) => n.toLocaleString("fr-FR") + " €";
const pct = (wl, sugg) => Math.round(((sugg - wl) / sugg) * 100);

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function OffreAhmed() {
    const allItems = services.flatMap((s) => s.items);
    const totalWL = allItems.reduce((s, i) => s + i.whiteLabel, 0);
    const totalSugg = allItems.reduce((s, i) => s + i.suggested, 0);
    const totalMargin = totalSugg - totalWL;
    const marginPct = Math.round((totalMargin / totalSugg) * 100);

    return (
        <div className="min-h-screen bg-[#0A0F1C] text-[#E2E8F0]">
            {/* Header */}
            <header className="border-b border-[#1E293B]/60 py-6 px-6">
                <div className="max-w-[1100px] mx-auto flex items-center justify-between">
                    <Link href="/" className="text-sm text-[#64748B] hover:text-white transition">
                        ← Path2Revenue
                    </Link>
                    <span className="text-xs text-[#475569] tracking-wider uppercase">Confidentiel · White-Label</span>
                </div>
            </header>

            <main className="max-w-[1100px] mx-auto px-6 py-16">
                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#334155] text-xs uppercase tracking-widest text-[#94A3B8] mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
                        Partenariat White-Label
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        SBS{" "}
                        <span className="bg-gradient-to-r from-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent">
                            × Path2Revenue
                        </span>
                    </h1>
                    <p className="text-lg text-[#94A3B8] max-w-[700px] mx-auto leading-relaxed">
                        Ahmed, voici tes tarifs grossiste. Tu revends ces services à tes clients sous ta marque SBS.
                        Je livre, tu factures, tu gardes ta marge.
                    </p>
                </div>

                {/* How it works */}
                <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 mb-16">
                    <h2 className="text-lg font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        🤝 Comment ça marche
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                        <div className="space-y-2">
                            <div className="text-[#A78BFA] font-semibold">1. Ahmed vend</div>
                            <p className="text-[#94A3B8]">Tu proposes les services à tes clients sous ta marque StarsBridgesSystem, au tarif que tu décides.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[#60A5FA] font-semibold">2. Bilal livre</div>
                            <p className="text-[#94A3B8]">Je réalise le travail technique en back : landing pages, GHL, automations, prospection, ads. Invisible pour le client final.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[#22C55E] font-semibold">3. SBS facture</div>
                            <p className="text-[#94A3B8]">Tu factures ton client au tarif que tu veux. La différence = ta marge. Tu gères la relation client, le closing et le suivi.</p>
                        </div>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 text-center">
                        <div className="text-sm text-[#64748B] mb-2 uppercase tracking-wider">Ton Coût (White-Label)</div>
                        <div className="text-3xl font-bold text-[#A78BFA]">{fmt(totalWL)}</div>
                        <div className="text-xs text-[#64748B] mt-1">+ {fmt(retainer.whiteLabel)}/mois</div>
                    </div>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 text-center">
                        <div className="text-sm text-[#64748B] mb-2 uppercase tracking-wider">Revente Suggérée</div>
                        <div className="text-3xl font-bold text-[#60A5FA]">{fmt(totalSugg)}</div>
                        <div className="text-xs text-[#64748B] mt-1">+ {fmt(retainer.suggested)}/mois</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#1a2e1a] to-[#111827] border-2 border-[#22C55E]/50 rounded-2xl p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#22C55E] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            {marginPct}% marge
                        </div>
                        <div className="text-sm text-[#22C55E] mb-2 uppercase tracking-wider font-semibold">Ta Marge / Client</div>
                        <div className="text-4xl font-bold text-[#22C55E]">{fmt(totalMargin)}</div>
                        <div className="text-xs text-[#22C55E]/70 mt-1">+ {fmt(retainer.suggested - retainer.whiteLabel)}/mois</div>
                    </div>
                </div>

                {/* Scope — what Bilal does vs doesn't */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8">
                        <h3 className="text-sm text-[#22C55E] font-semibold uppercase tracking-wider mb-4">✅ Ce que je prends en charge</h3>
                        <ul className="space-y-2 text-sm text-[#94A3B8]">
                            {[
                                "Landing pages & sites sur mesure",
                                "Configuration GHL complète",
                                "Meta Pixel + CAPI tracking",
                                "Systèmes de prospection",
                                "Automatisations et workflows",
                                "Setup Meta Ads initial",
                                "ICP, positionnement et offre",
                                "Documentation & SOPs",
                                "Maintenance technique mensuelle",
                            ].map((t, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="text-[#22C55E] shrink-0">✓</span> {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8">
                        <h3 className="text-sm text-[#EF4444] font-semibold uppercase tracking-wider mb-4">❌ Ce qui reste côté SBS (Ahmed)</h3>
                        <ul className="space-y-2 text-sm text-[#94A3B8]">
                            {[
                                "Relation client et communication",
                                "Closing et négociation",
                                "Scripts d'appel discovery et vente",
                                "Coaching et formation commerciale",
                                "Facturation et encaissement",
                                "Suivi satisfaction client",
                                "Upsell et renouvellement",
                            ].map((t, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="text-[#475569] shrink-0">→</span> {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Service Cards */}
                {services.map((cat, ci) => (
                    <div key={ci} className="mb-14">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-2xl">{cat.category.split(" ")[0]}</span>
                            <div>
                                <h2 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {cat.category.split(" ").slice(1).join(" ")}
                                </h2>
                                <p className="text-xs text-[#94A3B8] mt-0.5">{cat.description}</p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {cat.items.map((item, ii) => {
                                const margin = item.suggested - item.whiteLabel;
                                return (
                                    <div key={ii} className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-4">
                                            <h3 className="text-base font-semibold text-white">{item.service}</h3>
                                            <div className="flex items-center gap-3 shrink-0 flex-wrap">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-[10px] text-[#64748B] uppercase">Ton coût</span>
                                                    <span className="text-lg font-bold text-[#A78BFA]">{fmt(item.whiteLabel)}</span>
                                                </div>
                                                <span className="text-[#334155]">→</span>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-[10px] text-[#64748B] uppercase">Revente</span>
                                                    <span className="text-lg font-bold text-[#60A5FA]">{fmt(item.suggested)}</span>
                                                </div>
                                                <span className="text-xs bg-[#22C55E]/15 text-[#22C55E] px-2 py-1 rounded-full font-semibold">
                                                    +{fmt(margin)} marge
                                                </span>
                                            </div>
                                        </div>

                                        {/* Scope */}
                                        <div className="border-t border-[#1E293B] px-6 py-4 bg-[#0D1321]">
                                            <div className="text-[10px] text-[#64748B] uppercase tracking-wider mb-2 font-semibold">Ce que je livre</div>
                                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-1.5">
                                                {item.scope.map((s, si) => (
                                                    <li key={si} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                                                        <span className="text-[#A78BFA] mt-0.5 shrink-0">✓</span>
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Retainer */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl">🔄</span>
                        <div>
                            <h2 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Retainer Mensuel
                            </h2>
                            <p className="text-xs text-[#94A3B8] mt-0.5">Maintenance continue, par client actif. Sans engagement.</p>
                        </div>
                    </div>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-4">
                            <h3 className="text-base font-semibold text-white">{retainer.service}</h3>
                            <div className="flex items-center gap-3 shrink-0 flex-wrap">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] text-[#64748B] uppercase">Ton coût</span>
                                    <span className="text-lg font-bold text-[#A78BFA]">{fmt(retainer.whiteLabel)}/m</span>
                                </div>
                                <span className="text-[#334155]">→</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] text-[#64748B] uppercase">Revente</span>
                                    <span className="text-lg font-bold text-[#60A5FA]">{fmt(retainer.suggested)}/m</span>
                                </div>
                                <span className="text-xs bg-[#22C55E]/15 text-[#22C55E] px-2 py-1 rounded-full font-semibold">
                                    +{fmt(retainer.suggested - retainer.whiteLabel)}/m
                                </span>
                            </div>
                        </div>
                        <div className="border-t border-[#1E293B] px-6 py-4 bg-[#0D1321]">
                            <div className="text-[10px] text-[#64748B] uppercase tracking-wider mb-2 font-semibold">Inclus</div>
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-1.5">
                                {retainer.scope.map((s, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                                        <span className="text-[#A78BFA] mt-0.5 shrink-0">✓</span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Recap Table */}
                <div className="mb-16">
                    <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        📊 Récapitulatif par Client
                    </h2>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#1E293B] text-[#64748B] uppercase tracking-wider text-xs">
                                        <th className="text-left p-4">Service</th>
                                        <th className="text-right p-4">Ton Coût</th>
                                        <th className="text-right p-4">Revente Sugg.</th>
                                        <th className="text-right p-4">Ta Marge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allItems.map((item, i) => (
                                        <tr key={i} className="border-b border-[#1E293B]/50 hover:bg-[#1E293B]/20 transition">
                                            <td className="p-4 text-[#E2E8F0]">{item.service}</td>
                                            <td className="p-4 text-right text-[#A78BFA] font-semibold">{fmt(item.whiteLabel)}</td>
                                            <td className="p-4 text-right text-[#60A5FA]">{fmt(item.suggested)}</td>
                                            <td className="p-4 text-right text-[#22C55E] font-semibold">+{fmt(item.suggested - item.whiteLabel)}</td>
                                        </tr>
                                    ))}
                                    <tr className="border-b border-[#1E293B]/50 hover:bg-[#1E293B]/20 transition">
                                        <td className="p-4 text-[#E2E8F0]">{retainer.service} <span className="text-[#64748B] text-xs">/mois</span></td>
                                        <td className="p-4 text-right text-[#A78BFA] font-semibold">{fmt(retainer.whiteLabel)}/m</td>
                                        <td className="p-4 text-right text-[#60A5FA]">{fmt(retainer.suggested)}/m</td>
                                        <td className="p-4 text-right text-[#22C55E] font-semibold">+{fmt(retainer.suggested - retainer.whiteLabel)}/m</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="bg-[#0D1321] font-bold text-base">
                                        <td className="p-5 text-white">TOTAL SETUP (one-time)</td>
                                        <td className="p-5 text-right text-[#A78BFA]">{fmt(totalWL)}</td>
                                        <td className="p-5 text-right text-[#60A5FA]">{fmt(totalSugg)}</td>
                                        <td className="p-5 text-right text-[#22C55E]">+{fmt(totalMargin)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Example: client scenario */}
                <div className="mb-16">
                    <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        💡 Exemple Concret — 1 Client
                    </h2>
                    <div className="bg-gradient-to-br from-[#1a2035] to-[#111827] border border-[#1E293B] rounded-2xl p-8">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-sm text-[#64748B] mb-1">Ahmed facture le client</div>
                                <div className="text-3xl font-bold text-[#60A5FA]">{fmt(totalSugg)}</div>
                                <div className="text-xs text-[#64748B] mt-1">Pack Lancement Complet</div>
                            </div>
                            <div>
                                <div className="text-sm text-[#64748B] mb-1">Ahmed paye Bilal</div>
                                <div className="text-3xl font-bold text-[#A78BFA]">{fmt(totalWL)}</div>
                                <div className="text-xs text-[#64748B] mt-1">Tarif White-Label</div>
                            </div>
                            <div>
                                <div className="text-sm text-[#64748B] mb-1">Ahmed garde</div>
                                <div className="text-3xl font-bold text-[#22C55E]">{fmt(totalMargin)}</div>
                                <div className="text-xs text-[#22C55E]/70 mt-1">{marginPct}% de marge nette</div>
                            </div>
                        </div>
                        <div className="border-t border-[#1E293B] mt-8 pt-6 text-center text-sm text-[#94A3B8]">
                            <strong className="text-white">+ récurrent :</strong> Ahmed facture {fmt(retainer.suggested)}/mois, paye {fmt(retainer.whiteLabel)}/mois → <span className="text-[#22C55E] font-semibold">+{fmt(retainer.suggested - retainer.whiteLabel)}/mois net par client</span>
                        </div>
                    </div>
                </div>

                {/* Packages suggestion */}
                <div className="mb-16">
                    <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        📦 Packs Suggérés pour tes Clients
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
                            <div className="text-xs text-[#EAB308] font-semibold uppercase tracking-wider mb-3">Essentiel</div>
                            <div className="text-2xl font-bold text-white mb-1">À partir de {fmt(2200)}</div>
                            <div className="text-xs text-[#64748B] mb-4">Ton coût : ~{fmt(950)}</div>
                            <ul className="space-y-2 text-sm text-[#94A3B8]">
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Landing Page</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Config GHL</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Meta Pixel</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#1E293B] border-2 border-[#3B82F6] rounded-2xl p-6 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1 rounded-full">Populaire</div>
                            <div className="text-xs text-[#3B82F6] font-semibold uppercase tracking-wider mb-3">Business</div>
                            <div className="text-2xl font-bold text-white mb-1">À partir de {fmt(6500)}</div>
                            <div className="text-xs text-[#64748B] mb-4">Ton coût : ~{fmt(2800)}</div>
                            <ul className="space-y-2 text-sm text-[#94A3B8]">
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Tout Essentiel +</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> ICP & Positionnement</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Automatisations</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Documentation</li>
                            </ul>
                        </div>
                        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
                            <div className="text-xs text-[#A78BFA] font-semibold uppercase tracking-wider mb-3">Premium</div>
                            <div className="text-2xl font-bold text-white mb-1">À partir de {fmt(totalSugg)}</div>
                            <div className="text-xs text-[#64748B] mb-4">Ton coût : {fmt(totalWL)}</div>
                            <ul className="space-y-2 text-sm text-[#94A3B8]">
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Tout Business +</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Offre structurée</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Prospection complète</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Setup Meta Ads</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                <div className="mb-16">
                    <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        📌 Conditions
                    </h2>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 space-y-4 text-sm text-[#94A3B8]">
                        <div className="flex items-start gap-3">
                            <span className="text-[#A78BFA] mt-0.5 shrink-0">🤝</span>
                            <p><strong className="text-white">100% white-label.</strong> Ton client ne saura jamais que je suis derrière. Tout est livré aux couleurs SBS.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#60A5FA] mt-0.5 shrink-0">💰</span>
                            <p><strong className="text-white">Prix de revente libres.</strong> Les tarifs suggérés sont indicatifs. Tu factures le prix que tu veux à tes clients.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#EAB308] mt-0.5 shrink-0">⏱️</span>
                            <p><strong className="text-white">Délai moyen par client.</strong> 2 à 4 semaines pour un setup complet, selon la complexité du projet.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#22C55E] mt-0.5 shrink-0">🔄</span>
                            <p><strong className="text-white">À la carte possible.</strong> Tu peux commander service par service. Pas d'obligation de tout prendre.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#EF4444] mt-0.5 shrink-0">📝</span>
                            <p><strong className="text-white">Paiement avant livraison.</strong> 50% à la commande, 50% à la livraison. Retainer mensuel payable d'avance.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-12 border-t border-[#1E293B]">
                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        On Lance{" "}
                        <span className="bg-gradient-to-r from-[#A78BFA] to-[#22C55E] bg-clip-text text-transparent">La Machine</span> ?
                    </h2>
                    <p className="text-[#94A3B8] mb-8 max-w-[500px] mx-auto">
                        Dis-moi quels services tu veux pour ton premier client, et on démarre.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/33761941267?text=Ahmed%20%F0%9F%91%8B%20Je%20veux%20lancer%20le%20premier%20client%20en%20white-label.%20On%20se%20cale%20%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#22C55E] transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Lancer le Premier Client
                        </a>
                        <a
                            href="https://calendly.com/bilal-el-jindi/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E293B] text-white rounded-xl font-semibold border border-[#334155] hover:border-[#A78BFA] transition-colors"
                        >
                            Call pour en Discuter →
                        </a>
                    </div>
                </div>
            </main>

            <footer className="border-t border-[#1E293B]/40 py-8 px-6">
                <div className="max-w-[1100px] mx-auto text-center text-xs text-[#475569]">
                    Confidentiel · SBS × Path2Revenue · White-Label Partnership · {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    );
}
