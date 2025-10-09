'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact', isButton: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-primary">MG Tech Park</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.isButton ? (
              <Button key={link.href} href={link.href} className="ml-4">{link.label}</Button>
            ) : (
              <Link key={link.href} href={link.href}>
                <span className="text-foreground hover:text-primary transition-colors">{link.label}</span>
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-background py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.isButton ? (
                <Button key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Button>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span onClick={() => setIsOpen(false)} className="block py-2 text-center text-foreground hover:text-primary transition-colors">{link.label}</span>
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;