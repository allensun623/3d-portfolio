import { Decal, Float, useTexture } from '@react-three/drei';
import { useControls } from 'leva';

export default function SkillBall({ skill, position }) {
  const [decal] = useTexture([skill.iconURL]);
  const {
    color,
    roughness,
    metalness,
    transmission,
    ior,
    thickness,
    clearcoat,
    specularIntensity,
  } = useControls({
    color: '#f57d0b',
    roughness: { value: 0, min: 0, max: 1 },
    metalness: { value: 0, min: 0, max: 1 },
    transmission: { value: 1, min: 0, max: 1 },
    ior: { value: 1.33, min: 0, max: 2.33 },
    thickness: { value: 0, min: 0, max: 100 },
    clearcoat: { value: 1, min: 0, max: 1 },
    specularIntensity: { value: 1, min: 0, max: 1 },
  });
  return (
    // <SkillBallCanvas>
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* <ambientLight intensity={0.25} /> */}
      {/* <directionalLight position={[0, 0, 0.05]} /> */}
      <mesh castShadow receiveShadow scale={0.2} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        {/* <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        /> */}
        <meshPhysicalMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
          transmission={transmission}
          thickness={thickness}
          clearcoat={clearcoat}
          specularIntensity={specularIntensity}
          ior={ior}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 2 * Math.PI]}
          map={decal}
          scale={1.5}
        />
      </mesh>
    </Float>
    // </SkillBallCanvas>
  );
}
