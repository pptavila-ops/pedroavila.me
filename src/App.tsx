import { useState } from 'react';
import RainbowText from './components/RainbowText';
import Tooltip from './components/Tooltip';
import AsciiPortrait from './components/AsciiPortrait';

const workItems = [
    {
        year: '2026 – now', title: 'Leading Design Transformation at HelloFresh', color: '#A78BFA',
        description: 'Building skills for designers, researchers, and UX writers to prototype faster with design system components and ship production-ready code.',
    },
    {
        year: '2023 – 2025', title: 'On being the sole designer of The Pets Table', color: '#8B6FD6',
        description: 'Owned the end-to-end design for a new direct-to-consumer pet food brand, from discovery research through to a fully launched e-commerce experience.',
    },
    {
        year: '2021 – 2021', title: 'Helping companies to test and release their MVPs', color: '#6E54B3',
        description: 'Partnered with early-stage startups to shape their vision into testable prototypes, validating ideas quickly and shipping lean first versions to market.',
    },
];

function App() {
    const [copied, setCopied] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('pptavila@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-black text-white px-6 py-12 md:py-24">
            <div className="max-w-xl text-[26px] md:text-[32px] leading-[1.2] text-left font-bold tracking-tight">
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
                <hr className="border-white/20 my-6" />

                <p className="text-xs font-medium uppercase tracking-widest text-[#8a8a8a] mb-4">About Me</p>
                <div className="flex gap-5 items-start tracking-normal">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden shrink-0 bg-white/5">
                        <AsciiPortrait />
                    </div>
                    <div className="flex flex-col justify-between self-stretch text-lg font-normal">
                        <div className="flex flex-col gap-0.5">
                            <p><span className="text-[#7DD3FC] font-semibold">Name:</span> <span className="text-white/70">Pedro Ávila</span></p>
                            <p><span className="text-[#60A5FA] font-semibold">Role:</span> <span className="text-white/70">Senior Product Designer, Design OPs</span></p>
                            <p><span className="text-[#4B8BD6] font-semibold">Location:</span> <span className="text-white/70">Berlin, Germany</span></p>
                            <p><span className="text-[#3B74B8] font-semibold">Experience:</span> <span className="text-white/70">9+ years</span></p>
                        </div>
                        <div className="flex gap-3 mt-3">
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

                <hr className="border-white/20 my-6" />

                <p className="text-xs font-medium uppercase tracking-widest text-[#8a8a8a] mb-4">Recent Work</p>
                <div className="flex flex-col gap-2 tracking-normal">
                    {workItems.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                    className="w-full flex items-center justify-between text-left cursor-pointer"
                                >
                                    <p className="text-lg font-normal leading-relaxed flex">
                                        <span className="font-semibold shrink-0 w-[120px]" style={{ color: item.color }}>{item.year}</span>
                                        <span className="text-white/70 font-bold">{item.title}</span>
                                    </p>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={`text-white/40 shrink-0 ml-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                    >
                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-lg font-normal text-white/70">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default App;
