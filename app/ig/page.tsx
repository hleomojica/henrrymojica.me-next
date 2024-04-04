import Image from 'next/image';
import Link from './components/Link';
import Socials from './components/Socials';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center bg-rose-300 py-2'>
      <div className='flex w-full max-w-lg flex-col items-center px-4 py-8 '>
        <Image
          className='mb-4 h-24 w-24 rounded-full'
          src='/carolina.jpeg'
          alt='Profile'
          width={100}
          height={100}
        />
        <h2 className='mb-2 text-lg font-bold text-white'>Carolina Calle</h2>
        <Socials />

        <p className='mb-6 text-sm text-white'>
          Passionate about technology and enjoys coding in her free time. She
          has a strong background in web development. In her spare time, she
          loves exploring nature and spending time with her family and friends.
        </p>
        <div className='w-full space-y-4'>
          <Link />
          <Link />
          <Link />
        </div>
      </div>
      <div>Powered by Henrry</div>
    </div>
  );
}
