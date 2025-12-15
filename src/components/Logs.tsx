import React, { useEffect, useRef } from 'react';

interface Project {
    id: string;
    titleLine1: string;
    titleLine2: string;
    date: string;
    description: string | React.ReactNode;
    images: string[];
    credits: string;
}

const projects: Project[] = [
    {
        id: '1',
        titleLine1: 'From design',
        titleLine2: 'into development.',
        date: '2025 - Present',
        description: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
                <p>My current role is in the Consumer Acceleration team at HelloFresh to enable fellow designers to also bridge the gap between our craft and development so that we can implement delightful features with clean code.</p>
                <p>One day I decided to ask the developers in my team to set up the repo on my local computer and everything changed. I started implementing features, components and shipping code with the help of AI. I quickly learned AI alone is not enough and I am now in an exciting journey of learning.</p>
            </div>
        ),
        images: [
            '/mockups/ui_1.png',
            '/mockups/ui_2.png',
            '/mockups/ui_3.png'
        ],
        credits: "ROLE: DESIGN TECHNOLOGIST\nCLIENT: HELLOFRESH"
    },
    {
        id: '2',
        titleLine1: 'Being the sole, but not lonely,',
        titleLine2: 'designer for The Pets Table',
        date: '2023 - 2025',
        description: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
                <p>The success of The Pets Table is directly tied to the clarity and quality of its design, and seeing the positive impact of my work—reflected in increased conversion rates, improved customer retention, and heartwarming user testimonials—is immensely gratifying.</p>
                <p>My position is less about isolation and more about focused dedication to the brand’s visual integrity. I am not working alone, but autonomously within a highly collaborative team, leading the charge on all things aesthetic.</p>
            </div>
        ),
        images: [
            '/mockups/ui_2.png',
            '/mockups/ui_3.png',
            '/mockups/ui_1.png'
        ],
        credits: "ROLE: PRODUCT DESIGNER\nCLIENT: HELLOFRESH"
    },
    {
        id: '3',
        titleLine1: 'Meal Choice',
        titleLine2: 'Personalization',
        date: '2021 - 2023',
        description: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
                <p>Redesigned the core meal selection experience for millions of users globally. Improved conversion rates and customer satisfaction by implementing intuitive personalization features and a streamlined user interface.</p>
                <p>Collaborated closely with data scientists to implement recommendation algorithms that adapted to user preferences over time.</p>
            </div>
        ),
        images: [
            '/mockups/ui_3.png',
            '/mockups/ui_1.png',
            '/mockups/ui_2.png'
        ],
        credits: "ROLE: SENIOR DESIGNER\nCLIENT: HELLOFRESH"
    },
    {
        id: '4',
        titleLine1: 'Rapid Prototyping',
        titleLine2: 'at MVP Factory',
        date: '2020 - 2021',
        description: "Collaborated with early-stage startups to rapidly prototype and validate product hypotheses. Helped founders translate visions into user-centered designs and functional prototypes for investor pitches.",
        images: [
            '/mockups/ui_1.png',
            '/mockups/ui_2.png',
            '/mockups/ui_3.png'
        ],
        credits: "ROLE: UX/UI DESIGNER\nCLIENT: VARIOUS STARTUPS"
    },
    {
        id: '5',
        titleLine1: 'Financial Experiences',
        titleLine2: 'at Finleap',
        date: '2019 - 2021',
        description: "Designed trusted financial experiences for fintech products. Focused on accessibility and clarity in complex financial flows, ensuring users felt secure and informed throughout their journey.",
        images: [
            '/mockups/ui_2.png',
            '/mockups/ui_3.png',
            '/mockups/ui_1.png'
        ],
        credits: "ROLE: PRODUCT DESIGNER\nCLIENT: FINLEAP"
    }
];

interface LogsProps {
    onProjectInView: (images: string[]) => void;
}

const Logs: React.FC<LogsProps> = ({ onProjectInView }) => {
    const projectRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        onProjectInView(projects[index].images);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-20% 0px -60% 0px', // Trigger when top 20% to 40% of viewport
                threshold: 0
            }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [onProjectInView]);

    return (
        <section>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                {projects.map((project, index) => (
                    <article
                        key={project.id}
                        ref={(el) => { projectRefs.current[index] = el; }}
                        data-index={index}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '8rem' }}
                    >
                        {/* Title and Date */}
                        <div className="text-center">
                            <h1>
                                <span className="italic" style={{ display: 'block' }}>{project.titleLine1}</span>
                                <span style={{ display: 'block' }}>{project.titleLine2}</span>
                            </h1>
                            <span className="text-sm font-bold" style={{ display: 'block' }}>
                                {project.date}
                            </span>
                        </div>

                        {/* Description */}
                        <div>
                            {typeof project.description === 'string' ? (
                                <p>{project.description}</p>
                            ) : (
                                project.description
                            )}
                        </div>

                        {/* Credits */}
                        <div className="text-small-caps text-muted">
                            {project.credits}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Logs;
