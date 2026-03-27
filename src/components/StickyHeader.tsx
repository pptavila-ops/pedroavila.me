interface Props {
    title: string;
    visible: boolean;
    onBack: () => void;
}

export function StickyHeader({ title, visible, onBack }: Props) {
    return (
        <div className={`fixed top-0 left-0 md:left-[32%] lg:left-[28%] right-0 z-20 bg-black transition-all duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <div className="flex items-center gap-3 px-7 md:px-10 lg:px-14 py-4">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.293 5.29295C10.6835 4.90243 11.3165 4.90243 11.707 5.29295C12.0976 5.68348 12.0976 6.31649 11.707 6.70702L7.41406 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41406L11.707 17.293C12.0976 17.6835 12.0976 18.3165 11.707 18.707C11.3165 19.0975 10.6835 19.0975 10.293 18.707L4.29297 12.707C3.90245 12.3165 3.90245 11.6835 4.29297 11.293L10.293 5.29295Z" fill="currentColor"/>
                    </svg>
                    Back
                </button>
                <span className="text-white/20">·</span>
                <p className="text-sm font-semibold text-white/70 truncate">{title}</p>
            </div>
        </div>
    );
}
