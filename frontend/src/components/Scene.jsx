import { motion } from 'framer-motion-3d';
import { useThree } from '@react-three/fiber';
import { Environment, Sky, ContactShadows } from '@react-three/drei';
import Avatar from './characters/Avatar';
import { useEffect, useRef, useState, useMemo } from 'react';
import { sectionTransitAnimations } from '../constants/avatar';
import SkillBallsScene from './scenes/SkillBallsScene';
import AboutScene from './scenes/AboutScene';
import ContactScene from './scenes/ContactScene';

export default function Scene({ section }) {
  const { viewport } = useThree();
  const characterGroup = useRef();
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const sectionScene = useMemo(() => {
    switch (section) {
      case 0:
        return <AboutScene />;
      case 2:
        return <SkillBallsScene />;
      case 3:
        return <ContactScene />;
      default:
        return null;
    }
  }, [section]);

  useEffect(() => {
    setAnimation(sectionTransitAnimations[section]);
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
      <motion.group
        position={[0, 0, 0]}
        animate={`${section}`}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        // avatar state on each section
        variants={{
          0: {
            scaleX: 0.5,
            scaleY: 0.5,
            scaleZ: 0.5,
            y: 0,
          },
          1: {
            x: 0,
            y: -viewport.height - 1,
            z: -viewport.height,
            scaleX: 0.5,
            scaleY: 0.5,
            scaleZ: 0.5,
          },
          2: {
            x: 0,
            y: (-viewport.height - 1) * 2,
            z: -viewport.height,
            // rotateY: Math.PI / 2,
          },
          3: {
            x: 1.5,
            y: -viewport.height * 3 - 1,
            z: -viewport.height,
            scaleX: 0.5,
            scaleY: 0.5,
            scaleZ: 0.5,
          },
        }}
      >
        <motion.group ref={characterGroup} position-z={1.5} position-y={0.25}>
          <Avatar animation={animation} />
        </motion.group>
        {sectionScene}
      </motion.group>
    </>
  );
}
