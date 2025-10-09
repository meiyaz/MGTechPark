import Button from './Button';
import { FaShieldAlt, FaLightbulb, FaRocket } from 'react-icons/fa';

const Hero = () => (
  <section className="bg-background">
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-foreground">Elevate Your Security & Automation</h1>
      <p className="text-xl md:text-2xl mb-12 text-muted-foreground">Intelligent solutions for a safer, smarter world.</p>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-5xl mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-2 text-foreground">Advanced Protection</h3>
          <p className="text-muted-foreground">State-of-the-art technology to safeguard what matters most.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLightbulb className="text-5xl mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-2 text-foreground">Smart Automation</h3>
          <p className="text-muted-foreground">Creative and intelligent solutions for modern living.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaRocket className="text-5xl mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-2 text-foreground">Seamless Service</h3>
          <p className="text-muted-foreground">Professional installation and dedicated support.</p>
        </div>
      </div>
      <Button href="#contact">Request a Consultation</Button>
    </div>
  </section>
);

export default Hero;
