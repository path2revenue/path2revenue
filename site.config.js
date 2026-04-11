/** ============================================================
 *  SITE CONFIG — PATH2REVENUE
 *  ============================================================
 *  Bilal EL-JINDI · Architecte de systèmes de vente B2B
 *  Système de vente clé-en-main livré en 2-4 semaines
 *  Aligné : offer.md v2 + LinkedIn Profile v2 + GEMINI.md
 *  ============================================================ */

const WA_NUMBER = "33761941267";
const WA_MESSAGE = (ctx) =>
    `Bonjour Bilal, je viens du site ${ctx} et j'aimerais en savoir plus sur votre système de vente B2B.`;

export const siteConfig = {
    /* ─────────────────── META & SEO ─────────────────── */
    meta: {
        title: "Path2Revenue · Votre Système de Vente B2B Installé en 2 Semaines",
        description:
            "Système de vente B2B complet installé en 2 à 4 semaines. Prospection multicanal, pipeline structuré, frameworks de vente, automatisations. Le système vous appartient.",
        keywords:
            "système de vente B2B, prospection multicanal, pipeline commercial, cold calling, closing B2B, lead generation, enrichissement données, automatisation CRM, outbound sales, Path2Revenue",
        ogTitle: "Path2Revenue · Système de Vente B2B Clé-en-Main",
        ogDescription: "Système de vente B2B complet, installé en 2-4 semaines. 100K+ closés, +500K € générés pour mes clients. Le système vous appartient.",
        ogImage: null,
        lang: "fr",
        favicon: null,
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
        eyebrow: { text: "Architecte de systèmes de vente B2B", dot: true },
        headline: "Votre Système de Vente B2B",
        highlightedText: "Installé en 2 Semaines.",
        headlineEnd: "",
        subheadline:
            'Prospection multicanal, pipeline structuré, frameworks de vente, automatisations. <strong>Le système vous appartient.</strong> Pas d\'abonnement. Pas de dépendance.',
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
            { value: 12, suffix: "+", label: "systèmes de vente construits" },
            { value: 100, suffix: "K+", label: "euros closés sur mes propres offres" },
            { value: 500, suffix: "K+", label: "euros de revenus et pipeline générés pour mes clients" },
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
            { text: "Novashield", image: "/novashield.png", description: "Conseil d'acquisition" },
            { text: "Programme Réitère", image: "/imrane.png", description: "Closing B2B sur offres High-Ticket" },
            { text: "StarsBridgeSystem", image: "/starsbridgesystem.png", description: "Structuration CRM et pipelines" },
        ],
    },

    /* ─────────────────── PAIN POINTS ─────────────────── */
    painPoints: {
        eyebrow: "Vous Vous Reconnaissez ?",
        headline: "Votre Prospection B2B Est Restée",
        highlightedText: "Bloquée Au Stade Artisanal",
        subtitle:
            "Votre offre est solide. Mais votre génération de revenus repose soit sur un réseau qui s'essouffle, soit sur de la prospection manuelle, usante et impossible à scaler.",
        items: [
            {
                icon: "trending-down",
                title: "Croissance sur pause",
                description:
                    "Le bouche-à-oreille et votre réseau ont marché jusqu'ici. Mais aujourd'hui, vous stagnez. Il est difficile de prévoir combien de contrats vous allez signer le mois prochain.",
                stat: "Recommandations ≠ Scalable",
            },
            {
                icon: "layers",
                title: "Un système épuisant",
                description:
                    "Vous avez déjà essayé d'automatiser ou d'empiler des outils métiers. Résultat : vous passez 80% de votre temps sur la gestion technique et logistique, au lieu de Closer.",
                stat: "Outils empilés = Temps perdu",
            },
            {
                icon: "database",
                title: "Données non qualifiées",
                description:
                    "Vos listes d'envoi manquent de scoring. Conséquence : des taux de réponse faméliques, et un risque permanent pour la réputation de votre domaine d'envoi (blacklist).",
                stat: "Data pauvre = Zéro réponse",
            },
            {
                icon: "clock",
                title: "Au four et au moulin",
                description:
                    "Freelance premium, associé de cabinet, dirigeant d'agence ou de PME : vous produisez ET vous vendez. Dès que vous rentrez en production, la prospection s'arrête net.",
                stat: "Production = Outbound en pause",
            },
        ],
    },

    /* ─────────────────── RESULTS (Différenciation) ─────────────────── */
    results: {
        eyebrow: "Pourquoi Path2Revenue",
        headline: "Le Marché Parle.",
        highlightedText: "Je Construis.",
        subtitle:
            "La plupart des prestataires créent de la dépendance ou livrent du conseil sans exécution. Mon approche : on design le système ensemble, je le construis, le teste, et vous le transmets.",
        items: [
            {
                metric: "Agences outbound",
                label: "Facturent au mois, gardent le système",
                description: "Je construis votre machine avec vous en 2-4 semaines, je vous transmets tout, et je m'efface. Le système vous appartient.",
                badge: "Forfait unique",
            },
            {
                metric: "Consultants sales",
                label: "Conseillent, font des slides, ne construisent rien",
                description: "On valide la stratégie ensemble, puis j'exécute le reste : enrichissement, séquences, frameworks, pipeline, automatisations.",
                badge: "Exécution",
            },
            {
                metric: "Coaches",
                label: "Enseignent la théorie, le client se débrouille",
                description: "Je vous livre un système sur-mesure, opérationnel et documenté, avec formation et support 30 jours inclus.",
                badge: "Système livré",
            },
        ],
    },

    /* ─────────────────── SERVICES ─────────────────── */
    services: {
        eyebrow: "Ce Que Je Livre",
        headline: "Un Système de Vente",
        highlightedText: "Complet",
        headlineEnd: "Clé-en-Main",
        subtitle:
            "Chaque brique est construite sur mesure pour votre offre, votre marché et votre cycle de vente. Objectif : un système autonome qui génère des rendez-vous qualifiés.",
        items: [
            {
                icon: "target",
                title: "Offre Clarifiée + ICP Mappé",
                description:
                    "Votre proposition de valeur en 30 secondes. Votre client idéal défini avec précision : secteur, taille, signaux d'achat, critères d'exclusion.",
                badge: "Phase 1",
            },
            {
                icon: "database",
                title: "Base de Données Qualifiée",
                description:
                    "Scraping, enrichissement (email, téléphone, LinkedIn), scoring algorithmique. Contacts qualifiés, vérifiés et prêts à être contactés.",
                badge: "Phase 2",
            },
            {
                icon: "mail",
                title: "Infrastructure Email Anti-Spam",
                description:
                    "Domaines dédiés, SPF/DKIM/DMARC configurés, warm-up, délivrabilité testée. Vos emails arrivent en boîte de réception.",
                badge: "Phase 2",
            },
            {
                icon: "layers",
                title: "Séquences Multicanal",
                description:
                    "Email + LinkedIn + Cold Call. Séquences personnalisées à 3 niveaux de profondeur, adaptées à votre ICP.",
                badge: "Phase 2",
            },
            {
                icon: "phone-call",
                title: "Approches Cold Call + Stratégies",
                description:
                    "Frameworks de prospection téléphonique, stratégies de closing, battle cards concurrentielles, gestion des objections.",
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
                    "SOPs complètes, formation de votre équipe, handoff documenté. Le système vous appartient. Pas d'abonnement, pas de dépendance.",
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
                    "Diagnostic de votre offre, mapping de votre client idéal, design du système complet. On pose les fondations.",
            },
            {
                number: "02",
                title: "Construction",
                subtitle: "Jours 3 à 10",
                description:
                    "Base de données, infrastructure email, séquences multicanal, pipeline CRM, frameworks de vente. Le système prend forme.",
            },
            {
                number: "03",
                title: "Lancement",
                subtitle: "Jours 10 à 14",
                description:
                    "Pilote terrain, ajustements en temps réel, premiers signaux. Votre système est en production.",
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
            "Ma méthode est simple : on pense votre système de vente ensemble, je le construis, le teste sur le terrain, et je vous le livre opérationnel. Pas de commission mensuelle, pas d'abonnement. Le budget est discuté ensemble directement.",
            "Mon background de développeur (10+ ans) me permet de garantir des systèmes techniquement robustes : scraping, enrichissement, scoring IA, automatisations. Ce n'est pas du conseil abstrait. C'est de l'exécution.",
            "12+ systèmes installés. 100K+ € closés sur mes propres offres. +500K € de revenus et pipeline générés pour mes clients.",
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
            "Analyse de votre offre et de votre prospection actuelle",
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
                a: "PME B2B, freelances confirmés, agences, cabinets de conseil et fondateurs SaaS. Bref : vous avez une offre qui marche, mais votre acquisition repose sur du bricolage manuel ou un réseau qui s'épuise.",
            },
            {
                q: "Combien ça coûte ?",
                a: "Le budget dépend de votre situation, de votre marché et de la complexité du système à construire. On en discute lors du diagnostic. Pas de commission mensuelle, pas d'abonnement. Le système vous appartient.",
            },
            {
                q: "Qu'est-ce qui est inclus ?",
                a: "Diagnostic de l'offre, mapping ICP, base de données enrichie et scorée, infrastructure email, séquences multicanal, approches cold call, pipeline CRM, documentation complète, formation et 30 jours de support.",
            },
            {
                q: "En combien de temps c'est opérationnel ?",
                a: "2 à 4 semaines. Architecture en J1-J3, construction en J3-J10, lancement en J10-J14, transmission en J14-J28.",
            },
            {
                q: "Quelle est la différence avec une agence ?",
                a: "Une agence facture au mois et garde le système. De mon côté, je construis votre machine sur-mesure avec vous, je vous la livre, et je n'interfère plus. Pas d'abonnement, pas de dépendance.",
            },
            {
                q: "Et si j'ai déjà un CRM ?",
                a: "Le système est construit sur mesure, adapté à vos outils existants. On ne remplace pas ce qui fonctionne.",
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
        headline: "Votre Système de Vente",
        highlightedText: "Vous Attend",
        headlineEnd: "",
        subtitle:
            "30 minutes de diagnostic pour savoir si votre offre est prête. Pas de pitch. Un échange honnête.",
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
        badges: ["Diagnostic gratuit", "+500K € générés pour mes clients", "Système livré en 2-4 semaines"],
    },

    /* ─────────────────── FOOTER ─────────────────── */
    footer: {
        brand: "Path2Revenue",
        logo: "/logo.svg",
        tagline: "Votre système de vente, clé en main.",
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
