import { useT } from '../i18n/useLanguage';

/* Pieces shared by the case-study card rows (TPT process, pet parent
   lifecycle): the colored stage tabs on top and the counter + buttons below. */

export type StageTab = {
    id: string;
    label: string;
    color: string;
    /** A CSS background for the bar, when one color isn't enough (e.g. a gradient) */
    bar?: string;
    /** Shown on phones instead of `label`, when the full name won't fit a column */
    shortLabel?: string;
};

/** Colored bars with labels, one per stage, that jump to the stage's first card. */
export function StageTabs({ stages, activeId, onPick }: {
    stages: StageTab[];
    activeId: string;
    onPick: (id: string) => void;
}) {
    const t = useT();
    return (
        <ol className="grid gap-2" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}>
            {stages.map((stage) => {
                const current = stage.id === activeId;
                return (
                    <li key={stage.id}>
                        <button
                            type="button"
                            onClick={() => onPick(stage.id)}
                            aria-current={current ? 'step' : undefined}
                            aria-label={stage.shortLabel ? t(stage.label) : undefined}
                            className="group w-full py-1 text-left cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            <span
                                className={`block h-1 rounded-full transition-opacity ${current ? 'opacity-100' : 'opacity-35 group-hover:opacity-70'}`}
                                style={{ background: stage.bar ?? stage.color }}
                            />
                            <span
                                className={`mt-2 block text-[12px] md:text-[14px] leading-tight transition-colors ${
                                    current ? 'text-white font-semibold' : 'text-white/50 group-hover:text-white/80'
                                }`}
                            >
                                {stage.shortLabel ? (
                                    <>
                                        <span className="sm:hidden">{t(stage.shortLabel)}</span>
                                        <span className="hidden sm:inline">{t(stage.label)}</span>
                                    </>
                                ) : (
                                    t(stage.label)
                                )}
                            </span>
                        </button>
                    </li>
                );
            })}
        </ol>
    );
}

const navButton = 'flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-[opacity,scale] duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-25 disabled:cursor-default';

/** "3 / 8" on the left, previous and next on the right */
export function CarouselFooter({ active, count, goTo }: { active: number; count: number; goTo: (index: number) => void }) {
    const t = useT();
    return (
        <div className="mt-3 flex items-center justify-between gap-4">
            <p className="text-[14px] text-white/45 tabular-nums" aria-live="polite">
                {active + 1} / {count}
            </p>
            <div className="flex gap-2">
                <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={t('Previous slide')} className={navButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" onClick={() => goTo(active + 1)} disabled={active === count - 1} aria-label={t('Next slide')} className={navButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>
        </div>
    );
}

/** Shared classes for the region wrapping a card row */
export const carouselRegion = 'mt-8 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black';

/** Shared classes for the scrolling row itself. Cards stretch to the row's
    height unless the caller adds `items-start`. */
export const carouselTrack = 'flex overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden';
