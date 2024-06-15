import { useEffect, useState } from 'react';
import { Decal, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useControls } from 'leva';
import { skills } from '../../constants/skills';

export default function GlassBall({
  isFourStar = false,
  skill = skills[0],
  innerRadius = 0.9,
  innerThetaLength = Math.PI,
  innerProps,
  position = [0, 0, 0],
  scale = 0.2,
  handleClick,
  ...otherProps
}) {
  const [decal] = useTexture([skill.iconURL]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  const {
    color,
    roughness,
    metalness,
    transmission,
    ior,
    thickness,
    clearcoat,
    specularIntensity,
    size,
  } = useControls({
    color: '#ffd7a2',
    size: { value: 0.15, min: 0, max: 1 },
    roughness: { value: 0, min: 0, max: 1 },
    metalness: { value: 0, min: 0, max: 1 },
    transmission: { value: 0.98, min: 0, max: 1 },
    ior: { value: 1.33, min: 0, max: 2.33 },
    thickness: { value: 0, min: 0, max: 100 },
    clearcoat: { value: 0.1, min: 0, max: 1 },
    specularIntensity: { value: 0.5, min: 0, max: 1 },
    thetaLength: {
      value: (skill.score / 100) * Math.PI,
      min: 0,
      max: 4 * Math.PI,
    },
  });

  const meshProps = {
    roughness,
    metalness,
    transmission,
    thickness,
    clearcoat,
    specularIntensity,
    ior,
    polygonOffset: true,
    polygonOffsetFactor: -5,
    flatShading: true,
    initial: 'hidden',
    animate: 'visible',
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: isFourStar ? 1 : 0.75,
      },
    },
  };

  return (
    <motion.group
      castShadow
      receiveShadow
      position={position}
      scale={scale}
      rotation={[isFourStar ? -Math.PI / 9 : 0, 0, Math.PI]}
      transition={{ duration: 2 }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        console.log('onclick');
        handleClick();
      }}
      {...otherProps}
    >
      {/* inner fill */}
      <motion.mesh {...innerProps}>
        <sphereGeometry
          // [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]
          args={[innerRadius, ...Array(5).fill(undefined), innerThetaLength]}
        />
        <motion.meshPhysicalMaterial color={color} />
      </motion.mesh>
      {/* outer glass */}
      <motion.mesh>
        <sphereGeometry />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, Math.PI]}
          map={decal}
          scale={1.5}
        />
        <motion.meshPhysicalMaterial color={color} {...meshProps} />
      </motion.mesh>
    </motion.group>
  );
}
