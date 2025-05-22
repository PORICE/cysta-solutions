import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string; // Optional thumbnail for videos
}

interface ImageSliderProps {
  images: (string | MediaItem)[];
  interval?: number;
  className?: string;
};

export function ImageSlider({ 
  images, 
  interval = 5000, 
  className = "" 
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Normalize media items to handle both string URLs and MediaItem objects
  const mediaItems = images.map(item => 
    typeof item === 'string' 
      ? { type: 'image' as const, url: item }
      : item
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, interval);

    return () => clearInterval(timer);
  }, [mediaItems.length, interval]);

  // Pause videos when they're not in view
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex && mediaItems[index]?.type === 'video') {
          video.play().catch(e => console.error('Video play failed:', e));
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex, mediaItems]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-black"
        >
          {mediaItems[currentIndex]?.type === 'image' ? (
            <img
              src={mediaItems[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
          ) : (
            <video
              ref={el => videoRefs.current[currentIndex] = el}
              src={mediaItems[currentIndex].url}
              className="w-full h-full object-contain"
              controls
              loop
              muted
              playsInline
              poster={mediaItems[currentIndex].thumbnail}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-6 scale-125" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
