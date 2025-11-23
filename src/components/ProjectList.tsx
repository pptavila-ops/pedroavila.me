import React from 'react';
import { projects } from '../data/projects';
import ProjectItem from './ProjectItem';

const ProjectList: React.FC = () => {
    return (
        <div className="project-list">
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;
