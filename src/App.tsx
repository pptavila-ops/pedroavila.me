import { useState, useEffect, useCallback, useRef } from 'react';
import RainbowText from './components/RainbowText';
import { CaseStudyImageCard } from './components/CaseStudyImageCard';
import { BrandCarousel } from './components/BrandCarousel';
import Tooltip from './components/Tooltip';
import { caseStudies } from './data/caseStudies';
import { CardGrid } from './components/CardGrid';
import { CaseStudyPage } from './components/CaseStudyPage';
import { CaseStudyStories } from './components/CaseStudyStories';
import { templateCaseStudy } from './data/templateCaseStudy';
import { richCaseStudies } from './data/richCaseStudies';

function App() {
    const [copied, setCopied] = useState(false);
    const [activeStudy, setActiveStudy] = useState<string | null>(null);
    const [shineKey, setShineKey] = useState(0);
    const musicRef = useRef<HTMLAudioElement>(null);

    const openStudy = useCallback((id: string) => {
        setActiveStudy(id);
        setShineKey((k) => k + 1);
        window.history.pushState({ study: id }, '', `/work/${id}`);
        window.scrollTo(0, 0);
    }, []);

    const closeStudy = useCallback(() => {
        setActiveStudy(null);
        setShineKey((k) => k + 1);
        window.history.pushState(null, '', '/');
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname;
            const match = path.match(/^\/work\/(.+)$/);
            setActiveStudy(match ? match[1] : null);
            setShineKey((k) => k + 1);
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
    const richStudy = activeStudy ? richCaseStudies.find((cs) => cs.id === activeStudy) : null;

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
                            { label: 'Design to Code', tip: 'I help teams turn design decisions into production-ready components and features with the help of AI.' },
                            { label: 'Design in Code', tip: 'I enable designers across the org to design directly in code instead of static tools.' },
                            { label: 'AI Skills', tip: 'I own the UX space for AI skills at HelloFresh — writing new skills and improving existing ones.' },
                            { label: 'UX Engineering', tip: 'I bridge the gap between design and front-end engineering across the organization.' },
                            { label: 'Claude Code', tip: 'I build interfaces and prototypes with Claude as a coding partner.' },
                            { label: 'Fast Prototyping', tip: 'I help designers prototype in code, test ideas quickly, and share working prototypes in dedicated repositories.' },
                            { label: 'Design Systems', tip: 'I build and manage scalable component libraries and design tokens that keep teams aligned.' },
                            { label: 'Design Ops', tip: 'I make design system components, prototyping workflows, and code delivery tools available and accessible to every designer in the org.' },
                            { label: 'Designer Enablement', tip: 'I ensure all designers share a similar understanding of new design-to-code workflows through guides, 101 sessions, and a culture that fosters curiosity instead of overwhelm.' },
                        ].map((tag) => (
                            <Tooltip key={`${tag.label}-${shineKey}`} text={tag.tip}>
                                <span className="text-[13px] text-white/60 hover:text-white rounded-md px-3 py-1 cursor-default animate-tag-shine hover:border-white/40 transition-colors">{tag.label}</span>
                            </Tooltip>
                        ))}
                        <Tooltip
                            key={`music-${shineKey}`}
                            text="I've also been learning music production and experimenting with sounds and synthesizers I enjoy."
                            onMouseEnter={() => musicRef.current?.play().catch(() => { })}
                            onMouseLeave={() => { if (musicRef.current) { musicRef.current.pause(); musicRef.current.currentTime = 0; } }}
                        >
                            <span className="text-[13px] text-white/60 hover:text-white rounded-md px-3 py-1 cursor-default animate-tag-shine hover:border-white/40 transition-colors music-tag">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="music-icon inline -mt-0.5 mr-1"><path d="M21.1045 2.00488C21.3856 1.97729 21.6149 2.06946 21.8174 2.26367C22.1485 2.5815 22.1645 2.92212 22.165 3.35254C22.1683 6.07735 22.1675 8.80251 22.167 11.5273L22.166 13.8408C22.1657 14.2859 22.1768 15.2001 22.0908 15.6182C21.9229 16.4204 21.5302 17.1583 20.958 17.7451C19.3002 19.4327 16.69 19.4929 15 17.8184C14.1915 17.0239 13.7359 15.9373 13.7363 14.8037C13.7402 13.7027 14.1798 12.6479 14.959 11.8701C16.4623 10.3708 18.0717 10.612 20.0312 10.6162V4.26758C19.4567 4.37696 18.8356 4.46318 18.2539 4.55957L14.6094 5.16406C13.2872 5.38224 11.7371 5.691 10.4277 5.85449L10.4297 7.9209V14.5762L10.4307 16.4854C10.4311 17.1197 10.4614 17.8093 10.3213 18.4248C10.141 19.1947 9.7506 19.8999 9.19336 20.4609C8.41153 21.2532 7.3435 21.6989 6.23047 21.6973C3.83578 21.7062 1.9946 19.8611 2 17.4668C2.01223 16.3691 2.46034 15.3213 3.24512 14.5537C4.74122 13.0726 6.36228 13.3306 8.29688 13.3359V7.79395L8.29492 6.05859C8.29476 5.71154 8.29851 5.37878 8.31055 5.03027C8.32611 4.5825 8.60316 4.16471 9.05469 4.04688C9.61136 3.90166 10.2306 3.82483 10.8057 3.72949L13.7764 3.22559L18.4609 2.44043C19.2992 2.29886 20.2702 2.10991 21.1045 2.00488ZM6.79492 15.415C6.65123 15.4148 6.1514 15.4111 6.02441 15.4326C5.42914 15.494 4.92507 15.7286 4.54102 16.1982C4.19695 16.6123 4.03597 17.1483 4.09375 17.6836C4.21261 18.8571 5.25037 19.6382 6.4043 19.5703C7.0601 19.4434 7.5276 19.2303 7.92969 18.6621C8.35231 18.0647 8.29918 17.3628 8.29785 16.6602L8.29395 15.4199L6.79492 15.415ZM18.0703 12.8018C17.3917 12.8417 16.9115 13.008 16.4443 13.5352C16.0862 13.9358 15.9022 14.4625 15.9326 14.999C15.97 15.5542 16.2261 16.0718 16.6455 16.4375C17.0182 16.7595 17.4885 16.947 17.9805 16.9707C18.6225 16.9233 19.151 16.7277 19.5791 16.2295C20.1374 15.5798 20.0862 14.9469 20.0859 14.1504L20.085 12.7988C19.431 12.7982 18.72 12.7843 18.0703 12.8018Z" fill="currentColor" /></svg>
                                Music Production
                            </span>
                        </Tooltip>
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
            <div className="w-full md:ml-[32%] lg:ml-[28%] min-h-screen px-7 py-10 md:py-14 md:px-10 lg:px-14">
                {/* Mobile header — hidden on md+ where left panel is visible, and hidden when a case study is open */}
                <div className={`md:hidden mb-10 pb-8 border-b border-white/10 ${activeStudy ? 'hidden' : ''}`}>
                    <p className="text-[15px] font-semibold text-white">Pedro Ávila</p>
                    <p className="text-[14px] text-white/60 mt-1 leading-relaxed">Senior Product Designer · Berlin</p>
                    <div className="flex gap-3 mt-5">
                        <a href="https://www.linkedin.com/in/pptavila/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:border-white/40 hover:text-white">
                            <svg width="14" height="14" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64 0C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72H8C3.58172 72 0 68.4183 0 64V8C0 3.58172 3.58172 0 8 0H64ZM11.0322 62H21.7695V27.333H11.0322V62ZM49.3828 26.2744C42.0263 26.2744 38.9297 32.0029 38.9297 32.0029V27.333H28.6338V62H38.9297V43.8018C38.9298 38.926 41.1747 36.0244 45.4707 36.0244C49.4197 36.0244 51.3153 38.8126 51.3154 43.8018V62H62V40.0508C61.9998 30.7644 56.7357 26.2745 49.3828 26.2744ZM16.3496 10C12.8423 10 10 12.8648 10 16.3975C10.0002 19.9299 12.8425 22.7939 16.3496 22.7939C19.8566 22.7938 22.697 19.9298 22.6973 16.3975C22.6973 12.8649 19.8568 10.0001 16.3496 10Z" fill="currentColor" /></svg>
                            LinkedIn
                        </a>
                        <button onClick={handleCopyEmail} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:border-white/40 hover:text-white cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.30029 2.05493C9.54481 0.994373 12.083 0.724152 14.5005 1.28833C16.9179 1.85257 19.0736 3.21794 20.6167 5.16235C22.1598 7.1069 23.0002 9.51687 23.0005 11.9993V12.9993C23.0005 14.0599 22.5785 15.0783 21.8286 15.8284C21.0786 16.5782 20.0611 16.9992 19.0005 16.9993C17.9398 16.9993 16.9225 16.5783 16.1724 15.8284C16.0129 15.6689 15.8686 15.4972 15.7397 15.3157C14.8239 16.3479 13.489 17.0001 12.0005 17.0002C9.23913 17.0002 7.00059 14.7616 7.00049 12.0002C7.00049 9.23882 9.23906 7.00024 12.0005 7.00024C13.1262 7.00035 14.1648 7.37238 15.0005 8.00024V7.99927C15.0009 7.44736 15.4485 6.99927 16.0005 6.99927C16.5523 6.99948 17 7.44749 17.0005 7.99927V12.9993C17.0005 13.5297 17.2114 14.0392 17.5864 14.4143C17.9615 14.7892 18.4702 14.9993 19.0005 14.9993C19.5306 14.9992 20.0396 14.7891 20.4146 14.4143C20.7894 14.0393 21.0005 13.5295 21.0005 12.9993V11.9993C21.0002 9.96831 20.3128 7.99644 19.0503 6.40552C17.7877 4.81461 16.0233 3.69724 14.0454 3.2356C12.0676 2.77415 9.99104 2.9959 8.15479 3.86353C6.31864 4.73135 4.82936 6.19488 3.93018 8.01587C3.03105 9.83705 2.77516 11.9092 3.20264 13.8948C3.6303 15.8804 4.71648 17.6637 6.28564 18.9534C7.85493 20.2431 9.81522 20.9643 11.8462 20.9993C13.8768 21.034 15.8597 20.3805 17.4722 19.1458C17.9105 18.8105 18.5388 18.8932 18.8745 19.3313C19.2101 19.7695 19.1268 20.3977 18.689 20.7336C16.718 22.243 14.2932 23.0409 11.811 22.9983C9.32886 22.9555 6.93404 22.0745 5.01611 20.4983C3.09828 18.9221 1.77034 16.7434 1.24756 14.3167C0.72497 11.8899 1.03833 9.35706 2.13721 7.1311C3.23625 4.90529 5.05595 3.11562 7.30029 2.05493ZM12.0005 9.00024C10.3436 9.00024 9.00049 10.3434 9.00049 12.0002C9.00059 13.657 10.3437 15.0002 12.0005 15.0002C13.6571 15 15.0004 13.6569 15.0005 12.0002C15.0005 10.3435 13.6571 9.00049 12.0005 9.00024Z" fill="currentColor" /></svg>
                            {copied ? 'Copied' : 'Email'}
                        </button>
                        <a href="/cv.pdf" download className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:border-white/40 hover:text-white">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9999 3C10.9999 2.44772 11.4476 2 11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3V14.5859L16.2929 11.293C16.6834 10.9024 17.3164 10.9024 17.707 11.293C18.0975 11.6835 18.0975 12.3165 17.707 12.707L12.707 17.707C12.3164 18.0976 11.6834 18.0976 11.2929 17.707L6.29289 12.707C5.90237 12.3165 5.90237 11.6835 6.29289 11.293C6.68342 10.9024 7.31643 10.9024 7.70696 11.293L10.9999 14.5859V3Z" fill="currentColor" /><path d="M4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19V20H18V19C18 18.4477 18.4477 18 19 18C19.5523 18 20 18.4477 20 19V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V19Z" fill="currentColor" /></svg>
                            CV
                        </a>
                    </div>
                </div>

                {activeStudy === 'template' ? (
                    <CaseStudyPage
                        study={templateCaseStudy}
                        onBack={closeStudy}
                        otherStudies={caseStudies}
                        onOpenStudy={openStudy}
                    />
                ) : richStudy ? (
                    richStudy.slides ? (
                        <CaseStudyStories study={richStudy} onBack={closeStudy} />
                    ) : (
                        <CaseStudyPage
                            study={richStudy}
                            onBack={closeStudy}
                            otherStudies={[
                                ...richCaseStudies.filter((cs) => cs.id !== richStudy.id && !cs.personal),
                                ...caseStudies.filter((cs) => !richCaseStudies.some((r) => r.id === cs.id)),
                            ]}
                            onOpenStudy={openStudy}
                        />
                    )
                ) : study ? (
                    <div>
                        {/* Back */}
                        <button
                            onClick={closeStudy}
                            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10.293 5.29295C10.6835 4.90243 11.3165 4.90243 11.707 5.29295C12.0976 5.68348 12.0976 6.31649 11.707 6.70702L7.41406 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41406L11.707 17.293C12.0976 17.6835 12.0976 18.3165 11.707 18.707C11.3165 19.0975 10.6835 19.0975 10.293 18.707L4.29297 12.707C3.90245 12.3165 3.90245 11.6835 4.29297 11.293L10.293 5.29295Z" fill="currentColor" /></svg>
                            Back
                        </button>

                        {/* Metadata */}
                        <div className="flex items-center gap-2 text-sm text-white/50 mt-10">
                            <span>{study.year}</span>
                            <span>·</span>
                            <span>@{study.company}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-[28px] md:text-[38px] font-bold leading-[1.15] tracking-tight mt-3">
                            {study.title}
                        </h1>

                        {/* Intro — lead paragraph */}
                        <p className="mt-8 pt-8 border-t border-white/10 text-lg md:text-xl font-normal leading-relaxed text-white/70">
                            {study.intro}
                        </p>

                        {/* Sections */}
                        {study.sections.map((section, i) => (
                            <div key={i} className="mt-8">
                                {'callout' in section && section.callout ? (
                                    <div className="pl-5 border-l-2 border-white/25 my-10">
                                        <p className="text-[20px] md:text-[24px] font-semibold leading-[1.4] text-white/90">
                                            {section.callout}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-[16px] md:text-[17px] font-normal leading-relaxed text-white/60">
                                        {section.text}
                                    </p>
                                )}
                                {section.image && (
                                    <figure className="mt-8">
                                        <img src={section.image} alt={section.caption || ''} className="w-full rounded-xl" />
                                        {section.caption && (
                                            <figcaption className="mt-3 text-sm text-white/40 text-center">{section.caption}</figcaption>
                                        )}
                                    </figure>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <RainbowText>
                            <p className="text-[38px] md:text-[42px] lg:text-[48px] leading-[1.15] font-bold tracking-tight">
                                <span className="lg:hidden">Enabling designers to ship production-ready code.</span>
                                <span className="hidden lg:inline">Enabling designers to ship<br />production-ready code.</span>
                            </p>
                        </RainbowText>
                        <p className="text-[38px] md:text-[42px] lg:text-[48px] leading-[1.15] font-bold tracking-tight">
                            Currently @<a href="https://www.hellofresh.com" target="_blank" rel="noreferrer" className="text-white underline">HelloFresh</a>.
                        </p>

                        <CardGrid
                            caseStudies={caseStudies}
                            openStudy={openStudy}
                            layout="list"
                        />

                        <BrandCarousel />

                        <CaseStudyImageCard onOpenStudy={openStudy} />

                        <div className="border-t border-white/10 mt-16 pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
                            <p className="text-[15px] text-white/60 leading-relaxed">
                                Is this a poem, or a portfolio?<br />
                                A mix of form, something not to hide<br />
                                Is it both? A collection of my work<br />
                                And a snapshot of my mind
                            </p>
                            <p className="text-[15px] text-white/60 flex-shrink-0">© Pedro Ávila 2026</p>
                        </div>
                    </div>
                )}
            </div>
            <audio ref={musicRef} src="/Taramramram.mp3" loop preload="auto" />
        </main>
    );
}

export default App;
