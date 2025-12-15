import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section style={{ maxWidth: '42rem', width: '100%' }}>
            <p className="text-sm font-bold text-foreground" style={{ opacity: 0.5, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                How It Works
            </p>

            <div style={{
                border: '1px solid hsl(var(--text-muted-foreground) / 0.2)',
                borderRadius: '8px',
                padding: '2rem',
                backgroundColor: 'hsl(var(--text-foreground) / 0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                {/* Before */}
                <div>
                    <h3 className="text-sm font-bold text-muted" style={{ marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Before</h3>
                    <p className="text-muted leading-relaxed" style={{ fontSize: '0.95rem' }}>
                        Designer creates mockup <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Hands off to engineer <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Engineer interprets <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Designer reviews <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Feedback loop <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Ship
                    </p>
                </div>

                {/* After */}
                <div>
                    <h3 className="text-sm font-bold text-muted" style={{ marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>After</h3>
                    <p className="text-foreground leading-relaxed font-medium" style={{ fontSize: '0.95rem' }}>
                        Designer creates mockup <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Uses AI-assisted tooling <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Ships directly <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Engineer reviews safety <span className="text-muted" style={{ opacity: 0.5 }}>→</span> Done
                    </p>
                </div>

                {/* The Difference */}
                <div>
                    <h3 className="text-sm font-bold text-muted" style={{ marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>The Difference</h3>
                    <p className="text-muted leading-relaxed" style={{ fontSize: '0.95rem' }}>
                        Fewer handoffs. Faster feedback. Higher fidelity. Designers own the output end-to-end.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
