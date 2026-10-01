import { richCaseStudies } from './richCaseStudies';

const IMAGE = /^\/.+\.(webp|png|jpe?g)$/i;

// Every image a case study shows, in page order, for the home-page card
// slideshow. Walks the study's `src` / `image` fields so new sections are
// picked up automatically. Brand logos and videos are left out: logos aren't
// screenshots of the work, and autoplaying several videos per card is heavy.
export function caseImages(id: string): string[] {
    const study = richCaseStudies.find((cs) => cs.id === id);
    if (!study) return [];

    const found: string[] = [];
    const walk = (node: unknown) => {
        if (Array.isArray(node)) {
            node.forEach(walk);
        } else if (node && typeof node === 'object') {
            for (const [key, value] of Object.entries(node)) {
                if ((key === 'src' || key === 'image') && typeof value === 'string' && IMAGE.test(value) && !value.startsWith('/brands/')) {
                    found.push(value);
                } else {
                    walk(value);
                }
            }
        }
    };
    walk(study.sections);

    return [...new Set(found)];
}
