import { motion } from 'framer-motion';
export default function SectionContainer({ children }) {
  return (
    <motion.section className='h-screen w-screen py-8 mx-auto flex align-start'>
      {children}
    </motion.section>
  );
}
