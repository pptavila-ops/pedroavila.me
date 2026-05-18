import { useState, useEffect, useRef } from 'react';
import type { RichCaseStudy } from '../data/templateCaseStudy';
import { CaseStudyImageCard } from './CaseStudyImageCard';
import { StickyHeader } from './StickyHeader';
import { BrandCarousel } from './BrandCarousel';
import { DesignProcessDiagram } from './DesignProcessDiagram';
import { CurrentDesignProcessDiagram } from './CurrentDesignProcessDiagram';
import { SpecMachineDiagram } from './SpecMachineDiagram';
import { ImpactCards } from './ImpactCards';
import { AnimatedSentence } from './AnimatedSentence';
import { SmallCard } from './CardGrid';
import { FadeImage } from './FadeImage';

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
                <h1 className="text-[32px] md:text-[44px] font-bold leading-[1.15] text-white tracking-normal">
                    {study.title}
                </h1>
                <div className="flex items-center gap-2 text-[15px] text-white/60 mt-3">
                    <span>{study.year}</span>
                    <span>·</span>
                    {study.companyUrl ? (
                        <a href={study.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@{study.company}</a>
                    ) : (
                        <span>@{study.company}</span>
                    )}
                </div>
                {study.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {study.tags.map((tag) => (
                            <span key={tag} className="text-[13px] text-white/80 bg-white/15 rounded-full px-3 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Intro */}
            {study.introHtml ? (
                <p className="mt-8 pt-8 border-t border-white/10 text-lg md:text-xl font-normal leading-relaxed text-white/70" dangerouslySetInnerHTML={{ __html: study.intro }} />
            ) : (
                <p className="mt-8 pt-8 border-t border-white/10 text-lg md:text-xl font-normal leading-relaxed text-white/70">
                    {study.intro}
                </p>
            )}

            {/* Sections */}
            {study.sections.map((section, i) => {
                switch (section.type) {
                    case 'text':
                        return section.html ? (
                            <p key={i} className="mt-8 text-[17px] md:text-[18px] font-normal leading-relaxed text-white/60" dangerouslySetInnerHTML={{ __html: section.content }} />
                        ) : (
                            <p key={i} className="mt-8 text-[17px] md:text-[18px] font-normal leading-relaxed text-white/60">
                                {section.content}
                            </p>
                        );

                    case 'callout':
                        return (
                            <p key={i} className="my-14 text-[28px] md:text-[38px] font-bold leading-[1.3] font-serif text-white tracking-normal">
                                {section.content}
                            </p>
                        );

                    case 'divider':
                        return (
                            <div key={i} className="mt-16 mb-8">
                                {section.label && (
                                    <>
                                        <h2 className="text-[22px] md:text-[28px] font-bold text-white leading-none pb-5 tracking-normal">
                                            {section.label}
                                        </h2>
                                        <div className="border-b border-white/15" />
                                    </>
                                )}
                            </div>
                        );

                    case 'impact':
                        return <ImpactCards key={i} items={section.items} title={section.title} />;

                    case 'process':
                        return (
                            <div key={i} className="mt-16 flex flex-col gap-0">
                                {section.title && (
                                    <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-8">{section.title}</p>
                                )}
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

                    case 'video':
                        return (
                            <figure key={i} className="mt-16 flex flex-col items-center">
                                <video
                                    src={section.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="rounded-xl block w-full max-w-[280px]"
                                />
                                {section.caption && (
                                    <figcaption className="mt-6 text-[15px] text-white/55 text-center">
                                        {section.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case 'image':
                        return (
                            <figure key={i} className={`${section.compact ? 'mt-2' : 'mt-8'} ${section.shrink ? 'md:w-4/5 md:mx-auto' : ''}`}>
                                <FadeImage
                                    src={section.src}
                                    alt={section.caption || ''}
                                    wrapperClassName="rounded-xl w-full"
                                    className="rounded-xl mx-auto block w-full"
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
                                    <FadeImage
                                        src={section.image}
                                        alt={section.caption || ''}
                                        wrapperClassName="rounded-xl w-full"
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
                                    <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-8">{section.title}</p>
                                )}
                                <div className="flex flex-col gap-8">
                                    {section.bars.map((bar) => (
                                        <div key={bar.label} className="flex flex-col gap-3">
                                            <div className="flex items-baseline justify-between gap-4">
                                                <div className="flex items-baseline gap-2.5">
                                                    <span className="text-[26px] md:text-[30px] font-bold text-white leading-none tracking-tight">{bar.label}</span>
                                                </div>
                                            </div>
                                            <div className="h-[6px] w-full bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{ width: `${bar.pct}%`, background: bar.color }}
                                                />
                                            </div>
                                            <span className="text-[17px] md:text-[18px] text-white/55">{bar.description}</span>
                                        </div>
                                    ))}
                                </div>
                                {section.caption && (
                                    <p className="mt-5 text-[13px] text-white/50 text-center">{section.caption}</p>
                                )}
                            </div>
                        );

                    case 'badge':
                        return (
                            <div key={i} className="mt-4 flex justify-center">
                                <div className="w-fit text-[15px] text-blue-300/80 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-lg">
                                    {section.icon && <span className="text-[18px] mr-2">{section.icon}</span>}
                                    {section.content}
                                </div>
                            </div>
                        );

                    case 'animated-sentence':
                        return <AnimatedSentence key={i} prefix={section.prefix} phrases={section.phrases} />;

                    case 'design-process-diagram':
                        return <DesignProcessDiagram key={i} />;

                    case 'current-design-process-diagram':
                        return <CurrentDesignProcessDiagram key={i} />;

                    case 'spec-machine-diagram':
                        return <SpecMachineDiagram key={i} />;

                    default:
                        return null;
                }
            })}

            {/* Other case studies */}
            {otherStudies.length > 0 && (
                <div className="mt-20 pt-10 border-t border-white/10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Explore other case studies</p>
                    <div className="overflow-x-clip lg:overflow-x-visible">
                        <div className="mt-5 flex gap-3 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible items-start">
                            {otherStudies.map((cs) => (
                                <div key={cs.id} className="flex-shrink-0 w-[80vw] md:w-[280px] lg:w-auto">
                                    <SmallCard cs={cs} openStudy={(id) => onOpenStudy?.(id)} />
                                </div>
                            ))}
                        </div>
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
