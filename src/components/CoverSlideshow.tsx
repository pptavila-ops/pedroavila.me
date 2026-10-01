import { useEffect, useRef, useState } from 'react';

interface Props {
    images: string[];
    alt: string;
}

const SLIDE_MS = 3500;
const FADE_MS = 1200;

// Cycles through a case study's images with a soft crossfade and a slow zoom
// on the visible one. Only the previous, current and next images are mounted,
// so a card never downloads its whole gallery up front. It pauses while the
// card is off screen and stays on the first image for reduced motion.
export function CoverSlideshow({ images, alt }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const count = images.length;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible || count < 2) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
        return () => window.clearInterval(timer);
    }, [visible, count]);

    const prev = (index - 1 + count) % count;
    const next = (index + 1) % count;

    return (
        <div ref={ref} className="relative w-full h-full">
            {images.map((src, i) => {
                if (i !== index && i !== prev && i !== next) return null;
                const shown = i === index;
                return (
                    <img
                        key={src}
                        src={src}
                        alt={shown ? alt : ''}
                        aria-hidden={!shown}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            opacity: shown ? 1 : 0,
                            // The outgoing image keeps its zoom while it fades,
                            // so it doesn't visibly shrink back.
                            transform: shown || i === prev ? 'scale(1.05)' : 'scale(1)',
                            transition: `opacity ${FADE_MS}ms ease, transform ${SLIDE_MS + FADE_MS}ms linear`,
                        }}
                    />
                );
            })}
        </div>
    );
}
