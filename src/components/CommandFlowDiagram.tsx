import { Fragment } from 'react';
import Tooltip from './Tooltip';
import { useT } from '../i18n/useLanguage';

const steps = [
    {
        command: '/generate-insights',
        stage: 'Discover',
        color: '#bfe0ff',
        dot: '#4a90c4',
        desc: 'Pulls research, prior specs and product context into a synthesised set of insights, so a brief starts from evidence instead of a blank page.',
    },
    {
        command: '/frame-design',
        stage: 'Define',
        color: '#bff0d8',
        dot: '#3fa37a',
        desc: 'Turns those insights into a framed design direction, interviewing you along the way to pressure-test whether the problem is worth solving.',
    },
    {
        command: '/create-prototype',
        stage: 'Prototype',
        color: '#ffe3a8',
        dot: '#caa84a',
        desc: 'Generates a production-quality prototype in minutes, across all nine brands, at free-form, balanced or strict fidelity.',
    },
    {
        command: '/test-prototype',
        stage: 'Validate',
        color: '#ffc9b0',
        dot: '#c47a52',
        desc: 'Runs the prototype through emulated personas to surface usability issues before a single test session is scheduled.',
    },
    {
        command: '/design-change',
        stage: 'Ship',
        color: '#e3d3ef',
        dot: '#9a6cb4',
        desc: 'Implements the validated design directly in React and React Native production code, and opens the pull request for review.',
    },
];

export function CommandFlowDiagram() {
    const t = useT();

    return (
        <div className="mt-12 flex flex-col md:flex-row md:items-stretch">
            {steps.map((step, i) => (
                <Fragment key={step.command}>
                    {i > 0 && (
                        <div className="flex items-center justify-center flex-shrink-0 py-2 md:py-0 md:px-2">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="rotate-90 md:rotate-0"
                                aria-hidden="true"
                            >
                                <path
                                    d="M13.707 5.293a1 1 0 0 0-1.414 1.414L16.586 11H5a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6Z"
                                    fill="rgba(255,255,255,0.4)"
                                />
                            </svg>
                        </div>
                    )}
                    <Tooltip text={t(step.desc)} className="w-full md:flex-1 md:min-w-0 flex">
                        <div
                            className="flex-1 min-w-0 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 flex flex-col justify-center cursor-default transition-colors hover:bg-white/[0.07] hover:border-white/20 group"
                            style={{ borderTop: `2px solid ${step.dot}` }}
                        >
                            <p
                                className="font-mono text-[13px] md:text-[12.5px] font-semibold leading-tight break-words underline decoration-dotted underline-offset-4 decoration-white/25 group-hover:decoration-current transition-colors"
                                style={{ color: step.color }}
                            >
                                {step.command}
                            </p>
                            <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-white/50 leading-none">
                                {t(step.stage)}
                            </p>
                        </div>
                    </Tooltip>
                </Fragment>
            ))}
        </div>
    );
}
