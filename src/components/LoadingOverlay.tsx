"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_SRC = "/xentro%20loading.mp4";
const MOBILE_SRC  = "/loading%20screen%20mobile.mp4";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [videoSrc, setVideoSrc] = useState(DESKTOP_SRC);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Pick the right source based on viewport width before first paint
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    setVideoSrc(isMobile ? MOBILE_SRC : DESKTOP_SRC);
  }, []);

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
  }, [videoSrc]); // re-run when source resolves so play() fires after src is set

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
        key={videoSrc}           /* force remount when src changes */
        ref={videoRef}
        className="h-full w-full object-cover"
        muted
        playsInline
        autoPlay
        onEnded={handleVideoEnd}
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
