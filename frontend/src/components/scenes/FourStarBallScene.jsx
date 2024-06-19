import { motion } from 'framer-motion-3d';
import { useBallState, useBallAction } from '../context/FourStarBallContext';
import GlassBall from '../elements/GlassBall';
import { clickableHeartBeatMotion } from '../../utils/motions/ballMotion';

export default function FourStarBallScene({ section }) {
  const { sendToPortal, chaseDreamJob, clickable } = useBallState();
  const { handleSendToPortal } = useBallAction();

  return (
    <motion.group
      animate={`${section}`}
      variants={{
        0: { scale: 0 },
        1: {
          x: 0.1,
          y: 0.7,
          z: 0.45,
          scale: chaseDreamJob ? 1.25 : 0,
          transition: { duration: 0.2, delay: 1 },
        },
        2: { scale: 0 },
        3: { scale: 0 },
        4: {
          rotateX: Math.PI / 8,
          rotateY: Math.PI,
          scale: 0.8,
          transition: { duration: 2 },
          ...(sendToPortal
            ? { x: 2.8, y: -1.3, z: 6.5 }
            : { x: 0.1, y: 0.75, z: 0.7 }),
        },
      }}
    >
      <motion.group animate={clickable ? clickableHeartBeatMotion() : {}}>
        <GlassBall
          isFourStar
          {...(section === 4 && clickable
            ? { clickable, handleClick: handleSendToPortal }
            : {})}
        />
      </motion.group>
    </motion.group>
  );
}
