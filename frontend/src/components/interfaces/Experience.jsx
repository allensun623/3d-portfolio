import SectionContainer from '../../layouts/SectionContainer';
import { motion } from 'framer-motion';
// import './styles.css';
export default function Experience({ isInView }) {
  return (
    <SectionContainer>
      <motion.div
        animate={isInView ? 'show' : 'hidden'}
        variants={{
          hidden: {},
          show: {},
        }}
      >
        {[0, 1, 2, 3].map((p, idx) => (
          <motion.div key={idx}>experience {idx}</motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
