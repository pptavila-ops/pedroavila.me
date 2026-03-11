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
            <div className="hidden md:flex md:w-[28%] lg:w-[24%] fixed top-0 left-0 h-screen flex-col justify-between px-8 lg:px-10 py-10">
                <div>
                    <div className="flex gap-4 items-center">
                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-white/5">
                            <AsciiPortrait />
                        </div>
                        <div>
                            <p className="text-base font-semibold text-white">Pedro Ávila <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle text-[#7DD3FC]" aria-hidden="true"><path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM8.79883 13.5C8.46744 12.9484 7.84205 12.8364 7.40039 13.25C6.95859 13.6642 6.86894 14.4477 7.2002 15L8 14.25C7.24034 14.9622 7.20185 14.9994 7.2002 15.001L7.20215 15.0029L7.20508 15.0078C7.20709 15.0111 7.20915 15.016 7.21191 15.0205C7.21745 15.0295 7.2249 15.0413 7.2334 15.0547C7.25061 15.0818 7.27455 15.1177 7.30371 15.1611C7.36233 15.2484 7.4455 15.3673 7.55176 15.5059C7.76384 15.7824 8.07393 16.1465 8.47461 16.5107C9.27259 17.2361 10.4745 18 12 18C13.5255 18 14.7274 17.2362 15.5254 16.5107C15.9261 16.1465 16.2362 15.7824 16.4482 15.5059C16.5545 15.3673 16.6377 15.2484 16.6963 15.1611C16.7255 15.1177 16.7494 15.0818 16.7666 15.0547C16.7751 15.0412 16.7825 15.0295 16.7881 15.0205C16.7909 15.016 16.7929 15.0111 16.7949 15.0078L16.7979 15.0029L16.7998 15.001C16.7988 15 16.7672 14.9693 16 14.25L16.7998 15C17.1311 14.4477 17.0414 13.6642 16.5996 13.25C16.1578 12.8362 15.5315 12.9481 15.2002 13.5L15.2012 13.498V13.4971L15.1982 13.502C15.1923 13.5114 15.1813 13.5294 15.165 13.5537C15.1319 13.603 15.0779 13.6801 15.0049 13.7754C14.8576 13.9675 14.6361 14.2288 14.3496 14.4893C13.7725 15.0139 12.9745 15.5 12 15.5C11.0255 15.5 10.2275 15.0139 9.65039 14.4893C9.36396 14.2288 9.14241 13.9675 8.99512 13.7754C8.92207 13.6801 8.86806 13.603 8.83496 13.5537C8.81867 13.5294 8.80773 13.5114 8.80176 13.502L8.7998 13.499L8.79883 13.5ZM7.99512 7C6.89594 7.00003 6.00488 7.89545 6.00488 9C6.00488 10.1046 6.89594 11 7.99512 11H8.01465C9.11383 11 10.0049 10.1046 10.0049 9C10.0049 7.89545 9.11383 7.00003 8.01465 7H7.99512ZM15.9951 7C14.8959 7.00003 14.0049 7.89545 14.0049 9C14.0049 10.1046 14.8959 11 15.9951 11H16.0146C17.1138 11 18.0049 10.1046 18.0049 9C18.0049 7.89545 17.1138 7.00003 16.0146 7H15.9951Z" fill="currentColor"/></svg></p>
                            <p className="text-sm text-white/50">Senior Product Designer</p>
                        </div>
                    </div>
                    <p className="text-sm font-normal text-white/60 leading-relaxed mt-6">
                        9+ years of experience working in Design Operations in Berlin, Germany. Currently enabling designers to ship production-ready code at HelloFresh.
                    </p>
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
            <div className="w-full md:ml-[28%] lg:ml-[24%] min-h-screen px-6 py-12 md:py-16 md:px-10 lg:px-14">
                {study ? (
                    <div>
                        <button
                            onClick={closeStudy}
                            className="text-sm text-white/50 hover:text-white transition-colors mb-8 cursor-pointer"
                        >
                            &larr; Back
                        </button>
                        <h1 className="text-[28px] md:text-[36px] font-bold leading-[1.15] tracking-tight mt-4">
                            {study.title}
                        </h1>
                        <p className="mt-8 text-lg font-normal leading-relaxed text-white/70">
                            {study.intro}
                        </p>
                        {study.sections.map((section, i) => (
                            <p key={i} className="mt-6 text-lg font-normal leading-relaxed text-white/70">
                                {section.text}
                            </p>
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
                                    className="group relative block rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer text-left"
                                >
                                    <div className="relative p-5 h-[200px] overflow-hidden">
                                        <p className="text-sm font-normal leading-relaxed text-white/60">
                                            {cs.intro}
                                        </p>
                                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                                    </div>
                                    <div className="px-5 pb-4">
                                        <p className="text-sm font-semibold text-white/80">{cs.title}</p>
                                    </div>
                                    <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" aria-hidden="true">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 14C17 14.5523 16.5523 15 16 15C15.4478 15 15 14.5523 15 14V10.4141L8.70708 16.707C8.31655 17.0976 7.68354 17.0976 7.29302 16.707C6.90249 16.3165 6.90249 15.6835 7.29302 15.293L13.586 9H10C9.44776 9 9.00005 8.55228 9.00005 8C9.00005 7.44772 9.44776 7 10 7H16C16.5523 7 17 7.44772 17 8V14Z" fill="black"/>
                                            </svg>
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
