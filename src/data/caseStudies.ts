type Section =
    | { text: string; callout?: never; image?: string; caption?: string }
    | { callout: string; text?: never; image?: string; caption?: string };

interface CaseStudy {
    id: string;
    title: string;
    year: string;
    company: string;
    image?: string;
    intro: string;
    sections: Section[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'design-transformation',
        title: 'Leading Design Workflow Transformation With the Help of AI',
        year: '2026 – Now',
        company: 'HelloFresh',
        image: '/card-hover.png',
        intro: 'In early 2026, I joined the Consumer Acceleration team at HelloFresh with a mandate to close the gap between UX design and production engineering — using AI as the accelerant. What started as individual exploration with Claude Code grew into a team-wide movement, a new internal toolchain, and a new standard for how designers at HelloFresh ship.',
        sections: [
            {
                text: 'Over the course of a year, we built the infrastructure for designers to ship production-ready code, established contribution models so the system could grow with the team, and created rituals that kept 30+ designers in sync without slowing anyone down.',
            },
            {
                text: 'The result was a fundamentally different way of working — designers now contribute directly to the codebase, components are shared across all product teams, and the gap between what\'s designed and what\'s built has nearly disappeared.',
            },
        ],
    },
    {
        id: 'pets-table',
        title: 'Designing The Pets Table from the Ground Up',
        year: '2023 – 2025',
        company: 'The Pets Table',
        intro: 'The Pets Table is HelloFresh\'s fresh, human-grade dog food subscription — a brand built almost from scratch inside the HelloFresh ecosystem. For three years I was the sole product designer embedded in the TPT squad, owning UX across the full funnel, post-checkout, and member experience. Every decision was a negotiation between innovation, speed, and system reuse.',
        sections: [
            {
                text: 'I shaped the end-to-end product experience across three years — from the acquisition funnel and checkout through to delivery management, pet profile, and retention.',
            },
            {
                text: 'Along the way: measurable CVR wins, DIY research programs, Figma foundations adopted cross-team, and AI-assisted design-to-code workflows that set a new bar across HelloFresh.',
            },
        ],
    },
    {
        id: 'mvp',
        title: 'Helping Early Startups Ship Their MVPs',
        year: '2021',
        company: 'MVP Factory',
        intro: 'Before HelloFresh, I worked with early-stage startups helping them go from idea to first shipped product. The common trap: founders wanting to build everything before shipping anything. My role was to find the smallest version of the product that could prove the idea. For each engagement, the process was the same: understand the core value proposition, identify the riskiest assumption, and design just enough product to test it.',
        sections: [
            {
                text: 'No extra features, no nice-to-haves, no "while we\'re at it" scope creep.',
            },
            {
                text: 'Across six products, the pattern held: the teams that shipped a focused MVP in weeks learned more than those who spent months building in isolation. Three of those products went on to raise follow-on funding. Two are still in the market today.',
            },
        ],
    },
    {
        id: 'movix',
        title: 'Designing a Home Financing App for Brazil',
        year: '2018 – 2019',
        company: 'Móvix',
        intro: 'Móvix was an MVP built to help Brazilians finance a house through CAIXA, one of the country\'s biggest banks. Financing a home in Brazil is notoriously complex and bureaucratic — our goal was to create a mobile experience that made simulation, documentation, and follow-up simple enough for anyone, regardless of their tech literacy.',
        sections: [
            {
                callout: 'In a market where every process is as traditional as 10 years ago, Móvix was an important step toward changing how people finance their homes.',
            },
            {
                text: 'We started with design sprints to align stakeholders around a common vision. Everyone had different opinions on what mattered most, but the sprints helped us find a shared path. I designed wireframes, UI, and prototypes alongside another designer, keeping the brand identity consistent throughout.',
            },
            {
                callout: 'The use of cards on the home screen helped us guide people through Móvix\'s experience.',
                image: '/movix-home.jpg',
                caption: 'Home cards in a logical and understandable order',
            },
            {
                text: 'The target audience had little experience with financing, so simplicity was non-negotiable. We designed a card-based home screen with clear entry points into the main flows: simulation, financing, and follow-up. A small animated speech bubble guide — built with Lottie — walked users through each step of the simulation.',
            },
            {
                callout: 'Before Móvix, every simulation result had to be thrown away if not printed. Now they could be saved and shared.',
                image: '/movix-saved.png',
                caption: 'Saved simulations give people the opportunity to compare',
            },
            {
                text: 'The financing flow let users start directly from a saved simulation, upload documentation via phone camera, and track their process alongside all participants. We tested the app with real users at a major financing fair in Brasília — observing people aged 15 to 60 using it was eye-opening and shaped many of our final design decisions.',
                image: '/movix-testing.jpg',
                caption: 'Testing Móvix with real users at a financing fair in Brasília',
            },
            {
                callout: 'We shared test feedbacks with devs and product owners in order to make Móvix better.',
                image: '/movix-team.jpg',
                caption: 'Designer Jenny Soares and I at the financing fair',
            },
            {
                text: 'Móvix was published on the App Store and Google Play. It was a 9-month project by AIS Digital.',
            },
        ],
    },
];
