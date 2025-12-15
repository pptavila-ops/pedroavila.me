import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ marginTop: '2rem' }} className="text-sm text-muted">
            Reach out on <a href="https://x.com/dulzorigo" target="_blank" rel="noopener noreferrer" className="text-muted underline">X</a> or <a href="mailto:hi@dzrgo.com" className="text-muted underline">Email</a>.
        </footer>
    );
};

export default Footer;
