import { motion } from 'framer-motion-3d';
import SkillBall from './SkillBall';
import { skills } from '../../constants/skills';

export default function FourStarBallScene({ section, viewport }) {
  const fullStarPosition = [0, 1, -0.6];

  return (
    <motion.group
      rotation-y={Math.PI}
      animate={`${section}`}
      variants={{
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
      }}
    >
      <SkillBall
        skill={skills[0]}
        position={fullStarPosition}
        isFullStar={true}
        fullStarPosition={fullStarPosition}
        onTapBall={() => {}}
        fourStarScale={0.13}
        animation={false}
        clickable={false}
      />
    </motion.group>
  );
}