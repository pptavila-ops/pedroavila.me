import { useEffect, useRef, useState } from 'react';

/* Shared logic for the scroll-snap card rows in the case studies: which card
   is current, whether the row is scrolled to its end, and scrolling to a card.
   Cards register through `setItemRef`, so the row can hold other elements
   (arrows, separators) between them. */
export function useSnapCarousel(count: number) {
    const trackRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);
    const [active, setActive] = useState(0);
    const [atEnd, setAtEnd] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const items = itemRefs.current.filter(Boolean) as HTMLElement[];
            if (items.length === 0) return;
            const left = track.scrollLeft;
            const distance = (item: HTMLElement) => Math.abs(item.offsetLeft - track.offsetLeft - left);
            let nearest = 0;
            items.forEach((item, i) => {
                if (distance(item) < distance(items[nearest])) nearest = i;
            });
            // At the end of the row the last cards can't reach the left edge
            const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
            setAtEnd(end);
            setActive(end ? items.length - 1 : nearest);
        };
        onScroll();
        track.addEventListener('scroll', onScroll, { passive: true });
        return () => track.removeEventListener('scroll', onScroll);
    }, []);

    const goTo = (index: number) => {
        const track = trackRef.current;
        const target = itemRefs.current[index];
        if (!track || !target) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(Math.min(active + 1, count - 1)); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(Math.max(active - 1, 0)); }
    };

    const setItemRef = (i: number) => (el: HTMLElement | null) => { itemRefs.current[i] = el; };

    /** Fades the row's right edge while there is more to scroll to */
    const edgeFade = atEnd ? undefined : { maskImage: 'linear-gradient(to right, black calc(100% - 64px), transparent)' };

    return { trackRef, setItemRef, active, atEnd, goTo, onKeyDown, edgeFade };
}
