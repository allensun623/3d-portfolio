import { motion } from 'framer-motion-3d';
import { useThree } from '@react-three/fiber';
import { Environment, Sky, ContactShadows } from '@react-three/drei';
import Avatar from './characters/Avatar';
import { useEffect, useRef, useState, useMemo } from 'react';
import { sectionTransitAnimations } from '../constants/avatar';
import SkillBallsScene from './scenes/SkillBallsScene';
import AboutScene from './scenes/AboutScene';

export default function Scene({ section }) {
  // section 0
  // const ROTATION_SPEED = 0.3;

  const { viewport } = useThree();
  const characterGroup = useRef();
  const carouselGroup = useRef();
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const sectionScene = useMemo(() => {
    switch (section) {
      case 0:
        return <AboutScene />;
      case 2:
        return <SkillBallsScene />;
      default:
        return null;
    }
  }, [section]);

  // const characterPositions = [[-1.5, 0.5, 0], [], [0, -1, 0], []];

  useEffect(() => {
    setAnimation(sectionTransitAnimations[section]);
    if (!carouselGroup.current || !characterGroup.current) return;
    // switch (section) {
    //   case 0:
    //     characterGroup.current.position.set(...characterPositions[section]);
    //     break;
    //   case 2:
    //     carouselGroup.current.rotation.y = 0;
    //     characterGroup.current.position.set(...characterPositions[section]);
    //     characterGroup.current.scale.set(2, 2, 2);
    //     break;
    // }
  }, [section]);
  // useFrame(({ clock }) => {
  //   if (!characterGroup.current) return;
  //   // section 0 animation
  //   if (section === 0) {
  //     // TODO rotate character self axis
  //     // Calculate the new position based on the rotation
  //     const angle = clock.getElapsedTime() * ROTATION_SPEED;

  //     const position = getPosition(characterGroup);
  //     const newX = position.x + Math.cos(angle);
  //     const newY = position.y; // Keeping y constant for simplicity
  //     const newZ = position.z + Math.sin(angle);
  //     characterGroup.current.position.set(newX, newY, newZ);
  //   }
  // });

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
            x: 1,
            y: -viewport.height * 3 - 2,
            z: -viewport.height,
            scaleX: 0.5,
            scaleY: 0.5,
            scaleZ: 0.5,
          },
        }}
      >
        {/* <group ref={characterGroup}> */}
        <motion.group ref={characterGroup} position-z={1.5} position-y={0.25}>
          <Avatar animation={animation} />
        </motion.group>
        {sectionScene}
      </motion.group>
    </>
  );
}
