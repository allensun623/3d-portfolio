import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import {
  sectionTransitAnimations,
  animationOptions,
} from '../../constants/character';
import Character from '../models/CharacterModel';
import CloudScene from './CloudScene';
import { variants } from '../../utils/motions/characterMotion';
import { useBallState, useBallAction } from '../context/FourStarBallContext';
import FourStarBallScene from './FourStarBallScene';

export default function CharacterScene({ section, viewport }) {
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const characterGroup = useRef();
  const { chaseDreamJob } = useBallState();

  useEffect(() => {
    setAnimation(sectionTransitAnimations[section]);
  }, [section]);

  useEffect(() => {
    if (chaseDreamJob && section === 1)
      setAnimation(animationOptions.SITTING_CROSS_LEGGED);
  }, [chaseDreamJob]);

  // TODO flying animations
  return (
    <motion.group
      ref={characterGroup}
      animate={chaseDreamJob ? 'chaseDreamJob' : `${section}`}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      variants={variants(viewport)}
    >
      <Character animation={animation} position-y={0.3} position-x={0.05} />
      {/* Cloud */}
      <CloudScene section={section} />
      {/* Four Stat Ball */}
      <FourStarBallScene section={section} />
    </motion.group>
  );
}

