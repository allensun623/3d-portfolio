import SkillBall from '../elements/SkillBall';
import { skills } from '../../constants/skills';
import { generateSkillBallPositions } from '../../utils/3dState';
import { useState, useEffect } from 'react';

export default function SkillBallsScene() {
  const [positions, setPositions] = useState();
  const FULL_STAR_INIT_SCALE = 0.2;
  const [fourStarScale, setFourStarScale] = useState(FULL_STAR_INIT_SCALE);
  const [countBigBang, setCountBigBang] = useState(0);

  useEffect(() => {
    setPositions(generateSkillBallPositions());
  }, []);

  // handle four start clicked, triggering big bang
  const handleBigBang = () => {
    setCountBigBang((prev) => prev + 1);
    setFourStarScale(FULL_STAR_INIT_SCALE);
  };

  const handleTapBall = (score, isFourStar) => {
    if (isFourStar) {
      handleBigBang();
    } else {
      setTimeout(() => {
        setFourStarScale((prev) => prev + score / 5000);
      }, 1500);
    }
  };

  return (
    <>
      {positions
        ? skills.map((s, idx) => (
            <SkillBall
              key={s.name}
              skill={s}
              position={positions[idx]}
              isFourStar={idx === 0}
              FourStarPosition={positions[0]}
              onTapBall={(score, isFourStar) =>
                handleTapBall(score, isFourStar)
              }
              fourStarScale={fourStarScale}
              countBigBang={countBigBang}
            />
          ))
        : null}
    </>
  );
}
