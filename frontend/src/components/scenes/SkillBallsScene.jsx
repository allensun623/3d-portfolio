import SkillBall from '../elements/SkillBall';
import { skills } from '../../constants/skills';
import { generateSkillBallPositions } from '../../utils/3dState';
import { useState, useMemo, useEffect } from 'react';
import { clickableHeartBeatMotion } from '@/utils/motions/ballMotion';
import { motion } from 'framer-motion-3d';
import SparkleBall from '../elements/SparkleBall';
import { useBallAction } from '../context/FourStarBallContext';

export default function SkillBallsScene() {
  const FULL_STAR_INIT_SCALE = 0.2;
  const [fourStarScale, setFourStarScale] = useState(FULL_STAR_INIT_SCALE);
  const [countBigBang, setCountBigBang] = useState(0);
  const positions = useMemo(() => generateSkillBallPositions(), []);
  const [countClicks, setCountClicks] = useState(1);
  const { handleShowStateYourWish, handleShowWishComeTrue } = useBallAction();

  // handle four start clicked, triggering big bang
  const handleBigBang = () => {
    setCountBigBang((prev) => prev + 1);
    setFourStarScale(FULL_STAR_INIT_SCALE);
    setCountClicks(1);
    handleShowStateYourWish(false);
    handleShowWishComeTrue();
  };

  const handleTapBall = (score, isFourStar) => {
    if (isFourStar) handleBigBang();
    // trigger scaling after the skill ball merged into the four start ball
    else {
      setCountClicks((prev) => prev + 1);
      setTimeout(() => {
        setFourStarScale((prev) => prev + score / 5000);
      }, 1500);
    }
  };

  useEffect(() => {
    if (countClicks === skills.length) {
      handleShowStateYourWish(true);
    }
  }, [countClicks]);

  const fullFourStar = (i) => i === 0 && countClicks === skills.length;

  return (
    <>
      {skills.map((s, idx) => (
        <motion.group key={s.name}>
          {fullFourStar(idx) && (
            <motion.group transition={{ delay: 1.5 }}>
              <SparkleBall size={fourStarScale * 4} />
            </motion.group>
          )}
          <motion.group
            animate={
              fullFourStar(idx) ? clickableHeartBeatMotion({ delay: 1.5 }) : {}
            }
          >
            <SkillBall
              skill={s}
              isFourStar={idx === 0}
              onTapBall={(score, isFourStar) =>
                handleTapBall(score, isFourStar)
              }
              fourStarScale={fourStarScale}
              position={positions[idx]}
              FourStarPosition={positions[0]}
              countBigBang={countBigBang}
            />
          </motion.group>
        </motion.group>
      ))}
    </>
  );
}
