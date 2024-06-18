import { motion } from 'framer-motion-3d';
import { useThree } from '@react-three/fiber';
import { useMemo, useEffect } from 'react';
import BgScene from './scenes/BgScene';
import ContactScene from './scenes/ContactScene';
import CharacterScene from './scenes/CharacterScene';
import { useBallStateReset } from './context/FourStarBallContext';

export default function Scene({ section }) {
  const { viewport } = useThree();
  const resetBallState = useBallStateReset();

  useEffect(() => {
    console.log('section update', section);
    resetBallState();
  }, [section]);

  // TODO remove memo
  const sectionScene = useMemo(() => {
    switch (section) {
      case 3:
        return <ContactScene viewport={viewport} />;
      default:
        return null;
    }
  }, [section]);

  return (
    <>
      {/* <OrbitControls /> */}
      <motion.group>
        <CharacterScene section={section} viewport={viewport} />
        <BgScene section={section} viewport={viewport} />
        {sectionScene}
      </motion.group>
    </>
  );
}
