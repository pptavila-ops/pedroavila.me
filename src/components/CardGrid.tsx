interface CaseStudy {
    id: string;
    title: string;
    year: string;
    company: string;
    intro: string;
}

interface Props {
    caseStudies: CaseStudy[];
    openStudy: (id: string) => void;
    layout: 'grid' | 'list';
}

export function CardGrid({ caseStudies, openStudy, layout }: Props) {
    const isGrid = layout === 'grid';

    if (!isGrid) {
        const largeCards = caseStudies.slice(0, 2);
        const smallCards = caseStudies.slice(2);

        return (
            <div className="mt-8 flex flex-col gap-5">
                {largeCards.map((cs) => <ListCard key={cs.id} cs={cs} openStudy={openStudy} />)}
                {smallCards.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {smallCards.map((cs) => <SmallCard key={cs.id} cs={cs} openStudy={openStudy} />)}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs) => (
                <button
                    key={cs.id}
                    onClick={() => openStudy(cs.id)}
                    className="group cursor-pointer text-left"
                >
                    <div className="relative rounded-xl border border-white/15 group-hover:border-white/25 transition-colors overflow-hidden p-5 flex flex-col h-[300px] bg-black">
                        <div className="flex-1 overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)' }}>
                            <p className="text-[15px] font-normal leading-relaxed text-white/60">{cs.intro}</p>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><ArrowIcon /></div>
                        </div>
                        <div className="relative -mt-1">
                            <div className="flex items-center gap-2 text-base text-white/50">{cs.year}{cs.id === 'design-transformation' && <CurrentRoleTag />}</div>
                            <p className="text-base font-bold text-white/80 mt-1">{cs.title}</p>
                            <p className="text-sm text-white/50 mt-1">@{cs.company}</p>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}

interface CardProps {
    cs: { id: string; title: string; year: string; company: string; intro: string };
    openStudy: (id: string) => void;
}

function ListCard({ cs, openStudy }: CardProps) {
    return (
        <button
            onClick={() => openStudy(cs.id)}
            className="group cursor-pointer text-left w-full"
        >
            <div className="relative rounded-xl border border-white/15 group-hover:border-white/25 transition-colors px-6 pt-5 pb-5 flex flex-col bg-black z-10 h-[225px]">
                <div className="flex items-center gap-2 text-sm text-white/50 flex-shrink-0">
                    {cs.year}
                    {cs.id === 'design-transformation' && <CurrentRoleTag />}
                </div>
                <p className="text-lg font-bold text-white/80 mt-1.5 flex-shrink-0">{cs.title}</p>
                <div className="min-w-0 overflow-hidden mt-1 h-[110px]" style={{ maskImage: 'linear-gradient(to bottom, white 30%, transparent 97%)', WebkitMaskImage: 'linear-gradient(to bottom, white 30%, transparent 97%)' }}>
                    <p className="text-[15px] font-normal leading-relaxed text-white/60">{cs.intro}</p>
                </div>
                <p className="text-sm text-white/50 mt-0.5 flex-shrink-0">@{cs.company}</p>
                <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><ArrowIcon /></div>
                </div>
            </div>
        </button>
    );
}

export function SmallCard({ cs, openStudy }: CardProps) {
    return (
        <button
            onClick={() => openStudy(cs.id)}
            className="group cursor-pointer text-left w-full"
        >
            <div className="relative rounded-xl border border-white/15 group-hover:border-white/25 transition-colors p-5 flex flex-col bg-black z-10 h-[240px]">
                <div className="flex items-center gap-2 text-sm text-white/50 flex-shrink-0">
                    {cs.year}
                    {cs.id === 'design-transformation' && <CurrentRoleTag />}
                </div>
                <p className="text-lg font-bold text-white/80 mt-1.5 flex-shrink-0">{cs.title}</p>
                <div className="min-w-0 overflow-hidden mt-1 flex-1" style={{ maskImage: 'linear-gradient(to bottom, white 30%, transparent 97%)', WebkitMaskImage: 'linear-gradient(to bottom, white 30%, transparent 97%)' }}>
                    <p className="text-[15px] font-normal leading-relaxed text-white/60">{cs.intro}</p>
                </div>
                <p className="text-sm text-white/50 mt-0.5 flex-shrink-0">@{cs.company}</p>
                <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center"><ArrowIcon /></div>
                </div>
            </div>
        </button>
    );
}

function CurrentRoleTag() {
    return (
        <span className="text-[9px] font-semibold uppercase tracking-widest text-white/70 border border-white/30 rounded-full px-2 py-0.5">
            Current Role
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
