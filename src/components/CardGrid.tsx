import type { MouseEvent } from 'react';
import { TagLine } from './TagLine';
import { CoverSlideshow } from './CoverSlideshow';
import { caseImages } from '../data/caseImages';
import { useT } from '../i18n/useLanguage';

interface CaseStudy {
    id: string;
    title: string;
    year: string;
    company: string;
    intro: string;
    cover?: string;
    coverScale?: number;
    coverOffsetX?: number;
    coverOffsetY?: number;
    metric?: { value: string; label: string };
    summary?: string;
    tags?: string[];
}

interface Props {
    caseStudies: CaseStudy[];
    openStudy: (id: string) => void;
    layout: 'grid' | 'list';
}

// The intro carries inline markup — CaseStudyPage renders it with
// dangerouslySetInnerHTML. Card previews are plain text inside a link, so strip
// the tags instead of printing them.
function stripHtml(html: string) {
    return html.replace(/<[^>]+>/g, '');
}

// Cards are real links, so they can be opened in a new tab or copied. A plain
// left click still stays on the SPA route.
function studyLinkProps(id: string, openStudy: (id: string) => void) {
    return {
        href: `/work/${id}`,
        onClick: (e: MouseEvent<HTMLAnchorElement>) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            e.preventDefault();
            openStudy(id);
        },
    };
}

export function CardGrid({ caseStudies, openStudy, layout }: Props) {
    const t = useT();
    const isGrid = layout === 'grid';

    if (!isGrid) {
        return (
            <div className="mt-8 md:mt-20 flex flex-col gap-6">
                {caseStudies.map((cs) => <CaseCard key={cs.id} cs={cs} openStudy={openStudy} />)}
            </div>
        );
    }

    return (
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs) => (
                <a
                    key={cs.id}
                    {...studyLinkProps(cs.id, openStudy)}
                    className="group cursor-pointer text-left block"
                >
                    <div className="relative rounded-xl border border-white/15 group-hover:border-white/25 transition-colors overflow-hidden p-5 flex flex-col h-[300px] bg-black">
                        <div className="flex-1 overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)' }}>
                            <p className="text-[15px] font-normal leading-relaxed text-white/60">{stripHtml(t(cs.intro))}</p>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><ArrowIcon /></div>
                        </div>
                        <div className="relative -mt-1">
                            <div className="flex items-center gap-2 text-base text-white/50">{t(cs.year)}{cs.id === 'design-transformation' && <CurrentRoleTag />}</div>
                            <p className="text-base font-bold text-white/80 mt-1">{t(cs.title)}</p>
                            <p className="text-sm text-white/50 mt-1">@{cs.company}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

interface CardProps {
    cs: { id: string; title: string; year: string; company: string; intro: string };
    openStudy: (id: string) => void;
}

// Home-page case card: one bordered panel split in two on lg+ — the cover
// fills the left half edge to edge (stretching to the text's height, capped at
// 400px wide so wide monitors don't blow it up and crop it) with the @company
// (and current-role) badges on it; the right half holds the title, headline
// metric and summary, closed by a divider and a meta row (years · scope).
// Below lg it stacks with the cover on top, since a half-width cover gets too
// narrow on tablets. The cover cycles through the study's own images unless
// the study pins a single `cover`. On hover the border brightens, the panel
// fills in slightly and the cover zooms slowly.
function CaseCard({ cs, openStudy }: { cs: CaseStudy; openStudy: (id: string) => void }) {
    const t = useT();
    const images = cs.cover ? [cs.cover] : caseImages(cs.id);

    return (
        <a
            {...studyLinkProps(cs.id, openStudy)}
            className="group cursor-pointer text-left grid grid-cols-1 lg:grid-cols-[min(50%,400px)_minmax(0,1fr)] rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 hover:bg-white/[0.03] active:bg-white/[0.06] transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
            <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[20rem] overflow-hidden isolate ${cs.coverScale ? 'bg-black' : 'bg-white/5'}`}>
                {images.length > 0 && (
                    <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                        <div className="w-full h-full" style={cs.coverScale ? { transform: `translate(${cs.coverOffsetX ?? 0}%, ${cs.coverOffsetY ?? 0}%) scale(${cs.coverScale})` } : undefined}>
                            <CoverSlideshow images={images} alt="" fit={cs.coverScale ? 'contain' : 'cover'} />
                        </div>
                    </div>
                )}
                <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-black/75 backdrop-blur-md border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">@{cs.company}</span>
                    {cs.id === 'design-transformation' && (
                        <span className="rounded-full bg-black/75 backdrop-blur-md border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">{t('Current Role')}</span>
                    )}
                </div>
            </div>

            <div className="min-w-0 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-[22px] md:text-[26px] font-bold leading-[1.2] text-white text-pretty">
                    {t(cs.title)}
                </h2>

                {cs.metric && (
                    <p className="mt-3 flex items-center gap-2 text-[15px] font-bold text-white/70">
                        <span className="text-[22px] leading-none tabular-nums">{t(cs.metric.value)}</span>
                        {t(cs.metric.label)}
                    </p>
                )}

                <p className="mt-3 text-[15px] leading-relaxed text-white/60 text-pretty">
                    {cs.summary ? t(cs.summary) : stripHtml(t(cs.intro))}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <TagLine tags={[cs.year]} className="text-white/60" />
                    {cs.tags && (
                        <TagLine tags={cs.tags} className="text-white/80 group-hover:text-white transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                    )}
                </div>
            </div>
        </a>
    );
}

export function SmallCard({ cs, openStudy }: CardProps) {
    const t = useT();

    return (
        <a
            {...studyLinkProps(cs.id, openStudy)}
            className="group cursor-pointer text-left block w-full"
        >
            <div className="relative rounded-xl border border-white/15 group-hover:border-white/25 transition-colors p-5 flex flex-col bg-black z-10 h-[240px]">
                <div className="flex items-center gap-2 text-sm text-white/50 flex-shrink-0">
                    {t(cs.year)}
                    {cs.id === 'design-transformation' && <CurrentRoleTag />}
                </div>
                <p className="text-lg font-bold text-white/80 mt-1.5 flex-shrink-0">{t(cs.title)}</p>
                <div className="min-w-0 overflow-hidden mt-1 flex-1" style={{ maskImage: 'linear-gradient(to bottom, white 30%, transparent 97%)', WebkitMaskImage: 'linear-gradient(to bottom, white 30%, transparent 97%)' }}>
                    <p className="text-[15px] font-normal leading-relaxed text-white/60">{stripHtml(t(cs.intro))}</p>
                </div>
                <p className="text-sm text-white/50 mt-0.5 flex-shrink-0">@{cs.company}</p>
                <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center"><ArrowIcon /></div>
                </div>
            </div>
        </a>
    );
}

function CurrentRoleTag() {
    const t = useT();

    return (
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70 border border-white/30 rounded-full px-2 py-0.5">
            {t('Current Role')}
        </span>
    );
}

function ArrowIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 14C17 14.5523 16.5523 15 16 15C15.4478 15 15 14.5523 15 14V10.4141L8.70708 16.707C8.31655 17.0976 7.68354 17.0976 7.29302 16.707C6.90249 16.3165 6.90249 15.6835 7.29302 15.293L13.586 9H10C9.44776 9 9.00005 8.55228 9.00005 8C9.00005 7.44772 9.44776 7 10 7H16C16.5523 7 17 7.44772 17 8V14Z" fill="black"/>
        </svg>
    );
}
