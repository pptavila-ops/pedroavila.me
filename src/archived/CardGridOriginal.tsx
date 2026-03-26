/**
 * Original card grid layout — 3-column grid, vertical cards.
 * To use: replace the card grid in App.tsx with this component.
 *
 * Props needed: caseStudies, hoveredCard, setHoveredCard, openStudy
 */

import type { Dispatch, SetStateAction } from 'react';

interface CaseStudy {
    id: string;
    title: string;
    year: string;
    company: string;
    intro: string;
}

interface Props {
    caseStudies: CaseStudy[];
    hoveredCard: string | null;
    setHoveredCard: Dispatch<SetStateAction<string | null>>;
    openStudy: (id: string) => void;
}

export function CardGridOriginal({ caseStudies, hoveredCard, setHoveredCard, openStudy }: Props) {
    return (
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs) => (
                <button
                    key={cs.id}
                    onClick={() => openStudy(cs.id)}
                    onMouseEnter={() => (cs.id === 'movix' || cs.id === 'design-transformation') ? setHoveredCard(cs.id) : undefined}
                    onMouseLeave={() => (cs.id === 'movix' || cs.id === 'design-transformation') ? setHoveredCard(null) : undefined}
                    className={`group cursor-pointer text-left relative ${hoveredCard === cs.id ? 'z-30' : ''}`}
                >
                    {cs.id === 'design-transformation' && (
                        <img
                            src="/intodesign.png"
                            alt=""
                            className="absolute w-48 h-[280px] object-cover rounded-lg border border-white/20 transition-all duration-300 ease-out pointer-events-none z-20"
                            style={{
                                top: '50%',
                                left: hoveredCard === cs.id ? 'calc(100% - 4px)' : '100%',
                                transform: 'translateY(-50%) rotate(-1.5deg)',
                                opacity: hoveredCard === cs.id ? 1 : 0,
                            }}
                        />
                    )}
                    {cs.id === 'movix' && (
                        <img
                            src="/movix-home.jpg"
                            alt=""
                            className="absolute w-48 h-[280px] object-cover rounded-lg border border-white/20 transition-all duration-300 ease-out pointer-events-none z-20"
                            style={{
                                top: '50%',
                                left: hoveredCard === cs.id ? 'calc(100% - 4px)' : '100%',
                                transform: 'translateY(-50%) rotate(-1.5deg)',
                                opacity: hoveredCard === cs.id ? 1 : 0,
                            }}
                        />
                    )}
                    <div className="relative rounded-xl border border-white/10 group-hover:border-white/20 transition-colors overflow-hidden p-5 flex flex-col h-[300px] bg-black z-10">
                        <div className="flex-1 overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)' }}>
                            <p className="text-[15px] font-normal leading-relaxed text-white/60">
                                {cs.intro}
                            </p>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 14C17 14.5523 16.5523 15 16 15C15.4478 15 15 14.5523 15 14V10.4141L8.70708 16.707C8.31655 17.0976 7.68354 17.0976 7.29302 16.707C6.90249 16.3165 6.90249 15.6835 7.29302 15.293L13.586 9H10C9.44776 9 9.00005 8.55228 9.00005 8C9.00005 7.44772 9.44776 7 10 7H16C16.5523 7 17 7.44772 17 8V14Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                        <div className="relative -mt-1">
                            <div className="flex items-center gap-2 text-base text-white/50">
                                {cs.year}
                                {cs.id === 'design-transformation' && (
                                    <span className="text-[9px] font-semibold uppercase tracking-widest text-white/70 border border-white/30 rounded-full px-2 py-0.5">Current Role</span>
                                )}
                            </div>
                            <p className="text-base font-bold text-white/80 mt-1">{cs.title}</p>
                            <p className="text-sm text-white/50 mt-1">@{cs.company}</p>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}
