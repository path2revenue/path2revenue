"use client";

import { useState, useRef } from "react";

/* ═══════════════════════════════════════════════════════
   SERVICE CATALOG — only what Bilal delivers
   ═══════════════════════════════════════════════════════ */
const CATEGORIES = [
    {
        id: "strategie",
        name: "Stratégie & Positionnement",
        icon: "🎯",
        services: [
            {
                id: "icp",
                name: "Définition ICP & Positionnement",
                cost: 500,
                defaultPrice: 800,
                scope: [
                    "Analyse du marché cible et segmentation",
                    "Identification des personas décisionnaires",
                    "Critères de qualification / disqualification",
                    "Positionnement et proposition de valeur",
                    "Document ICP final livré",
                ],
            },
            {
                id: "offre",
                name: "Structuration de l'Offre",
                cost: 450,
                defaultPrice: 700,
                scope: [
                    "Construction de l'offre (naming, pricing, tiers)",
                    "Différenciateurs et matrice concurrentielle",
                    "One-pager / pitch deck pour prospects",
                    "Recommandations canaux d'acquisition",
                ],
            },
        ],
    },
    {
        id: "digital",
        name: "Présence Digitale",
        icon: "🌐",
        services: [
            {
                id: "landing",
                name: "Landing Page Premium",
                cost: 1200,
                defaultPrice: 2000,
                scope: [
                    "Design et développement sur mesure",
                    "Responsive mobile-first, SEO optimisé",
                    "Animations et micro-interactions premium",
                    "Formulaire de booking intégré",
                    "Déploiement + domaine configuré",
                    "Itérations illimitées jusqu'à validation",
                ],
            },
            {
                id: "ghl",
                name: "Configuration GHL Complète",
                cost: 600,
                defaultPrice: 1000,
                scope: [
                    "Setup CRM : contacts, tags, custom fields",
                    "Pipeline de vente avec stages et automations",
                    "Calendrier de booking (iframe + widget)",
                    "Formulaires de capture",
                    "Notifications email/SMS automatiques",
                    "Connexion domaine et DNS",
                ],
            },
            {
                id: "pixel",
                name: "Meta Pixel Setup",
                cost: 150,
                defaultPrice: 300,
                scope: [
                    "Installation et configuration Meta Pixel",
                    "Événements standards et customs",
                    "Vérification dans Events Manager",
                    "Connexion avec les campagnes ads",
                ],
            },
        ],
    },
    {
        id: "acquisition",
        name: "Acquisition & Automatisation",
        icon: "⚡",
        services: [
            {
                id: "prospection",
                name: "Système de Prospection",
                cost: 900,
                defaultPrice: 1400,
                scope: [
                    "Définition des canaux d'acquisition",
                    "Setup outil d'outreach (Lemlist ou équiv.)",
                    "Séquences multicanal (email, LinkedIn, SMS)",
                    "Enrichissement de données prospects",
                    "Scoring et priorisation des leads",
                    "Documentation du process",
                ],
            },
            {
                id: "automations",
                name: "Automatisations Business",
                cost: 800,
                defaultPrice: 1200,
                scope: [
                    "Workflows lead nurturing (GHL / n8n)",
                    "Relances automatiques no-show / no-decision",
                    "Notifications sur événements clés",
                    "Webhooks et intégrations tierces",
                    "Documentation technique",
                ],
            },
            {
                id: "ads",
                name: "Setup Meta Ads Initial",
                cost: 350,
                defaultPrice: 550,
                scope: [
                    "Configuration Business Manager",
                    "Structure de campagne recommandée",
                    "Audiences cibles (cold, warm, retargeting)",
                    "Premiers visuels et copy d'ads",
                    "Connexion pixel + events de conversion",
                    "Guide d'optimisation et de scaling",
                ],
            },
        ],
    },
    {
        id: "ops",
        name: "Documentation & Ops",
        icon: "📋",
        services: [
            {
                id: "docs",
                name: "Documentation & SOPs",
                cost: 400,
                defaultPrice: 600,
                scope: [
                    "SOP pour chaque process mis en place",
                    "Guide d'utilisation GHL (client + équipe)",
                    "Procédures de maintenance",
                    "Vidéos Loom explicatives si nécessaire",
                ],
            },
        ],
    },
];

const ALL_SERVICES = CATEGORIES.flatMap((c) => c.services);
const fmt = (n) => n.toLocaleString("fr-FR");

const PAYMENT_OPTIONS = [
    { id: "50-50", label: "50% à la commande, 50% à la livraison" },
    { id: "100", label: "100% à la commande" },
    { id: "3x", label: "Paiement en 3× sans frais" },
];

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function OffreAhmed() {
    // State
    const [selected, setSelected] = useState({});
    const [prices, setPrices] = useState(
        Object.fromEntries(ALL_SERVICES.map((s) => [s.id, s.defaultPrice]))
    );
    const [commission, setCommission] = useState(10);
    const [closerPct, setCloserPct] = useState(10);
    const [setterPct, setSetterPct] = useState(5);
    const [influencerPct, setInfluencerPct] = useState(5);
    const [payment, setPayment] = useState("50-50");
    const [client, setClient] = useState({ name: "", company: "", email: "" });
    const [view, setView] = useState("config"); // config | devis | recap
    const [validDays, setValidDays] = useState(30);
    const printRef = useRef(null);

    const toggle = (id) => setSelected((s) => ({ ...s, [id]: !s[id] }));
    const selectAll = () => {
        const allIds = Object.fromEntries(ALL_SERVICES.map((s) => [s.id, true]));
        setSelected(allIds);
    };
    const clearAll = () => setSelected({});

    const selectedServices = ALL_SERVICES.filter((s) => selected[s.id]);
    const totalCost = selectedServices.reduce((a, s) => a + s.cost, 0);
    const totalClient = selectedServices.reduce((a, s) => a + (prices[s.id] || 0), 0);
    const totalMargin = totalClient - totalCost;
    const marginPct = totalClient > 0 ? Math.round((totalMargin / totalClient) * 100) : 0;

    // Full cost breakdown for Ahmed
    const closerCost = Math.round(totalClient * closerPct / 100);
    const setterCost = Math.round(totalClient * setterPct / 100);
    const influencerCost = Math.round(totalClient * influencerPct / 100);
    const teamCosts = closerCost + setterCost + influencerCost;
    const ahmedNet = totalClient - totalCost - teamCosts;
    const ahmedNetPct = totalClient > 0 ? Math.round((ahmedNet / totalClient) * 100) : 0;

    const today = new Date();
    const validUntil = new Date(today);
    validUntil.setDate(validUntil.getDate() + validDays);
    const devisNumber = `SBS-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}-${String(Math.floor(Math.random() * 900) + 100)}`;

    const handlePrint = () => window.print();

    /* ═══════════════════════════════════════════════════════
       VIEW: DEVIS CLIENT
       ═══════════════════════════════════════════════════════ */
    if (view === "devis") {
        const paymentLabel = PAYMENT_OPTIONS.find((p) => p.id === payment)?.label;
        return (
            <div className="min-h-screen bg-white text-[#1a1a2e]">
                {/* Print-only styles */}
                <style>{`
                    @media print {
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .no-print { display: none !important; }
                        .print-page { padding: 40px !important; }
                    }
                `}</style>

                {/* Nav bar (no print) */}
                <div className="no-print bg-[#0C111D] text-white py-4 px-6 flex items-center justify-between">
                    <button onClick={() => setView("config")} className="text-sm text-[#94A3B8] hover:text-white transition">
                        ← Retour au configurateur
                    </button>
                    <div className="flex gap-3">
                        <button onClick={handlePrint} className="px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm font-semibold hover:bg-[#2563EB] transition">
                            🖨️ Imprimer / PDF
                        </button>
                    </div>
                </div>

                {/* Devis content */}
                <div ref={printRef} className="print-page max-w-[800px] mx-auto px-8 py-12">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-12 pb-8 border-b-2 border-[#3B82F6]">
                        <div>
                            <div className="text-2xl font-bold text-[#0C111D]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Stars<span className="text-[#3B82F6]">Bridge</span>System
                            </div>
                            <div className="text-xs text-[#64748B] mt-1">Agency · Digital Growth Partner</div>
                        </div>
                        <div className="text-right text-sm">
                            <div className="font-bold text-[#0C111D]">DEVIS N° {devisNumber}</div>
                            <div className="text-[#64748B]">
                                Date : {today.toLocaleDateString("fr-FR")}
                            </div>
                            <div className="text-[#64748B]">
                                Valide jusqu'au : {validUntil.toLocaleDateString("fr-FR")}
                            </div>
                        </div>
                    </div>

                    {/* Client info */}
                    {(client.name || client.company) && (
                        <div className="mb-10 p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                            <div className="text-xs text-[#64748B] uppercase tracking-wider mb-2 font-semibold">Client</div>
                            {client.company && <div className="font-bold text-lg text-[#0C111D]">{client.company}</div>}
                            {client.name && <div className="text-[#475569]">{client.name}</div>}
                            {client.email && <div className="text-[#475569] text-sm">{client.email}</div>}
                        </div>
                    )}

                    {/* Services */}
                    <div className="mb-10">
                        <h2 className="text-lg font-bold mb-6 text-[#0C111D]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Prestations Proposées
                        </h2>
                        <div className="space-y-6">
                            {selectedServices.map((s) => (
                                <div key={s.id} className="border border-[#E2E8F0] rounded-xl overflow-hidden">
                                    <div className="flex items-center justify-between p-4 bg-[#F8FAFC]">
                                        <h3 className="font-semibold text-[#0C111D]">{s.name}</h3>
                                        <span className="text-lg font-bold text-[#3B82F6]">{fmt(prices[s.id])} €</span>
                                    </div>
                                    <div className="p-4">
                                        <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                                            {s.scope.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                                                    <span className="text-[#3B82F6] shrink-0 mt-0.5">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Commission */}
                    {commission > 0 && (
                        <div className="mb-10 p-6 bg-[#F0F9FF] rounded-xl border border-[#BAE6FD]">
                            <div className="text-sm font-semibold text-[#0C111D] mb-1">Accompagnement Performance</div>
                            <p className="text-sm text-[#475569]">
                                Commission mensuelle de <strong className="text-[#3B82F6]">{commission}%</strong> sur le chiffre d'affaires généré via les systèmes mis en place. Applicable dès le premier encaissement.
                            </p>
                        </div>
                    )}

                    {/* Total + Payment */}
                    <div className="border-t-2 border-[#3B82F6] pt-8">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <div className="text-sm text-[#64748B]">Total HT</div>
                                <div className="text-3xl font-bold text-[#0C111D]">{fmt(totalClient)} €</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-[#64748B]">Conditions de paiement</div>
                                <div className="text-sm font-semibold text-[#0C111D]">{paymentLabel}</div>
                            </div>
                        </div>

                        {payment === "50-50" && (
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-[#F8FAFC] rounded-lg p-4 text-center border border-[#E2E8F0]">
                                    <div className="text-xs text-[#64748B]">À la commande</div>
                                    <div className="text-xl font-bold text-[#0C111D]">{fmt(Math.ceil(totalClient / 2))} €</div>
                                </div>
                                <div className="bg-[#F8FAFC] rounded-lg p-4 text-center border border-[#E2E8F0]">
                                    <div className="text-xs text-[#64748B]">À la livraison</div>
                                    <div className="text-xl font-bold text-[#0C111D]">{fmt(Math.floor(totalClient / 2))} €</div>
                                </div>
                            </div>
                        )}
                        {payment === "3x" && (
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {[1, 2, 3].map((n) => (
                                    <div key={n} className="bg-[#F8FAFC] rounded-lg p-4 text-center border border-[#E2E8F0]">
                                        <div className="text-xs text-[#64748B]">Échéance {n}</div>
                                        <div className="text-xl font-bold text-[#0C111D]">{fmt(Math.ceil(totalClient / 3))} €</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Signature */}
                        <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-[#E2E8F0]">
                            <div>
                                <div className="text-xs text-[#64748B] uppercase tracking-wider mb-8">Signature StarsBridgeSystem</div>
                                <div className="border-b border-[#CBD5E1] w-48" />
                            </div>
                            <div>
                                <div className="text-xs text-[#64748B] uppercase tracking-wider mb-8">Signature Client</div>
                                <div className="border-b border-[#CBD5E1] w-48" />
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-16 pt-6 border-t border-[#E2E8F0] text-center text-xs text-[#94A3B8]">
                        StarsBridgeSystem · Agency · Digital Growth Partner
                    </div>
                </div>
            </div>
        );
    }

    /* ═══════════════════════════════════════════════════════
       VIEW: RECAP INTERNE
       ═══════════════════════════════════════════════════════ */
    if (view === "recap") {
        return (
            <div className="min-h-screen bg-[#0A0F1C] text-[#E2E8F0]">
                <style>{`
                    @media print {
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: #0A0F1C !important; color: #E2E8F0 !important; }
                        .no-print { display: none !important; }
                    }
                `}</style>

                <div className="no-print bg-[#111827] border-b border-[#1E293B] py-4 px-6 flex items-center justify-between">
                    <button onClick={() => setView("config")} className="text-sm text-[#94A3B8] hover:text-white transition">
                        ← Retour au configurateur
                    </button>
                    <div className="flex gap-3">
                        <button onClick={handlePrint} className="px-4 py-2 bg-[#A78BFA] text-white rounded-lg text-sm font-semibold hover:bg-[#8B5CF6] transition">
                            🖨️ Imprimer / PDF
                        </button>
                    </div>
                </div>

                <div className="max-w-[900px] mx-auto px-6 py-12">
                    <div className="text-center mb-12">
                        <div className="text-xs text-[#A78BFA] uppercase tracking-widest mb-2">Document Interne</div>
                        <h1 className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Récap Bilal ← Ahmed
                        </h1>
                        {client.company && <p className="text-[#94A3B8] mt-2">Client final : {client.company}</p>}
                        <p className="text-[#64748B] text-sm mt-1">{today.toLocaleDateString("fr-FR")}</p>
                    </div>

                    {/* Table */}
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden mb-10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-[#1E293B] text-[#64748B] uppercase tracking-wider text-xs">
                                    <th className="text-left p-4">Service</th>
                                    <th className="text-right p-4">Coût Bilal</th>
                                    <th className="text-right p-4">Prix Client</th>
                                    <th className="text-right p-4">Marge Brute</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedServices.map((s) => (
                                    <tr key={s.id} className="border-b border-[#1E293B]/50">
                                        <td className="p-4 text-[#E2E8F0]">{s.name}</td>
                                        <td className="p-4 text-right text-[#A78BFA] font-semibold">{fmt(s.cost)} €</td>
                                        <td className="p-4 text-right text-[#60A5FA]">{fmt(prices[s.id])} €</td>
                                        <td className="p-4 text-right text-[#22C55E] font-semibold">+{fmt(prices[s.id] - s.cost)} €</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-[#0D1321] font-bold text-base">
                                    <td className="p-5 text-white">TOTAL</td>
                                    <td className="p-5 text-right text-[#A78BFA]">{fmt(totalCost)} €</td>
                                    <td className="p-5 text-right text-[#60A5FA]">{fmt(totalClient)} €</td>
                                    <td className="p-5 text-right text-[#22C55E]">+{fmt(totalMargin)} €</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Full Cost Breakdown */}
                    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 mb-10">
                        <h3 className="text-sm font-semibold text-white mb-4">Ventilation Complète</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#94A3B8]">Client paye</span>
                                <span className="font-bold text-white">{fmt(totalClient)} €</span>
                            </div>
                            <div className="border-t border-[#1E293B] pt-3 space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[#94A3B8]">− Bilal (delivery)</span>
                                    <span className="text-[#A78BFA] font-semibold">-{fmt(totalCost)} €</span>
                                </div>
                                {closerPct > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#94A3B8]">− Closer ({closerPct}%)</span>
                                        <span className="text-[#F59E0B] font-semibold">-{fmt(closerCost)} €</span>
                                    </div>
                                )}
                                {setterPct > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#94A3B8]">− Setter ({setterPct}%)</span>
                                        <span className="text-[#F59E0B] font-semibold">-{fmt(setterCost)} €</span>
                                    </div>
                                )}
                                {influencerPct > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#94A3B8]">− Influenceur ({influencerPct}%)</span>
                                        <span className="text-[#F59E0B] font-semibold">-{fmt(influencerCost)} €</span>
                                    </div>
                                )}
                            </div>
                            <div className="border-t-2 border-[#1E293B] pt-3 flex justify-between items-center">
                                <span className="font-bold text-white">= Ahmed net</span>
                                <span className={`text-xl font-bold ${ahmedNet >= 0 ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
                                    {ahmedNet >= 0 ? "+" : ""}{fmt(ahmedNet)} € <span className="text-sm font-normal">({ahmedNetPct}%)</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Commission */}
                    {commission > 0 && (
                        <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 mb-10">
                            <div className="text-sm font-semibold text-white mb-2">Commission Performance</div>
                            <p className="text-sm text-[#94A3B8]">
                                Ahmed reverse <strong className="text-[#A78BFA]">{commission}%</strong> du CA généré via les systèmes à Bilal, mensuellement.
                            </p>
                        </div>
                    )}

                    {/* Payment */}
                    <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6">
                        <div className="text-sm font-semibold text-white mb-2">Conditions de Paiement (Ahmed → Bilal)</div>
                        <p className="text-sm text-[#94A3B8]">
                            {PAYMENT_OPTIONS.find((p) => p.id === payment)?.label}. Facturation dès validation du devis client.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    /* ═══════════════════════════════════════════════════════
       VIEW: CONFIGURATOR (default)
       ═══════════════════════════════════════════════════════ */
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-[#E2E8F0]">
            {/* Header */}
            <header className="border-b border-[#1E293B]/60 py-5 px-6">
                <div className="max-w-[1100px] mx-auto flex items-center justify-between">
                    <div>
                        <span className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            SBS <span className="text-[#3B82F6]">×</span> Path2Revenue
                        </span>
                        <span className="text-xs text-[#475569] ml-3">Configurateur de Devis</span>
                    </div>
                    <span className="text-xs text-[#475569] tracking-wider uppercase">White-Label</span>
                </div>
            </header>

            <main className="max-w-[1100px] mx-auto px-6 py-10">
                {/* Client Info */}
                <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 mb-8">
                    <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">Informations Client</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Nom du contact"
                            value={client.name}
                            onChange={(e) => setClient({ ...client, name: e.target.value })}
                            className="bg-[#0D1321] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:border-[#3B82F6] outline-none transition"
                        />
                        <input
                            type="text"
                            placeholder="Nom de l'entreprise"
                            value={client.company}
                            onChange={(e) => setClient({ ...client, company: e.target.value })}
                            className="bg-[#0D1321] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:border-[#3B82F6] outline-none transition"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={client.email}
                            onChange={(e) => setClient({ ...client, email: e.target.value })}
                            className="bg-[#0D1321] border border-[#1E293B] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:border-[#3B82F6] outline-none transition"
                        />
                    </div>
                </div>

                {/* Service Selector */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Sélectionne les Prestations
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={selectAll} className="text-xs text-[#3B82F6] hover:text-[#60A5FA] transition cursor-pointer">
                            Tout sélectionner
                        </button>
                        <span className="text-[#334155]">·</span>
                        <button onClick={clearAll} className="text-xs text-[#64748B] hover:text-white transition cursor-pointer">
                            Tout désélectionner
                        </button>
                    </div>
                </div>

                {CATEGORIES.map((cat) => (
                    <div key={cat.id} className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg">{cat.icon}</span>
                            <h3 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider">{cat.name}</h3>
                        </div>

                        <div className="space-y-3">
                            {cat.services.map((s) => {
                                const isSelected = selected[s.id];
                                const clientPrice = prices[s.id] || 0;
                                const margin = clientPrice - s.cost;

                                return (
                                    <div
                                        key={s.id}
                                        className={`bg-[#111827] border rounded-xl overflow-hidden transition-all ${isSelected ? "border-[#3B82F6] ring-1 ring-[#3B82F6]/30" : "border-[#1E293B]"
                                            }`}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 p-5">
                                            {/* Checkbox + Label */}
                                            <label className="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
                                                <input
                                                    type="checkbox"
                                                    checked={!!isSelected}
                                                    onChange={() => toggle(s.id)}
                                                    className="w-5 h-5 rounded border-[#334155] bg-[#0D1321] text-[#3B82F6] accent-[#3B82F6] cursor-pointer shrink-0"
                                                />
                                                <div className="min-w-0">
                                                    <div className="font-semibold text-white truncate">{s.name}</div>
                                                    <div className="text-xs text-[#64748B]">Coût : {fmt(s.cost)} €</div>
                                                </div>
                                            </label>

                                            {/* Price Input + Margin */}
                                            <div className="flex items-center gap-3 shrink-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-[#64748B]">Prix client</span>
                                                    <div className="relative">
                                                        <input
                                                            type="number"
                                                            value={prices[s.id]}
                                                            onChange={(e) => setPrices({ ...prices, [s.id]: Number(e.target.value) })}
                                                            className="w-24 bg-[#0D1321] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white text-right focus:border-[#3B82F6] outline-none transition"
                                                        />
                                                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#475569] pointer-events-none">€</span>
                                                    </div>
                                                </div>
                                                {isSelected && (
                                                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${margin >= 0
                                                        ? "bg-[#22C55E]/15 text-[#22C55E]"
                                                        : "bg-[#EF4444]/15 text-[#EF4444]"
                                                        }`}>
                                                        {margin >= 0 ? "+" : ""}{fmt(margin)} €
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Scope (visible when selected) */}
                                        {isSelected && (
                                            <div className="border-t border-[#1E293B] px-5 py-3 bg-[#0D1321]">
                                                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1">
                                                    {s.scope.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                                                            <span className="text-[#3B82F6] shrink-0">✓</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Team Commissions */}
                <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 mb-8">
                    <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">Commissions Équipe (% du prix client)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-[#94A3B8]">Closer</span>
                                <span className="text-sm font-bold text-[#F59E0B]">{closerPct}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={closerPct}
                                onChange={(e) => setCloserPct(Number(e.target.value))}
                                className="w-full accent-[#F59E0B]"
                            />
                            {totalClient > 0 && <div className="text-xs text-[#475569] mt-1">{fmt(closerCost)} € sur ce deal</div>}
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-[#94A3B8]">Setter</span>
                                <span className="text-sm font-bold text-[#F59E0B]">{setterPct}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="15"
                                value={setterPct}
                                onChange={(e) => setSetterPct(Number(e.target.value))}
                                className="w-full accent-[#F59E0B]"
                            />
                            {totalClient > 0 && <div className="text-xs text-[#475569] mt-1">{fmt(setterCost)} € sur ce deal</div>}
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-[#94A3B8]">Influenceur / Apporteur</span>
                                <span className="text-sm font-bold text-[#F59E0B]">{influencerPct}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={influencerPct}
                                onChange={(e) => setInfluencerPct(Number(e.target.value))}
                                className="w-full accent-[#F59E0B]"
                            />
                            {totalClient > 0 && <div className="text-xs text-[#475569] mt-1">{fmt(influencerCost)} € sur ce deal</div>}
                        </div>
                    </div>
                </div>

                {/* Settings Row */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Commission Bilal */}
                    <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5">
                        <div className="text-xs text-[#64748B] uppercase tracking-wider mb-3 font-semibold">Commission Bilal (récurrent)</div>
                        <div className="flex items-center gap-3">
                            <input
                                type="range"
                                min="0"
                                max="30"
                                value={commission}
                                onChange={(e) => setCommission(Number(e.target.value))}
                                className="flex-1 accent-[#A78BFA]"
                            />
                            <div className="bg-[#0D1321] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white font-bold w-16 text-center">
                                {commission}%
                            </div>
                        </div>
                        <p className="text-xs text-[#475569] mt-2">% sur le CA mensuel généré</p>
                    </div>

                    {/* Payment */}
                    <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5">
                        <div className="text-xs text-[#64748B] uppercase tracking-wider mb-3 font-semibold">Conditions de Paiement</div>
                        <select
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                            className="w-full bg-[#0D1321] border border-[#1E293B] rounded-lg px-3 py-2.5 text-sm text-white focus:border-[#3B82F6] outline-none cursor-pointer"
                        >
                            {PAYMENT_OPTIONS.map((p) => (
                                <option key={p.id} value={p.id}>{p.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Validity */}
                    <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5">
                        <div className="text-xs text-[#64748B] uppercase tracking-wider mb-3 font-semibold">Validité du Devis</div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={validDays}
                                onChange={(e) => setValidDays(Number(e.target.value))}
                                className="w-20 bg-[#0D1321] border border-[#1E293B] rounded-lg px-3 py-2.5 text-sm text-white text-center focus:border-[#3B82F6] outline-none"
                            />
                            <span className="text-sm text-[#94A3B8]">jours</span>
                        </div>
                    </div>
                </div>

                {/* Net Margin Simulator */}
                {selectedServices.length > 0 && (
                    <div className={`border rounded-2xl p-6 mb-8 ${ahmedNet >= 0 ? "bg-[#0D1321] border-[#1E293B]" : "bg-[#1a0a0a] border-[#EF4444]/30"}`}>
                        <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">💰 Simulateur Marge Nette Ahmed</h2>
                        <div className="grid md:grid-cols-6 gap-4 items-end">
                            <div className="text-center">
                                <div className="text-xs text-[#64748B] mb-1">Client paye</div>
                                <div className="text-xl font-bold text-white">{fmt(totalClient)} €</div>
                            </div>
                            <div className="text-center text-[#475569] hidden md:block">−</div>
                            <div className="text-center">
                                <div className="text-xs text-[#64748B] mb-1">Bilal + Équipe</div>
                                <div className="text-xl font-bold text-[#F59E0B]">{fmt(totalCost + teamCosts)} €</div>
                                <div className="text-[10px] text-[#475569] mt-0.5">{fmt(totalCost)} delivery + {fmt(teamCosts)} commissions</div>
                            </div>
                            <div className="text-center text-[#475569] hidden md:block">=</div>
                            <div className="text-center md:col-span-2">
                                <div className="text-xs text-[#64748B] mb-1">Ahmed garde</div>
                                <div className={`text-2xl font-bold ${ahmedNet >= 0 ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
                                    {ahmedNet >= 0 ? "+" : ""}{fmt(ahmedNet)} €
                                </div>
                                <div className="text-xs text-[#475569] mt-0.5">{ahmedNetPct}% du prix client</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Summary Bar */}
                {selectedServices.length > 0 && (
                    <div className="sticky bottom-0 z-50 bg-[#111827]/95 backdrop-blur-sm border border-[#1E293B] rounded-2xl p-6 mb-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            {/* Stats */}
                            <div className="flex items-center gap-8 flex-wrap">
                                <div>
                                    <div className="text-xs text-[#64748B]">{selectedServices.length} prestation{selectedServices.length > 1 ? "s" : ""}</div>
                                    <div className="text-xs text-[#64748B] mt-0.5">Client paye</div>
                                    <div className="text-lg font-bold text-white">{fmt(totalClient)} €</div>
                                </div>
                                <div className="text-[#334155] text-lg hidden md:block">→</div>
                                <div>
                                    <div className="text-xs text-[#64748B]">&nbsp;</div>
                                    <div className="text-xs text-[#64748B]">Total coûts</div>
                                    <div className="text-lg font-bold text-[#F59E0B]">{fmt(totalCost + teamCosts)} €</div>
                                </div>
                                <div className="text-[#334155] text-lg hidden md:block">=</div>
                                <div>
                                    <div className="text-xs text-[#64748B]">&nbsp;</div>
                                    <div className="text-xs text-[#64748B]">Ahmed net</div>
                                    <div className={`text-lg font-bold ${ahmedNet >= 0 ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
                                        {ahmedNet >= 0 ? "+" : ""}{fmt(ahmedNet)} € <span className="text-sm font-normal">({ahmedNetPct}%)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 shrink-0">
                                <button
                                    onClick={() => setView("recap")}
                                    className="px-5 py-3 bg-[#1E293B] text-white rounded-xl text-sm font-semibold border border-[#334155] hover:border-[#A78BFA] transition cursor-pointer"
                                >
                                    Récap Interne
                                </button>
                                <button
                                    onClick={() => setView("devis")}
                                    className="px-5 py-3 bg-[#3B82F6] text-white rounded-xl text-sm font-semibold hover:bg-[#2563EB] transition cursor-pointer"
                                >
                                    Générer Devis Client →
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {selectedServices.length === 0 && (
                    <div className="text-center py-8 text-[#475569]">
                        ↑ Sélectionne au moins une prestation pour générer un devis
                    </div>
                )}
            </main>
        </div>
    );
}
