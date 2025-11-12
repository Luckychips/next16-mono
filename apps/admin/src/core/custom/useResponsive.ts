import { useEffect, useState } from 'react';

type Size = {
    width: number;
    height: number;
    defaultFullWidth?: number;
}

export default function useResponsive(width: number, height: number, defaultFullWidth = 250) {
    const [size, setSize] = useState<Size>({
        width: 0,
        height: 0,
        defaultFullWidth: 0,
    });

    useEffect(() => {
        const resize = () => {
            const isWebFromListener = window.innerWidth > 375;
            let w = width;
            w = isWebFromListener ? defaultFullWidth : window.innerWidth - 20;
            setSize({ width: w, height: isWebFromListener ? height : 250, defaultFullWidth });
        };

        window.addEventListener('resize', resize);
        resize();
        return () => {
            window.removeEventListener('resize', resize);
        }
    }, []);

    return size;
}