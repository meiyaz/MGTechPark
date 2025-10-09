import Section from './Section';
import Button from './Button';

const packages = [
  {
    name: "Starter Security",
    price: "₹15,999",
    features: [
      "2 HD CCTV Cameras",
      "1 DVR/NVR with 500GB Storage",
      "Mobile App Access",
      "Basic Installation",
    ],
    popular: false,
  },
  {
    name: "Smart Home Essentials",
    price: "₹29,999",
    features: [
      "4 Full HD IP Cameras",
      "1 NVR with 1TB Storage",
      "Smart Lighting (2 Rooms)",
      "Voice Assistant Integration",
      "Pro Installation",
    ],
    popular: true,
  },
  {
    name: "Business Advanced",
    price: "₹59,999",
    features: [
      "8 4K IP Cameras",
      "1 NVR with 4TB Storage",
      "Automated Access Control",
      "24/7 Monitoring Support",
      "Premium Installation",
    ],
    popular: false,
  },
];

const Packages = () => (
  <Section id="packages">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Our Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className={`bg-card p-6 md:p-8 rounded-lg shadow-lg flex flex-col ${pkg.popular ? 'border-2 border-primary' : ''}`}>
            {pkg.popular && <p className="text-sm font-bold text-primary mb-2 self-center">MOST POPULAR</p>}
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{pkg.name}</h3>
            <p className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">{pkg.price}</p>
            <ul className="text-left mb-8 space-y-2 text-muted-foreground flex-grow">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="#contact">Choose Plan</Button>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Packages;
