import { Decal, Float, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useControls } from 'leva';

export default function SkillBall({ skill, position }) {
  const [decal] = useTexture([skill.iconURL]);
  // TODO remove leva
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
  const variants = {
    hidden: { scale: 0, x: 0, y: 0, z: -10 },
    visible: {
      scale: 0.2,
      x: position[0],
      y: position[1],
      z: position[2],
    },
    hover: { scale: 0.3 },
  };
  // TODO hover cursor: pointer
  //  TODO click: send to tech deck
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* <ambientLight intensity={0.25} /> */}
      <motion.mesh
        castShadow
        receiveShadow
        scale={0.2}
        position={[0, 0, -10]}
        initial='hidden'
        animate='visible'
        whileHover='hover'
        variants={variants}
        transition={{ duration: 2 }}
      >
        <icosahedronGeometry args={[1, 1]} />
        <motion.meshPhysicalMaterial
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
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0.5 },
          }}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 2 * Math.PI]}
          map={decal}
          scale={1.5}
        />
      </motion.mesh>
    </Float>
  );
}
