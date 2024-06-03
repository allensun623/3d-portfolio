import { motion } from 'framer-motion-3d';
import SkillBall from './SkillBall';
import { skills } from '../../constants/skills';
import { generateSkillBallPositions } from '../../utils/3dState';
import { useState, useEffect } from 'react';

export default function SkillBallsScene({ viewport }) {
  const [positions, setPositions] = useState();
  const [fourStarScale, setFourStarScale] = useState(0.2);

  useEffect(() => {
    setPositions(generateSkillBallPositions());
  }, []);

  const handleTapBall = (score) => {
    setTimeout(() => {
      setFourStarScale((prev) => prev + score / 5000);
    }, 1500);
  };

  return (
    <motion.group position={[0, (-viewport.height - 1) * 2, -viewport.height]}>
      {positions
        ? skills.map((s, idx) => (
            <SkillBall
              key={s.name}
              skill={s}
              position={positions[idx]}
              isFullStar={idx === 0}
              fullStarPosition={positions[0]}
              onTapBall={(score) => handleTapBall(score)}
              fourStarScale={fourStarScale}
            />
          ))
        : null}
    </motion.group>
  );
}
