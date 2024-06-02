import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';

export default function AboutScene() {
  const carouselGroup = useRef();
  useFrame(() => {
    if (carouselGroup) {
      carouselGroup.current.rotation.y += 0.005;
    }
  });
  return (
    <motion.group>
      <mesh scale={[0.8, 0.4, 0.8]} position-z={1.5}>
        <icosahedronGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
      <motion.group ref={carouselGroup}>
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color='white' />
        </mesh>
      </motion.group>
    </motion.group>
  );
}
