import { clickableHeartBeatMotion } from '@/utils/motions/ballMotion';
import { motion } from 'framer-motion-3d';
import { useEffect, useMemo, useState } from 'react';
import { skills } from '../../constants/skills';
import { generateSkillBallPositions } from '../../utils/3dState';
import { useBallAction, useBallState } from '../context/FourStarBallContext';
import SkillBall from '../elements/SkillBall';
import SparkleBall from '../elements/SparkleBall';

const FULL_STAR_INIT_SCALE = 0;
const SCALE_INCREMENT_DELAY = 1500;
const SCALE_DIVISOR = 5000;

export default function SkillBallsScene({ isMobile }) {
  const [fourStarScale, setFourStarScale] = useState(FULL_STAR_INIT_SCALE);
  const [countBigBang, setCountBigBang] = useState(0);
  const [countClicks, setCountClicks] = useState(1);
  const positions = useMemo(
    () => generateSkillBallPositions(isMobile),
    [isMobile]
  );
  const scaleBase = isMobile ? 1.5 : 1;

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
          isFullFourStar={index === 0 && collectedAll}
          scaleBase={scaleBase}
        />
      ))}
    </>
  );
}

function SkillBallGroup({
  index,
  skill,
  isMobile,
  fourStarScale,
  positions,
  countBigBang,
  handleTapBall,
  isFullFourStar,
  scaleBase,
}) {
  return (
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
          onTapBall={handleTapBall}
          fourStarScale={fourStarScale}
          position={positions[index]}
          FourStarPosition={positions[0]}
          countBigBang={countBigBang}
          scale={(0.15 + (0.3 * skill.score) / 100) * scaleBase}
        />
      </motion.group>
    </motion.group>
  );
}
