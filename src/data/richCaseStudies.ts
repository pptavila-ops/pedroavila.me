import type { RichCaseStudy } from './templateCaseStudy';

export const richCaseStudies: RichCaseStudy[] = [
    {
        id: 'design-transformation',
        title: 'Leading Design Workflow Transformation With the Help of AI',
        year: 'Jan 2026 – Now',
        company: 'HelloFresh',
        role: 'Consumer Acceleration',
        cover: '/card-hover.png',
        intro: 'In early 2026, I joined the Consumer Acceleration team at HelloFresh with a mandate to close the gap between UX design and production engineering — using AI as the accelerant. What started as individual exploration with Claude Code grew into a team-wide movement, a new internal toolchain, and a new standard for how designers at HelloFresh ship.',
        tags: ['Consumer Acceleration', 'Design Operations', 'AI Enablement', 'Design-to-Code', 'Design Systems', 'UX Quality'],
        sections: [
            {
                type: 'impact',
                items: [
                    { value: '1st', label: 'Designer in production code', description: 'First designer at HelloFresh to merge code directly — setting a precedent that spread company-wide.' },
                    { value: '8', label: 'UX commands shipped', description: 'A full specx-ux suite covering prototype creation, iteration, testing, publishing, and design-to-code.' },
                    { value: '9', label: 'HelloFresh Brands affected', description: 'The new design-to-code workflow changed how features are built across all nine HelloFresh brands — giving each one faster, higher-fidelity output and less engineering overhead.', logos: [
                        { src: '/brands/hellofresh-full.svg', alt: 'HelloFresh', height: 22 },
                        { src: '/brands/greenchef.svg', alt: 'Green Chef', height: 28 },
                        { src: '/brands/factor.svg', alt: 'Factor', height: 26 },
                        { src: '/brands/everyplate.svg', alt: 'EveryPlate', height: 18 },
                        { src: '/brands/chefsplate.svg', alt: "Chef's Plate", height: 34 },
                        { src: '/brands/goodchop.svg', alt: 'Good Chop', height: 28 },
                        { src: '/brands/petstable.svg', alt: 'The Pets Table', height: 20 },
                        { src: '/brands/factor-full.svg', alt: 'Factor_', height: 18 },
                        { src: '/brands/hellofresh-hf.png', alt: 'HelloFresh HF', height: 22 },
                    ] },
                    { value: '26+', label: 'Designers Supported', description: 'Enabled designers across the organisation to prototype with code and work directly in production — moving beyond static handoffs to a workflow where designers ship their own changes.' },
                ],
            },
            {
                type: 'divider',
                label: 'How It Started',
            },
            {
                type: 'text',
                content: 'Before joining the Consumer Acceleration team, I was working on The Pets Table — HelloFresh\'s pet food brand. It was there that I shipped my first feature directly into production code, without engineering support.',
            },
            {
                type: 'callout',
                content: 'I became the first designer at HelloFresh to merge code directly into production — setting a precedent that spread across the wider team.',
            },
            {
                type: 'image',
                src: '/petstable-breed.png',
                caption: 'The breed-specific message feature',
                width: '80%',
            },
            {
                type: 'text',
                content: 'The feature showed a personalised message based on the dog breed selected by the user during onboarding. We had data on the top 11 most-selected breeds — Golden Retriever, Labrador, French Bulldog, and others — and each received a tailored message with social proof and a meal count. Every other breed fell back to a general message. The goal was simple: increase conversion by making the experience feel personal at exactly the right moment. Pulling it off required more than prompting an AI — it meant genuinely understanding React, TypeScript, and how conditional rendering works in a production codebase.',
            },
            {
                type: 'text',
                content: 'I wrote the tickets, refined them with the team, joined the sprint, and implemented all five myself — from the conditional logic to the copy variants to the production merge. This was just one of the features I shipped end-to-end, but moments like this made the case for everything that came next.',
            },
            {
                type: 'divider',
                label: 'The Problem at HelloFresh (or in UX in general)',
            },
            {
                type: 'callout',
                content: 'HelloFresh had a distributed UX team spanning nine brands — each with its own codebase, its own engineering team, and its own gap between what was designed and what actually shipped.',
            },
            {
                type: 'text',
                content: 'The translation layer between design and engineering was slow and lossy. Designers filed tickets. Engineers interpreted specs. Things changed. By the time a feature shipped, it had passed through so many hands that the original intent was often diluted. There was no direct path from a design decision to production code — and no shared infrastructure to make that path shorter.',
            },
            {
                type: 'text',
                content: 'Consumer Acceleration was tasked with closing this gap. The bet was AI — specifically Claude Code as the interface between UX intention and production reality. My role was to explore what that could actually look like in practice, and then make it real for the whole team.',
            },
            {
                type: 'divider',
                label: 'Main goal: UX Quality',
            },
            {
                type: 'text',
                content: 'The first thing I built was a public-facing guide — published at ux-quality-with-claudecode.preview.hellofresh.io — teaching designers how to fix UX defects and implement improvements directly in the codebase without waiting on engineering.',
            },
            {
                type: 'image',
                src: '/card-hover.png',
                caption: 'UX Quality with Claude Code — the public guide for designers working directly in production.',
            },
            {
                type: 'text',
                content: 'The workflow had two modes: prevention and recovery. Prevention meant checking design readiness against Zest, the HelloFresh design system, before a spec went to dev. Recovery meant using Claude to make targeted code changes in an existing feature, then requesting a developer review. Both modes were documented, walkthrough-ready, and safe — the guardrails were designed for designers, not engineers.',
            },
            {
                type: 'divider',
                label: 'Spec-Machine · specx-ux',
            },
            {
                type: 'text',
                content: 'Spec-Machine was HelloFresh\'s internal AI toolchain — a hub where teams published commands that others could use. I contributed to building and shipping the specx-ux plugin: a growing suite of UX-specific commands that covered the full design workflow.',
            },
            {
                type: 'process',
                steps: [
                    {
                        title: '/create-prototype',
                        description: 'Generate production-quality HTML prototypes from text, Figma exports, screenshots, or existing HTML — in minutes, across all 9 HF brands.',
                    },
                    {
                        title: '/iterate-prototype',
                        description: 'Spin up a live local server with a side-panel feedback interface. Describe a change in plain language; Claude applies it in real time.',
                    },
                    {
                        title: '/test-prototype',
                        description: 'Run a prototype through emulated user personas to surface usability issues before a single test session is scheduled.',
                    },
                    {
                        title: '/design-change-web and /design-change-rn',
                        description: 'Implement UI changes directly in React (web) and React Native using Prototype Metadata — the bridge between design intent and production code.',
                    },
                    {
                        title: '/update-prototype and /push-prototype',
                        description: 'Update and publish prototypes to the Prototypes Playground on Vercel, shared across squads and brands.',
                    },
                    {
                        title: '/ux-preflight',
                        description: 'Automated environment check and guided setup — so every designer could get running with Claude Code without needing an engineer to help.',
                    },
                ],
            },
            {
                type: 'divider',
                label: 'Prototypes Playground',
            },
            {
                type: 'text',
                content: 'One of the recurring problems with AI-generated prototypes was that they lived on individual machines — shared in Slack, opened once, then lost. The Prototypes Playground was the answer: a shared GitHub repository connected to a Vercel deployment where designers published and referenced prototypes across squads.',
            },
            {
                type: 'image',
                src: '/card-hover.png',
                caption: 'Prototypes Playground — a shared Vercel environment for AI-generated prototypes across all HF brands.',
            },
            {
                type: 'text',
                content: 'Any designer could push a prototype to the Playground using /push-prototype and immediately share a stable URL. Squads used these URLs in Confluence, Jira tickets, and usability test sessions. It made AI prototyping feel like a real part of the workflow — not a side experiment.',
            },
            {
                type: 'divider',
                label: 'Community & Culture',
            },
            {
                type: 'text',
                content: 'Tools and documentation only go so far. The more durable change came from building a culture around them. I transformed our existing bi-weekly UX Gen meeting into UX AI Office Hours — an open forum where designers, researchers, and writers could bring real questions, share experiments in progress, and learn from each other in real time.',
            },
            {
                type: 'text',
                content: 'Sessions included a full walkthrough of the Prototype-to-Code workflow, live demos of specx-ux commands, and external speakers — including a Senior Product Designer from Shopify sharing their own AI practice. I also introduced the "UX-Gen" JIRA label to track all AI-assisted design work across the company, which created the first real visibility into what was actually being built with these tools.',
            },
            {
                type: 'text',
                content: 'Alongside this, I pioneered using Claude for Object-Oriented UX documentation — generating per-object markdown files, relationship maps, and interactive HTML diagrams directly from the codebase. The goal was to reduce the amount of documentation that lived only in someone\'s head, and share the method with the team so it could scale.',
            },
            {
                type: 'divider',
                label: 'Ripple Effects',
            },
            {
                type: 'text',
                content: 'The impact reached well beyond the UX team. What started as designer-focused tooling spread across disciplines as each team found its own way in.',
            },
            {
                type: 'chart',
                title: 'Adoption across disciplines',
                bars: [
                    {
                        label: 'Product Designers',
                        sublabel: 'design → code',
                        description: 'Merging production code, Zest components, React Native variants, accessibility fixes',
                        pct: 100,
                        color: 'hsl(180, 65%, 58%)',
                    },
                    {
                        label: 'UX Writers',
                        sublabel: '11 AI commands',
                        description: 'Content review, auditing, and creation integrated directly into Spec-Machine',
                        pct: 82,
                        color: 'hsl(270, 65%, 65%)',
                    },
                    {
                        label: 'Motion Designers',
                        sublabel: 'code-native tokens',
                        description: 'Creating and implementing motion tokens in code — replacing ProtoPie and After Effects',
                        pct: 65,
                        color: 'hsl(320, 65%, 62%)',
                    },
                    {
                        label: 'Engineers',
                        sublabel: 'AI-powered QA',
                        description: 'Co-built accessibility scanners and illustration audits powered by Claude',
                        pct: 48,
                        color: 'hsl(30, 65%, 60%)',
                    },
                ],
                caption: 'Relative adoption depth — based on volume and variety of AI workflow use per discipline.',
            },
            {
                type: 'divider',
                label: 'Into Design Systems · Berlin',
            },
            {
                type: 'text',
                content: 'In February 2026, I presented at the Into Design Systems meetup hosted at HelloFresh\'s Berlin office — sharing our AI-enabled design system work publicly for the first time. The audience included designers from Deutsche Bank and Inverse Digital. HelloFresh also sponsored the Into Design Systems Conference 2026 on March 19–20, focused on AI workflows, Claude Code, Figma MCP, and real-world design systems practice.',
            },
            {
                type: 'image',
                src: '/card-hover.png',
                caption: 'Into Design Systems meetup · Parterre, Ritterstraße · Berlin · February 2026.',
            },
            {
                type: 'divider',
                label: 'Outcome',
            },
            {
                type: 'callout',
                content: 'What started as individual exploration became a team-wide movement — and a new standard for how designers at HelloFresh ship. The infrastructure, the toolchain, the culture, and the precedent are all still running.',
            },
            {
                type: 'text',
                content: 'The most lasting signal: designers across the company began merging production code as a normal part of their job — not as an exception. Not because they were told to, but because the tools made it possible and the community made it feel safe. That shift, from design being a handoff layer to design being a direct contributor to what ships, is the thing I\'m most proud of.',
            },
        ],
    },
    {
        id: 'pets-table',
        title: 'Designing The Pets Table from the Ground Up',
        year: '2023 – 2025',
        company: 'The Pets Table · HelloFresh',
        role: 'Product Designer → Sr. Product Designer',
        cover: '/card-hover.png',
        intro: 'The Pets Table is HelloFresh\'s fresh, human-grade dog food subscription — a brand built almost from scratch inside the HelloFresh ecosystem. For three years I was the sole product designer embedded in the TPT squad, owning UX across the full funnel, post-checkout, and member experience. Tight deadlines, shared infrastructure, and limited engineering bandwidth meant every decision was a negotiation between innovation, speed, and system reuse.',
        tags: ['Product Design', 'UX Research', 'Design Systems', 'Conversion Optimisation', 'Design-to-Code'],
        sections: [
            {
                type: 'impact',
                items: [
                    { value: '3 yrs', label: 'Sole designer', description: 'Owned TPT\'s full product UX from launch through 2025 — funnel, checkout, post-checkout, and member experience.' },
                    { value: '+20%', label: 'mCVR on order summary', description: 'Redesigned free-items treatment on the order summary page. The pattern was later adopted by Good Chop.' },
                    { value: '$0.7M', label: 'TCVA', description: 'Revenue uplift from the air-dried cadence test — a design-led experiment that shaped subscription strategy.' },
                    { value: '4+', label: 'Brands influenced', description: 'TPT patterns adopted by Good Chop, Factor, and core HelloFresh — including cancellation UX and Figma structure.' },
                ],
            },
            {
                type: 'divider',
                label: 'The Context',
            },
            {
                type: 'text',
                content: 'The Pets Table launched in 2023 as HelloFresh\'s fresh, human-grade dog food subscription — a New Ventures brand built almost from scratch inside the HelloFresh ecosystem. Operating under the constraints of a new venture meant tight deadlines, limited engineering bandwidth, and a product that needed to stand on its own while sharing infrastructure with HelloFresh.',
            },
            {
                type: 'callout',
                content: 'I had to be highly strategic: deciding when to push for innovation, when to negotiate for impactful small changes, and when to lean on cross-brand learnings to move fast.',
            },
            {
                type: 'text',
                content: 'Over three years I shaped TPT\'s end-to-end product experience — from the acquisition funnel through to delivery management, pet profile, and member retention. I ran user research, built design systems foundations, drove measurable conversion improvements, and eventually pioneered AI-assisted design-to-code workflows that set a new bar across HelloFresh.',
            },
            {
                type: 'divider',
                label: '2023 · Launch & Foundations',
            },
            {
                type: 'text',
                content: 'I joined TPT at a critical moment: the brand was launching and needed a full product design foundation built quickly. From day one, the work was about establishing quality standards, not just shipping screens.',
            },
            {
                type: 'process',
                steps: [
                    {
                        title: 'Funnel & Onboarding Design',
                        description: 'Designed and refined the core acquisition funnel — the quiz, plan selection, and checkout — from early MVP through post-launch iterations. Every step was built with conversion and clarity in mind.',
                    },
                    {
                        title: 'Custom Zest-Compliant Navigation',
                        description: 'Worked alongside engineering to replace TPT\'s dependency on HelloFresh\'s generic navigation with a custom, Zest-compliant header — giving the brand its own visual identity inside the HF ecosystem.',
                    },
                    {
                        title: 'Multi-Pet Support — OOUX',
                        description: 'Initiated the OOUX process for multi-pet support — mapping objects, relationships, and flows before any screen design began. This gave the team a shared system to reason about, not just a set of wireframes.',
                    },
                    {
                        title: 'Figma MasterFlow & Component Library',
                        description: 'Established TPT\'s Figma MasterFlow and component library as canonical references. TPT became one of the most Zest-compliant brands at HelloFresh from launch — a standard I maintained throughout.',
                    },
                ],
            },
            {
                type: 'divider',
                label: '2024 · Depth, Research & Conversion Wins',
            },
            {
                type: 'text',
                content: 'With foundations in place, 2024 was about depth — running proper research programs, validating new features before build, and shipping a steady stream of measurable improvements across the funnel.',
            },
            {
                type: 'text',
                content: 'I designed and validated a new delivery scheduling feature through DIY usability testing, expanded it into variable cadences, and built a subscribable add-ons store. I also scaled continuous feedback systems using Sprig and Usabilla — creating the first real infrastructure for ongoing user insight at TPT.',
            },
            {
                type: 'impact',
                title: 'Conversion wins · 2024',
                items: [
                    { value: '+3.4%', label: 'CVR — Goals question', description: 'Added a goals question to the quiz and redesigned the plans page as part of Funnel 2.0.' },
                    { value: '+3.3%', label: 'CVR — Social proof', description: 'Introduced social proof on the delivery page in the acquisition funnel.' },
                    { value: '+0.7%', label: 'CVR — Plan transparency', description: 'Improved plan selection clarity — surfacing key information at the right moment.' },
                    { value: '+1.2%', label: 'CVR — Two-step loading', description: 'A subtle UX pattern change on the checkout loading state that reduced drop-off.' },
                ],
            },
            {
                type: 'text',
                content: 'I also introduced an improved Figma handoff structure during this period — a more systematic approach to organising files for engineering collaboration that was later adopted by other teams across HelloFresh.',
            },
            {
                type: 'divider',
                label: '2025 · Design-Led Initiatives & AI',
            },
            {
                type: 'text',
                content: 'By 2025, my work at TPT had moved beyond optimisation. I was driving design-led initiatives, influencing the core HelloFresh roadmap, and beginning to pioneer new ways of working with AI-assisted tools.',
            },
            {
                type: 'callout',
                content: 'Quick Actions on the Dashboard — a small-surface redesign on TPT — shaped the way the broader HelloFresh Refer-a-Friend experience evolved. A local insight became a cross-brand pattern.',
            },
            {
                type: 'text',
                content: 'Other initiatives from this period: a lean loyalty concept delivered through CRM and landing pages, a compliant cancellation page that was adopted across brands, a Framer-based landing page test exploring a Contentful replacement, and a surcharge pricing UX for premium protein tiers.',
            },
            {
                type: 'impact',
                title: 'Design-led results · 2025',
                items: [
                    { value: '+20%', label: 'mCVR — Free items', description: 'Redesigned the free-items treatment on the order summary. The pattern was adopted by Good Chop.' },
                    { value: '$0.7M', label: 'TCVA — Cadence test', description: 'Revenue uplift from the air-dried cadence experiment — a TPT-first test that informed subscription strategy.' },
                    { value: '1st', label: 'Designer in code', description: 'Became the first designer at HelloFresh to implement Zest design system components directly in production code.' },
                    { value: '3+', label: 'Brands adopted TPT patterns', description: 'Free Items, cancellation UX, and Figma structure each crossed over to Good Chop, Factor, and core HF.' },
                ],
            },
            {
                type: 'divider',
                label: 'Pioneering Design-to-Code',
            },
            {
                type: 'text',
                content: 'Toward the end of my time at TPT, I began using Claude Code to implement design system components directly in the production codebase. The breed-specific message feature — 11 personalised copy variants for the most-selected dog breeds, conditional logic, real social proof data — was one of the first features I shipped end-to-end without an engineering handoff.',
            },
            {
                type: 'callout',
                content: 'I became the first designer at HelloFresh to merge code directly into production — setting a precedent that eventually grew into a team-wide movement under Consumer Acceleration.',
            },
            {
                type: 'text',
                content: 'This wasn\'t about replacing engineers. It was about removing the gap between design intent and what ships — taking ownership of the full quality of what I designed, all the way to the user.',
            },
            {
                type: 'divider',
                label: 'Beyond The Pets Table',
            },
            {
                type: 'text',
                content: 'Some of the most lasting impact from three years at TPT wasn\'t on TPT itself. The Free Items redesign was adopted by Good Chop. The cancellation UX spread across brands. The Figma handoff structure was picked up cross-team. Research programs and Sprig scaling influenced multiple teams. And the AI design-to-code experiments seeded what became a company-wide movement.',
            },
            {
                type: 'text',
                content: 'I also contributed to Factor\'s B2B UX during this period — bringing TPT learnings and cross-brand pattern thinking to a very different product context.',
            },
            {
                type: 'divider',
                label: 'Outcome',
            },
            {
                type: 'callout',
                content: 'Three years. One designer. A brand with its own voice inside HelloFresh — and a playbook that other brands borrowed from.',
            },
            {
                type: 'text',
                content: 'What I\'m most proud of isn\'t any single metric. It\'s the discipline of working at pace without cutting corners — shipping fast but maintaining quality, running real research under real constraints, and treating every negotiation for engineering time as a design decision in itself. TPT taught me how to operate with ambiguity, advocate for users with data, and build things that outlast the sprint they ship in.',
            },
        ],
    },
    {
        id: 'movix',
        title: 'Designing a Home Financing App for Brazil',
        year: '2018 – 2019',
        company: 'Móvix',
        role: 'Product Designer',
        cover: '/movix-home.jpg',
        intro: 'Móvix was an MVP built to help Brazilians finance a house through CAIXA, one of the country\'s biggest banks. Financing a home in Brazil is notoriously complex and bureaucratic — our goal was to create a mobile experience that made simulation, documentation, and follow-up simple enough for anyone, regardless of their tech literacy.',
        tags: ['Product Design', 'Mobile', 'UX Research', 'Prototyping'],
        sections: [
            {
                type: 'impact',
                items: [
                    { value: '2', label: 'Platforms launched', description: 'Published on both the App Store and Google Play after 9 months of design and development.' },
                    { value: '9mo', label: 'Idea to launch', description: 'Full end-to-end project from discovery to a live product used by real customers.' },
                    { value: '15–60', label: 'Age range tested', description: 'Users of all ages and tech literacy levels tested the app at a major financing fair in Brasília.' },
                    { value: '1st', label: 'Digital simulation tool', description: 'One of the first apps to let Brazilians simulate, save, and share home financing results on mobile.' },
                ],
            },
            {
                type: 'divider',
                label: 'The Problem',
            },
            {
                type: 'callout',
                content: 'In a market where every process is as traditional as 10 years ago, Móvix was an important step toward changing how people finance their homes.',
            },
            {
                type: 'text',
                content: 'Financing a home through CAIXA meant dealing with dense paperwork, in-person appointments, and zero visibility into your application status. Most Brazilians had no way to understand how much they could borrow, what their monthly payments would look like, or where their process stood — unless they had a broker walking them through it in person.',
            },
            {
                type: 'divider',
                label: 'Design Process',
            },
            {
                type: 'process',
                steps: [
                    {
                        title: 'Stakeholder Alignment via Design Sprints',
                        description: 'Everyone had different opinions on what mattered most. We started with design sprints to align stakeholders around a common vision and find a shared path forward before touching any screens.',
                    },
                    {
                        title: 'Wireframes & UI Design',
                        description: 'I designed wireframes, high-fidelity UI, and prototypes alongside designer Jenny Soares, keeping the brand identity consistent across all flows while solving for low tech literacy.',
                    },
                    {
                        title: 'User Testing at Scale',
                        description: 'We tested the app with real users at a major home financing fair in Brasília — observing people aged 15 to 60 using it in a real-world context. These sessions shaped many of our final decisions.',
                    },
                    {
                        title: 'Iteration & Launch',
                        description: 'We shared test feedback directly with developers and product owners in structured sessions, iterated on the design, and shipped to both the App Store and Google Play.',
                    },
                ],
            },
            {
                type: 'image',
                src: '/techsprint.jpg',
                caption: 'Design sprint sessions with stakeholders',
            },
            {
                type: 'divider',
                label: 'The Work',
            },
            {
                type: 'text',
                content: 'The target audience had little experience with financing, so simplicity was non-negotiable. We designed a card-based home screen with clear entry points into the three main flows: simulation, financing, and follow-up. A small animated speech bubble guide — built with Lottie — walked users through each step of the simulation.',
            },
            {
                type: 'image',
                src: '/movix-home.jpg',
                caption: 'Home cards in a logical and understandable order',
            },
            {
                type: 'callout',
                content: 'The use of cards on the home screen helped us guide people through Móvix\'s experience.',
            },
            {
                type: 'two-column',
                image: '/movix-saved.png',
                content: 'Before Móvix, every simulation result had to be thrown away if not printed. We designed a saved simulations feature that let users store, compare, and share results — a small change that made the entire experience feel personal and trustworthy.',
                imageLeft: true,
                caption: 'Saved simulations give people the opportunity to compare',
            },
            {
                type: 'text',
                content: 'The financing flow let users start directly from a saved simulation, upload documentation via phone camera, and track their process alongside all participants — removing the need for in-person visits just to check a status.',
            },
            {
                type: 'image',
                src: '/movix-testing.jpg',
                caption: 'Testing Móvix with real users at a financing fair in Brasília',
            },
            {
                type: 'image',
                src: '/movix-team.jpg',
                caption: 'Designer Jenny Soares and I at the financing fair',
            },
            {
                type: 'divider',
                label: 'Outcome',
            },
            {
                type: 'text',
                content: 'Móvix was published on the App Store and Google Play after a 9-month project by AIS Digital. Watching people of every age — many of whom had never used a financial app — successfully navigate the simulation flow at the fair was the clearest signal that we had built the right thing in the right way.',
            },
        ],
    },
    {
        id: 'trexs',
        personal: true,
        title: 'Trexs — A Device for Transmitting Experiences',
        year: '2016',
        company: 'Personal Project',
        role: 'Designer & Maker',
        cover: '/treks-header.gif',
        intro: 'Trexs is a speculative design project exploring a simple but radical question: what if you could transmit an experience from one person to another? Not a photograph, not a video — but the subjective feeling of being somewhere, seeing something, living a moment through someone else\'s eyes.',
        tags: ['Speculative Design', 'Physical Prototype', 'Research'],
        sections: [
            {
                type: 'divider',
                label: 'The Question',
            },
            {
                type: 'callout',
                content: '"What if everyday objects could tell the stories of the people who designed, made, and used them?" — Anthony Dunne & Fiona Raby',
            },
            {
                type: 'text',
                content: 'Speculative design asks us to imagine the world differently — not to predict the future, but to question the present. Trexs started with a provocation: human experience is irreducibly personal. No matter how many photos you take or stories you tell, some things just can\'t be shared. What if that changed?',
            },
            {
                type: 'divider',
                label: 'Research & Mapping',
            },
            {
                type: 'two-column',
                image: '/trexs-research.jpg',
                content: 'The project began with an open mapping of the contexts where experience transmission would matter most — art, protest, work, government, society. Where does the gap between lived experience and communicated experience create misunderstanding, isolation, or missed connection?',
                imageLeft: true,
                caption: 'Mapping the domains where experience transmission matters most',
            },
            {
                type: 'divider',
                label: 'The Device',
            },
            {
                type: 'text',
                content: 'Trexs takes the form of a physical device — assembled from salvaged optics, electronics, and everyday objects. It\'s held up to the eye, creating an intimate, deliberate act of looking. The device is intentionally ambiguous: it references cameras, microscopes, and medical instruments, but belongs to none of those categories.',
            },
            {
                type: 'image',
                src: '/trexs-device.png',
                caption: 'The Trexs device — assembled from salvaged optics and electronics',
            },
            {
                type: 'callout',
                content: 'The act of looking through the device is the experience. There\'s no screen, no output — only the suggestion that something is being captured.',
            },
            {
                type: 'two-column',
                image: '/trexs-users.png',
                content: 'The most powerful moment in the project came when two people faced each other with the device between them — one transmitting, one receiving. The physical proximity required made the interaction feel vulnerable and intimate, which is exactly the point. Experience transmission, if it existed, wouldn\'t be casual.',
                imageLeft: false,
                caption: 'Two participants exploring the transmission interaction',
            },
            {
                type: 'image',
                src: '/treks.jpg',
                caption: 'Trexs in use — held up to the eye in the way a new kind of seeing might feel',
            },
            {
                type: 'divider',
                label: 'Reflection',
            },
            {
                type: 'text',
                content: 'Trexs isn\'t a product. It\'s a question with a handle. Speculative design taught me that the most important design work isn\'t always about solving problems — sometimes it\'s about making the right problems visible. This project shaped how I think about every interface I\'ve designed since: who is the experience for, and what does it ask of the person receiving it?',
            },
        ],
    },
    {
        id: 'stella-timer',
        personal: true,
        title: 'StellaTimer — A Meditation App That Gets Out of the Way',
        year: '2026',
        company: 'Stellabs',
        role: 'Product Designer & Founder',
        cover: '/stella/screen-08-home-v2.png',
        intro: 'StellaTimer is a meditation timer I designed and am building from scratch — for people who actually meditate. Not for people browsing 100,000 guided tracks or collecting social streaks. Just a reliable timer, a daily affirmation, and silence.',
        tags: ['iOS App', 'React Native', 'Design System', 'Product Design', 'OOUX'],
        sections: [
            {
                type: 'divider',
                label: 'The Problem',
            },
            {
                type: 'callout',
                content: '"When TIMER is in your name and you can\'t even keep time, what\'s the point." — Real review of Insight Timer',
            },
            {
                type: 'text',
                content: 'I started with a research phase: reading hundreds of real user reviews of Insight Timer, Headspace, and Calm on Reddit and the App Store. The pattern was impossible to ignore. Apps that started as simple timers had evolved into bloated social networks. The timer — the one thing users came for — was buried three taps deep behind discovery feeds, upsell prompts, and community features nobody asked for.',
            },
            {
                type: 'text',
                content: 'Users wanted one thing: sit down, set a timer, hear a gentle bell. The apps had made this nearly impossible. So I made a list of everything StellaTimer would never do, and that list became the product.',
            },
            {
                type: 'divider',
                label: 'Product Principles',
            },
            {
                type: 'text',
                content: 'I codified the research into ten hard constraints — not aspirational goals but non-negotiable rules. No social features. No content library. No aggressive gamification. No paywall on the timer itself. No medical claims. No guided audio. The app would be offline-first, with a timer engine that uses timestamp deltas instead of setInterval, so it works reliably when backgrounded. Reliability is the product.',
            },
            {
                type: 'image',
                src: '/stella/screen-01-home.png',
                caption: 'The home screen — an affirmation as the emotional anchor, one tap to begin',
            },
            {
                type: 'divider',
                label: 'Object-Oriented UX',
            },
            {
                type: 'text',
                content: 'Before touching any screen design, I mapped the entire product using OOUX — Object-Oriented UX. I identified the core objects: Affirmation, MeditationConfig, Session, DayLog, and Stats. I defined their attributes, their relationships, and the boundaries of responsibility between them. This gave me a system I could reason about, not just a set of screens. The Affirmation, for example, has no knowledge of Sessions. The Session has no knowledge of the Calendar. Clean separations that made every design decision easier.',
            },
            {
                type: 'divider',
                label: 'The Design System',
            },
            {
                type: 'text',
                content: 'I built a full token architecture from scratch: Global tokens → Brand tokens → Alias tokens (day/night) → Component tokens. The app has two complete themes — day and night — with semantic aliases that let components reference "surface-primary" instead of a hardcoded color. I built a live React storybook for design review, with all components rendered against both themes. Every component was specced before a single line of React Native was written.',
            },
            {
                type: 'image',
                src: '/stella/screen-02-meditate-list.png',
                caption: 'The meditation list — 8 curated presets, filterable by type, with a custom timer builder',
            },
            {
                type: 'divider',
                label: 'The Features',
            },
            {
                type: 'text',
                content: 'The app has five tabs: Home, Meditate, Sound, Calendar, and Settings. Home shows a daily affirmation — a first-person "I" statement, rotating through 200 originals across 7 languages — plus favorited presets. The Meditate tab lists 8 curated presets and lets users create their own configurations: duration, warm-up time, interval bells, meditation type. The Calendar shows a private, non-competitive journey view with streak, weekly time, and monthly time.',
            },
            {
                type: 'image',
                src: '/stella/screen-03-config-builder.png',
                caption: 'The custom timer builder — users set duration, warm-up, interval bells, and meditation type',
            },
            {
                type: 'image',
                src: '/stella/screen-04-stats-calendar.png',
                caption: '"Your Journey" — a private, warm calendar for reflection, not comparison',
            },
            {
                type: 'image',
                src: '/stella/screen-07-active-timer-warmup.png',
                caption: 'The active timer during warm-up — minimal, dark, distraction-free',
            },
            {
                type: 'divider',
                label: 'What\'s Next',
            },
            {
                type: 'text',
                content: 'The backend is production-ready: Supabase auth, session storage, profile management, trial tracking, and bell overrides are all complete. The React Native build is next. I\'m building this one screen at a time, starting with the timer itself — because if the timer isn\'t perfect, nothing else matters.',
            },
        ],
    },
    {
        id: 'c',
        personal: true,
        title: 'C.',
        year: '2015',
        company: 'University of Brasília',
        role: 'Designer & Translator',
        cover: '/c/header/1.jpg',
        coverImages: [
            '/c/header/1.jpg',
            '/c/header/3.jpg',
            '/c/header/4.jpg',
            '/c/header/5.jpg',
            '/c/header/6.jpg',
        ],
        intro: 'C. is a bilingual object book about the Brazilian military dictatorship — in Portuguese and German. This was my Bachelor\'s conclusion work at the University of Brasília. It is an attempt to give life back to the historic memory of the Brazilian military dictatorship that occurred between 1964 and 1985.',
        tags: ['Object Book', 'Graphic Design', 'Typography', 'Bilingual', 'UnB'],
        sections: [
            {
                type: 'callout',
                content: 'An object book is a way of extracting the books\' ordinary linearity by presenting a form that is closer to the reader and demands his maximum perception, while searching for a stronger interactivity with people. An object book brings life to literature.',
            },
            {
                type: 'text',
                content: 'C. contains an introduction and 5 short stories about the Brazilian dictatorship originally written in Portuguese by Bernardo Kucinski and translated into German by me.',
            },
            {
                type: 'image',
                src: '/c/a1c4c132230975.567c3fbc020af.jpg',
                caption: 'Table of contents — stories listed in German and Portuguese',
            },
            {
                type: 'text',
                content: 'The short stories talk about love, loss, abuse and death between 1964 and 1985. They were originally released by Bernardo Kucinski in the book Você Vai Voltar Pra Mim e Outros Contos.',
            },
            {
                type: 'image',
                src: '/c/111cd332230975.5674becc48c4d.jpg',
                caption: 'The book — hand-bound with hand-stitched binding',
            },
            {
                type: 'divider',
                label: 'The Box',
            },
            {
                type: 'text',
                content: 'The book is hidden inside a box — under a fake bottom, which was sprayed in black and magenta. The spray ink gave the box the roughness of a dictatorship.',
            },
            {
                type: 'image',
                src: '/c/e694ab32230975.567c3ba2677c0.jpg',
                caption: 'The box — containing the book, the posters, and the CD',
            },
            {
                type: 'callout',
                content: 'The tower — to protect us — is on the lid of the box.',
            },
            {
                type: 'image',
                src: '/c/tower.png',
                caption: 'The tower — magenta stencil on the lid of the black box',
            },
            {
                type: 'text',
                content: 'The tower and the snake come from a myth told in the city of Cascavel, which means Rattlesnake. It is said that there\'s a big snake that lives underground in the city. That\'s why they built a tower with the image of Our Lady — to protect their citizens and remind them the snake is still there and may reappear.',
            },
            {
                type: 'callout',
                content: 'In my work, the Rattlesnake is the dictatorship — which Brazilians tend to hide and pretend never happened. The tower is the objects we must create to face our country\'s memory, in order to prevent the snake from coming to the surface.',
            },
            {
                type: 'callout',
                content: 'The snake — the dictatorship — is inside the box after the fake bottom, under the book itself. The fake bottom has the intention to make the reader discover the historical memory by themselves.',
            },
            {
                type: 'image',
                src: '/c/snake.jpg',
                caption: 'The snake — spray-painted in magenta on the fake bottom of the box',
            },
            {
                type: 'divider',
                label: 'The Book',
            },
            {
                type: 'text',
                content: 'The book was printed on tracing and pólen paper so that both texts — German and Portuguese — could be simultaneously read.',
            },
            {
                type: 'image',
                src: '/c/35e81632230975.5674becc47af6.jpg',
                caption: 'Tracing paper over pólen — German and Portuguese layered into one reading',
            },
            {
                type: 'text',
                content: 'I chose Rockwell font family because of its slab serifs. This way text lines are perceived as blocks, so German and Portuguese sentences could be put one above the other to create the simultaneous reading effect. Font family choice was of utmost importance in order to bring a new experience that is also comfortable to look at.',
            },
            {
                type: 'image',
                src: '/c/rockwell-r.png',
                caption: 'Rockwell — slab serifs create clear horizontal blocks between languages',
            },
            {
                type: 'text',
                content: 'Rockwell\'s slab serifs and tracing paper helped create a new way of interacting with the bilingual texts. The Portuguese text is printed in black — the original. The German translation is printed in magenta — the personal layer of translation and perspective.',
            },
            {
                type: 'image',
                src: '/c/rockwell-bilingual2.png',
                caption: 'Portuguese and German interleaved — two languages, one reading',
            },
            {
                type: 'image',
                src: '/c/2ec09a32230975.567c3fbc0361c.jpg',
                caption: 'German text in magenta over the Portuguese original',
            },
            {
                type: 'divider',
                label: 'Picture Interventions',
            },
            {
                type: 'text',
                content: 'Picture interventions were positioned over actual photos from the dictatorship to try to resignify the memory.',
            },
            {
                type: 'image',
                src: '/c/8d01a332230975.567c3fbc00e4b.jpg',
                caption: 'Intervention drawings — dragonflies over soldiers with bayonets',
            },
            {
                type: 'image',
                src: '/c/08a95132230975.5692da24dbebc.jpg',
                caption: 'A bouquet of flowers over a protest photograph',
            },
            {
                type: 'image',
                src: '/c/ecc26532230975.5674becc49d9b.jpg',
                caption: 'Stripes over a crowd dispersed by police',
            },
            {
                type: 'image',
                src: '/c/559fde32230975.567c3fbbf011a.jpg',
                caption: 'A racetrack pattern over a cavalry charge',
            },
            {
                type: 'image',
                src: '/c/61c7c532230975.567c43de5c2e4-2.jpg',
                caption: 'Intervention over the mass at Igreja da Candelária, 1968',
            },
            {
                type: 'divider',
                label: 'The Posters',
            },
            {
                type: 'text',
                content: 'Inside the box there are two posters containing the names of some of the people who disappeared or were murdered during the dictatorship — according to the National Commission of Truth. The stars on the posters show if the person was killed (filled star) or disappeared (star outline). They are based on data visualization graphics.',
            },
            {
                type: 'image',
                src: '/c/0ea03632230975.5674c05283f05.png',
                caption: 'The posters — data visualization of names from the National Commission of Truth',
            },
            {
                type: 'image',
                src: '/c/5a5eb232230975.567c3fbbf3f4c.jpg',
                caption: 'The full set — box, book, posters',
            },
            {
                type: 'text',
                content: 'A CD was also recorded. It contains the short stories read in German — by me — and in Portuguese — by my friend Beatriz Chaves.',
            },
            {
                type: 'image',
                src: '/c/ad9d7332230975.567c43de5d7fa-2.jpg',
                caption: 'The CD — short stories in German and Portuguese',
            },
            {
                type: 'divider',
                label: 'Why Magenta?',
            },
            {
                type: 'text',
                content: 'Just like a photo restorer, I think some past memories are too dark to look at. Maybe that\'s a reason why Brazilians tend to forget their historic past. So I thought: if I put an extremely contrasting color over this memory, maybe people would look at it and learn from it.',
            },
            {
                type: 'image',
                src: '/c/magenta.png',
                caption: 'Magenta — the color of confrontation',
            },
            {
                type: 'callout',
                content: '"Four years ago a sad looking man searched after C. — a photo restorer. He wanted the restorer to relive his mother back in his memory. She had died years ago, and he had only one photo of her — dead in a coffin. That man wanted a photo in which his mother appeared full of life. I asked him to describe her hair, her lips and her eyes. From the description, I took his mother off the coffin. I drew on her a beautiful dress. I opened her eyes. Fifteen days later the man came back and when he saw the picture he cried." — From the exposition Cicatriz (Scar) by Rosângela Rennó',
            },
            {
                type: 'divider',
                label: 'die Erinnerungskultur',
            },
            {
                type: 'callout',
                content: 'die Erinnerungskultur — the culture of memory',
            },
            {
                type: 'text',
                content: 'This work is fundamentally inspired by the German concept of Erinnerungskultur. The German language is the element that made possible the transition from ideas to actual products. The process of translating the words was also the process of translating the thoughts.',
            },
            {
                type: 'divider',
                label: 'Making',
            },
            {
                type: 'image',
                src: '/c/WP_20151115_16_15_53_Pro---copia.jpg',
                caption: 'Working on the box — spray paint and stencils',
            },
            {
                type: 'image',
                src: '/c/c4d9b532230975.567c4bbd7bad7.jpg',
                caption: 'Materials — ink, spray, and paper',
            },
            {
                type: 'image',
                src: '/c/1fb47132230975.567c3fbbeee78.jpg',
                caption: 'Testing the magenta stencil on the box',
            },
            {
                type: 'image',
                src: '/c/d9855332230975.567c3339072a3.jpg',
                caption: 'The snake stencil being cut',
            },
            {
                type: 'image',
                src: '/c/947e4632230975.567c44868d249.jpg',
                caption: 'Aerial view — reference for the data visualization posters',
            },
            {
                type: 'divider',
                label: 'Credits',
            },
            {
                type: 'text',
                content: 'The short stories were taken from the book Você Vai Voltar Pra Mim e outros contos, edited by Cosac Naify and written originally in Portuguese by Bernardo Kucinski. The photographs used in the interventions were taken by Evandro Teixeira in Rio de Janeiro during the Brazilian military dictatorship.',
            },
            {
                type: 'download',
                label: 'Download the written memorial (PDF)',
                href: '/c/memorial.pdf',
            },
        ],
        slides: [
            // 0 — Cover
            {
                type: 'cover',
                images: [
                    '/c/header/3.jpg',
                    '/c/header/4.jpg',
                    '/c/header/5.jpg',
                ],
                quote: 'C. is a bilingual object book in German and Portuguese about the historic and tragic memory of the Brazilian military dictatorship (1964–1985).',
                tags: ['Object Book', 'Editorial Design', 'Typography', 'Bilingual'],
            },
            // 1
            {
                type: 'image',
                text: 'C. contains 5 short stories originally written in Brazilian Portuguese by Bernardo Kucinski and translated into German by Pedro Ávila.',
                image: '/c/a1c4c132230975.567c3fbc020af.jpg',
                caption: 'The intro: The Tower and the Rattlesnake was written by me.',
                imageFilter: 'contrast(1.05) brightness(1.02)',
            },
            // 2
            {
                type: 'image',
                text: 'An object book breaks the ordinary linearity of reading — demanding perception and inviting interactivity.',
                image: '/c/tower.png',
                caption: 'The book is inside a memory box. The tower — to protect us — is on the lid of the box.',
            },
            // 3
            {
                type: 'image',
                text: 'The book is under a fake bottom of a memory box.',
                image: '/c/e694ab32230975.567c3ba2677c0.jpg',
                caption: 'When the box is open, only a CD with the audiobook and two posters can be seen.',
            },
            // 4
            {
                type: 'image',
                text: 'The reader has to find the book (memory) hidden under a fake bottom.',
                image: '/c/d494ed32230975.567c43de5aefb-2.jpg',
                caption: 'When I handed this to 5 people, 1 could not find the book inside the box.',
            },
            // 5
            {
                type: 'image',
                text: 'In my work, the Rattlesnake, found on the real bottom of the box, is the dictatorship, which Brazilians tend to hide and pretend it never happened.',
                image: '/c/snake.jpg',
                caption: 'The snake as the dictatorship. I used stencil technique to make the box feel crude and raw.',
            },
            // 6
            {
                type: 'quote',
                title: 'The tower and the snake metaphor',
                quote: 'The tower and the snake come from a myth told in the city Cascavel, which means Rattlesnake. It is said that there\'s a big snake that lives in the underground of the city. That\'s why they built a tower with the image of Our Lady. To protect their citizens and remind them the snake is still there and may reappear.',
                duration: 18000,
            },
            // 7
            {
                type: 'image',
                image: '/c/2ec09a32230975.567c3fbc0361c.jpg',
                caption: 'Tracing paper was used to make both languages readable at the same time.',
            },
            // 6
            {
                type: 'image',
                image: '/c/8d01a332230975.567c3fbc00e4b.jpg',
                caption: 'Simultaneous reading came from an idea of improving language learning by reading.',
            },
            // 7
            {
                type: 'image',
                text: 'Rockwell\'s slab serifs make text lines read as solid blocks — allowing German and Portuguese sentences to stack and be read simultaneously, while remaining comfortable to look at.',
                image: '/c/rockwell-r.png',
            },
            // 8
            {
                type: 'image',
                image: '/c/rockwell-bilingual2.png',
            },
            // 8
            {
                type: 'image',
                text: 'Magenta interventions in historical pictures were created as an attempt to keep this memory relevant and visible.',
                image: '/c/08a95132230975.5692da24dbebc.jpg',
                caption: 'Original: Cavalry invading the mass for student Edson Luís at Candelária Church (1968), Rio de Janeiro (RJ), Brazil. With intervention by Pedro Ávila.',
            },
            // 8
            {
                type: 'image',
                image: '/c/61c7c532230975.567c43de5c2e4-2.jpg',
                caption: 'Original: Police repression at Candelária (1968), Rio de Janeiro (RJ), Brazil. With intervention by Pedro Ávila.',
            },
            // 9
            {
                type: 'image',
                image: '/c/947e4632230975.567c44868d249.jpg',
                caption: 'Original: Students and military forces clash by Evandro Teixeira (1968), Rio de Janeiro (RJ), Brazil. With intervention by Pedro Ávila.',
            },
            // 10
            {
                type: 'image',
                image: '/c/ad9d7332230975.567c43de5d7fa-2.jpg',
                caption: 'Original: Bayonets and Dragonflies by Evandro Teixeira (1968), Rio de Janeiro (RJ), Brazil. With intervention by Pedro Ávila.',
            },
            // 11
            {
                type: 'image',
                text: 'The two posters inside the box contain the names of some of the people who disappeared or were murdered during the dictatorship — according to the National Commission of Truth.',
                image: '/c/559fde32230975.567c3fbbf011a.jpg',
                caption: 'I tried to replicate the Brazilian flag.',
            },
            // 12
            {
                type: 'gallery',
                columns: 1,
                images: ['/c/0cfd0732230975.56749b4b88c28.png', '/c/58acc432230975.56749b4b869d0.png'],
            },
            // 13
            {
                type: 'image',
                layout: 'split',
                title: 'Why magenta?',
                text: 'Some memories are too dark to look at — maybe that\'s why Brazilians tend to forget their past. What if an extremely contrasting color made people stop and look?',
                image: '/c/magenta.png',
            },
            // 14
            {
                type: 'quote',
                title: 'This work is fundamentally inspired by the German word:',
                quote: 'die Erinnerungskultur — the culture of memory',
                large: true,
            },
            // 15
            { type: 'image', image: '/c/35e81632230975.5674becc47af6.jpg' },
            // 16
            { type: 'image', image: '/c/111cd332230975.5674becc48c4d.jpg' },
            // 17
            { type: 'image', image: '/c/WP_20151115_16_15_53_Pro---copia.jpg' },
            // 18
            { type: 'image', image: '/c/0ea03632230975.5674c05283f05.png' },
            // 19
            { type: 'image', image: '/c/5a5eb232230975.567c3fbbf3f4c.jpg' },
            // 20
            { type: 'image', image: '/c/d9855332230975.567c3339072a3.jpg' },
            // Credits
            {
                type: 'text',
                title: 'Credits',
                text: 'Short stories from "Você Vai Voltar Pra Mim e outros contos" by Bernardo Kucinski, edited by Cosac Naify. Photographs by Evandro Teixeira.',
                download: { label: 'Download the written memorial (PDF)', href: '/c/memorial.pdf' },
            },
        ],
    },
];
