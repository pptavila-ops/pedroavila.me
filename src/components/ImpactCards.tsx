import { useT } from '../i18n/useLanguage';

interface ImpactItem {
    value: string;
    label: string;
    // Kept in the data for reference; the compact box shows value + label only.
    description: string;
    logos?: { src: string; alt: string; height: number }[];
}

interface ImpactCardsProps {
    items: ImpactItem[];
    title?: string;
}

// One box in the same style as the Context / What I did cards: a small label,
// then the numbers as a 2-column grid of value + short label. Deliberately
// light on text so it reads at a glance.
export function ImpactCards({ items, title }: ImpactCardsProps) {
    const t = useT();

    return (
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            {title && (
                <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    {t(title)}
                </h2>
            )}
            <dl className={`grid sm:grid-cols-2 gap-x-10 gap-y-8 ${title ? 'mt-6' : ''}`}>
                {items.map((item) => (
                    <div key={item.label} className="flex flex-col-reverse">
                        <dt className="mt-2 text-[15px] md:text-[16px] font-semibold text-white/60 leading-snug">{t(item.label)}</dt>
                        <dd className="text-[36px] md:text-[44px] font-bold leading-none text-white font-serif tracking-normal">{t(item.value)}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
