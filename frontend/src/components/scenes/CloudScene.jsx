import { motion } from 'framer-motion-3d';
import { Model as Cloud } from '../models/GokuCloudModel';

export default function CloudScene({ section }) {
  return (
    <motion.group
      scale={0.6}
      animate={`${section}`}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      rotation-y={Math.PI / 2}
      variants={{
        0: { x: 0.2, y: 0.2, z: 0.35 },
        1: { x: 0, y: 0.25 },
        2: {
          x: 0,
          y: 0.25,
          rotateY: Math.PI / 2,
          rotateX: -Math.PI / 8,
        },
        3: {
          x: -2.7,
          y: 3.3,
          z: 0.2,
          scaleX: 0.5,
          scaleY: 0.5,
          scaleZ: 1,
          rotateX: Math.PI / 2,
          rotateY: -Math.PI / 8,
          // rotateZ: Math.PI / 4,
        },
        4: { x: 0, y: 0.35, z: 0.5, scale: 0.4 },
      }}
    >
      <Cloud />
    </motion.group>
  );
}