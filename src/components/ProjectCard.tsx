import React from 'react';

interface ProjectProps {
    title: string;
    category: string;
    image: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, category, image }) => {
    return (
        <div className="project-card group cursor-pointer">
            <div className="image-wrapper overflow-hidden mb-3 aspect-[4/3] bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="project-info flex justify-between items-baseline">
                <h3 className="text-lg font-medium">{title}</h3>
                <span className="text-sm opacity-60">{category}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
