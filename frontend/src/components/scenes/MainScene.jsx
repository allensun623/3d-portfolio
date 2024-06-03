import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';

export default function MainScene({ section, viewport }) {
  const carouselGroup = useRef();
  // const [countRotation, setCountRotation] = useState(0);

  useFrame(() => {
    if (carouselGroup && section === 0) {
      // setCountRotation((prev) => prev - 0.005);
      // carouselGroup.current.rotation.y = countRotation;
      carouselGroup.current.rotation.y -= 0.005;
    }
  });

  return (
    <motion.group
      ref={carouselGroup}
      position={[0, -4, -10]}
      // position-x={0}
      // position-z={-5}
      animate={`${section}`}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      variants={{
        0: {
          // y: 0,
          rotationY: 0,
        },
        1: {
          x: 2,
          y: -viewport.height - 3,
          z: -viewport.height - 3,
          rotateY: 0,
        },
        2: {
          x: -1,
          y: (-viewport.height - 1) * 2,
          z: -viewport.height - 3,
          rotateY: 0,
        },
        3: {
          x: 3.5,
          y: -viewport.height * 3 - 1.8,
          z: -viewport.height - 2,
          rotateY: Math.PI / 2,
        },
        4: {
          x: 3.5,
          y: -viewport.height * 4 + 1,
          z: -viewport.height,
          rotateY: Math.PI,
        },
      }}
    >
      <mesh scale={1} rotation-x={-Math.PI * 0.5} position={[-2, 2, 2]}>
        <torusGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh scale={1} rotation-x={Math.PI} position={[2, 1, 2]}>
        <coneGeometry args={[3, 4]} />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh scale={0.5} position={[-2, 0, -2]}>
        <cylinderGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh scale={1.5} position={[2, -1, -2]}>
        <boxGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
    </motion.group>
  );
}
