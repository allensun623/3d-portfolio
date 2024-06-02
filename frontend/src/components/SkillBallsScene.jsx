import SkillBall from './SkillBall';
import { skills } from '../constants/skills';
import { generateSkillBallPositions } from '../utils/3dState';
import { useState, useEffect } from 'react';

export default function About() {
  const [positions, setPositions] = useState();
  useEffect(() => {
    setPositions(generateSkillBallPositions());
  }, []);

  return (
    <>
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
    </>
  );
}
