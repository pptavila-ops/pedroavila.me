import { useState, useEffect } from 'react';

interface Props {
    prefix: string;
    phrases: string[];
}

export function AnimatedSentence({ prefix, phrases }: Props) {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex(i => (i + 1) % phrases.length);
                setVisible(true);
            }, 350);
        }, 2800);
        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <p className="text-[16px] md:text-[17px] font-normal leading-relaxed text-white/60">
            {prefix}
            <span
                className="text-white/90 font-medium"
                style={{
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.35s ease',
                    display: 'inline',
                }}
            >
                {phrases[index]}
            </span>
        </p>
    );
}
