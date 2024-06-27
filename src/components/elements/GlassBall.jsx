import { useEffect, useState } from 'react';
import { Decal, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { skills } from '../../constants/skills';

export default function GlassBall({
  isFourStar = false,
  skill = skills[0],
  innerRadius = 0.9,
  innerThetaLength = Math.PI,
  innerProps,
  position = [0, 0, 0],
  scale = 0.2,
  handleClick = () => {},
  clickable = false,
  emissive,
  emissiveIntensity,
  ...otherProps
}) {
  const [decal] = useTexture([skill.iconURL]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered && clickable ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  const meshProps = {
    roughness: 0,
    metalness: 0,
    transmission: 0.8,
    thickness: 0,
    clearcoat: 0.1,
    specularIntensity: 0.5,
    ior: 1.33,
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

  const materialProps = {
    color: '#ffd7a2',
    ...(emissive && { emissive }),
    emissiveIntensity: emissiveIntensity || 0,
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
      onClick={handleClick}
      {...otherProps}
    >
      {/* inner fill */}
      <motion.mesh {...innerProps}>
        <sphereGeometry
          // [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]
          args={[innerRadius, ...Array(5).fill(undefined), innerThetaLength]}
        />
        <motion.meshPhysicalMaterial {...materialProps} />
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
        <motion.meshPhysicalMaterial color={'#ffd7a2'} {...meshProps} />
      </motion.mesh>
    </motion.group>
  );
}
