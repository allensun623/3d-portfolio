import { motion } from 'framer-motion-3d';

export default function CloudScene({ section }) {
  return (
    <motion.mesh
      scale={[0.8, 0.4, 0.8]}
      animate={`${section}`}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      variants={{
        0: { x: 0, y: 0.25 },
        1: { x: 0, y: 0.25 },
        2: {
          x: 0,
          y: 0.25,
          // rotateY: Math.PI / 2,
        },
        3: {
          x: -2,
          y: 2.5,
          // rotationX: Math.PI,
          scaleX: 1.5,
          scaleY: 1,
        },
        4: { x: 0, y: 0.25 },
      }}
    >
      <icosahedronGeometry />
      <meshStandardMaterial color='yellow' />
    </motion.mesh>
  );
}
