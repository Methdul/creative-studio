import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const checkImages = () => {
      const images = Array.from(document.images);
      if (images.length === 0) {
        setImagesLoaded(true);
        return;
      }
      const loaded = images.every((img) => img.complete);
      if (loaded) {
        setImagesLoaded(true);
      }
    };

    // Check periodically
    const imgInterval = setInterval(checkImages, 100);
    
    // Also check on window load
    window.addEventListener('load', () => setImagesLoaded(true));

    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slow down as we reach 90% if images aren't loaded yet
        if (prev >= 90 && !imagesLoaded) {
          return prev + 0.1; 
        }
        
        if (prev >= 100) {
          clearInterval(interval);
          clearInterval(imgInterval);
          setTimeout(() => setFadeOut(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(imgInterval);
      window.removeEventListener('load', () => setImagesLoaded(true));
    };
  }, [imagesLoaded]);

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
