interface ImpactItem {
    value: string;
    label: string;
    description: string;
    logos?: { src: string; alt: string; height: number }[];
}

interface ImpactCardsProps {
    items: ImpactItem[];
    title?: string;
}

export function ImpactCards({ items, title }: ImpactCardsProps) {
    return (
        <div className="mt-16">
            {title && (
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-4">{title}</p>
                    <div className="border-b border-white/15" />
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 p-8 flex flex-col min-h-[260px]">
                        {item.logos ? (
                            <div className="flex items-center gap-4">
                                <p className="text-[72px] md:text-[88px] font-bold leading-none text-white font-serif tracking-normal flex-shrink-0">
                                    {item.value}
                                </p>
                                <div className="flex-1 overflow-hidden relative h-[72px] md:h-[88px]">
                                    <div
                                        className="animate-hf-brand-scroll"
                                        style={{ display: 'flex', alignItems: 'center', width: 'max-content', height: '100%', willChange: 'transform' }}
                                    >
                                        {[...item.logos, ...item.logos].map((logo, j) => (
                                            <img
                                                key={j}
                                                src={logo.src}
                                                alt={logo.alt}
                                                style={{ height: `${logo.height}px`, width: 'auto', objectFit: 'contain', flexShrink: 0, filter: 'brightness(0) invert(1)', opacity: 0.4, marginRight: '28px' }}
                                            />
                                        ))}
                                    </div>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '32px', height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '32px', height: '100%', background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
                                </div>
                            </div>
                        ) : (
                            <p className="text-[72px] md:text-[88px] font-bold leading-none text-white font-serif tracking-normal">
                                {item.value}
                            </p>
                        )}
                        <div className="mt-auto pt-8">
                            <p className="text-[17px] md:text-[19px] font-bold text-white leading-snug">{item.label}</p>
                            <p className="text-[16px] md:text-[17px] text-white/55 mt-2 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
