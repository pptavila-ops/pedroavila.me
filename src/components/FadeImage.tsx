import { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

const VIDEO_EXTENSIONS = /\.(mp4|webm)$/i;

export function FadeImage({ src, alt, className, style, loading, ...rest }: Props) {
    const [loaded, setLoaded] = useState(false);

    if (VIDEO_EXTENSIONS.test(src)) {
        return (
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                aria-label={alt}
                className={className}
                style={{ ...style, transition: 'opacity 0.4s ease', opacity: loaded ? 1 : 0 }}
                onLoadedData={() => setLoaded(true)}
            />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{ ...style, transition: 'opacity 0.4s ease', opacity: loaded ? 1 : 0 }}
            onLoad={() => setLoaded(true)}
            loading={loading}
            {...rest}
        />
    );
}
