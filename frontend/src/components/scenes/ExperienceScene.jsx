import { Model as IslandSummerModel } from '../models/IslandSummerModel';
import SkillBall from './SkillBall';
import { skills } from '../../constants/skills';
import { motion } from 'framer-motion-3d';
import ExperiencesText from './ExperiencesText';

export default function ExperienceScene({ isInView }) {
  const fullStarPosition = [1.14, 0.2, 1];
  return (
    <>
      <IslandSummerModel scale={2} />
      {isInView ? <ExperiencesText /> : null}
      <motion.group rotation-y={(Math.PI * 7) / 16}>
        <SkillBall
          skill={skills[0]}
          position={fullStarPosition}
          isFullStar={true}
          fullStarPosition={fullStarPosition}
          onTapBall={() => {}}
          fourStarScale={0.1}
          animation={false}
          clickable={false}
        />
      </motion.group>
    </>
  );
}
