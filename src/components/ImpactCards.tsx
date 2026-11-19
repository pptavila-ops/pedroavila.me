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

// No box: a small label, like Context / What I did, then the numbers in one
// row of value + short label (2×2 below lg). Deliberately light on text so
// it reads at a glance.
export function ImpactCards({ items, title }: ImpactCardsProps) {
    const t = useT();

    return (
        <div className="mt-10">
            {title && (
                <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    {t(title)}
                </h2>
            )}
            {/* 2×2 below lg, one row of equal columns from lg up */}
            <dl className={`grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none ${title ? 'mt-6' : ''}`}>
                {items.map((item) => (
                    <div key={item.label} className="flex min-w-0 flex-col-reverse justify-end">
                        <dt className="mt-2 text-[15px] md:text-[16px] font-semibold text-white/60 leading-snug">{t(item.label)}</dt>
                        <dd className="text-[26px] md:text-[32px] lg:text-[26px] xl:text-[30px] font-bold leading-none text-white tracking-tight lg:whitespace-nowrap">{t(item.value)}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
