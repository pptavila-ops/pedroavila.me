import React, { useMemo } from 'react';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    // Repeat images to get enough items for a nice scatter
    const displayImages = images.length > 0 ? [...images, ...images, ...images, ...images] : [];

    // Generate random positions (memoized to prevent jitter on unrelated renders)
    const scatteredItems = useMemo(() => {
        return displayImages.map((src, i) => {
            // Randomly position somewhat centrally but scattered
            const top = 10 + Math.random() * 60; // 10% to 70%
            const left = 5 + Math.random() * 60; // 5% to 65%
            const width = 15 + Math.random() * 20; // 15% to 35% width
            const zIndex = Math.floor(Math.random() * 10);
            return { src, top, left, width, zIndex };
        });
    }, [images]); // Re-roll when project changes

    if (images.length === 0) return null;

    return (
        <div
            key={images[0]} // Trigger animation on change
            className="animate-fade-in"
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'transparent'
            }}
        >
            {scatteredItems.map((item, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: `${item.top}%`,
                        left: `${item.left}%`,
                        width: `${item.width}%`,
                        zIndex: item.zIndex,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        transition: 'all 0.5s ease-out'
                    }}
                >
                    <img
                        src={item.src}
                        alt=""
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            backgroundColor: '#f0f0f0'
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
