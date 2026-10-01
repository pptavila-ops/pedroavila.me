interface CaseStudyImageCardItem {
    id: string;
    year: string;
    category: string;
    title: string;
    description: string;
    cover?: string;
    href?: string;
    kind?: 'study' | 'playground';
}

const items: CaseStudyImageCardItem[] = [
    {
        id: 'trexs',
        year: '2016',
        category: 'Speculative Design',
        title: 'Trexs',
        description: 'A device for transmitting experiences between people.',
        cover: '/treks-header.mp4',
    },
    {
        id: 'c',
        year: '2015',
        category: 'Object Book',
        title: 'C.',
        description: 'A bilingual object book about memory and the Brazilian Military Dictatorship.',
        cover: '/c/header/3.webp',
    },
    {
        id: 'playground',
        year: 'Ongoing',
        category: 'Free Exploration',
        title: 'Playground',
        description: 'Side projects and free explorations.',
        cover: '/playground-kwid.mp4',
        kind: 'playground',
    },
];

interface Props {
    onOpenStudy?: (id: string) => void;
    onOpenPlayground?: () => void;
    excludeId?: string;
}

import { FadeImage } from './FadeImage';
import { useT } from '../i18n/useLanguage';

function Card({ item, onOpenStudy, onOpenPlayground }: { item: CaseStudyImageCardItem; onOpenStudy?: (id: string) => void; onOpenPlayground?: () => void }) {
    const t = useT();

    // The cover zooms on a wrapper because FadeImage's inline opacity
    // transition would override a transform transition on the img itself.
    const inner = (
        <>
            <div className="h-[200px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 isolate">
                {item.cover ? (
                    <div className="w-full h-full group-hover:scale-110 transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <FadeImage
                            src={item.cover}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[80px] font-bold text-white/10 select-none group-hover:text-white/20 transition-colors">
                            {item.title}
                        </span>
                    </div>
                )}
            </div>
            <div className="pt-4 flex flex-col flex-1">
                <p className="text-sm text-white/50">{t(item.year)}</p>
                <p className="text-[17px] font-bold text-white/90 group-hover:text-white transition-colors mt-1.5">{item.title}</p>
                <p className="text-[15px] text-white/60 mt-1 leading-relaxed">{t(item.description)}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-3">
                    <span className="text-[13px] text-white/80 bg-white/15 group-hover:bg-white/20 group-hover:text-white rounded-full px-3 py-1 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]">{t(item.category)}</span>
                </div>
            </div>
        </>
    );

    // No box at rest: the image carries its own radius and the text sits loose
    // beneath it. On hover the card fills in, matching the client case cards.
    const sharedClass = "group cursor-pointer text-left flex flex-col -m-3 p-3 rounded-[28px] hover:bg-white/[0.06] transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]";

    if (item.href) {
        return (
            <a href={item.href} target="_blank" rel="noreferrer" className={sharedClass}>
                {inner}
            </a>
        );
    }

    // A real link, so the card can be opened in a new tab or copied. A plain
    // left click still stays on the SPA route.
    const isPlayground = item.kind === 'playground';
    return (
        <a
            href={isPlayground ? '/playground' : `/work/${item.id}`}
            onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                isPlayground ? onOpenPlayground?.() : onOpenStudy?.(item.id);
            }}
            className={sharedClass}
        >
            {inner}
        </a>
    );
}

export function CaseStudyImageCard({ onOpenStudy, onOpenPlayground, excludeId }: Props) {
    const t = useT();
    const visibleItems = excludeId ? items.filter((item) => item.id !== excludeId) : items;
    const title = excludeId ? t('Explore other personal projects.') : t('This is where I keep some personal projects.');

    return (
        <div className="border-t border-white/10 mt-16 pt-14">
            <p className="text-[28px] md:text-[32px] font-bold tracking-tight leading-[1.2] text-white">
                {title}
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleItems.map((item) => (
                    <Card key={item.id} item={item} onOpenStudy={onOpenStudy} onOpenPlayground={onOpenPlayground} />
                ))}
            </div>
        </div>
    );
}
