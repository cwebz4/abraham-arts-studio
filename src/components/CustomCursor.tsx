'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'play' | 'drag'>('default');
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check hovered elements for cursor commands
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const val = cursorTarget.getAttribute('data-cursor') || '';
        if (val === 'view') {
          setCursorType('view');
          setCursorText('VIEW');
        } else if (val === 'play') {
          setCursorType('play');
          setCursorText('PLAY');
        } else if (val === 'drag') {
          setCursorType('drag');
          setCursorText('DRAG');
        } else {
          setCursorType('pointer');
          setCursorText(val.toUpperCase());
        }
      } else if (target.closest('a, button, input, select, textarea, [role="button"]')) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth render loop with LERP
    const render = () => {
      const lerpFactor = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [visible]);

  if (!enabled || !visible) return null;

  const isExpanded = cursorType === 'view' || cursorType === 'play' || cursorType === 'drag';

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden transition-opacity duration-300">
      {/* Precision inner center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[#74E023] shadow-[0_0_10px_#74E023] transition-transform duration-75 ease-out ${
          isExpanded ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer interactive ring / action badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border transition-all duration-200 ease-out ${
          isExpanded
            ? 'w-20 h-20 bg-[#74E023] text-[#070D10] font-black text-xs tracking-widest border-transparent shadow-[0_0_25px_rgba(116,224,35,0.6)] scale-100'
            : cursorType === 'pointer'
            ? 'w-10 h-10 border-[#74E023] bg-[rgba(116,224,35,0.12)] scale-110'
            : 'w-8 h-8 border-white/30 bg-white/5 scale-100'
        }`}
        style={{ willChange: 'transform' }}
      >
        {isExpanded && (
          <span className="select-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
