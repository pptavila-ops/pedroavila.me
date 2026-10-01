interface CaseStudyImageCardItem {
    id: string;
    year: string;
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
        title: 'Trexs',
        description: 'A device for transmitting experiences between people.',
        cover: '/treks-header.mp4',
    },
    {
        id: 'c',
        year: '2015',
        title: 'C.',
        description: 'A bilingual object book about memory and the Brazilian Military Dictatorship.',
        cover: '/c/header/3.webp',
    },
    {
        id: 'playground',
        year: 'Ongoing',
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
import { TagLine } from './TagLine';
import { useT } from '../i18n/useLanguage';

function Card({ item, onOpenStudy, onOpenPlayground }: { item: CaseStudyImageCardItem; onOpenStudy?: (id: string) => void; onOpenPlayground?: () => void }) {
    const t = useT();

    // Same panel as the client case cards, stacked: the cover fills the top
    // edge to edge, then title, description and the caps meta row. The cover
    // zooms on a wrapper because FadeImage's inline opacity transition would
    // override a transform transition on the img itself.
    const inner = (
        <>
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5 isolate">
                {item.cover ? (
                    <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                        <FadeImage
                            src={item.cover}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[80px] font-bold text-white/10 select-none group-hover:text-white/20 transition-colors" aria-hidden="true">
                            {item.title}
                        </span>
                    </div>
                )}
            </div>
            <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="text-[20px] font-bold leading-[1.2] text-white">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60 text-pretty">{t(item.description)}</p>
                <div className="mt-auto pt-5">
                    <div className="pt-4 border-t border-white/10">
                        <TagLine tags={[item.year]} className="text-white/60" />
                    </div>
                </div>
            </div>
        </>
    );

    const sharedClass = "group cursor-pointer text-left flex flex-col rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 hover:bg-white/[0.03] active:bg-white/[0.06] transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none focus-visible:ring-2 focus-visible:ring-white/70";

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
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleItems.map((item) => (
                    <Card key={item.id} item={item} onOpenStudy={onOpenStudy} onOpenPlayground={onOpenPlayground} />
                ))}
            </div>
        </div>
    );
}
