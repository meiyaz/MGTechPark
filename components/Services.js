import Section from './Section';
import { FaTools, FaLifeRing, FaChartLine } from 'react-icons/fa';

const servicesData = [
  { icon: FaTools, title: 'Seamless Installation', description: 'Our certified experts ensure a flawless setup of your security and automation systems.' },
  { icon: FaLifeRing, title: '24/7 Priority Support', description: 'We provide continuous monitoring and instant support to keep you protected around the clock.' },
  { icon: FaChartLine, title: 'Strategic Security Consulting', description: 'We partner with you to develop a long-term security strategy that adapts to your evolving needs.' },
];

const Services = () => (
  <Section id="services" className="bg-background">
    <h2 className='text-4xl font-bold text-center mb-12 text-foreground'>Our Commitment to You</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {servicesData.map((service, index) => (
        <div key={index} className="bg-card p-8 rounded-lg shadow-lg text-center">
           <div className="flex justify-center mb-4">
            <service.icon className="text-5xl text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-card-foreground">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Services;
