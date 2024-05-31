import { motion } from 'framer-motion-3d';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Sky, ContactShadows } from '@react-three/drei';
import { Model as Avatar } from './Avatar';
import { useEffect, useRef, useState } from 'react';
import {
  animationOptions,
  sectionTransitAnimations,
} from '../constants/avatar';
import { getPosition } from '../utils/3dState';

export default function Scene({ section }) {
  // section 0
  const ROTATION_SPEED = 0.3;

  const { viewport } = useThree();
  const characterGroup = useRef();
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);

  useEffect(() => {
    setAnimation(sectionTransitAnimations[section]);
  }, [section]);

  useFrame(({ clock }) => {
    if (!characterGroup.current) return;
    // section 0 animation
    if (section === 0) {
      // TODO rotate character self axis
      // Calculate the new position based on the rotation
      const angle = clock.getElapsedTime() * ROTATION_SPEED;

      const position = getPosition(characterGroup);
      const newX = position.x + Math.cos(angle);
      const newY = position.y; // Keeping y constant for simplicity
      const newZ = position.z + Math.sin(angle);
      characterGroup.current.position.set(newX, newY, newZ);
    }
    if (section === 1) {
      setAnimation(animationOptions.RUNNING_AND_JUMPING);
    }
  });

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
          },
          2: {
            x: 0,
            y: (-viewport.height - 1) * 2,
            z: -viewport.height,
            // rotateY: Math.PI / 2,
          },
          3: {
            x: 0,
            y: -viewport.height * 3 - 2,
            z: -viewport.height,
            scaleX: 0.5,
            scaleY: 0.5,
            scaleZ: 0.5,
          },
        }}
      >
        <group ref={characterGroup}>
          <motion.group position-y={0.5}>
            <Avatar animation={animation} />
          </motion.group>
          {section === 0 &&
          sectionTransitAnimations[section] === animationOptions.SITTING ? (
            <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
              <boxGeometry />
              <meshStandardMaterial color='white' />
            </mesh>
          ) : null}
        </group>
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          {section === 0 ? <planeGeometry /> : null}
          <meshStandardMaterial color='white' />
        </mesh>
      </motion.group>
    </>
  );
}
