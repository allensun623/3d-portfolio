export default function BottomBanner({ text, icon, afterContent }) {
  return (
    <div className='relative h-full w-full flex justify-center'>
      <div className='absolute inset-x-0 bottom-2 flex justify-center'>
        <div className='bg-black bg-opacity-50 flex justify-center p-2 md:p-10 items-center'>
          {icon && <img {...icon} className='h-12 md:max-h-28 w-auto' />}
          <p className='text-xl md:text-6xl text-white text-center h-auto'>
            {text}
          </p>
          {afterContent || null}
        </div>
      </div>
    </div>
  );
}
