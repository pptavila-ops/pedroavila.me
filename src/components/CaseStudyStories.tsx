import { useState, useEffect, useRef, useCallback } from 'react';
import type { RichCaseStudy, StoriesSlide } from '../data/templateCaseStudy';

const SLIDE_DURATION = 8000;

interface Props {
    study: RichCaseStudy;
    onBack: () => void;
}

export function CaseStudyStories({ study, onBack }: Props) {
    const slides = study.slides!;
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);
    const [paused, setPaused] = useState(false);

    const startRef = useRef(Date.now());
    const elapsedRef = useRef(0);
    const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isHoldingRef = useRef(false);

    const goTo = useCallback((index: number) => {
        if (index < 0) { onBack(); return; }
        if (index >= slides.length) return;
        setCurrent(index);
        setProgress(0);
        elapsedRef.current = 0;
        startRef.current = Date.now();
        setPaused(false);
    }, [slides.length, onBack]);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            const total = elapsedRef.current + (Date.now() - startRef.current);
            const p = Math.min(total / SLIDE_DURATION, 1);
            setProgress(p);
            if (p >= 1) goTo(current + 1);
        }, 50);
        return () => clearInterval(id);
    }, [paused, current, goTo]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goTo(current + 1);
            if (e.key === 'ArrowLeft') goTo(current - 1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [current, goTo]);

    const handlePointerDown = useCallback(() => {
        isHoldingRef.current = false;
        holdTimerRef.current = setTimeout(() => {
            isHoldingRef.current = true;
            elapsedRef.current += Date.now() - startRef.current;
            setPaused(true);
        }, 300);
    }, []);

    const handlePointerUp = useCallback((e: React.PointerEvent<HTMLElement>) => {
        if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
        if (isHoldingRef.current) {
            isHoldingRef.current = false;
            startRef.current = Date.now();
            setPaused(false);
            return;
        }
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x < rect.width * 0.35) goTo(current - 1);
        else goTo(current + 1);
    }, [current, goTo]);

    const handlePointerCancel = useCallback(() => {
        if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
        if (isHoldingRef.current) {
            isHoldingRef.current = false;
            startRef.current = Date.now();
            setPaused(false);
        }
    }, []);

    const slide = slides[current];
    const isCover = slide.type === 'cover';

    return (
        <div className="select-none">
            {/* Back + title */}
            <div className="flex items-center gap-3 mb-4">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.293 5.29295C10.6835 4.90243 11.3165 4.90243 11.707 5.29295C12.0976 5.68348 12.0976 6.31649 11.707 6.70702L7.41406 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41406L11.707 17.293C12.0976 17.6835 12.0976 18.3165 11.707 18.707C11.3165 19.0975 10.6835 19.0975 10.293 18.707L4.29297 12.707C3.90245 12.3165 3.90245 11.6835 4.29297 11.293L10.293 5.29295Z" fill="currentColor" />
                    </svg>
                    Back
                </button>
                <span className="text-sm text-white/30">·</span>
                <span className="text-sm text-white/50 truncate">{study.title}</span>
            </div>

            {/* Progress bars */}
            <div className="flex gap-1.5 mb-5">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 h-[3px] bg-white/20 rounded-full overflow-hidden cursor-pointer"
                        onClick={() => goTo(i)}
                    >
                        <div
                            className="h-full bg-white rounded-full"
                            style={{
                                width: i < current ? '100%' : i === current ? `${progress * 100}%` : '0%',
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Cover slide — viewport wrapper with in-flow img to establish width */}
            {isCover ? (
                <div
                    className="relative cursor-pointer touch-none rounded-xl overflow-hidden"
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                >
                    {/* img in normal flow — this is what gives the container its width */}
                    <img
                        src={slide.bg}
                        alt=""
                        className="block w-full h-[320px] md:h-[420px] object-cover"
                        style={{ filter: 'brightness(2.2) contrast(1.1)' }}
                        draggable={false}
                    />
                    {/* Overlays — subtitle + title only, no tags, so they won't overflow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 px-7 pb-7 pointer-events-none">
                        {slide.subtitle && (
                            <p className="text-sm text-white/60 mb-2">{slide.subtitle}</p>
                        )}
                        <h1 className="text-[26px] md:text-[36px] font-bold leading-[1.15] tracking-tight text-white">
                            {slide.title}
                        </h1>
                    </div>
                    {/* Tap zones */}
                    <div className="absolute inset-0 flex z-10">
                        <div className="w-[35%] h-full" />
                        <div className="w-[65%] h-full" />
                    </div>
                </div>
            ) : (
                /* All other slides — inside a relative wrapper for tap zones */
                <div
                    className="relative cursor-pointer touch-none"
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                >
                    {paused && (
                        <div className="absolute top-4 right-4 z-20 bg-black/60 rounded-full px-3 py-1 text-xs text-white/60">
                            Paused
                        </div>
                    )}
                    <SlideRenderer slide={slide} />
                    <div className="absolute inset-0 flex z-10 pointer-events-none">
                        <div className="w-[35%] h-full pointer-events-auto" />
                        <div className="w-[65%] h-full pointer-events-auto" />
                    </div>
                </div>
            )}

            {/* Cover tags — normal flow below image, can never overflow */}
            {isCover && slide.tags && (
                <div className="flex flex-wrap gap-2 pt-5 pb-1">
                    {slide.tags.map((tag) => (
                        <span key={tag} className="text-[13px] text-white/80 border border-white/30 rounded-full px-3 py-1">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Slide counter */}
            <div className="mt-3 text-xs text-white/30 text-right">
                {current + 1} / {slides.length}
            </div>
        </div>
    );
}

function SlideRenderer({ slide }: { slide: StoriesSlide }) {
    switch (slide.type) {
        case 'image':
            return (
                <div className="w-full bg-black rounded-xl overflow-hidden">
                    {(slide.text || slide.quote) && (
                        <div className="px-7 pt-7 pb-4 space-y-4">
                            {slide.text && (
                                <p className="text-[16px] text-white/70 leading-relaxed">{slide.text}</p>
                            )}
                            {slide.quote && (
                                <p className="text-[18px] md:text-[20px] font-semibold text-white/90 leading-[1.4] pl-4 border-l-2 border-white/25">
                                    {slide.quote}
                                </p>
                            )}
                        </div>
                    )}
                    <figure>
                        <img
                            src={slide.image}
                            alt={slide.caption || ''}
                            className="w-full"
                            draggable={false}
                        />
                        {slide.caption && (
                            <figcaption className="px-7 py-3 text-sm text-white/40 text-center">
                                {slide.caption}
                            </figcaption>
                        )}
                    </figure>
                </div>
            );

        case 'quote':
            return (
                <div className="w-full bg-black rounded-xl px-7 py-10 flex flex-col gap-6 min-h-[400px] justify-center">
                    {slide.image && (
                        <img src={slide.image} alt="" className="w-full rounded-xl" draggable={false} />
                    )}
                    <p className="text-[20px] md:text-[24px] font-semibold text-white/90 leading-[1.45]">
                        {slide.quote}
                    </p>
                    {slide.text && (
                        <p className="text-[15px] text-white/50 leading-relaxed">{slide.text}</p>
                    )}
                </div>
            );

        case 'gallery':
            return (
                <div className="w-full bg-black rounded-xl px-7 py-7">
                    {slide.text && (
                        <p className="text-[16px] text-white/70 leading-relaxed mb-5">{slide.text}</p>
                    )}
                    <div className="grid grid-cols-2 gap-2">
                        {slide.images?.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt=""
                                className="w-full rounded-lg object-cover aspect-[4/3]"
                                draggable={false}
                            />
                        ))}
                    </div>
                </div>
            );

        case 'text':
            return (
                <div className="w-full bg-black rounded-xl px-7 py-10 min-h-[400px]">
                    {slide.title && (
                        <h2 className="text-2xl font-bold text-white mb-6">{slide.title}</h2>
                    )}
                    {slide.text && (
                        <p className="text-[16px] md:text-[17px] text-white/70 leading-relaxed">{slide.text}</p>
                    )}
                    {slide.download && (
                        <a
                            href={slide.download.href}
                            download
                            onClick={(e) => e.stopPropagation()}
                            className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded-md px-4 py-2.5 transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9999 3C10.9999 2.44772 11.4476 2 11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3V14.5859L16.2929 11.293C16.6834 10.9024 17.3164 10.9024 17.707 11.293C18.0975 11.6835 18.0975 12.3165 17.707 12.707L12.707 17.707C12.3164 18.0976 11.6834 18.0976 11.2929 17.707L6.29289 12.707C5.90237 12.3165 5.90237 11.6835 6.29289 11.293C6.68342 10.9024 7.31643 10.9024 7.70696 11.293L10.9999 14.5859V3Z" fill="currentColor" />
                                <path d="M4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19V20H18V19C18 18.4477 18.4477 18 19 18C19.5523 18 20 18.4477 20 19V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V19Z" fill="currentColor" />
                            </svg>
                            {slide.download.label}
                        </a>
                    )}
                </div>
            );

        default:
            return null;
    }
}
