import { Model as IslandSummerModel } from '../models/IslandSummerModel';
import GlassBall from '../elements/GlassBall';
import ExperiencesText from './ExperiencesText';
import { useBallState, useBallAction } from '../context/FourStarBallContext';

export default function ExperienceScene({ isInView }) {
  const { handleChaseDreamJob } = useBallAction();
  const { chaseDreamJob } = useBallState();
  return (
    <>
      <IslandSummerModel scale={2} />
      {isInView ? <ExperiencesText /> : null}

      <GlassBall
        position={[1.1, 0.15, -0.9]}
        isFourStar={true}
        rotation={[-(Math.PI * 7) / 16, (Math.PI * 6) / 16, (Math.PI * 7) / 16]}
        handleClick={handleChaseDreamJob}
        animate={{
          scale: chaseDreamJob ? 0 : 0.1,
          transition: chaseDreamJob
            ? { duration: 0.1, delay: 1 }
            : { duration: 2 },
        }}
      />
    </>
  );
}
