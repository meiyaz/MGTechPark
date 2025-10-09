import Section from './Section';
import Button from './Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => (
  <Section id="contact" className="bg-muted">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
      
      {/* Left Column: Contact Info */}
      <div className="order-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Let&apos;s Connect</h2>
        <p className="text-lg text-muted-foreground mb-10">
          We&apos;re here to help you with your security and automation needs. Reach out to us via WhatsApp for a quick consultation, or use the form to send us a detailed inquiry.
        </p>

        <div className="flex flex-col space-y-6 mb-12">
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-foreground hover:text-primary transition-colors">
            <FaWhatsapp className="text-2xl mr-4 text-green-500" />
            <span>+91 98765 43210 (WhatsApp)</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center text-lg text-foreground hover:text-primary transition-colors">
            <FaPhone className="text-xl mr-4 text-primary" />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@mgtechpark.com" className="flex items-center text-lg text-foreground hover:text-primary transition-colors">
            <FaEnvelope className="text-xl mr-4 text-primary" />
            <span>info@mgtechpark.com</span>
          </a>
          <div className="flex items-start text-lg text-foreground">
            <FaMapMarkerAlt className="text-xl mr-4 mt-1 text-primary" />
            <span>83/90, MA Palanisamy Rd, Coimbatore</span>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="order-2 bg-card p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Send us a Message</h3>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
            <input type="text" id="name" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-primary focus:border-primary" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
            <input type="email" id="email" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-primary focus:border-primary" required />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">Subject</label>
            <input type="text" id="subject" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-primary focus:border-primary" required />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
            <textarea id="message" rows="5" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-primary focus:border-primary" required></textarea>
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>

    </div>
  </Section>
);

export default Contact;
