import { useT } from '../i18n/useLanguage';
import { useSnapCarousel } from './useSnapCarousel';
import { CarouselFooter, StageTabs, carouselRegion, carouselTrack } from './CarouselParts';

/* The pet parent lifecycle, in the same shape as the TPT process row: stage
   tabs on top, a row of cards read left to right. The cards are outlined
   boxes with a border in their tab's color, not filled post-its, so
   the two sections stay related without looking the same. */

/* Cancellation and reactivation share a tab: they are two halves of the same
   moment, and the tab's bar fades from one card's color to the other's. */
const tabs = [
    { id: 'growth', label: 'Growth', color: '#bfe0ff' },
    { id: 'activation', label: 'Activation', color: '#bff0d8' },
    { id: 'retention', label: 'Retention', color: '#ffd9ad' },
    { id: 'leaving', label: 'Cancellation and reactivation', shortLabel: 'Churn', color: '#ffc9bf', bar: 'linear-gradient(90deg, #ffc9bf, #e3d3ef)' },
];

const stages = [
    {
        id: 'growth',
        tab: 'growth',
        label: 'Growth',
        color: '#bfe0ff',
        desc: 'The acquisition funnel: plans, goals and allergen questions, loading states, and social proof where signups are decided.',
    },
    {
        id: 'activation',
        tab: 'activation',
        label: 'Activation',
        color: '#bff0d8',
        desc: 'First delivery and pet profile setup, turning a checkout into a pet parent who understands what they bought.',
    },
    {
        id: 'retention',
        tab: 'retention',
        label: 'Retention',
        color: '#ffd9ad',
        desc: 'The day-to-day member experience: delivery management, quick actions, pet navigation, and the add-ons store.',
    },
    {
        id: 'cancellation',
        tab: 'leaving',
        label: 'Cancellation',
        color: '#ffc9bf',
        desc: 'The save flow: the right alternative before pet parents leave, within strict compliance rules. Later adopted across brands.',
    },
    {
        id: 'reactivation',
        tab: 'leaving',
        label: 'Reactivation',
        color: '#e3d3ef',
        desc: 'Winning back paused and canceled pet parents with reasons to return, and the freedom to tweak their return box.',
    },
];

export function LifecycleJourneyDiagram() {
    const t = useT();
    const { trackRef, setItemRef, active, goTo, onKeyDown, edgeFade } = useSnapCarousel(stages.length);

    return (
        <div
            className={carouselRegion}
            role="region"
            aria-roledescription="carousel"
            aria-label={t('Where I worked across the pet parent lifecycle')}
            tabIndex={0}
            onKeyDown={onKeyDown}
        >
            <StageTabs
                stages={tabs}
                activeId={stages[active].tab}
                onPick={(id) => goTo(stages.findIndex((stage) => stage.tab === id))}
            />

            <div ref={trackRef} className={`mt-6 md:mt-8 pb-2 gap-4 ${carouselTrack}`} style={edgeFade}>
                {stages.map((stage, i) => (
                        <div
                            key={stage.id}
                            ref={setItemRef(i)}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${i + 1} / ${stages.length}: ${t(stage.label)}`}
                            className="snap-start flex-shrink-0 w-[272px] md:w-[300px] min-h-[220px] flex flex-col rounded-2xl border-[1.5px] p-6 text-white"
                            style={{ borderColor: stage.color }}
                        >
                            <p className="text-[12px] font-bold tabular-nums tracking-[0.14em]" style={{ color: stage.color }}>
                                {String(i + 1).padStart(2, '0')}
                            </p>
                            <p className="mt-2 text-[24px] font-semibold tracking-[-0.01em] leading-tight">{t(stage.label)}</p>
                            <p className="mt-3 text-[17px] md:text-[18px] leading-relaxed text-white/80">{t(stage.desc)}</p>
                            {i === stages.length - 1 && (
                                <button
                                    type="button"
                                    onClick={() => goTo(0)}
                                    className="mt-auto pt-4 w-fit flex items-center gap-1.5 text-[13px] font-semibold text-white/75 cursor-pointer hover:text-white"
                                >
                                    <span aria-hidden="true">↺</span>
                                    <span className="border-b border-white/30">{t('Back to Growth')}</span>
                                </button>
                            )}
                        </div>
                ))}
            </div>

            <CarouselFooter active={active} count={stages.length} goTo={goTo} />
        </div>
    );
}
