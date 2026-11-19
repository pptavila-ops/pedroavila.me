import { useEffect, useRef, useState } from 'react';
import { useT } from '../i18n/useLanguage';

// One real change, the "Best pair" add-on on the meal card, followed through
// the five commands. It's the HelloFresh case's hero: the same story the
// add-on slides tell further down, in one glance.
const STEP_MS = 16000;
// Discover carries the most to read (question, command, hypotheses that
// appear after a pause), so it stays up longer than the other steps.
const stepMs = (i: number) => (i === 0 ? 24000 : STEP_MS);

const steps = [
    {
        command: '/generate-insights',
        stage: 'Discover',
        color: '#bfe0ff',
        dot: '#4a90c4',
        title: 'First step: the agent generates hypotheses from the question, grounded in the research database.',
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
        title: 'The agent builds an interactive prototype from production code.',
        note: 'In this case, a quick add-on component was added to the meal card.',
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

const expertScores = [
    { role: 'Accessibility', score: 7 },
    { role: 'Brand', score: 10 },
    { role: 'Content', score: 8 },
    { role: 'Interaction', score: 9 },
    { role: 'UX', score: 8 },
];

const briefSections = ['Purpose and success', 'Primary user action', 'Content and data', 'Key states'];

// Fade-and-rise for one piece of a step; `delay` staggers the pieces. Hiding
// skips the delay so a step resets at once and can play again next time.
function reveal(shown: boolean, delay: number) {
    return {
        className: `motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1.5'}`,
        style: { transitionDelay: shown ? `${delay}ms` : '0ms' },
    };
}

// When the text column starts: steps with a bubble on the asset (Discover,
// Prototype, Ship) wait for it to pop first.
const textStart = (i: number) => (i === 0 || i === 2 || i === 4 ? 1300 : 500);

// The three card shots share one width, so the module added at the end reads
// as the only thing that changed.
function Card({ src, alt, lazy = true, className = '', children }: { src: string; alt: string; lazy?: boolean; className?: string; children?: React.ReactNode }) {
    return (
        <div className={`relative w-[220px] md:w-[260px] flex-shrink-0 ${className}`}>
            <img src={src} alt={alt} loading={lazy ? 'lazy' : undefined} className="block w-full h-auto rounded-lg" />
            {children}
        </div>
    );
}

function Visual({ step, shown, lead = 0 }: { step: number; shown: boolean; lead?: number }) {
    const t = useT();

    switch (step) {
        case 0:
            return (
                <Card src="/hf-story-card-before.webp" alt={t('The meal card before the change')} lazy={false} className="mt-5">
                    {/* The question the designer starts from, as a yellow chat bubble that
                        hangs past the shot's top-left corner so it reads first */}
                    <Bubble shown={shown} delay={450 + lead} color="#ffd84d" icon={<UserIcon />}>
                        {t('How to improve add-on sales on meal selection cards?')}
                    </Bubble>
                </Card>
            );

        case 1:
            return (
                <div className="w-full max-w-[280px] overflow-hidden rounded-lg border border-white/15">
                    <p className="border-b border-white/10 bg-white/[0.05] px-3 py-2"><FileName name="brief.md" dot={steps[1].dot} /></p>
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
            return (
                <Card src="/hf-story-card-prototype.webp" alt={t('The prototype card with the add-on module')} className="mt-5">
                    {/* The hypothesis the prototype tests, in the same bubble as the question */}
                    <Bubble shown={shown} color="#9ccbff" icon={<BulbIcon />} label={t('Hypothesis 1')}>
                        {t('Showing one add-on paired with each meal will sell better than a gallery of add-ons.')}
                    </Bubble>
                </Card>
            );

        case 3:
            return (
                <div className="flex w-full max-w-[320px] flex-col items-start gap-3">
                    {/* The persona's reaction, in the same coloured bubble as the
                        question and the hypothesis, sitting in the flow here */}
                    <Bubble shown={shown} inline color="#ffb38a" icon={<UserIcon />} label={t('Emulated persona')}>
                        {t('“I\'d have tapped that checkbox faster if it told me the bread was baked locally.”')}
                    </Bubble>
                    {/* The five expert reviewers, each with the score they gave */}
                    <div className="mt-3 w-full border-t border-white/10 pt-4">
                        <p className="text-[13px] font-semibold text-white">{t('Expert reviewers')}</p>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                            {expertScores.map(({ role, score }) => (
                                <li key={role} className="flex items-baseline gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[12px] leading-none">
                                    <span className="text-white/75">{t(role)}</span>
                                    <span className="font-semibold text-white">{score}/10</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );

        default:
            return (
                <Card src="/hf-story-card-after.webp" alt={t('The meal card in production, with the add-on module')}>
                    {/* The agent, in a purple bubble, saying what it shipped; it sits
                        just above the new "Best pair" row at the bottom of the card */}
                    <Bubble shown={shown} color="#d7bdf0" icon={<SparkleIcon />} label={t('Agent')} place="bottom-[calc(15%+16px)]">
                        {t('I implemented this new element with the design tokens and components from the design system.')}
                    </Bubble>
                </Card>
            );
    }
}

// A chat-style bubble with a small round icon beside its tip. By default it
// hangs past the shot's top-left corner; `inline` keeps it in the flow (the
// persona's quote). It pops in a beat after the asset appears.
function Bubble({ shown, color, icon, label, inline = false, place = '-top-5', delay = 450, children }: { shown: boolean; color: string; icon: React.ReactNode; label?: string; inline?: boolean; place?: string; delay?: number; children: React.ReactNode }) {
    return (
        <div
            className={`${inline ? 'relative ml-[34px] self-stretch' : `absolute -left-2 ${place} w-[86%]`} origin-bottom-left motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] ${shown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
        >
            <span
                className="absolute bottom-0 right-full mr-1.5 flex h-7 w-7 items-center justify-center rounded-full text-black shadow-[0_6px_18px_rgba(0,0,0,0.5)]"
                style={{ background: color }}
            >
                {icon}
            </span>
            <div
                className="rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-[13px] md:text-[14px] font-semibold leading-snug text-black shadow-[0_10px_28px_rgba(0,0,0,0.55)]"
                style={{ background: color }}
            >
                {label && <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-black/75">{label}</p>}
                <p>{children}</p>
            </div>
        </div>
    );
}

function UserIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2.5" />
            <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

function SparkleIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l1.9 5.6c.3.9 1 1.6 1.9 1.9L21.4 11.4l-5.6 1.9c-.9.3-1.6 1-1.9 1.9L12 20.8l-1.9-5.6c-.3-.9-1-1.6-1.9-1.9L2.6 11.4l5.6-1.9c.9-.3 1.6-1 1.9-1.9L12 2z" />
        </svg>
    );
}

function BulbIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// What each step after Discover takes in and hands on, shown under its text:
// the previous step's artifact, an arrow, and what the command turns it into.
function Flow({ step, play }: { step: number; play: boolean }) {
    switch (step) {
        case 1:
            return <Transform play={play} from={<HypothesisCard {...HYPOTHESES[0]} />} to={<FileChip name="brief.md" dot={steps[1].dot} />} />;
        case 2:
            return <Transform play={play} from={<FileChip name="brief.md" dot={steps[1].dot} />} to={<FileChip name="prototype.html" dot={steps[2].dot} />} />;
        case 3:
            return <Transform play={play} from={<FileChip name="prototype.html" dot={steps[2].dot} />} to={<FileChip name="report.md" dot={steps[3].dot} />} />;
        default:
            return <Transform play={play} from={<FileChip name="prototype.html" dot={steps[2].dot} />} to={<PullRequestChip />} />;
    }
}

// The input, then an arrow and the output coming in after a beat, each time
// the step becomes active.
function Transform({ play, from, to }: { play: boolean; from: React.ReactNode; to: React.ReactNode }) {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        if (!play) { setStage(0); return; }
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setStage(2); return; }
        const a = window.setTimeout(() => setStage(1), 2100);
        const b = window.setTimeout(() => setStage(2), 2700);
        return () => { clearTimeout(a); clearTimeout(b); };
    }, [play]);

    return (
        // Side by side, each box only as wide as its content.
        <div className="flex flex-wrap items-center gap-2">
            {from}
            <svg
                width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true"
                className={`flex-shrink-0 text-white/50 transition-opacity duration-300 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}
            >
                <path d="M2 8h15M12 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className={`transition-[opacity,transform] duration-500 ease-out ${stage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`}>
                {to}
            </div>
        </div>
    );
}

function FileName({ name, dot }: { name: string; dot: string }) {
    return (
        <span className="flex min-w-0 items-center gap-2 whitespace-nowrap font-mono text-[13px] leading-tight text-white/85">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
            {name}
        </span>
    );
}

function FileChip({ name, dot }: { name: string; dot: string }) {
    return (
        <div className="flex min-h-[58px] items-center rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2.5">
            <FileName name={name} dot={dot} />
        </div>
    );
}

function PullRequestChip() {
    const t = useT();
    return (
        <div className="flex min-h-[58px] items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="text-white/70">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span className="text-[13px] font-semibold leading-tight text-white/85">{t('Pull request')}</span>
            <span className="ml-auto rounded-full bg-[#238636] px-2 py-px text-[10px] font-semibold uppercase leading-[14px] tracking-widest text-white">{t('Open')}</span>
        </div>
    );
}

export function WorkflowStory({ className = '' }: { className?: string }) {
    const t = useT();
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    // Auto-advance only on desktop (lg+) without reduced motion. Below lg the
    // box is taller than the screen and you scroll inside a step to read it,
    // so the steps wait for a tap or a swipe instead.
    const [autoplay, setAutoplay] = useState(false);

    // Nothing plays until the box is on screen: the timer holds and each step's
    // reveal waits, so the question bubble pops as you scroll to it. Leaving
    // resets the step, so it plays again on the way back.
    const rootRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1024px)');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setAutoplay(desktop.matches && !reduce.matches);
        update();
        desktop.addEventListener('change', update);
        return () => desktop.removeEventListener('change', update);
    }, []);

    // Swipe left / right on the stage to change step. Only a mostly-horizontal
    // drag of 50px+ counts, so vertical page scrolling is left alone.
    const touchRef = useRef<{ x: number; y: number } | null>(null);
    const onTouchStart = (e: React.TouchEvent) => {
        const p = e.touches[0];
        touchRef.current = { x: p.clientX, y: p.clientY };
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        const start = touchRef.current;
        touchRef.current = null;
        if (!start) return;
        const p = e.changedTouches[0];
        const dx = p.clientX - start.x;
        const dy = p.clientY - start.y;
        if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
        go(dx < 0 ? 1 : -1);
    };

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        // "In view" means most of the box is on screen: 70% of whichever is
        // smaller, the box or the viewport (the box can be taller than a phone
        // screen). It only counts as gone again once under 20%, so small scrolls
        // don't restart a step.
        const thresholds = Array.from({ length: 21 }, (_, n) => n / 20);
        const io = new IntersectionObserver(([entry]) => {
            const visible = entry.intersectionRect.height / Math.min(entry.boundingClientRect.height, window.innerHeight);
            if (visible >= 0.7) setInView(true);
            else if (visible < 0.2) setInView(false);
        }, { threshold: thresholds });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    // The first step waits a little longer the first time it plays, so the
    // box settles on screen before anything moves; later steps start at once.
    const [firstPlay, setFirstPlay] = useState(true);
    useEffect(() => { if (active !== 0) setFirstPlay(false); }, [active]);

    const go = (dir: 1 | -1) => setActive((a) => Math.min(steps.length - 1, Math.max(0, a + dir)));

    return (
        // Outer wrapper carries the desktop arrows, which sit half outside the
        // box like SlideCarousel's; the box itself clips its rounded corners.
        <div ref={rootRef} className={`relative ${className}`}>
        <div
            role="group"
            aria-label={t('One design change, followed through the workflow')}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
            // Pause only for keyboard focus: a mouse click focuses the tab too,
            // and that shouldn't hold the timer.
            onFocus={(e) => { if (e.target.matches(':focus-visible')) setPaused(true); }}
            onBlur={() => setPaused(false)}
        >
            {/* Steps — the active one fills its bar, then hands over to the next */}
            {/* Hovering the tabs pauses the timer; it runs again once the
                pointer leaves them. */}
            <div className="grid grid-cols-5 border-b border-white/10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                {steps.map((step, i) => (
                    <button
                        key={step.command}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-current={i === active ? 'step' : undefined}
                        aria-label={t(step.stage)}
                        className={`relative min-w-0 cursor-pointer px-2 md:px-4 py-2.5 lg:pt-3.5 lg:pb-3 text-left transition-colors hover:bg-white/[0.05] ${i === active ? 'lg:bg-white/[0.05]' : ''}`}
                    >
                        <span className="absolute inset-x-1 lg:inset-x-0 top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 h-1 lg:h-[2px] rounded-full lg:rounded-none overflow-hidden bg-white/15 lg:bg-white/10">
                            {i < active && <span className="absolute inset-0" style={{ background: step.dot }} />}
                            {i === active && (
                                <span
                                    key={active}
                                    className="absolute inset-0 origin-left"
                                    style={autoplay ? {
                                        background: step.dot,
                                        animation: `story-progress ${stepMs(i)}ms linear forwards`,
                                        animationPlayState: paused || !inView ? 'paused' : 'running',
                                    } : { background: step.dot }}
                                    // The last step (Ship) holds when its bar fills instead of looping back.
                                    onAnimationEnd={() => { if (active < steps.length - 1) setActive(active + 1); }}
                                />
                            )}
                        </span>
                        <span className={`hidden lg:block text-[11px] font-semibold uppercase tracking-widest leading-none truncate ${i === active ? 'text-white' : 'text-white/45'}`}>
                            {t(step.stage)}
                        </span>
                        <span
                            className={`mt-2 hidden lg:block font-mono text-[11.5px] font-semibold leading-tight truncate transition-opacity ${i === active ? 'opacity-100' : 'opacity-50'}`}
                            style={{ color: step.color }}
                        >
                            {step.command}
                        </span>
                    </button>
                ))}
            </div>

            {/* Stage — every step shares one grid cell, so the box keeps the
                height of the tallest step and nothing jumps as they crossfade */}
            <div className="grid" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                {steps.map((step, i) => {
                    const shown = inView && i === active;
                    const lead = firstPlay && i === 0 ? 700 : 0;
                    const r = (n: number) => reveal(shown, lead + textStart(i) + n * 300);
                    return (
                    <div
                        key={step.command}
                        aria-hidden={i !== active}
                        className={`col-start-1 row-start-1 grid items-center gap-6 md:gap-10 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        {/* Hovering anywhere on the asset side pauses the timer, like the tabs */}
                        <div className="flex self-stretch items-center justify-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                            <div {...reveal(shown, lead)}>
                                <Visual step={i} shown={shown} lead={lead} />
                            </div>
                        </div>
                        {i === 0 ? (
                            // Discover: the question sits on the asset as a chat bubble;
                            // here, just the command that works on it.
                            <div>
                                <p {...r(0)}><span className="font-mono text-[12.5px] font-semibold" style={{ color: step.color }}>{step.command}</span></p>
                                <p {...r(1)}><span className="mt-2 block text-[17px] md:text-[20px] font-bold leading-snug text-white">{t(step.title)}</span></p>
                            </div>
                        ) : (
                            <div>
                                <p {...r(0)}><span className="font-mono text-[12.5px] font-semibold" style={{ color: step.color }}>{step.command}</span></p>
                                <p {...r(1)}><span className="mt-2 block text-[17px] md:text-[20px] font-bold leading-snug text-white">{t(step.title)}</span></p>
                                {step.note && <p {...r(2)}><span className="mt-2 block text-[15px] md:text-[16px] leading-relaxed text-white/70">{t(step.note)}</span></p>}
                                <div {...r(3)}>
                                    <div className="mt-6 pt-5 border-t border-white/10">
                                        <Flow step={i} play={shown} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    );
                })}
            </div>

            {/* Mobile / tablet navigation: back, the step name over pagination
                dots, next. Replaces the floating arrows below lg. */}
            <div className="lg:hidden flex items-center justify-between gap-3 border-t border-white/10 px-3 py-3">
                {([-1, 1] as const).map((dir) => {
                    const disabled = dir < 0 ? active === 0 : active === steps.length - 1;
                    const button = (
                        <button
                            key={dir}
                            type="button"
                            onClick={() => go(dir)}
                            disabled={disabled}
                            aria-label={t(dir < 0 ? 'Previous slide' : 'Next slide')}
                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-[opacity,background-color] duration-200 enabled:active:bg-white/10 disabled:opacity-25 cursor-pointer disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        >
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5"><path d={dir < 0 ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    );
                    if (dir < 0) return button;
                    return [
                        <div key="pager" className="flex min-w-0 flex-col items-center gap-1.5">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-white" aria-live="polite">
                                {t(steps[active].stage)} <span className="text-white/45">· {active + 1}/{steps.length}</span>
                            </p>
                            <div className="flex">
                                {steps.map((step, i) => (
                                    <button
                                        key={step.command}
                                        type="button"
                                        onClick={() => setActive(i)}
                                        aria-label={t(step.stage)}
                                        aria-current={i === active ? 'step' : undefined}
                                        className="flex h-6 items-center px-1.5 cursor-pointer"
                                    >
                                        <span className={`block h-2 rounded-full transition-[width,background-color] duration-300 ease-out ${i === active ? 'w-5 bg-white' : 'w-2 bg-white/25'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>,
                        button,
                    ];
                })}
            </div>
        </div>

            {/* Arrows — desktop only, same look as SlideCarousel's. No back arrow on
                the first step and no next arrow on the last. */}
            {([-1, 1] as const).map((dir) => (
                <button
                    key={dir}
                    type="button"
                    onClick={() => go(dir)}
                    tabIndex={(dir < 0 && active === 0) || (dir > 0 && active === steps.length - 1) ? -1 : undefined}
                    aria-label={t(dir < 0 ? 'Previous slide' : 'Next slide')}
                    className={`absolute top-1/2 -translate-y-1/2 ${dir < 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} z-10 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-[opacity,background-color,scale] duration-200 hover:bg-white/85 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${dir < 0 ? (active === 0 ? 'pointer-events-none opacity-0' : 'opacity-50 hover:opacity-100 focus-visible:opacity-100') : (active === steps.length - 1 ? 'pointer-events-none opacity-0' : '')}`}
                >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6"><path d={dir < 0 ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            ))}
        </div>
    );
}

// The hypothesis Discover picks; Define shows it going into the brief.
const HYPOTHESES = [
    { name: 'Hypothesis 1', confidence: 8 },
];

function HypothesisCard({ name, confidence }: { name: string; confidence: number }) {
    const t = useT();
    return (
        <div className="min-h-[58px] rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2.5">
            <p className="text-[13px] font-semibold leading-tight text-white/85">{t(name)}</p>
            <p className="mt-1 text-[12px] leading-tight text-white/50">{t('Confidence')} {confidence}/10</p>
        </div>
    );
}
