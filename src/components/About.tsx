import React from 'react';

const About: React.FC = () => {
    return (
        <section style={{
            maxWidth: '42rem',
            margin: '0 auto',
            padding: '6rem 1.5rem',
            textAlign: 'center'
        }}>
            <h2 className="text-2xl text-foreground font-bold" style={{ marginBottom: '1.5rem' }}>
                About
            </h2>
            <div className="text-lg text-muted font-regular leading-relaxed">
                <p>
                    I'm Pedro, a Design Technologist at HelloFresh. I focus on bridging the gap between design and engineering, helping teams ship high-quality products with better workflows.
                </p>
                <br />
                <p>
                    Previously at The Pets Table, MVP Factory, and Finleap. I believe the best products are built when designers and developers speak the same language.
                </p>
            </div>
        </section>
    );
};

export default About;
