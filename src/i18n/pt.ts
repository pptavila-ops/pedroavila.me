import { ptUi } from './pt.ui';
import { ptWork } from './pt.work';
import { ptPersonal } from './pt.personal';
import { ptKeep } from './pt.keep';

/**
 * The full Brazilian Portuguese dictionary, keyed by the English source string.
 * Split across three files only for readability — later spreads win, so keep
 * keys unique across them (scripts/check-i18n.mjs enforces that).
 */
export const pt: Record<string, string> = {
    ...ptUi,
    ...ptWork,
    ...ptPersonal,
    ...ptKeep,
};
