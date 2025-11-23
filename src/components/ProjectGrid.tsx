import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: "Neon Horizons",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Abstract Forms",
        category: "3D Art",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Urban Decay",
        category: "Editorial",
        image: "https://images.unsplash.com/photo-1476994230281-1448088947db?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Minimal Living",
        category: "Interior",
        image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Typography Study",
        category: "Graphic Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        title: "Nature's Pattern",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
    }
];

const ProjectGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    image={project.image}
                />
            ))}
        </div>
    );
};

export default ProjectGrid;
