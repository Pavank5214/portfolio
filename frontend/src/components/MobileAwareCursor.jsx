import React, { useEffect, useState } from 'react';

export const MobileAwareCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on desktop
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) return;

        setIsVisible(true);

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = (e) => {
            // Check if target is clickable
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        // Use capture to catch events early
        document.addEventListener('mouseover', onMouseEnter, true);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseEnter, true);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <style>{`
        body, a, button { cursor: none !important; }
      `}</style>
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`
                }}
            >
                {/* Main Dot */}
                <div
                    className={`
            w-2 h-2 bg-white rounded-full transition-transform duration-100 ease-out
            ${isHovering ? 'scale-[0.5]' : 'scale-100'}
          `}
                />

                {/* Expanding Ring */}
                <div
                    className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            border border-white rounded-full bg-white/10
            transition-all duration-300 ease-out
            ${isHovering ? 'w-12 h-12 opacity-100' : 'w-0 h-0 opacity-0'}
          `}
                />
            </div>
        </>
    );
};
