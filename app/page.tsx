'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ThemeContext } from './context/MainContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

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

// Card Swiper Component
function CardSwiper() {
  const cards = [
    {
      title: 'Development',
      description: 'Building scalable applications',
      gradient: 'from-orange-500 to-pink-500',
      icon: '💻',
    },
    {
      title: 'Design',
      description: 'Creating beautiful interfaces',
      gradient: 'from-purple-500 to-blue-500',
      icon: '🎨',
    },
    {
      title: 'Innovation',
      description: 'Solving complex problems',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🚀',
    },
    {
      title: 'Collaboration',
      description: 'Working with amazing teams',
      gradient: 'from-pink-500 to-red-500',
      icon: '🤝',
    },
  ];

  return (
    <div className='mx-auto w-full max-w-[350px] lg:max-w-[400px]'>
      <div className='relative h-[450px] w-full lg:h-[500px]'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: false,
          }}
          className='h-full w-full'
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex h-full w-full flex-col justify-between rounded-3xl bg-gradient-to-br ${card.gradient} p-10 text-white shadow-2xl lg:p-12`}
              >
                <div className='text-6xl lg:text-7xl'>{card.icon}</div>
                <div>
                  <h3 className='mb-3 text-3xl font-black lg:mb-4 lg:text-4xl'>
                    {card.title}
                  </h3>
                  <p className='text-lg opacity-90 lg:text-xl'>
                    {card.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className='flex min-h-screen items-center justify-center px-8 pt-24'>
      <div className='w-full max-w-[1400px]'>
        {/* Single unified section with swiper left, content right */}
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* Left: Card Swiper */}
          <div className='flex justify-center lg:justify-start'>
            <CardSwiper />
          </div>

          {/* Right: Name, EST, Role & Description */}
          <div className='space-y-8'>
            {/* Name and EST */}
            <div className='flex items-start justify-between'>
              <h1 className='flex-1 text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter'>
                HENRRY
                <br />
                MOJICA
              </h1>
              <div className='text-right'>
                <div className='mb-1 text-xs font-bold uppercase tracking-wider opacity-60'>
                  EST.
                </div>
                <div className='text-4xl font-black lg:text-5xl'>2020</div>
              </div>
            </div>

            {/* Role & Description */}
            <div>
              <h2 className='mb-6 text-4xl font-black leading-tight lg:text-6xl'>
                Full-Stack
                <br />
                Developer
              </h2>
              <p className='text-lg leading-relaxed opacity-80 lg:text-xl'>
                Building innovative digital experiences with modern technologies
                and creative solutions.
              </p>
            </div>

            {/* Tech badges */}
            <div className='flex flex-wrap gap-3'>
              <span className='rounded-full bg-black/5 px-5 py-2.5 text-sm font-bold dark:bg-white/5'>
                React
              </span>
              <span className='rounded-full bg-black/5 px-5 py-2.5 text-sm font-bold dark:bg-white/5'>
                Node.js
              </span>
              <span className='rounded-full bg-black/5 px-5 py-2.5 text-sm font-bold dark:bg-white/5'>
                TypeScript
              </span>
              <span className='rounded-full bg-black/5 px-5 py-2.5 text-sm font-bold dark:bg-white/5'>
                Next.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  const skills = [
    {
      name: 'Frontend',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    { name: 'Backend', tech: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { name: 'Tools', tech: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ];

  return (
    <section
      id='about'
      className='bg-black/[0.02] px-8 py-32 dark:bg-white/[0.02]'
    >
      <div className='mx-auto max-w-[1400px]'>
        <h2 className='mb-16 text-5xl font-black uppercase tracking-tight md:text-7xl'>
          About Me
        </h2>

        <div className='grid gap-12 md:grid-cols-2'>
          {/* Left: Bio */}
          <div className='space-y-8'>
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

            <div className='space-y-4'>
              <h3 className='text-2xl font-black'>What I Do</h3>
              <div className='grid grid-cols-2 gap-4'>
                <div className='rounded-xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black'>
                  <div className='mb-3 text-3xl'>⚡</div>
                  <h4 className='mb-2 font-bold'>Fast</h4>
                  <p className='text-sm opacity-70'>Optimized performance</p>
                </div>
                <div className='rounded-xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black'>
                  <div className='mb-3 text-3xl'>📱</div>
                  <h4 className='mb-2 font-bold'>Responsive</h4>
                  <p className='text-sm opacity-70'>Mobile-first design</p>
                </div>
                <div className='rounded-xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black'>
                  <div className='mb-3 text-3xl'>🎨</div>
                  <h4 className='mb-2 font-bold'>Creative</h4>
                  <p className='text-sm opacity-70'>Modern interfaces</p>
                </div>
                <div className='rounded-xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black'>
                  <div className='mb-3 text-3xl'>🔒</div>
                  <h4 className='mb-2 font-bold'>Secure</h4>
                  <p className='text-sm opacity-70'>Best practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-black'>Tech Stack</h3>
            {skills.map((category, index) => (
              <div key={index} className='space-y-4'>
                <h4 className='text-xl font-bold opacity-60'>
                  {category.name}
                </h4>
                <div className='flex flex-wrap gap-3'>
                  {category.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='cursor-default rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-bold transition-transform hover:scale-105 dark:border-white/10 dark:bg-black'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className='mt-12 grid grid-cols-3 gap-4 border-t border-black/10 pt-8 dark:border-white/10'>
              <div>
                <div className='mb-2 text-4xl font-black'>4+</div>
                <div className='text-sm opacity-60'>Years Experience</div>
              </div>
              <div>
                <div className='mb-2 text-4xl font-black'>50+</div>
                <div className='text-sm opacity-60'>Projects Done</div>
              </div>
              <div>
                <div className='mb-2 text-4xl font-black'>15+</div>
                <div className='text-sm opacity-60'>Happy Clients</div>
              </div>
            </div>
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
