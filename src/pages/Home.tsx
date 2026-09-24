import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { services, projects, testimonials, stats, process } from '../data/content';

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);
  return count;
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection heroRef={heroRef} heroY={heroY} heroOpacity={heroOpacity} />
      
      {/* TRUST / STATS */}
      <TrustSection />
      
      {/* SERVICES */}
      <ServicesSection />
      
      {/* FEATURED PROJECTS */}
      <ProjectsSection />
      
      {/* PROCESS */}
      <ProcessSection />
      
      {/* ABOUT PREVIEW */}
      <AboutPreview />
      
      {/* TESTIMONIALS */}
      <TestimonialsSection />
      
      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
}

function HeroSection({ heroRef, heroY, heroOpacity }: any) {
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-elite-accent/[0.03] blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-elite-accent/[0.02] blur-[100px] animate-pulse-subtle delay-500" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-elite-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-elite-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-elite-white" />
      </div>

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8">
            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-elite-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-elite-text font-medium">
                Strategy • Design • Technology
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[0.9] tracking-tight text-elite-white mb-8"
            >
              We shape the
              <br />
              <span className="italic text-elite-accent">future</span> of digital.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg lg:text-xl text-elite-text max-w-xl leading-relaxed mb-10"
            >
              Elite Minds is a premium studio where strategic thinking meets exceptional craft. We build digital experiences that define brands and drive growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-elite-white text-elite-black rounded-full font-medium text-sm hover:bg-elite-accent hover:text-elite-black transition-all duration-300"
              >
                Explore our work
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-elite-text hover:text-elite-white transition-colors duration-300"
              >
                Learn about us
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden img-zoom border border-elite-border/30">
                <img
                  src="https://image.qwenlm.ai/generated-images/3bc4f4a5-a49e-460e-a6e5-61665635705d/_result.png"
                  alt="Abstract digital art representing innovation"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elite-black/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                <p className="text-xs text-elite-text">Est. 2012</p>
                <p className="text-sm font-medium text-elite-white">12+ Years</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-3"
        >
          <div className="w-px h-12 bg-elite-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-elite-accent animate-pulse" />
          </div>
          <span className="text-xs text-elite-text tracking-widest uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-text">Trusted by ambitious teams</span>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isInView={isInView} delay={i * 0.1} />
          ))}
        </div>

        {/* Client logos marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 mr-16">
                {['Aurora', 'Meridian', 'Vertex', 'Terra', 'Nexus', 'Luxe', 'Apex', 'Prism'].map((name) => (
                  <span key={`${setIndex}-${name}`} className="text-xl font-[family-name:var(--font-display)] text-elite-text/40 hover:text-elite-text/70 transition-colors duration-300 cursor-default">
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isInView, delay }: { stat: typeof stats[0], isInView: boolean, delay: number }) {
  const count = useCountUp(stat.value, 2000, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <p className="text-4xl lg:text-5xl font-[family-name:var(--font-display)] font-medium text-elite-white mb-2">
        {count}{stat.suffix}
      </p>
      <p className="text-sm text-elite-text">{stat.label}</p>
    </motion.div>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-4 block">What we do</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-medium text-elite-white">
              Services built for<br />
              <span className="italic">ambitious brands.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm text-elite-text hover:text-elite-white transition-colors group"
          >
            View all services
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Services Interactive List */}
        <div className="border-t border-elite-border/50">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setActiveService(i)}
              className="group border-b border-elite-border/50"
            >
              <Link
                to={`/services/${service.id}`}
                className="flex items-center gap-6 lg:gap-12 py-8 lg:py-10 transition-all duration-500"
              >
                <span className={`service-number text-2xl lg:text-4xl ${activeService === i ? 'active' : ''}`}>
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-4xl font-medium text-elite-white group-hover:text-elite-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className={`text-elite-text text-sm lg:text-base mt-2 max-w-lg transition-all duration-500 ${
                    activeService === i ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {service.description}
                  </p>
                </div>
                <div className="hidden lg:flex items-center gap-4">
                  <div className={`flex flex-wrap gap-2 max-w-xs transition-all duration-500 ${
                    activeService === i ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <span key={cap} className="text-xs px-3 py-1 rounded-full border border-elite-border text-elite-text">
                        {cap}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={20} className="text-elite-text group-hover:text-elite-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-4 block">Selected work</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-medium text-elite-white">
              Projects that<br />
              <span className="italic">speak volumes.</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm text-elite-text hover:text-elite-white transition-colors group"
          >
            View all projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects Grid - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`${i === 0 ? 'lg:col-span-7' : i === 1 ? 'lg:col-span-5' : 'lg:col-span-12'} group`}
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className={`relative overflow-hidden rounded-xl ${i === 0 ? 'aspect-[16/10]' : i === 1 ? 'aspect-[4/5]' : 'aspect-[21/9]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elite-black/80 via-elite-black/20 to-transparent" />
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="text-xs uppercase tracking-widest text-elite-accent mb-2 block">{project.category}</span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-medium text-elite-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-elite-text/80 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-elite-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={16} className="text-elite-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-4 block">Our process</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-medium text-elite-white">
            How we bring<br />
            <span className="italic">ideas to life.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <span className="text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-medium text-elite-muted group-hover:text-elite-accent/30 transition-colors duration-500">
                {step.number}
              </span>
              <h3 className="text-lg font-medium text-elite-white mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-elite-text leading-relaxed">{step.description}</p>
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-elite-border/50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative py-24 lg:py-40 overflow-hidden">
      <motion.div style={{ x }} className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-elite-white" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-6 block">Our philosophy</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl xl:text-6xl font-medium text-elite-white leading-tight mb-8">
              We believe great work comes from great <span className="italic text-elite-accent">partnerships.</span>
            </h2>
            <p className="text-lg text-elite-text leading-relaxed mb-8">
              At Elite Minds, we don't just execute—we collaborate. Every project begins with deep understanding and ends with measurable impact. We're not satisfied with good enough.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-elite-border rounded-full text-sm font-medium text-elite-white hover:border-elite-accent hover:text-elite-accent transition-all duration-300"
            >
              Discover our story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden img-zoom">
              <img
                src="https://images.unsplash.com/photo-1522071820081-0098548cf60a?w=800&h=1000&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-elite-accent/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-4 block">Testimonials</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-medium text-elite-white">
            Words from our <span className="italic">partners.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Testimonial Content */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl xl:text-4xl text-elite-white leading-snug mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div>
                <p className="text-elite-white font-medium">{testimonials[activeIndex].name}</p>
                <p className="text-elite-text text-sm">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4 flex lg:flex-col items-center lg:items-start gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  i === activeIndex
                    ? 'border-elite-accent/50 bg-elite-accent/5'
                    : 'border-elite-border/30 hover:border-elite-border'
                }`}
              >
                <p className="text-sm font-medium text-elite-white">{testimonials[i].name}</p>
                <p className="text-xs text-elite-text mt-1">{testimonials[i].company}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-elite-accent/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-8 block">Ready to begin?</span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl xl:text-8xl font-medium text-elite-white leading-[0.9] mb-10">
            Have an idea<br />
            <span className="italic text-elite-accent">worth building?</span>
          </h2>
          <p className="text-lg text-elite-text max-w-lg mx-auto mb-12">
            Let's create something extraordinary together. We're always excited to meet ambitious people with bold visions.
          </p>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-elite-white text-elite-black rounded-full font-medium text-base hover:bg-elite-accent transition-all duration-300"
          >
            Start a conversation
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
