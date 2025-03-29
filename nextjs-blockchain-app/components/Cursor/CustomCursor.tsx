"use client"; // For mouse tracking in Next.js (TypeScript)

import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if cursor is inside target layout elements
      const target = e.target as HTMLElement;
      if (
        target.closest(".card-layout") ||
        target.closest(".header-layout") ||
        target.closest(".footer-layout")
      ) {
        setIsHovering(true); // Enable glow effect inside target elements
      } else {
        setIsHovering(false); // Hide glow effect outside target elements
      }
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        className={`custom-cursor ${isHovering ? "hover" : "hidden"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
