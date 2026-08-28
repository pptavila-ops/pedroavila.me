import { useLanguage, type LangOption } from '../i18n/useLanguage';

const OPTIONS: LangOption[] = [
    { code: 'en', short: 'EN', name: 'English' },
    { code: 'pt', short: 'PT', name: 'Portuguese' },
];

interface Props {
    className?: string;
    /** Fill the container and split it evenly — used in the mobile header,
     *  where the switch sits on its own line under the contact row. */
    fullWidth?: boolean;
}

/**
 * Two-state segmented control. English is the default, so it sits first and
 * the switch reads as a departure from it rather than a neutral picker.
 */
export function LanguageSwitch({ className = '', fullWidth = false }: Props) {
    const { lang, setLang, t } = useLanguage();

    return (
        <div
            role="group"
            aria-label={t('Language')}
            className={`${fullWidth ? 'flex w-full' : 'inline-flex'} items-center gap-0.5 rounded-lg border border-white/15 p-0.5 ${className}`}
        >
            {OPTIONS.map((option) => {
                const active = lang === option.code;
                return (
                    <button
                        key={option.code}
                        type="button"
                        onClick={() => setLang(option.code)}
                        aria-pressed={active}
                        aria-label={t(option.name)}
                        className={`rounded-[6px] px-2.5 text-[13px] font-semibold transition-colors cursor-pointer ${fullWidth ? 'flex-1 py-2' : 'py-1'
                            } ${active
                                ? 'bg-white/15 text-white'
                                : 'text-white/45 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {option.short}
                    </button>
                );
            })}
        </div>
    );
}
