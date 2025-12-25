import { useCallback } from 'react';

// Short, pleasant mechanical click sound
const CLICK_SOUND = "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU..."; // Simplified for brevity, will use specific frequency beep

// Instead of base64 which is huge, let's use Web Audio API for a procedurally generated beep
// This is lighter and cleaner

export const useUISound = () => {
    const playHover = useCallback(() => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime); // Low freq "hum"
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime); // Very quiet
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
    }, []);

    const playClick = useCallback(() => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // High freq "click"

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }, []);

    return { playHover, playClick };
};
