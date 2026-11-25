import { Fragment } from 'react';
import { useT } from '../i18n/useLanguage';
import { useSnapCarousel } from './useSnapCarousel';
import { CarouselFooter, StageTabs, carouselRegion, carouselTrack } from './CarouselParts';

/* How a demand became a feature at TPT, as a row of post-its read left to
   right. A strip of four stages on top keeps the whole sequence visible while
   the row only fits a few notes, and jumps to a stage. Native scroll-snap does
   the swiping, the same way SlideCarousel works. */

type Stage = 'demand' | 'strategy' | 'design' | 'build';
type Connector = 'or' | 'arrow' | 'apart';

type Note = {
    label: string;
    question: string;
    body?: string;
    chips?: string[];
    stage: Stage;
    /** Overrides the stage color, for a stage that spans two colors */
    color?: string;
    /** What sits in the gap after this note */
    next?: Connector;
    /** The last squad step feeds the data again */
    loop?: boolean;
};

/** Each stage has one color, shared by its tab and its notes. Labels stay
    short so all four tabs fit a phone screen. Build and research share a tab:
    its bar fades from the build note's green to the interviews note's pink. */
const stages: { id: Stage; label: string; color: string; bar?: string }[] = [
    { id: 'demand', label: 'Demand', color: '#ffe57a' },
    { id: 'strategy', label: 'Strategy', color: '#ffb88a' },
    { id: 'design', label: 'Design and test', color: '#b8dcff' },
    { id: 'build', label: 'Build and research', color: '#c4efc0', bar: 'linear-gradient(90deg, #c4efc0, #ffc4d6)' },
];
const stageColor = (id: Stage) => stages.find((stage) => stage.id === id)!.color;

const notes: Note[] = [
    {
        label: 'Data',
        question: 'What are users telling us?',
        chips: ['Analytics', 'Heatmaps', 'Sprig feedback', 'Intercept surveys', 'From other HelloFresh brands'],
        stage: 'demand',
        next: 'or',
    },
    {
        label: 'Business',
        question: 'What does the business need?',
        chips: ['New types of food', 'New prices', 'New portion sizes'],
        stage: 'demand',
        next: 'arrow',
    },
    {
        label: 'Prioritise',
        question: 'Which problems are worth it?',
        body: 'Ranked for the next weeks or the quarter, by how much each could move:',
        chips: ['CVR', 'AOR', 'AOV', 'CVA', 'ARR'],
        stage: 'strategy',
        next: 'arrow',
    },
    {
        label: 'Hypothesise and vote',
        question: 'What change would move it?',
        body: 'We wrote hypotheses, voted as a team, and picked one opportunity.',
        stage: 'strategy',
        next: 'arrow',
    },
    {
        label: 'Design and review',
        question: 'Is everyone aligned before we build?',
        body: 'Designed with OOUX, reviewed early with stakeholders and developers.',
        stage: 'design',
        next: 'arrow',
    },
    {
        label: 'Usability test',
        question: 'Do people get it?',
        body: 'Tested with real users before any engineering time. If not, back to design.',
        stage: 'design',
        next: 'arrow',
    },
    {
        label: 'Build and A/B test',
        question: 'Did it actually work?',
        body: 'Shipped as an experiment against control.',
        stage: 'build',
        next: 'apart',
        loop: true,
    },
    {
        label: 'User interviews, any time',
        question: 'What are we missing?',
        body: 'Before or after a feature, whenever we needed to learn more.',
        stage: 'build',
        color: '#ffc4d6',
    },
];

/** Spelled out on hover, so the note itself stays short */
const metricNames: Record<string, string> = {
    CVR: 'Conversion rate',
    AOR: 'Average order rate',
    AOV: 'Average order value',
    CVA: 'Customer value added',
    ARR: 'Annual recurring revenue',
};

// A slight, fixed tilt per note so the row reads as a wall of post-its
const tilts = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9, -1.6, 1.1];

function ConnectorMark({ kind }: { kind: Connector }) {
    const t = useT();
    return (
        <div aria-hidden="true" className="flex-shrink-0 w-12 self-center flex justify-center">
            {kind === 'arrow' && (
                <svg width="38" height="26" viewBox="0 0 38 26" fill="none">
                    <path d="M3 17C11 5 24 4 33 13" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M26 13.5L33.5 13.5L33 6" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
            {kind === 'or' && <span className="font-serif text-[20px] italic text-white/70">{t('or')}</span>}
            {kind === 'apart' && <span className="block h-40 border-l-2 border-dashed border-white/30" />}
        </div>
    );
}

export function TptProcessDiagram() {
    const t = useT();
    const { trackRef, setItemRef, active, goTo, onKeyDown, edgeFade } = useSnapCarousel(notes.length);

    return (
        <div
            className={carouselRegion}
            role="region"
            aria-roledescription="carousel"
            aria-label={t('How a demand became a feature at TPT')}
            tabIndex={0}
            onKeyDown={onKeyDown}
        >
            {/* The whole sequence at a glance, doubling as navigation and color key */}
            <StageTabs
                stages={stages}
                activeId={notes[active].stage}
                onPick={(id) => goTo(notes.findIndex((note) => note.stage === id))}
            />

            <div
                ref={trackRef}
                className={`mt-8 md:mt-10 pt-5 pb-4 items-start ${carouselTrack}`}
                style={edgeFade}
            >
                {notes.map((note, i) => (
                    <Fragment key={note.label}>
                        <div
                            ref={setItemRef(i)}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${i + 1} / ${notes.length}: ${t(note.label)}`}
                            className="snap-start flex-shrink-0 w-[256px] md:w-[260px] min-h-[220px] relative flex flex-col p-6 pt-7 text-black rounded-sm"
                            style={{ background: note.color ?? stageColor(note.stage), transform: `rotate(${tilts[i % tilts.length]}deg)` }}
                        >
                            {/* Tape */}
                            <span
                                aria-hidden="true"
                                className="absolute -top-2.5 left-1/2 -translate-x-1/2 -rotate-2 w-16 h-5 bg-[#fff6e0]/70"
                            />
                            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-black/75">
                                {String(i + 1).padStart(2, '0')} · {t(note.label)}
                            </p>
                            <p className="mt-3 text-[22px] font-semibold tracking-[-0.01em] leading-[1.2]">{t(note.question)}</p>
                            {note.body && <p className="mt-3 text-[15px] leading-snug text-black/70">{t(note.body)}</p>}
                            {note.chips && (
                                <ul className="mt-4 flex flex-wrap gap-1.5">
                                    {note.chips.map((chip) => (
                                        <li
                                            key={chip}
                                            title={metricNames[chip] ? t(metricNames[chip]) : undefined}
                                            className="whitespace-nowrap text-[13px] font-semibold text-black/80 bg-white/55 px-2 py-0.5 rounded"
                                        >
                                            {t(chip)}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {note.loop && (
                                <button
                                    type="button"
                                    onClick={() => goTo(0)}
                                    className="mt-4 w-fit flex items-center gap-1.5 text-[13px] font-semibold text-black/75 border-b border-black/30 hover:border-black/70 cursor-pointer"
                                >
                                    <span aria-hidden="true">↺</span>
                                    {t('Results fed back into the data')}
                                </button>
                            )}
                        </div>
                        {note.next && <ConnectorMark kind={note.next} />}
                    </Fragment>
                ))}
            </div>

            <CarouselFooter active={active} count={notes.length} goTo={goTo} />
        </div>
    );
}
