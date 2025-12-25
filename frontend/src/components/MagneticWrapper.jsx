import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useUISound } from '../hooks/useUISound';

export const MagneticWrapper = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { playHover, playClick } = useUISound();

    // Use MotionValues for performance - avoids React re-renders
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add spring physics for smooth return
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Update MotionValues directly
        x.set(middleX * 0.5);
        y.set(middleY * 0.5);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            onMouseMove={handleMouse}
            onMouseEnter={playHover}
            onMouseDown={playClick}
            onMouseLeave={reset}
            style={{ x: xSpring, y: ySpring }}
        >
            {children}
        </motion.div>
    );
};
