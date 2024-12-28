// components/WhiteButton.tsx
"use client"
import React, { useState } from 'react';

const WhiteButton = ({ text, emoji }: { text: string,emoji:string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="ml-5 mt-10 bg-white text-black border-2 border-black py-2 px-4 text-lg font-semibold rounded-md hover:bg-white hover:text-white transition duration-1000 ease-in-out transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minWidth: '160px' }}
    >
      <span
        className={`flex items-center justify-center transform transition-all duration-1000 ease-in-out ${
          isHovered ? 'translate-x-4' : 'translate-x-0'
        }`}
      >
        {isHovered ? emoji : text}

      </span>
    </button>
  );
};

export default WhiteButton;
