import { Model as IslandSummerModel } from '../models/IslandSummerModel';
import GlassBall from '../elements/GlassBall';
import ExperiencesText from './ExperiencesText';

export default function ExperienceScene({ isInView }) {
  return (
    <>
      <IslandSummerModel scale={2} />
      {isInView ? <ExperiencesText /> : null}
      <GlassBall
        position={[1.1, 0.15, -0.9]}
        isFullStar={true}
        rotation-x={-(Math.PI * 7) / 16}
        rotation-y={(Math.PI * 6) / 16}
        rotation-z={(Math.PI * 7) / 16}
        scale={0.12}
      />
    </>
  );
}
