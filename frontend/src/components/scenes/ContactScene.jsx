import { motion } from 'framer-motion-3d';
import { Model as HouseModel } from '../models/IslandWinterHouseModel';
import { Model as IslandWinterModel } from '../models/IslandWinterModel';

export default function ContactScene({ isInView }) {
  return (
    <>
      <motion.group
        position-y={0}
        animate={isInView ? 'inView' : 'init'}
        variants={{
          init: {},
          inView: {
            y: 0.5,
          },
        }}
        transition={{ delay: 2.6 }}
      >
        <motion.mesh
          position-y={0}
          scale={1.5}
          animate={isInView ? 'inView' : 'init'}
          variants={{
            init: { scale: 1.5 },
            inView: {
              scale: 0.4,
              y: 0.15,
            },
          }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <HouseModel />
        </motion.mesh>
        <motion.mesh scale={0.5}>
          <cylinderGeometry args={[0.2, 0.2, 2]} />
          <meshStandardMaterial color='white' />
        </motion.mesh>
      </motion.group>
      <IslandWinterModel scale={2} />
    </>
  );
}
