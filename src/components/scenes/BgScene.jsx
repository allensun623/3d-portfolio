import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import ContactScene from './ContactScene';
import ExperienceScene from './ExperienceScene';
import SkillScene from './SkillScene';
import PortalScene from './PortalScene';

export default function MainScene({ viewport, section }) {
  const carouselGroup = useRef();
  const isSectionInView = (v) => section === v;
  // Rotate the Scene
  useFrame((_, delta) => {
    if (carouselGroup.current && section === 0) {
      // delta is the time elapsed since the last frame, dividing by 10 slows down the rotation
      carouselGroup.current.rotation.y -= delta / 10;
      // Keep the rotation value within the range of 0 to 2 * Math.PI (one full rotation)
      carouselGroup.current.rotation.y %= Math.PI * 2;
    }
  });

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
      rotation-y={-Math.PI / 2}
      variants={{
        0: {},
        1: {
          scale: 1.1,
          x: -3.5,
          y: -viewport.height - 3,
          z: 5 - viewport.height,
          rotateX: -Math.PI / 10,
          rotateY: -(7 * Math.PI) / 20,
        },
        2: {
          scale: 2.1,
          x: -14.3,
          y: -(viewport.height + 1.25) * 2 - 4.5,
          z: -viewport.height * 2 - 9,
          rotateX: -Math.PI / 12,
          rotateY: Math.PI / 2.1,
        },
        3: {
          scale: 2,
          x: -10.5,
          y: -viewport.height * 3 + 6.5,
          z: -viewport.height * 3 + 13.5,
          rotateY: Math.PI,
        },
        4: {
          scale: 0.3,
          x: -1.4,
          y: -viewport.height * 4 + 2.4,
          z: -viewport.height + 4.5,
          rotateX: -Math.PI * 0.09,
          rotateY: -Math.PI / 4,
        },
      }}
    >
      {/* Experience Scene Summer */}
      <motion.group
        position={[-3, 2, -5]}
        scale={1.5}
        rotation-y={-Math.PI / 4}
      >
        <ExperienceScene isInView={isSectionInView(1)} />
      </motion.group>

      {/* Skill Scene Fall */}
      <motion.group position={[4, -1, 5]}>
        <SkillScene isInView={isSectionInView(2)} />
      </motion.group>

      {/* Contact Scene Winter */}
      <motion.group position={[-6, -5, 4]} rotation-y={Math.PI}>
        <ContactScene isInView={isSectionInView(3)} />
      </motion.group>

      {/* Portal Scene Spring */}
      <motion.group position={[2, -6.5, -6]} rotation-y={(-Math.PI * 5) / 12}>
        <PortalScene isInView={isSectionInView(4)} viewport={viewport} />
      </motion.group>
    </motion.group>
  );
}
