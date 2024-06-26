import SkillBall from '../elements/SkillBall';
import { skills } from '../../constants/skills';
import { generateSkillBallPositions } from '../../utils/3dState';
import { useState, useMemo, useEffect } from 'react';
import { clickableHeartBeatMotion } from '@/utils/motions/ballMotion';
import { motion } from 'framer-motion-3d';
import SparkleBall from '../elements/SparkleBall';
import { useBallAction, useBallState } from '../context/FourStarBallContext';

export default function SkillBallsScene() {
  const FULL_STAR_INIT_SCALE = 0;
  const [fourStarScale, setFourStarScale] = useState(FULL_STAR_INIT_SCALE);
  const [countBigBang, setCountBigBang] = useState(0);
  const positions = useMemo(() => generateSkillBallPositions(), []);
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
    handleShowWishComeTrue(true);
    setCountClicks(1);
    handleRelaxingInSkills(true);
  };

  const handleTapBall = (score, isFourStar) => {
    // trigger scaling after the skill ball merged into the four start ball
    if (isFourStar) handleBigBang();
    else {
      setCountClicks((prev) => prev + 1);
      // increase size after merging
      setTimeout(() => {
        setFourStarScale((prev) => prev + score / 5000);
      }, 1500);
    }
  };

  const collectedAll = countClicks === skills.length;
  const fullFourStar = (i) => i === 0 && collectedAll;

  useEffect(() => {
    if (countClicks > 1 && showWishComeTrue) handleShowWishComeTrue(false);
    if (countClicks > 1 && relaxingInSkills) handleRelaxingInSkills(false);
    if (!collectedAll && showStateYourWish) handleShowStateYourWish(false);
    if (collectedAll && !showStateYourWish) handleShowStateYourWish(true);
  }, [countClicks]);

  // useEffect(() => {

  // })

  return (
    <>
      {skills.map((s, idx) => (
        <motion.group
          key={s.name}
          animate={
            fullFourStar(idx) ? { y: 1, transition: { duration: 1 } } : {}
          }
        >
          {fullFourStar(idx) && (
            <motion.group transition={{ delay: 2 }}>
              <SparkleBall size={fourStarScale * 4} />
            </motion.group>
          )}
          <motion.group
            animate={
              fullFourStar(idx) ? clickableHeartBeatMotion({ delay: 2 }) : {}
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
