import Section from './Section';

const features = [
  {
    title: "24/7 Monitoring",
    description: "Our advanced monitoring systems keep a watchful eye on your property around the clock, so you can have peace of mind.",
  },
  {
    title: "Mobile App Access",
    description: "Control and monitor your security and automation systems from anywhere with our intuitive mobile app.",
  },
  {
    title: "High-Quality Hardware",
    description: "We use only the best hardware from trusted brands to ensure the reliability and longevity of your systems.",
  },
  {
    title: "Expert Installation",
    description: "Our certified technicians provide professional and clean installations, ensuring your systems are set up for optimal performance.",
  },
];

const Features = () => (
  <Section id="features">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Features;
