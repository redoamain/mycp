"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  /**
   * Generate dotted world map
   */
  const map = new DottedMap({
    height: 60,
    grid: "diagonal",
  });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: "transparent",
  });

  /**
   * SVG size
   */
  const width = 1000;
  const height = 500;

  /**
   * Projection compatible dengan dotted-map
   */
  const projectPoint = (lat: number, lng: number) => {
    let x = ((lng + 180) / 360) * width;
    let y = ((90 - lat) / 180) * height;

    /**
     * Adjustment khusus Asia Tenggara
     * supaya Indonesia pas
     */
    const isSEA =
      lng >= 95 &&
      lng <= 141 &&
      lat >= -12 &&
      lat <= 10;

    if (isSEA) {
      x += 35;
      y += 57;
    }

    return { x, y };
  };

  /**
   * Membuat curved line
   */
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;

    /**
     * tinggi lengkungan
     */
    const curve = Math.abs(end.x - start.x) * 0.18;

    const midY = Math.min(start.y, end.y) - curve;

    return `
      M ${start.x} ${start.y}
      Q ${midX} ${midY}
      ${end.x} ${end.y}
    `;
  };

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-white dark:bg-black">
      {/* MAP IMAGE */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="absolute inset-0 h-full w-full pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />

      {/* SVG OVERLAY */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0 h-full w-full pointer-events-none"
      >
        {/* GRADIENT */}
        <defs>
          <linearGradient
            id="path-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="transparent"
            />

            <stop
              offset="10%"
              stopColor={lineColor}
            />

            <stop
              offset="90%"
              stopColor={lineColor}
            />

            <stop
              offset="100%"
              stopColor="transparent"
            />
          </linearGradient>
        </defs>

        {/* PATHS + DOTS */}
        {dots.map((dot, i) => {
          const start = projectPoint(
            dot.start.lat,
            dot.start.lng
          );

          const end = projectPoint(
            dot.end.lat,
            dot.end.lng
          );

          return (
            <g key={i}>
              {/* CURVED PATH */}
              <motion.path
                d={createCurvedPath(start, end)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth={1.5}
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />

              {/* START POINT */}
              <g>
                <circle
                  cx={start.x}
                  cy={start.y}
                  r={3}
                  fill={lineColor}
                />

                <circle
                  cx={start.x}
                  cy={start.y}
                  r={3}
                  fill={lineColor}
                  opacity={0.5}
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="10"
                    dur="2s"
                    repeatCount="indefinite"
                  />

                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* END POINT */}
              <g>
                <circle
                  cx={end.x}
                  cy={end.y}
                  r={3}
                  fill={lineColor}
                />

                <circle
                  cx={end.x}
                  cy={end.y}
                  r={3}
                  fill={lineColor}
                  opacity={0.5}
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="10"
                    dur="2s"
                    repeatCount="indefinite"
                  />

                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}