'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  const contactLink = { href: '#contact', label: 'Contact' };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-primary">MG Tech Park</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-foreground hover:text-primary transition-colors">{link.label}</span>
            </Link>
          ))}
          <Button href={contactLink.href} className="ml-4">{contactLink.label}</Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <Button href={contactLink.href} variant="outline" size="sm">{contactLink.label}</Button>
          <button ref={menuButtonRef} onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <nav ref={navRef} className="md:hidden bg-background py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span onClick={() => setIsOpen(false)} className="block py-2 text-center text-foreground hover:text-primary transition-colors">{link.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
