'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Section from './Section';

const testimonials = [
  {
    quote: "The smart security system from MG Tech Park has been a game-changer for our family. We feel so much safer now.",
    name: "Priya Sharma",
    location: "Coimbatore",
  },
  {
    quote: "I was impressed by the professionalism and expertise of the MG Tech Park team. They delivered a solution that perfectly matched our needs.",
    name: "Arun Kumar",
    location: "Coimbatore",
  },
  {
    quote: "Our business has seen a significant improvement in security and efficiency since we partnered with MG Tech Park. Highly recommended!",
    name: "Anjali Menon",
    location: "Tiruppur",
  },
  {
    quote: "எங்கள் வீட்டிற்கு MG டெக் பார்க் ஸ்மார்ட் செக்யூரிட்டி சிஸ்டம் அமைத்த பிறகு நாங்கள் மிகவும் பாதுகாப்பாக உணர்கிறோம். அவர்களின் சேவை மிகவும் அருமை.",
    name: "சுகுமார்",
    location: "ஈரோடு",
  },
  {
    quote: "MG டெக் பார்க் குழுவினரின் நிபுணத்துவம் மற்றும் தொழில்முறை என்னை மிகவும் கவர்ந்தது. எங்கள் தேவைகளுக்கு சரியான தீர்வை வழங்கியுள்ளனர்.",
    name: "கார்த்திக்",
    location: "சேலம்",
  },
];

const Testimonials = () => {
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
        const newIndex = (prevIndex + 1) % testimonials.length;
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
    <Section id="testimonials">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Real Stories, Real Security</h2>
        <div className="relative" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
          <div ref={scrollContainer} className="flex overflow-x-auto space-x-8 pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-x-0 scroll-smooth snap-x snap-mandatory no-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-4/5 md:w-auto bg-card p-6 md:p-8 rounded-lg shadow-lg flex flex-col items-center text-center snap-center">
                <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="font-bold text-lg text-foreground">{testimonial.name}</div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${testimonial.location}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  {testimonial.location}
                </a>
              </div>
            ))}
          </div>
          <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
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

export default Testimonials;
