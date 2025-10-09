import Section from './Section';

const logos = [
  { name: 'Brand 1', bgColor: 'bg-gray-200' },
  { name: 'Brand 2', bgColor: 'bg-gray-200' },
  { name: 'Brand 3', bgColor: 'bg-gray-200' },
  { name: 'Brand 4', bgColor: 'bg-gray-200' },
  { name: 'Brand 5', bgColor: 'bg-gray-200' },
  { name: 'Brand 6', bgColor: 'bg-gray-200' },
  { name: 'Brand 7', bgColor: 'bg-gray-200' },
  { name: 'Brand 8', bgColor: 'bg-gray-200' },
  { name: 'Brand 9', bgColor: 'bg-gray-200' },
 ];

const TrustedBy = () => (
  <Section id="trusted-by">
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-10 text-foreground">Trusted by Leading Brands</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((logo, index) => (
          <div key={index} className={`h-12 w-36 ${logo.bgColor} flex items-center justify-center rounded-lg`}>
            <span className="text-gray-500">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default TrustedBy;
