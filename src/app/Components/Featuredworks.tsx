'use client';

import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
}

const FeaturedWorks: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Snad Al Khair',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      category: 'Logistics',
    },
    {
      id: 2,
      title: 'Go Chick',
      image: 'https://images.unsplash.com/photo-1565958011504-98d6b56dd371?w=600&h=400&fit=crop',
      category: 'Food & Beverage',
    },
    {
      id: 3,
      title: 'Imperio Restauc',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224e24?w=600&h=400&fit=crop',
      category: 'Restaurant',
    },
    {
      id: 4,
      title: 'Digital Agency',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      category: 'Digital',
    },
    {
      id: 5,
      title: 'Tech Startup',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=600&h=400&fit=crop',
      category: 'Technology',
    },
    {
      id: 6,
      title: 'Fashion Brand',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      category: 'Fashion',
    },
  ];

  const cardsPerView = 3;
  const maxSlide = Math.max(0, projects.length - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 > maxSlide ? maxSlide : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-bl from-[#08b48d]/15 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-linear-to-tr from-[#08b48d]/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Featured{' '}
              <span className="bg-linear-to-r from-[#08b48d] to-[#00d4aa] bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </div>
          <Link href="/projects">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-[#08b48d] text-black font-semibold rounded-full hover:bg-[#00d4aa] transition-colors duration-300 group">
              See All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Card Carousel */}
        <div className="relative group">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / cardsPerView + 2.4)}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  {/* Project Card */}
                  <div className="group/card cursor-pointer overflow-hidden rounded-2xl h-full">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover/card:opacity-80 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <p className="text-[#08b48d] text-sm font-semibold mb-2">
                            {project.category}
                          </p>
                          <h3 className="text-white text-2xl font-bold">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="pt-6">
                      <h3 className="text-xl font-bold text-white group-hover/card:text-[#08b48d] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 md:-left-14 top-32 z-10 bg-[#08b48d] hover:bg-[#07a077] text-white p-3 rounded-full transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-6 md:-right-14 top-32 z-10 bg-[#08b48d] hover:bg-[#07a077] text-white p-3 rounded-full transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-[#08b48d] w-10 h-3'
                  : 'bg-gray-600 w-3 h-3 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
