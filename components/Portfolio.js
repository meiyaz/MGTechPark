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

const Portfolio = () => (
  <Section id="portfolio">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Our Recent Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
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
    </div>
  </Section>
);

export default Portfolio;
