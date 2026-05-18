import { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    wrapperClassName?: string;
}

export function FadeImage({ src, alt, className, wrapperClassName, style, ...rest }: Props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <span className={`relative block ${wrapperClassName ?? ''}`}>
            {!loaded && (
                <span
                    className="absolute inset-0 rounded-[inherit] bg-white/5 animate-pulse"
                    aria-hidden="true"
                />
            )}
            <img
                src={src}
                alt={alt}
                className={className}
                style={{ ...style, transition: 'opacity 0.4s ease', opacity: loaded ? 1 : 0 }}
                onLoad={() => setLoaded(true)}
                {...rest}
            />
        </span>
    );
}
