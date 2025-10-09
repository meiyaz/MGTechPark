import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import TrustedBy from '../components/TrustedBy';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Services />
      <Packages />
      <Portfolio />
      <TrustedBy />
      <Testimonials />
      <Contact />
    </main>
  );
}
