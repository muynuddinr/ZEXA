'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Palette, Code, Share2, Camera, Image, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services2: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services: Service[] = [
    {
      id: 1,
      title: 'Branding',
      description: 'Create powerful visual identities that tell your story',
      icon: <Palette className="w-12 h-12" />,
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Build fast, scalable and responsive web solutions',
      icon: <Code className="w-12 h-12" />,
    },
    {
      id: 3,
      title: 'Social Media Handling',
      description: 'Grow your presence with strategic social media management',
      icon: <Share2 className="w-12 h-12" />,
    },
    {
      id: 4,
      title: 'Video Production',
      description: 'Captivating video content that engages and converts',
      icon: <Camera className="w-12 h-12" />,
    },
    {
      id: 5,
      title: 'Photography',
      description: 'Professional photography that showcases your brand',
      icon: <Image className="w-12 h-12" />,
    },
    {
      id: 6,
      title: 'Marketing',
      description: 'Data-driven marketing strategies for business growth',
      icon: <TrendingUp className="w-12 h-12" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-bl from-[#08b48d]/15 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-linear-to-tr from-[#08b48d]/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our
            <span className="block text-[#08b48d]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Promptly providing creative solutions that drive business growth
          </p>
        </div>

        {/* Services List with Scroll Animation */}
        <div className="space-y-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-96'
              }`}
            >
              <div className="group p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#08b48d]/50 hover:shadow-2xl hover:shadow-[#08b48d]/20 transition-all duration-300 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-[#08b48d]/0 to-[#08b48d]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                {/* Service Card Content */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon Section */}
                  <div className="shrink-0">
                    <div className="p-4 bg-[#08b48d]/15 rounded-xl text-[#08b48d] group-hover:bg-[#08b48d] group-hover:text-black transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-lg font-bold text-[#08b48d]">
                        {String(service.id).padStart(2, '0')}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="inline-flex items-center text-[#08b48d] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-white/10">
          <p className="text-gray-300 text-lg mb-6">
            Ready to transform your business with our services?
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#08b48d] to-[#00d4aa] text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#08b48d]/50 transform hover:scale-105 transition-all duration-300">
              Chat with us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services2;
