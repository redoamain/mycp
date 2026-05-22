"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  className?: string;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const { className, particleColor = "#3b82f6", particleDensity = 20 } = props;
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; style: React.CSSProperties }>
  >([]);

  useEffect(() => {
    setIsMounted(true);

    // Generate particles hanya di client side
    const newParticles = [];
    const density = Math.min(Math.max(particleDensity, 10), 30); // Batasi antara 10-30

    for (let i = 0; i < density; i++) {
      newParticles.push({
        id: i,
        style: {
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          backgroundColor: particleColor,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          position: "absolute" as const,
          borderRadius: "50%",
        },
      });
    }
    setParticles(newParticles);
  }, [particleColor, particleDensity]);

  if (!isMounted) {
    return <div className={cn("relative overflow-hidden", className)} />;
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-ping"
          style={{
            ...particle.style,
            animation: `pulse ${Math.random() * 3 + 2}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};
