import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === Number(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-detail">
            <div className="project-detail-header">
                <div className="project-detail-meta">
                    <span className="project-detail-code">{project.code}</span>
                    <Link to="/" className="back-link">Index</Link>
                </div>
                <h1 className="project-detail-title">{project.title}</h1>
            </div>

            <div className="project-detail-content">
                <div className="project-detail-image-container">
                    <img src={project.image} alt={project.title} className="project-detail-image" />
                </div>

                <div className="project-detail-text">
                    <p>{project.description}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* Simulating more images for the "gallery" feel */}
                <div className="project-detail-image-container">
                    <img src={project.image} alt={`${project.title} detail`} className="project-detail-image" style={{ filter: 'grayscale(100%)' }} />
                </div>
            </div>

            <div className="project-detail-footer">
                <Link to="/" className="back-link-large">Back to Index</Link>
            </div>
        </div>
    );
};

export default ProjectDetail;
