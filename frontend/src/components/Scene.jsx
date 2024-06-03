import { motion } from 'framer-motion-3d';
import { useThree } from '@react-three/fiber';
import { Environment, Sky, ContactShadows } from '@react-three/drei';
import { useMemo } from 'react';
import SkillBallsScene from './scenes/SkillBallsScene';
import MainScene from './scenes/MainScene';
import ContactScene from './scenes/ContactScene';
import CharacterScene from './scenes/CharacterScene';

export default function Scene({ section }) {
  const { viewport } = useThree();
  const sectionScene = useMemo(() => {
    switch (section) {
      case 2:
        return <SkillBallsScene viewport={viewport} />;
      case 3:
        return <ContactScene viewport={viewport} />;
      default:
        return null;
    }
  }, [section]);

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset='sunset' />
      <ContactShadows
        opacity={0.42}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color='#000000'
      />
      <motion.group>
        <CharacterScene section={section} viewport={viewport} />
        <MainScene section={section} viewport={viewport} />
        {sectionScene}
      </motion.group>
    </>
  );
}
