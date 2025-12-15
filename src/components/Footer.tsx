import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: '4rem 1.5rem',
            textAlign: 'center',
            marginTop: 'auto'
        }}>
            <a
                href="mailto:hello@pedroavila.me"
                className="text-sm text-muted font-medium"
                style={{
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    color: 'hsl(var(--text-muted-foreground))'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--text-foreground))'}
                onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--text-muted-foreground))'}
            >
                Get in touch
            </a>
            <div className="text-sm text-muted" style={{ marginTop: '2rem', opacity: 0.5 }}>
                © {new Date().getFullYear()} Pedro Ávila
            </div>
        </footer>
    );
};

export default Footer;
