import { Model as IslandSummerModel } from '../models/IslandSummerModel';
import GlassBall from '../elements/GlassBall';
import { useBallState, useBallAction } from '../context/FourStarBallContext';
import { clickableHeartBeatMotion } from '../../utils/motions/ballMotion';
import ExperiencesText from './ExperiencesText';
import SparkleBall from '../elements/SparkleBall';
import { motion } from 'framer-motion-3d';

export default function ExperienceScene({ isInView }) {
  const { handleChaseDreamJob } = useBallAction();
  const { chaseDreamJob, clickable } = useBallState();

  const variants = {
    display: {
      scale: 0.1,
      transition: { duration: 2 },
    },
    chaseDreamJob: {
      scale: 0,
      transition: { duration: 0.1, delay: 1 },
    },
    clickable: clickableHeartBeatMotion(0.1),
  };

  const isClickableInView = clickable && isInView;

  const animateState = isClickableInView
    ? 'clickable'
    : chaseDreamJob
    ? 'chaseDreamJob'
    : 'display';

  const GlassBallComponent = (
    <GlassBall
      scale={0.09}
      isFourStar={true}
      handleClick={isClickableInView ? handleChaseDreamJob : () => {}}
      clickable={isClickableInView}
      animate={animateState}
      variants={variants}
    />
  );

  return (
    <>
      <IslandSummerModel scale={2} />
      {isInView && <ExperiencesText />}
      <motion.group
        position={[1.5, 0.21, -0.7]}
        rotation={[-(Math.PI * 7) / 16, (Math.PI * 6) / 16, (Math.PI * 7) / 16]}
      >
        {isClickableInView ? (
          <SparkleBall size={0.15}>{GlassBallComponent}</SparkleBall>
        ) : (
          GlassBallComponent
        )}
      </motion.group>
    </>
  );
}
