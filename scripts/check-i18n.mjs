#!/usr/bin/env node
/**
 * Guards the Portuguese dictionary against the two failure modes it actually
 * has: a key defined twice (the later spread silently wins) and a user-facing
 * string in src/data that nothing translates (it renders in English mid-page).
 *
 *   node scripts/check-i18n.mjs
 *
 * The string sweep is deliberately crude — it reads the data files as text and
 * pulls the values of the fields that reach the screen. Anything it can't
 * attribute is reported, not guessed at.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const i18nDir = join(root, 'src/i18n');
const dataDir = join(root, 'src/data');

/** Pull the top-level keys out of a `Record<string, string>` module. */
function dictKeys(source) {
    const keys = [];
    // Keys sit at exactly four spaces of indentation in these files.
    const re = /^ {4}('(?:[^'\\]|\\.)*')\s*:/gm;
    let m;
    while ((m = re.exec(source)) !== null) keys.push(unquote(m[1]));
    return keys;
}

function unquote(literal) {
    return literal.slice(1, -1).replace(/\\(['"\\])/g, '$1');
}

// ── 1. Duplicate keys ────────────────────────────────────────────────
const dictFiles = readdirSync(i18nDir).filter((f) => /^pt\.[a-z]+\.ts$/.test(f));
const seen = new Map();
const duplicates = [];

for (const file of dictFiles) {
    for (const key of dictKeys(readFileSync(join(i18nDir, file), 'utf8'))) {
        if (seen.has(key)) duplicates.push({ key, first: seen.get(key), second: file });
        else seen.set(key, file);
    }
}

// ── 2. Untranslated user-facing strings in src/data ──────────────────
// Fields whose values are rendered to the page. `src` / `href` / `color` and
// friends are deliberately absent.
const TEXT_FIELDS = [
    'title', 'intro', 'content', 'caption', 'label', 'description',
    'text', 'quote', 'value', 'role', 'year', 'sublabel', 'company',
];

const missing = [];
for (const file of readdirSync(dataDir).filter((f) => f.endsWith('.ts'))) {
    // The template study is scaffolding for writing new case studies, not
    // published copy — it never needs a translation.
    if (file === 'templateCaseStudy.ts') continue;
    const source = readFileSync(join(dataDir, file), 'utf8');

    const fieldRe = new RegExp(`\\b(${TEXT_FIELDS.join('|')}):\\s*('(?:[^'\\\\]|\\\\.)*')`, 'g');
    const tagsRe = /\btags:\s*\[([^\]]*)\]/g;
    const candidates = [];

    let m;
    while ((m = fieldRe.exec(source)) !== null) candidates.push(unquote(m[2]));
    while ((m = tagsRe.exec(source)) !== null) {
        for (const tag of m[1].matchAll(/'((?:[^'\\]|\\.)*)'/g)) {
            candidates.push(tag[1].replace(/\\(['"\\])/g, '$1'));
        }
    }

    for (const text of new Set(candidates)) {
        // Bare numbers, metrics and short codes read the same in both
        // languages — '+8.2%', '2015', '10', 'C.'.
        if (!/[a-zA-Z]{3}/.test(text)) continue;
        if (!seen.has(text)) missing.push({ file, text });
    }
}

// ── 3. Literal t('…') calls that no dictionary entry answers ─────────
// A typo in a hand-written key is invisible at runtime: `t()` just returns the
// English string. This catches it at build time instead.
const componentsDir = join(root, 'src');
const unresolved = [];

function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) walk(path);
        else if (/\.tsx?$/.test(entry.name) && !path.includes(`${'src'}/i18n/`)) scanCalls(path);
    }
}

function scanCalls(path) {
    const source = readFileSync(path, 'utf8');
    for (const m of source.matchAll(/\bt\(\s*('(?:[^'\\]|\\.)*')\s*\)/g)) {
        const key = unquote(m[1]);
        if (!seen.has(key)) unresolved.push({ path: path.slice(root.length + 1), key });
    }
}

walk(componentsDir);

// ── Report ───────────────────────────────────────────────────────────
let failed = false;

if (duplicates.length > 0) {
    failed = true;
    console.error(`\n✗ ${duplicates.length} duplicate key(s):`);
    for (const d of duplicates) console.error(`  "${d.key}"\n    ${d.first} → ${d.second}`);
}

if (missing.length > 0) {
    failed = true;
    console.error(`\n✗ ${missing.length} untranslated string(s) in src/data:`);
    for (const m of missing) console.error(`  [${m.file}] ${m.text}`);
}

if (unresolved.length > 0) {
    failed = true;
    console.error(`\n✗ ${unresolved.length} t() call(s) with no dictionary entry:`);
    for (const u of unresolved) console.error(`  [${u.path}] ${u.key}`);
}

if (!failed) {
    console.log(`✓ ${seen.size} keys, no duplicates, every src/data string and t() call translated`);
}

process.exit(failed ? 1 : 0);
