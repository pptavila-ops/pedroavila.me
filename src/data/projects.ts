export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    code: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "AESTHETIC MAPPING",
        description: "An exploration of digital landscapes and the cartography of the virtual world. This project aims to visualize the unseen data structures that govern our online interactions.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
        link: "#",
        code: "504/GWT"
    },
    {
        id: 2,
        title: "SILENT ECHOES",
        description: "A series of audio-visual installations that react to the presence of the observer. The work questions the relationship between the viewer and the viewed.",
        image: "https://images.unsplash.com/photo-1515405295579-ba7f45403022?q=80&w=1000&auto=format&fit=crop",
        link: "#",
        code: "764—39/23"
    },
    {
        id: 3,
        title: "MONOCHROME DREAMS",
        description: "Photography series focusing on the interplay of light and shadow in urban environments. Stripping away color to reveal the raw geometry of the city.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000&auto=format&fit=crop",
        link: "#",
        code: "882/B&W"
    },
    {
        id: 4,
        title: "DIGITAL FLORA",
        description: "Generative art piece that simulates the growth of organic structures in a digital environment. Algorithms mimicking nature's patterns.",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop",
        link: "#",
        code: "101/GEN"
    },
    {
        id: 5,
        title: "VOID STRUCTURES",
        description: "Architectural concepts for zero-gravity habitats. Speculative design for the future of human habitation in space.",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1000&auto=format&fit=crop",
        link: "#",
        code: "990/SPC"
    }
];
