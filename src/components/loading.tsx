"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initial page load with countdown
    const totalDuration = 2000; // 2 seconds total
    const interval = 20; // Update every 20ms
    const steps = totalDuration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          return 100;
        }
        return newCount;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Page transition
    setIsPageTransitioning(true);
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading && !isPageTransitioning) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center space-y-4">
          {/* Countdown display */}
          <div className="text-4xl font-bold text-foreground">
            {Math.round(count)}%
          </div>
          {/* Loading bar */}
          <div className="w-48 h-1 bg-foreground/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-foreground transition-all duration-200 ease-out"
              style={{ width: `${count}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 