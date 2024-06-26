import { motion } from 'framer-motion-3d';
import { Model as IslandFall } from '../models/IslandFallModel';
import { Model as GuideBoard } from '../models/IslandFallClickPickGuideBoard';
import SkillBallsScene from './SkillBallsScene';
import { useEffect, useState } from 'react';

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
    <motion.group>
      {isInView && showSkillBalls && renderSkillBalls()}
      <motion.group scale={2.5}>
        <IslandFall />
        {isInView && renderGuideBoard()}
      </motion.group>
    </motion.group>
  );
}
