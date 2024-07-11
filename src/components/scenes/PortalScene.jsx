import { Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useMemo } from 'react';
import { useBallState } from '../context/FourStarBallContext';
import { Model as IslandSpringModel } from '../models/IslandSpringModel';
import { Model as PortalRingModel } from '../models/IslandSpringPortalRingModel';
import CherryFlowerPathScene from './CherryFlowerPathScene';

export default function PortalScene({ viewport, isInView }) {
  const { sendToPortal } = useBallState();
  const cherryFlowersPath = useMemo(() => {
    return isInView ? <CherryFlowerPathScene viewport={viewport} /> : null;
  }, [isInView]);

  return (
    <>
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
                  transition: { duration: 3, delay: 6 },
                }
              : null
          }
        >
          <PortalRingModel />
          {isInView && (
            <Sparkles
              count={50}
              scale={1.2}
              size={30}
              speed={0.1}
              color={'#dfcee0'}
            />
          )}
        </motion.group>
      </motion.group>
      {cherryFlowersPath}
    </>
  );
}
