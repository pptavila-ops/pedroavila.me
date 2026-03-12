import { useState, useRef, useEffect, type ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    text: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default function Tooltip({ children, text, onMouseEnter: onEnter, onMouseLeave: onLeave }: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [tapped, setTapped] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    const show = visible || tapped;

    useEffect(() => {
        if (!show || !tooltipRef.current) {
            setOffset(0);
            return;
        }
        const rect = tooltipRef.current.getBoundingClientRect();
        if (rect.left < 8) {
            setOffset(-rect.left + 8);
        } else if (rect.right > window.innerWidth - 8) {
            setOffset(-(rect.right - window.innerWidth + 8));
        } else {
            setOffset(0);
        }
    }, [show]);

    const handleClick = () => {
        if (window.matchMedia('(hover: none)').matches) {
            setTapped((prev) => !prev);
        }
    };

    useEffect(() => {
        if (!tapped) return;
        const handleOutside = (e: globalThis.MouseEvent | TouchEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setTapped(false);
            }
        };
        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('touchstart', handleOutside);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
        };
    }, [tapped]);

    return (
        <div
            ref={containerRef}
            className="relative"
            onMouseEnter={() => { setVisible(true); onEnter?.(); }}
            onMouseLeave={() => { setVisible(false); onLeave?.(); }}
            onClick={handleClick}
        >
            {children}
            {show && (
                <div
                    ref={tooltipRef}
                    className="absolute z-20 pointer-events-none left-1/2 bottom-full mb-2"
                    style={{ transform: `translateX(calc(-50% + ${offset}px))` }}
                >
                    <div className="w-[260px] text-center rounded-md bg-white px-4 py-3 text-sm font-normal text-black shadow-lg">
                        {text}
                    </div>
                    <div className="flex justify-center" style={offset ? { transform: `translateX(${-offset}px)` } : undefined}>
                        <div className="h-0 w-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-white" />
                    </div>
                </div>
            )}
        </div>
    );
}
