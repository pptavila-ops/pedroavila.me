import { useState, useEffect, useRef, useCallback } from 'react';
import type { RichCaseStudy, StoriesSlide } from '../data/templateCaseStudy';

const SLIDE_DURATION = 11000;
const COVER_DURATION = 16000;

interface Props {
    study: RichCaseStudy;
    onBack: () => void;
}

export function CaseStudyStories({ study, onBack }: Props) {
    const slides = study.slides!;
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);
    // Work case studies default to paused (no auto-advance). Personal studies autoplay.
    const [paused, setPaused] = useState(!study.personal);
    const [hoveredZone, setHoveredZone] = useState<'left' | 'right' | null>(null);

    const startRef = useRef(Date.now());
    const elapsedRef = useRef(0);
    const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isHoldingRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        containerRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, []);

    const goTo = useCallback((index: number) => {
        if (index < 0) { onBack(); return; }
        if (index >= slides.length) return;
        setCurrent(index);
        setProgress(0);
        elapsedRef.current = 0;
        if (!paused) startRef.current = Date.now();
    }, [slides.length, onBack, paused]);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            const duration = slides[current]?.duration ?? (current === 0 ? COVER_DURATION : SLIDE_DURATION);
            const total = elapsedRef.current + (Date.now() - startRef.current);
            const p = Math.min(total / duration, 1);
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
        <div ref={containerRef} className="select-none">
            {/* Back + title + pause */}
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
                <span className="text-sm text-white/50 truncate flex-1">{study.title}</span>
                <button
                    onClick={() => {
                        if (paused) {
                            startRef.current = Date.now();
                            setPaused(false);
                        } else {
                            elapsedRef.current += Date.now() - startRef.current;
                            setPaused(true);
                        }
                    }}
                    aria-label={paused ? 'Play' : 'Pause'}
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
                >
                    {paused ? (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{transform: 'translateX(1px)'}}>
                            <path d="M5.80859 4.17847C6.09977 4.14106 6.3758 4.22513 6.63379 4.33374C6.89347 4.4431 7.20883 4.61107 7.58789 4.81323L17.5732 10.1394C17.5793 10.1423 17.5858 10.145 17.5918 10.1482C18.0114 10.372 18.3567 10.5564 18.6123 10.7244C18.8636 10.8895 19.1053 11.087 19.2363 11.3708C19.4203 11.7695 19.4202 12.23 19.2363 12.6287C19.1052 12.9125 18.863 13.1097 18.6113 13.2751C18.3551 13.4436 18.0089 13.6288 17.5879 13.8533L7.58789 19.1863C7.20845 19.3886 6.89351 19.5575 6.63379 19.6667C6.37553 19.7753 6.09964 19.8575 5.80859 19.8201C5.39435 19.7666 5.01986 19.5438 4.77734 19.2029C4.60713 18.9635 4.55099 18.6801 4.52539 18.4011C4.49969 18.1207 4.5 17.7634 4.5 17.3337V6.66675C4.5 6.23687 4.49967 5.8791 4.52539 5.59839C4.551 5.31943 4.60708 5.03602 4.77734 4.79663C5.01985 4.45578 5.39432 4.2319 5.80859 4.17847Z" fill="currentColor"/>
                        </svg>
                    ) : (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M14 5.5V18.5C14 18.9647 14 19.197 14.0384 19.3902C14.1962 20.1836 14.816 20.8041 15.6094 20.9619C15.8026 21.0003 16.0349 21.0003 16.4996 21.0003C16.9642 21.0003 17.1974 21.0003 17.3906 20.9619C18.184 20.8041 18.8041 20.1836 18.9619 19.3902C19 19.1987 19 18.9687 19 18.5122V5.48777C19 5.03125 19 4.80087 18.9619 4.60938C18.8041 3.81599 18.1836 3.19624 17.3902 3.03843C17.197 3 16.9647 3 16.5 3C16.0353 3 15.8026 3 15.6094 3.03843C14.816 3.19624 14.1962 3.81599 14.0384 4.60938C14 4.80257 14 5.03534 14 5.5Z" fill="currentColor"/>
                            <path d="M5 5.5V18.5C5 18.9647 5 19.197 5.03843 19.3902C5.19624 20.1836 5.81599 20.8041 6.60938 20.9619C6.80257 21.0003 7.0349 21.0003 7.49956 21.0003C7.96421 21.0003 8.19743 21.0003 8.39062 20.9619C9.18401 20.8041 9.8041 20.1836 9.96191 19.3902C10 19.1987 10 18.9687 10 18.5122V5.48777C10 5.03125 10 4.80087 9.96191 4.60938C9.8041 3.81599 9.18356 3.19624 8.39018 3.03843C8.19698 3 7.96465 3 7.5 3C7.03535 3 6.80257 3 6.60938 3.03843C5.81599 3.19624 5.19624 3.81599 5.03843 4.60938C5 4.80257 5 5.03534 5 5.5Z" fill="currentColor"/>
                        </svg>
                    )}
                </button>
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
                    className={`absolute inset-y-0 right-0 w-[30%] z-10 ${current < slides.length - 1 ? 'cursor-pointer' : 'cursor-default'}`}
                    onPointerDown={handlePointerDown}
                    onPointerUp={makePointerUp('next')}
                    onMouseEnter={() => { if (current < slides.length - 1) setHoveredZone('right'); }}
                    onMouseLeave={() => setHoveredZone(null)}
                    role="button"
                    aria-label="Next slide"
                    tabIndex={-1}
                />
            </div>

            {/* Prev / counter / Next */}
            <div className="mt-5 relative flex items-center justify-center">
                {current > 0 && (
                    <button
                        onClick={() => goTo(current - 1)}
                        className={`absolute left-0 inline-flex items-center gap-1.5 text-sm rounded-md px-2 py-1 -ml-2 transition-colors cursor-pointer ${hoveredZone === 'left' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10.293 5.29295C10.6835 4.90243 11.3165 4.90243 11.707 5.29295C12.0976 5.68348 12.0976 6.31649 11.707 6.70702L7.41406 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41406L11.707 17.293C12.0976 17.6835 12.0976 18.3165 11.707 18.707C11.3165 19.0975 10.6835 19.0975 10.293 18.707L4.29297 12.707C3.90245 12.3165 3.90245 11.6835 4.29297 11.293L10.293 5.29295Z" fill="currentColor" />
                        </svg>
                        Previous
                    </button>
                )}
                <span className="text-xs text-white/60">
                    {current + 1} / {slides.length}
                </span>
                {current < slides.length - 1 ? (
                    <button
                        onClick={() => goTo(current + 1)}
                        className={`absolute right-0 inline-flex items-center gap-1.5 text-sm rounded-md px-2 py-1 -mr-2 transition-colors cursor-pointer ${hoveredZone === 'right' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
                    >
                        Next
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M13.707 5.29295C13.3165 4.90243 12.6835 4.90243 12.293 5.29295C11.9024 5.68348 11.9024 6.31649 12.293 6.70702L16.5859 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5859L12.293 17.293C11.9024 17.6835 11.9024 18.3165 12.293 18.707C12.6835 19.0975 13.3165 19.0975 13.707 18.707L19.707 12.707C20.0975 12.3165 20.0975 11.6835 19.707 11.293L13.707 5.29295Z" fill="currentColor" />
                        </svg>
                    </button>
                ) : (
                    <button
                        onClick={(e) => { e.stopPropagation(); goTo(0); }}
                        className="absolute right-0 inline-flex items-center gap-1.5 text-sm rounded-md px-2 py-1 -mr-2 transition-colors cursor-pointer text-white/50 hover:text-white hover:bg-white/10"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M20 14C20 11.7909 18.2092 10 16 10H5.41411L7.70708 12.293C8.0976 12.6835 8.0976 13.3166 7.70708 13.7071C7.31655 14.0976 6.68354 14.0976 6.29302 13.7071L2.29302 9.70708C1.90249 9.31655 1.90249 8.68354 2.29302 8.29302L6.29302 4.29302C6.68354 3.90249 7.31655 3.90249 7.70708 4.29302C8.0976 4.68354 8.0976 5.31655 7.70708 5.70708L5.41411 8.00005H16C19.3138 8.00005 22 10.6863 22 14C22 17.3138 19.3138 20 16 20H11C10.4478 20 10 19.5523 10 19C10 18.4478 10.4478 18 11 18H16C18.2092 18 20 16.2092 20 14Z" fill="currentColor"/>
                        </svg>
                        Restart
                    </button>
                )}
            </div>
        </div>
    );
}

function StatCard({ value, label, description }: { value: string; label: string; description: string }) {
    return (
        <div className="rounded-xl border border-white/10 p-3 md:p-5 flex flex-col gap-1.5">
            <p className="text-[28px] md:text-[40px] font-bold leading-none text-white tracking-tight">{value}</p>
            <p className="text-[13px] md:text-[14px] font-semibold text-white/70">{label}</p>
            <p className="text-[15px] text-white/50 leading-relaxed hidden md:block">{description}</p>
        </div>
    );
}

function SlideRenderer({ slide, index, total }: { slide: StoriesSlide; index: number; total: number }) {
    switch (slide.type) {
        case 'cover':
            return <CoverSlide slide={slide} />;

        case 'image':
            if (slide.layout === 'split') {
                return (
                    <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl overflow-hidden flex flex-col md:flex-row">
                        {/* Text column */}
                        <div className="flex flex-col justify-center px-5 pt-5 pb-3 md:px-7 md:py-8 md:w-1/2 md:flex-shrink-0 space-y-3 md:space-y-4">
                            {slide.title && (
                                <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-[1.2]">{slide.title}</h2>
                            )}
                            {slide.text && (
                                <p className="text-[17px] md:text-[19px] text-white/85 leading-[1.4]">{slide.text}</p>
                            )}
                            {slide.quote && (
                                <p className="text-[18px] md:text-[20px] font-semibold text-white/90 leading-[1.4]">{slide.quote}</p>
                            )}
                        </div>
                        {/* Image column */}
                        <figure className="flex-1 min-h-0 flex flex-col items-center justify-center px-5 pb-5 md:px-7 md:py-7">
                            <img
                                src={slide.image}
                                alt={slide.caption || ''}
                                className="max-w-[55%] md:max-w-[80%] min-h-0 flex-shrink object-contain rounded-2xl"
                                style={{ filter: slide.imageFilter ?? 'contrast(1.15) brightness(1.05)' }}
                                draggable={false}
                            />
                            {slide.caption && (
                                <figcaption className="pt-3 text-[14px] text-white/70 text-center flex-shrink-0 w-full">
                                    {slide.caption}
                                </figcaption>
                            )}
                        </figure>
                    </div>
                );
            }
            return (
                <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl overflow-hidden flex flex-col">
                    {(slide.title || slide.text || slide.quote) && (
                        <div className="px-5 pt-5 pb-3 md:px-7 md:pt-7 md:pb-4 space-y-3 md:space-y-4 flex-shrink-0">
                            {slide.title && (
                                <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-[1.2]">{slide.title}</h2>
                            )}
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
                    <figure className="flex-1 min-h-0 flex flex-col items-center justify-center px-5 md:px-7">
                        <img
                            src={slide.image}
                            alt={slide.caption || ''}
                            className="max-w-full min-h-0 flex-shrink object-contain rounded-2xl"
                            style={{ filter: slide.imageFilter ?? 'contrast(1.15) brightness(1.05)' }}
                            draggable={false}
                        />
                        {slide.caption && (
                            <figcaption className="pt-4 pb-3 md:pt-5 md:pb-4 text-[15px] text-white/70 text-center flex-shrink-0 w-full">
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
                        <img src={slide.image} alt="" role="presentation" className="w-full max-h-[50%] object-contain rounded-2xl" style={{ filter: slide.imageFilter ?? 'contrast(1.15) brightness(1.05)' }} draggable={false} />
                    )}
                    {slide.title && (
                        <p className="text-[13px] uppercase tracking-widest text-white/40 font-medium">{slide.title}</p>
                    )}
                    <blockquote className={`${slide.large ? 'text-[30px] md:text-[40px] leading-[1.3]' : 'text-[20px] md:text-[24px] leading-[1.45]'} font-semibold text-white/90`}>
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
                    <div role="list" className={`flex-1 min-h-0 ${(slide.columns ?? 2) === 1 ? 'flex flex-col gap-2' : 'grid grid-cols-2 gap-2'}`}>
                        {slide.images?.map((src, i) => (
                            <img
                                key={i}
                                role="listitem"
                                src={src}
                                alt={`Image ${i + 1}`}
                                className={`w-full rounded-2xl ${(slide.columns ?? 2) === 1 ? 'flex-1 min-h-0 object-cover' : 'h-full object-cover'}`}
                                style={{ filter: slide.imageFilter ?? 'contrast(1.15) brightness(1.05)' }}
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

        case 'stats':
            return (
                <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl px-5 py-6 md:px-7 md:py-8 flex flex-col overflow-hidden">
                    {slide.title && (
                        <p className="text-[13px] uppercase tracking-widest text-white/40 font-medium mb-4 flex-shrink-0">{slide.title}</p>
                    )}
                    <div className="flex-1 min-h-0 grid grid-cols-2 gap-3 content-start">
                        {slide.items?.map((item, i) => (
                            <StatCard key={i} value={item.value} label={item.label} description={item.description} />
                        ))}
                    </div>
                </div>
            );

        case 'steps':
            return (
                <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl px-5 py-6 md:px-7 md:py-8 flex flex-col overflow-hidden">
                    {slide.title && (
                        <p className="text-[13px] uppercase tracking-widest text-white/40 font-medium mb-4 flex-shrink-0">{slide.title}</p>
                    )}
                    <div className="flex-1 min-h-0 flex flex-col gap-0 overflow-hidden">
                        {slide.steps?.map((step, j) => (
                            <div key={j} className="flex gap-5">
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-semibold text-white/50 flex-shrink-0">
                                        {j + 1}
                                    </div>
                                    {j < (slide.steps?.length ?? 0) - 1 && (
                                        <div className="w-px flex-1 bg-white/10 my-1" />
                                    )}
                                </div>
                                <div className="pb-5">
                                    <p className="text-[15px] font-semibold text-white/80 leading-none mt-1.5">{step.title}</p>
                                    <p className="text-[14px] font-normal text-white/50 leading-relaxed mt-2">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'intro':
            return (
                <div role="region" aria-label={`Slide ${index + 1} of ${total}`} className="w-full h-full bg-black rounded-2xl px-5 py-6 md:px-8 md:py-9 flex flex-col overflow-hidden">
                    {slide.title && (
                        <h2 className="text-[20px] md:text-[28px] font-bold text-white leading-[1.15] mb-5 md:mb-8 flex-shrink-0 pr-8">{slide.title}</h2>
                    )}
                    <div className="flex-1 min-h-0 flex flex-col gap-5 md:gap-8 overflow-y-auto">
                        {slide.blocks?.map((block, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:gap-10 gap-2">
                                <div className="md:w-[34%] flex-shrink-0">
                                    <p className="text-[18px] md:text-[22px] font-medium text-white/85 leading-none">+ {block.label}</p>
                                </div>
                                <div className="md:flex-1 space-y-2.5 md:space-y-3">
                                    {block.paragraphs.map((p, j) => (
                                        <p key={j} className="text-[14px] md:text-[16px] text-white/65 leading-relaxed">{p}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
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
                        filter: 'blur(2px) brightness(0.6)',
                        transform: 'scale(1.1)',
                        opacity: i === idx ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        pointerEvents: 'none',
                    }}
                />
            ))}
            {/* Content — vertically centered, left-aligned */}
            <div className="absolute inset-0 flex flex-col justify-center gap-5 px-7 md:px-9 pointer-events-none">
                <blockquote className="text-[20px] md:text-[23px] font-semibold text-white leading-[1.55]">
                    {slide.quote}
                </blockquote>
                {slide.tags && (
                    <div className="flex flex-wrap gap-2">
                        {slide.tags.map((tag) => (
                            <span key={tag} className="text-[13px] text-white/70 border border-white/30 rounded-full px-3 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
