'use client';

import { useEffect, useRef } from 'react';

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const trailContainerRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const followerXRef = useRef(0);
  const followerYRef = useRef(0);
  const animationIdRef = useRef<number>(0);
  const lastTrailTimeRef = useRef(0);
  const isHoveringInteractiveRef = useRef(false);

  useEffect(() => {
    const isInteractiveElement = (target: HTMLElement): boolean => {
      const interactiveSelectors = [
        'button',
        'a',
        '[role="button"]',
        'input',
        'textarea',
        'select',
        '[onclick]'
      ];

      return interactiveSelectors.some(selector =>
        target.matches(selector) || target.closest(selector)
      );
    };

    const createTrail = (x: number, y: number) => {
      if (!trailContainerRef.current) return;
      
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
      
      trailContainerRef.current.appendChild(trail);
      
      // Remove after animation completes
      setTimeout(() => trail.remove(), 1000);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;

      // Update cursor position immediately
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseXRef.current + 'px';
        cursorRef.current.style.top = mouseYRef.current + 'px';
      }

      // Create trail particles at intervals
      const now = Date.now();
      if (now - lastTrailTimeRef.current > 50) {
        createTrail(mouseXRef.current, mouseYRef.current);
        lastTrailTimeRef.current = now;
      }
    };

    const animate = () => {
      // Smooth follower movement with adaptive easing
      const dx = mouseXRef.current - followerXRef.current;
      const dy = mouseYRef.current - followerYRef.current;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Increase easing on larger distances (magnetic effect)
      const easing = isHoveringInteractiveRef.current ? 0.15 : Math.min(distance / 200, 0.2);
      
      followerXRef.current += dx * easing;
      followerYRef.current += dy * easing;

      if (followerRef.current) {
        followerRef.current.style.left = followerXRef.current + 'px';
        followerRef.current.style.top = followerYRef.current + 'px';
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        isHoveringInteractiveRef.current = true;
        if (cursorRef.current) {
          cursorRef.current.classList.add('cursor-expand');
        }
        if (followerRef.current) {
          followerRef.current.classList.add('follower-expand');
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        isHoveringInteractiveRef.current = false;
        if (cursorRef.current) {
          cursorRef.current.classList.remove('cursor-expand');
        }
        if (followerRef.current) {
          followerRef.current.classList.remove('follower-expand');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver, true);
    document.addEventListener('mouseout', onMouseOut, true);

    // Start animation loop
    animationIdRef.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver, true);
      document.removeEventListener('mouseout', onMouseOut, true);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-3px);
          }
        }

        .cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #08b48d 0%, rgba(8, 180, 141, 0.4) 100%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          will-change: transform;
          box-shadow: 0 0 15px rgba(8, 180, 141, 0.6), inset 0 0 5px rgba(8, 180, 141, 0.8);
        }

        .cursor-expand {
          width: 24px;
          height: 24px;
          box-shadow: 0 0 25px rgba(8, 180, 141, 0.8), inset 0 0 8px rgba(8, 180, 141, 1);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .follower {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid #08b48d;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          will-change: transform;
          box-shadow: 0 0 20px rgba(8, 180, 141, 0.4), inset 0 0 10px rgba(8, 180, 141, 0.1);
        }

        .follower::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(8, 180, 141, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0.7);
          animation: pulse-ring 2s ease-out infinite;
        }

        .follower::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background-color: #08b48d;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.6;
        }

        .follower-expand {
          border-color: #08b48d;
          box-shadow: 0 0 30px rgba(8, 180, 141, 0.7), inset 0 0 15px rgba(8, 180, 141, 0.3);
        }

        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background-color: rgba(8, 180, 141, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
          animation: fade-out 1s ease-out forwards;
        }

        @keyframes fade-out {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
        }
      `}</style>
      <div className="cursor" ref={cursorRef} />
      <div className="follower" ref={followerRef} />
    </>
  );
}
