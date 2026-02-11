/** ============================================================
 *  SITE CONFIG — PATH2REVENUE (Clearpath Systems)
 *  ============================================================
 *  Bilal EL-JINDI — Business Partner Revenue
 *  Partnership 90 jours — Sales OS Complet
 *  ============================================================ */

const WA_NUMBER = "33761941267";
const WA_MESSAGE = (ctx) =>
    `Bonjour Bilal, je viens du site ${ctx} et j'aimerais en savoir plus sur le Partnership 90 jours.`;

export const siteConfig = {
    /* ─────────────────── META & SEO ─────────────────── */
    meta: {
        title: "Path2Revenue — Ton Système de Vente Complet en 90 Jours",
        description:
            "Je construis et j'opère ton système de vente complet : process, pipeline, automatisations, closing, KPIs. En 90 jours, ta machine revenue est opérationnelle.",
        keywords:
            "sales OS, système de vente, closing, pipeline, automatisation CRM, B2B high-ticket, revenue, acquisition, Clearpath Systems, Path2Revenue, Bilal EL-JINDI",
        ogTitle: "Path2Revenue — Partnership 90 Jours",
        ogDescription: "Ton Sales OS complet en 90 jours. Process + automatisations + closing + pilotage.",
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
            { label: "Le Problème", href: "#probleme" },
            { label: "Comment Ça Marche", href: "#methode" },
            { label: "Le Système", href: "#services" },
            { label: "Garanties", href: "#honesty" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Réserver un Appel", href: "#rdv" },
    },

    /* ─────────────────── HERO ─────────────────── */
    hero: {
        eyebrow: { text: "Partnership 90 Jours — Sales OS Complet", dot: true },
        headline: "Je Construis Ton Système",
        highlightedText: "D'Acquisition",
        headlineEnd: "De A à Z. Du Lead à l'Encaissement.",
        subheadline:
            'Pas de promesses floues. Pas d\'automatisation prématurée. <strong>Un vrai système de vente</strong> — process, pipeline, automatisations, closing — construit, testé et livré en 90 jours.',
        vslUrl: null,
        vslTitle: null,
        ctas: [
            {
                text: "Réserver Mon Appel Diagnostic",
                href: "#rdv",
                style: "primary",
                arrow: true,
            },
            {
                text: "M'écrire sur WhatsApp",
                href: "__whatsapp__",
                style: "secondary",
                icon: "whatsapp",
            },
        ],
        stats: [
            { value: 90, suffix: " jours", label: "pour un système opérationnel" },
            { value: 14, suffix: "j", label: "système livré — garanti" },
            { value: 0, suffix: " fuite", label: "de lead dès J+30" },
            { value: 3, suffix: " options", label: "de closing flexibles" },
        ],
        trustBadges: [
            "Appel diagnostic gratuit",
            "Rémunération sur résultat",
            "Système livré — garanti",
        ],
    },

    /* ─────────────────── SOCIAL PROOF ─────────────────── */
    socialProof: {
        items: [
            "⚙️ Sales OS complet en 90 jours",
            "🤖 Automatisations sans fuite",
            "📊 KPIs clairs et actionnables",
            "🎯 Closing structuré et flexible",
            "📋 Système transmissible (SOP incluses)",
        ],
    },

    /* ─────────────────── PAIN POINTS ─────────────────── */
    painPoints: {
        eyebrow: "Tu Te Reconnais ?",
        headline: "Tu Vends Au",
        highlightedText: "Feeling",
        highlightColor: "danger",
        subtitle:
            "Des outils, des 'stratégies', peut-être même des automatisations… Mais le vrai sujet reste le même : tu n'as pas de système clair pour transformer une conversation en encaissement.",
        items: [
            {
                icon: "🎲",
                title: "Tes leads sont traités au feeling",
                description:
                    "Pas de pipeline clair, pas de règles de qualification, pas de process. Chaque lead suit un chemin différent — et tu perds des deals sans même t'en rendre compte.",
                stat: "Feeling ≠ Système",
            },
            {
                icon: "📉",
                title: "Ton CA est imprévisible",
                description:
                    "Certains mois tout roule, d'autres c'est le vide. Aucune visibilité, aucun KPI. Tu ne sais pas d'où viendra le prochain encaissement — ni quand.",
                stat: "0 visibilité = 0 croissance",
            },
            {
                icon: "💸",
                title: "Des leads tombent entre les mailles",
                description:
                    "No-show non relancés, follow-ups oubliés, prospects indécis qui traînent. Chaque lead perdu, c'est de l'argent qui s'évapore — et tu ne le mesures même pas.",
                stat: "Chaque fuite = CA perdu",
            },
        ],
    },

    /* ─────────────────── RESULTS ─────────────────── */
    results: {
        eyebrow: "Ce Que Je Livre",
        headline: "Ton Sales OS",
        highlightedText: "Complet",
        items: [
            {
                metric: "J+14",
                label: "Système en Production",
                description: "Pipeline opérationnel, tracking KPI en place, automatisations essentielles actives, cadence lancée. Si ce n'est pas livré : je prolonge gratuitement.",
                badge: "Garanti",
            },
            {
                metric: "J+30",
                label: "Zéro Fuite de Lead",
                description: "Chaque lead a un statut clair : avancé, relancé, ou disqualifié avec raison. Plus un seul prospect \"oublié\" dans un coin.",
                badge: "Garanti",
            },
            {
                metric: "CRM",
                label: "Pipeline + Scripts + Qualification",
                description: "Des stages clairs, des règles de no-show / no-decision, des scripts de call et follow-up. Tout est documenté, tout est exploitable.",
                badge: "Process",
            },
            {
                metric: "Auto",
                label: "Automatisations Essentielles",
                description: "Lead entrant → CRM → scoring → action suivante. Relances automatiques, récupération no-show, deadlines. Ce qui protège ton revenu tourne tout seul.",
                badge: "Zéro fuite",
            },
            {
                metric: "Close",
                label: "Closing Structuré",
                description: "Je close pour toi, je forme ton closer, ou je place un closer. L'objectif : que ta machine tourne avec ou sans toi, sans dépendre d'une seule personne.",
                badge: "Flexible",
            },
            {
                metric: "SOP",
                label: "Système Transmissible",
                description: "À J+90 : SOP finalisées, système stable. Tu reprends la main en autonomie, tu passes en retainer, ou tu continues en partnership. Tu choisis.",
                badge: "Autonomie",
            },
        ],
    },

    /* ─────────────────── SERVICES ─────────────────── */
    services: {
        eyebrow: "Le Système Path2Revenue",
        headline: "Ce Que Je Mets",
        highlightedText: "En Place",
        headlineEnd: "Pour Toi",
        subtitle:
            "Chaque brique est pensée pour une seule chose : que tes encaissements deviennent réguliers, mesurables et reproductibles. Pas un outil de plus — un système complet.",
        items: [
            {
                icon: "Target",
                title: "Process de Vente Clair",
                description:
                    "CRM + pipeline avec des stages et règles précises. Qualification, disqualification, scripts de call et de recadrage. Tu sais exactement quoi faire à chaque étape.",
                badge: "Fondation",
            },
            {
                icon: "Zap",
                title: "Automatisations Essentielles",
                description:
                    "Lead entrant → CRM → scoring → action. Relances automatiques par statut. Récupération no-show. Relances no-decision avec deadlines. Zéro fuite, zéro oubli.",
                badge: "Protection revenu",
            },
            {
                icon: "Phone",
                title: "Conversion & Closing",
                description:
                    "Selon ton besoin : je close moi-même, je forme ton closer (structure + QA), ou je te trouve et onboard un closer. L'objectif : une conversion stable qui ne dépend pas d'un héros.",
                badge: "Revenu direct",
                span: 2,
            },
            {
                icon: "BarChart3",
                title: "Pilotage KPI",
                description:
                    "Show rate, close rate, no-show rate, délai lead→close, objections fréquentes. Tu vois ce qui produit du revenu — et ce qui n'en produit pas.",
            },
            {
                icon: "FileText",
                title: "SOP & Transmission",
                description:
                    "Le système est conçu pour être transmis à ton équipe. Documentation complète, formation, autonomie. Tu ne dépends pas de moi.",
                badge: "Différenciateur",
            },
        ],
    },

    /* ─────────────────── PROCESS ─────────────────── */
    process: {
        eyebrow: "Ma Méthode",
        headline: "D'abord Comprendre,",
        highlightedText: "Ensuite Construire",
        steps: [
            {
                number: "01",
                title: "Build & Launch — J1 à J14",
                description:
                    "Diagnostic complet + plan d'action. Setup CRM et pipeline. Scripts + qualification. Automatisations essentielles. Lancement du premier flux. Ton système est en production.",
            },
            {
                number: "02",
                title: "Pilot & Proof — J15 à J45",
                description:
                    "Exécution terrain + itérations chaque semaine. Optimisation des relances, du show rate, de la conversion. Nettoyage du pipeline. Suivi KPI hebdomadaire ensemble.",
            },
            {
                number: "03",
                title: "Scale & Handoff — J46 à J90",
                description:
                    "SOP finalisées. Système stable et scalable. Transition du closing si nécessaire. Passation complète ou continuation en retainer — c'est toi qui décides.",
            },
        ],
    },

    /* ─────────────────── HONESTY ─────────────────── */
    honesty: {
        eyebrow: "Ma Ligne Rouge",
        headline: "Je Ne Vends Pas",
        highlightedText: "De Rêves",
        paragraphs: [
            "Je ne vais pas te promettre \"100 clients en 30 jours\". Ce serait malhonnête — et surtout, ça ne fonctionne pas comme ça.",
            "Ce que je fais : je construis un système de vente complet, je le teste sur le terrain, et je te le livre opérationnel. Avec des garanties concrètes : système en production à J+14, zéro fuite de lead à J+30.",
            "Ma rémunération est alignée sur tes résultats : un Launch Fee pour démarrer la machine + un Success Fee sur encaissement réel. Je gagne quand tu encaisses. Pas avant.",
        ],
        signature: { name: "Bilal EL-JINDI", role: "Fondateur, Path2Revenue" },
    },

    /* ─────────────────── CALENDAR ─────────────────── */
    calendar: {
        eyebrow: "Prêt à Avancer ?",
        headline: "Réserve Ton",
        highlightedText: "Appel Diagnostic",
        subtitle:
            "30 minutes ensemble pour comprendre ta situation, identifier ce qui bloque et voir si je peux t'aider. Si je ne suis pas le bon fit, je te le dis — sans tourner autour du pot.",
        benefits: [
            "Analyse de ta situation actuelle (offre, pipeline, leads)",
            "Identification des premiers leviers de revenu",
            "Plan d'action clair si ça matche",
            "Honnêteté totale — si je ne peux pas t'aider, je te le dis",
        ],
        whatsappCopy: "Tu préfères qu'on échange directement ?",
        whatsappLabel: "Écris-moi sur WhatsApp →",
    },

    /* ─────────────────── FAQ ─────────────────── */
    faq: {
        eyebrow: "FAQ",
        headline: "Questions",
        highlightedText: "Fréquentes",
        items: [
            {
                q: "Concrètement, qu'est-ce que j'achète ?",
                a: "Un Sales OS complet, construit et opéré pendant 90 jours. Ça inclut : process de vente (CRM, pipeline, qualification, scripts), automatisations essentielles (relances, no-show, no-decision), pilotage KPI et structure de closing.",
            },
            {
                q: "Tu garantis un chiffre de CA ?",
                a: "Non — et c'est volontaire. Je ne contrôle pas ton offre, ton marché ni ta réactivité. Par contre, je garantis le système en production (J+14) et l'absence de fuite de lead (J+30). Les résultats deviennent la conséquence logique d'un process maîtrisé.",
            },
            {
                q: "Pourquoi un Launch Fee + Success Fee ?",
                a: "Parce que c'est le modèle le plus aligné. Le Launch Fee couvre la construction et l'exécution, le Success Fee me rémunère sur l'impact réel. Je gagne quand tu encaisses.",
            },
            {
                q: "C'est pour qui ?",
                a: "Pour toi si tu vends du B2B ou B2C high-ticket (2 000€ à 10 000€+), que ton offre est vendable, et que tu veux un cadre orienté résultat avec exécution. Pas adapté si tu cherches des 'ventes garanties' sans t'impliquer.",
            },
            {
                q: "Et si j'ai déjà un closer ?",
                a: "Parfait. Je structure le process, les scripts et les KPI. Je forme et supervise le closer en place. J'apporte le système + le pilotage, ton closer exécute avec une structure claire.",
            },
            {
                q: "Que se passe-t-il après les 90 jours ?",
                a: "Trois options : Autonomie (tu gardes la machine + les SOP), Retainer (je continue à opérer et scaler), ou Partnership long terme avec un success fee ajusté.",
            },
            {
                q: "Combien ça coûte ?",
                a: "Le Launch Fee dépend du périmètre. L'appel diagnostic est gratuit — je cadre ta situation, je te propose un plan clair avec pricing transparent. Zéro surprise.",
            },
        ],
    },

    /* ─────────────────── FINAL CTA ─────────────────── */
    finalCTA: {
        eyebrow: "Prêt à passer du feeling au système ?",
        headline: "Ton Revenue Mérite",
        highlightedText: "De la Clarté",
        headlineEnd: "",
        subtitle:
            "Chaque jour sans process clair, c'est du CA qui s'évapore. Réserve ton appel diagnostic — 30 minutes pour savoir si je peux t'aider.",
        ctas: [
            {
                text: "Réserver Mon Appel Diagnostic",
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
        badges: ["✅ Appel 100% gratuit", "✅ Zéro engagement", "✅ Réponse sous 24h"],
    },

    /* ─────────────────── FOOTER ─────────────────── */
    footer: {
        brand: "Path2Revenue",
        tagline: "Ton système de vente complet. Du lead à l'encaissement.",
        links: [
            { label: "Le Problème", href: "#probleme" },
            { label: "Comment Ça Marche", href: "#methode" },
            { label: "Le Système", href: "#services" },
            { label: "FAQ", href: "#faq" },
        ],
        socials: [
            { platform: "linkedin", url: "https://linkedin.com/in/beljindi" },
            { platform: "instagram", url: "https://instagram.com/path2revenue" },
        ],
        legal: "© 2025 Path2Revenue — Bilal EL-JINDI. Tous droits réservés.",
    },

    /* ─────────────────── MERCI PAGE ─────────────────── */
    merci: {
        headline: "C'est Réservé",
        highlightedText: "!",
        subtitle:
            "Tu vas recevoir un email de confirmation. Prépare tes infos — ces 30 minutes sont les tiennes.",
        gift: {
            badge: "📋 Avant l'Appel",
            title: "Prépare Ces 4 Points",
            description:
                "Pour qu'on soit efficaces ensemble, garde ces éléments en tête avant notre échange.",
            benefits: [
                { icon: "🎯", label: "Ton offre + ticket moyen" },
                { icon: "📊", label: "Ta source de leads actuelle" },
                { icon: "📞", label: "Ton volume (leads/calls par semaine)" },
                { icon: "⏱️", label: "Ton cycle moyen de décision" },
            ],
            cta: {
                text: "M'écrire sur WhatsApp",
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
