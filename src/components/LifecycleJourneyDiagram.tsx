import { Fragment } from 'react';
import { useT } from '../i18n/useLanguage';

export function LifecycleJourneyDiagram() {
    const t = useT();

    const stages = [
        {
            title: 'Growth',
            color: '#bfe0ff',
            dot: '#4a90c4',
            desc: 'The acquisition funnel: plans, goals and allergen questions, loading states, and social proof at the moments that decide a signup.',
        },
        {
            title: 'Activation',
            color: '#bff0d8',
            dot: '#3fa37a',
            desc: 'First delivery and pet profile setup, turning a checkout into a pet parent who understands what they bought.',
        },
        {
            title: 'Retention',
            color: '#ffd9ad',
            dot: '#c9863f',
            desc: 'The member experience: delivery management, quick actions, pet navigation, and the add-ons store.',
        },
        {
            title: 'Cancellation',
            color: '#ffc9bf',
            dot: '#c4736a',
            desc: 'The save flow, offering the right alternative before pet parents leave, within strict compliance rules. Later adopted across brands.',
        },
        {
            title: 'Reactivation',
            color: '#e3d3ef',
            dot: '#9a6cb4',
            desc: 'Winning back paused and canceled pet parents with reasons to return, offering the flexibility to tweak their plan as much as they need for their return box.',
        },
    ];

    return (
        <div className="mt-8 rounded-2xl border border-white/10 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-8">
                {t('Where I worked across the pet parent lifecycle')}
            </p>

            {/* Journey strip — titles only */}
            <div className="flex flex-col md:flex-row md:items-center">
                {stages.map((stage, i) => (
                    <Fragment key={stage.title}>
                        {i > 0 && (
                            <div className="flex items-center justify-center py-1.5 md:py-0 md:flex-1 md:min-w-4">
                                <svg
                                    className="w-4 h-4 rotate-90 md:rotate-0 flex-shrink-0"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 3l5 5-5 5"
                                        stroke="rgba(255,255,255,0.6)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        )}
                        <div
                            className="rounded-lg px-4 py-2.5 flex items-center justify-center"
                            style={{ background: `${stage.dot}33` }}
                        >
                            <span
                                className="text-[14px] font-semibold whitespace-nowrap"
                                style={{ color: stage.color }}
                            >
                                {t(stage.title)}
                            </span>
                        </div>
                    </Fragment>
                ))}
            </div>

            {/* Descriptions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {stages.map((stage) => (
                    <div key={stage.title}>
                        <p
                            className="text-[15px] font-semibold leading-none flex items-center gap-2"
                            style={{ color: stage.color }}
                        >
                            <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ background: stage.dot }}
                            />
                            {t(stage.title)}
                        </p>
                        <p className="text-[15px] text-white/55 mt-2 leading-relaxed">{t(stage.desc)}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
