import SectionContainer from '@/layouts/SectionContainer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Chevron = () => (
  <div className='flex justify-center'>
    <img
      className='h-auto w-16'
      src='/assets/images/others/chevron.png'
      alt='chevron'
    />
  </div>
);

const AnimatedScrollIndicator = () => (
  <div className='flex justify-center'>
    <div className='h-28 w-16 border-white border-solid border-8 rounded-full flex justify-center'>
      <motion.div
        className='border-white border-solid border-4 rounded-full h-6 w-1 mt-1'
        initial={{ y: '0px' }}
        animate={{
          y: '20px',
          transition: {
            duration: 1.5,
            repeat: Infinity,
            type: 'tween',
          },
        }}
      />
    </div>
  </div>
);

export default function About({ section }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (section > 0 && !scrolled) setScrolled(true);
  }, [section]);

  return (
    <SectionContainer>
      {!scrolled && (
        <div className='relative h-full w-full flex justify-center'>
          <div className='absolute inset-x-0 bottom-0 h-auto w-full flex flex-col justify-center align-center'>
            <AnimatedScrollIndicator />
            <Chevron />
            <Chevron />
          </div>
        </div>
      )}
    </SectionContainer>
  );
}