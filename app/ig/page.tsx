import Image from 'next/image';
import Links from './components/Links';
import Socials from './components/Socials';
import Bio from './components/Bio';

export default function Page() {
  return (
    <div className='relative flex min-h-screen flex-col items-center bg-rose-300 py-2'>
      <div className='flex w-full max-w-lg flex-col items-center px-4 py-8 '>
        <Image
          className='mb-4 h-24 w-24 transform rounded-full transition-transform duration-200 hover:scale-105'
          src='/carolina.jpeg'
          alt='Profile'
          width={100}
          height={100}
        />
        <h2 className='mb-2 text-lg font-bold text-white'>Carolina Calle</h2>
        <Socials />
        <Bio />
        <Links />
      </div>
      <div className='absolute inset-x-0 bottom-0 text-center text-xs'>
        Powered by Henrry
      </div>
    </div>
  );
}
