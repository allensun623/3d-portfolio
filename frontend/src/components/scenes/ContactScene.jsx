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
      transition={{ delay: 1.5 }}
    >
      <mesh scale={0.5} position-y={0.5}>
        <boxGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh scale={0.5}>
        <cylinderGeometry args={[0.25, 0.25, 2]} />
        <meshStandardMaterial color='white' />
      </mesh>
    </motion.group>
  );
}
