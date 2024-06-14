import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { sectionTransitAnimations } from '../../constants/character';
import Character from '../models/CharacterModel';
import CloudScene from './CloudScene';
import GlassBall from '../elements/GlassBall';
import { variants } from '../../utils/motions/characterMotion';
import { useBallState, useBallUpdate } from '../context/FourStarBallContext';

export default function CharacterScene({ section, viewport }) {
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const characterGroup = useRef();
  const handleClick = useBallUpdate();
  const sendToPortal = useBallState();

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
          animate={sendToPortal ? { z: 3, y: -1.05, x: 0.7 } : {}}
          transition={{ duration: 5 }}
        >
          <GlassBall
            position={[0, 1, -0.6]}
            isFourStar={true}
            scale={0.13}
            handleClick={handleClick}
          />
        </motion.group>
      ) : null}
    </motion.group>
  );
}

