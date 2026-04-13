/** ============================================================
 *  SITE CONFIG — PATH2REVENUE
 *  ============================================================
 *  Bilal EL-JINDI · Systèmes d'acquisition B2B
 *  Pour ceux qui vendent déjà mais sans système prévisible
 *  Aligné : offer.md v2 + LinkedIn Profile v2 + GEMINI.md + Habib review
 *  ============================================================ */

const WA_NUMBER = "33761941267";
const WA_MESSAGE = (ctx) =>
    `Bonjour Bilal, je viens du site ${ctx} et j'aimerais en savoir plus sur votre système de vente B2B.`;

export const siteConfig = {
    /* ─────────────────── META & SEO ─────────────────── */
    meta: {
        title: "Path2Revenue · Votre Système d'Acquisition B2B Installé en 2 Semaines",
        description:
            "Vous vendez déjà mais votre acquisition dépend du réseau et du bouche-à-oreille. Un système d'acquisition prévisible, installé en 2 à 4 semaines, clé en main. Le système vous appartient.",
        keywords:
            "système acquisition B2B, prospection multicanal, pipeline commercial, acquisition prévisible, lead generation, outbound sales, Path2Revenue",
        ogTitle: "Path2Revenue · Système d'Acquisition B2B Prévisible",
        ogDescription: "Vous vendez mais sans contrôle. Un système d'acquisition B2B prévisible, installé en 2-4 semaines. 500K+ € de pipeline générés. Le système vous appartient.",
        ogImage: "/featured_1_system.jpg",
        lang: "fr",
        favicon: "/logo.png",
    },

    /* ─────────────────── DESIGN ─────────────────── */
    design: {
        palette: "light-premium",
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
        bookingEmbed: "https://calendly.com/bilal-el-jindi/30min",
        bookingEmbedType: "calendly",
    },

    /* ─────────────────── NAVBAR ─────────────────── */
    navbar: {
        logo: { text: "Path2Revenue", emoji: null, image: "/logo.svg" },
        links: [
            { label: "Problème", href: "#probleme" },
            { label: "Système", href: "#services" },
            { label: "Méthode", href: "#methode" },
            { label: "Résultats", href: "#resultats" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Diagnostic Gratuit", href: "#rdv" },
    },

    /* ─────────────────── HERO ─────────────────── */
    hero: {
        eyebrow: { text: "Pour ceux qui vendent déjà, mais pas de manière prévisible", dot: true },
        headline: "Vous Vendez. Mais Vous Ne Contrôlez Pas",
        highlightedText: "Comment.",
        headlineEnd: "",
        subheadline:
            'Votre offre marche. Vos clients sont satisfaits. Mais votre acquisition dépend de votre réseau, du bouche-à-oreille ou d\'une poignée de contacts. <strong>Je vous installe un système qui génère des rendez-vous qualifiés, sans dépendance.</strong> En 2 semaines.',
        vslUrl: null,
        vslTitle: null,
        ctas: [
            {
                text: "Réserver Mon Diagnostic Gratuit",
                href: "#rdv",
                style: "primary",
                arrow: true,
            },
            {
                text: "Discuter sur WhatsApp",
                href: "__whatsapp__",
                style: "secondary",
                icon: "whatsapp",
            },
        ],
        stats: [
            { value: 12, suffix: "+", label: "systèmes d'acquisition construits" },
            { value: 20, suffix: "K+", label: "prospects qualifiés traités" },
            { value: 500, suffix: "K+", label: "euros de pipeline générés pour mes clients" },
        ],
        trustBadges: [
            "Diagnostic 100% gratuit",
            "Système livré en 2-4 semaines",
            "Le système vous appartient",
        ],
    },

    /* ─────────────────── SOCIAL PROOF ─────────────────── */
    socialProof: {
        eyebrow: "Ils m'ont fait confiance",
        items: [
            { text: "Akimbo", image: "/akimbo.png", description: "Gestion du Growth Outbound B2B" },
            { text: "Algolia", image: "/algolia.png", description: "150K€+ de contrats signés issus du pipeline qualifié" },
            { text: "SprintMob", image: "/sprintmob.png", description: "Système de prospection 100% automatisé" },
            { text: "Novashield", image: "/logo_novashield_black.svg", description: "Conseil d'acquisition" },
            { text: "Programme Réitère", image: "/imrane.png", description: "Closing B2B sur offres High-Ticket" },
            { text: "StarsBridgeSystem", image: "/starsbridgesystem.png", description: "Structuration CRM et pipelines" },
        ],
    },

    /* ─────────────────── PAIN POINTS ─────────────────── */
    painPoints: {
        eyebrow: "Vous Vous Reconnaissez ?",
        headline: "Ça Tourne. Mais Vous Savez",
        highlightedText: "Que C'est Fragile.",
        subtitle:
            "Votre offre marche. Vos clients sont satisfaits. Mais votre prochain contrat, vous ne savez pas d'où il viendra.",
        items: [
            {
                icon: "trending-down",
                title: "Vous vendez grâce à votre réseau",
                description:
                    "Recommandations, anciens clients, contacts LinkedIn. Ça génère du CA. Mais vous ne décidez ni du volume, ni du timing. Le jour où ça ralentit, vous le subissez.",
                stat: "Réseau ≠ Système",
            },
            {
                icon: "layers",
                title: "Vous dépendez d'un levier que vous ne contrôlez pas",
                description:
                    "Un apporteur d'affaires. Un client historique qui représente la moitié de votre CA. L'algorithme LinkedIn. Si un seul de ces leviers lâche, votre pipe se vide.",
                stat: "Dépendance = Fragilité",
            },
            {
                icon: "clock",
                title: "Vous alternez entre production et prospection",
                description:
                    "Quand vous livrez, vous ne vendez pas. Quand vous vendez, vous ne livrez pas. Vous n'avez jamais les deux en même temps. Et le cycle recommence à chaque fois.",
                stat: "Production = Prospection en pause",
            },
            {
                icon: "bar-chart-2",
                title: "Vous ne pouvez pas prévoir votre CA à 3 mois",
                description:
                    "Pas parce que votre offre est mauvaise. Parce qu'il n'y a pas de système derrière. Juste de l'intuition et de l'espoir.",
                stat: "Pas de chiffres = Pas de système",
            },
        ],
    },

    /* ─────────────────── RESULTS (Différenciation) ─────────────────── */
    results: {
        eyebrow: "Vous Avez Peut-Être Déjà Essayé",
        headline: "La Différence Entre Vendre Et",
        highlightedText: "Avoir Un Système.",
        subtitle:
            "Vous avez déjà tenté de structurer votre acquisition. Voilà pourquoi ça n'a pas tenu.",
        items: [
            {
                metric: "Le réseau seul",
                label: "Il vous a amené vos premiers clients, mais il ne scale pas",
                description: "Vous ne décidez pas quand il produit. Et quand il ralentit, vous n'avez rien pour compenser. Ici : un système que vous contrôlez.",
                badge: "Vous décidez du volume",
            },
            {
                metric: "L'agence ou le freelance",
                label: "Vous avez délégué, mais sans résultat mesurable",
                description: "Pas de méthode, pas de données qualifiées, pas de transmission. Le jour où vous arrêtez de payer, tout s'arrête. Ici : le système vous appartient.",
                badge: "Forfait unique, pas d'abonnement",
            },
            {
                metric: "Le faire vous-même",
                label: "Vous avez testé un outil, envoyé 50 emails, abandonné",
                description: "Normal. Sans process, sans données qualifiées, sans cadence, ça ne tient pas. Ici : je le construis, vous l'opérez.",
                badge: "Process éprouvé",
            },
        ],
    },

    /* ─────────────────── SERVICES ─────────────────── */
    services: {
        eyebrow: "Ce Que Je Construis Pour Vous",
        headline: "Un Système d'Acquisition",
        highlightedText: "Complet",
        headlineEnd: "Clé-en-Main",
        subtitle:
            "Chaque brique est construite sur mesure pour votre offre, votre marché et votre cycle de vente. Vous repartez avec un système autonome qui génère des rendez-vous qualifiés.",
        items: [
            {
                icon: "target",
                title: "Votre Client Idéal, Défini avec Précision",
                description:
                    "On pose exactement qui vous ciblez : secteur, taille, signaux d'achat, critères d'exclusion. Plus de messages envoyés au hasard.",
                badge: "Phase 1",
            },
            {
                icon: "database",
                title: "Votre Base de Contacts Qualifiée",
                description:
                    "Scraping, enrichissement (email, téléphone, LinkedIn), scoring. Des contacts vérifiés et prêts à être contactés. Pas des listes achetées en vrac.",
                badge: "Phase 2",
            },
            {
                icon: "mail",
                title: "Infrastructure Email Anti-Spam",
                description:
                    "Domaines dédiés, SPF/DKIM/DMARC configurés, warm-up, délivrabilité testée. Vos emails arrivent en boîte de réception, pas en spam.",
                badge: "Phase 2",
            },
            {
                icon: "layers",
                title: "Séquences Multicanal Personnalisées",
                description:
                    "Email + LinkedIn + Cold Call. Des séquences qui parlent de la situation de votre prospect, pas des templates copiés-collés.",
                badge: "Phase 2",
            },
            {
                icon: "phone-call",
                title: "Scripts de Prospection + Closing",
                description:
                    "Frameworks de qualification, gestion des objections, battle cards. Vous savez exactement quoi dire quand un prospect répond.",
                badge: "Phase 2",
            },
            {
                icon: "bar-chart-2",
                title: "Pipeline + CRM Structuré",
                description:
                    "Pipeline avec étapes claires, scoring, routines de suivi, automatisations de relance. Plus aucun lead ne passe entre les mailles.",
                badge: "Phase 2",
            },
            {
                icon: "file-text",
                title: "Documentation + Transmission",
                description:
                    "SOPs complètes, formation, handoff documenté. Le système vous appartient. Pas d'abonnement, pas de dépendance.",
                badge: "Phase 3",
                span: 3,
            },
        ],
    },

    /* ─────────────────── PROCESS ─────────────────── */
    process: {
        eyebrow: "La Méthode",
        headline: "De Zéro à",
        highlightedText: "Opérationnel",
        subtitle:
            "Un cadre éprouvé en 4 phases. Chaque étape a des livrables concrets, vérifiables, et transmis.",
        steps: [
            {
                number: "01",
                title: "Architecture",
                subtitle: "Jours 1 à 3",
                description:
                    "On pose les fondations ensemble : diagnostic de votre offre, mapping de votre client idéal, design du système complet.",
            },
            {
                number: "02",
                title: "Construction",
                subtitle: "Jours 3 à 10",
                description:
                    "Base de données qualifiée, infrastructure email, séquences multicanal, pipeline CRM, scripts de vente. Le système prend forme.",
            },
            {
                number: "03",
                title: "Lancement",
                subtitle: "Jours 10 à 14",
                description:
                    "Pilote terrain, ajustements en temps réel, premiers rendez-vous. Votre système est en production.",
            },
            {
                number: "04",
                title: "Transmission",
                subtitle: "Jours 14 à 28",
                description:
                    "Documentation complète, formation, handoff structuré. Le système vous appartient. 30 jours de support inclus.",
            },
        ],
    },

    /* ─────────────────── HONESTY ─────────────────── */
    honesty: {
        eyebrow: "Transparence",
        headline: "Pas De Promesses",
        highlightedText: "En L'Air",
        paragraphs: [
            "Je ne promets pas \"100 clients en 30 jours.\" Ce serait malhonnête.",
            "Ma méthode est simple : on pense votre système d'acquisition ensemble, je le construis, je le teste sur le terrain, et je vous le livre opérationnel. Pas de commission mensuelle, pas d'abonnement. Le budget est discuté ensemble directement.",
            "Mon background de développeur (10+ ans) me permet de construire des systèmes techniquement solides : scraping, enrichissement, scoring, automatisations. Ce n'est pas du conseil. C'est de l'exécution.",
            "12+ systèmes installés. 100K+ € closés personnellement. 500K+ € de pipeline générés pour mes clients.",
        ],
        signature: { name: "Bilal EL-JINDI", role: "Fondateur, Path2Revenue", linkedin: "https://linkedin.com/in/beljindi" },
    },

    /* ─────────────────── CALENDAR ─────────────────── */
    calendar: {
        eyebrow: "Prêt ?",
        headline: "Réservez Votre",
        highlightedText: "Diagnostic Gratuit",
        subtitle:
            "30 minutes pour comprendre votre situation et identifier vos leviers de croissance. Pas de pitch, un échange honnête.",
        benefits: [
            "Analyse de votre offre et de votre acquisition actuelle",
            "Identification de vos principaux leviers de croissance",
            "Recommandations concrètes et actionnables",
            "Transparence totale, pas de pitch",
        ],
        whatsappCopy: "Vous préférez échanger directement ?",
        whatsappLabel: "Écrivez-moi sur WhatsApp",
    },

    /* ─────────────────── FAQ ─────────────────── */
    faq: {
        eyebrow: "FAQ",
        headline: "Questions",
        highlightedText: "Fréquentes",
        items: [
            {
                q: "C'est pour qui ?",
                a: "Pour ceux qui vendent déjà en B2B mais dont l'acquisition dépend du réseau, du bouche-à-oreille ou d'un seul canal non maîtrisé. Fondateurs, consultants, freelances experts, dirigeants de petites structures. Vous savez délivrer, il vous manque le système pour remplir votre pipe de manière prévisible.",
            },
            {
                q: "Combien ça coûte ?",
                a: "Le budget dépend de votre situation, de votre marché et de la complexité du système à construire. On en discute lors du diagnostic. Pas de commission mensuelle, pas d'abonnement. Le système vous appartient.",
            },
            {
                q: "Qu'est-ce qui est inclus ?",
                a: "Définition de votre client idéal, base de données enrichie et scorée, infrastructure email, séquences multicanal, scripts de prospection et closing, pipeline CRM, documentation complète, formation et 30 jours de support.",
            },
            {
                q: "En combien de temps c'est opérationnel ?",
                a: "2 à 4 semaines. Architecture en J1-J3, construction en J3-J10, lancement en J10-J14, transmission en J14-J28.",
            },
            {
                q: "Quelle est la différence avec une agence ?",
                a: "Une agence facture au mois et garde le système. Moi, je construis votre machine sur mesure, je vous la livre, et je m'efface. Pas d'abonnement, pas de dépendance. Le système vous appartient.",
            },
            {
                q: "J'ai déjà essayé de prospecter, ça n'a rien donné.",
                a: "C'est normal si vous n'aviez pas de process, pas de données qualifiées et pas de cadence. Ce que je construis c'est un système complet et documenté, pas un test à l'aveugle.",
            },
            {
                q: "Et après la livraison ?",
                a: "30 jours de support inclus. Ensuite, autonomie totale ou accompagnement mensuel optionnel si vous le souhaitez.",
            },
        ],
    },

    /* ─────────────────── FINAL CTA ─────────────────── */
    finalCTA: {
        eyebrow: "Chaque jour sans système, \nce sont des clients que vous ne rencontrez pas.",
        headline: "Votre Système d'Acquisition",
        highlightedText: "Vous Attend",
        headlineEnd: "",
        subtitle:
            "30 minutes de diagnostic pour savoir où vous en êtes. Pas de pitch. Un échange honnête.",
        ctas: [
            {
                text: "Réserver Mon Diagnostic Gratuit",
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
        badges: ["Diagnostic gratuit", "500K+ € de pipeline générés pour mes clients", "Système livré en 2-4 semaines"],
    },

    /* ─────────────────── FOOTER ─────────────────── */
    footer: {
        brand: "Path2Revenue",
        logo: "/logo.svg",
        tagline: "Votre système d'acquisition, clé en main.",
        links: [
            { label: "Problème", href: "#probleme" },
            { label: "Système", href: "#services" },
            { label: "Méthode", href: "#methode" },
            { label: "FAQ", href: "#faq" },
            { label: "Mentions légales", href: "/mentions-legales" },
        ],
        socials: [
            { platform: "linkedin", url: "https://linkedin.com/in/beljindi" },
        ],
        legal: "© 2026 Path2Revenue · Bilal EL-JINDI. Tous droits réservés.",
    },

    /* ─────────────────── MERCI PAGE ─────────────────── */
    merci: {
        headline: "C'est Réservé",
        highlightedText: "!",
        subtitle:
            "Vous allez recevoir un email de confirmation. Ces 30 minutes sont les vôtres.",
        gift: {
            badge: "Avant le Diagnostic",
            title: "Préparez Ces 4 Points",
            description:
                "Pour qu'on soit efficaces ensemble, gardez ces éléments en tête.",
            benefits: [
                { icon: "target", label: "Votre offre et votre ticket moyen" },
                { icon: "users", label: "Votre client idéal actuel" },
                { icon: "bar-chart-2", label: "Votre source de leads actuelle" },
                { icon: "clock", label: "Votre volume mensuel de leads" },
            ],
            cta: {
                text: "Discuter sur WhatsApp",
                url: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE("Path2Revenue · merci"))}`,
                icon: "whatsapp",
            },
            footnote: "Diagnostic gratuit, 30 minutes, sans engagement.",
        },
        backLink: { text: "← Retour au site", url: "/" },
    },

    /* ─────────────────── INLINE CTAs ─────────────────── */
    inlineCTAs: {
        "1": {
            text: "Vous vous reconnaissez ?",
            highlightedText: "Parlons-en.",
            ctas: [
                { text: "Réserver Mon Diagnostic Gratuit", href: "#rdv", style: "primary", arrow: true },
                { text: "WhatsApp", href: "__whatsapp__", style: "secondary", icon: "whatsapp" },
            ],
            microcopy: "30 min · Gratuit · Sans engagement",
        },
        "2": {
            text: "Prêt à passer à l'action ?",
            highlightedText: "Votre système vous attend.",
            ctas: [
                { text: "Réserver Mon Diagnostic Gratuit", href: "#rdv", style: "primary", arrow: true },
                { text: "WhatsApp", href: "__whatsapp__", style: "secondary", icon: "whatsapp" },
            ],
            microcopy: "Système livré en 2-4 semaines · Le système vous appartient",
        },
    },

    /* ─────────────────── SECTIONS ORDER ─────────────────── */
    sections: [
        "hero",
        "socialProof",
        "painPoints",
        "inlineCTA1",
        "results",
        "services",
        "inlineCTA2",
        "process",
        "honesty",
        "calendar",
        "faq",
        "finalCTA",
    ],
};
