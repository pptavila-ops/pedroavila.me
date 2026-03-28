import type { RichCaseStudy } from './templateCaseStudy';

export const richCaseStudies: RichCaseStudy[] = [
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
];
