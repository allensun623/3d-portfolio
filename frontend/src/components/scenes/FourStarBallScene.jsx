import { motion } from 'framer-motion-3d';
import { useBallState, useBallAction } from '../context/FourStarBallContext';
import GlassBall from '../elements/GlassBall';
import { clickableHeartBeatMotion } from '../../utils/motions/ballMotion';

export default function FourStarBallScene({ section }) {
  const { sendToPortal, chaseDreamJob, fireballCompleted, clickable } =
    useBallState();
  const { handleSendToPortal, handleFireballCompleted } = useBallAction();

  const fireball = {
    rotateX: Array(8).fill(Math.PI / 32),
    rotateY: Array(8).fill((Math.PI * 17) / 16),
    x: [0.1, 0.09, 0.01, 0.2, 0.2, 0.01, 0, 4, 4],
    y: [0.75, 1.38, 1.2, 1.2, 1.2, 1.2, 1.2, -1.7, -1.95],
    z: [0.7, 0.7, 0.2, -0.2, -0.2, 0.2, 3, 8, 8],
    scale: [0.8, 0.31, 0.31, 0.5, 1, 1.25, 5, 9, 1],
    transition: {
      duration: 6,
      type: 'Linear',
      times: [0, 0.1, 0.35, 0.4, 0.45, 0.55, 0.6, 0.9, 1],
    },
  };

  return (
    <motion.group
      animate={sendToPortal && !fireballCompleted ? 'fireball' : `${section}`}
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
          rotateX: Math.PI / 32,
          rotateY: (Math.PI * 17) / 16,
          transition: { duration: 2 },
          ...(fireballCompleted
            ? {
                x: 4,
                y: -1.95,
                z: 8,
                scale: 1,
              }
            : { x: 0.1, y: 0.75, z: 0.7, scale: 0.8 }),
        },
        fireball,
      }}
      onAnimationComplete={(definition) => {
        if (definition === 'fireball') handleFireballCompleted();
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
