import SectionContainer from '../layouts/SectionContainer';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <SectionContainer>
      <div className='box'>
        <motion.div
          className='text-5xl'
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: false,
          }}
        >
          Skill Ball Collection
        </motion.div>
      </div>
    </SectionContainer>
  );
}
