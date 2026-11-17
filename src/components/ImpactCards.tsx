import { useEffect, useRef, useState } from 'react';
import { useT } from '../i18n/useLanguage';

interface ImpactItem {
    value: string;
    label: string;
    description: string;
    logos?: { src: string; alt: string; height: number }[];
}

interface ImpactCardsProps {
    items: ImpactItem[];
    title?: string;
}

// Below lg the cards sit in a swipeable scroll-snap row with dots under it,
// like SlideCarousel; from lg up they're a plain 2-column grid.
export function ImpactCards({ items, title }: ImpactCardsProps) {
    const t = useT();
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const cards = Array.from(track.children) as HTMLElement[];
            const left = track.scrollLeft;
            let nearest = 0;
            cards.forEach((card, i) => {
                if (Math.abs(card.offsetLeft - track.offsetLeft - left) < Math.abs(cards[nearest].offsetLeft - track.offsetLeft - left)) nearest = i;
            });
            setActive(nearest);
        };
        track.addEventListener('scroll', onScroll, { passive: true });
        return () => track.removeEventListener('scroll', onScroll);
    }, []);

    const goTo = (index: number) => {
        const track = trackRef.current;
        const target = track?.children[index] as HTMLElement | undefined;
        if (!track || !target) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    return (
        <div className="mt-16">
            {title && (
                <h2 className="mb-8 border-b border-white/15 py-4 text-[18px] md:text-[20px] font-bold text-white leading-tight tracking-normal">
                    {t(title)}
                </h2>
            )}
            <div
                ref={trackRef}
                className="flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:gap-10 lg:overflow-visible"
            >
                {items.map((item, i) => (
                    <div
                        key={item.label}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} / ${items.length}`}
                        className="snap-start flex-shrink-0 w-[88%] lg:w-auto rounded-2xl border border-white/10 p-8 flex flex-col min-h-[260px]"
                    >
                        {item.logos ? (
                            <div className="flex items-center gap-4">
                                <p className="text-[44px] md:text-[52px] font-bold leading-none text-white font-serif tracking-normal flex-shrink-0">
                                    {t(item.value)}
                                </p>
                                <div className="flex-1 overflow-hidden relative h-[72px] md:h-[88px]">
                                    <div
                                        className="animate-hf-brand-scroll"
                                        style={{ display: 'flex', alignItems: 'center', width: 'max-content', height: '100%', willChange: 'transform' }}
                                    >
                                        {[...item.logos, ...item.logos].map((logo, j) => (
                                            <img
                                                key={j}
                                                src={logo.src}
                                                alt={logo.alt}
                                                loading="lazy"
                                                style={{ height: `${logo.height}px`, width: 'auto', objectFit: 'contain', flexShrink: 0, filter: 'brightness(0) invert(1)', opacity: 0.4, marginRight: '28px' }}
                                            />
                                        ))}
                                    </div>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '32px', height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '32px', height: '100%', background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
                                </div>
                            </div>
                        ) : (
                            <p className="text-[44px] md:text-[52px] font-bold leading-none text-white font-serif tracking-normal">
                                {t(item.value)}
                            </p>
                        )}
                        <div className="mt-8">
                            <p className="text-[17px] md:text-[19px] font-bold text-white leading-snug">{t(item.label)}</p>
                            <p className="text-[17px] md:text-[18px] text-white/55 mt-2 leading-relaxed">{t(item.description)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-3 flex justify-center lg:hidden">
                {items.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`${i + 1} / ${items.length}`}
                        aria-current={i === active}
                        className="group flex h-6 items-center px-2 cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        <span
                            className={`block h-2 rounded-full transition-[width,background-color] duration-300 ease-out motion-reduce:transition-none ${i === active ? 'w-5 bg-white' : 'w-2 bg-white/25 group-hover:bg-white/50'}`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
