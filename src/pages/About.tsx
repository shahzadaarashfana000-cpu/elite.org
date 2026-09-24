import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { team, values, stats, siteData } from '../data/content';

export default function About() {
  return (
    <div className="pt-24">
      <AboutHero />
      <StorySection />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <StatsSection />
      <AboutCTA />
    </div>
  );
}

function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-elite-accent/[0.03] blur-[120px]" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-6 block">About us</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl xl:text-8xl font-medium text-elite-white leading-[0.9] mb-8 max-w-5xl">
            We are the minds<br />
            <span className="italic text-elite-accent">behind the brands</span><br />
            that shape tomorrow.
          </h1>
          <p className="text-xl text-elite-text max-w-2xl leading-relaxed">
            Founded in 2012, Elite Minds has grown from a small studio into an internationally recognized digital agency. We combine strategic insight with exceptional craft to create experiences that matter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-6 block">Our story</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-medium text-elite-white leading-tight mb-8">
              From a bold idea to a<br /><span className="italic">global studio.</span>
            </h2>
            <div className="space-y-6 text-elite-text leading-relaxed">
              <p>
                Elite Minds was born from a simple conviction: that the best digital work comes from the intersection of deep strategy, beautiful design, and flawless technology. Our founders—frustrated by agencies that excelled in only one area—set out to build something different.
              </p>
              <p>
                Over twelve years, we've grown from a team of four in a shared workspace to a studio of 60+ specialists across three continents. But our core philosophy remains unchanged: every project deserves the same obsessive attention to detail, regardless of scale.
              </p>
              <p>
                Today, we partner with ambitious organizations—from startups to Fortune 500 companies—helping them navigate complexity and create digital experiences that drive real business impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden img-zoom">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop"
                alt="Elite Minds studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl p-6">
              <p className="text-3xl font-[family-name:var(--font-display)] font-medium text-elite-accent">2012</p>
              <p className="text-sm text-elite-text">Year Founded</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12 rounded-2xl border border-elite-border/30 bg-elite-dark/50"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-6 block">Our mission</span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-medium text-elite-white leading-snug mb-6">
              To empower ambitious organizations with digital experiences that create lasting impact.
            </h3>
            <p className="text-elite-text leading-relaxed">
              We exist to bridge the gap between what brands aspire to be and what they communicate digitally. Through strategic thinking, exceptional design, and robust technology, we help our partners realize their full potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 lg:p-12 rounded-2xl border border-elite-border/30 bg-elite-dark/50"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-6 block">Our vision</span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-medium text-elite-white leading-snug mb-6">
              A world where every digital interaction is thoughtful, beautiful, and meaningful.
            </h3>
            <p className="text-elite-text leading-relaxed">
              We envision a future where technology serves humanity gracefully—where digital experiences feel intuitive, where brands communicate authentically, and where every interaction leaves people better than it found them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-4 block">Our values</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-medium text-elite-white">
            Principles that <span className="italic">guide us.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-elite-border/30 rounded-2xl overflow-hidden">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 lg:p-12 bg-elite-black group hover:bg-elite-dark/50 transition-colors duration-500"
            >
              <span className="text-elite-accent/50 text-sm font-mono mb-4 block">0{i + 1}</span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium text-elite-white mb-4 group-hover:text-elite-accent transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-elite-text leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-4 block">The team</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-medium text-elite-white">
            The minds <span className="italic">behind it all.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 img-zoom">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-medium text-elite-white group-hover:text-elite-accent transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-elite-text">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-medium gradient-text mb-3">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-sm text-elite-text">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-medium text-elite-white mb-8">
            Ready to create something<br /><span className="italic text-elite-accent">extraordinary?</span>
          </h2>
          <p className="text-lg text-elite-text max-w-lg mx-auto mb-10">
            We're always looking for ambitious partners. Let's discuss how we can help bring your vision to life.
          </p>
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-elite-white text-elite-black rounded-full font-medium hover:bg-elite-accent transition-all duration-300"
          >
            Explore our services
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
