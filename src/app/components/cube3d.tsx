"use client";

import { useEffect, useRef } from "react";

export default function Cube3D() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rotateX = 0;
    let rotateY = 0;
    let rotateZ = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let animationFrameId: number;
    let lastMouseMoveTime = 0;
    const throttleDelay = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseMoveTime < throttleDelay) return;
      lastMouseMoveTime = now;

      if (!containerRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.left + container.width / 2;
      const centerY = container.top + container.height / 2;

      // Calculate the vector from cube center to mouse
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Calculate angles to point at the cursor
      targetRotateY = (deltaX / container.width) * 60; // Reduced from 80 for smoother motion
      targetRotateX = -(deltaY / container.height) * 60;
    };

    const animate = () => {
      // Smooth interpolation for fluid movement
      rotateX += (targetRotateX - rotateX) * 0.08; // Slightly reduced for smoother motion
      rotateY += (targetRotateY - rotateY) * 0.08;

      // Continuous rotation on Z axis - reduced speed
      rotateZ += 0.3; // Reduced from 0.5

      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
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
    <div ref={containerRef} className="cube-container">
      <div ref={cubeRef} className="cube">
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
          <div key={face} className={`cube-face ${face}`}>
            <div className="relative w-32 h-32 bg-white/90 rounded-2xl p-4 shadow-inner flex items-center justify-center">
              {/* Using standard img tag for 3D transform compatibility if Next/Image has issues, 
                   but trying Next/Image first as it's standard practice */}
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain opacity-90"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .cube-container {
          perspective: 1000px;
          width: 300px;
          height: 300px;
          position: relative;
          margin: 0 auto;
          will-change: transform;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: none;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0); /* Force GPU acceleration */
        }

        .cube-face {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 2px solid rgba(255, 107, 53, 0.6);
          background: linear-gradient(
            135deg,
            rgba(255, 107, 53, 0.15) 0%,
            rgba(255, 140, 66, 0.15) 100%
          );
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.3);
          box-shadow: 
            inset 0 0 60px rgba(255, 107, 53, 0.3),
            0 0 40px rgba(255, 107, 53, 0.2);
          will-change: transform;
          backface-visibility: hidden;
        }

        .face-content {
          font-size: 32px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 0 20px rgba(255, 107, 53, 0.8);
          z-index: 10;
        }

        .front {
          transform: rotateY(0deg) translateZ(150px);
        }

        .back {
          transform: rotateY(180deg) translateZ(150px);
        }

        .right {
          transform: rotateY(90deg) translateZ(150px);
        }

        .left {
          transform: rotateY(-90deg) translateZ(150px);
        }

        .top {
          transform: rotateX(90deg) translateZ(150px);
        }

        .bottom {
          transform: rotateX(-90deg) translateZ(150px);
        }

        /* Responsive sizing */
        @media (max-width: 768px) {
          .cube-container {
            width: 200px;
            height: 200px;
          }

          .cube-face {
            width: 200px;
            height: 200px;
          }

          .front {
            transform: rotateY(0deg) translateZ(100px);
          }

          .back {
            transform: rotateY(180deg) translateZ(100px);
          }

          .right {
            transform: rotateY(90deg) translateZ(100px);
          }

          .left {
            transform: rotateY(-90deg) translateZ(100px);
          }

          .top {
            transform: rotateX(90deg) translateZ(100px);
          }

          .bottom {
            transform: rotateX(-90deg) translateZ(100px);
          }
        }
      `}</style>
    </div>
  );
}
