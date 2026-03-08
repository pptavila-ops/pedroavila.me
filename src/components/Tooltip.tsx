import { useState, useRef, type ReactNode, type MouseEvent } from 'react';

interface TooltipProps {
    children: ReactNode;
    text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={handleMouseMove}
        >
            {children}
            {visible && (
                <div
                    className="absolute pointer-events-none"
                    style={{ left: pos.x, top: pos.y - 12, transform: 'translate(-50%, -100%)' }}
                >
                    <div className="whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-bold text-black shadow-lg">
                        {text}
                    </div>
                    <div className="flex justify-center">
                        <div className="h-0 w-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-white" />
                    </div>
                </div>
            )}
        </div>
    );
}
