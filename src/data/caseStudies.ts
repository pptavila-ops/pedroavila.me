type Section =
    | { text: string; callout?: never; image?: string; caption?: string }
    | { callout: string; text?: never; image?: string; caption?: string };

interface CaseStudy {
    id: string;
    title: string;
    year: string;
    company: string;
    image?: string;
    // Home-page card: a slideshow of the study's images (or just `cover`,
    // when set — a full-bleed 1600px square, key content in the centre), then
    // the title, one headline metric, a one-line summary and scope tags.
    cover?: string;
    metric: { value: string; label: string };
    summary: string;
    tags: string[];
    intro: string;
    sections: Section[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'design-transformation',
        title: 'Building the AI workflow that takes HelloFresh designers from idea to production',
        year: '2026 – Now',
        company: 'HelloFresh',
        cover: '/hellofresh-card.webp',
        metric: { value: '26+', label: 'designers supported' },
        summary: 'Built the Claude Code toolchain that lets HelloFresh designers prototype, test, and ship straight to production.',
        tags: ['AI Enablement', 'Design-to-Code', 'Design Operations'],
        image: '/card-hover.webp',
        intro: 'In early 2026, I joined the Consumer Acceleration team at HelloFresh with a mandate to close the gap between UX design and production engineering, using AI as the accelerant. What started as individual exploration with Claude Code grew into a team-wide movement, a new internal toolchain, and a new standard for how designers at HelloFresh ship.',
        sections: [
            {
                text: 'Over the course of a year, we built the infrastructure for designers to ship production-ready code, established contribution models so the system could grow with the team, and created rituals that kept 30+ designers in sync without slowing anyone down.',
            },
            {
                text: 'The result was a fundamentally different way of working. Designers now contribute directly to the codebase, components are shared across all product teams, and the gap between what\'s designed and what\'s built has nearly disappeared.',
            },
        ],
    },
    {
        id: 'pets-table',
        title: 'Designing the subscription that makes fresh dog food an easy habit',
        year: '2023 – 2025',
        company: 'The Pets Table',
        cover: '/tpt-card.webp',
        metric: { value: '3', label: 'years as sole designer' },
        summary: 'Shaped HelloFresh\'s dog food brand end to end, from the acquisition funnel to retention.',
        tags: ['Product Design', 'Growth', 'Retention'],
        intro: 'The Pets Table is HelloFresh\'s fresh, human-grade dog food subscription, a brand built almost from scratch inside the HelloFresh ecosystem. For three years I was the sole product designer embedded in the TPT squad, owning UX across the full funnel, post-checkout, and member experience. Every decision was a negotiation between innovation, speed, and system reuse.',
        sections: [
            {
                text: 'I shaped the end-to-end product experience across three years, from the acquisition funnel and checkout through to delivery management, pet profile, and retention.',
            },
            {
                text: 'Along the way: measurable CVR wins, DIY research programs, Figma foundations adopted cross-team, and AI-assisted design-to-code workflows that set a new bar across HelloFresh.',
            },
        ],
    },
    {
        id: 'movix',
        title: 'Turning Brazil\'s home financing maze into a few taps',
        year: '2017 – 2018',
        company: 'ilia Digital',
        cover: '/movix-card.webp',
        metric: { value: '9', label: 'months from idea to launch' },
        summary: 'Designed an app that made financing a home through CAIXA, one of Brazil\'s biggest banks, simple enough for anyone.',
        tags: ['Product Design', 'Mobile', 'UX Research'],
        intro: 'Móvix was an MVP built to help Brazilians finance a house through CAIXA, one of the country\'s biggest banks. Financing a home in Brazil is notoriously complex and bureaucratic. Our goal was to create a mobile experience that made simulation, documentation, and follow-up simple enough for anyone, regardless of their tech literacy.',
        sections: [
            {
                callout: 'In a market where every process is as traditional as 10 years ago, Móvix was an important step toward changing how people finance their homes.',
            },
            {
                text: 'We started with design sprints to align stakeholders around a common vision. Everyone had different opinions on what mattered most, but the sprints helped us find a shared path. I designed wireframes, UI, and prototypes alongside another designer, keeping the brand identity consistent throughout.',
            },
            {
                callout: 'The use of cards on the home screen helped us guide people through Móvix\'s experience.',
                image: '/movix-home.webp',
                caption: 'Home cards in a logical and understandable order',
            },
            {
                text: 'The target audience had little experience with financing, so simplicity was non-negotiable. We designed a card-based home screen with clear entry points into the main flows: simulation, financing, and follow-up. A small animated speech bubble guide, built with Lottie, walked users through each step of the simulation.',
            },
            {
                callout: 'Before Móvix, every simulation result had to be thrown away if not printed. Now they could be saved and shared.',
                image: '/movix-saved.webp',
                caption: 'Saved simulations give people the opportunity to compare',
            },
            {
                text: 'The financing flow let users start directly from a saved simulation, upload documentation via phone camera, and track their process alongside all participants. We tested the app with real users at a major financing fair in Brasília. Observing people aged 15 to 60 using it was eye-opening and shaped many of our final design decisions.',
                image: '/movix-testing.webp',
                caption: 'Testing Móvix with real users at a financing fair in Brasília',
            },
            {
                callout: 'We shared test feedbacks with devs and product owners in order to make Móvix better.',
                image: '/movix-team.webp',
                caption: 'Designer Jenny Soares and I at the financing fair',
            },
            {
                text: 'Móvix was published on the App Store and Google Play. It was a 9-month project by AIS Digital.',
            },
        ],
    },
    {
        id: 'mvp',
        title: 'Helping Schwarzkopf decide if an AI hair app was worth building',
        year: '2022',
        company: 'MVP Factory',
        cover: '/schwarzkopf-card.webp',
        metric: { value: 'Full', label: 'research ownership' },
        summary: 'Ran end-to-end research to tell Schwarzkopf whether an AI hair analysis app was worth building.',
        tags: ['UX Research', 'User Interviews', 'Concept Testing'],
        intro: 'Schwarzkopf wanted to know if women in Germany would trust and use an AI-powered hair analysis app before committing to building it. I led the research end-to-end: recruitment, script, ten moderated interviews, insight synthesis in Dovetail, and a final report delivered to Henkel.',
        sections: [
            {
                text: 'My role was purely research. A Schwarzkopf designer had already built a working prototype. My job was to put it in front of ten women in Germany and come back with honest answers.',
            },
            {
                text: 'The report gave Schwarzkopf a clear view of where the concept worked, where it needed work, and what would need to be true for users to trust it at scale.',
            },
        ],
    },
];
