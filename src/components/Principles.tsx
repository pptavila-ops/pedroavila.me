import React from 'react';

const Principles: React.FC = () => {
    return (
        <section style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            textAlign: 'center'
        }}>
            <blockquote className="text-center">
                <p className="text-foreground font-medium leading-relaxed" style={{ fontSize: 'var(--text-3xl)' }}>
                    "Designers should understand the constraints of the medium they are designing for."
                </p>
            </blockquote>

            <blockquote className="text-center">
                <p className="text-foreground font-medium leading-relaxed" style={{ fontSize: 'var(--text-3xl)' }}>
                    "Shipping code changes how designers think about their work, moving from static artifacts to living products."
                </p>
            </blockquote>

            <blockquote className="text-center">
                <p className="text-foreground font-medium leading-relaxed" style={{ fontSize: 'var(--text-3xl)' }}>
                    "The gap between design and development is only a gap if you choose not to cross it."
                </p>
            </blockquote>
        </section>
    );
};

export default Principles;
