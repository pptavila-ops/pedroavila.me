import { useState, useEffect, useRef } from 'react';
import type { RichCaseStudy } from '../data/templateCaseStudy';
import { CaseStudyImageCard } from './CaseStudyImageCard';
import { StickyHeader } from './StickyHeader';

interface OtherStudy {
    id: string;
    title: string;
    year: string;
    company: string;
    intro: string;
}

interface Props {
    study: RichCaseStudy;
    onBack: () => void;
    otherStudies?: OtherStudy[];
    onOpenStudy?: (id: string) => void;
}

export function CaseStudyPage({ study, onBack, otherStudies = [], onOpenStudy }: Props) {
    const [scrolled, setScrolled] = useState(false);
    const backButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setScrolled(false);
        const el = backButtonRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => setScrolled(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [study.id]);

    return (
        <div>
            <StickyHeader title={study.title} visible={scrolled} onBack={onBack} />

            {/* Back */}
            <button
                ref={backButtonRef}
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M10.293 5.29295C10.6835 4.90243 11.3165 4.90243 11.707 5.29295C12.0976 5.68348 12.0976 6.31649 11.707 6.70702L7.41406 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41406L11.707 17.293C12.0976 17.6835 12.0976 18.3165 11.707 18.707C11.3165 19.0975 10.6835 19.0975 10.293 18.707L4.29297 12.707C3.90245 12.3165 3.90245 11.6835 4.29297 11.293L10.293 5.29295Z" fill="currentColor"/>
                </svg>
                Back
            </button>

            {/* Cover image — full bleed */}
            <div className="relative mt-6 h-[320px] md:h-[420px] overflow-hidden rounded-xl">
                <img
                    src={study.cover}
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 px-7 pb-7">
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                        <span>{study.year}</span>
                        <span>·</span>
                        <span>@{study.company}</span>
                    </div>
                    <h1 className="text-[26px] md:text-[36px] font-bold leading-[1.15] tracking-tight text-white">
                        {study.title}
                    </h1>
                    {study.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {study.tags.map((tag) => (
                                <span key={tag} className="text-[12px] text-white/60 border border-white/20 rounded-full px-3 py-0.5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Intro */}
            <p className="mt-8 pt-8 border-t border-white/10 text-lg md:text-xl font-normal leading-relaxed text-white/70">
                {study.intro}
            </p>

            {/* Sections */}
            {study.sections.map((section, i) => {
                switch (section.type) {
                    case 'text':
                        return (
                            <p key={i} className="mt-8 text-[16px] md:text-[17px] font-normal leading-relaxed text-white/60">
                                {section.content}
                            </p>
                        );

                    case 'callout':
                        return (
                            <div key={i} className="my-10 pl-5 border-l-2 border-white/25">
                                <p className="text-[20px] md:text-[24px] font-semibold leading-[1.4] text-white/90">
                                    {section.content}
                                </p>
                            </div>
                        );

                    case 'divider':
                        return (
                            <div key={i} className="mt-14 mb-6 flex items-center gap-4">
                                {section.label && (
                                    <span className="text-xs font-semibold uppercase tracking-widest text-white/30 flex-shrink-0">
                                        {section.label}
                                    </span>
                                )}
                                <div className="flex-1 h-px bg-white/10" />
                            </div>
                        );

                    case 'impact':
                        return (
                            <div key={i} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                                {section.items.map((item, j) => (
                                    <div key={j} className="rounded-xl border border-white/10 p-5 flex flex-col">
                                        <p className="text-[32px] md:text-[36px] font-bold leading-none text-white tracking-tight">
                                            {item.value}
                                        </p>
                                        <p className="text-sm font-semibold text-white/70 mt-2">{item.label}</p>
                                        <p className="text-[15px] text-white/40 mt-1.5 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        );

                    case 'process':
                        return (
                            <div key={i} className="mt-8 flex flex-col gap-0">
                                {section.steps.map((step, j) => (
                                    <div key={j} className="flex gap-5 group">
                                        {/* Step number + line */}
                                        <div className="flex flex-col items-center flex-shrink-0">
                                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-semibold text-white/50 flex-shrink-0">
                                                {j + 1}
                                            </div>
                                            {j < section.steps.length - 1 && (
                                                <div className="w-px flex-1 bg-white/10 my-1" />
                                            )}
                                        </div>
                                        {/* Content */}
                                        <div className={`pb-8 ${j === section.steps.length - 1 ? '' : ''}`}>
                                            <p className="text-[15px] font-semibold text-white/80 leading-none mt-1.5">{step.title}</p>
                                            <p className="text-[15px] font-normal text-white/50 leading-relaxed mt-2">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );

                    case 'image':
                        return (
                            <figure key={i} className="mt-8">
                                <img
                                    src={section.src}
                                    alt={section.caption || ''}
                                    className="w-full rounded-xl"
                                />
                                {section.caption && (
                                    <figcaption className="mt-3 text-sm text-white/40 text-center">
                                        {section.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case 'two-column':
                        return (
                            <div key={i} className={`mt-8 flex flex-col md:flex-row gap-6 items-start ${section.imageLeft ? '' : 'md:flex-row-reverse'}`}>
                                <figure className="md:w-1/2 flex-shrink-0">
                                    <img
                                        src={section.image}
                                        alt={section.caption || ''}
                                        className="w-full rounded-xl"
                                    />
                                    {section.caption && (
                                        <figcaption className="mt-2 text-sm text-white/40">{section.caption}</figcaption>
                                    )}
                                </figure>
                                <p className="md:w-1/2 text-[16px] font-normal leading-relaxed text-white/60 md:pt-2">
                                    {section.content}
                                </p>
                            </div>
                        );

                    default:
                        return null;
                }
            })}

            {/* Other case studies */}
            {otherStudies.length > 0 && (
                <div className="mt-20 pt-10 border-t border-white/10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/30">Explore other case studies</p>
                    <div className="mt-5 grid grid-cols-3 gap-3 items-start">
                        {otherStudies.map((cs) => (
                            <button
                                key={cs.id}
                                onClick={() => onOpenStudy?.(cs.id)}
                                className="group cursor-pointer text-left relative"
                            >
                                <div className="rounded-xl border border-white/10 group-hover:border-white/20 transition-colors px-5 pt-5 pb-5 flex flex-col bg-black h-[200px]">
                                    <div className="text-sm text-white/50 flex-shrink-0">{cs.year}</div>
                                    <p className="text-lg font-bold text-white/80 mt-1.5 flex-shrink-0">{cs.title}</p>
                                    <div className="min-w-0 overflow-hidden mt-1 h-[80px]" style={{ maskImage: 'linear-gradient(to bottom, white 30%, transparent 97%)', WebkitMaskImage: 'linear-gradient(to bottom, white 30%, transparent 97%)' }}>
                                        <p className="text-[15px] font-normal leading-relaxed text-white/60">{cs.intro}</p>
                                    </div>
                                    <p className="text-sm text-white/50 mt-0.5 flex-shrink-0">@{cs.company}</p>
                                    <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 14C17 14.5523 16.5523 15 16 15C15.4478 15 15 14.5523 15 14V10.4141L8.70708 16.707C8.31655 17.0976 7.68354 17.0976 7.29302 16.707C6.90249 16.3165 6.90249 15.6835 7.29302 15.293L13.586 9H10C9.44776 9 9.00005 8.55228 9.00005 8C9.00005 7.44772 9.44776 7 10 7H16C16.5523 7 17 7.44772 17 8V14Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Poem */}
            <div className="border-t border-white/10 mt-20 pt-10">
                <p className="text-[15px] text-white/60 leading-relaxed">
                    Is this a poem, or a portfolio?<br />
                    A mix of form, something not to hide<br />
                    Is it both? A collection of my work<br />
                    And a snapshot of my mind
                </p>
            </div>

            <CaseStudyImageCard onOpenStudy={onOpenStudy} />

            <div className="h-20" />
        </div>
    );
}
