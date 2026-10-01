import { useT } from '../i18n/useLanguage';

interface Props {
    tags: string[];
    className?: string;
}

// Scope tags as one line of small caps separated by dots ("AI ENABLEMENT ·
// DESIGN-TO-CODE"). Plain text on purpose: pill chips read as clickable
// filters, and these aren't.
export function TagLine({ tags, className = 'text-white/70' }: Props) {
    const t = useT();
    if (tags.length === 0) return null;

    return (
        <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] leading-relaxed ${className}`}>
            {tags.map((tag) => t(tag)).join(' · ')}
        </p>
    );
}
