import React, { useEffect, useRef } from "react";
import blackholeVideo from "../assets/blackhole.webm";

const ScrollBackground = () => {
    const canvasRef = useRef(null);

    // Track scroll velocity
    const lastScrollY = useRef(0);
    const currentSuction = useRef(0);

    // Track mouse for gravity effect
    const mouse = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        resizeCanvas();

        // ---------------------------------------------------------
        // Star Logic
        // ---------------------------------------------------------
        const stars = [];
        const numStars = 1500;

        // Colors for shift
        // White -> Cyan -> Purple
        const getColor = (speed) => {
            // speed ranges roughly 0.2 (idle) to 5.0+ (fast suction)
            if (speed < 0.5) return "255, 255, 255"; // White
            if (speed < 2.0) return "103, 232, 249"; // Cyan (Tailwind cyan-300)
            return "168, 85, 247"; // Purple (Tailwind purple-500)
        };

        class Star {
            constructor() {
                this.reset(true);
            }

            reset(random = false) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.2;
                this.baseSpeed = Math.random() * 0.3 + 0.1;
                this.opacity = Math.random() * 0.7 + 0.3;
                this.color = "255, 255, 255";
            }

            update(scrollY, suctionForce) {
                // --- 1. Black Hole Attraction ---
                const centerX = canvas.width / 2;
                const centerY = 0 - scrollY;

                const dx = centerX - this.x;
                const dy = centerY - this.y;
                const distToHole = Math.sqrt(dx * dx + dy * dy);
                const nx = dx / distToHole;
                const ny = dy / distToHole;

                // Tangent (Rotation)
                const tx = ny;
                const ty = -nx;

                const rotationSpeed = 0.5;
                const baseSuction = 0.2;
                const dynamicSuction = suctionForce * 0.2; // Keep the slow speed
                const totalSuction = baseSuction + dynamicSuction;

                let ax = (tx * rotationSpeed) + (nx * totalSuction);
                let ay = (ty * rotationSpeed) + (ny * totalSuction);

                // --- 2. Mouse Gravity (Idea #3) ---
                // Pull stars towards mouse if close
                const mdx = mouse.current.x - this.x;
                const mdy = mouse.current.y - this.y;
                const distToMouse = Math.sqrt(mdx * mdx + mdy * mdy);

                if (distToMouse < 200) {
                    const pullStrength = (200 - distToMouse) * 0.02;
                    ax += (mdx / distToMouse) * pullStrength;
                    ay += (mdy / distToMouse) * pullStrength;
                }

                // Apply Forces
                this.x += ax;
                this.y += ay;

                // --- 3. Color Shift (Idea #4) ---
                // Change color based on total velocity magnitude
                const speed = Math.sqrt(ax * ax + ay * ay);
                this.color = getColor(speed);

                // Twinkle
                if (Math.random() > 0.99) this.opacity = Math.random() * 0.8 + 0.2;

                // Reset Logic
                if (distToHole < 20 || this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
                    this.reset();
                    // Spawn mainly at bottom
                    if (Math.random() > 0.2) {
                        this.x = Math.random() * canvas.width;
                        this.y = canvas.height + 10;
                    } else {
                        this.x = Math.random() > 0.5 ? -10 : canvas.width + 10;
                        this.y = Math.random() * canvas.height;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                // Use rgb for color shift support
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        // ---------------------------------------------------------
        // Shooting Star Logic (Idea #1)
        // ---------------------------------------------------------
        const shootingStars = [];

        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height * 0.5; // Top half
                this.len = Math.random() * 80 + 10;
                this.speed = Math.random() * 10 + 6;
                this.size = Math.random() * 1 + 0.1;
                // Angle towards bottom-right roughly
                this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
                this.active = false;
            }

            update() {
                if (this.active) {
                    this.x -= this.speed;
                    this.y += this.speed;
                    if (this.x < 0 || this.y >= canvas.height) {
                        this.active = false;
                        this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
                    }
                } else {
                    if (this.waitTime < new Date().getTime()) {
                        this.active = true;
                        this.x = Math.random() * canvas.width;
                        this.y = -50; // Start off screen top
                    }
                }
            }

            draw() {
                if (!this.active) return;

                ctx.strokeStyle = "rgba(255, 255, 255, " + Math.random() + ")";
                ctx.lineWidth = this.size;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.len, this.y - this.len);
                ctx.stroke();
            }
        }

        // Create a few shooting stars
        for (let i = 0; i < 3; i++) {
            shootingStars.push(new ShootingStar());
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        // ---------------------------------------------------------
        // Animation Loop
        // ---------------------------------------------------------
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const scrollY = window.scrollY;

            // Calculate Scroll Velocity
            const deltaY = Math.abs(scrollY - lastScrollY.current);
            lastScrollY.current = scrollY;

            const targetSuction = Math.min(deltaY, 20);
            if (targetSuction > currentSuction.current) {
                currentSuction.current = currentSuction.current * 0.9 + targetSuction * 0.1;
            } else {
                currentSuction.current = currentSuction.current * 0.95;
            }
            if (currentSuction.current < 0.1) currentSuction.current = 0;

            // Draw Normal Stars
            stars.forEach(star => {
                star.update(scrollY, currentSuction.current);
                star.draw();
            });

            // Draw Shooting Stars
            shootingStars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-[60vh] -z-20 overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute -top-[90%] left-0 w-full h-[200%] object-cover opacity-80 rotate-180"
                >
                    <source src={blackholeVideo} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
            </div>

            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            />
        </>
    );
};

export default ScrollBackground;
