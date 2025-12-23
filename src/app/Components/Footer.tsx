'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#08b48d]/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#08b48d]/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">
              ZEXO<span className="bg-gradient-to-r from-[#08b48d] to-[#00d4aa] bg-clip-text text-transparent">Agency</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              We create innovative digital solutions that drive growth and transform businesses.
              From web development to AI integration, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ml" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  AI & ML
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#08b48d]" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400">hello@ZEXOagency.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#08b48d]" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#08b48d]" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ZEXOAgency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#08b48d] transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;