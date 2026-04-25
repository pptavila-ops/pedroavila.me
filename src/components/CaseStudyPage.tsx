import { useState, useEffect, useRef } from 'react';
import type { RichCaseStudy } from '../data/templateCaseStudy';
import { CaseStudyImageCard } from './CaseStudyImageCard';
import { StickyHeader } from './StickyHeader';
import { BrandCarousel } from './BrandCarousel';

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

            {/* Header — text only, left-aligned */}
            <div className="mt-8">
                <h1 className="text-[32px] md:text-[44px] font-bold leading-[1.15] text-white font-serif">
                    {study.title}
                </h1>
                <div className="flex items-center gap-2 text-[15px] text-white/60 mt-3">
                    <span>{study.year}</span>
                    <span>·</span>
                    <span>@{study.company}</span>
                    {study.role && (
                        <>
                            <span>·</span>
                            <span>{study.role}</span>
                        </>
                    )}
                </div>
                {study.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {study.tags.map((tag) => (
                            <span key={tag} className="text-[13px] text-white/55 border border-white/15 rounded-full px-3 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
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
                            <p key={i} className="my-14 text-[28px] md:text-[38px] font-bold leading-[1.3] font-serif text-white">
                                {section.content}
                            </p>
                        );

                    case 'divider':
                        return (
                            <div key={i} className="mt-16 mb-8">
                                {section.label && (
                                    <>
                                        <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-none font-serif pb-5">
                                            {section.label}
                                        </h2>
                                        <div className="border-b border-white/15" />
                                    </>
                                )}
                            </div>
                        );

                    case 'impact':
                        return (
                            <div key={i} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
                                {section.items.map((item) => (
                                    <div key={item.label} className="flex flex-col border-t border-white/15 pt-4">
                                        <p className="text-[40px] md:text-[48px] font-bold leading-none text-white tracking-tight">
                                            {item.value}
                                        </p>
                                        <p className="text-[13px] font-semibold text-white/60 mt-2.5 uppercase tracking-wide">{item.label}</p>
                                        <p className="text-[14px] text-white/50 mt-2 leading-relaxed hidden md:block">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        );

                    case 'process':
                        return (
                            <div key={i} className="mt-8 flex flex-col gap-0">
                                {section.steps.map((step, j) => (
                                    <div key={step.title} className="flex gap-5 group">
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
                                        <div className={j < section.steps.length - 1 ? 'pb-8' : ''}>
                                            <p className="text-[15px] font-semibold text-white/80 leading-none mt-1.5">{step.title}</p>
                                            <p className="text-[15px] font-normal text-white/55 leading-relaxed mt-2">{step.description}</p>
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
                                    loading="lazy"
                                />
                                {section.caption && (
                                    <figcaption className="mt-3 text-[15px] text-white/55 text-center">
                                        {section.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case 'two-column':
                        return (
                            <div key={i} className="mt-8 flex flex-col md:flex-row md:items-center md:gap-8 gap-4">
                                <figure className={`md:w-1/2 flex-shrink-0 ${section.imageLeft === false ? 'md:order-2' : ''}`}>
                                    <img
                                        src={section.image}
                                        alt={section.caption || ''}
                                        className="w-full rounded-xl"
                                        loading="lazy"
                                    />
                                    {section.caption && (
                                        <figcaption className="mt-2 text-[14px] text-white/55 text-center">{section.caption}</figcaption>
                                    )}
                                </figure>
                                {section.content && (
                                    <p className={`text-[16px] font-normal leading-relaxed text-white/60 md:flex-1 ${section.imageLeft === false ? 'md:order-1' : ''}`}>{section.content}</p>
                                )}
                            </div>
                        );

                    case 'download':
                        return (
                            <div key={i} className="mt-8">
                                <a
                                    href={section.href}
                                    download
                                    className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/60 transition-colors hover:border-white/40 hover:text-white"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9999 3C10.9999 2.44772 11.4476 2 11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3V14.5859L16.2929 11.293C16.6834 10.9024 17.3164 10.9024 17.707 11.293C18.0975 11.6835 18.0975 12.3165 17.707 12.707L12.707 17.707C12.3164 18.0976 11.6834 18.0976 11.2929 17.707L6.29289 12.707C5.90237 12.3165 5.90237 11.6835 6.29289 11.293C6.68342 10.9024 7.31643 10.9024 7.70696 11.293L10.9999 14.5859V3Z" fill="currentColor" /><path d="M4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19V20H18V19C18 18.4477 18.4477 18 19 18C19.5523 18 20 18.4477 20 19V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V19Z" fill="currentColor" /></svg>
                                    {section.label}
                                </a>
                            </div>
                        );

                    case 'chart':
                        return (
                            <div key={i} className="mt-10">
                                {section.title && (
                                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">{section.title}</p>
                                )}
                                <div className="flex flex-col gap-5">
                                    {section.bars.map((bar) => (
                                        <div key={bar.label} className="flex flex-col gap-2">
                                            <div className="flex items-baseline justify-between gap-4">
                                                <div className="flex items-baseline gap-2.5">
                                                    <span className="text-[26px] md:text-[30px] font-bold text-white leading-none tracking-tight">{bar.label}</span>
                                                    <span className="text-[13px] font-semibold text-white/55">{bar.sublabel}</span>
                                                </div>
                                                <span className="text-[13px] text-white/55 text-right hidden md:block">{bar.description}</span>
                                            </div>
                                            <div className="h-[6px] w-full bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{ width: `${bar.pct}%`, background: bar.color }}
                                                />
                                            </div>
                                            <span className="text-[13px] text-white/55 md:hidden">{bar.description}</span>
                                        </div>
                                    ))}
                                </div>
                                {section.caption && (
                                    <p className="mt-5 text-[13px] text-white/50 text-center">{section.caption}</p>
                                )}
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
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
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

            <BrandCarousel />

            <CaseStudyImageCard onOpenStudy={onOpenStudy} />

            {/* Poem — last */}
            <div className="border-t border-white/10 mt-16 pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
                <p className="text-[15px] text-white/60 leading-relaxed">
                    Is this a poem, or a portfolio?<br />
                    A mix of form, something not to hide<br />
                    Is it both? A collection of my work<br />
                    And a snapshot of my mind
                </p>
                <p className="text-[15px] text-white/60 flex-shrink-0">© Pedro Ávila 2026</p>
            </div>

            <div className="h-20" />
        </div>
    );
}
