import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import ContactScene from './ContactScene';
import ExperienceScene from './ExperienceScene';
import SkillScene from './SkillScene';

export default function MainScene({ section, viewport }) {
  const carouselGroup = useRef();
  const isSectionInView = (v) => section === v;

  return (
    <motion.group
      ref={carouselGroup}
      position={[0, -4, -15]}
      scale={0.75}
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
          scale: 1.1,
          x: -4.4,
          y: -viewport.height - 4.5,
          z: 0.5 - viewport.height,
          // rotateX: Math.PI / 10,
          rotateY: -Math.PI / 2,
        },
        2: {
          scale: 3,
          x: -12,
          y: -(viewport.height + 1.25) * 2 - 4,
          z: -viewport.height * 2 - 8,
          rotateX: -Math.PI / 12,
          rotateY: Math.PI / 2.2,
        },
        3: {
          scale: 2,
          x: -6.5,
          y: -viewport.height * 3 + 4.5,
          z: -viewport.height * 3 + 9.5,
          rotateY: Math.PI,
        },
        4: {
          x: -3,
          y: -viewport.height * 4 + 2.5,
          z: -viewport.height - 2,
          rotateY: Math.PI * 1.5,
        },
      }}
    >
      {/* Experience Scene Summer */}
      <motion.group position={[-2, 2, -4]} scale={1.5}>
        <ExperienceScene isInView={isSectionInView(1)} />
      </motion.group>

      {/* Skill Scene Fall */}
      <motion.group position={[4, -1, 2]}>
        <SkillScene isInView={isSectionInView(2)} />
      </motion.group>

      {/* Contact Scene Winter */}
      <motion.group position={[-4, -4, 2]} rotation-y={Math.PI}>
        <ContactScene isInView={isSectionInView(3)} />
      </motion.group>

      {/* RIP Scene Winter */}
      <motion.group position={[0, -7, -6]}>
        <mesh scale={1.5} position-y={1.5}>
          <boxGeometry args={[1, 1, 0.25]} />
          <meshStandardMaterial color='white' />
        </mesh>
        <mesh scale={1} rotation-x={Math.PI}>
          <coneGeometry args={[4, 2]} />
          <meshStandardMaterial color={'green'} />
        </mesh>
      </motion.group>
    </motion.group>
  );
}
