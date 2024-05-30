import { Environment, Sky, ContactShadows } from '@react-three/drei';
import { Model as Avatar } from './Avatar';
import { useControls } from 'leva';
import { animationOptions } from '../constants/avatar';

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: 'Typing',
      options: Object.values(animationOptions),
    },
  });

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
        <Avatar animation={animation} />
        {animation === animationOptions.TYPING ? (
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
