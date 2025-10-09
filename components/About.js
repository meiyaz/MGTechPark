import Section from './Section';
import Button from './Button';

const About = () => (
  <Section id="about">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-gray-500 text-lg">Our Team</span>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-6 text-foreground">About MG Tech Park</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We are a team of passionate security professionals and tech enthusiasts dedicated to providing state-of-the-art automation and security solutions. Based in Coimbatore, we serve clients across the region with a commitment to quality, reliability, and customer satisfaction.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Our mission is to bring peace of mind to our clients by securing their homes and businesses with the latest technology and expert service.
        </p>
        <Button href="#contact" type="secondary">Learn More</Button>
      </div>
    </div>
  </Section>
);

export default About;
