/** ============================================================
 *  SITE CONFIG — PATH2REVENUE
 *  ============================================================
 *  Bilal EL-JINDI — Business Partner Revenue
 *  Closing & Sales Systems | Du lead à l'encaissement
 *  ============================================================ */

const WA_NUMBER = "33761941267";
const WA_MESSAGE = (ctx) =>
    `Bonjour, je viens du site ${ctx} et j'aimerais en savoir plus sur vos systèmes d'acquisition.`;

export const siteConfig = {
    /* ─────────────────── META & SEO ─────────────────── */
    meta: {
        title: "Path2Revenue | Systèmes Complets d'Acquisition — Du Lead à l'Encaissement",
        description:
            "On construit des systèmes d'acquisition complets et pilotables. Process de vente, closing, pipeline, automatisation. Pas de promesses, du réel.",
        keywords:
            "acquisition clients, système de vente, closing, pipeline, sales automation, B2B, revenue, process commercial, Path2Revenue, Bilal EL-JINDI",
        ogTitle: "Path2Revenue | Du Lead à l'Encaissement",
        ogDescription: "Systèmes d'acquisition complets. Process d'abord, automatisation ensuite.",
        ogImage: null,
        lang: "fr",
        favicon: "🎯",
    },

    /* ─────────────────── DESIGN ─────────────────── */
    design: {
        palette: "dark", // dark: dev-centric, systems-level feel
        style: "linear", // linear: high contrast, subtle borders
        layout: "editorial", // editorial: left-aligned, serious, premium
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
            { label: "Méthode", href: "#methode" },
            { label: "Résultats", href: "#resultats" },
            { label: "Services", href: "#services" },
            { label: "Témoignages", href: "#temoignages" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Réserver un Appel", href: "#rdv" },
    },

    /* ─────────────────── HERO ─────────────────── */
    hero: {
        eyebrow: { text: "Business Partner Revenue — Closing & Sales Systems", dot: true },
        headline: "On Construit Ton Système",
        highlightedText: "D'Acquisition Complet",
        headlineEnd: "Du Lead à l'Encaissement.",
        subheadline:
            'Pas d\'outil miracle. Pas d\'automatisation prématurée. <strong>Un process qui fonctionne à la main</strong>, puis qu\'on structure, transmet et automatise.',
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
                text: "Échanger sur WhatsApp",
                href: "__whatsapp__",
                style: "secondary",
                icon: "whatsapp",
            },
        ],
        stats: [
            { value: 150, suffix: "K€+", label: "CA généré indirectement" },
            { value: 9, suffix: " ans", label: "d'expérience tech & sales" },
            { value: 30, suffix: "+", label: "RDVs en 1 webinaire" },
            { value: 14, suffix: "j", label: "pour un pilot opérationnel" },
        ],
        trustBadges: [
            "Appel 100% gratuit",
            "Zéro engagement",
            "Process avant automatisation",
        ],
    },

    /* ─────────────────── SOCIAL PROOF ─────────────────── */
    socialProof: {
        items: [
            "🎯 +150K€ de CA généré",
            "⚙️ Systèmes testés sur du réel",
            "📞 Closing & setting intégrés",
            "🏗️ Process avant automatisation",
            "🤝 Business Partner, pas prestataire",
        ],
    },

    /* ─────────────────── PAIN POINTS ─────────────────── */
    painPoints: {
        eyebrow: "Le Vrai Problème",
        headline: "Tu Empiles des Outils",
        highlightedText: "Sans Système",
        highlightColor: "danger",
        subtitle:
            "Des outils, des automatisations, des 'stratégies'… mais le vrai sujet reste le même : comment une conversation devient un encaissement.",
        items: [
            {
                icon: "🔧",
                title: "Tu empiles les outils sans process clair",
                description:
                    "CRM, séquences, IA, automations… Tu as investi dans la stack, mais personne ne sait exactement quoi faire à chaque étape du pipeline. Résultat : des leads qui tombent entre les mailles.",
                stat: "Outils ≠ Système",
            },
            {
                icon: "📉",
                title: "Ton CA est imprévisible mois après mois",
                description:
                    "Certains mois tu signes, d'autres non. Tu n'as pas de visibilité sur ton pipeline et tu ne sais pas d'où viendra le prochain client. Le revenu n'est pas pilotable.",
                stat: "0 prédictibilité = 0 croissance",
            },
            {
                icon: "🤷",
                title: "Tu automatises avant d'avoir validé ce qui fonctionne",
                description:
                    "Tu as lancé des séquences, des workflows, peut-être même de l'IA. Mais tu automatises un process qui n'a jamais été prouvé à la main. Tu scales du vide.",
                stat: "Automatiser le chaos = chaos plus rapide",
            },
        ],
    },

    /* ─────────────────── RESULTS ─────────────────── */
    results: {
        eyebrow: "Résultats Terrain",
        headline: "Ce Que Ça Donne",
        highlightedText: "Concrètement",
        items: [
            {
                metric: "150K€+",
                label: "CA Généré — Algolia EMEA",
                description: "Qualification inbound avancée, setting et introductions sur l'ensemble de la région EMEA.",
                badge: "SDR / SaaS",
            },
            {
                metric: "30+",
                label: "RDVs en 1 Webinaire",
                description: "Rendez-vous qualifiés générés en un seul webinaire live pour un client coaching.",
                badge: "StarsBridge",
            },
            {
                metric: "6",
                label: "RDVs sur 220 Cold Calls",
                description: "Bootcamp ZELIQ — prospection intensive B2B, qualification sales et décideurs.",
                badge: "Cold Outbound",
            },
            {
                metric: "3",
                label: "Clients signés en 3 semaines",
                description: "Cycle de vente complet : pub → découverte → démo → closing. 30 RDVs, 20 calls, 10 démos.",
                badge: "Full Cycle",
            },
            {
                metric: "50+",
                label: "Prospects/mois — Sprintmob",
                description: "Structuration outbound, séquences de relance, pipeline lisible et routines d'exécution.",
                badge: "Sales Ops",
            },
            {
                metric: "9 ans",
                label: "Dev Full Stack → Revenue",
                description: "Background technique (React, Node, Python, GCP) reconverti en systems thinking pour la vente.",
                badge: "Parcours",
            },
        ],
    },

    /* ─────────────────── VIDEO TESTIMONIALS ─────────────────── */
    videoTestimonials: {
        eyebrow: "En Action",
        headline: "Voir Path2Revenue",
        highlightedText: "En Pratique",
        videos: [],
    },

    /* ─────────────────── SERVICES ─────────────────── */
    services: {
        eyebrow: "Ce Qu'on Construit Pour Toi",
        headline: "Un Système",
        highlightedText: "Complet",
        headlineEnd: "Pas un Outil de Plus",
        subtitle:
            "Chaque brique est construite pour s'intégrer dans un système cohérent. On ne vend pas des pièces détachées.",
        items: [
            {
                icon: "Target",
                title: "Structuration du Process de Vente",
                description:
                    "Un process clair, étape par étape : du lead à la décision. Qualification, cadrage, next steps systématiques. Compris par toi et ton équipe.",
                badge: "Fondation",
            },
            {
                icon: "Phone",
                title: "Closing & Setting",
                description:
                    "Accompagnement ou prise en charge directe du closing. Scripts, conduite d'appels, discipline pipeline pour ne rien perdre.",
                badge: "Revenu direct",
            },
            {
                icon: "BarChart3",
                title: "Pipeline & Qualification",
                description:
                    "Règles de pipeline, critères de qualification, routines de follow-up. Le revenu devient lisible et pilotable.",
            },
            {
                icon: "Send",
                title: "Outbound & Prospection Structurée",
                description:
                    "Cibles, comptes, séquences, relances. Une prospection opérable dans le temps, pas un one-shot.",
                span: 2,
            },
            {
                icon: "Zap",
                title: "Automatisation & IA",
                description:
                    "Seulement après validation manuelle. CRM, workflows, séquences automatisées, arbitrage IA sur le bon moment.",
            },
            {
                icon: "FileText",
                title: "Reporting & Visibilité",
                description:
                    "Tableaux de bord orientés actions. Tu sais exactement ce qui produit des opportunités et ce qui ne fonctionne pas.",
            },
            {
                icon: "Users",
                title: "Transmission & Montée en Compétence",
                description:
                    "Le système est conçu pour être transmis à ton équipe. Documentation, formation, autonomie. Tu ne dépends pas de nous.",
                badge: "Différenciateur clé",
                span: 2,
            },
        ],
    },

    /* ─────────────────── PROCESS ─────────────────── */
    process: {
        eyebrow: "La Méthode Path2Revenue",
        headline: "Process D'abord,",
        highlightedText: "Automatisation Ensuite",
        steps: [
            {
                number: "01",
                title: "Appel Diagnostic",
                description:
                    "On analyse ta situation actuelle : ton offre, ton pipeline, ton process de vente. On identifie ce qui bloque réellement le revenu.",
            },
            {
                number: "02",
                title: "Pilot — 14 à 30 jours",
                description:
                    "Des leads réels, des conversations réelles. Pas de théorie. On prouve ce qui convertit avec de l'exécution terrain avant de construire quoi que ce soit.",
            },
            {
                number: "03",
                title: "Système Clair & Transmissible",
                description:
                    "À la sortie du pilot : un process de vente documenté, des règles de pipeline, des scripts. Exploitable par toi ou ton équipe, immédiatement.",
            },
            {
                number: "04",
                title: "Automatisation & Scale",
                description:
                    "Une fois — et seulement une fois — que le process est validé manuellement, on automatise. CRM, séquences, IA. Scale sur des fondations solides.",
            },
        ],
    },

    /* ─────────────────── HONESTY ─────────────────── */
    honesty: {
        eyebrow: "Ma Ligne Rouge",
        headline: "Pas D'automatisation",
        highlightedText: "Avant un Process Qui Marche",
        paragraphs: [
            "Pendant longtemps, j'ai vu des équipes empiler des outils, des automatisations et des 'stratégies'… sans jamais régler le vrai sujet : comment une conversation devient un encaissement.",
            "Aujourd'hui, j'interviens comme Business Partner Revenue, au cœur de l'exécution. Mon rôle est de rendre la vente claire, opérable et transmissible.",
            "Si tu veux quelqu'un qui te promet 100 clients en 30 jours avec un funnel magique : je ne suis pas le bon interlocuteur. Si tu veux un système qui fonctionne vraiment : parlons.",
        ],
        signature: { name: "Bilal EL-JINDI", role: "Business Partner Revenue" },
    },

    /* ─────────────────── CALENDAR ─────────────────── */
    calendar: {
        eyebrow: "Prêt à Structurer Ton Acquisition ?",
        headline: "Réserve Ton Appel",
        highlightedText: "Diagnostic",
        subtitle:
            "30 minutes pour comprendre ta situation, identifier ce qui bloque et voir si on peut travailler ensemble. Honnêtement.",
        benefits: [
            "Analyse de ton process de vente actuel",
            "Identification des leviers de revenu immédiats",
            "Recommandations concrètes, actionnables",
            "Si on n'est pas le bon fit, on te le dit",
        ],
        whatsappCopy: "Tu préfères un échange direct ?",
        whatsappLabel: "Discutons sur WhatsApp →",
    },

    /* ─────────────────── TESTIMONIALS ─────────────────── */
    testimonials: {
        eyebrow: "Témoignages",
        headline: "Ce Que Disent Ceux",
        highlightedText: "Qui Ont Travaillé",
        headlineEnd: "Avec Moi",
        items: [
            {
                stars: 5,
                quote:
                    "Nous avons eu des résultats incroyables. Son professionnalisme nous a valu de dépasser les 100K de CA.",
                name: "Bryan Wallace",
                role: "Fondateur, Agence Take Care",
                color: "linear-gradient(135deg,#3B82F6,#60A5FA)",
            },
            {
                stars: 5,
                quote:
                    "J'ai observé une augmentation de 50 clients potentiels en l'espace d'un mois. Ses stratégies de vente novatrices m'ont permis d'accéder à une clientèle diversifiée.",
                name: "Hanaria Messeleka",
                role: "Coordinatrice commerciale & marketing",
                color: "linear-gradient(135deg,#10B981,#059669)",
            },
            {
                stars: 5,
                quote:
                    "Un professionnel de la vente exceptionnel. Son impact sur notre croissance commerciale a été indéniable.",
                name: "Khalid Khamdani",
                role: "Fondateur, Easyloc Immobilier Formation",
                color: "linear-gradient(135deg,#8B5CF6,#6366F1)",
            },
            {
                stars: 5,
                quote:
                    "Un élément exceptionnel par son dynamisme et l'envie de tester de nouvelles idées. Il fait toujours le maximum pour atteindre ses objectifs.",
                name: "François Pujabe",
                role: "Cofondateur, ComptaStar",
                color: "linear-gradient(135deg,#EC4899,#8B5CF6)",
            },
            {
                stars: 5,
                quote:
                    "Bilal structure, exécute et livre. Il gère le setting, le closing, les automations et le marketing pour StarsBridgeSystem. Un vrai partenaire opérationnel.",
                name: "Ahmed Biaggini",
                role: "Fondateur, StarsBridgeSystem",
                color: "linear-gradient(135deg,#EAB308,#F59E0B)",
            },
        ],
    },

    /* ─────────────────── FAQ ─────────────────── */
    faq: {
        eyebrow: "FAQ",
        headline: "Questions",
        highlightedText: "Fréquentes",
        items: [
            {
                q: "C'est quoi exactement Path2Revenue ?",
                a: "Une approche pragmatique pour structurer l'acquisition client. On part d'un pilot terrain (14-30 jours), on prouve ce qui convertit, puis on structure, transmet et automatise. Process d'abord, outils ensuite.",
            },
            {
                q: "Tu interviens comme prestataire ou comme partenaire ?",
                a: "Comme Business Partner Revenue. Je m'intègre au cœur de l'exécution. Selon le contexte, je peux accompagner le closing avec le fondateur ou intervenir directement pour structurer le process.",
            },
            {
                q: "En combien de temps je vois des résultats ?",
                a: "Le pilot dure 14 à 30 jours. À la fin, tu as un process de vente clair, documenté et exploitable. Les premiers résultats arrivent pendant le pilot, pas après.",
            },
            {
                q: "Tu travailles avec quel type de business ?",
                a: "High-Ticket et/ou B2B en cycle court. Si ton offre dépasse 1K€ et que tu as besoin de structurer ton acquisition, on peut travailler ensemble.",
            },
            {
                q: "Pourquoi pas d'automatisation tout de suite ?",
                a: "Parce qu'automatiser un process qui ne fonctionne pas à la main, c'est scaler du vide. On valide d'abord manuellement, puis on automatise ce qui est prouvé.",
            },
            {
                q: "Et si ça ne fonctionne pas pour moi ?",
                a: "L'appel diagnostic sert exactement à ça : identifier si on est le bon fit. Si je pense ne pas pouvoir t'aider, je te le dis dès le premier échange. Zéro bullshit.",
            },
            {
                q: "Combien ça coûte ?",
                a: "Ça dépend du périmètre. On commence toujours par l'appel diagnostic (gratuit, 30 min) pour comprendre ta situation. Ensuite, proposition claire et transparente.",
            },
        ],
    },

    /* ─────────────────── FINAL CTA ─────────────────── */
    finalCTA: {
        eyebrow: "Prêt à passer du lead à l'encaissement ?",
        headline: "Ton Acquisition Mérite",
        highlightedText: "Un Vrai Système",
        headlineEnd: "",
        subtitle:
            "Chaque jour sans process clair, ce sont des deals qui tombent entre les mailles. Structurons ça ensemble.",
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
        tagline: "Systèmes d'acquisition complets. Du lead à l'encaissement.",
        links: [
            { label: "Méthode", href: "#methode" },
            { label: "Résultats", href: "#resultats" },
            { label: "Services", href: "#services" },
            { label: "Témoignages", href: "#temoignages" },
            { label: "FAQ", href: "#faq" },
        ],
        socials: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/beljindi" },
        ],
        legal: "© 2025 Path2Revenue — Bilal EL-JINDI. Tous droits réservés.",
    },

    /* ─────────────────── MERCI PAGE ─────────────────── */
    merci: {
        headline: "Ton Appel Est",
        highlightedText: "Réservé !",
        subtitle:
            "Tu vas recevoir un email de confirmation avec le lien Calendly. Prépare tes questions — ces 30 minutes sont les tiennes.",
        gift: {
            badge: "📋 En Attendant",
            title: "Prépare Ton Diagnostic",
            description:
                "Pour qu'on soit efficaces ensemble, réfléchis à ces 3 points avant l'appel : ton offre principale, ton process de vente actuel, et ton plus gros blocage pour scaler.",
            benefits: [
                { icon: "🎯", label: "Ton offre et ta cible" },
                { icon: "📊", label: "Ton pipeline actuel" },
                { icon: "🚧", label: "Ton plus gros blocage" },
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
        "testimonials",
        "faq",
        "finalCTA",
    ],
};
