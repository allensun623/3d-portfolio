import SectionContainer from '@/layouts/SectionContainer';
import { motion } from 'framer-motion';
// import './styles.css';

export default function Project() {
  return (
    <SectionContainer>
      <motion.div
        className='box'
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 10 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        Projects
      </motion.div>
    </SectionContainer>
  );
}
