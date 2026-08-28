/**
 * Strings that stay in their original form in the Portuguese site. They are
 * listed explicitly rather than left out so that `scripts/check-i18n.mjs` can
 * tell "deliberately untranslated" apart from "forgotten", and so a reviewer
 * can see the call was made on purpose.
 */
export const ptKeep: Record<string, string> = {
    // Company, brand and product names
    'HelloFresh': 'HelloFresh',
    'The Pets Table': 'The Pets Table',
    'MVP Factory': 'MVP Factory',
    'ilia Digital': 'ilia Digital',
    'Stellabs': 'Stellabs',
    'Consumer Acceleration': 'Consumer Acceleration',
    'Dovetail': 'Dovetail',
    'React Native': 'React Native',
    'UnB': 'UnB',

    // Job titles and disciplines that Brazilian design teams use in English
    'Product Designer': 'Product Designer',
    // The sidebar bio keeps the English job title, so the tab title matches it.
    'Pedro Ávila — Senior Product Designer': 'Pedro Ávila — Senior Product Designer',
    'Design Systems': 'Design Systems',
    'Design Operations': 'Design Operations',

    // Slash commands — they are typed literally into Claude Code
    '/create-prototype': '/create-prototype',
    '/iterate-prototype': '/iterate-prototype',
    '/test-prototype': '/test-prototype',
    '/design-change-web and /design-change-rn': '/design-change-web and /design-change-rn',
    '/update-prototype and /push-prototype': '/update-prototype and /push-prototype',
    '/ux-preflight': '/ux-preflight',

    // German, quoted as German in the English site too
    'die Erinnerungskultur': 'die Erinnerungskultur',

    // The footer poem stays in English in every language. It rhymes and scans
    // in English; a translation would have to rewrite it, and it is the one
    // piece of the site that is a piece of writing rather than copy.
    'Is this a poem, or a portfolio?': 'Is this a poem, or a portfolio?',
    'A mix of form, something not to hide': 'A mix of form, something not to hide',
    'Is it both? A collection of my work': 'Is it both? A collection of my work',
    'And a snapshot of my mind': 'And a snapshot of my mind',
};
