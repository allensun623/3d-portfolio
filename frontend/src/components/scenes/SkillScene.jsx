import { motion } from 'framer-motion-3d';
import { Model as IslandFall } from '../models/IslandFallModel';
import { Model as GuideBoard } from '../models/IslandFallClickPickGuideBoard';
import SkillBallsScene from './SkillBallsScene';
import { useEffect, useState } from 'react';

export default function SkillScene({ isInView }) {
  const [showSkillBalls, setShowSkillBalls] = useState(false);
  useEffect(() => {
    if (!isInView) setShowSkillBalls(false);
  }, [isInView]);

  return (
    <motion.group>
      {isInView && showSkillBalls ? (
        <motion.group position={[-2.6, 0.5, 2.55]} rotation-y={-Math.PI / 2}>
          <SkillBallsScene />
        </motion.group>
      ) : null}
      <motion.group scale={2.5}>
        <IslandFall />
        {isInView && (
          <motion.group
            initial={{ scale: 0.1 }}
            animate={{ scale: 1, transition: { duration: 2, delay: 1.5 } }}
            onAnimationComplete={() => {
              if (isInView && !showSkillBalls) setShowSkillBalls(true);
            }}
          >
            <GuideBoard />
          </motion.group>
        )}
      </motion.group>
    </motion.group>
  );
}
