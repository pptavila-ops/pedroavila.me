import { useT } from '../i18n/useLanguage';

export function DoubleDiamondDiagram() {
    const t = useT();

    const phases = [
        {
            title: 'Discover',
            color: '#bfe0ff',
            dot: '#4a90c4',
            desc: 'Agents pull in prior specs, research, and product context before a brief is written.',
        },
        {
            title: 'Define',
            color: '#bff0d8',
            dot: '#3fa37a',
            desc: 'Agents help frame the design from research findings, interviewing you to pressure-test whether the idea makes sense.',
        },
        {
            title: 'Prototype',
            color: '#ffe3a8',
            dot: '#caa84a',
            desc: 'Agents generate prototypes and test them against synthetic personas: /create-prototype, /test-prototype.',
        },
        {
            title: 'Deliver',
            color: '#e3d3ef',
            dot: '#9a6cb4',
            desc: 'Agents implement designs directly in production code and prep pull requests for review: /design-change-web.',
        },
    ];

    return (
        <div className="mt-8 rounded-2xl border border-white/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-8">
                {t('Where AI enters the design process')}
            </p>

            <svg
                viewBox="0 0 900 195"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                aria-label={t('Double diamond diagram showing the Discover, Define, Prototype, and Deliver phases')}
            >
                <defs>
                    <linearGradient id="ddGradProblem" x1="0" x2="1">
                        <stop offset="0" stopColor="#1d4f78" />
                        <stop offset="1" stopColor="#2c5a47" />
                    </linearGradient>
                    <linearGradient id="ddGradSolution" x1="0" x2="1">
                        <stop offset="0" stopColor="#7a5a1e" />
                        <stop offset="1" stopColor="#6f4a8c" />
                    </linearGradient>
                </defs>

                <polygon points="20,90 230,15 440,90 230,165" fill="url(#ddGradProblem)" fillOpacity="0.4" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <line x1="230" y1="15" x2="230" y2="165" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 4" />

                <polygon points="460,90 670,15 880,90 670,165" fill="url(#ddGradSolution)" fillOpacity="0.4" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <line x1="670" y1="15" x2="670" y2="165" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 4" />

                <text x="125" y="95" textAnchor="middle" fontSize="15" fontWeight="700" fill={phases[0].color}>{t(phases[0].title)}</text>
                <text x="335" y="95" textAnchor="middle" fontSize="15" fontWeight="700" fill={phases[1].color}>{t(phases[1].title)}</text>
                <text x="565" y="95" textAnchor="middle" fontSize="15" fontWeight="700" fill={phases[2].color}>{t(phases[2].title)}</text>
                <text x="775" y="95" textAnchor="middle" fontSize="15" fontWeight="700" fill={phases[3].color}>{t(phases[3].title)}</text>

                <text x="230" y="188" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.4)" letterSpacing="1">{t('THE RIGHT THING')}</text>
                <text x="670" y="188" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.4)" letterSpacing="1">{t('THE RIGHT WAY')}</text>
            </svg>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {phases.map((phase) => (
                    <div key={phase.title}>
                        <p className="text-[15px] font-semibold leading-none flex items-center gap-2" style={{ color: phase.color }}>
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: phase.dot }} />
                            {t(phase.title)}
                        </p>
                        <p className="text-[15px] text-white/55 mt-2 leading-relaxed">{t(phase.desc)}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-[17px] md:text-[18px] text-white/55 leading-relaxed">
                    {t('AI shows up at every phase, not just at code time. Agents and skills sit inside each diamond, keeping the process divergent where it needs to explore and convergent where it needs to decide.')}
                </p>
            </div>
        </div>
    );
}
