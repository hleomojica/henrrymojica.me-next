import Image from 'next/image';

export default function Link() {
  return (
    <div className='flex flex-col items-center gap-2  text-white'>
      <h2 className='font-semibold'>Header</h2>
      <a
        href='#'
        className='relative w-full rounded-full bg-white text-center text-[#82512e] hover:bg-gray-200'
      >
        <div className='flex items-center justify-center px-6 py-4'>
          <Image
            src='/social/facebook.svg'
            alt='Facebook'
            className='absolute left-2 h-10 w-10'
            width={100}
            height={100}
          />
          <span className=''>Link 1</span>
        </div>
      </a>
    </div>
  );
}
