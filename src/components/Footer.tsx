import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ marginTop: '2rem', fontSize: '0.95rem', color: '#666' }}>
            Reach out on <a href="https://x.com/dulzorigo" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'underline' }}>X</a> or <a href="mailto:hi@dzrgo.com" style={{ color: '#666', textDecoration: 'underline' }}>Email</a>.
        </footer>
    );
};

export default Footer;
