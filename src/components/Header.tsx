import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
            <a href="/" style={{ color: '#000', fontWeight: 500 }}>Home</a>
            <a href="/media">Media</a>
        </header>
    );
};

export default Header;
