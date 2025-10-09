
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-card text-card-foreground py-12">
    <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div>
                <h3 className="text-2xl font-bold mb-4">MG Tech Park</h3>
                <p className="text-muted-foreground">Your trusted partner in smart security and automation solutions. We provide cutting-edge technology to protect what matters most to you.</p>
            </div>
            
            <div>
                <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center justify-center md:justify-start">
                        <FaMapMarkerAlt className="w-5 h-5 mr-3 text-primary" />
                        <span>83/90, MA Palanisamy Rd, Coimbatore</span>
                    </li>
                    <li className="flex items-center justify-center md:justify-start">
                        <FaPhone className="w-5 h-5 mr-3 text-primary" />
                        <a href="tel:+9107092979999">+91 070929 79999</a>
                    </li>
                    <li className="flex items-center justify-center md:justify-start">
                        <FaEnvelope className="w-5 h-5 mr-3 text-primary" />
                        <a href="mailto:info@mgtechpark.com">info@mgtechpark.com</a>
                    </li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex justify-center md:justify-start space-x-6">
                    <a href="https://instagram.com/mgtechpark/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <FaInstagram size={28} />
                    </a>
                    <a href="https://www.facebook.com/mgtechpark/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <FaFacebook size={28} />
                    </a>
                    <a href="https://wa.me/917092979999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <FaWhatsapp size={28} />
                    </a>
                </div>
            </div>

        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} MG Tech Park. All Rights Reserved.</p>
        </div>
    </div>
  </footer>
);

export default Footer;
