import { Environment, Sky, ContactShadows } from '@react-three/drei';
import { Model as Avatar } from './Avatar';
import { animationOptions } from '../constants/avatar';

// todo remove leva

export const Experience = ({ section }) => {
  // animation in order of sections
  const avatarAnimations = [
    animationOptions.TYPING,
    animationOptions.FALLING,
    animationOptions.STANDING,
    animationOptions.TYPING,
  ];

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset='sunset' />
      <group position-y={-1}>
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
          <planeGeometry />
          <meshStandardMaterial color='white' />
        </mesh>
      </group>
    </>
  );
};
