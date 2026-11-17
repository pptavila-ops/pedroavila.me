import { useEffect, useState } from 'react';
import { useT } from '../i18n/useLanguage';

// One real change, the "Best pair" add-on on the meal card, followed through
// the five commands. It's the HelloFresh case's hero: the same story the
// add-on slides tell further down, in one glance.
const STEP_MS = 8000;

const steps = [
    {
        command: '/generate-insights',
        stage: 'Discover',
        color: '#bfe0ff',
        dot: '#4a90c4',
        title: 'The agent weighs the evidence and turns it into hypotheses.',
    },
    {
        command: '/frame-design',
        stage: 'Define',
        color: '#bff0d8',
        dot: '#3fa37a',
        title: 'The agent writes a design brief for the prototyper, based on the selected hypothesis.',
    },
    {
        command: '/create-prototype',
        stage: 'Prototype',
        color: '#ffe3a8',
        dot: '#caa84a',
        title: 'The agent builds an interactive prototype from production code and the Zest design system.',
    },
    {
        command: '/test-prototype',
        stage: 'Validate',
        color: '#ffc9b0',
        dot: '#c47a52',
        title: 'The agents put the prototype in front of an emulated persona and five expert reviewers.',
    },
    {
        command: '/design-change',
        stage: 'Ship',
        color: '#e3d3ef',
        dot: '#9a6cb4',
        title: 'The agent implements the design in production code and opens a pull request.',
    },
];

const briefSections = ['Purpose and success', 'Primary user action', 'Content and data', 'Key states'];

// The three card shots share one width, so the module added at the end reads
// as the only thing that changed.
function Card({ src, alt, lazy = true, children }: { src: string; alt: string; lazy?: boolean; children?: React.ReactNode }) {
    return (
        <div className="relative w-[180px] md:w-[210px] flex-shrink-0">
            <img src={src} alt={alt} loading={lazy ? 'lazy' : undefined} className="block w-full h-auto rounded-lg" />
            {children}
        </div>
    );
}

function Visual({ step }: { step: number }) {
    const t = useT();

    switch (step) {
        case 0:
            return <Card src="/hf-story-card-before.webp" alt={t('The meal card before the change')} lazy={false} />;

        case 1:
            return (
                <div className="w-full max-w-[280px] overflow-hidden rounded-lg border border-white/15">
                    <p className="flex items-center gap-2 border-b border-white/10 bg-white/[0.05] px-3 py-2 font-mono text-[12px] text-white/60">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: steps[1].dot }} />
                        brief-example.md
                    </p>
                    <div className="px-3 py-3">
                        <p className="text-[14px] font-bold leading-snug text-white">
                            {t('Design Brief: meal-linked add-on on the meal-selection card')}
                        </p>
                        {briefSections.map((section) => (
                            <div key={section} className="mt-3 border-t border-white/10 pt-2.5">
                                <p className="font-mono text-[10.5px] uppercase tracking-widest text-white/45">{t(section)}</p>
                                <div className="mt-2 h-1.5 w-full rounded-full bg-white/10" />
                                <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-white/10" />
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 2:
            return <Card src="/hf-story-card-prototype.webp" alt={t('The prototype card with the add-on module')} />;

        case 3:
            return (
                <div className="flex w-full max-w-[320px] flex-col items-start gap-3">
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3d2418] text-[#ffc9b0]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                                <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                        <p className="text-[13px] font-semibold text-white">{t('Emulated persona')}</p>
                    </div>
                    <p className="rounded-xl rounded-tl-sm border border-white/15 bg-white/[0.06] px-4 py-3 text-[15px] leading-relaxed text-white">
                        {t('“I\'d have tapped that checkbox faster if it told me the bread was baked locally or something. Right now it\'s just bread with a price tag.”')}
                    </p>
                </div>
            );

        default:
            return (
                <Card src="/hf-story-card-after.webp" alt={t('The meal card in production, with the add-on module')}>
                    {/* Rings the module the change added: the bottom 16% of the shot. */}
                    <span
                        className="pointer-events-none absolute -inset-x-1 -bottom-1 h-[19%] rounded-lg border-2 motion-safe:animate-pulse"
                        style={{ borderColor: steps[4].dot }}
                    />
                </Card>
            );
    }
}

export function WorkflowStory({ className = '' }: { className?: string }) {
    const t = useT();
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    // Reduced motion: no auto-advance, the steps are still there to click.
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        setAutoplay(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    return (
        <div
            role="group"
            aria-label={t('One design change, followed through the workflow')}
            className={`overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] ${className}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            {/* Steps — the active one fills its bar, then hands over to the next */}
            <div className="grid grid-cols-5 border-b border-white/10">
                {steps.map((step, i) => (
                    <button
                        key={step.command}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-current={i === active ? 'step' : undefined}
                        className={`relative min-w-0 cursor-pointer px-2 md:px-4 pt-3.5 pb-3 text-left transition-colors hover:bg-white/[0.05] ${i === active ? 'bg-white/[0.05]' : ''}`}
                    >
                        <span className="absolute inset-x-0 top-0 h-[2px] bg-white/10">
                            {i < active && <span className="absolute inset-0" style={{ background: step.dot }} />}
                            {i === active && (
                                <span
                                    key={active}
                                    className="absolute inset-0 origin-left"
                                    style={autoplay ? {
                                        background: step.dot,
                                        animation: `story-progress ${STEP_MS}ms linear forwards`,
                                        animationPlayState: paused ? 'paused' : 'running',
                                    } : { background: step.dot }}
                                    onAnimationEnd={() => setActive((active + 1) % steps.length)}
                                />
                            )}
                        </span>
                        <span className={`block text-[10px] md:text-[11px] font-semibold uppercase tracking-widest leading-none truncate ${i === active ? 'text-white' : 'text-white/45'}`}>
                            {t(step.stage)}
                        </span>
                        <span
                            className={`mt-2 hidden md:block font-mono text-[11.5px] font-semibold leading-tight truncate transition-opacity ${i === active ? 'opacity-100' : 'opacity-50'}`}
                            style={{ color: step.color }}
                        >
                            {step.command}
                        </span>
                    </button>
                ))}
            </div>

            {/* Stage — every step shares one grid cell, so the box keeps the
                height of the tallest step and nothing jumps as they crossfade */}
            <div className="grid">
                {steps.map((step, i) => (
                    <div
                        key={step.command}
                        aria-hidden={i !== active}
                        className={`col-start-1 row-start-1 grid items-center gap-6 md:gap-10 p-5 md:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <div className="flex justify-center">
                            <Visual step={i} />
                        </div>
                        <div>
                            <p className="font-mono text-[12.5px] font-semibold" style={{ color: step.color }}>{step.command}</p>
                            <p className="mt-2 text-[17px] md:text-[20px] font-bold leading-snug text-white">{t(step.title)}</p>
                            {i === 0 && (
                                <>
                                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">{t('The question')}</p>
                                <p className="mt-1.5 text-[14px] md:text-[15px] leading-relaxed text-white/85">
                                    {t('What are some ways to improve add-on sales and selection already on the meal-selection page?')}
                                </p>
                                <div className="mt-4 rounded-lg border border-white/25 bg-white/[0.09] p-4">
                                    <p className="flex items-baseline gap-3">
                                        <span className="text-[20px] font-bold leading-none text-white">H1</span>
                                        <span className="text-xs font-semibold uppercase tracking-widest text-white/70">{t('Primary')}</span>
                                    </p>
                                    <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-white/85">
                                        {t('A recipe-linked add-on recommendation surface at meal selection will be net-additive to add-on uptake, versus the Add-Ons in Main Menu baseline.')}
                                    </p>
                                </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
