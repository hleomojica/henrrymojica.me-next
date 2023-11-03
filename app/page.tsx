import Image from 'next/image'
import { Suspense } from 'react';
import vercel from 'public/images/vercel.jpg';
import linkedin from 'public/images/linkedin.svg';
import github from 'public/images/github.svg';
import { StaticImageData } from "next/image"



function ChannelSkeleton() {
  return (
    <>
      <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full h-[98px] !ml-0" />
      <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full h-[98px]" />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
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
  let subscribers=12;

  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            alt={name}
            src={img}
            height={24}
            width={24}
            sizes="20vw"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-12 w-12"
          />
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-5 -right-6">
            <img
              alt="YouTube logo"
              src="/youtube-logo.svg"
              width="15"
              height="11"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          {/* <p className="text-neutral-600 dark:text-neutral-400">
            {subscribers} subscribers
          </p> */}
        </div>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-5">
      <h1 className="text-2xl font-bold">Hey, I&apos;m Henrry Mojica 👋</h1>
      <div className="w-full h-full">
       <p className="text-md">
       Highly skilled Full-stack Software Developer with 4+ years of experience. I&apos;m dedicated to crafting top-tier software solutions, adept at adapting to new technologies, and skilled in maintaining and upgrading applications. Collaboration is at the core of my work, driving successful outcomes through effective communication. I&apos;m committed to continuous professional growth to stay at the forefront of the industry.
       </p>
       <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <Suspense fallback={<ChannelSkeleton />}>
         
          <ChannelLink
            img={linkedin}
            name="Henrry Mojica"
            link="https://www.linkedin.com/in/hleomojica"
          />
          <ChannelLink
            img={github}
            name="@hleomojica"
            link="https://github.com/hleomojica"
          />
        </Suspense>
      </div>
      </div>
    </div>
  )
}
