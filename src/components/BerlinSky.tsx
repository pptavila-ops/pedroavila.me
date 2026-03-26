import { useEffect, useRef } from 'react';

const BerlinSky = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
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

        let animationFrameId: number;
        let t = 0;

        const stars: { x: number; y: number; r: number; speed: number }[] = [];
        for (let i = 0; i < 30; i++) {
            stars.push({
                x: ((i * 7919) % 100) / 100,
                y: ((i * 6271) % 100) / 100,
                r: Math.random() * 1.5 + 0.5,
                speed: Math.random() * 0.005 + 0.002,
            });
        }

        const run = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t++;

            for (const star of stars) {
                const alpha = (Math.sin(t * star.speed + star.x * 10) + 1) / 2 * 0.5 + 0.1;
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
    }, []);

    return (
        <div className="absolute bottom-0 left-0 right-0 h-1/2">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full pointer-events-none"
            />
        </div>
    );
};

export default BerlinSky;
