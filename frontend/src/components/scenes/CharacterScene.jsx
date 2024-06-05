import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { sectionTransitAnimations } from '../../constants/character';
import Character from '../models/CharacterModel';
import CloudScene from './CloudScene';

export default function CharacterScene({ section, viewport }) {
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const characterGroup = useRef();

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
      variants={{
        0: {
          scale: 0.5,
          x: 0,
          y: 0,
          z: 0,
          rotateY: Math.PI / 2,
        },
        1: {
          // x: 1,
          // y: -viewport.height * 2,
          // z: -viewport.height + 1,
          // scale: 0.5,
          scale: [0.25, 0.25],
          rotateY: [Math.PI / 2, Math.PI / 2],
          x: [-3, 1],
          y: [-viewport.height - 1.5, -viewport.height - 1.5],
          z: [-viewport.height - 3, -viewport.height - 3],
          transition: {
            times: [0, 1],
            duration: 5,
            type: 'linear',
            delay: 1.5,
          },
        },
        2: {
          x: 0,
          y: (-viewport.height - 1) * 2 - 1,
          z: -viewport.height,
          // rotateY: Math.PI / 2,
        },
        3: {
          x: 1.5,
          y: -viewport.height * 3 - 0.75,
          z: -viewport.height,
          scale: 0.5,
        },
        4: {
          x: 0,
          y: -viewport.height * 4 - 1,
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

