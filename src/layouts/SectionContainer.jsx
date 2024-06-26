import { motion } from 'framer-motion';
export default function SectionContainer({ children }) {
  return (
    <motion.section className='h-screen h-dvh w-screen py-0 md:py-8 mx-auto flex align-start'>
      {children}
    </motion.section>
  );
}
