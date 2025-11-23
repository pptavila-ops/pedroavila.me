import React from 'react';

const InfoColumn: React.FC = () => {
    return (
        <aside className="info-column">
            <div className="info-header">
                <div className="logo">LOREM IPSUM</div>
                <div className="doc-code">504/GWT</div>
            </div>

            <div className="info-content">
                <p className="info-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat et neque quis maximus. Praesent dictum metus non lacus convallis, mollis lacinia quam sodales. In hac habitasse platea dictumst. Etiam ac nunc sit amet leo.
                </p>
                <p className="info-text">
                    Cras in placerat diam, sed vulputate quam. Suspendisse potenti. Etiam sed gravida metus. Vivamus libero lorem, elementum vel tempor eu, finibus in libero.
                </p>
            </div>

            <nav className="info-links">
                <a href="mailto:email@example.com">Email</a>
                <a href="https://instagram.com">Instagram</a>
            </nav>
        </aside>
    );
};

export default InfoColumn;
