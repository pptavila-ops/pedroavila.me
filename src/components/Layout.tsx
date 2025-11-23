import React from 'react';
import { Outlet } from 'react-router-dom';
import InfoColumn from './InfoColumn';

const Layout: React.FC = () => {
    return (
        <div className="app-container">
            <InfoColumn />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
