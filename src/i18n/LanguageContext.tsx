import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, type Lang } from './context';
import { pt } from './pt';

const STORAGE_KEY = 'pedroavila-lang';

function readStoredLang(): Lang {
    try {
        return localStorage.getItem(STORAGE_KEY) === 'pt' ? 'pt' : 'en';
    } catch {
        return 'en';
    }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    // English is the default. A previous choice is remembered, but the
    // browser's own language never flips the site on its own.
    const [lang, setLangState] = useState<Lang>(readStoredLang);

    useEffect(() => {
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }, [lang]);

    const setLang = useCallback((next: Lang) => {
        setLangState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Private mode or blocked storage — the choice just won't persist.
        }
    }, []);

    const t = useCallback(<T extends string | undefined>(text: T): T => {
        if (lang === 'en' || text === undefined) return text;
        return (pt[text] ?? text) as T;
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
