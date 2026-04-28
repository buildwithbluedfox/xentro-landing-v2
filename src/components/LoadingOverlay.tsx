"use client";

import { useEffect, useRef, useState } from "react";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        video.muted = true;
        video.play().catch(() => {
          // ignore if still blocked
        });
      }
    };

    playVideo();

    const timeoutId = window.setTimeout(() => {
      setIsFadingOut(true);
    }, 9000);

    return () => {
      window.clearTimeout(timeoutId);
      video.pause();
    };
  }, []);

  useEffect(() => {
    if (!isFadingOut) return;

    const fadeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 700);

    return () => {
      window.clearTimeout(fadeTimer);
    };
  }, [isFadingOut]);

  const handleVideoEnd = () => {
    setIsFadingOut(true);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050812] text-white transition-opacity duration-700 ease-out ${isFadingOut ? "opacity-0" : "opacity-100"}`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        muted
        playsInline
        autoPlay
        onEnded={handleVideoEnd}
        preload="auto"
      >
        <source src="/xentro%20loading.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
    </div>
  );
}
