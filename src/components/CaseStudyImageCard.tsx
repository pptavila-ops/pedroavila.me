interface CaseStudyImageCardItem {
    id: string;
    year: string;
    category: string;
    title: string;
    description: string;
    cover?: string;
    href?: string;
}

const items: CaseStudyImageCardItem[] = [
    {
        id: 'trexs',
        year: '2016',
        category: 'Speculative Design',
        title: 'Trexs',
        description: 'A device for transmitting experiences between people.',
        cover: '/treks-header.gif',
    },
    {
        id: 'stella-timer',
        year: '2026',
        category: 'iOS App · Design System',
        title: 'StellaTimer',
        description: 'A meditation timer for people who actually meditate. No social, no library, no bloat.',
        cover: '/stella/screen-08-home-v2.png',
    },
    {
        id: 'c',
        year: 'Ongoing',
        category: 'Personal',
        title: 'C',
        description: 'An ongoing collection of things I find interesting.',
        href: 'https://pedro5.cargo.site/C',
    },
];

interface Props {
    onOpenStudy?: (id: string) => void;
}

function Card({ item, onOpenStudy }: { item: CaseStudyImageCardItem; onOpenStudy?: (id: string) => void }) {
    const inner = (
        <>
            <div className="h-[200px] overflow-hidden">
                {item.cover ? (
                    <img
                        src={item.cover}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-white/5 flex items-center justify-center">
                        <span className="text-[80px] font-bold text-white/10 select-none group-hover:text-white/20 transition-colors">
                            {item.title}
                        </span>
                    </div>
                )}
            </div>
            <div className="px-5 py-5">
                <p className="text-xs text-white/40 uppercase tracking-widest">{item.year} · {item.category}</p>
                <p className="text-[17px] font-bold text-white/90 mt-1.5">{item.title}</p>
                <p className="text-[14px] text-white/50 mt-1 leading-relaxed">{item.description}</p>
            </div>
            <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 14C17 14.5523 16.5523 15 16 15C15.4478 15 15 14.5523 15 14V10.4141L8.70708 16.707C8.31655 17.0976 7.68354 17.0976 7.29302 16.707C6.90249 16.3165 6.90249 15.6835 7.29302 15.293L13.586 9H10C9.44776 9 9.00005 8.55228 9.00005 8C9.00005 7.44772 9.44776 7 10 7H16C16.5523 7 17 7.44772 17 8V14Z" fill="black" />
                    </svg>
                </div>
            </div>
        </>
    );

    const sharedClass = "group cursor-pointer text-left relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-colors bg-black flex flex-col";

    if (item.href) {
        return (
            <a href={item.href} target="_blank" rel="noreferrer" className={sharedClass}>
                {inner}
            </a>
        );
    }

    return (
        <button onClick={() => onOpenStudy?.(item.id)} className={sharedClass}>
            {inner}
        </button>
    );
}

export function CaseStudyImageCard({ onOpenStudy }: Props) {
    return (
        <div className="border-t border-white/10 mt-16 pt-14">
            <p className="text-[28px] md:text-[32px] font-bold tracking-tight leading-[1.2] text-white">
                This is where I keep some personal projects.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                {items.map((item) => (
                    <Card key={item.id} item={item} onOpenStudy={onOpenStudy} />
                ))}
            </div>
        </div>
    );
}
