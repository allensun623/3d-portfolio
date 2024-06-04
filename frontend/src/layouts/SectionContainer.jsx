import { motion } from 'framer-motion';
export default function SectionContainer({ children }) {
  return (
    <motion.section
      className='h-screen w-screen p-8 max-w-screen-2xl mx-auto flex align-start'
      // animate={{
      //   scale: [1, 2, 2, 1, 1],
      //   rotate: [0, 0, 270, 270, 0],
      //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      // }}
      // initial={{
      //   opacity: 0,
      //   y: 50,
      // }}
      // whileInView={{
      //   opacity: 1,
      //   y: 0,
      //   transition: {
      //     duration: 1,
      //     delay: 0.6,
      //   },
      // }}
    >
      {children}
    </motion.section>
  );
}
