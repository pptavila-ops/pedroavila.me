import React from 'react';

import Footer from './Footer';
import HowItWorks from './HowItWorks';

const Content: React.FC = () => {
    return (
        <main className="content-column">
            {/* Main Title */}
            <h1 className="text-muted font-regular display-title">
                Empowering Designers to Ship Real Production Code
            </h1>

            {/* Context Section (Example Case Study) */}
            <section className="content-section">
                <p className="text-foreground overline-text">Context</p>
                <p className="text-muted text-lg leading-relaxed">
                    At HelloFresh — a high-scale, multi-team product org — design quality and delivery speed are tightly coupled. Traditionally, designers handed off work to engineers, creating delays and translation loss.
                </p>
            </section>

            <section className="content-section">
                <p className="text-foreground overline-text">My Intervention</p>
                <p className="text-muted text-lg leading-relaxed">
                    My role focuses on collapsing this gap by giving designers tools, confidence, and systems needed to ship production-ready UI themselves.
                </p>
            </section>

            {/* How It Works Diagram */}
            <HowItWorks />

            <section className="content-section">
                <p className="text-foreground overline-text">Impact</p>
                <ul className="text-muted text-lg leading-relaxed body-list">
                    <li>— Designers shipping UI directly with engineering review, not handoff</li>
                    <li>— Fewer design–dev feedback loops per feature</li>
                    <li>— Design decisions made with real constraints from day one</li>
                </ul>
            </section>

            {/* Philosophy / Core Beliefs */}
            <div className="divider-section">
                <section className="content-section">
                    <p className="text-accent overline-text">Core beliefs</p>
                    <ul className="text-muted text-lg leading-relaxed body-list">
                        <li>— Designers should understand the constraints of the medium they are designing for.</li>
                        <li>— Design implementation provides better, more assertive UX.</li>
                        <li>— Designers who code learn faster how to make components accessible.</li>
                        <li>— Understanding the code helps to go from superficial to impactful.</li>
                        <li>— If faced with resistance (other team members judging your ability to code), stay confident.</li>
                    </ul>
                </section>
            </div>

            {/* Footer */}
            <div className="footer-section">

                <Footer />
            </div>
        </main>
    );
};

export default Content;
