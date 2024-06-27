import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import SectionContainer from '@/layouts/SectionContainer';

const Chevron = () => (
  <div className='flex justify-center'>
    <img
      className='h-auto w-6 md:w-12'
      src='/assets/images/others/chevron.png'
      alt='chevron'
    />
  </div>
);

const AnimatedScrollIndicator = () => (
  <div className='flex justify-center'>
    <div className='h-10 md:h-20 w-6 md:w-12 border-white border-solid border-2 md:border-4 rounded-full flex justify-center'>
      <motion.div
        className='border-white border-solid border-2 rounded-full h-3 md:h-6 w-1 mt-1'
        initial={{ y: '0px' }}
        animate={{
          y: '15px',
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

export default function Home({ section, isMobile }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (section > 0 && !scrolled) setScrolled(true);
  }, [section]);
  console.log({ isMobile });
  return (
    <SectionContainer>
      {!scrolled && (
        <div className='relative h-full w-full flex justify-center'>
          <div
            className={classNames(
              'absolute inset-x-0 h-auto w-full flex flex-col justify-center align-center',
              isMobile ? 'bottom-3' : 'bottom-0'
            )}
          >
            <AnimatedScrollIndicator />
            <Chevron />
            <Chevron />
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
