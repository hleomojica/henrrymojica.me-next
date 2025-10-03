'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ThemeContext } from './context/MainContext';

// Navigation Component
function Navigation() {
  return (
    <nav className='bg-[var(--background)]/95 fixed left-0 right-0 top-0 z-50 border-b border-black/5 backdrop-blur-sm dark:border-white/5'>
      <div className='mx-auto flex max-w-[1400px] items-center justify-between px-8 py-6'>
        <div className='text-2xl font-black tracking-tight'>HM</div>
        <div className='hidden items-center gap-12 text-sm font-bold uppercase tracking-wider md:flex'>
          <a href='#about' className='transition-opacity hover:opacity-60'>
            About
          </a>
          <a href='#experience' className='transition-opacity hover:opacity-60'>
            Experience
          </a>
          <a href='#portfolio' className='transition-opacity hover:opacity-60'>
            Portfolio
          </a>
          <a href='#contact' className='transition-opacity hover:opacity-60'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className='flex min-h-screen items-center justify-center px-8 pt-24'>
      <div className='w-full max-w-[1400px]'>
        <div className='mb-12 flex items-start justify-between'>
          <div className='flex-1'>
            <h1 className='mb-6 text-[clamp(3rem,12vw,11rem)] font-black uppercase leading-[0.85] tracking-tighter'>
              HENRRY
              <br />
              MOJICA
            </h1>
          </div>
          <div className='hidden text-right md:block'>
            <div className='mb-2 text-sm font-bold uppercase tracking-wider'>
              EST.
            </div>
            <div className='text-6xl font-black'>2016</div>
          </div>
        </div>

        <div className='relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='p-8 text-center text-white'>
              <h2 className='mb-4 text-4xl font-bold md:text-6xl'>
                Full-Stack Developer
              </h2>
              <p className='text-xl opacity-90 md:text-2xl'>
                Building innovative digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section id='about' className='px-8 py-32'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='grid gap-16 md:grid-cols-2'>
          <div>
            <h2 className='mb-8 text-5xl font-black uppercase tracking-tight md:text-7xl'>
              About Me
            </h2>
          </div>
          <div className='space-y-6 text-lg leading-relaxed'>
            <p>
              Highly skilled Full-stack Software Developer with 4+ years of
              experience. I&apos;m dedicated to crafting top-tier software
              solutions, adept at adapting to new technologies, and skilled in
              maintaining and upgrading applications.
            </p>
            <p>
              Collaboration is at the core of my work, driving successful
              outcomes through effective communication. I&apos;m committed to
              continuous professional growth to stay at the forefront of the
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Portfolio Showcase Component
function PortfolioShowcase() {
  const projects = [
    {
      title: 'Project Alpha',
      category: 'Web App',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Project Beta',
      category: 'Mobile',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Project Gamma',
      category: 'Platform',
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <section
      id='portfolio'
      className='bg-black/[0.02] px-8 py-32 dark:bg-white/[0.02]'
    >
      <div className='mx-auto max-w-[1400px]'>
        <h2 className='mb-16 text-5xl font-black uppercase tracking-tight md:text-7xl'>
          Featured Work
        </h2>

        <div className='grid gap-8 md:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl'
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-110`}
              />
              <div className='absolute inset-0 flex flex-col justify-end p-8 text-white'>
                <div className='mb-2 text-sm font-bold uppercase tracking-wider opacity-90'>
                  {project.category}
                </div>
                <h3 className='text-3xl font-black'>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section id='contact' className='px-8 py-32'>
      <div className='mx-auto max-w-[1400px]'>
        <h2 className='mb-16 text-5xl font-black uppercase tracking-tight md:text-7xl'>
          Let&apos;s Connect
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          <a
            href='https://www.linkedin.com/in/hleomojica'
            target='_blank'
            className='group relative overflow-hidden rounded-2xl border-2 border-black/10 p-12 transition-all duration-300 hover:border-[#0A66C2] dark:border-white/10'
          >
            <div className='absolute inset-0 translate-y-full bg-[#0A66C2] transition-transform duration-300 group-hover:translate-y-0' />
            <div className='relative z-10 transition-colors duration-300 group-hover:text-white'>
              <div className='mb-4 text-sm font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100'>
                Professional
              </div>
              <h3 className='mb-2 text-4xl font-black'>LinkedIn</h3>
              <p className='text-lg'>Connect with me professionally</p>
            </div>
          </a>

          <a
            href='https://github.com/hleomojica'
            target='_blank'
            className='group relative overflow-hidden rounded-2xl border-2 border-black/10 p-12 transition-all duration-300 hover:border-[#6e5494] dark:border-white/10'
          >
            <div className='absolute inset-0 translate-y-full bg-[#6e5494] transition-transform duration-300 group-hover:translate-y-0' />
            <div className='relative z-10 transition-colors duration-300 group-hover:text-white'>
              <div className='mb-4 text-sm font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100'>
                Code
              </div>
              <h3 className='mb-2 text-4xl font-black'>GitHub</h3>
              <p className='text-lg'>Check out my projects</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className='border-t border-black/5 px-8 py-16 dark:border-white/5'>
      <div className='mx-auto max-w-[1400px] text-center'>
        <div className='text-sm opacity-60'>
          © {new Date().getFullYear()} Henrry Mojica. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <main className='antialiased'>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <PortfolioShowcase />
        <ContactSection />
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}
