import { motion } from 'framer-motion-3d';

export default function ContactScene({ isInView }) {
  return (
    <motion.group
      position-y={0.75}
      animate={isInView ? 'inView' : 'init'}
      variants={{
        init: {},
        inView: {
          y: 2,
        },
      }}
      transition={{ delay: 2.6 }}
    >
      <motion.mesh
        position-y={1.5}
        scale={3}
        animate={isInView ? 'inView' : 'init'}
        variants={{
          init: { scale: 3 },
          inView: {
            scale: 0.5,
            y: 0.5,
          },
        }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <boxGeometry />
        <meshStandardMaterial color='white' />
      </motion.mesh>
      <motion.mesh scale={0.5}>
        <cylinderGeometry args={[0.25, 0.25, 2]} />
        <meshStandardMaterial color='white' />
      </motion.mesh>
    </motion.group>
  );
}
