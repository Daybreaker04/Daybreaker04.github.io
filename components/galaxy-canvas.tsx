'use client';

import { useEffect, useRef } from 'react';

type Star = {
  angle: number;
  radius: number;
  depth: number;
  size: number;
  speed: number;
  tint: number;
};

const STAR_COUNT = 720;

export function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let ratio = 1;

    const stars: Star[] = Array.from({ length: STAR_COUNT }, (_, index) => {
      const depth = Math.random();
      return {
        angle: Math.random() * Math.PI * 2,
        radius: Math.pow(Math.random(), 0.62),
        depth,
        size: 0.35 + Math.random() * 1.55,
        speed: 0.00005 + Math.random() * 0.00012,
        tint: index % 7,
      };
    });

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const centerX = width * 0.63;
      const centerY = height * 0.47;
      const scale = Math.min(width, height) * 0.7;
      const drift = reduceMotion ? 0 : time;

      const glow = context.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        scale * 0.5,
      );
      glow.addColorStop(0, 'rgba(194, 235, 255, .17)');
      glow.addColorStop(0.22, 'rgba(113, 80, 255, .09)');
      glow.addColorStop(1, 'rgba(3, 5, 12, 0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        const spiral = star.radius * 6.2;
        const angle = star.angle + spiral + drift * star.speed;
        const radial = star.radius * scale;
        const x = centerX + Math.cos(angle) * radial;
        const y = centerY + Math.sin(angle) * radial * (0.18 + star.depth * 0.28);
        const opacity = 0.14 + (1 - star.radius) * 0.72;
        const size = star.size * (0.55 + (1 - star.depth) * 0.9);
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fillStyle =
          star.tint === 0
            ? `rgba(126, 231, 255, ${opacity})`
            : star.tint === 1
              ? `rgba(191, 153, 255, ${opacity})`
              : `rgba(255, 255, 255, ${opacity})`;
        context.fill();
      });

      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
