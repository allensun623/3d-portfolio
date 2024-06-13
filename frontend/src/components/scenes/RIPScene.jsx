import { Model as IslandSpringModel } from '../models/IslandSpringModel';
import { Model as PortalRingModel } from '../models/IslandSpringPortalRingModel';
import { motion } from 'framer-motion-3d';
import CherryFlowerPathScene from './CherryFlowerPathScene';

export default function RIPScene({ viewport, isInView }) {
  return (
    <motion.group>
      <motion.group scale={2}>
        <IslandSpringModel />
        {isInView ? (
          <motion.group
            initial={{}}
            animate={{
              y: 0.3,
              z: -0.1,
              scale: 0,
              transition: { duration: 3, delay: 8.5 },
            }}
          >
            <PortalRingModel />
          </motion.group>
        ) : null}
      </motion.group>
      {isInView ? <CherryFlowerPathScene viewport={viewport} /> : null}
    </motion.group>
  );
}
