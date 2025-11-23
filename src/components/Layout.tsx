import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="py-6 border-b border-black/10">
                <div className="container flex justify-between items-center">
                    <div className="logo font-bold text-xl uppercase tracking-tighter">
                        Portfolio
                    </div>
                    <nav>
                        <ul className="flex gap-6 text-sm uppercase tracking-wide">
                            <li><a href="#" className="hover:opacity-50 transition-opacity">Work</a></li>
                            <li><a href="#about" className="hover:opacity-50 transition-opacity">About</a></li>
                            <li><a href="mailto:hello@example.com" className="hover:opacity-50 transition-opacity">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="py-8 mt-12 border-t border-black/10">
                <div className="container text-sm opacity-50 flex justify-between">
                    <p>&copy; {new Date().getFullYear()} Portfolio</p>
                    <p>Designed with Minimalism</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
