import { useEffect, useRef } from 'react';

export const useMouseOutside = (setMenu) => {
    const wrapRef = useRef(null);
    const outClick = (event) => {
        if (wrapRef.current && !wrapRef.current.contains(event.target)) {
            setMenu();
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', outClick);
        return () => {
            document.removeEventListener('mousedown', outClick);
        };
    }, []);

    return wrapRef;
};
