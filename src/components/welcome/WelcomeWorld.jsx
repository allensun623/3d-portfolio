import { bottomBannerText } from '@/constants/text';
import { motion } from 'framer-motion';

export default function WelcomeWorld() {
  return (
    <>
      <div className='z-10 fixed top-0 left-0 overflow-hidden flex flex-col justify-center items-center w-full h-1/2'>
        <div className='max-w-screen-2xl flex flex-col justify-center items-center space-y-2 md:space-y-8 px-3'>
          <p className='text-white text-3xl sm:text-4xl md:text-7xl xl:text-9xl text-center whitespace-pre-line'>
            {bottomBannerText.welcome.welcomeToMyWorld}
          </p>
          <p className='text-white text-2xl sm:text-3xl md:text-5xl xl:text-7xl text-center font-light whitespace-pre-line'>
            {bottomBannerText.welcome.introduction}
          </p>
        </div>
      </div>
      {/* mouse click animation */}
      <motion.div
        className='z-10 fixed bottom-0 left-0 overflow-hidden flex flex-col justify-center items-center w-full h-2/3 pointer-events-none'
        initial={{ opacity: 0, x: 10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 5 }}
      >
        <img src='/public/assets/gif/Scroll Down Gesture.gif' alt='' />
      </motion.div>
      <div className='z-10 fixed bottom-0 left-0 overflow-hidden flex flex-col justify-center items-center w-full h-1/5 md:h-1/4 space-y-5'>
        <p className='text-white text-lg sm:text-xl md:text-2xl xl:text-4xl text-center font-extralight whitespace-pre-line leading:none md:leading-normal'>
          {bottomBannerText.welcome.memory}
        </p>
      </div>
    </>
  );
}
