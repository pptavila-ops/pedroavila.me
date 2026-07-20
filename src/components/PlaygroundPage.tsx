import { useState, useEffect, useRef } from 'react';
import { StickyHeader } from './StickyHeader';
import { FadeImage } from './FadeImage';

interface Props {
    onBack: () => void;
}

function SoundToggle({ muted, onToggle }: { muted: boolean; onToggle: () => void }) {
    return (
        <button
            onClick={onToggle}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors backdrop-blur-sm cursor-pointer"
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 9V15H8L13 20V4L8 9H4Z" fill="currentColor" />
                {muted ? (
                    <path d="M17 9L21 13M21 9L17 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                    <>
                        <path d="M15.5 8.5C16.5 9.5 17 10.7 17 12C17 13.3 16.5 14.5 15.5 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                        <path d="M18 6C19.6 7.6 20.5 9.7 20.5 12C20.5 14.3 19.6 16.4 18 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    </>
                )}
            </svg>
        </button>
    );
}

function VideoTile({ src, caption }: { src: string; caption: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);

    const toggleSound = () => {
        setMuted((prev) => {
            const next = !prev;
            if (videoRef.current) videoRef.current.muted = next;
            return next;
        });
    };

    return (
        <div className="rounded-xl overflow-hidden border border-white/15 bg-black flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center py-6 px-4">
                <div className="relative w-full max-w-[220px]">
                    <video
                        ref={videoRef}
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto block rounded-lg"
                    />
                    <SoundToggle muted={muted} onToggle={toggleSound} />
                </div>
            </div>
            <div className="px-4 py-3 border-t border-white/10">
                <p className="text-[14px] text-white/60">{caption}</p>
            </div>
        </div>
    );
}

function KwidTile() {
    return (
        <div className="rounded-xl overflow-hidden border border-white/15 bg-black flex flex-col h-full">
            <div className="flex-1 flex flex-col justify-center py-6 px-4 gap-6">
                <div className="flex justify-center">
                    <FadeImage src="/playground-kwid.gif" alt="Meu KWID app — Histórias screen" className="w-full max-w-[220px] h-auto block rounded-lg" />
                </div>
                <div className="flex justify-center">
                    <FadeImage src="/playground-kwid-screens.png" alt="Meu KWID app — configurator and checkout flow" className="w-full max-w-[420px] h-auto block rounded-lg" />
                </div>
            </div>
            <div className="px-4 py-3 border-t border-white/10">
                <p className="text-[14px] text-white/60">An online purchasing app for Renault's Kwid release in Brazil.</p>
            </div>
        </div>
    );
}

export function PlaygroundPage({ onBack }: Props) {
    const [scrolled, setScrolled] = useState(false);
    const backButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setScrolled(false);
        const el = backButtonRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => setScrolled(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <StickyHeader title="Playground" visible={scrolled} onBack={onBack} />

            {/* Back */}
            <button
                ref={backButtonRef}
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M10.293 5.29295C10.6835 4.90243 11.3165 4.90243 11.707 5.29295C12.0976 5.68348 12.0976 6.31649 11.707 6.70702L7.41406 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41406L11.707 17.293C12.0976 17.6835 12.0976 18.3165 11.707 18.707C11.3165 19.0975 10.6835 19.0975 10.293 18.707L4.29297 12.707C3.90245 12.3165 3.90245 11.6835 4.29297 11.293L10.293 5.29295Z" fill="currentColor"/>
                </svg>
                Back
            </button>

            {/* Header */}
            <div className="mt-8">
                <h1 className="text-[32px] md:text-[44px] font-bold leading-[1.15] text-white tracking-normal">
                    Playground
                </h1>
                <p className="mt-8 pt-8 border-t border-white/10 text-lg md:text-xl font-normal leading-relaxed text-white/70">
                    Free explorations and personal interests — things I didn't make at work. No brief, no stakeholders, just a mosaic of whatever I was curious about.
                </p>
            </div>

            {/* Mosaic */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                <VideoTile
                    src="/playground-stella-timer.mov"
                    caption="Stella Timer, a no-frills meditation app created in React Native."
                />
                <KwidTile />
            </div>

            {/* Poem — last */}
            <div className="border-t border-white/10 mt-16 pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
                <p className="text-[15px] text-white/60 leading-relaxed">
                    Is this a poem, or a portfolio?<br />
                    A mix of form, something not to hide<br />
                    Is it both? A collection of my work<br />
                    And a snapshot of my mind
                </p>
                <p className="text-[15px] text-white/60 flex-shrink-0">© Pedro Ávila 2026</p>
            </div>

            <div className="h-20" />
        </div>
    );
}
