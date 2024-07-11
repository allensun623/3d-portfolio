import { motion } from 'framer-motion-3d';
import { useEffect, useState } from 'react';
import { Model as GuideBoard } from '../models/IslandFallClickPickGuideBoard';
import { Model as IslandFall } from '../models/IslandFallModel';
import SkillBallsScene from './SkillBallsScene';

export default function SkillScene({ isInView, isMobile }) {
  const [showSkillBalls, setShowSkillBalls] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setShowSkillBalls(false);
    }
  }, [isInView]);

  const renderSkillBalls = () => (
    <motion.group position={[-2.6, 0.5, 2.55]} rotation-y={-Math.PI / 2}>
      <SkillBallsScene isMobile={isMobile} />
    </motion.group>
  );

  const renderGuideBoard = () => (
    <motion.group
      initial={{ scale: 0.1 }}
      animate={{ scale: 1, transition: { duration: 2, delay: 1.5 } }}
      onAnimationComplete={() => {
        if (isInView && !showSkillBalls) setShowSkillBalls(true);
      }}
    >
      <GuideBoard />
    </motion.group>
  );

  return (
    <>
      {isInView && showSkillBalls ? renderSkillBalls() : null}
      <motion.group scale={2.5}>
        <IslandFall />
        {isInView ? renderGuideBoard() : null}
      </motion.group>
    </>
  );
}
