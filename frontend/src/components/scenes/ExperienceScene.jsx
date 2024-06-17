import { Model as IslandSummerModel } from '../models/IslandSummerModel';
import GlassBall from '../elements/GlassBall';
import { useBallState, useBallAction } from '../context/FourStarBallContext';
import { clickableHeartBeatMotion } from '../../utils/motions/ballMotion';

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
    clickable: clickableHeartBeatMotion(0.12),
  };

  return (
    <>
      <IslandSummerModel scale={2} />
      {/* {isInView ? <ExperiencesText /> : null} */}

      <GlassBall
        position={[1.1, 0.15, -0.9]}
        isFourStar={true}
        rotation={[-(Math.PI * 7) / 16, (Math.PI * 6) / 16, (Math.PI * 7) / 16]}
        handleClick={clickable && isInView ? handleChaseDreamJob : () => {}}
        clickable={clickable && isInView}
        animate={
          clickable && isInView
            ? 'clickable'
            : chaseDreamJob
            ? 'chaseDreamJob'
            : 'display'
        }
        variants={variants}
      />
    </>
  );
}
