import { Decal, Float, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
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
  const [torusArc, setTorusArc] = useState(0);

  //www.reddit.com/r/threejs/comments/l63kgm/change_mouse_to_pointer_on_hover_with_react_three/
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    //  adding the cleanup function there inside the useEffect, in case it's unmounted while hovering it
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);

  const handleTap = () => {
    document.body.style.cursor = 'auto';
    onTapBall(skill.score);
  };

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
    radius,
    tube,
    radialSegments,
    tubularSegments,
  } = useControls({
    color: '#f57d0b',
    roughness: { value: 0, min: 0, max: 1 },
    metalness: { value: 0, min: 0, max: 1 },
    transmission: { value: 1, min: 0, max: 1 },
    ior: { value: 1.33, min: 0, max: 2.33 },
    thickness: { value: 0, min: 0, max: 100 },
    clearcoat: { value: 1, min: 0, max: 1 },
    specularIntensity: { value: 1, min: 0, max: 1 },
    radius: { value: 1.36, min: 0, max: 3 },
    tube: { value: 0.2, min: 0, max: 1 },
    radialSegments: { value: 8.5, min: 0, max: 10 },
    tubularSegments: { value: 10, min: 0, max: 100 },
    arc: { value: Math.PI * 2, min: 0, max: Math.PI * 2 },
  });
  // TODO update after removing leva
  const torusArgs = [radius, tube, radialSegments, tubularSegments];
  const torusGeometries = [
    {
      color,
      args: [...torusArgs, torusArc],
    },
    {
      color: '#ffffff',
      args: [...torusArgs, torusArc - 2 * Math.PI],
    },
  ];

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
      scale: isFullStar ? fourStarScale : 0.25,
      x: position[0],
      y: position[1],
      z: position[2],
    },
    hover: { scale: 0.4 },
    merge: {
      scale: 0,
      x: fullStarPosition[0],
      y: fullStarPosition[1],
      z: fullStarPosition[2],
      rotate: Math.PI / 2,
    },
  };

  useFrame(() => {
    if (torusArc < (2 * Math.PI * skill.score) / 100) {
      setTorusArc((prev) => prev + 0.01);
    }
  });

  // TODO movement boundary
  return (
    <Float
      speed={isFullStar ? 0 : 0.5}
      rotationIntensity={isFullStar ? 0 : 1}
      floatIntensity={isFullStar ? 0 : 2}
    >
      {/* <ambientLight intensity={0.25} /> */}
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
        rotation={[isFullStar ? -Math.PI / 9 : 0, 0, 0]}
      >
        <motion.mesh>
          <icosahedronGeometry args={[1, 1]} />
          <motion.meshPhysicalMaterial color={color} {...meshProps} />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 2 * Math.PI]}
            map={decal}
            scale={1.5}
          />
        </motion.mesh>
        {/* torus  */}
        {isFullStar ? null : (
          <motion.group>
            {torusGeometries.map((tg, idx) => (
              <motion.mesh key={idx}>
                <torusGeometry args={tg.args} />
                <motion.meshPhysicalMaterial color={tg.color} {...meshProps} />
              </motion.mesh>
            ))}
          </motion.group>
        )}
      </motion.group>
    </Float>
  );
}
