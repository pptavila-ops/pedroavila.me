import React, { useEffect, useRef } from 'react';

interface RainbowTextProps {
    children: React.ReactNode;
}

const RainbowText: React.FC<RainbowTextProps> = ({ children }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let t = 0;
        let animationFrameId: number;

        const run = () => {
            const width = 35;
            const height = 35;

            for (let x = 0; x <= width; x++) {
                for (let y = 0; y <= height; y++) {
                    const wave1 = Math.sin((x * x - y * y) / 300 + t);
                    const wave2 = Math.cos((x * y) / 200 - t * 1.3);
                    const wave3 = Math.sin((x + y) / 50 + t * 0.7);
                    const wave4 = Math.cos((x - y) / 80 - t * 1.8);
                    const wave5 = Math.sin((x * y) / 400 + t * 0.5);

                    const hue = (wave1 + wave2 + wave3 + wave4 + wave5) * 80;

                    ctx.fillStyle = `hsl(${hue}, 65%, 60%)`;
                    ctx.fillRect(x, y, 1, 1);
                }
            }

            t = t + 0.005;
            animationFrameId = window.requestAnimationFrame(run);
        };

        run();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative inline-block w-full overflow-hidden" style={{ isolation: 'isolate', background: 'black', margin: '-20px -20px 0 -20px', padding: '20px 20px 0 20px' }}>
            {/* White text */}
            <div className="relative text-white">{children}</div>

            {/* Rainbow canvas with multiply blend - only colors white pixels */}
            <canvas
                ref={canvasRef}
                width={35}
                height={35}
                className="absolute w-full h-full pointer-events-none"
                style={{
                    imageRendering: 'pixelated',
                    filter: 'blur(8px)',
                    mixBlendMode: 'multiply',
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                    width: 'calc(100% + 40px)',
                    height: 'calc(100% + 40px)',
                }}
            />
        </div>
    );
};

export default RainbowText;
