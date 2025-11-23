import React from 'react';
import type { Project } from '../data/projects';

interface ProjectItemProps {
    project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="project-item">
            <div className="project-image-column">
                <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                </div>
            </div>

            <div className="project-text-column">
                <div className="project-header-mobile">
                    <span className="project-id">{project.id.toString().padStart(2, '0')}</span>
                    <a href={project.link} className="project-title-link">
                        <h2 className="project-title">{project.title}</h2>
                    </a>
                </div>
                <div className="project-header-desktop">
                    <span className="project-id">{project.id.toString().padStart(2, '0')}</span>
                    <a href={project.link} className="project-title-link">
                        <h2 className="project-title">{project.title}</h2>
                    </a>
                </div>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-read-more">Read more</a>
            </div>

            <div className="project-meta-column">
                <div className="meta-code">{project.code}</div>
                <div className="meta-doc">Doc-45456</div>
                <div className="meta-icon">
                    {/* Placeholder for icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
