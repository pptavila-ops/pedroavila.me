import { useEffect, useRef, useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    /** Still frame shown while a video loads, or instead of it if autoplay is blocked. */
    poster?: string;
}

const VIDEO_EXTENSIONS = /\.(mp4|webm)$/i;

export function FadeImage({ src, alt, className, style, loading, poster, ...rest }: Props) {
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // `loadeddata` alone isn't reliable: it can fire before React's listener is
    // attached (cached file), or never fire at all when the browser blocks
    // autoplay (iOS Low Power Mode, data saver). Check readyState on mount and
    // accept any sign of life, so the video never stays stuck at opacity 0.
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (video.readyState >= 2) setLoaded(true);
        if (video.paused) video.play().catch(() => {});
    }, [src]);

    if (VIDEO_EXTENSIONS.test(src)) {
        const show = () => setLoaded(true);
        return (
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                autoPlay
                loop
                muted
                playsInline
                aria-label={alt}
                className={className}
                // With a poster there's always something to show, so skip the fade-in.
                style={{ ...style, transition: 'opacity 0.4s ease', opacity: loaded || poster ? 1 : 0 }}
                onLoadedData={show}
                onCanPlay={show}
                onPlaying={show}
                onError={show}
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
