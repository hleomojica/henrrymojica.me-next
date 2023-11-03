import Image from 'next/image'



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start gap-5">
      <h1 className="text-2xl font-bold">Hey, I'm Henrry Mojica 👋</h1>
      <div className="w-full h-full">
       <p className="text-md">
       Highly skilled Full-stack Software Developer with 4+ years of experience. I'm dedicated to crafting top-tier software solutions, adept at adapting to new technologies, and skilled in maintaining and upgrading applications. Collaboration is at the core of my work, driving successful outcomes through effective communication. I'm committed to continuous professional growth to stay at the forefront of the industry.
       </p>
       <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        {/* <Suspense fallback={<ChannelSkeleton />}>
          <ChannelLink
            img={avatar}
            name="@leerob"
            link="https://www.youtube.com/@leerob"
          />
          <ChannelLink
            img={vercel}
            name="@vercel"
            link="https://www.youtube.com/@vercelhq"
          />
        </Suspense> */}
      </div>
      </div>
    </div>
  )
}
