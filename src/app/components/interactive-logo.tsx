"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function InteractiveLogo() {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let rotateX = 0;
        let rotateY = 0;
        let targetRotateX = 0;
        let targetRotateY = 0;
        let animationFrameId: number;
        let lastMouseMoveTime = 0;
        const throttleDelay = 16;

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastMouseMoveTime < throttleDelay) return;
            lastMouseMoveTime = now;

            if (!containerRef.current) return;

            const container = containerRef.current.getBoundingClientRect();
            const centerX = container.left + container.width / 2;
            const centerY = container.top + container.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Calculate tilt angles
            targetRotateY = (deltaX / container.width) * 30; // Max 30deg tilt
            targetRotateX = -(deltaY / container.height) * 30;
        };

        const animate = () => {
            rotateX += (targetRotateX - rotateX) * 0.1;
            rotateY += (targetRotateY - rotateY) * 0.1;

            if (cardRef.current) {
                cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-80 h-80 flex items-center justify-center">
            <div
                ref={cardRef}
                className="w-64 h-64 relative transition-transform duration-100 ease-out will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Glow effect behind */}
                <div className="absolute inset-0 rounded-full transform translate-z-[-50px]"></div>

                {/* The Logo */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    <Image
                        src="/images/logo.png"
                        alt="Interactive Logo"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
