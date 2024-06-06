import { Decal, Float, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useControls } from 'leva';
import { useState, useEffect } from 'react';

export default function SkillBall({
  skill,
  position,
  isFullStar,
  fullStarPosition,
  onTapBall,
  fourStarScale,
}) {
  const [decal] = useTexture([skill.iconURL]);
  const [hovered, setHovered] = useState(false);
  const [ballThetaLength, setBallThetaLength] = useState(0);

  //www.reddit.com/r/threejs/comments/l63kgm/change_mouse_to_pointer_on_hover_with_react_three/
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    //  adding the cleanup function there inside the useEffect, in case it's unmounted while hovering it
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);

  // !TODO tab full start -> trigger big bang
  const handleTap = () => {
    document.body.style.cursor = 'auto';
    onTapBall(skill.score);
  };

  // TODO update after removing leva
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
        opacity: isFullStar ? 1 : 0.75,
      },
    },
  };

  const variants = {
    hidden: { scale: 0, x: 0, y: 0, z: -10 },
    visible: {
      scale: isFullStar ? fourStarScale : size,
      x: position[0],
      y: position[1],
      z: position[2],
    },
    hover: { scale: 0.3 },
    merge: {
      scale: 0,
      x: fullStarPosition[0],
      y: fullStarPosition[1],
      z: fullStarPosition[2],
      rotateX: Math.PI / 2,
      rotateY: Math.PI / 2,
      rotateZ: Math.PI / 2,
    },
  };

  return (
    <Float
      speed={isFullStar ? 0 : 0.5}
      rotationIntensity={isFullStar ? 0 : 2}
      floatIntensity={isFullStar ? 0 : 2}
    >
      <motion.group
        castShadow
        receiveShadow
        initial='hidden'
        animate='visible'
        whileHover='hover'
        whileTap='merge'
        variants={variants}
        transition={{ duration: 2 }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onTapStart={handleTap}
        rotation={[isFullStar ? -Math.PI / 9 : 0, 0, Math.PI]}
      >
        {/* inner fill */}
        <motion.mesh
          animate={{ opacity: 1 }}
          transition={{
            duration: (skill.score / 100) * 3,
            delay: 1.5,
            type: 'ease',
          }}
          onUpdate={() => {
            setBallThetaLength((prev) => (prev += Math.PI / 180));
          }}
        >
          <sphereGeometry
            args={[
              0.9,
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              ballThetaLength,
            ]}
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
    </Float>
  );
}
