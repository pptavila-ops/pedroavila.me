export type RichSection =
    | { type: 'text'; content: string }
    | { type: 'callout'; content: string }
    | { type: 'image'; src: string; caption?: string }
    | { type: 'impact'; items: { value: string; label: string; description: string }[] }
    | { type: 'process'; steps: { title: string; description: string }[] }
    | { type: 'two-column'; image: string; content: string; imageLeft?: boolean; caption?: string }
    | { type: 'divider'; label?: string }
    | { type: 'download'; label: string; href: string };

export type StoriesSlide = {
    type: 'cover' | 'text' | 'image' | 'quote' | 'gallery';
    /** Full-bleed background image (cover slides) */
    bg?: string;
    title?: string;
    subtitle?: string;
    tags?: string[];
    /** Inline image (image / gallery slides) */
    image?: string;
    images?: string[];
    caption?: string;
    text?: string;
    quote?: string;
    download?: { label: string; href: string };
};

export interface RichCaseStudy {
    id: string;
    title: string;
    year: string;
    company: string;
    role: string;
    cover: string;
    coverImages?: string[];
    intro: string;
    tags: string[];
    sections: RichSection[];
    personal?: boolean;
    /** When present, the study opens as an Instagram-Stories-style viewer */
    slides?: StoriesSlide[];
}

export const templateCaseStudy: RichCaseStudy = {
    id: 'template',
    title: 'Case Study Title Goes Here',
    year: '2024 – 2025',
    company: 'Company Name',
    role: 'Senior Product Designer',
    cover: '/card-hover.png', // Replace with actual cover image
    intro: 'This is the opening paragraph — a concise summary of the project. It should set context: what the problem was, who it affected, and what you did. Keep it to 2–3 sentences that make someone want to read further.',
    tags: ['Product Design', 'Design Systems', 'UX Research'],
    sections: [
        {
            type: 'impact',
            items: [
                { value: '40%', label: 'Faster delivery', description: 'Reduction in time from design to production across all product teams.' },
                { value: '30+', label: 'Designers onboarded', description: 'Designers enabled to work directly in code using the new workflow.' },
                { value: '3×', label: 'Component reuse', description: 'Increase in shared component adoption across squads after launch.' },
                { value: '0', label: 'Knowledge gap', description: 'All teams aligned on shared language between design and engineering.' },
            ],
        },
        {
            type: 'divider',
            label: 'The Problem',
        },
        {
            type: 'text',
            content: 'This section describes the problem space. What was broken, inefficient, or missing? Who was affected and how? Give enough context that someone unfamiliar with the domain can follow along. Be specific — avoid vague statements like "the experience was poor."',
        },
        {
            type: 'callout',
            content: 'This is a callout — use it for a key insight, a turning point in the project, or a statement that captures the core tension you were designing around.',
        },
        {
            type: 'divider',
            label: 'Design Process',
        },
        {
            type: 'process',
            steps: [
                {
                    title: 'Discovery & Research',
                    description: 'Describe how you started. What did you need to understand before designing anything? Interviews, audits, competitive analysis, stakeholder mapping — what did you do and what did you learn?',
                },
                {
                    title: 'Define & Frame',
                    description: 'How did you synthesize your findings? What frameworks or artifacts helped you align the team on the right problem to solve? This is where you show strategic thinking.',
                },
                {
                    title: 'Ideation & Exploration',
                    description: 'How did you explore solutions? Sketches, workshops, rapid prototypes — what was the range of ideas you considered and how did you narrow them down?',
                },
                {
                    title: 'Design & Iteration',
                    description: 'The main design work. What decisions did you make and why? What did you test, what failed, and what did you learn from it?',
                },
                {
                    title: 'Delivery & Handoff',
                    description: 'How did you work with engineering? What made the handoff effective? Did you contribute directly to the codebase or build working prototypes?',
                },
            ],
        },
        {
            type: 'divider',
            label: 'The Work',
        },
        {
            type: 'text',
            content: 'Introduce what you\'re about to show. This paragraph sets up the visual section below — what the user is looking at and why it matters.',
        },
        {
            type: 'image',
            src: '/card-hover.png', // Replace with actual image
            caption: 'Caption describing what this image shows and why it was a meaningful design decision.',
        },
        {
            type: 'two-column',
            image: '/movix-home.jpg', // Replace with actual image
            content: 'Use the two-column section to pair an image with explanation. This works well for showing a before/after, a specific UI detail, or a design decision that needs context. Keep the text focused on what the image shows.',
            imageLeft: true,
            caption: 'Optional caption for the image.',
        },
        {
            type: 'callout',
            content: 'Another callout — use sparingly. Each one should feel meaningful, not decorative. The best callouts are things you\'d want to quote from the project.',
        },
        {
            type: 'image',
            src: '/movix-saved.png', // Replace with actual image
            caption: 'A second full-width image. Use these for screens, flows, or any visual that benefits from full width.',
        },
        {
            type: 'divider',
            label: 'Outcome',
        },
        {
            type: 'text',
            content: 'Close the case study by reflecting on what shipped, what you learned, and what you\'d do differently. Be honest — showing self-awareness and a growth mindset is more compelling than a perfect success story.',
        },
    ],
};
