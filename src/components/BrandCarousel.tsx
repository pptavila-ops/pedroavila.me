import { useEffect, useRef } from 'react';

const logos = [
    { src: '/brands/hellofresh.png', alt: 'HelloFresh', height: 28 },
    { src: '/brands/henkel.png', alt: 'Henkel', height: 44 },
    { src: '/brands/schwarzkopf.svg', alt: 'Schwarzkopf', height: 44 },
    { src: '/brands/finleap.png', alt: 'Finleap', height: 44 },
    { src: '/brands/santander.svg', alt: 'Santander', height: 28 },
    { src: '/brands/caixa.svg', alt: 'Caixa', height: 28 },
    { src: '/brands/fiat.svg', alt: 'Fiat', height: 28 },
    { src: '/brands/mvpfactory.png', alt: 'MVP Factory', height: 44 },
    { src: '/brands/ilia.svg', alt: 'Ilia Digital', height: 28 },
    { src: '/brands/tpt.png', alt: 'TPT', height: 44 },
];

export function BrandCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let start: number | null = null;
        let rafId: number;
        const speed = 0.07;
        let offset = 0;

        const getHalfWidth = () => track.scrollWidth / 2;

        const step = (ts: number) => {
            if (start === null) start = ts;
            const elapsed = ts - start;
            start = ts;
            offset += speed * elapsed;
            if (offset >= getHalfWidth()) offset = 0;
            track.style.transform = `translateX(-${offset}px)`;
            rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <div className="border-t border-white/10 mt-16 pt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-8">
                Some companies I've already worked for
            </p>

            {/*
                Outer div: overflow hidden, width auto (= 100% of parent block).
                Track is position:absolute so it NEVER contributes to layout width.
                Gradient divs are also absolute — purely visual, zero layout impact.
            */}
            <div style={{ overflow: 'hidden', position: 'relative', height: '44px', contain: 'layout' }}>
                <div
                    ref={trackRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '56px',
                        willChange: 'transform',
                    }}
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <img
                            key={i}
                            src={logo.src}
                            alt={logo.alt}
                            style={{
                                height: `${logo.height}px`,
                                width: 'auto',
                                objectFit: 'contain',
                                flexShrink: 0,
                                filter: 'brightness(0) invert(1)',
                                opacity: 0.35,
                            }}
                        />
                    ))}
                </div>

                {/* Fade edges */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '80px', height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '100%', background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            </div>
        </div>
    );
}
