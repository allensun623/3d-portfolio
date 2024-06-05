import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import ContactScene from './ContactScene';
import ExperienceScene from './ExperienceScene';
import { Model as IslandWinterModel } from '../models/IslandWinterModel';
import { Model as IslandSummerModel } from '../models/IslandSummerModel';

export default function MainScene({ section, viewport }) {
  const carouselGroup = useRef();

  const islandBase = (color = 'white') => (
    <mesh scale={1} rotation-x={Math.PI}>
      <coneGeometry args={[4, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );

  const isSectionInView = (v) => section === v;

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
          x: 3.5,
          y: -viewport.height - 3.75,
          z: 2 - viewport.height,
          rotateX: Math.PI / 14,
          scale: 2,
          // x: [15, -5, 1],
          // y: [-10, -10, -7.5],
          // z: [0, 0, 0],
          // scaleX: [10, 10, 1],
          // scaleY: [10, 10, 1],
          // scaleZ: [10, 10, 1],
          // transition: { times: [0, 0.8, 1], duration: 5, delay: 2 },
        },
        2: {
          x: -3,
          y: -(viewport.height + 1.25) * 2,
          z: -viewport.height - 3,
        },
        3: {
          x: -2.5,
          y: -viewport.height * 3 + 2.9,
          z: -viewport.height * 3 - 2.5,
          rotateY: Math.PI / 2,
          scale: 2,
        },
        4: {
          x: -3,
          y: -viewport.height * 4 + 2,
          z: -viewport.height - 2,
          rotateY: Math.PI * 1.5,
        },
      }}
    >
      {/* Experience Scene Summer */}
      <motion.group
        position={[-2, 0, -4]}
        // animate={isSectionInView(1) ? 'inView' : 'init'}
        // variants={{
        //   init: { x: -3.5, y: 0, z: -viewport.height - 2, scale: 1 },
        //   inView: {
        //     x: [5, -5, 0],
        //     y: [0, 0, 0],
        //     z: [0, 0, 0],
        //     scaleX: [5, 5, 0.75],
        //     scaleY: [5, 5, 0.75],
        //     scaleZ: [5, 5, 0.75],
        //     transition: { times: [0, 0.8, 1], duration: 5, delay: 1.5 },
        //   },
        // }}
      >
        <motion.group position-y={-1.35}>
          <ExperienceScene isInView={isSectionInView(1)} />
        </motion.group>
        <IslandSummerModel scale={2} />
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

      {/* Contact Scene Winter */}
      <motion.group position={[-4, -3, 2]} rotation-y={Math.PI}>
        <ContactScene isInView={isSectionInView(3)} />
        <IslandWinterModel scale={2} />
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
