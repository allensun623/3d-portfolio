export default function BottomBanner({ text }) {
  return (
    <div className='relative h-full w-full flex justify-center'>
      <div className='absolute inset-x-0 bottom-0 flex justify-center'>
        <div className='bg-black bg-opacity-50 flex justify-center p-6'>
          <p className='text-6xl text-white'>{text}</p>
        </div>
      </div>
    </div>
  );
}
