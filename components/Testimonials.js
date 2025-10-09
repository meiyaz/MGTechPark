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

const Testimonials = () => (
  <Section id="testimonials">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Real Stories, Real Security</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.quote}&quot;</p>
            <div className="font-bold text-lg text-foreground">{testimonial.name}</div>
            <div className="text-sm text-primary">{testimonial.location}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Testimonials;
