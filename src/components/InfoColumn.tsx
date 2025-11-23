import InterviewChat from './InterviewChat';

const InfoColumn: React.FC = () => {
    return (
        <aside className="info-column">
            <div className="info-header">
                <div className="logo">LOREM IPSUM</div>
                <div className="doc-code">504/GWT</div>
            </div>

            <div className="info-content">
                <InterviewChat />
            </div>

            <nav className="info-links">
                <a href="mailto:email@example.com">Email</a>
                <a href="https://instagram.com">Instagram</a>
            </nav>
        </aside>
    );
};

export default InfoColumn;
