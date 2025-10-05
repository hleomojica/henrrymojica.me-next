import Image from 'next/image';
import Links from './components/Links';
import Socials from './components/Socials';
import Bio from './components/Bio';
import type { Metadata } from 'next';

import { getStoryblokApi } from '@storyblok/react/rsc';

export const metadata: Metadata = {
  title: 'Bio Link',
  description:
    'Connect with Henrry Mojica - Links to social profiles and contact information.',
  robots: {
    index: true,
    follow: true,
  },
};

async function fetchData() {
  let sbParams: Record<string, string> = { version: 'draft' };
  const storyblokApi = getStoryblokApi();
  const result = {
    data: null as any | null,
    error: null as Error | null,
  };
  try {
    const response = await storyblokApi.get(
      `cdn/stories/henrrymojica-me/ig`,
      sbParams
    );
    result.data = response.data.story;
    return result;
  } catch (error: any) {
    result.error = error;
    console.error('Error fetching data', error);
    return result;
  }
}

export default async function Page() {
  const { data } = await fetchData();
  if (!data) {
    return <div>Loading...</div>;
  }
  const content = data.content;
  const bgColor = content.backgroundColor;
  console.log('bgColor ->', bgColor);

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
        <h2 className='mb-2 text-lg font-bold text-white'>{content.name}</h2>
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
