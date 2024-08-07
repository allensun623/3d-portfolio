import { clickableHeartBeatMotion } from '@/utils/motions/ballMotion';
import { motion } from 'framer-motion-3d';
import { useBallAction, useBallState } from '../context/FourStarBallContext';
import GlassBall from '../elements/GlassBall';
import SparkleBall from '../elements/SparkleBall';
import { Model as IslandSummerModel } from '../models/IslandSummerModel';
import ExperiencesText from './ExperiencesText';

export default function ExperienceScene({ isInView, isMobile }) {
  const { handleChaseDreamJob } = useBallAction();
  const { chaseDreamJob, clickable } = useBallState();

  const variants = {
    display: { scale: 0.1, transition: { duration: 2 } },
    chaseDreamJob: { scale: 0, transition: { duration: 0.1, delay: 1 } },
    clickable: clickableHeartBeatMotion({ scale: 0.1 }),
  };

  const isClickableInView = clickable && isInView;

  const handleClick = isClickableInView ? handleChaseDreamJob : () => {};

  const animateState = isClickableInView
    ? [variants.clickable]
    : chaseDreamJob
    ? [variants.chaseDreamJob]
    : [variants.display];

  const GlassBallComponent = (
    <GlassBall
      scale={0.09}
      isFourStar
      handleClick={handleClick}
      clickable={isClickableInView}
      animate={animateState}
      variants={variants}
    />
  );

  return (
    <>
      <IslandSummerModel scale={2} />
      {isInView && <ExperiencesText isMobile={isMobile} />}
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
