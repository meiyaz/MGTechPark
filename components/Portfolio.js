'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Section from './Section';

const projects = [
  {
    title: "Smart Home Installation",
    description: "Complete smart home setup with integrated security, lighting, and climate control.",
    bgColor: "bg-gray-200",
    location: "Coimbatore"
  },
  {
    title: "Corporate Office Security",
    description: "Advanced CCTV and access control systems for a large corporate office.",
    bgColor: "bg-gray-200",
    location: "Tiruppur"
  },
  {
    title: "Retail Store Analytics",
    description: "People counting and heatmap solutions for a retail chain to optimize store layout.",
    bgColor: "bg-gray-200",
    location: "Erode"
  },
    {
    title: "Gated Community Surveillance",
    description: "Comprehensive surveillance system for a residential complex.",
    bgColor: "bg-gray-200",
    location: "Salem"
  },
  {
    title: "Automated Warehouse Solutions",
    description: "Implementation of automated systems for inventory management.",
    bgColor: "bg-gray-200",
    location: "Coimbatore"
  },
  {
    title: "Industrial IoT Monitoring",
    description: "IoT sensors for monitoring machinery and environmental conditions.",
    bgColor: "bg-gray-200",
    location: "Tiruppur"
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainer = useRef(null);
  const intervalRef = useRef(null);

  const scroll = useCallback((index) => {
    if (scrollContainer.current) {
      const item = scrollContainer.current.children[index];
      if (item) {
        scrollContainer.current.scrollTo({ left: item.offsetLeft, behavior: 'smooth' });
      }
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % projects.length;
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
    <Section id="portfolio">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Our Recent Projects</h2>
        <div className="relative" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
          <div ref={scrollContainer} className="flex overflow-x-auto space-x-8 pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-x-0 scroll-smooth snap-x snap-mandatory no-scrollbar">
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-4/5 md:w-auto bg-card rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 snap-center">
                <div className={`w-full h-56 ${project.bgColor} flex items-center justify-center`}>
                  <span className="text-gray-500 text-lg">{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-sm font-semibold text-primary">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
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

export default Portfolio;
