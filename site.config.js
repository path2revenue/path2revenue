/** ============================================================
 *  SITE CONFIG — PATH2REVENUE (Clearpath Systems)
 *  ============================================================
 *  Partnership 90 jours — Sales OS Complet
 *  Du Lead à l'Encaissement
 *  ============================================================ */

const WA_NUMBER = "33761941267";
const WA_MESSAGE = (ctx) =>
    `Bonjour, je viens du site ${ctx} et j'aimerais valider mon éligibilité pour le Partnership 90 jours.`;

export const siteConfig = {
    /* ─────────────────── META & SEO ─────────────────── */
    meta: {
        title: "Path2Revenue | Partnership 90 Jours — Sales OS Complet",
        description:
            "On met en place et on opère ton système de vente complet : process, pipeline, automatisations, closing, KPIs. En 90 jours, ta machine revenue est opérationnelle.",
        keywords:
            "sales OS, système de vente, closing, pipeline, automatisation CRM, B2B high-ticket, revenue, acquisition, Clearpath Systems, Path2Revenue",
        ogTitle: "Path2Revenue | Partnership 90 Jours",
        ogDescription: "Sales OS complet en 90 jours. Process + automatisations + closing + pilotage KPI.",
        ogImage: null,
        lang: "fr",
        favicon: "🎯",
    },

    /* ─────────────────── DESIGN ─────────────────── */
    design: {
        palette: "red",
        style: "linear",
        layout: "editorial",
        fontHeading: "Space Grotesk",
        fontBody: "Inter",
        fontWeights: "300;400;500;600;700;800",
        borderRadius: "8px",
    },

    /* ─────────────────── GLOBAL LINKS ─────────────────── */
    links: {
        whatsapp: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE("Path2Revenue"))}`,
        booking: "#rdv",
        bookingEmbed:
            "https://calendly.com/bilal-el-jindi/30min",
        bookingEmbedType: "calendly",
    },

    /* ─────────────────── NAVBAR ─────────────────── */
    navbar: {
        logo: { text: "Path2Revenue", emoji: "🎯" },
        links: [
            { label: "Problème", href: "#probleme" },
            { label: "Sales OS", href: "#services" },
            { label: "Méthode", href: "#methode" },
            { label: "Garanties", href: "#honesty" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Valider Mon Éligibilité", href: "#rdv" },
    },

    /* ─────────────────── HERO ─────────────────── */
    hero: {
        eyebrow: { text: "Clearpath Systems — Partnership 90 Jours", dot: true },
        headline: "Un Chemin Clair Vers",
        highlightedText: "L'Encaissement",
        headlineEnd: "Système + Automatisations + Closing.",
        subheadline:
            'Mettre fin au "feeling" et construire une machine simple qui <strong>traite les leads vite, qualifie correctement, relance automatiquement et convertit avec une structure de closing claire</strong>.',
        vslUrl: null,
        vslTitle: null,
        ctas: [
            {
                text: "Valider Mon Éligibilité",
                href: "#rdv",
                style: "primary",
                arrow: true,
            },
            {
                text: "Échanger sur WhatsApp",
                href: "__whatsapp__",
                style: "secondary",
                icon: "whatsapp",
            },
        ],
        stats: [
            { value: 90, suffix: " jours", label: "pour un système opérationnel" },
            { value: 14, suffix: "j", label: "système en production garanti" },
            { value: 0, suffix: " fuite", label: "de lead — garanti à J+30" },
            { value: 3, suffix: " options", label: "closing : on close, on forme, on place" },
        ],
        trustBadges: [
            "Appel diagnostic gratuit",
            "Rémunération alignée (Success Fee)",
            "Garantie système livré",
        ],
    },

    /* ─────────────────── SOCIAL PROOF ─────────────────── */
    socialProof: {
        items: [
            "⚙️ Sales OS complet livré",
            "🤖 Automatisations zéro fuite",
            "📊 Dashboard KPI intégré",
            "🎯 Closing structuré",
            "🔁 Process reproductible et transmissible",
        ],
    },

    /* ─────────────────── PAIN POINTS ─────────────────── */
    painPoints: {
        eyebrow: "Le Vrai Problème",
        headline: "Tu Vends Au",
        highlightedText: "Feeling",
        highlightColor: "danger",
        subtitle:
            "Des outils, des automatisations, des 'stratégies'… mais le vrai sujet reste le même : comment une conversation devient un encaissement.",
        items: [
            {
                icon: "🎲",
                title: "Tes leads sont traités au feeling",
                description:
                    "Pas de CRM propre, pas de pipeline clair, pas de règles de qualification. Chaque lead suit un chemin différent et tu perds des deals sans même le savoir.",
                stat: "Feeling ≠ Système",
            },
            {
                icon: "📉",
                title: "Ton CA est imprévisible mois après mois",
                description:
                    "Certains mois tu signes, d'autres non. Aucune visibilité sur le pipeline. Tu ne sais pas d'où viendra le prochain encaissement. Le revenu n'est pas pilotable.",
                stat: "0 KPI = 0 prévisibilité",
            },
            {
                icon: "💸",
                title: "Des leads tombent entre les mailles",
                description:
                    "No-show non relancés, follow-ups oubliés, no-decision qui traînent. Chaque lead perdu, c'est du CA qui s'évapore. Et tu ne le mesures même pas.",
                stat: "Chaque fuite = argent perdu",
            },
        ],
    },

    /* ─────────────────── RESULTS ─────────────────── */
    results: {
        eyebrow: "Ce Qu'on Livre",
        headline: "Un Sales OS",
        highlightedText: "Complet",
        items: [
            {
                metric: "J+14",
                label: "Système en Production — Garanti",
                description: "Pipeline opérationnel, tracking KPI en place, automatisations essentielles actives, cadence lancée.",
                badge: "Garantie 1",
            },
            {
                metric: "J+30",
                label: "Zéro Fuite — Garanti",
                description: "Aucun lead laissé sans statut. Tout lead est soit avancé, relancé, ou disqualifié (raison notée).",
                badge: "Garantie 2",
            },
            {
                metric: "CRM",
                label: "Pipeline + Qualification + Scripts",
                description: "Stages clairs, règles no-show / no-decision / stalled deals, dashboard KPI (activité → calls → encaissements).",
                badge: "Process",
            },
            {
                metric: "Auto",
                label: "Automatisations Essentielles",
                description: "Lead entrant → CRM → scoring → next step. Relances automatiques, récupération no-show, handoff structuré.",
                badge: "Zéro fuite",
            },
            {
                metric: "Close",
                label: "Conversion & Closing (Flexible)",
                description: "On close pour toi, on forme ton closer, ou on place un closer. La machine tourne avec ou sans toi.",
                badge: "Revenu",
            },
            {
                metric: "SOP",
                label: "Système Transmissible",
                description: "À J+90 : SOP finalisées, système stable et scalable. Autonomie ou retainer, tu choisis.",
                badge: "Autonomie",
            },
        ],
    },

    /* ─────────────────── SERVICES ─────────────────── */
    services: {
        eyebrow: "Le Sales OS Path2Revenue",
        headline: "Ce Qu'on Met",
        highlightedText: "En Place",
        headlineEnd: "Pour Toi",
        subtitle:
            "Un système complet, pas un outil de plus. Chaque brique s'intègre pour une seule chose : des encaissements réguliers, mesurables et reproductibles.",
        items: [
            {
                icon: "Target",
                title: "1. Process Clair (Le Cœur)",
                description:
                    "CRM + pipeline (stages + règles), qualifications + disqualifiers, scripts (call + follow-up + recadrage), dashboard KPI.",
                badge: "Fondation",
            },
            {
                icon: "Zap",
                title: "2. Automatisations Essentielles",
                description:
                    "Lead entrant → CRM → scoring → next step. Tâches + relances automatiques. Récupération no-show. Relances no-decision + deadlines.",
                badge: "Zéro fuite",
            },
            {
                icon: "Phone",
                title: "3. Conversion & Closing",
                description:
                    "On close (closer Clearpath), on forme ton closer (structure + QA), ou on place un closer (sélection + onboarding + process). Flexible.",
                badge: "Revenu direct",
                span: 2,
            },
            {
                icon: "BarChart3",
                title: "4. Pilotage KPI",
                description:
                    "Show rate, close rate, no-show rate, délai lead→close, objections fréquentes. Tu sais exactement ce qui produit du revenu.",
            },
            {
                icon: "FileText",
                title: "5. SOP & Transmission",
                description:
                    "Le système est conçu pour être transmis. Documentation, formation, autonomie. Tu ne dépends pas de nous.",
                badge: "Différenciateur",
            },
        ],
    },

    /* ─────────────────── PROCESS ─────────────────── */
    process: {
        eyebrow: "La Méthode",
        headline: "Médecin D'abord,",
        highlightedText: "Chirurgien Ensuite",
        steps: [
            {
                number: "01",
                title: "Build & Launch — J1 à J14",
                description:
                    "Diagnostic + plan. Setup CRM/pipeline. Scripts + qualification. Automatisations essentielles. Lancement du flux. Système en production garanti.",
            },
            {
                number: "02",
                title: "Pilot & Proof — J15 à J45",
                description:
                    "Exécution + itérations hebdo. Optimisation relances / show rate / conversion. Nettoyage pipeline + règles strictes. Suivi KPI hebdo.",
            },
            {
                number: "03",
                title: "Scale & Handoff — J46 à J90",
                description:
                    "SOP finalisées. Système stable et scalable. Transition closing (former/placer). Autonomie ou retainer — tu choisis.",
            },
        ],
    },

    /* ─────────────────── HONESTY ─────────────────── */
    honesty: {
        eyebrow: "Notre Ligne Rouge",
        headline: "On Ne Vend Pas",
        highlightedText: "Un Rêve",
        paragraphs: [
            "On vend un système + une exécution. On ne garantit pas un chiffre de CA — ce serait malhonnête si on ne contrôle pas l'offre, le pricing, le marché et la réactivité.",
            "En revanche, on garantit : le système en production (J+14), zéro fuite de lead (J+30), et un process mesurable et pilotable.",
            "Notre rémunération est alignée : Launch Fee pour enclencher la machine + Success Fee sur encaissement réel. On gagne quand il y a du revenu, pas quand on \"travaille plus\".",
        ],
        signature: { name: "Clearpath Systems", role: "Path2Revenue Partnership" },
    },

    /* ─────────────────── CALENDAR ─────────────────── */
    calendar: {
        eyebrow: "Prochaine Étape",
        headline: "Valider Ton",
        highlightedText: "Éligibilité",
        subtitle:
            "30 minutes pour cadrer ta situation : offre, pipeline, leads, cycle de vente. On te dit honnêtement si on peut t'aider — ou pas.",
        benefits: [
            "Offre + ticket moyen analysés",
            "Source de leads identifiée",
            "Volume actuel évalué (leads/calls semaine)",
            "Cycle moyen de décision cadré",
        ],
        whatsappCopy: "Tu préfères un échange direct ?",
        whatsappLabel: "Discutons sur WhatsApp →",
    },

    /* ─────────────────── FAQ ─────────────────── */
    faq: {
        eyebrow: "FAQ",
        headline: "Questions",
        highlightedText: "Fréquentes",
        items: [
            {
                q: "Concrètement, qu'est-ce qu'on achète ?",
                a: "Un Sales OS complet mis en place et opéré pendant 90 jours : process de vente clair (CRM, pipeline, qualification, scripts), automatisations essentielles (relances, no-show, no-decision), pilotage KPI et structure de closing.",
            },
            {
                q: "Est-ce que vous garantissez un chiffre (X ventes / X CA) ?",
                a: "Non, et c'est volontaire : on ne contrôle pas l'offre, le marché ni la réactivité. En revanche, on garantit le système en production (J+14) et l'absence de fuite de lead (J+30). Les résultats deviennent la conséquence logique d'un process maîtrisé.",
            },
            {
                q: "Pourquoi un modèle Launch Fee + Success Fee ?",
                a: "C'est le modèle le plus aligné : le Launch Fee couvre la mise en place et l'exécution, le Success Fee rémunère l'impact réel sur l'encaissement. On gagne surtout quand il y a encaissement réel.",
            },
            {
                q: "C'est pour qui ?",
                a: "B2B ou B2C high-ticket (2 000€ à 10 000€+) avec une offre vendable, une marge qui permet le partage de revenu, et une vraie volonté d'exécuter. Pas adapté si tu cherches des 'ventes garanties' sans t'impliquer.",
            },
            {
                q: "Et si on a déjà un closer ?",
                a: "Parfait. On structure le process, les scripts et les KPI. On forme et QA le closer interne. Clearpath apporte le système + le pilotage, le closer exécute avec une structure claire.",
            },
            {
                q: "Que se passe-t-il après les 90 jours ?",
                a: "3 options : Autonomie (tu gardes la machine + les SOP), Retainer (on continue à opérer + scaler), ou Partnership long terme (success fee ajusté selon la structure).",
            },
            {
                q: "Combien ça coûte ?",
                a: "Le Launch Fee dépend du périmètre (complexité de l'offre, canaux à activer, état du système actuel). L'appel diagnostic est gratuit — on cadre le périmètre et on te donne un plan clair avec pricing transparent.",
            },
        ],
    },

    /* ─────────────────── FINAL CTA ─────────────────── */
    finalCTA: {
        eyebrow: "Prêt à passer du feeling au système ?",
        headline: "Ton Revenue Mérite",
        highlightedText: "Un Vrai Système",
        headlineEnd: "",
        subtitle:
            "Chaque jour sans process clair, ce sont des leads qui tombent entre les mailles et du CA qui s'évapore. On construit ta machine en 90 jours.",
        ctas: [
            {
                text: "Valider Mon Éligibilité",
                href: "#rdv",
                style: "primary",
                arrow: true,
            },
            {
                text: "WhatsApp",
                href: "__whatsapp__",
                style: "secondary",
                icon: "whatsapp",
            },
        ],
        badges: ["✅ Appel diagnostic gratuit", "✅ Rémunération alignée", "✅ Système livré garanti"],
    },

    /* ─────────────────── FOOTER ─────────────────── */
    footer: {
        brand: "Clearpath Systems",
        tagline: "Path2Revenue — Sales OS complet. Du lead à l'encaissement.",
        links: [
            { label: "Problème", href: "#probleme" },
            { label: "Sales OS", href: "#services" },
            { label: "Méthode", href: "#methode" },
            { label: "Garanties", href: "#honesty" },
            { label: "FAQ", href: "#faq" },
        ],
        socials: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/beljindi" },
        ],
        legal: "© 2025 Clearpath Systems — Path2Revenue. Tous droits réservés.",
    },

    /* ─────────────────── MERCI PAGE ─────────────────── */
    merci: {
        headline: "Ton Appel Est",
        highlightedText: "Réservé !",
        subtitle:
            "Tu vas recevoir un email de confirmation avec le lien Calendly. Prépare tes infos — ces 30 minutes sont les tiennes.",
        gift: {
            badge: "📋 Prépare Ton Diagnostic",
            title: "4 Points à Avoir en Tête",
            description:
                "Pour qu'on soit efficaces ensemble, prépare ces 4 éléments avant l'appel.",
            benefits: [
                { icon: "🎯", label: "Ton offre + ticket moyen" },
                { icon: "📊", label: "Ta source de leads actuelle" },
                { icon: "📞", label: "Ton volume (leads/calls semaine)" },
                { icon: "⏱️", label: "Ton cycle moyen de décision" },
            ],
            cta: {
                text: "Me Contacter sur WhatsApp",
                url: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE("Path2Revenue — merci"))}`,
                icon: "whatsapp",
            },
            footnote: "Appel gratuit, 30 minutes, sans engagement.",
        },
        backLink: { text: "← Retour au site", url: "/" },
    },

    /* ─────────────────── SECTIONS ORDER ─────────────────── */
    sections: [
        "hero",
        "socialProof",
        "painPoints",
        "results",
        "services",
        "process",
        "honesty",
        "calendar",
        "faq",
        "finalCTA",
    ],
};
