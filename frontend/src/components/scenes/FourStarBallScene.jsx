import { motion } from 'framer-motion-3d';
import { useBallState, useBallAction } from '../context/FourStarBallContext';
import GlassBall from '../elements/GlassBall';

export default function FourStarBallScene({ section, viewport }) {
  const { sendToPortal, chaseDreamJob } = useBallState();
  const { handleSendToPortal } = useBallAction();
  const glassBallProps = [
    {},
    {},
    {},
    {},
    {
      'rotation-y': Math.PI,
      'rotation-x': Math.PI / 8,
      position: [0, 1, 0.6],
      scale: 0.13,
      handleClick: handleSendToPortal,
    },
  ];

  return (
    <motion.group
      animate={`${section}`}
      variants={{
        0: { scale: 0 },
        1: {
          transition: { duration: 0.2, delay: 1 },
          y: 0.8,
          z: 0.45,
          scale: chaseDreamJob ? 1.25 : 0,
        },
        2: { scale: 0 },
        3: { scale: 0 },
        4: {
          transition: { duration: 5 },
          ...(sendToPortal ? { z: 3, y: -1.05, x: 0.7 } : {}),
        },
      }}
    >
      <GlassBall isFourStar={true} {...glassBallProps[section]} />
    </motion.group>
  );
}
