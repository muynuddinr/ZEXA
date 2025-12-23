'use client';

import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#08b48d]/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 group cursor-pointer">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-br from-[#08b48d] to-[#00d4aa] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-[#08b48d] to-[#00d4aa] bg-clip-text text-transparent">
                ZEXO
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#08b48d] relative group transition-colors duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#08b48d] to-[#00d4aa] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex px-6 py-2 bg-linear-to-r from-[#08b48d] to-[#00d4aa] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#08b48d]/50 transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
