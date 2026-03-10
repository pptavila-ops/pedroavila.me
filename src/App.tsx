import { useState, useEffect } from 'react';
import RainbowText from './components/RainbowText';
import Tooltip from './components/Tooltip';
import AsciiPortrait from './components/AsciiPortrait';

const trendingUp = [
    'Prototyping and writing production-ready code with AI',
    'Design engineers who bridge design and development',
    'Collaborative design systems built in code',
    'Rapid experimentation and shipping fast',
];

const trendingDown = [
    'Working on static Figma designs',
    'Lengthy handoff processes between design and dev',
    'Pixel-perfect specs that never match production',
    'Designing in isolation without user feedback',
];

const caseStudies = [
    {
        id: 'design-transformation',
        year: '2026 – now',
        title: 'Leading Design Transformation at HelloFresh',
        color: '#A78BFA',
        subtitle: 'Design Ops & Systems, 2026–Now',
        intro: 'When I joined HelloFresh, the design org was scaling fast — but the way we worked hadn\'t caught up. Designers were duplicating effort across squads, reinventing components, and struggling to stay aligned. There was no shared language between design and engineering.',
        sections: [
            {
                text: 'I started by mapping how design decisions flowed through the organization — from a designer\'s Figma file to what actually shipped in production. The gaps were enormous. What we needed wasn\'t just a design system; we needed a design operation.',
            },
            {
                text: 'Over the course of a year, we built the infrastructure for designers to ship production-ready code, established contribution models so the system could grow with the team, and created rituals that kept 30+ designers in sync without slowing anyone down.',
            },
            {
                text: 'The result was a fundamentally different way of working — designers now contribute directly to the codebase, components are shared across all product teams, and the gap between what\'s designed and what\'s built has nearly disappeared.',
            },
        ],
    },
    {
        id: 'pets-table',
        year: '2023 – 2025',
        title: 'On being the sole designer of The Pets Table',
        color: '#8B6FD6',
        subtitle: 'Brand & Product Design, 2023–2025',
        intro: 'HelloFresh wanted to expand into pet food — a completely new vertical with no existing playbook. I was the sole designer responsible for taking this from zero to launch, defining everything from the brand identity to the end-to-end purchase experience.',
        sections: [
            {
                text: 'The challenge was designing a brand that felt connected to HelloFresh\'s DNA — fresh, approachable, quality-first — while standing on its own in the pet food space. I ran discovery workshops with pet owners, mapped the competitive landscape, and developed three distinct brand directions.',
            },
            {
                text: 'From brand identity to packaging to the digital subscription flow, every touchpoint was designed to communicate one thing: this is real food made by people who care, not just another kibble brand. The product launched in two markets and exceeded first-quarter targets by 40%.',
            },
        ],
    },
    {
        id: 'mvp',
        year: '2021 – 2021',
        title: 'Helping companies to test and release their MVPs',
        color: '#6E54B3',
        subtitle: 'Product Strategy & Design, 2021',
        intro: 'Before HelloFresh, I worked with early-stage startups helping them go from idea to first shipped product. The common trap: founders wanting to build everything before shipping anything. My role was to find the smallest version of the product that could prove the idea.',
        sections: [
            {
                text: 'For each engagement, the process was the same: understand the core value proposition, identify the riskiest assumption, and design just enough product to test it. No extra features, no nice-to-haves, no "while we\'re at it" scope creep.',
            },
            {
                text: 'Across six products, the pattern held: the teams that shipped a focused MVP in weeks learned more than those who spent months building in isolation. Three of those products went on to raise follow-on funding. Two are still in the market today.',
            },
        ],
    },
];

function App() {
    const [copied, setCopied] = useState(false);
    const [activeStudy, setActiveStudy] = useState(0);
    const [trendUpIndex, setTrendUpIndex] = useState(0);
    const [trendDownIndex, setTrendDownIndex] = useState(0);
    const [trendUpAnimating, setTrendUpAnimating] = useState(false);
    const [trendDownAnimating, setTrendDownAnimating] = useState(false);

    useEffect(() => {
        let downInterval: ReturnType<typeof setInterval>;

        const upInterval = setInterval(() => {
            setTrendUpAnimating(true);
            setTimeout(() => {
                setTrendUpIndex((i) => (i + 1) % trendingUp.length);
                setTrendUpAnimating(false);
            }, 300);
        }, 4500);

        const downTimeout = setTimeout(() => {
            downInterval = setInterval(() => {
                setTrendDownAnimating(true);
                setTimeout(() => {
                    setTrendDownIndex((i) => (i + 1) % trendingDown.length);
                    setTrendDownAnimating(false);
                }, 300);
            }, 9000);
        }, 2500);

        return () => {
            clearInterval(upInterval);
            clearTimeout(downTimeout);
            clearInterval(downInterval);
        };
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('pptavila@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const study = caseStudies[activeStudy];

    return (
        <main className="flex min-h-screen bg-black text-white">
            {/* Left Panel */}
            <div className="w-full md:w-[40%] lg:w-[35%] md:fixed md:top-0 md:left-0 md:h-screen flex flex-col justify-between px-6 py-12 md:py-10 md:px-10 lg:px-12">
                <div className="max-w-sm text-[24px] lg:text-[28px] leading-[1.2] text-left font-bold tracking-tight">
                    <RainbowText>
                        <p>
                            Enabling designers to ship
                            <br />
                            production-ready code.
                        </p>
                    </RainbowText>
                    <p>
                        Currently @<a href="https://www.hellofresh.com" target="_blank" rel="noreferrer" className="text-white underline">HelloFresh</a>.
                    </p>

                    <hr className="border-white/20 my-5" />

                    {/* About Me */}
                    <div className="flex gap-4 items-center tracking-normal">
                        <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5">
                            <AsciiPortrait />
                        </div>
                        <p className="text-sm font-normal text-white/70 leading-relaxed">
                            Hello, I'm Pedro Ávila <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle text-[#7DD3FC]" aria-hidden="true"><path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM8.79883 13.5C8.46744 12.9484 7.84205 12.8364 7.40039 13.25C6.95859 13.6642 6.86894 14.4477 7.2002 15L8 14.25C7.24034 14.9622 7.20185 14.9994 7.2002 15.001L7.20215 15.0029L7.20508 15.0078C7.20709 15.0111 7.20915 15.016 7.21191 15.0205C7.21745 15.0295 7.2249 15.0413 7.2334 15.0547C7.25061 15.0818 7.27455 15.1177 7.30371 15.1611C7.36233 15.2484 7.4455 15.3673 7.55176 15.5059C7.76384 15.7824 8.07393 16.1465 8.47461 16.5107C9.27259 17.2361 10.4745 18 12 18C13.5255 18 14.7274 17.2362 15.5254 16.5107C15.9261 16.1465 16.2362 15.7824 16.4482 15.5059C16.5545 15.3673 16.6377 15.2484 16.6963 15.1611C16.7255 15.1177 16.7494 15.0818 16.7666 15.0547C16.7751 15.0412 16.7825 15.0295 16.7881 15.0205C16.7909 15.016 16.7929 15.0111 16.7949 15.0078L16.7979 15.0029L16.7998 15.001C16.7988 15 16.7672 14.9693 16 14.25L16.7998 15C17.1311 14.4477 17.0414 13.6642 16.5996 13.25C16.1578 12.8362 15.5315 12.9481 15.2002 13.5L15.2012 13.498V13.4971L15.1982 13.502C15.1923 13.5114 15.1813 13.5294 15.165 13.5537C15.1319 13.603 15.0779 13.6801 15.0049 13.7754C14.8576 13.9675 14.6361 14.2288 14.3496 14.4893C13.7725 15.0139 12.9745 15.5 12 15.5C11.0255 15.5 10.2275 15.0139 9.65039 14.4893C9.36396 14.2288 9.14241 13.9675 8.99512 13.7754C8.92207 13.6801 8.86806 13.603 8.83496 13.5537C8.81867 13.5294 8.80773 13.5114 8.80176 13.502L8.7998 13.499L8.79883 13.5ZM7.99512 7C6.89594 7.00003 6.00488 7.89545 6.00488 9C6.00488 10.1046 6.89594 11 7.99512 11H8.01465C9.11383 11 10.0049 10.1046 10.0049 9C10.0049 7.89545 9.11383 7.00003 8.01465 7H7.99512ZM15.9951 7C14.8959 7.00003 14.0049 7.89545 14.0049 9C14.0049 10.1046 14.8959 11 15.9951 11H16.0146C17.1138 11 18.0049 10.1046 18.0049 9C18.0049 7.89545 17.1138 7.00003 16.0146 7H15.9951Z" fill="currentColor"/></svg>, a Senior Product Designer with 9+ years in Design Operations in Berlin.
                        </p>
                    </div>

                    <hr className="border-white/20 my-5" />

                    {/* Recent Work Nav */}
                    <p className="text-xs font-medium uppercase tracking-widest text-[#8a8a8a] mb-3">Recent Work</p>
                    <nav className="flex flex-col">
                        {caseStudies.map((cs, i) => (
                            <button
                                key={cs.id}
                                onClick={() => setActiveStudy(i)}
                                className={`flex items-baseline gap-3 text-left text-base transition-colors cursor-pointer py-3 border-b ${activeStudy === i
                                    ? 'text-white font-semibold border-white border-b-2'
                                    : 'text-white/40 hover:text-white/70 border-white/10'
                                }`}
                            >
                                <span className="flex-1 font-medium">{cs.title}</span>
                                <span className="text-sm font-normal text-white/50 shrink-0">{cs.year}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Current Trends */}
                    <div className="flex flex-col gap-2 tracking-normal text-sm font-normal mt-5">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-white/60">
                                <path d="M21 13C21 13.5523 20.5523 14 20 14C19.4477 14 19 13.5523 19 13V9.44043L14.8672 13.6387C14.7702 13.7372 14.692 13.817 14.6162 13.8848C13.4772 14.9043 11.7543 14.9043 10.6152 13.8848C10.5402 13.8176 10.4638 13.7398 10.3643 13.6387C10.2486 13.5212 10.2226 13.4962 10.2051 13.4805C9.8254 13.1407 9.25077 13.1406 8.8711 13.4805C8.85365 13.4961 8.82765 13.5221 8.7129 13.6387L4.7129 17.7012C4.32554 18.0946 3.6924 18.1 3.29883 17.7129C2.90542 17.3255 2.90001 16.6924 3.28711 16.2988L7.28809 12.2354C7.38189 12.1401 7.46176 12.0586 7.53809 11.9902C8.67714 10.9709 10.4001 10.9708 11.5391 11.9902C11.6155 12.0587 11.6948 12.1406 11.7891 12.2363C11.8995 12.3485 11.9302 12.3775 11.9492 12.3945C12.3289 12.7343 12.9026 12.7343 13.2822 12.3945C13.3005 12.3782 13.3287 12.3508 13.4414 12.2363L17.6133 8H14C13.4477 8 13 7.55228 13 7C13 6.44772 13.4477 6 14 6H20C20.2652 6 20.5205 6.10542 20.708 6.29297C20.8954 6.48048 21 6.73491 21 7V13Z" fill="currentColor"/>
                            </svg>
                            <span
                                className="text-white/60 transition-all duration-300 ease-in-out"
                                style={{
                                    transform: trendUpAnimating ? 'translateY(100%)' : 'translateY(0)',
                                    opacity: trendUpAnimating ? 0 : 1,
                                }}
                            >
                                {trendingUp[trendUpIndex]}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 overflow-hidden">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-white/50">
                                <path d="M3.29883 6.28711C3.6924 5.90001 4.32554 5.90542 4.7129 6.29883L8.7129 10.3613C8.82789 10.4781 8.85356 10.5038 8.8711 10.5195C9.25077 10.8594 9.8254 10.8593 10.2051 10.5195C10.2226 10.5038 10.2486 10.4788 10.3643 10.3613C10.4639 10.2601 10.5402 10.1824 10.6152 10.1152C11.7543 9.09573 13.4772 9.09573 14.6162 10.1152C14.692 10.1831 14.7703 10.2629 14.8672 10.3613L19 14.5586V11C19 10.4478 19.4477 10 20 10C20.5523 10 21 10.4477 21 11V17C21 17.2651 20.8954 17.5195 20.708 17.707C20.5205 17.8946 20.2652 18 20 18H14C13.4477 18 13 17.5523 13 17C13 16.4477 13.4477 16 14 16H17.6133L13.4414 11.7637C13.3287 11.6492 13.3004 11.6218 13.2822 11.6055C12.9026 11.2657 12.3289 11.2657 11.9492 11.6055C11.9302 11.6225 11.8994 11.6516 11.7891 11.7637C11.6948 11.8594 11.6155 11.9413 11.5391 12.0098C10.4001 13.0292 8.67714 13.0291 7.53809 12.0098C7.46164 11.9413 7.38141 11.8594 7.28711 11.7637L3.28711 7.70118C2.90001 7.30761 2.90542 6.67447 3.29883 6.28711Z" fill="currentColor"/>
                            </svg>
                            <span
                                className="text-white/50 transition-all duration-300 ease-in-out"
                                style={{
                                    transform: trendDownAnimating ? 'translateY(100%)' : 'translateY(0)',
                                    opacity: trendDownAnimating ? 0 : 1,
                                }}
                            >
                                {trendingDown[trendDownIndex]}
                            </span>
                        </div>
                    </div>
                </div>

                {/* CTAs at bottom */}
                <div>
                    <hr className="border-white/20 mb-4" />
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

            {/* Right Panel */}
            <div className="hidden md:block md:ml-[40%] lg:ml-[35%] w-full md:w-[60%] lg:w-[65%] min-h-screen border-l border-white/10 bg-black">
                <div className="px-10 lg:px-16 py-24">
                    <p className="text-sm font-medium uppercase tracking-widest text-[#8a8a8a] mb-4">{study.subtitle}</p>
                    <h2 className="text-[28px] lg:text-[36px] font-bold leading-[1.15] tracking-tight text-white">
                        {study.title}
                    </h2>
                    <p className="mt-6 text-[22px] lg:text-[26px] font-normal leading-[1.4] text-white/70">
                        {study.intro}
                    </p>

                    {study.sections.map((section, i) => (
                        <div key={i} className="mt-10">
                            <p className="text-base font-normal leading-relaxed text-white/70">
                                {section.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default App;
