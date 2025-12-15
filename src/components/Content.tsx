import React from 'react';
import Principles from './Principles';
import About from './About';
import Footer from './Footer';
import HowItWorks from './HowItWorks';

const Content: React.FC = () => {
    return (
        <main className="content-column" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6rem',
            padding: '4rem 0 4rem 0'
        }}>
            {/* Context Section (Example Case Study) */}
            <section style={{ maxWidth: '42rem' }}>
                <p className="text-sm font-bold text-foreground" style={{ opacity: 0.5, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>Context</p>
                <p className="text-muted text-lg leading-relaxed">
                    HelloFresh is a high-scale product organization where design quality and delivery speed are tightly coupled. Traditionally, designers handed off work to engineers, creating delays and translation loss.
                </p>
            </section>

            <section style={{ maxWidth: '42rem' }}>
                <p className="text-sm font-bold text-foreground" style={{ opacity: 0.5, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>My Intervention</p>
                <p className="text-muted text-lg leading-relaxed">
                    My role focuses on collapsing this gap by giving designers tools, confidence, and systems needed to ship production-ready UI themselves.
                </p>
            </section>

            {/* How It Works Diagram */}
            <HowItWorks />

            <section style={{ maxWidth: '42rem' }}>
                <p className="text-sm font-bold text-foreground" style={{ opacity: 0.5, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>Impact</p>
                <ul className="text-muted text-lg leading-relaxed" style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>— Faster iteration cycles with designers shipping directly</li>
                    <li style={{ marginBottom: '0.5rem' }}>— Higher design fidelity in production</li>
                    <li style={{ marginBottom: '0.5rem' }}>— Designers working closer to real constraints</li>
                </ul>
            </section>

            {/* Philosophy / Principles */}
            <div style={{ padding: '4rem 0', borderTop: '1px solid hsl(var(--text-muted-foreground) / 0.1)' }}>
                <Principles />
            </div>

            {/* Footer */}
            <div style={{ padding: '2rem 0', borderTop: '1px solid hsl(var(--text-muted-foreground) / 0.1)' }}>
                <About />
                <Footer />
            </div>
        </main>
    );
};

export default Content;
