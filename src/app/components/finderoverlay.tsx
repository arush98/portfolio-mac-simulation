// FinderOverlay.tsx
import React from 'react';
import Image from 'next/image';

interface FinderOverlayProps {
  onClose: () => void;
}

const FinderOverlay: React.FC<FinderOverlayProps> = ({ onClose }) => {
  const skills = [
    { name: 'React', iconPath: 'svg/skills/react.svg' },
    { name: 'NextJs', iconPath: 'svg/skills/next.svg'},
    { name: 'TypeScript', iconPath: 'svg/skills/ts.svg' },
    { name: 'JavaScript', iconPath: 'svg/skills/js.svg' },
    { name: 'HTML', iconPath: 'svg/skills/html5.svg' },
    { name: 'CSS', iconPath: 'svg/skills/css3.svg' },
    { name: 'Angular', iconPath: 'svg/skills/angular.svg' },
    { name: 'Git', iconPath: 'svg/skills/git.svg' },
    { name: 'Python', iconPath: 'svg/skills/python.svg' },
    // Add more skills as needed
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg z-50 flex flex-col items-center"
      onClick={onClose} 
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl px-8 mt-24">

        <h2 className="text-center text-3xl font-semibold text-gray-100 mb-12">SKILLS</h2>

        <div className="grid grid-cols-6 gap-y-10 gap-x-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <Image src={skill.iconPath} alt={skill.name} width={60} height={60} className="rounded-lg" />
              <span className="text-gray-200 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinderOverlay;
