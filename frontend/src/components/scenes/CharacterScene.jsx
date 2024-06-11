import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { sectionTransitAnimations } from '../../constants/character';
import Character from '../models/CharacterModel';
import CloudScene from './CloudScene';
import SkillBall from './SkillBall';
import { skills } from '../../constants/skills';
import { variants } from '../../utils/motions/characterMotion';

export default function CharacterScene({ section, viewport }) {
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const characterGroup = useRef();

  const fullStarPosition = [0, 1, -0.6];

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
      // onUpdate={(latest) => {
      //   if (section === 4) console.log({ section, latest });
      // }}
      variants={variants(viewport)}
    >
      <Character animation={animation} position-y={0.5} />
      {/* Cloud */}
      <CloudScene section={section} />
      {section === 4 ? (
        <motion.group rotation-y={Math.PI}>
          <SkillBall
            skill={skills[0]}
            position={fullStarPosition}
            isFullStar={true}
            fullStarPosition={fullStarPosition}
            onTapBall={() => {}}
            fourStarScale={0.13}
            animation={false}
            clickable={false}
          />
        </motion.group>
      ) : null}
    </motion.group>
  );
}

