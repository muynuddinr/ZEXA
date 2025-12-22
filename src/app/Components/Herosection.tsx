'use client';

import { ArrowRight, Sparkles, Zap, Rocket, Target } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-br from-[#08b48d]/30 via-purple-600/20 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-linear-to-tr from-[#08b48d]/20 via-blue-600/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Content */}
        <div className="text-center space-y-8 mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#08b48d]/15 rounded-full px-4 py-2 border border-[#08b48d]/50 backdrop-blur-sm hover:bg-[#08b48d]/25 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-[#08b48d]" />
            <span className="text-sm font-medium text-[#08b48d]">Welcome to ZEXO Agency</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Build Your Digital
              <br />
              <span className="bg-linear-to-r from-[#08b48d] to-[#00d4aa] bg-clip-text text-transparent">Future Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We create innovative digital solutions that transform your vision into reality. From concept to launch, we're with you every step.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#08b48d] to-[#00d4aa] text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#08b48d]/50 transform hover:scale-105 transition-all duration-300 group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#08b48d]/60 text-[#08b48d] font-semibold rounded-lg hover:bg-[#08b48d]/10 hover:border-[#08b48d] backdrop-blur-sm transition-all duration-300">
              Explore Our Work
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-700/50">
          <div className="text-center space-y-3 p-6 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="flex justify-center">
              <div className="p-3 bg-[#08b48d]/20 rounded-full">
                <Zap className="w-6 h-6 text-[#08b48d]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">Fast & Reliable</h3>
            <p className="text-sm text-gray-400">Lightning-quick delivery without compromising quality</p>
          </div>

          <div className="text-center space-y-3 p-6 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="flex justify-center">
              <div className="p-3 bg-[#08b48d]/20 rounded-full">
                <Rocket className="w-6 h-6 text-[#08b48d]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">Scalable Solutions</h3>
            <p className="text-sm text-gray-400">Growing businesses need growing digital infrastructure</p>
          </div>

          <div className="text-center space-y-3 p-6 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="flex justify-center">
              <div className="p-3 bg-[#08b48d]/20 rounded-full">
                <Target className="w-6 h-6 text-[#08b48d]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">Results Driven</h3>
            <p className="text-sm text-gray-400">Every project designed to deliver measurable impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}
