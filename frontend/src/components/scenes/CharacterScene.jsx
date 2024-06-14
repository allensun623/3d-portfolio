import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { sectionTransitAnimations } from '../../constants/character';
import Character from '../models/CharacterModel';
import CloudScene from './CloudScene';
import GlassBall from '../elements/GlassBall';
import { variants } from '../../utils/motions/characterMotion';

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
      variants={variants(viewport)}
    >
      <Character animation={animation} position-y={0.5} />
      {/* Cloud */}
      <CloudScene section={section} />
      {/* skill ball to portal */}
      {section === 4 ? (
        <motion.group
          rotation-y={Math.PI}
          initial={{}}
          animate={{ z: 3, y: -1.2, x: 1 }}
          transition={{ delay: 5.5, duration: 5 }}
        >
          <GlassBall position={[0, 1, -0.6]} isFullStar={true} scale={0.13} />
        </motion.group>
      ) : null}
    </motion.group>
  );
}

