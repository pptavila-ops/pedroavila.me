import React, { useEffect, useRef } from 'react';

interface RainbowTextProps {
    children: React.ReactNode;
}

const RainbowText: React.FC<RainbowTextProps> = ({ children }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let t = 0;
        let animationFrameId: number;

        const run = () => {
            // Use a low resolution for the pixelated effect (32x32 roughly matches CodePen aesthetic)
            // but we stretch it to cover the container
            const width = 35;
            const height = 35;

            for (let x = 0; x <= width; x++) {
                for (let y = 0; y <= height; y++) {
                    // Use multiple overlapping wave patterns moving in different directions
                    const wave1 = Math.sin((x * x - y * y) / 300 + t);  // Forward
                    const wave2 = Math.cos((x * y) / 200 - t * 1.3);    // Backward
                    const wave3 = Math.sin((x + y) / 50 + t * 0.7);     // Forward
                    const wave4 = Math.cos((x - y) / 80 - t * 1.8);     // Backward
                    const wave5 = Math.sin((x * y) / 400 + t * 0.5);    // Forward

                    const hue = (wave1 + wave2 + wave3 + wave4 + wave5) * 80;

                    ctx.fillStyle = `hsl(${hue}, 65%, 60%)`;
                    // Draw 1x1 pixel on the 35x35 canvas
                    ctx.fillRect(x, y, 1, 1);
                }
            }

            t = t + 0.005; // Slower animation speed
            animationFrameId = window.requestAnimationFrame(run);
        };

        run();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative inline-block w-full"
        >
            {/* Base text (white) */}
            <div className="relative z-0 text-white">
                {children}
            </div>

            {/* Canvas overlay (multiply blend mode) */}
            <canvas
                ref={canvasRef}
                width={35}
                height={35}
                className="absolute inset-0 z-10 h-full w-full pointer-events-none mix-blend-multiply opacity-100"
                style={{ imageRendering: 'pixelated', filter: 'blur(8px)' }}
            />
        </div>
    );
};

export default RainbowText;
