import React from 'react';

const Hero: React.FC = () => {
    return (
        <section style={{
            width: '100%',
            textAlign: 'center'
        }}>
            <h1 className="text-foreground font-bold leading-tight tracking-tight" style={{ marginBottom: '1.5rem', fontSize: 'var(--text-6xl)' }}>
                Pedro Ávila
            </h1>
            <p className="text-muted font-medium leading-relaxed" style={{ fontSize: 'var(--text-2xl)' }}>
                Design Technologist bridging the gap between design and development to build delightful products.
            </p>
        </section>
    );
};

export default Hero;
