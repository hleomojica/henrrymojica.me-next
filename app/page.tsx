import Image from 'next/image';
import { Suspense } from 'react';
import linkedin from 'public/images/linkedin.svg';
import github from 'public/images/github.svg';
import { StaticImageData } from 'next/image';
import ExperienceList from './components/Experience/List';
import { Experience } from '@/types';

const experiences: Experience[] = [];

function ChannelSkeleton() {
  return (
    <>
      <div className='!ml-0 flex h-[98px] w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800' />
      <div className='flex h-[98px] w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800' />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      />
    </svg>
  );
}
interface ChannelLinkProps {
  img: StaticImageData;
  name: string;
  link: string;
}

async function ChannelLink({ img, name, link }: ChannelLinkProps) {
  return (
    <a
      href={link}
      target='_blank'
      className='flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-2 py-3 dark:border-neutral-700 dark:bg-neutral-800'
    >
      <div className='flex items-center space-x-4'>
        <div className='relative'>
          <Image
            alt={name}
            src={img}
            height={24}
            width={24}
            sizes='20vw'
            className='h-12 w-12 rounded-full border border-neutral-200 dark:border-neutral-700'
          />
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold text-neutral-900 dark:text-neutral-100'>
            {name}
          </p>
        </div>
      </div>
      <div className='text-neutral-700 dark:text-neutral-300'>
        <ArrowIcon />
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className='flex flex-col items-start gap-5'>
      <h1 className='text-2xl font-bold'>Hey, I&apos;m Henrry Mojica 👋</h1>
      <div className='h-full w-full'>
        <p className='text-md'>
          Highly skilled Full-stack Software Developer with 4+ years of
          experience. I&apos;m dedicated to crafting top-tier software
          solutions, adept at adapting to new technologies, and skilled in
          maintaining and upgrading applications. Collaboration is at the core
          of my work, driving successful outcomes through effective
          communication. I&apos;m committed to continuous professional growth to
          stay at the forefront of the industry.
        </p>

        {experiences.length > 0 && (
          <div className='space-y-4sm:space-x-4 my-8 flex w-full flex-col space-x-0 sm:space-y-0'>
            <h1 className='mb-2 text-xl'>Experience</h1>
            <ExperienceList experiences={experiences} />
          </div>
        )}

        <div className='my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
          <Suspense fallback={<ChannelSkeleton />}>
            <ChannelLink
              img={linkedin}
              name='Henrry Mojica'
              link='https://www.linkedin.com/in/hleomojica'
            />
            <ChannelLink
              img={github}
              name='@hleomojica'
              link='https://github.com/hleomojica'
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
