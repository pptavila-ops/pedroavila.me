import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside style={{
            marginTop: '0',
            position: 'sticky',
            top: '2rem',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            padding: '1.5rem' // Mobile view padding
        }}>
            {/* Header / Name */}
            <div>
                <p className="text-muted font-medium text-lg leading-relaxed">
                    Hi, I'm Pedro. Currently enabling design teams move from static design artifacts to shipping real product code.
                </p>
            </div>

            {/* Navigation / Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p className="text-sm font-bold text-accent" style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}>Recent Work</p>
                <a href="#" className="text-foreground font-medium hover:opacity-70 transition-opacity">Bridging the gap from design into development</a>
                <a href="#" className="text-muted font-regular hover:text-foreground transition-colors">AI-assisted development in design</a>
                <a href="#" className="text-muted font-regular hover:text-foreground transition-colors">Reducing engineering dependency</a>
            </nav>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" className="text-muted text-sm hover:text-foreground">LinkedIn</a>
                <a href="#" className="text-muted text-sm hover:text-foreground">Twitter</a>
                <a href="#" className="text-muted text-sm hover:text-foreground">Email</a>
            </div>
        </aside>
    );
};

export default Sidebar;
