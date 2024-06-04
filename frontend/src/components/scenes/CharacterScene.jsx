import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { sectionTransitAnimations } from '../../constants/avatar';
import Avatar from '../characters/Avatar';

export default function CharacterScene({ section, viewport }) {
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const characterGroup = useRef();
  const [showCloud, setShowCloud] = useState(true);

  useEffect(() => {
    setAnimation(sectionTransitAnimations[section]);
    setShowCloud(new Set([0, 2, 3, 4]).has(section));
  }, [section]);

  return (
    <motion.group
      ref={characterGroup}
      position={[0, 0.25, 2.5]}
      animate={`${section}`}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      variants={{
        0: {
          scale: 0.25,
          y: 0.5,
          rotateY: Math.PI / 2,
        },
        1: {
          x: 0,
          y: -viewport.height - 1,
          z: -viewport.height,
          scale: 0.5,
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
      <Avatar animation={animation} position-y={0.5} />
      {showCloud ? (
        <motion.mesh
          scale={[0.8, 0.4, 0.8]}
          animate={`${section}`}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          variants={{
            0: {},
            1: {},
            2: {
              rotateY: Math.PI / 2,
            },
            3: {
              x: -1.5,
              y: 2.5,
              rotationX: Math.PI,
            },
            4: {},
          }}
        >
          <icosahedronGeometry />
          <meshStandardMaterial color='yellow' />
        </motion.mesh>
      ) : null}
    </motion.group>
  );
}
