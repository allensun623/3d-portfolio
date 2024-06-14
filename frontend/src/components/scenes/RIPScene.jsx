import { Model as IslandSpringModel } from '../models/IslandSpringModel';
import { Model as PortalRingModel } from '../models/IslandSpringPortalRingModel';
import { motion } from 'framer-motion-3d';
import CherryFlowerPathScene from './CherryFlowerPathScene';
import { useBallState } from '../context/FourStarBallContext';
import { useMemo } from 'react';

export default function RIPScene({ viewport, isInView }) {
  const sendToPortal = useBallState();
  const cherryFlowersPath = useMemo(() => {
    return isInView ? <CherryFlowerPathScene viewport={viewport} /> : null;
  }, [isInView]);

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
                  transition: { duration: 3, delay: 4.5 },
                }
              : null
          }
        >
          <PortalRingModel />
        </motion.group>
      </motion.group>
      {cherryFlowersPath}
    </motion.group>
  );
}
