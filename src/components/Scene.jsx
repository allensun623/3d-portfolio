import { useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useEffect } from 'react';
import { useBallStateReset } from './context/FourStarBallContext';
import BgScene from './scenes/BgScene';
import CharacterScene from './scenes/CharacterScene';

export default function Scene({ section, isMobile }) {
  const { viewport } = useThree();
  // equation calculated by iphone SE and and iphone XR
  const offsetY = -viewport.factor * 0.0075 + 6.225;

  const resetBallState = useBallStateReset();

  useEffect(() => {
    resetBallState();
  }, [section]);

  const mobileGroup = {
    scale: viewport.width / 6,
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
        y: -viewport.height * 3 + offsetY * 0.9 - 0.16,
        z: 4,
      },
      4: {
        x: -0.01,
        y: -viewport.height * 4 + offsetY,
        z: 3.3,
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
      <BgScene section={section} isMobile={isMobile} viewport={viewport} />
    </motion.group>
  );
}
