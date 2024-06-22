export default function BottomBanner({ text, icon }) {
  return (
    <div className='relative h-full w-full flex justify-center'>
      <div className='absolute inset-x-0 bottom-0 flex justify-center'>
        <div className='bg-black bg-opacity-50 flex justify-center p-10 items-center'>
          {icon && <img {...icon} className='max-h-28 w-auto' />}
          <p className='text-6xl text-white text-center h-auto'>{text}</p>
        </div>
      </div>
    </div>
  );
}
