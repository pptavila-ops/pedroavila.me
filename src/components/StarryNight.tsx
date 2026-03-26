import { useEffect, useRef, useState } from 'react';

const StarryNight = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        const hour = new Date().getHours();
        setIsNight(hour >= 20 || hour < 6);
    }, []);

    useEffect(() => {
        if (!isNight) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const stars: { x: number; y: number; r: number; opacity: number; speed: number }[] = [];
        for (let i = 0; i < 80; i++) {
            stars.push({
                x: Math.random(),
                y: Math.random(),
                r: Math.random() * 1.5 + 0.5,
                opacity: Math.random(),
                speed: Math.random() * 0.005 + 0.002,
            });
        }

        let animationFrameId: number;
        const run = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const star of stars) {
                star.opacity += star.speed;
                const alpha = (Math.sin(star.opacity) + 1) / 2 * 0.7 + 0.1;
                ctx.beginPath();
                ctx.arc(star.x * canvas.width, star.y * canvas.height, star.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            }
            animationFrameId = requestAnimationFrame(run);
        };
        run();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, [isNight]);

    if (!isNight) return null;

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full pointer-events-none"
        />
    );
};

export default StarryNight;
