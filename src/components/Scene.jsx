import BgScene from './scenes/BgScene';
import { useEffect } from 'react';
import CharacterScene from './scenes/CharacterScene';
import { useBallStateReset } from './context/FourStarBallContext';
import { useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

export default function Scene({ section }) {
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 6;

  const resetBallState = useBallStateReset();

  useEffect(() => {
    resetBallState();
  }, [section]);

  const mobileGroup = {
    scale: responsiveRatio,
    animate: `${section}`,
    variants: {
      0: {},
      1: {
        x: 0.05,
        y: -1.4,
        z: 1.5,
      },
      2: {
        x: 0.2,
        y: -viewport.height * 2 - 0.8,
        z: -2,
      },
      3: {
        x: -0.18,
        y: -viewport.height * 3 + 3.5,
        z: 4,
      },
      4: {
        x: -0.01,
        y: -viewport.height * 4 + 4,
        z: 3.45,
      },
    },
  };

  return (
    <motion.group {...(isMobile && mobileGroup)}>
      <CharacterScene
        section={section}
        isMobile={isMobile}
        viewport={viewport}
      />
      <BgScene
        section={section}
        responsiveRatio={responsiveRatio}
        isMobile={isMobile}
        viewport={viewport}
      />
    </motion.group>
  );
}
