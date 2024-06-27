import SkillBall from '../elements/SkillBall';
import { skills } from '../../constants/skills';
import { generateSkillBallPositions } from '../../utils/3dState';
import React, { useState, useMemo, useEffect } from 'react';
import { clickableHeartBeatMotion } from '@/utils/motions/ballMotion';
import { motion } from 'framer-motion-3d';
import SparkleBall from '../elements/SparkleBall';
import { useBallAction, useBallState } from '../context/FourStarBallContext';

export default function SkillBallsScene({ isMobile }) {
  const FULL_STAR_INIT_SCALE = 0;
  const SCALE_INCREMENT_DELAY = 1500;
  const SCALE_DIVISOR = 5000;

  const [fourStarScale, setFourStarScale] = useState(FULL_STAR_INIT_SCALE);
  const [countBigBang, setCountBigBang] = useState(0);
  const positions = useMemo(
    () => generateSkillBallPositions(isMobile),
    [isMobile]
  );
  const [countClicks, setCountClicks] = useState(1);
  const {
    handleShowStateYourWish,
    handleShowWishComeTrue,
    handleRelaxingInSkills,
  } = useBallAction();
  const { showStateYourWish, showWishComeTrue, relaxingInSkills } =
    useBallState();

  // handle four start clicked, triggering big bang
  const handleBigBang = () => {
    setCountBigBang((prev) => prev + 1);
    setFourStarScale(FULL_STAR_INIT_SCALE);
    setCountClicks(1);
    handleRelaxingInSkills(true);
  };

  const handleTapBall = (score, isFourStar) => {
    // trigger scaling after the skill ball merged into the four start ball
    if (isFourStar) {
      handleBigBang();
      return;
    }

    // increase size after merging
    setTimeout(() => {
      setFourStarScale((prev) => prev + score / SCALE_DIVISOR);
      setCountClicks((prev) => prev + 1);
    }, SCALE_INCREMENT_DELAY);
  };

  const collectedAll = countClicks === skills.length;
  const isFullFourStar = (i) => i === 0 && collectedAll;

  useEffect(() => {
    if (countClicks > 1 && showWishComeTrue) handleShowWishComeTrue(false);
    if (countClicks > 1 && relaxingInSkills) handleRelaxingInSkills(false);
    if (collectedAll && !showStateYourWish) handleShowStateYourWish(true);
    if (!collectedAll && showStateYourWish) {
      handleShowStateYourWish(false);
      handleShowWishComeTrue(true);
    }
  }, [countClicks]);

  return (
    <>
      {skills.map((skill, index) => (
        <SkillBallGroup
          key={index}
          index={index}
          skill={skill}
          isMobile={isMobile}
          fourStarScale={fourStarScale}
          positions={positions}
          countBigBang={countBigBang}
          handleTapBall={handleTapBall}
          isFullFourStar={isFullFourStar(index)}
        />
      ))}
    </>
  );
}

const SkillBallGroup = React.memo(
  ({
    index,
    skill,
    isMobile,
    fourStarScale,
    positions,
    countBigBang,
    handleTapBall,
    isFullFourStar,
  }) => (
    <motion.group
      animate={{ ...(isFullFourStar && { y: 1, transition: { duration: 1 } }) }}
    >
      {isFullFourStar && (
        <motion.group transition={{ delay: 2 }}>
          <SparkleBall size={fourStarScale * 4} />
        </motion.group>
      )}
      <motion.group
        animate={{
          ...(isFullFourStar && clickableHeartBeatMotion({ delay: 2 })),
        }}
      >
        <SkillBall
          isMobile={isMobile}
          skill={skill}
          isFourStar={index === 0}
          onTapBall={(score, isFourStar) => handleTapBall(score, isFourStar)}
          fourStarScale={fourStarScale}
          position={positions[index]}
          FourStarPosition={positions[0]}
          countBigBang={countBigBang}
          scale={isMobile ? 0.6 : 0.3}
        />
      </motion.group>
    </motion.group>
  )
);

SkillBallGroup.displayName = 'SkillBallGroup';
