import Image from 'next/image';

export default function Socials() {
  return (
    <div className='mb-6 flex space-x-4'>
      <a
        href='https://www.facebook.com/yourusername'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/social/facebook.svg'
          alt='Facebook'
          className='h-7 w-7'
          width={100}
          height={100}
        />
      </a>
      <a
        href='https://www.facebook.com/yourusername'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/social/instagram.svg'
          alt='Facebook'
          className='h-7 w-7'
          width={100}
          height={100}
        />
      </a>
      <a
        href='https://www.facebook.com/yourusername'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/social/linkedin.svg'
          alt='Facebook'
          className='h-7 w-7'
          width={100}
          height={100}
        />
      </a>
      <a
        href='https://www.facebook.com/yourusername'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/social/tiktok.svg'
          alt='Facebook'
          className='h-7 w-7'
          width={100}
          height={100}
        />
      </a>
    </div>
  );
}
