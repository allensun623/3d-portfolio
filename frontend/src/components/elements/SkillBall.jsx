import { debounce } from 'lodash';
import { Float } from '@react-three/drei';
import { useState, useEffect, useCallback } from 'react';
import GlassBall from './GlassBall';

export default function SkillBall({
  skill,
  position = [0, 0, 0],
  isFullStar = false,
  fullStarPosition = [0, 0, 0],
  onTapBall = () => {},
  fourStarScale,
  animation = true,
  clickable = true,
  countBigBang,
}) {
  const [ballThetaLength, setBallThetaLength] = useState(0);
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    if (merged) setMerged(false);
  }, [countBigBang]);

  // add debounce with useCallback to avoid triggering rerendering within a short period of time
  const handleTap = useCallback(
    debounce(() => {
      if (!clickable) return;
      document.body.style.cursor = 'auto';

      setMerged(true);
      onTapBall(skill.score, isFullStar);
    }, 300),
    []
  );

  const variants = {
    hidden: {
      scale: 0,
      x: animation ? 0 : position[0],
      y: animation ? 0 : position[1],
      z: animation ? -10 : position[2],
    },
    visible: {
      scale: isFullStar ? fourStarScale : 0.15,
      x: position[0],
      y: position[1],
      z: position[2],
    },
    hover: { scale: 0.3 },
    merge: {
      scale: 0,
      x: fullStarPosition[0],
      y: fullStarPosition[1],
      z: fullStarPosition[2],
      rotateX: Math.PI / 2,
      rotateY: Math.PI / 2,
      rotateZ: Math.PI / 2,
    },
  };

  return (
    <Float
      speed={isFullStar ? 0 : 0.5}
      rotationIntensity={isFullStar ? 0 : 2}
      floatIntensity={isFullStar ? 0 : 2}
    >
      <GlassBall
        skill={skill}
        isFullStar={isFullStar}
        handleClick={handleTap}
        innerThetaLength={ballThetaLength}
        initial='hidden'
        animate={`${isFullStar ? 'visible' : merged ? 'merge' : 'visible'}`}
        whileHover='hover'
        variants={variants}
        transition={{ duration: 2 }}
        innerProps={{
          animate: { opacity: 1 },
          transition: {
            duration: (skill.score / 100) * 3,
            delay: 1.5,
            type: 'ease',
          },
          onUpdate: () => {
            setBallThetaLength((prev) => (prev += Math.PI / 180));
          },
        }}
      />
    </Float>
  );
}
