import { createContext } from 'react';

export type Lang = 'en' | 'pt';

/**
 * The site is written in English. Portuguese is a lookup layer on top: every
 * user-facing string is passed through `t()`, which swaps it for the entry in
 * `pt.ts` keyed by the English source string. Anything missing from the
 * dictionary falls back to the English original, so an untranslated string
 * degrades to readable copy instead of a blank or a raw key.
 */
export interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: <T extends string | undefined>(text: T) => T;
}

export const LanguageContext = createContext<LanguageContextValue>({
    lang: 'en',
    setLang: () => { },
    t: (text) => text,
});
