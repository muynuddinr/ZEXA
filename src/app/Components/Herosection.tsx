'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white pt-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#08b48d]/10 rounded-full px-4 py-2 border border-[#08b48d]/30">
              <Sparkles className="w-4 h-4 text-[#08b48d]" />
              <span className="text-sm font-medium text-[#08b48d]">Welcome to ZEXO Agency</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Digital
                <span className="block bg-gradient-to-r from-[#08b48d] to-[#08b48d] bg-clip-text text-transparent">
                  Presence
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We create stunning digital experiences that drive growth and engagement. From web design to full-stack development, we've got you covered.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#08b48d] to-[#08b48d] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#08b48d]/40 transform hover:scale-105 transition-all duration-300 group">
                Get Started Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#08b48d] text-[#08b48d] font-semibold rounded-lg hover:bg-[#08b48d]/5 transition-all duration-300">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">40+</p>
                <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-600 mt-1">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#08b48d]/20 to-[#08b48d]/5 rounded-3xl"></div>
            
            {/* Floating cards */}
            <div className="absolute top-10 right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#08b48d] rounded-full"></div>
                <p className="text-sm font-semibold text-gray-900">Design</p>
              </div>
              <p className="text-xs text-gray-600">Beautiful & responsive UI/UX design</p>
            </div>

            <div className="absolute bottom-20 left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs transform hover:scale-105 transition-transform delay-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#08b48d] rounded-full"></div>
                <p className="text-sm font-semibold text-gray-900">Development</p>
              </div>
              <p className="text-xs text-gray-600">Fast, scalable & secure solutions</p>
            </div>

            <div className="absolute bottom-10 right-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs transform hover:scale-105 transition-transform delay-200">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-[#08b48d] rounded-full"></div>
                <p className="text-sm font-semibold text-gray-900">Strategy</p>
              </div>
              <p className="text-xs text-gray-600">Data-driven digital strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
