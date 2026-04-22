import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (fadeOut && progress >= 100) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center animate-fade-up">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-20 w-20 object-contain mb-6 animate-pulse"
        />
        <h1 className="font-display text-2xl tracking-tight mb-8">Creative Studio</h1>
        
        <div className="w-48 h-1 bg-border rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Establishing focus...
        </div>
      </div>
    </div>
  );
};
