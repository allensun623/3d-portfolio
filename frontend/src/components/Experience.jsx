import { motion } from 'framer-motion-3d';
import { useThree } from '@react-three/fiber';
import { Environment, Sky, ContactShadows } from '@react-three/drei';
import { Model as Avatar } from './Avatar';
import { animationOptions } from '../constants/avatar';

export const Experience = ({ section }) => {
  const { viewport } = useThree();
  // animation in order of sections
  const avatarAnimations = [
    animationOptions.SITING,
    animationOptions.FALLING,
    animationOptions.STANDING,
    animationOptions.TYPING,
  ];

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset='sunset' />
      <motion.group
        position={[0, -viewport.height, -10]}
        animate={`${section}`}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        // avatar state on each section
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
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
            rotateY: Math.PI / 2,
          },
          3: {
            x: 0,
            y: -viewport.height * 3 - 2,
            z: -viewport.height,
            scaleX: 2,
            scaleY: 2,
            scaleZ: 2,
          },
        }}
      >
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color='#000000'
        />
        <Avatar animation={avatarAnimations[section]} />
        {avatarAnimations[section] === animationOptions.TYPING ? (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color='white' />
          </mesh>
        ) : null}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          {section === 0 ? <planeGeometry /> : null}
          <meshStandardMaterial color='white' />
        </mesh>
      </motion.group>
    </>
  );
};
