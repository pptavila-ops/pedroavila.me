import { useState, useEffect, useCallback } from 'react';
import RainbowText from './components/RainbowText';
import Tooltip from './components/Tooltip';
import AsciiPortrait from './components/AsciiPortrait';
import { caseStudies } from './data/caseStudies';

function App() {
    const [copied, setCopied] = useState(false);
    const [activeStudy, setActiveStudy] = useState<string | null>(null);

    const openStudy = useCallback((id: string) => {
        setActiveStudy(id);
        window.history.pushState({ study: id }, '', `/work/${id}`);
        window.scrollTo(0, 0);
    }, []);

    const closeStudy = useCallback(() => {
        setActiveStudy(null);
        window.history.pushState(null, '', '/');
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname;
            const match = path.match(/^\/work\/(.+)$/);
            setActiveStudy(match ? match[1] : null);
        };
        window.addEventListener('popstate', handlePopState);

        // Handle initial URL (e.g. direct link to /work/...)
        const path = window.location.pathname;
        const match = path.match(/^\/work\/(.+)$/);
        if (match) setActiveStudy(match[1]);

        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('pptavila@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const study = activeStudy ? caseStudies.find((cs) => cs.id === activeStudy) : null;

    return (
        <main className="flex min-h-screen bg-black text-white">
            {/* Left Panel — Bio */}
            <div className="hidden md:flex md:w-[32%] lg:w-[28%] fixed top-0 left-0 h-screen flex-col justify-between px-8 lg:px-10 py-10">
                <div>
                    <button onClick={closeStudy} className="text-[15px] font-semibold text-white hover:bg-white/10 rounded-md px-2 py-1 -ml-2 transition-colors cursor-pointer">Pedro Ávila</button>
                    <p className="text-[15px] font-normal text-white/70 leading-relaxed mt-3">
                        Senior Product Designer with 9+ years of experience currently working in Design Operations.
                    </p>
                    <p className="text-[15px] font-normal text-white/70 leading-relaxed mt-3">
                        Based in Berlin, Germany.
                    </p>
                    <p className="text-[15px] font-normal text-white/70 leading-relaxed mt-3">
                        He/Him.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {[
                            { label: 'Design to Code', tip: 'Turning design decisions into production-ready components and features with the help of AI.' },
                            { label: 'Design in Code', tip: 'Designing directly in code instead of static tools.' },
                            { label: 'AI Skills', tip: 'Owner of the UX space for AI skills at HelloFresh — helping write new skills and improve existing ones.' },
                            { label: 'UX Engineering', tip: 'Bridging the gap between design and front-end engineering.' },
                            { label: 'Claude Code', tip: 'Building interfaces and prototypes with Claude as a coding partner.' },
                            { label: 'Fast Prototyping', tip: 'Helping designers prototype in code, test ideas quickly, and share working prototypes in dedicated repositories.' },
                            { label: 'Integrated Prototyping', tip: 'Prototyping full features with production design system components — zero development gap from prototype to shipped product.' },
                            { label: 'Design Systems', tip: 'Scalable component libraries that keep teams aligned.' },
                        ].map((tag) => (
                            <Tooltip key={tag.label} text={tag.tip}>
                                <span className="text-[13px] text-white/60 border border-white/15 rounded-md px-3 py-1 cursor-default">{tag.label}</span>
                            </Tooltip>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex gap-3">
                        <a href="https://www.linkedin.com/in/pptavila/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:border-white/40 hover:text-white">
                            <svg width="16" height="16" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64 0C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72H8C3.58172 72 0 68.4183 0 64V8C0 3.58172 3.58172 0 8 0H64ZM11.0322 62H21.7695V27.333H11.0322V62ZM49.3828 26.2744C42.0263 26.2744 38.9297 32.0029 38.9297 32.0029V27.333H28.6338V62H38.9297V43.8018C38.9298 38.926 41.1747 36.0244 45.4707 36.0244C49.4197 36.0244 51.3153 38.8126 51.3154 43.8018V62H62V40.0508C61.9998 30.7644 56.7357 26.2745 49.3828 26.2744ZM16.3496 10C12.8423 10 10 12.8648 10 16.3975C10.0002 19.9299 12.8425 22.7939 16.3496 22.7939C19.8566 22.7938 22.697 19.9298 22.6973 16.3975C22.6973 12.8649 19.8568 10.0001 16.3496 10Z" fill="currentColor" /></svg>
                            LinkedIn
                        </a>
                        <Tooltip text="Click to copy">
                            <button onClick={handleCopyEmail} className="grid rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:border-white/40 hover:text-white cursor-pointer">
                                <span className={`col-start-1 row-start-1 inline-flex items-center justify-center gap-2 ${copied ? 'invisible' : ''}`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.30029 2.05493C9.54481 0.994373 12.083 0.724152 14.5005 1.28833C16.9179 1.85257 19.0736 3.21794 20.6167 5.16235C22.1598 7.1069 23.0002 9.51687 23.0005 11.9993V12.9993C23.0005 14.0599 22.5785 15.0783 21.8286 15.8284C21.0786 16.5782 20.0611 16.9992 19.0005 16.9993C17.9398 16.9993 16.9225 16.5783 16.1724 15.8284C16.0129 15.6689 15.8686 15.4972 15.7397 15.3157C14.8239 16.3479 13.489 17.0001 12.0005 17.0002C9.23913 17.0002 7.00059 14.7616 7.00049 12.0002C7.00049 9.23882 9.23906 7.00024 12.0005 7.00024C13.1262 7.00035 14.1648 7.37238 15.0005 8.00024V7.99927C15.0009 7.44736 15.4485 6.99927 16.0005 6.99927C16.5523 6.99948 17 7.44749 17.0005 7.99927V12.9993C17.0005 13.5297 17.2114 14.0392 17.5864 14.4143C17.9615 14.7892 18.4702 14.9993 19.0005 14.9993C19.5306 14.9992 20.0396 14.7891 20.4146 14.4143C20.7894 14.0393 21.0005 13.5295 21.0005 12.9993V11.9993C21.0002 9.96831 20.3128 7.99644 19.0503 6.40552C17.7877 4.81461 16.0233 3.69724 14.0454 3.2356C12.0676 2.77415 9.99104 2.9959 8.15479 3.86353C6.31864 4.73135 4.82936 6.19488 3.93018 8.01587C3.03105 9.83705 2.77516 11.9092 3.20264 13.8948C3.6303 15.8804 4.71648 17.6637 6.28564 18.9534C7.85493 20.2431 9.81522 20.9643 11.8462 20.9993C13.8768 21.034 15.8597 20.3805 17.4722 19.1458C17.9105 18.8105 18.5388 18.8932 18.8745 19.3313C19.2101 19.7695 19.1268 20.3977 18.689 20.7336C16.718 22.243 14.2932 23.0409 11.811 22.9983C9.32886 22.9555 6.93404 22.0745 5.01611 20.4983C3.09828 18.9221 1.77034 16.7434 1.24756 14.3167C0.72497 11.8899 1.03833 9.35706 2.13721 7.1311C3.23625 4.90529 5.05595 3.11562 7.30029 2.05493ZM12.0005 9.00024C10.3436 9.00024 9.00049 10.3434 9.00049 12.0002C9.00059 13.657 10.3437 15.0002 12.0005 15.0002C13.6571 15 15.0004 13.6569 15.0005 12.0002C15.0005 10.3435 13.6571 9.00049 12.0005 9.00024Z" fill="currentColor" /></svg>
                                    Email
                                </span>
                                <span className={`col-start-1 row-start-1 inline-flex items-center justify-center gap-2 ${copied ? '' : 'invisible'}`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0195 7.05028C18.41 6.65973 19.0439 6.65978 19.4345 7.05028C19.8247 7.44073 19.8247 8.07388 19.4345 8.46434L10.9501 16.9497C10.7626 17.1372 10.5073 17.2427 10.2421 17.2427C9.97706 17.2425 9.72251 17.1371 9.53508 16.9497L5.29289 12.7075C4.90237 12.317 4.90237 11.683 5.29289 11.2925C5.68336 10.9023 6.31649 10.9023 6.70696 11.2925L10.2421 14.8276L18.0195 7.05028Z" fill="currentColor" /></svg>
                                    Copied
                                </span>
                            </button>
                        </Tooltip>
                        <a href="/cv.pdf" download className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:border-white/40 hover:text-white">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9999 3C10.9999 2.44772 11.4476 2 11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3V14.5859L16.2929 11.293C16.6834 10.9024 17.3164 10.9024 17.707 11.293C18.0975 11.6835 18.0975 12.3165 17.707 12.707L12.707 17.707C12.3164 18.0976 11.6834 18.0976 11.2929 17.707L6.29289 12.707C5.90237 12.3165 5.90237 11.6835 6.29289 11.293C6.68342 10.9024 7.31643 10.9024 7.70696 11.293L10.9999 14.5859V3Z" fill="currentColor" /><path d="M4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19V20H18V19C18 18.4477 18.4477 18 19 18C19.5523 18 20 18.4477 20 19V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V19Z" fill="currentColor" /></svg>
                            CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Panel — Content */}
            <div className="w-full md:ml-[34%] lg:ml-[30%] min-h-screen px-6 py-12 md:py-14 md:px-10 lg:px-14">
                {study ? (
                    <div>
                        <button
                            onClick={closeStudy}
                            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white hover:bg-white/10 rounded-md px-2 py-1 -ml-2 transition-colors mb-8 cursor-pointer"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10.293 5.29295C10.6835 4.90243 11.3165 4.90243 11.707 5.29295C12.0976 5.68348 12.0976 6.31649 11.707 6.70702L7.41406 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41406L11.707 17.293C12.0976 17.6835 12.0976 18.3165 11.707 18.707C11.3165 19.0975 10.6835 19.0975 10.293 18.707L4.29297 12.707C3.90245 12.3165 3.90245 11.6835 4.29297 11.293L10.293 5.29295Z" fill="currentColor"/></svg>
                            Back
                        </button>
                        <h1 className="text-[28px] md:text-[36px] font-bold leading-[1.15] tracking-tight mt-4">
                            {study.title}
                        </h1>
                        <p className="mt-8 text-xl md:text-2xl font-normal leading-relaxed text-white/70">
                            {study.intro}
                        </p>
                        {study.sections.map((section, i) => (
                            <div key={i}>
                                {'callout' in section && section.callout ? (
                                    <p className="mt-10 mb-10 text-[24px] md:text-[28px] font-bold leading-[1.3] tracking-tight text-white">
                                        {section.callout}
                                    </p>
                                ) : (
                                    <p className="mt-6 text-lg font-normal leading-relaxed text-white/70">
                                        {section.text}
                                    </p>
                                )}
                                {section.image && (
                                    <figure className="mt-6 mb-6">
                                        <img src={section.image} alt={section.caption || ''} className="w-full rounded-xl" />
                                        {section.caption && (
                                            <figcaption className="mt-2 text-sm text-white/40 text-center">{section.caption}</figcaption>
                                        )}
                                    </figure>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <RainbowText>
                            <p className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.15] font-bold tracking-tight">
                                Enabling designers to ship
                                <br />
                                production-ready code.
                            </p>
                        </RainbowText>
                        <p className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.15] font-bold tracking-tight">
                            Currently @<a href="https://www.hellofresh.com" target="_blank" rel="noreferrer" className="text-white underline">HelloFresh</a>.
                        </p>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {caseStudies.map((cs) => (
                                <button
                                    key={cs.id}
                                    onClick={() => openStudy(cs.id)}
                                    className="group cursor-pointer text-left"
                                >
                                    <div className="relative rounded-xl border border-white/10 group-hover:border-white/20 transition-colors overflow-hidden p-5 flex flex-col h-[300px]">
                                        <div className="flex-1 overflow-y-auto scrollbar-hide" style={{ maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)' }}>
                                            <p className="text-[15px] font-normal leading-relaxed text-white/60">
                                                {cs.intro}
                                            </p>
                                        </div>
                                        <div className="relative -mt-1">
                                            <p className="text-base text-white/50">{cs.year}</p>
                                            <p className="text-base font-bold text-white/80 mt-1">{cs.title}</p>
                                            <p className="text-sm text-white/50 mt-1">@{cs.company}</p>
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 14C17 14.5523 16.5523 15 16 15C15.4478 15 15 14.5523 15 14V10.4141L8.70708 16.707C8.31655 17.0976 7.68354 17.0976 7.29302 16.707C6.90249 16.3165 6.90249 15.6835 7.29302 15.293L13.586 9H10C9.44776 9 9.00005 8.55228 9.00005 8C9.00005 7.44772 9.44776 7 10 7H16C16.5523 7 17 7.44772 17 8V14Z" fill="black"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default App;
