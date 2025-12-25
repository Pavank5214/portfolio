import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const HackerText = ({ text, className = "", speed = 50 }) => {
    const [displayText, setDisplayText] = useState(text);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            animateText();
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    const animateText = () => {
        let iterations = 0;

        const interval = setInterval(() => {
            setDisplayText(prev =>
                prev.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3; // Controls how fast it resolves
        }, speed);
    };

    return (
        <span
            ref={ref}
            className={`font-mono ${className}`}
            onMouseEnter={animateText} // Optional: re-animate on hover
        >
            {displayText}
        </span>
    );
};
