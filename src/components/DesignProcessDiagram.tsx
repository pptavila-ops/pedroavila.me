export function DesignProcessDiagram() {
    const steps = [
        {
            title: 'Designs + Handoff',
            role: 'Designer',
            note: 'Often happens in isolation — without early engineering input.',
            loopAfter: false,
        },
        {
            title: 'Implements',
            role: 'Developer (1)',
            note: 'Developer 1 builds the feature directly in the production codebase, translating specs into shippable code.',
            loopAfter: true,
        },
        {
            title: 'Design Review',
            role: 'Designer',
            note: 'The designer reviews the implementation against the original specs. If changes are needed, the process loops back to Implements.',
            loopAfter: true,
        },
        {
            title: 'Code Review',
            role: 'Developer (2)',
            note: 'A second developer reviews the code. If changes are needed, the process loops back to Implements.',
            loopAfter: false,
        },
        {
            title: 'Merged',
            role: null,
            check: true,
            loopAfter: false,
        },
    ];

    return (
        <div className="mt-8 rounded-2xl border border-white/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-8">
                Past design/development process
            </p>

            <div className="flex flex-col">
                {steps.map((step, i) => (
                    <div key={step.title} className={`flex gap-4 ${step.check ? 'items-center' : ''}`}>
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-semibold flex-shrink-0 ${
                                step.check
                                    ? 'bg-white text-black'
                                    : 'border-2 border-white/40 text-white/80 bg-white/5'
                            }`}>
                                {step.check ? '✓' : i + 1}
                            </div>
                            {i < steps.length - 1 && (
                                step.loopAfter ? (
                                    <div className="flex flex-col items-center flex-1 my-5 min-h-[36px]">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <div className="w-0.5 flex-1 bg-white/30" />
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center flex-1 my-5 min-h-[36px]">
                                        <div className="w-0.5 flex-1 bg-white/30" />
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                )
                            )}
                        </div>

                        <div className={`flex-1 ${i < steps.length - 1 ? 'pb-7' : ''}`}>
                            {step.role && (
                                <span className="inline-flex items-center gap-1.5 text-[15px] text-white/75 bg-white/10 px-3 py-1.5 rounded-full mb-5">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M18 21C18 17.6863 15.3137 15 12 15C8.68629 15 6 17.6863 6 21C6 21.5523 5.55228 22 5 22C4.44772 22 4 21.5523 4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21ZM15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7ZM17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z" fill="currentColor"/>
                                    </svg>
                                    {step.role}
                                </span>
                            )}
                            <p className={`text-[18px] md:text-[19px] font-semibold leading-none ${
                                step.check ? 'text-white' : 'text-white/90'
                            }`}>
                                {step.title}
                            </p>
                            {step.note && (
                                <p className="text-[17px] md:text-[18px] text-white/55 mt-3 leading-relaxed">
                                    {step.note}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-[17px] md:text-[18px] text-white/55 leading-relaxed">
                    Each loop adds another delay. By the time a feature ships, the original intent has passed through too many hands.
                </p>
            </div>
        </div>
    );
}
