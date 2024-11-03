import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const skills = ["React", "Next.js", "Angular", "Python", "Node.js", "TypeScript", "Three.js", "Tailwind CSS"];

const Launchpad: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls />
      {skills.map((skill, index) => (
        <Text
          key={index}
          position={[Math.sin(index) * 3, Math.cos(index) * 3, Math.sin(index) * 1.5]}
          fontSize={0.5}
          color="white"
        >
          {skill}
        </Text>
      ))}
    </Canvas>
  );
};

export default Launchpad;
