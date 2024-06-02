import { motion } from 'framer-motion-3d';
import SkillBall from './SkillBall';
import { skills } from '../../constants/skills';
import { generateSkillBallPositions } from '../../utils/3dState';
import { useState, useEffect } from 'react';

export default function About() {
  const [positions, setPositions] = useState();
  useEffect(() => {
    setPositions(generateSkillBallPositions());
  }, []);

  return (
    <motion.group>
      {positions
        ? skills.map((s, idx) => (
            <SkillBall
              key={s.name}
              skill={s}
              position={positions[idx]}
              isFullStar={idx > 0}
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
