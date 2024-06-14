import { Model as IslandSpringModel } from '../models/IslandSpringModel';
import { Model as PortalRingModel } from '../models/IslandSpringPortalRingModel';
import { motion } from 'framer-motion-3d';
import CherryFlowerPathScene from './CherryFlowerPathScene';

export default function RIPScene({ viewport, isInView, sendToPortal }) {
  return (
    <motion.group>
      <motion.group scale={2}>
        <IslandSpringModel />
        <motion.group
          initial={{}}
          animate={
            sendToPortal
              ? {
                  y: 0.3,
                  z: -0.1,
                  scale: 0,
                  transition: { duration: 3, delay: 5.5 },
                }
              : null
          }
        >
          <PortalRingModel />
        </motion.group>
      </motion.group>
      {isInView ? <CherryFlowerPathScene viewport={viewport} /> : null}
    </motion.group>
  );
}
