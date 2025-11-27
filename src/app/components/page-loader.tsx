"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animation sequence timing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Reduced to 2s

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="logo-container">
          <Image
            src="/images/logo.png"
            alt="Loading..."
            width={120}
            height={120}
            className="loader-logo"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        .page-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeOut 0.8s ease-out 1.5s forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            pointer-events: none;
          }
        }

        .loader-content {
          animation: zoomOut 0.8s ease-in-out 1.2s forwards;
        }

        @keyframes zoomOut {
          to {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .logo-container {
          width: 120px;
          height: 120px;
          position: relative;
        }

        .loader-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          animation: pulse 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.4));
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.4));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 40px rgba(255, 107, 53, 0.6));
          }
        }
      `}</style>
    </div>
  );
}
