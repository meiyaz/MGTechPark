'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Section from './Section';

const logos = [
  { name: 'Brand 1', bgColor: 'bg-gray-200' },
  { name: 'Brand 2', bgColor: 'bg-gray-200' },
  { name: 'Brand 3', bgColor: 'bg-gray-200' },
  { name: 'Brand 4', bgColor: 'bg-gray-200' },
  { name: 'Brand 5', bgColor: 'bg-gray-200' },
  { name: 'Brand 6', bgColor: 'bg-gray-200' },
  { name: 'Brand 7', bgColor: 'bg-gray-200' },
  { name: 'Brand 8', bgColor: 'bg-gray-200' },
  { name: 'Brand 9', bgColor: 'bg-gray-200' },
];

const TrustedBy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainer = useRef(null);
  const intervalRef = useRef(null);

  const scroll = useCallback((index) => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.offsetWidth * index;
      scrollContainer.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % logos.length;
        scroll(newIndex);
        return newIndex;
      });
    }, 3000);
  }, [scroll]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    scroll(index);
    stopAutoScroll();
    startAutoScroll();
  };

  return (
    <Section id="trusted-by">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">Trusted by Leading Brands</h2>
        <div className="relative" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
          <div ref={scrollContainer} className="flex overflow-x-auto space-x-8 pb-4 md:flex-wrap md:justify-center md:items-center md:gap-8 md:space-x-0 scroll-smooth snap-x snap-mandatory no-scrollbar">
            {logos.map((logo, index) => (
              <div key={index} className={`flex-shrink-0 h-12 w-36 ${logo.bgColor} flex items-center justify-center rounded-lg snap-center`}>
                <span className="text-gray-500">{logo.name}</span>
              </div>
            ))}
          </div>
          <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
            {logos.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full ${activeIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrustedBy;
