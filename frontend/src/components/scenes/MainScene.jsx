import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import ContactScene from './ContactScene';

export default function MainScene({ section, viewport }) {
  const carouselGroup = useRef();

  const islandBase = (color = 'white') => (
    <mesh scale={1} rotation-x={Math.PI}>
      <coneGeometry args={[4, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );

  return (
    <motion.group
      ref={carouselGroup}
      position={[0, -4, -15]}
      animate={`${section}`}
      transition={{
        duration: 1,
        delay: 0.6,
        type: 'tween',
      }}
      variants={{
        0: {
          rotateY: -Math.PI * 2,
          transition: {
            repeat: Infinity,
            duration: 100,
          },
        },
        1: {
          x: 2,
          y: -viewport.height - 2.5,
          z: 2 - viewport.height,
        },
        2: {
          x: -3,
          y: -(viewport.height + 1.25) * 2,
          z: -viewport.height - 3,
        },
        3: {
          x: -0.5,
          y: -viewport.height * 3 - 0.25,
          z: -viewport.height - 4,
          rotateY: Math.PI / 2,
        },
        4: {
          x: -3,
          y: -viewport.height * 4 + 2,
          z: -viewport.height - 2,
          rotateY: Math.PI * 1.5,
        },
      }}
    >
      <motion.group position={[-2, 0, -4]}>
        {[
          [-2, 1.5, 2],
          [2, 1.5, 2],
          [-2, 1.5, -2],
          [2, 1.5, -2],
        ].map((p, idx) => (
          <mesh key={idx} scale={1} rotation-x={-Math.PI * 0.5} position={p}>
            <torusGeometry />
            <meshStandardMaterial color='white' />
          </mesh>
        ))}
        {islandBase('blue')}
      </motion.group>

      <motion.group position={[4, -1.5, 2]}>
        <mesh scale={1} rotation-x={Math.PI} position-y={3.5}>
          <coneGeometry args={[4, 2]} />
          <meshStandardMaterial color='white' />
        </mesh>
        <mesh scale={0.5} position-x={0} position-y={1.5}>
          <cylinderGeometry args={[1, 1, 4]} />
          <meshStandardMaterial color='white' />
        </mesh>
        {islandBase('orange')}
      </motion.group>

      <motion.group position={[-4, -3, 2]}>
        <ContactScene isInView={section === 3} />
        {islandBase('white')}
      </motion.group>

      <motion.group position={[2, -4, -4]}>
        <mesh scale={1.5} position-y={1.5}>
          <boxGeometry args={[1, 1, 0.25]} />
          <meshStandardMaterial color='white' />
        </mesh>
        {islandBase('green')}
      </motion.group>
    </motion.group>
  );
}
