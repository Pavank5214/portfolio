import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MobileAwareCursor = () => {
    // Optimization: Use MotionValues to bypass React render cycle for mouse movement
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on desktop
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) return;

        setIsVisible(true);

        const onMouseMove = (e) => {
            // Update MotionValues directly - NO RE-RENDER
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const onMouseEnter = (e) => {
            const target = e.target;
            // Check if target is clickable
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

        const onMouseDown = () => setIsHovering(true);
        const onMouseUp = () => setIsHovering(false);

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseEnter, true);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseEnter, true);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* <style>{`
        body, a, button { cursor: none !important; }
      `}</style> */}

            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            >
                {/* Main Dot */}
                <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                        scale: isHovering ? 0.5 : 1
                    }}
                    transition={{ duration: 0.2 }}
                />

                {/* Expanding Ring */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full bg-white/10"
                    animate={{
                        width: isHovering ? 48 : 0,
                        height: isHovering ? 48 : 0,
                        opacity: isHovering ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </>
    );
};
