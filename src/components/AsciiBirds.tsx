import React, { useState, useEffect } from 'react';
import { frames } from '../data/birdFrames';

const AsciiBirds: React.FC = () => {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
        }, 100); // Adjust speed as needed (100ms = 10fps)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ascii-container">
            <div className="ascii-wrapper">
                <div className="ascii-line">
                    {frames[frameIndex]}
                </div>
            </div>
        </div>
    );
};

export default AsciiBirds;
