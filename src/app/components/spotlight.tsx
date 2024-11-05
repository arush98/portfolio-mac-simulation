// Spotlight.tsx
import React, { useRef, useEffect } from 'react';

interface SpotlightProps {
  onClose: () => void;
}

const Spotlight: React.FC<SpotlightProps> = ({ onClose }) => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Focus on input when Spotlight is opened
  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.querySelector('input')?.focus();
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (spotlightRef.current && !spotlightRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div
        ref={spotlightRef}
        className="absolute top-[20%] w-[500px] p-3 bg-gray-900 rounded-full shadow-lg border border-gray-700 flex items-center"
      >
        <input
          type="text"
          placeholder="Spotlight Search"
          className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
        />
      </div>
    </div>
  );
};

export default Spotlight;
