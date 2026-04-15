/** ============================================================
 *  SITE CONFIG — PATH2REVENUE (i18n: FR + EN)
 *  ============================================================
 *  Bilal EL-JINDI · Systèmes d'acquisition B2B
 *  Config structure: siteConfig.fr / siteConfig.en
 *  Shared: design, links, sections
 *  ============================================================ */

const WA_NUMBER = "33761941267";

/* ─── SHARED (language-independent) ─── */
const shared = {
    design: {
        palette: "light-premium",
        style: "premium",
        layout: "centered",
        fontHeading: "Space Grotesk",
        fontBody: "Inter",
        fontWeights: "300;400;500;600;700;800",
        borderRadius: "12px",
    },
    links: {
        booking: "#rdv",
        bookingEmbed: "https://calendly.com/bilal-el-jindi/30min",
        bookingEmbedType: "calendly",
    },
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

/* ═══════════════════════════════════════════
   FRENCH (FR)
   ═══════════════════════════════════════════ */
const fr = {
    ...shared,
    links: {
        ...shared.links,
        whatsapp: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Bonjour Bilal, je viens du site Path2Revenue et j'aimerais en savoir plus sur votre système de vente B2B.")}`,
    },
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
            { text: "Réserver Mon Diagnostic Gratuit", href: "#rdv", style: "primary", arrow: true },
            { text: "Discuter sur WhatsApp", href: "__whatsapp__", style: "secondary", icon: "whatsapp" },
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
    services: {
        eyebrow: "Ce Que Je Construis Pour Vous",
        headline: "Un Système d'Acquisition",
        highlightedText: "Complet",
        headlineEnd: "Clé-en-Main",
        subtitle:
            "Chaque brique est construite sur mesure pour votre offre, votre marché et votre cycle de vente. Vous repartez avec un système autonome qui génère des rendez-vous qualifiés.",
        items: [
            { icon: "target", title: "Votre Client Idéal, Défini avec Précision", description: "On pose exactement qui vous ciblez : secteur, taille, signaux d'achat, critères d'exclusion. Plus de messages envoyés au hasard.", badge: "Phase 1" },
            { icon: "database", title: "Votre Base de Contacts Qualifiée", description: "Scraping, enrichissement (email, téléphone, LinkedIn), scoring. Des contacts vérifiés et prêts à être contactés. Pas des listes achetées en vrac.", badge: "Phase 2" },
            { icon: "mail", title: "Infrastructure Email Anti-Spam", description: "Domaines dédiés, SPF/DKIM/DMARC configurés, warm-up, délivrabilité testée. Vos emails arrivent en boîte de réception, pas en spam.", badge: "Phase 2" },
            { icon: "layers", title: "Séquences Multicanal Personnalisées", description: "Email + LinkedIn + Cold Call. Des séquences qui parlent de la situation de votre prospect, pas des templates copiés-collés.", badge: "Phase 2" },
            { icon: "phone-call", title: "Scripts de Prospection + Closing", description: "Frameworks de qualification, gestion des objections, battle cards. Vous savez exactement quoi dire quand un prospect répond.", badge: "Phase 2" },
            { icon: "bar-chart-2", title: "Pipeline + CRM Structuré", description: "Pipeline avec étapes claires, scoring, routines de suivi, automatisations de relance. Plus aucun lead ne passe entre les mailles.", badge: "Phase 2" },
            { icon: "file-text", title: "Documentation + Transmission", description: "SOPs complètes, formation, handoff documenté. Le système vous appartient. Pas d'abonnement, pas de dépendance.", badge: "Phase 3", span: 3 },
        ],
    },
    process: {
        eyebrow: "La Méthode",
        headline: "De Zéro à",
        highlightedText: "Opérationnel",
        subtitle:
            "Un cadre éprouvé en 4 phases. Chaque étape a des livrables concrets, vérifiables, et transmis.",
        steps: [
            { number: "01", title: "Architecture", subtitle: "Jours 1 à 3", description: "On pose les fondations ensemble : diagnostic de votre offre, mapping de votre client idéal, design du système complet." },
            { number: "02", title: "Construction", subtitle: "Jours 3 à 10", description: "Base de données qualifiée, infrastructure email, séquences multicanal, pipeline CRM, scripts de vente. Le système prend forme." },
            { number: "03", title: "Lancement", subtitle: "Jours 10 à 14", description: "Pilote terrain, ajustements en temps réel, premiers rendez-vous. Votre système est en production." },
            { number: "04", title: "Transmission", subtitle: "Jours 14 à 28", description: "Documentation complète, formation, handoff structuré. Le système vous appartient. 30 jours de support inclus." },
        ],
    },
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
    faq: {
        eyebrow: "FAQ",
        headline: "Questions",
        highlightedText: "Fréquentes",
        items: [
            { q: "C'est pour qui ?", a: "Pour ceux qui vendent déjà en B2B mais dont l'acquisition dépend du réseau, du bouche-à-oreille ou d'un seul canal non maîtrisé. Fondateurs, consultants, freelances experts, dirigeants de petites structures. Vous savez délivrer, il vous manque le système pour remplir votre pipe de manière prévisible." },
            { q: "Combien ça coûte ?", a: "Le budget dépend de votre situation, de votre marché et de la complexité du système à construire. On en discute lors du diagnostic. Pas de commission mensuelle, pas d'abonnement. Le système vous appartient." },
            { q: "Qu'est-ce qui est inclus ?", a: "Définition de votre client idéal, base de données enrichie et scorée, infrastructure email, séquences multicanal, scripts de prospection et closing, pipeline CRM, documentation complète, formation et 30 jours de support." },
            { q: "En combien de temps c'est opérationnel ?", a: "2 à 4 semaines. Architecture en J1-J3, construction en J3-J10, lancement en J10-J14, transmission en J14-J28." },
            { q: "Quelle est la différence avec une agence ?", a: "Une agence facture au mois et garde le système. Moi, je construis votre machine sur mesure, je vous la livre, et je m'efface. Pas d'abonnement, pas de dépendance. Le système vous appartient." },
            { q: "J'ai déjà essayé de prospecter, ça n'a rien donné.", a: "C'est normal si vous n'aviez pas de process, pas de données qualifiées et pas de cadence. Ce que je construis c'est un système complet et documenté, pas un test à l'aveugle." },
            { q: "Et après la livraison ?", a: "30 jours de support inclus. Ensuite, autonomie totale ou accompagnement mensuel optionnel si vous le souhaitez." },
        ],
    },
    finalCTA: {
        eyebrow: "Chaque jour sans système, \nce sont des clients que vous ne rencontrez pas.",
        headline: "Votre Système d'Acquisition",
        highlightedText: "Vous Attend",
        headlineEnd: "",
        subtitle: "30 minutes de diagnostic pour savoir où vous en êtes. Pas de pitch. Un échange honnête.",
        ctas: [
            { text: "Réserver Mon Diagnostic Gratuit", href: "#rdv", style: "primary", arrow: true },
            { text: "WhatsApp", href: "__whatsapp__", style: "secondary", icon: "whatsapp" },
        ],
        badges: ["Diagnostic gratuit", "500K+ € de pipeline générés pour mes clients", "Système livré en 2-4 semaines"],
    },
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
        socials: [{ platform: "linkedin", url: "https://linkedin.com/in/beljindi" }],
        legal: "© 2026 Path2Revenue · Bilal EL-JINDI. Tous droits réservés.",
    },

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
};


/* ═══════════════════════════════════════════
   ENGLISH (EN)
   ═══════════════════════════════════════════ */
const en = {
    ...shared,
    links: {
        ...shared.links,
        whatsapp: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Bilal, I found you through Path2Revenue and I'd like to learn more about your B2B sales system.")}`,
    },
    meta: {
        title: "Path2Revenue · Your B2B Sales System Installed in 2 Weeks",
        description:
            "You're already selling, but your pipeline depends on referrals and word-of-mouth. A predictable acquisition system, installed in 2-4 weeks, fully yours.",
        keywords:
            "B2B sales system, multichannel outreach, sales pipeline, predictable revenue, lead generation, outbound sales, Path2Revenue",
        ogTitle: "Path2Revenue · Predictable B2B Acquisition System",
        ogDescription: "You sell but don't control how. A predictable B2B sales system, installed in 2-4 weeks. €500K+ pipeline generated. The system is yours to keep.",
        ogImage: "/featured_1_system.jpg",
        lang: "en",
        favicon: "/logo.png",
    },
    navbar: {
        logo: { text: "Path2Revenue", emoji: null, image: "/logo.svg" },
        links: [
            { label: "Problem", href: "#probleme" },
            { label: "System", href: "#services" },
            { label: "Method", href: "#methode" },
            { label: "Results", href: "#resultats" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Free Strategy Call", href: "#rdv" },
    },
    hero: {
        eyebrow: { text: "For those who already sell — but not predictably", dot: true },
        headline: "You Sell. But You Don't Control",
        highlightedText: "How.",
        headlineEnd: "",
        subheadline:
            'Your offer works. Your clients are happy. But your pipeline depends on your network, word-of-mouth, or a handful of contacts. <strong>I install a system that generates qualified meetings — no dependency.</strong> In 2 weeks.',
        vslUrl: null,
        vslTitle: null,
        ctas: [
            { text: "Book My Free Strategy Call", href: "#rdv", style: "primary", arrow: true },
            { text: "Chat on WhatsApp", href: "__whatsapp__", style: "secondary", icon: "whatsapp" },
        ],
        stats: [
            { value: 12, suffix: "+", label: "sales systems built" },
            { value: 20, suffix: "K+", label: "qualified prospects processed" },
            { value: 500, suffix: "K+", label: "euros in pipeline generated for clients" },
        ],
        trustBadges: [
            "100% free strategy call",
            "System delivered in 2-4 weeks",
            "You own the system",
        ],
    },
    socialProof: {
        eyebrow: "They trusted me",
        items: [
            { text: "Akimbo", image: "/akimbo.png", description: "B2B Growth Outbound management" },
            { text: "Algolia", image: "/algolia.png", description: "€150K+ in signed contracts from qualified pipeline" },
            { text: "SprintMob", image: "/sprintmob.png", description: "Fully automated prospecting system" },
            { text: "Novashield", image: "/logo_novashield_black.svg", description: "Acquisition consulting" },
            { text: "Programme Réitère", image: "/imrane.png", description: "B2B closing on high-ticket offers" },
            { text: "StarsBridgeSystem", image: "/starsbridgesystem.png", description: "CRM and pipeline structuring" },
        ],
    },
    painPoints: {
        eyebrow: "Sound Familiar?",
        headline: "It's Working. But You Know",
        highlightedText: "It's Fragile.",
        subtitle:
            "Your offer works. Your clients are happy. But you have no idea where your next contract is coming from.",
        items: [
            {
                icon: "trending-down",
                title: "You sell through your network",
                description:
                    "Referrals, past clients, LinkedIn connections. It brings revenue. But you don't control the volume or the timing. When it slows down, you just take the hit.",
                stat: "Network ≠ System",
            },
            {
                icon: "layers",
                title: "You depend on a lever you don't control",
                description:
                    "A referral partner. A legacy client that accounts for half your revenue. The LinkedIn algorithm. If any one of these drops, your pipeline empties.",
                stat: "Dependency = Fragility",
            },
            {
                icon: "clock",
                title: "You alternate between delivery and prospecting",
                description:
                    "When you deliver, you don't sell. When you sell, you don't deliver. You never have both at the same time. And the cycle restarts every time.",
                stat: "Delivery = Prospecting on pause",
            },
            {
                icon: "bar-chart-2",
                title: "You can't forecast revenue 3 months out",
                description:
                    "Not because your offer is bad. Because there's no system behind it. Just intuition and hope.",
                stat: "No numbers = No system",
            },
        ],
    },
    results: {
        eyebrow: "You May Have Already Tried",
        headline: "The Difference Between Selling And",
        highlightedText: "Having A System.",
        subtitle:
            "You've already tried to structure your pipeline. Here's why it didn't stick.",
        items: [
            {
                metric: "Network alone",
                label: "It brought your first clients — but it doesn't scale",
                description: "You don't decide when it produces. And when it slows down, you have nothing to compensate. Here: a system you control.",
                badge: "You decide the volume",
            },
            {
                metric: "Agency or freelancer",
                label: "You delegated — but with no measurable results",
                description: "No methodology, no qualified data, no handover. The day you stop paying, everything stops. Here: the system is yours.",
                badge: "One-time fee, no subscription",
            },
            {
                metric: "Doing it yourself",
                label: "You tried a tool, sent 50 emails, and gave up",
                description: "Normal. Without a process, without qualified data, without cadence, it doesn't hold. Here: I build it, you operate it.",
                badge: "Proven process",
            },
        ],
    },
    services: {
        eyebrow: "What I Build For You",
        headline: "A Complete Sales",
        highlightedText: "System",
        headlineEnd: "Turnkey",
        subtitle:
            "Every building block is custom-built for your offer, your market, and your sales cycle. You walk away with an autonomous system that generates qualified meetings.",
        items: [
            { icon: "target", title: "Your Ideal Client, Precisely Defined", description: "We define exactly who you're targeting: industry, size, buying signals, exclusion criteria. No more messages sent at random.", badge: "Phase 1" },
            { icon: "database", title: "Your Qualified Contact Database", description: "Scraping, enrichment (email, phone, LinkedIn), scoring. Verified contacts ready to be reached. Not bulk-bought lists.", badge: "Phase 2" },
            { icon: "mail", title: "Anti-Spam Email Infrastructure", description: "Dedicated domains, SPF/DKIM/DMARC configured, warm-up, deliverability tested. Your emails land in the inbox — not spam.", badge: "Phase 2" },
            { icon: "layers", title: "Personalized Multichannel Sequences", description: "Email + LinkedIn + Cold Call. Sequences that speak to your prospect's situation — not copy-pasted templates.", badge: "Phase 2" },
            { icon: "phone-call", title: "Prospecting + Closing Scripts", description: "Qualification frameworks, objection handling, battle cards. You know exactly what to say when a prospect responds.", badge: "Phase 2" },
            { icon: "bar-chart-2", title: "Pipeline + Structured CRM", description: "Pipeline with clear stages, scoring, follow-up routines, automated reminders. No lead slips through the cracks.", badge: "Phase 2" },
            { icon: "file-text", title: "Documentation + Handover", description: "Complete SOPs, training, structured handoff. The system is yours. No subscription, no dependency.", badge: "Phase 3", span: 3 },
        ],
    },
    process: {
        eyebrow: "The Method",
        headline: "From Zero to",
        highlightedText: "Operational",
        subtitle:
            "A proven 4-phase framework. Each step has concrete, verifiable, and transferable deliverables.",
        steps: [
            { number: "01", title: "Architecture", subtitle: "Days 1 to 3", description: "We lay the foundations together: offer diagnostic, ideal client mapping, full system design." },
            { number: "02", title: "Build", subtitle: "Days 3 to 10", description: "Qualified database, email infrastructure, multichannel sequences, CRM pipeline, sales scripts. The system takes shape." },
            { number: "03", title: "Launch", subtitle: "Days 10 to 14", description: "Field pilot, real-time adjustments, first meetings booked. Your system is in production." },
            { number: "04", title: "Handover", subtitle: "Days 14 to 28", description: "Complete documentation, training, structured handoff. The system is yours. 30 days of support included." },
        ],
    },
    honesty: {
        eyebrow: "Transparency",
        headline: "No Empty",
        highlightedText: "Promises",
        paragraphs: [
            "I don't promise \"100 clients in 30 days.\" That would be dishonest.",
            "My approach is simple: we think through your sales system together, I build it, test it in the field, and hand it over fully operational. No monthly commission, no subscription. Budget is discussed together, upfront.",
            "My developer background (10+ years) lets me build technically solid systems: scraping, enrichment, scoring, automations. This isn't consulting. It's execution.",
            "12+ systems installed. €100K+ personally closed. €500K+ pipeline generated for my clients.",
        ],
        signature: { name: "Bilal EL-JINDI", role: "Founder, Path2Revenue", linkedin: "https://linkedin.com/in/beljindi" },
    },
    calendar: {
        eyebrow: "Ready?",
        headline: "Book Your",
        highlightedText: "Free Strategy Call",
        subtitle:
            "30 minutes to understand your situation and identify your growth levers. No pitch — an honest conversation.",
        benefits: [
            "Analysis of your offer and current pipeline",
            "Identification of your main growth levers",
            "Concrete, actionable recommendations",
            "Full transparency — no pitch",
        ],
        whatsappCopy: "Prefer a direct conversation?",
        whatsappLabel: "Message me on WhatsApp",
    },
    faq: {
        eyebrow: "FAQ",
        headline: "Frequently Asked",
        highlightedText: "Questions",
        items: [
            { q: "Who is this for?", a: "For B2B founders and leaders who already sell but whose pipeline depends on referrals, word-of-mouth, or a single uncontrolled channel. Founders, consultants, expert freelancers, small company leaders. You know how to deliver — you're missing the system to fill your pipeline predictably." },
            { q: "How much does it cost?", a: "The budget depends on your situation, market, and system complexity. We discuss it during the strategy call. No monthly commission, no subscription. The system is yours to keep." },
            { q: "What's included?", a: "Ideal client definition, enriched and scored database, email infrastructure, multichannel sequences, prospecting and closing scripts, CRM pipeline, complete documentation, training, and 30 days of support." },
            { q: "How fast is it operational?", a: "2 to 4 weeks. Architecture on Days 1-3, build on Days 3-10, launch on Days 10-14, handover on Days 14-28." },
            { q: "How is this different from an agency?", a: "An agency charges monthly and keeps the system. I build your custom machine, hand it over, and step back. No subscription, no dependency. The system is yours." },
            { q: "I've tried outbound before — it didn't work.", a: "That's normal if you had no process, no qualified data, and no cadence. What I build is a complete, documented system — not a shot in the dark." },
            { q: "What happens after delivery?", a: "30 days of support included. After that, full autonomy or optional monthly coaching if you need it." },
        ],
    },
    finalCTA: {
        eyebrow: "Every day without a system \nis a day you're not meeting potential clients.",
        headline: "Your Sales System Is",
        highlightedText: "Waiting For You",
        headlineEnd: "",
        subtitle: "30 minutes to know where you stand. No pitch. An honest conversation.",
        ctas: [
            { text: "Book My Free Strategy Call", href: "#rdv", style: "primary", arrow: true },
            { text: "WhatsApp", href: "__whatsapp__", style: "secondary", icon: "whatsapp" },
        ],
        badges: ["Free strategy call", "€500K+ pipeline generated for clients", "System delivered in 2-4 weeks"],
    },
    footer: {
        brand: "Path2Revenue",
        logo: "/logo.svg",
        tagline: "Your sales system, turnkey.",
        links: [
            { label: "Problem", href: "#probleme" },
            { label: "System", href: "#services" },
            { label: "Method", href: "#methode" },
            { label: "FAQ", href: "#faq" },
            { label: "Legal", href: "/mentions-legales" },
        ],
        socials: [{ platform: "linkedin", url: "https://linkedin.com/in/beljindi" }],
        legal: "© 2026 Path2Revenue · Bilal EL-JINDI. All rights reserved.",
    },

    inlineCTAs: {
        "1": {
            text: "Sound familiar?",
            highlightedText: "Let's talk.",
            ctas: [
                { text: "Book My Free Strategy Call", href: "#rdv", style: "primary", arrow: true },
                { text: "WhatsApp", href: "__whatsapp__", style: "secondary", icon: "whatsapp" },
            ],
            microcopy: "30 min · Free · No commitment",
        },
        "2": {
            text: "Ready to take action?",
            highlightedText: "Your system is waiting.",
            ctas: [
                { text: "Book My Free Strategy Call", href: "#rdv", style: "primary", arrow: true },
                { text: "WhatsApp", href: "__whatsapp__", style: "secondary", icon: "whatsapp" },
            ],
            microcopy: "System delivered in 2-4 weeks · You own the system",
        },
    },
};


/* ═══════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════ */
export const siteConfig = { fr, en };
