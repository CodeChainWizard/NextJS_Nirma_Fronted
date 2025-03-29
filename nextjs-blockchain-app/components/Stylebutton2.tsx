'use client'

import { useState } from "react";

export default function FancyButton2() {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-40 h-14 border-[3px] border-[#149CEA] text-white font-bold text-lg rounded-md transition-all duration-1000 ease-in-out bg-transparent hover:shadow-[inset_0px_0px_25px_#1479EA] cursor-pointer"
    >
      <span>Register</span>
    </button>
  );
}


