import { useEffect, useRef, useState } from 'react';
import type { Slide } from '../data/templateCaseStudy';
import { FadeImage } from './FadeImage';
import { useT } from '../i18n/useLanguage';

// A horizontal walk-through of one case, one step per slide, so a long story
// stays a single screen tall. Native scroll-snap does the swiping; the buttons
// and dots just scroll the track.
export function SlideCarousel({ slides }: { slides: Slide[] }) {
    const t = useT();
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const items = Array.from(track.children) as HTMLElement[];
            const left = track.scrollLeft;
            let nearest = 0;
            items.forEach((item, i) => {
                if (Math.abs(item.offsetLeft - track.offsetLeft - left) < Math.abs(items[nearest].offsetLeft - track.offsetLeft - left)) nearest = i;
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
        track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    };

    return (
        <div className="mt-8" role="region" aria-roledescription="carousel">
            <div className="relative">
                <div
                    ref={trackRef}
                    className="flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${i + 1} / ${slides.length}`}
                            className="snap-start flex-shrink-0 w-[88%] md:w-[85%] flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 md:p-7"
                        >
                            <p className="flex flex-wrap items-center gap-2 font-mono text-[13px] text-white/50">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white font-sans text-[14px] font-bold text-black">
                                    {i + 1}
                                </span>
                                {slide.label.startsWith('/') ? (
                                    <span className="rounded-md bg-orange-500/15 px-2.5 py-1 text-orange-300">{slide.label}</span>
                                ) : (
                                    t(slide.label)
                                )}
                                {slide.agent && (
                                    <span className="rounded-md bg-sky-500/15 px-2.5 py-1 text-sky-300">{slide.agent}</span>
                                )}
                            </p>
                            {slide.title && (
                                <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.25] text-white tracking-normal">{t(slide.title)}</h3>
                            )}
                            {slide.image && (
                                <FadeImage src={slide.image} alt={t(slide.title) || ''} className="w-full rounded-lg border border-white/15" loading="lazy" />
                            )}
                            {slide.diagram === 'test-panel' && <TestPanelDiagram />}
                            {slide.hypotheses && (
                                <div className="flex flex-col gap-3">
                                    {slide.hypotheses.map((h) => (
                                        <div
                                            key={h.label}
                                            className={h.primary ? 'rounded-lg border border-white/25 bg-white/[0.09] p-5' : 'rounded-lg bg-white/[0.04] p-4'}
                                        >
                                            <p className="flex items-baseline gap-3">
                                                <span className={`font-bold text-white ${h.primary ? 'text-[24px] md:text-[28px] leading-none' : 'text-[15px]'}`}>{h.label}</span>
                                                <span className={`text-xs font-semibold uppercase tracking-widest ${h.primary ? 'text-white/70' : 'text-white/45'}`}>{t(h.status)}</span>
                                            </p>
                                            <p className={h.primary ? 'mt-3 text-[17px] md:text-[18px] leading-relaxed text-white' : 'mt-2 text-[14px] md:text-[15px] leading-relaxed text-white/60'}>{t(h.content)}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {slide.content && (slide.html ? (
                                <p className="text-[15px] md:text-[16px] leading-relaxed text-white/75" dangerouslySetInnerHTML={{ __html: t(slide.content) }} />
                            ) : (
                                <p className="text-[15px] md:text-[16px] leading-relaxed text-white/75">{t(slide.content)}</p>
                            ))}
                            {slide.doc && (
                                // The doc fills whatever height the tallest slide leaves, and scrolls
                                // inside it: absolute positioning keeps its text from stretching the card.
                                <div className="flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-lg border border-white/15">
                                    <p className="border-b border-white/10 bg-white/[0.05] px-4 py-2 font-mono text-[12px] text-white/60">{slide.doc.file}</p>
                                    <div className="relative flex-1">
                                        <div
                                            tabIndex={0}
                                            role="region"
                                            aria-label={t(slide.doc.title)}
                                            className="absolute inset-0 overflow-y-auto overscroll-contain px-4 py-4 md:px-5"
                                        >
                                            <p className="text-[17px] font-bold leading-snug text-white">{t(slide.doc.title)}</p>
                                            {slide.doc.sections.map((section) => (
                                                <div key={section.title} className="mt-4 border-t border-white/10 pt-3">
                                                    <p className="font-mono text-[11px] uppercase tracking-widest text-white/45">{t(section.title)}</p>
                                                    <p className="mt-1.5 text-[14px] md:text-[15px] leading-relaxed text-white/75">{t(section.content)}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    aria-label={t('Previous slide')}
                    className={`absolute top-1/2 left-3 -translate-y-1/2 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-[opacity,background-color] hover:bg-white/85 cursor-pointer ${active === 0 ? 'pointer-events-none opacity-0' : 'opacity-50 hover:opacity-100 focus-visible:opacity-100'}`}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    aria-label={t('Next slide')}
                    className={`absolute top-1/2 right-[calc(15%-28px)] -translate-y-1/2 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-[opacity,background-color] hover:bg-white/85 cursor-pointer ${active === slides.length - 1 ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>

            <div className="mt-5 flex justify-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`${i + 1} / ${slides.length}`}
                        aria-current={i === active}
                        className={`h-2 w-2 rounded-full transition-colors cursor-pointer ${i === active ? 'bg-white' : 'bg-white/25 hover:bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}

function Avatar({ className = '' }: { className?: string }) {
    return (
        <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0e0e0e] bg-[#12303d] text-sky-300 ${className}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </span>
    );
}

// The prototype at the top, branching to the one persona and the five experts
// who review it, a picture of who /test-prototype puts in the room.
function TestPanelDiagram() {
    const t = useT();
    return (
        <div className="flex flex-col items-center rounded-lg border border-white/15 bg-white/[0.03] px-4 py-5">
            <span className="rounded-md border border-white/20 bg-white/[0.06] px-3 py-1.5 font-mono text-[13px] text-white">prototype.html</span>
            {/* Branches sideways from md up; on phones the two groups stack in a column.
                The columns are 1fr / 1.8fr rather than equal halves: five avatars weigh far
                more than one, and equal halves leave the drawing sitting visibly to the right.
                The branch line runs between the two column centres (17.86% → 67.86%). */}
            <div className="hidden md:block h-5 w-px bg-white/20" />
            <div className="hidden md:block h-px w-1/2 self-start ml-[17.86%] bg-white/20" />
            <div className="grid w-full grid-cols-1 md:grid-cols-[1fr_1.8fr]">
                <div className="flex flex-col items-center text-center">
                    <div className="h-5 w-px bg-white/20" />
                    <Avatar />
                    <p className="mt-2 text-[13px] font-semibold text-white">{t('Emulated persona')}</p>
                    <p className="mt-0.5 text-[12px] leading-snug text-white/55">{t('One customer profile')}</p>
                </div>
                <div className="mt-2 md:mt-0 flex flex-col items-center text-center">
                    <div className="h-5 w-px bg-white/20" />
                    <div className="flex -space-x-3">
                        {[0, 1, 2, 3, 4].map((n) => <Avatar key={n} />)}
                    </div>
                    <p className="mt-2 text-[13px] font-semibold text-white">{t('Expert reviewers')}</p>
                    <p className="mt-0.5 text-[12px] leading-snug text-white/55">{t('Accessibility, brand, content, interaction, UX')}</p>
                </div>
            </div>
        </div>
    );
}
