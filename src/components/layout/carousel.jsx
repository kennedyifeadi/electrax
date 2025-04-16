import { useEffect, useRef, useState } from "react";
import img2 from "../../assets/Images/plane black background.avif";
import img3 from "../../assets/Images/plane white background-p-1600.avif";
import img1 from "../../assets/Images/sunset 2 wide.avif";

const images = [img1, img2, img3];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const next = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrent((prev) => (prev + 1) % images.length);
    }
  };

  const prev = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out w-full h-[90%] mb-16"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 w-full px-8 flex justify-between items-center">
        {/* Dots on the bottom left */}
        <div className="space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4  ${
                current === index ? "bg-black" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Prev/Next on the bottom right */}
        <div className="flex space-x-2">
          <button
            onClick={prev}
            className="px-4 py-2 bg-white text-black rounded border border-black text-lg hover:bg-gray-200"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-white text-black text-lg border border-black rounded hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
