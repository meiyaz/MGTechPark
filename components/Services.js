'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Section from './Section';
import { FaShieldAlt, FaCogs, FaLightbulb } from 'react-icons/fa';

const services = [
  {
    title: "Smart Security",
    description: "Protect your property with our advanced, AI-powered surveillance and access control systems.",
    icon: <FaShieldAlt className="text-5xl text-primary" />,
  },
  {
    title: "Automation",
    description: "Streamline your operations and enhance efficiency with our custom automation solutions.",
    icon: <FaCogs className="text-5xl text-primary" />,
  },
  {
    title: "Energy Management",
    description: "Optimize your energy consumption and reduce costs with our smart energy management systems.",
    icon: <FaLightbulb className="text-5xl text-primary" />,
  },
  {
    title: "24/7 Monitoring",
    description: "Our dedicated team provides round-the-clock monitoring to ensure your peace of mind.",
    icon: <FaShieldAlt className="text-5xl text-primary" />,
  },
  {
    title: "Custom Solutions",
    description: "We design and implement bespoke solutions tailored to your specific security and automation needs.",
    icon: <FaCogs className="text-5xl text-primary" />,
  },
];

const Services = () => {
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
        const newIndex = (prevIndex + 1) % services.length;
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
    <Section id="services" className="bg-muted">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Comprehensive Solutions</h2>
        <div className="relative" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
          <div ref={scrollContainer} className="flex overflow-x-auto space-x-8 pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-x-0 scroll-smooth snap-x snap-mandatory no-scrollbar">
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-4/5 md:w-auto bg-card p-8 rounded-lg shadow-lg text-center snap-center">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
            {services.map((_, index) => (
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

export default Services;
