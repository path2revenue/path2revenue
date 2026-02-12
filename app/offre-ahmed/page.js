import Link from "next/link";

export const metadata = {
    title: "Offre Lancement Agence · Ahmed | Path2Revenue",
    description: "Grille tarifaire personnalisée pour le lancement de StarsBridgesSystem.",
    robots: "noindex, nofollow",
};

/* ═══════════════════════════════════════════════════════
   DATA — Services, scope détaillé, tarifs
   ═══════════════════════════════════════════════════════ */
const phases = [
    {
        name: "Phase 1 · Fondation Stratégique",
        icon: "🎯",
        description: "On pose les bases : qui tu cibles, ce que tu vends, comment tu te positionnes.",
        items: [
            {
                service: "Définition ICP (Ideal Customer Profile)",
                scope: [
                    "Analyse du marché cible et segmentation",
                    "Identification des personas décisionnaires",
                    "Critères de qualification / disqualification",
                    "Document ICP final livré et actionnable",
                ],
                normalPrice: 1200,
                ahmedPrice: 700,
            },
            {
                service: "Construction de l'Offre & Positionnement",
                scope: [
                    "Structuration de l'offre (naming, pricing, tiers)",
                    "Proposition de valeur et différenciateurs",
                    "Matrice concurrentielle simplifiée",
                    "Pitch deck / one-pager pour prospects",
                ],
                normalPrice: 1500,
                ahmedPrice: 900,
            },
            {
                service: "Documentation Commerciale",
                scope: [
                    "Scripts d'appel discovery et closing",
                    "Séquences email/SMS de relance",
                    "Templates de propositions commerciales",
                    "Objections fréquentes + réponses documentées",
                ],
                normalPrice: 800,
                ahmedPrice: 450,
            },
        ],
    },
    {
        name: "Phase 2 · Présence Digitale",
        icon: "🌐",
        description: "Ton image en ligne : site, CRM, tracking. Tout prêt à convertir.",
        items: [
            {
                service: "Landing Page Premium",
                scope: [
                    "Design et développement Next.js sur mesure",
                    "Responsive mobile-first, SEO optimisé",
                    "Animations, micro-interactions premium",
                    "Formulaire de booking intégré (GHL)",
                    "Déploiement Vercel + domaine configuré",
                    "Itérations illimitées jusqu'à validation",
                ],
                normalPrice: 3000,
                ahmedPrice: 1800,
            },
            {
                service: "Configuration GHL Complète",
                scope: [
                    "Setup CRM : contacts, tags, custom fields",
                    "Pipeline de vente avec stages et automations",
                    "Calendrier de booking (iframes + widget)",
                    "Formulaires de capture (landing + standalone)",
                    "Notifications email/SMS automatiques",
                    "Connexion domaine et configuration DNS",
                ],
                normalPrice: 1500,
                ahmedPrice: 900,
            },
            {
                service: "Meta Pixel + Conversions API (CAPI)",
                scope: [
                    "Installation Meta Pixel (client-side)",
                    "API Route serveur pour CAPI (server-side)",
                    "Dual tracking avec déduplication event_id",
                    "Configuration des événements customs",
                    "Variables d'environnement Vercel",
                    "Test et validation dans Events Manager",
                ],
                normalPrice: 600,
                ahmedPrice: 350,
            },
        ],
    },
    {
        name: "Phase 3 · Acquisition & Automatisation",
        icon: "⚡",
        description: "Les systèmes qui génèrent et nourrissent tes leads en autopilote.",
        items: [
            {
                service: "Système de Prospection",
                scope: [
                    "Définition des canaux d'acquisition",
                    "Setup outil d'outreach (Lemlist ou équivalent)",
                    "Séquences multicanal (email, LinkedIn, SMS)",
                    "Enrichissement de données (FullEnrich, WTTJ)",
                    "Scoring et priorisation des prospects",
                    "Reporting et itérations hebdomadaires",
                ],
                normalPrice: 2500,
                ahmedPrice: 1500,
            },
            {
                service: "Automatisations Business",
                scope: [
                    "Workflow lead nurturing (GHL / n8n)",
                    "Relances automatiques no-show / no-decision",
                    "Notifications Slack/email sur événements clés",
                    "Webhooks et intégrations tierces",
                    "Documentation technique de chaque workflow",
                ],
                normalPrice: 2000,
                ahmedPrice: 1200,
            },
            {
                service: "Setup Meta Ads Initial",
                scope: [
                    "Création Business Manager + Ad Account",
                    "Structure de campagne recommandée",
                    "Audiences cibles (cold, warm, retargeting)",
                    "Création des premières ads (copy + visuels)",
                    "Connexion pixel + événements de conversion",
                    "Guide d'optimisation et de scaling",
                ],
                normalPrice: 800,
                ahmedPrice: 450,
            },
        ],
    },
    {
        name: "Phase 4 · Opérations & Transmission",
        icon: "📋",
        description: "Tout est documenté. Tu es autonome. Rien ne repose sur moi.",
        items: [
            {
                service: "Documentation & SOPs",
                scope: [
                    "SOP pour chaque process mis en place",
                    "Guide d'utilisation GHL (pour Ahmed + équipe)",
                    "Procédures de maintenance et troubleshooting",
                    "Vidéos Loom explicatives si nécessaire",
                    "Checklist d'onboarding nouveau collaborateur",
                ],
                normalPrice: 1000,
                ahmedPrice: 600,
            },
        ],
    },
];

const monthly = {
    service: "Maintenance & Itérations Mensuelles",
    scope: [
        "Maintenance technique (site, GHL, automations)",
        "Itérations et optimisations continues",
        "Support prioritaire par WhatsApp / Slack",
        "Reporting KPI mensuel",
        "Ajustements de copy et de design",
        "Nouveaux workflows ou automations (raisonnable)",
    ],
    normalPrice: 600,
    ahmedPrice: 350,
};

const fmt = (n) => n.toLocaleString("fr-FR") + " €";

/* ═══════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function OffreAhmed() {
    const totalNormal = phases.reduce((s, p) => s + p.items.reduce((a, i) => a + i.normalPrice, 0), 0);
    const totalAhmed = phases.reduce((s, p) => s + p.items.reduce((a, i) => a + i.ahmedPrice, 0), 0);
    const savings = totalNormal - totalAhmed;
    const pct = Math.round((savings / totalNormal) * 100);

    return (
        <div className="min-h-screen bg-[#0A0F1C] text-[#E2E8F0]">
            {/* Header */}
            <header className="border-b border-[#1E293B]/60 py-6 px-6">
                <div className="max-w-[1100px] mx-auto flex items-center justify-between">
                    <Link href="/" className="text-sm text-[#64748B] hover:text-white transition">
                        ← Path2Revenue
                    </Link>
                    <span className="text-xs text-[#475569] tracking-wider uppercase">Document confidentiel</span>
                </div>
            </header>

            <main className="max-w-[1100px] mx-auto px-6 py-16">
                {/* Hero */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#334155] text-xs uppercase tracking-widest text-[#94A3B8] mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                        Offre Lancement Agence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Grille Tarifaire{" "}
                        <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
                            StarsBridgesSystem
                        </span>
                    </h1>
                    <p className="text-lg text-[#94A3B8] max-w-[650px] mx-auto leading-relaxed">
                        Ahmed, voici le scope complet de ce que je peux prendre en charge pour le lancement de ton agence.
                        Chaque ligne est détaillée avec le scope exact, le tarif normal et ton tarif préférentiel.
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 text-center">
                        <div className="text-sm text-[#64748B] mb-2 uppercase tracking-wider">Tarif Normal</div>
                        <div className="text-3xl font-bold text-[#475569] line-through">{fmt(totalNormal)}</div>
                        <div className="text-xs text-[#475569] mt-1">+ {fmt(monthly.normalPrice)}/mois</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#1E3A5F] to-[#1E293B] border-2 border-[#3B82F6] rounded-2xl p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            -{pct}%
                        </div>
                        <div className="text-sm text-[#60A5FA] mb-2 uppercase tracking-wider font-semibold">Tarif Ahmed</div>
                        <div className="text-4xl font-bold text-white">{fmt(totalAhmed)}</div>
                        <div className="text-xs text-[#60A5FA] mt-1">+ {fmt(monthly.ahmedPrice)}/mois</div>
                    </div>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 text-center">
                        <div className="text-sm text-[#64748B] mb-2 uppercase tracking-wider">Tu Économises</div>
                        <div className="text-3xl font-bold text-[#22C55E]">{fmt(savings)}</div>
                        <div className="text-xs text-[#22C55E]/70 mt-1">+ {fmt(monthly.normalPrice - monthly.ahmedPrice)}/mois</div>
                    </div>
                </div>

                {/* Phases */}
                {phases.map((phase, pi) => (
                    <div key={pi} className="mb-16">
                        {/* Phase Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl">{phase.icon}</span>
                            <div>
                                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {phase.name}
                                </h2>
                                <p className="text-sm text-[#94A3B8] mt-1">{phase.description}</p>
                            </div>
                        </div>

                        {/* Service Cards */}
                        <div className="space-y-6">
                            {phase.items.map((item, ii) => {
                                const saving = item.normalPrice - item.ahmedPrice;
                                const itemPct = Math.round((saving / item.normalPrice) * 100);
                                return (
                                    <div key={ii} className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden">
                                        {/* Service Header */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 gap-4">
                                            <h3 className="text-lg font-semibold text-white">{item.service}</h3>
                                            <div className="flex items-center gap-4 shrink-0">
                                                <span className="text-sm text-[#475569] line-through">{fmt(item.normalPrice)}</span>
                                                <span className="text-xl font-bold text-[#60A5FA]">{fmt(item.ahmedPrice)}</span>
                                                <span className="text-xs bg-[#22C55E]/15 text-[#22C55E] px-2 py-1 rounded-full font-semibold">
                                                    -{itemPct}%
                                                </span>
                                            </div>
                                        </div>

                                        {/* Scope Details */}
                                        <div className="border-t border-[#1E293B] px-6 md:px-8 py-5 bg-[#0D1321]">
                                            <div className="text-xs text-[#64748B] uppercase tracking-wider mb-3 font-semibold">
                                                Scope détaillé
                                            </div>
                                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                                                {item.scope.map((s, si) => (
                                                    <li key={si} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                                                        <span className="text-[#3B82F6] mt-0.5 shrink-0">✓</span>
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

                {/* Monthly Retainer */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-3xl">🔄</span>
                        <div>
                            <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Retainer Mensuel
                            </h2>
                            <p className="text-sm text-[#94A3B8] mt-1">Support continu, maintenance et itérations. Sans engagement de durée.</p>
                        </div>
                    </div>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 gap-4">
                            <h3 className="text-lg font-semibold text-white">{monthly.service}</h3>
                            <div className="flex items-center gap-4 shrink-0">
                                <span className="text-sm text-[#475569] line-through">{fmt(monthly.normalPrice)}/mois</span>
                                <span className="text-xl font-bold text-[#60A5FA]">{fmt(monthly.ahmedPrice)}/mois</span>
                                <span className="text-xs bg-[#22C55E]/15 text-[#22C55E] px-2 py-1 rounded-full font-semibold">
                                    -{Math.round(((monthly.normalPrice - monthly.ahmedPrice) / monthly.normalPrice) * 100)}%
                                </span>
                            </div>
                        </div>
                        <div className="border-t border-[#1E293B] px-6 md:px-8 py-5 bg-[#0D1321]">
                            <div className="text-xs text-[#64748B] uppercase tracking-wider mb-3 font-semibold">Inclus</div>
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                                {monthly.scope.map((s, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                                        <span className="text-[#3B82F6] mt-0.5 shrink-0">✓</span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Recap Table */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        📊 Récapitulatif
                    </h2>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#1E293B] text-[#64748B] uppercase tracking-wider text-xs">
                                        <th className="text-left p-4 md:p-5">Service</th>
                                        <th className="text-right p-4 md:p-5">Normal</th>
                                        <th className="text-right p-4 md:p-5">Ahmed</th>
                                        <th className="text-right p-4 md:p-5">Économie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {phases.flatMap((p) => p.items).map((item, i) => (
                                        <tr key={i} className="border-b border-[#1E293B]/50 hover:bg-[#1E293B]/20 transition">
                                            <td className="p-4 md:p-5 text-[#E2E8F0]">{item.service}</td>
                                            <td className="p-4 md:p-5 text-right text-[#475569] line-through">{fmt(item.normalPrice)}</td>
                                            <td className="p-4 md:p-5 text-right text-[#60A5FA] font-semibold">{fmt(item.ahmedPrice)}</td>
                                            <td className="p-4 md:p-5 text-right text-[#22C55E]">-{fmt(item.normalPrice - item.ahmedPrice)}</td>
                                        </tr>
                                    ))}
                                    <tr className="border-b border-[#1E293B]/50 hover:bg-[#1E293B]/20 transition">
                                        <td className="p-4 md:p-5 text-[#E2E8F0]">{monthly.service} <span className="text-[#64748B] text-xs">(mensuel)</span></td>
                                        <td className="p-4 md:p-5 text-right text-[#475569] line-through">{fmt(monthly.normalPrice)}/m</td>
                                        <td className="p-4 md:p-5 text-right text-[#60A5FA] font-semibold">{fmt(monthly.ahmedPrice)}/m</td>
                                        <td className="p-4 md:p-5 text-right text-[#22C55E]">-{fmt(monthly.normalPrice - monthly.ahmedPrice)}/m</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="bg-[#0D1321] font-bold text-base">
                                        <td className="p-4 md:p-5 text-white">TOTAL (one-time)</td>
                                        <td className="p-4 md:p-5 text-right text-[#475569] line-through">{fmt(totalNormal)}</td>
                                        <td className="p-4 md:p-5 text-right text-[#60A5FA]">{fmt(totalAhmed)}</td>
                                        <td className="p-4 md:p-5 text-right text-[#22C55E]">-{fmt(savings)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Payment Options */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        💳 Modalités de Paiement
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8">
                            <div className="text-sm text-[#EAB308] font-semibold uppercase tracking-wider mb-3">Option 1 · Paiement Comptant</div>
                            <div className="text-3xl font-bold text-white mb-2">{fmt(totalAhmed)}</div>
                            <p className="text-sm text-[#94A3B8] mb-4">
                                Paiement unique à la signature. Démarrage immédiat.
                            </p>
                            <ul className="space-y-2 text-sm text-[#94A3B8]">
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Meilleur tarif possible</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Priorité maximale</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> 1er mois de retainer offert</li>
                            </ul>
                        </div>
                        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8">
                            <div className="text-sm text-[#3B82F6] font-semibold uppercase tracking-wider mb-3">Option 2 · Paiement en 3x</div>
                            <div className="text-3xl font-bold text-white mb-2">3 × {fmt(Math.ceil(totalAhmed / 3))}</div>
                            <p className="text-sm text-[#94A3B8] mb-4">
                                Paiement échelonné : à la signature, à J+30, à J+60.
                            </p>
                            <ul className="space-y-2 text-sm text-[#94A3B8]">
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Même tarif, trésorerie préservée</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Aucun frais supplémentaire</li>
                                <li className="flex items-center gap-2"><span className="text-[#22C55E]">✓</span> Démarrage immédiat</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Conditions */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        📌 Conditions & Notes
                    </h2>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 space-y-4 text-sm text-[#94A3B8]">
                        <div className="flex items-start gap-3">
                            <span className="text-[#EAB308] mt-0.5 shrink-0">⚠️</span>
                            <p><strong className="text-white">Tarif préférentiel lancement.</strong> Cette grille est valable pour le lancement de StarsBridgesSystem uniquement. Les tarifs "Ahmed" ne s'appliquent pas aux projets futurs sauf discussion.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#3B82F6] mt-0.5 shrink-0">ℹ️</span>
                            <p><strong className="text-white">Délai estimé.</strong> Le setup complet (Phase 1 à 4) est livré en 4 à 6 semaines selon la bande passante. Le retainer démarre après la livraison.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#22C55E] mt-0.5 shrink-0">✅</span>
                            <p><strong className="text-white">À la carte possible.</strong> Tu peux choisir uniquement les services dont tu as besoin. Le total sera ajusté en conséquence.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#A78BFA] mt-0.5 shrink-0">🤝</span>
                            <p><strong className="text-white">Itérations illimitées.</strong> Chaque livrable est itéré jusqu'à validation. Pas de surplus si on fait 3 versions au lieu de 1.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-12 border-t border-[#1E293B]">
                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        On Avance{" "}
                        <span className="bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">Ensemble</span> ?
                    </h2>
                    <p className="text-[#94A3B8] mb-8 max-w-[500px] mx-auto">
                        Dis-moi ce que tu valides, ce que tu veux ajuster, ou si tu as des questions.
                        On se cale un call et on lance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/33761941267?text=Ahmed%20ici%20%F0%9F%91%8B%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20l'offre%20lancement.%20On%20en%20discute%20%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#22C55E] transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Discuter sur WhatsApp
                        </a>
                        <a
                            href="https://calendly.com/bilal-el-jindi/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E293B] text-white rounded-xl font-semibold border border-[#334155] hover:border-[#3B82F6] transition-colors"
                        >
                            Réserver un Call →
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-[#1E293B]/40 py-8 px-6">
                <div className="max-w-[1100px] mx-auto text-center text-xs text-[#475569]">
                    Document confidentiel · Path2Revenue × StarsBridgesSystem · {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    );
}
