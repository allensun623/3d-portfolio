import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { sectionTransitAnimations } from '../../constants/character';
import Character from '../models/CharacterModel';
import CloudScene from './CloudScene';

export default function CharacterScene({ section, viewport }) {
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const characterGroup = useRef();

  const experienceAnimation = () => {
    const x = [-1.2, -0.95, -0.95, -0.95, 0, 0, 0, 1.3, 1.3, 1.3, 1.5];
    const y = Array(x.length).fill(-viewport.height - 2);
    const z = [1.5, 1, 1, 1, -0.7, -0.7, -0.7, -0.85, -0.85, -0.85, -0.7].map(
      (v) => v - viewport.height
    );
    const scale = Array(x.length).fill(0.25);
    const rotateY = [8, 8, 9, 8, 9, 9, 6, 6, 9, 9, 0].map(
      (v) => (v / 8) * Math.PI
    );
    const transition = {
      // [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      times: Array.from({ length: 11 }, (_, i) => i * 0.1),
      duration: 20,
      type: 'ease',
      delay: 3,
    };
    const onUpdate = (latest) => {
      console.log({ latest });
    };
    return { x, y, z, scale, rotateY, transition, onUpdate };
  };

  useEffect(() => {
    setAnimation(sectionTransitAnimations[section]);
  }, [section]);
  // TODO flying animations
  return (
    <motion.group
      ref={characterGroup}
      animate={`${section}`}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      onUpdate={(latest) => {
        console.log({ latest });
      }}
      variants={{
        0: {
          scale: 0.5,
          x: 0,
          y: -0.75,
          z: 0,
          rotateY: Math.PI / 2,
        },
        1: experienceAnimation(),
        2: {
          x: 2,
          y: (-viewport.height - 1) * 2 - 8,
          z: -viewport.height - 13.25,
          scale: 2,
        },
        3: {
          x: 1.5,
          y: -viewport.height * 3 - 1.25,
          z: -viewport.height,
          scale: 0.5,
        },
        4: {
          x: 1,
          y: -viewport.height * 4 - 2,
          z: -viewport.height,
          scale: 0.5,
          rotateY: Math.PI / 2,
        },
      }}
    >
      <Character animation={animation} position-y={0.5} />
      {/* Cloud */}
      <CloudScene section={section} />
    </motion.group>
  );
}

