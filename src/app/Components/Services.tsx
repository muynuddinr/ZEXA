'use client';

import { useState, useEffect, useRef } from 'react';

interface ServiceStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

const Services = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const steps: ServiceStep[] = [
    {
      id: 1,
      title: "HOW IT ALL BEGAN",
      subtitle: "Where three minds met with one purpose.",
      description: "What started as a simple meeting between three creators quickly turned into a shared vision, to build something meaningful, intentional and different. Zero Agency was born from that moment."
    },
    {
      id: 2,
      title: "BUILDING THE FOUNDATION",
      subtitle: "Creating solid groundwork for innovation.",
      description: "We focused on establishing strong technical foundations and building relationships with clients who shared our vision for quality and innovation in every project we undertook."
    },
    {
      id: 3,
      title: "EXPANDING HORIZONS",
      subtitle: "Growing beyond boundaries and expectations.",
      description: "Our commitment to excellence led us to expand our services, taking on more complex challenges and delivering solutions that exceeded industry standards."
    },
    {
      id: 4,
      title: "FUTURE FORWARD",
      subtitle: "Leading the way in technological advancement.",
      description: "Today, we continue to push boundaries, embracing new technologies and methodologies to create innovative solutions for tomorrow's challenges."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Check if the container is in the viewport
      if (containerTop <= windowHeight && containerTop + containerHeight >= 0) {
        // Calculate scroll progress within this specific section only
        const visibleHeight = Math.min(windowHeight, containerTop + containerHeight) - Math.max(0, containerTop);
        const scrollProgress = Math.max(0, Math.min(1, visibleHeight / windowHeight));
        
        // Map scroll progress to steps (only when scrolling within this section)
        if (containerTop <= 0 && containerTop + containerHeight >= windowHeight) {
          // When section fills the viewport, calculate internal progress
          const internalProgress = Math.abs(containerTop) / (containerHeight - windowHeight);
          const stepIndex = Math.floor(internalProgress * steps.length);
          const clampedStepIndex = Math.max(0, Math.min(steps.length - 1, stepIndex));
          setCurrentStep(clampedStepIndex);
        } else if (containerTop > 0) {
          // Section is entering from bottom
          setCurrentStep(0);
        } else if (containerTop + containerHeight < windowHeight) {
          // Section is leaving from top
          setCurrentStep(steps.length - 1);
        }
      }
    };

    const throttledScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        handleScroll();
      }, 10);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [steps.length]);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 bg-black min-h-[300vh]"
    >
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-bl from-[#08b48d]/15 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-linear-to-tr from-[#08b48d]/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Illustration */}
            <div className="relative h-96 lg:h-100">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentStep 
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-0 transform scale-95'
                  }`}
                >
                  <div className="w-full h-full bg-linear-to-br from-[#08b48d]/20 to-[#08b48d]/10 rounded-3xl flex items-center justify-center shadow-lg">
                    {/* Simple illustration placeholder */}
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-3xl">👥</span>
                      </div>
                      <div className="space-y-2">
                        <div className="w-32 h-2 bg-[#08b48d]/30 rounded mx-auto"></div>
                        <div className="w-24 h-2 bg-[#08b48d]/30 rounded mx-auto"></div>
                        <div className="w-28 h-2 bg-[#08b48d]/30 rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Step indicator */}
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold text-[#08b48d]">
                  {String(steps[currentStep].id).padStart(2, '0')}.
                </span>
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 transition-all duration-500 rounded-full ${
                        index === currentStep 
                          ? 'w-12 bg-[#08b48d]' 
                          : index < currentStep
                          ? 'w-6 bg-[#08b48d]/60'
                          : 'w-4 bg-[#08b48d]/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Animated content */}
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h3 
                    key={`title-${currentStep}`}
                    className="text-sm font-bold text-[#08b48d] tracking-widest animate-fade-in-up"
                  >
                    {steps[currentStep].title}
                  </h3>
                </div>
                
                <div className="overflow-hidden">
                  <h2 
                    key={`subtitle-${currentStep}`}
                    className="text-3xl lg:text-4xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200"
                  >
                    {steps[currentStep].subtitle}
                  </h2>
                </div>
                
                <div className="overflow-hidden">
                  <p 
                    key={`desc-${currentStep}`}
                    className="text-lg text-gray-300 leading-relaxed animate-fade-in-up animation-delay-400"
                  >
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="pt-6">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="font-medium">Step {currentStep + 1} of {steps.length}</span>
                  <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-linear-to-r from-[#08b48d] to-[#00d4aa] rounded-full transition-all duration-700 ease-out"
                      style={{ 
                        width: `${((currentStep + 1) / steps.length) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Services;