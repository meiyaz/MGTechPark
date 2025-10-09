import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'MG Tech Park | Smart Security & Automation Solutions',
  description: 'MG Tech Park offers advanced CCTV, IP camera, and Wi-Fi surveillance systems, along with smart automation solutions for homes and businesses in Coimbatore.',
  keywords: 'smart security, automation, CCTV, IP camera, surveillance, MG Tech Park, Coimbatore',
  openGraph: {
    title: 'MG Tech Park | Smart Security & Automation Solutions',
    description: 'Your trusted partner for intelligent security and automation in Coimbatore.',
    type: 'website',
    images: [
      {
        url: '/about-us.jpg',
        width: 800,
        height: 600,
        alt: 'Smart Home Automation Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MG Tech Park | Smart Security & Automation Solutions',
    description: 'Advanced security and automation solutions in Coimbatore.',
    images: ['/about-us.jpg'],
  },
};


const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
