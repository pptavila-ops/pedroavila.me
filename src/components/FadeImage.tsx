import { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export function FadeImage({ src, alt, className, style, ...rest }: Props) {
    const [loaded, setLoaded] = useState(false);
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{ ...style, transition: 'opacity 0.4s ease', opacity: loaded ? 1 : 0 }}
            onLoad={() => setLoaded(true)}
            {...rest}
        />
    );
}
