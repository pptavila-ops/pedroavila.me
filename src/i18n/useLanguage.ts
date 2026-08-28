import { useContext } from 'react';
import { LanguageContext, type Lang } from './context';

export interface LangOption {
    code: Lang;
    /** Two-letter label shown in the switch. */
    short: string;
    /** Full name, translated, used as the accessible label. */
    name: string;
}

export function useLanguage() {
    return useContext(LanguageContext);
}

/** Shorthand for components that only need to translate, not to switch. */
export function useT() {
    return useContext(LanguageContext).t;
}
