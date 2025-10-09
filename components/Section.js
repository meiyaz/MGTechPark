const Section = ({ id, children }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-4">{children}</div>
  </section>
);

export default Section;
