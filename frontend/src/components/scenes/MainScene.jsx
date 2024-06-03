import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';

export default function MainScene({ section }) {
  const carouselGroup = useRef();
  useFrame(() => {
    if (carouselGroup && section === 0) {
      carouselGroup.current.rotation.y -= 0.001;
    }
  });

  return (
    <motion.group ref={carouselGroup}>
      <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
        <planeGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh scale={1.5} position-y={-0.001} position-x={1} position-z={1}>
        <boxGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh
        scale={1}
        rotation-x={Math.PI}
        position-y={1}
        position-x={1}
        position-z={-1}
      >
        <coneGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh
        scale={1}
        rotation-x={-Math.PI * 0.5}
        position-y={0.5}
        position-x={-1}
        position-z={-1}
      >
        <torusGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh scale={1} position-y={0.5} position-x={-1} position-z={1}>
        <cylinderGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
    </motion.group>
  );
}
