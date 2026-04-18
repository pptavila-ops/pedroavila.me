import { useState, useEffect, useRef, useCallback } from 'react';
import type { RichCaseStudy, StoriesSlide } from '../data/templateCaseStudy';

const SLIDE_DURATION = 8000;

interface Props {
    study: RichCaseStudy;
    onBack: () => void;
}

export function CaseStudyStories({ study, onBack }: Props) {
    const slides = study.slides!.flatMap((slide) =>
        slide.type === 'gallery' && slide.images
            ? slide.images.map((img, i) => ({
                type: 'image' as const,
                image: img,
                text: i === 0 ? slide.text : undefined,
              }))
            : [slide]
    );
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);
    const [paused, setPaused] = useState(false);
    const [hoveredZone, setHoveredZone] = useState<'left' | 'right' | null>(null);

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
            if (e.key === 'ArrowLeft' && current > 0) goTo(current - 1);
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

    const makePointerUp = useCallback((direction: 'prev' | 'next') => () => {
        if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
        if (isHoldingRef.current) {
            isHoldingRef.current = false;
            startRef.current = Date.now();
            setPaused(false);
            return;
        }
        if (direction === 'prev' && current > 0) goTo(current - 1);
        if (direction === 'next' && current < slides.length - 1) goTo(current + 1);
    }, [current, slides.length, goTo]);

    const handlePointerCancel = useCallback(() => {
        if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
        if (isHoldingRef.current) {
            isHoldingRef.current = false;
            startRef.current = Date.now();
            setPaused(false);
        }
    }, []);

    return (
        <div className="select-none">
            {/* Back + title */}
            <div className="flex items-center gap-3 mb-4">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white hover:bg-white/10 rounded-md px-2 py-1 -ml-2 transition-colors cursor-pointer flex-shrink-0"
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
                            style={{ width: i < current ? '100%' : i === current ? `${progress * 100}%` : '0%' }}
                        />
                    </div>
                ))}
            </div>

            {/* Single viewport wrapper — identical for every slide type */}
            <div
                className="relative w-full h-[460px] md:h-[560px] touch-none"
                onPointerCancel={handlePointerCancel}
            >
                {paused && (
                    <div className="absolute top-4 right-4 z-20 bg-black/60 rounded-full px-3 py-1 text-xs text-white/60 pointer-events-none">
                        Paused
                    </div>
                )}
                {/* Slide content — full a11y, no pointer capture */}
                <div aria-live="polite" aria-atomic="true" className="w-full h-full">
                    <SlideRenderer slide={slides[current]} index={current} total={slides.length} />
                </div>
                {/* Left tap zone — prev */}
                <div
                    className="absolute inset-y-0 left-0 w-[30%] z-10 cursor-pointer"
                    onPointerDown={handlePointerDown}
                    onPointerUp={makePointerUp('prev')}
                    onMouseEnter={() => setHoveredZone('left')}
                    onMouseLeave={() => setHoveredZone(null)}
                    role="button"
                    aria-label="Previous slide"
                    tabIndex={-1}
                />
                {/* Right tap zone — next */}
                <div
                    className="absolute inset-y-0 right-0 w-[30%] z-10 cursor-pointer"
                    onPointerDown={handlePointerDown}
                    onPointerUp={makePointerUp('next')}
                    onMouseEnter={() => setHoveredZone('right')}
                    onMouseLeave={() => setHoveredZone(null)}
                    role="button"
                    aria-label="Next slide"
                    tabIndex={-1}
                />
            </div>

            {/* Prev / counter / Next */}
            <div className="mt-3 flex items-center justify-between">
                {current > 0 ? (
                    <button
                        onClick={() => goTo(current - 1)}
                        className={`inline-flex items-center gap-1.5 text-sm rounded-md px-2 py-1 -ml-2 transition-colors cursor-pointer flex-shrink-0 ${hoveredZone === 'left' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10.293 5.29295C10.6835 4.90243 11.3165 4.90243 11.707 5.29295C12.0976 5.68348 12.0976 6.31649 11.707 6.70702L7.41406 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41406L11.707 17.293C12.0976 17.6835 12.0976 18.3165 11.707 18.707C11.3165 19.0975 10.6835 19.0975 10.293 18.707L4.29297 12.707C3.90245 12.3165 3.90245 11.6835 4.29297 11.293L10.293 5.29295Z" fill="currentColor" />
                        </svg>
                        Previous
                    </button>
                ) : <span />}
                <span className="text-xs text-white/60">
                    {current + 1} / {slides.length}
                </span>
                {current < slides.length - 1 ? (
                    <button
                        onClick={() => goTo(current + 1)}
                        className={`inline-flex items-center gap-1.5 text-sm rounded-md px-2 py-1 -mr-2 transition-colors cursor-pointer flex-shrink-0 ${hoveredZone === 'right' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
                    >
                        Next
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M13.707 5.29295C13.3165 4.90243 12.6835 4.90243 12.293 5.29295C11.9024 5.68348 11.9024 6.31649 12.293 6.70702L16.5859 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5859L12.293 17.293C11.9024 17.6835 11.9024 18.3165 12.293 18.707C12.6835 19.0975 13.3165 19.0975 13.707 18.707L19.707 12.707C20.0975 12.3165 20.0975 11.6835 19.707 11.293L13.707 5.29295Z" fill="currentColor" />
                        </svg>
                    </button>
                ) : <span />}
            </div>
        </div>
    );
}

function SlideRenderer({ slide, index, total }: { slide: StoriesSlide; index: number; total: number }) {
    switch (slide.type) {
        case 'cover':
            return <CoverSlide slide={slide} />;

        case 'image':
            return (
                <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl overflow-hidden flex flex-col">
                    {(slide.text || slide.quote) && (
                        <div className="px-5 pt-5 pb-3 md:px-7 md:pt-7 md:pb-4 space-y-3 md:space-y-4 flex-shrink-0">
                            {slide.text && (
                                <p className="text-[17px] md:text-[19px] text-white/85 leading-[1.4]">{slide.text}</p>
                            )}
                            {slide.quote && (
                                <p className="text-[18px] md:text-[20px] font-semibold text-white/90 leading-[1.4]">
                                    {slide.quote}
                                </p>
                            )}
                        </div>
                    )}
                    <figure className="flex-1 min-h-0 flex flex-col px-5 md:px-7">
                        <div className="flex-1 min-h-0 flex items-start justify-center">
                            <img
                                src={slide.image}
                                alt={slide.caption || ''}
                                className="max-w-full max-h-full object-contain rounded-2xl"
                                draggable={false}
                            />
                        </div>
                        {slide.caption && (
                            <figcaption className="pt-2 pb-3 md:pt-3 md:pb-4 text-sm text-white/70 text-center flex-shrink-0">
                                {slide.caption}
                            </figcaption>
                        )}
                    </figure>
                </div>
            );

        case 'quote':
            return (
                <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl px-5 py-8 md:px-7 md:py-10 flex flex-col gap-5 md:gap-6 justify-center overflow-hidden">
                    {slide.image && (
                        <img src={slide.image} alt="" role="presentation" className="w-full max-h-[50%] object-contain rounded-2xl" draggable={false} />
                    )}
                    <blockquote className="text-[20px] md:text-[24px] font-semibold text-white/90 leading-[1.45]">
                        {slide.quote}
                    </blockquote>
                    {slide.text && (
                        <p className="text-[15px] text-white/60 leading-relaxed">{slide.text}</p>
                    )}
                </div>
            );

        case 'gallery':
            return (
                <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl px-5 py-5 md:px-7 md:py-7 flex flex-col overflow-hidden">
                    {slide.text && (
                        <p className="text-[16px] text-white/70 leading-relaxed mb-4 md:mb-5 flex-shrink-0">{slide.text}</p>
                    )}
                    <div role="list" className="grid grid-cols-2 gap-2 flex-1 min-h-0">
                        {slide.images?.map((src, i) => (
                            <img
                                key={i}
                                role="listitem"
                                src={src}
                                alt={`Image ${i + 1}`}
                                className="w-full h-full rounded-2xl object-cover"
                                draggable={false}
                            />
                        ))}
                    </div>
                </div>
            );

        case 'text':
            return (
                <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl px-5 py-8 md:px-7 md:py-10 overflow-hidden flex flex-col">
                    {slide.title && (
                        <h2 className="text-2xl font-bold text-white mb-6">{slide.title}</h2>
                    )}
                    {slide.text && (
                        <p className="text-[16px] md:text-[17px] text-white/70 leading-relaxed">{slide.text}</p>
                    )}
                    {slide.download && (
                        <div className="mt-8 flex justify-center">
                            <a
                                href={slide.download.href}
                                download
                                onClick={(e) => e.stopPropagation()}
                                className="relative z-20 inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:border-white/40 hover:text-white"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M10.9999 3C10.9999 2.44772 11.4476 2 11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3V14.5859L16.2929 11.293C16.6834 10.9024 17.3164 10.9024 17.707 11.293C18.0975 11.6835 18.0975 12.3165 17.707 12.707L12.707 17.707C12.3164 18.0976 11.6834 18.0976 11.2929 17.707L6.29289 12.707C5.90237 12.3165 5.90237 11.6835 6.29289 11.293C6.68342 10.9024 7.31643 10.9024 7.70696 11.293L10.9999 14.5859V3Z" fill="currentColor" />
                                    <path d="M4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19V20H18V19C18 18.4477 18.4477 18 19 18C19.5523 18 20 18.4477 20 19V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V19Z" fill="currentColor" />
                                </svg>
                                {slide.download.label}
                            </a>
                        </div>
                    )}
                </div>
            );

        default:
            return null;
    }
}

function CoverSlide({ slide }: { slide: StoriesSlide }) {
    const images = slide.images ?? [];
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const t = setInterval(() => setIdx(i => (i + 1) % images.length), 3500);
        return () => clearInterval(t);
    }, [images.length]);

    return (
        <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
            {/* Crossfading blurred background images */}
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        filter: 'blur(3px) brightness(0.45)',
                        transform: 'scale(1.1)',
                        opacity: i === idx ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        pointerEvents: 'none',
                    }}
                />
            ))}
            {/* Blockquote — vertically centered, left-aligned */}
            <div className="absolute inset-0 flex flex-col justify-center px-7 md:px-9 pointer-events-none">
                <blockquote className="text-[20px] md:text-[23px] font-semibold text-white leading-[1.55]">
                    {slide.quote}
                </blockquote>
            </div>
        </div>
    );
}
