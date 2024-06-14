import GlassBall from './elements/GlassBall';
import { motion } from 'framer-motion-3d';

export default function Welcome() {
  return (
    <motion.group>
      <GlassBall
        scale={0.2}
        isFullStar={true}
        innerProps={{
          onTapBall: () => {},
          fourStarScale: 0.1,
          animation: false,
          clickable: false,
        }}
      />
    </motion.group>
  );
}
