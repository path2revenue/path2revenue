/** ============================================================
 *  SITE CONFIG — PATH2REVENUE
 *  ============================================================
 *  Bilal EL-JINDI — Partnership 90 jours
 *  Sales OS complet pour entrepreneurs high-ticket.
 *  ============================================================ */

const WA_NUMBER = "33761941267";
const WA_MESSAGE = (ctx) =>
    `Bonjour Bilal, je viens du site ${ctx} et j'aimerais en savoir plus sur le Partnership 90 jours.`;

export const siteConfig = {
    /* ─────────────────── META & SEO ─────────────────── */
    meta: {
        title: "Path2Revenue — Ton Système de Vente Complet en 90 Jours",
        description:
            "On construit ensemble ton système de vente complet : process, pipeline, automatisations, closing, KPIs. En 90 jours, ta machine revenue est opérationnelle.",
        keywords:
            "sales OS, système de vente, closing, pipeline, automatisation CRM, B2B high-ticket, revenue, acquisition, Path2Revenue, Bilal EL-JINDI",
        ogTitle: "Path2Revenue — Partnership 90 Jours",
        ogDescription: "Ton Sales OS complet en 90 jours. Process + automatisations + closing + pilotage.",
        ogImage: null,
        lang: "fr",
        favicon: null,
    },

    /* ─────────────────── DESIGN ─────────────────── */
    design: {
        palette: "red",
        style: "premium",
        layout: "centered",
        fontHeading: "Space Grotesk",
        fontBody: "Inter",
        fontWeights: "300;400;500;600;700;800",
        borderRadius: "12px",
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
        logo: { text: "Path2Revenue", emoji: null },
        links: [
            { label: "Problème", href: "#probleme" },
            { label: "Résultats", href: "#resultats" },
            { label: "Système", href: "#services" },
            { label: "Méthode", href: "#methode" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Réserver un Appel", href: "#rdv" },
    },

    /* ─────────────────── HERO ─────────────────── */
    hero: {
        eyebrow: { text: "Partnership 90 Jours — Sales OS Clé en Main", dot: true },
        headline: "On Construit Ton Système",
        highlightedText: "De Vente",
        headlineEnd: "Ensemble.",
        subheadline:
            'High-ticket B2B ou B2C, cycle court. <strong>Process, pipeline, automatisations, closing</strong> — tout est construit, testé et livré en 90 jours. Pour que tes encaissements deviennent réguliers et mesurables.',
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
            { value: 10, suffix: " ans", label: "de dev, reconverti vente & marketing" },
            { value: 90, suffix: " jours", label: "pour un système opérationnel" },
            { value: 14, suffix: "j", label: "première mise en production" },
            { value: 3, suffix: " clients", label: "accompagnés en parallèle max" },
        ],
        trustBadges: [
            "Appel diagnostic gratuit",
            "Rémunération alignée sur résultat",
            "Système livré et documenté",
        ],
    },

    /* ─────────────────── SOCIAL PROOF ─────────────────── */
    socialProof: {
        items: [
            "SprintMob — GTM complet, segmentation AI, prospection ciblée",
            "Imrane Dessai — Système end-to-end : ads, landing, sales, setting, closing",
            "StarsBridge System — Closing structuré, business partner revenue",
        ],
    },

    /* ─────────────────── PAIN POINTS ─────────────────── */
    painPoints: {
        eyebrow: "Tu Te Reconnais ?",
        headline: "Tu Vends Au",
        highlightedText: "Feeling",
        highlightColor: "danger",
        subtitle:
            "Tu as l'offre, les compétences, peut-être même les leads. Mais pas de système clair pour transformer une conversation en encaissement. Résultat : du CA qui glisse entre les mailles.",
        items: [
            {
                icon: "Dice5",
                title: "Tes leads sont traités au feeling",
                description:
                    "Pas de pipeline clair, pas de règles de qualification, pas de process. Chaque lead suit un chemin différent — et tu perds des deals sans même t'en rendre compte.",
                stat: "Feeling ≠ Système",
            },
            {
                icon: "TrendingDown",
                title: "Ton CA est imprévisible",
                description:
                    "Certains mois tout roule, d'autres c'est le vide. Tu ne sais pas d'où viendra le prochain encaissement — ni quand. Aucun KPI, aucune visibilité.",
                stat: "0 visibilité = 0 croissance",
            },
            {
                icon: "Unplug",
                title: "Des leads tombent entre les mailles",
                description:
                    "No-show non relancés, follow-ups oubliés, prospects indécis qui traînent sans deadline. Chaque lead perdu, c'est du CA qui s'évapore.",
                stat: "Chaque fuite = CA perdu",
            },
        ],
    },

    /* ─────────────────── RESULTS ─────────────────── */
    results: {
        eyebrow: "Ce Qu'on Livre Ensemble",
        headline: "Ton Sales OS",
        highlightedText: "Complet",
        items: [
            {
                metric: "J+14",
                label: "Système en Production",
                description: "Pipeline opérationnel, tracking KPI en place, automatisations actives, cadence lancée. Garanti — sinon on prolonge gratuitement.",
                badge: "Garanti",
            },
            {
                metric: "J+30",
                label: "Zéro Fuite de Lead",
                description: "Chaque lead a un statut clair : avancé, relancé, ou disqualifié. Plus un seul prospect oublié dans un coin.",
                badge: "Garanti",
            },
            {
                metric: "CRM",
                label: "Pipeline + Scripts + Qualification",
                description: "Des stages précis, des règles de no-show / no-decision, des scripts de call et de follow-up. Tout est documenté et exploitable.",
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
                description: "On close ensemble, on forme ton closer, ou on en place un. L'objectif : que ta machine tourne de façon stable et prévisible.",
                badge: "Flexible",
            },
            {
                metric: "SOP",
                label: "Système Transmissible",
                description: "À J+90 : SOP finalisées, système stable. Tu reprends la main en autonomie, tu passes en retainer, ou on continue ensemble. Tu choisis.",
                badge: "Autonomie",
            },
        ],
    },

    /* ─────────────────── SERVICES ─────────────────── */
    services: {
        eyebrow: "Le Système Path2Revenue",
        headline: "Ce Qu'on Construit",
        highlightedText: "Ensemble",
        headlineEnd: "",
        subtitle:
            "Chaque brique est pensée pour une seule chose : que tes encaissements deviennent réguliers, mesurables et reproductibles.",
        items: [
            {
                icon: "Target",
                title: "Process de Vente Clair",
                description:
                    "CRM + pipeline avec des stages et règles précises. Qualification, disqualification, scripts de call et de recadrage. On sait exactement quoi faire à chaque étape.",
                badge: "Fondation",
            },
            {
                icon: "Zap",
                title: "Automatisations Essentielles",
                description:
                    "Lead entrant → CRM → scoring → action. Relances automatiques. Récupération no-show. Relances no-decision avec deadlines. Zéro fuite, zéro oubli.",
                badge: "Protection revenu",
            },
            {
                icon: "Phone",
                title: "Conversion & Closing",
                description:
                    "On close ensemble, on forme ton closer (structure + QA), ou on te trouve et on onboard un closer. Conversion stable et prévisible.",
                badge: "Revenu direct",
            },
            {
                icon: "BarChart3",
                title: "Pilotage KPI",
                description:
                    "Show rate, close rate, no-show rate, délai lead→close, objections fréquentes. On voit ce qui produit du revenu — et ce qui n'en produit pas.",
                badge: "Visibilité",
            },
            {
                icon: "FileText",
                title: "SOP & Transmission",
                description:
                    "Le système est conçu pour être transmis. Documentation complète, formation, autonomie. Tu ne dépends pas de moi à long terme.",
                badge: "Autonomie",
            },
        ],
    },

    /* ─────────────────── PROCESS ─────────────────── */
    process: {
        eyebrow: "La Méthode",
        headline: "D'abord Comprendre,",
        highlightedText: "Ensuite Construire",
        steps: [
            {
                number: "01",
                title: "Build & Launch — J1 à J14",
                description:
                    "Diagnostic complet de ta situation. Setup CRM et pipeline. Scripts + qualification. Automatisations essentielles. Lancement du premier flux. Système en production garanti.",
            },
            {
                number: "02",
                title: "Pilot & Proof — J15 à J45",
                description:
                    "Exécution terrain et itérations chaque semaine. Optimisation des relances, du show rate, de la conversion. Nettoyage du pipeline et suivi KPI hebdomadaire.",
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
        eyebrow: "Transparence",
        headline: "Pas De Promesses",
        highlightedText: "En L'Air",
        paragraphs: [
            "Je ne vais pas te promettre '100 clients en 30 jours'. Ce serait malhonnête — et ça ne fonctionne pas comme ça.",
            "Ce que je fais : je construis avec toi un système de vente, on le teste sur le terrain, et je te le livre opérationnel. Avec des garanties concrètes : système en production à J+14, zéro fuite de lead à J+30.",
            "Ma rémunération est alignée : un Launch Fee pour enclencher la machine, plus un Success Fee sur encaissement réel. Je gagne quand tu encaisses — pas avant.",
        ],
        signature: { name: "Bilal EL-JINDI", role: "10 ans de dev, reconverti sales ops & marketing" },
    },

    /* ─────────────────── CALENDAR ─────────────────── */
    calendar: {
        eyebrow: "Prêt à Avancer ?",
        headline: "Réserve Ton",
        highlightedText: "Appel Diagnostic",
        subtitle:
            "30 minutes pour comprendre ta situation, identifier ce qui bloque, et voir si on peut avancer ensemble. Si ce n'est pas le bon moment, je te le dis — sans tourner autour du pot.",
        benefits: [
            "Analyse de ta situation actuelle",
            "Identification des premiers leviers de revenu",
            "Plan d'action clair si ça matche",
            "Transparence totale — pas de fausse promesse",
        ],
        whatsappCopy: "Tu préfères qu'on échange directement ?",
        whatsappLabel: "Écris-moi sur WhatsApp",
    },

    /* ─────────────────── FAQ ─────────────────── */
    faq: {
        eyebrow: "FAQ",
        headline: "Questions",
        highlightedText: "Fréquentes",
        items: [
            {
                q: "C'est pour qui exactement ?",
                a: "Entrepreneurs et indépendants qui vendent du high-ticket (B2B ou B2C), avec un cycle de vente court. Tu as l'offre, les leads arrivent — mais pas de système pour convertir et encaisser de façon régulière.",
            },
            {
                q: "Concrètement, qu'est-ce qu'on construit ensemble ?",
                a: "Un Sales OS complet : process de vente (CRM, pipeline, qualification, scripts), automatisations (relances, no-show, no-decision), pilotage KPI et structure de closing. Tout est documenté et transmissible.",
            },
            {
                q: "Tu garantis un chiffre de CA ?",
                a: "Non — et c'est volontaire. Je ne contrôle pas ton offre, ton marché ni ta réactivité. Par contre, je garantis le système en production (J+14) et l'absence de fuite de lead (J+30). Les résultats deviennent la conséquence d'un process maîtrisé.",
            },
            {
                q: "Pourquoi un Launch Fee + Success Fee ?",
                a: "Parce que c'est le modèle le plus aligné. Le Launch Fee couvre la construction et l'exécution. Le Success Fee me rémunère sur l'impact réel. Je gagne quand tu encaisses.",
            },
            {
                q: "Quel est ton background ?",
                a: "10 ans de développement (tech, automatisation, systèmes), puis une reconversion complète en vente, sales ops et marketing — payant et organique. J'ai construit des systèmes GTM pour SprintMob, un pipeline end-to-end pour Imrane Dessai, et je suis business partner revenue pour StarsBridge System.",
            },
            {
                q: "Et si j'ai déjà un closer ?",
                a: "Parfait. On structure le process, les scripts et les KPI. On forme et supervise ton closer. J'apporte le système et le pilotage, ton closer exécute avec une structure claire.",
            },
            {
                q: "Que se passe-t-il après les 90 jours ?",
                a: "Trois options : Autonomie (tu gardes la machine + les SOP), Retainer (je continue à opérer et scaler), ou Partnership long terme avec un success fee ajusté.",
            },
            {
                q: "Combien ça coûte ?",
                a: "Le Launch Fee dépend du périmètre. L'appel diagnostic est gratuit — on cadre ta situation, je te propose un plan clair avec pricing transparent. Zéro surprise.",
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
            "Chaque jour sans process clair, c'est du CA qui s'évapore. Réserve ton appel diagnostic — 30 minutes pour voir si on peut avancer ensemble.",
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
        badges: ["Appel 100% gratuit", "Zéro engagement", "Réponse sous 24h"],
    },

    /* ─────────────────── FOOTER ─────────────────── */
    footer: {
        brand: "Path2Revenue",
        tagline: "Ton système de vente. Construit ensemble.",
        links: [
            { label: "Problème", href: "#probleme" },
            { label: "Résultats", href: "#resultats" },
            { label: "Système", href: "#services" },
            { label: "Méthode", href: "#methode" },
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
            badge: "Avant l'Appel",
            title: "Prépare Ces 4 Points",
            description:
                "Pour qu'on soit efficaces ensemble, garde ces éléments en tête avant notre échange.",
            benefits: [
                { icon: "Target", label: "Ton offre + ticket moyen" },
                { icon: "BarChart3", label: "Ta source de leads actuelle" },
                { icon: "Phone", label: "Ton volume (leads/calls par semaine)" },
                { icon: "Clock", label: "Ton cycle moyen de décision" },
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
