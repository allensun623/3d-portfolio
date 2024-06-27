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

export default function CharacterScene({ section, viewport, isMobile }) {
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const characterGroup = useRef();
  const {
    relaxingInSkills,
    chaseDreamJob,
    sendToPortal,
    fireballCompleted,
    showStateYourWish,
  } = useBallState();
  const { handleUpdateClickable } = useBallAction();

  useEffect(() => {
    setAnimation(sectionTransitAnimations[section]);
  }, [section]);

  useEffect(() => {
    if (section !== 2) return;

    if (showStateYourWish) setAnimation(animationOptions.POINTING);
    else if (relaxingInSkills) setAnimation(animationOptions.ARM_STRETCHING);
    else setAnimation(animationOptions.PICK_FRUIT);
  }, [relaxingInSkills, showStateYourWish]);

  useEffect(() => {
    if (chaseDreamJob && section === 1)
      setAnimation(animationOptions.SITTING_CROSS_LEGGED);
  }, [chaseDreamJob]);

  useEffect(() => {
    if (sendToPortal && section === 4)
      setAnimation(
        fireballCompleted
          ? animationOptions.WAVING_BYE
          : animationOptions.FIREBALL
      );
  }, [sendToPortal, fireballCompleted]);

  return (
    <motion.group
      ref={characterGroup}
      animate={chaseDreamJob ? 'chaseDreamJob' : `${section}`}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      variants={variants(viewport)}
      onAnimationComplete={(definition) => {
        if (Number(definition) === section) handleUpdateClickable();
      }}
    >
      <Character
        isMobile={isMobile}
        animation={animation}
        position-y={0.3}
        position-x={0.05}
      />
      {/* Cloud */}
      <CloudScene section={section} />
      {/* Four Stat Ball */}
      <FourStarBallScene section={section} />
    </motion.group>
  );
}

