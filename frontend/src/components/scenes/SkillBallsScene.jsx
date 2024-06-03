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
    <motion.group
      position={[1.5, (-viewport.height - 1) * 2 - 1, -viewport.height]}
    >
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
      <mesh scale={[0.8, 0.4, 0.8]} position-z={1.5}>
        <icosahedronGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
    </motion.group>
  );
}
