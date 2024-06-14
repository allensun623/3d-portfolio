import { motion } from 'framer-motion-3d';
import { useThree } from '@react-three/fiber';
import { Environment, Sky, ContactShadows } from '@react-three/drei';
import { useMemo, useState, useEffect } from 'react';
import BgScene from './scenes/BgScene';
import ContactScene from './scenes/ContactScene';
import CharacterScene from './scenes/CharacterScene';

export default function Scene({ section }) {
  const { viewport } = useThree();
  const [sendToPortal, setSendToPortal] = useState(false);

  useEffect(() => {
    if (section === 4) setSendToPortal(false);
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
        <CharacterScene
          section={section}
          viewport={viewport}
          handleClick={() => setSendToPortal(true)}
          sendToPortal={sendToPortal}
        />
        <BgScene
          section={section}
          viewport={viewport}
          sendToPortal={sendToPortal}
        />
        {sectionScene}
      </motion.group>
    </>
  );
}
