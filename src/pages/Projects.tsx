import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { projects } from '../data/content';

export function ProjectsIndex() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24">
      <ProjectsHero />
      <ProjectsGrid
        projects={filteredProjects}
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProjectsCTA />
    </div>
  );
}

function ProjectsHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-elite-accent/[0.03] blur-[120px]" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-6 block">Our work</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl xl:text-8xl font-medium text-elite-white leading-[0.9] mb-8 max-w-5xl">
            Work that<br />
            <span className="italic text-elite-accent">defines brands.</span>
          </h1>
          <p className="text-xl text-elite-text max-w-2xl leading-relaxed">
            Every project is a partnership. We immerse ourselves in our clients' worlds to create digital experiences that are as strategic as they are beautiful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsGrid({ projects: filteredProjects, categories, activeFilter, setActiveFilter }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-elite-accent text-elite-black'
                  : 'border border-elite-border text-elite-text hover:border-elite-accent/50 hover:text-elite-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: typeof projects[0], i: number) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`group ${i % 3 === 0 ? 'md:col-span-2' : ''}`}
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className={`relative overflow-hidden rounded-xl ${i % 3 === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elite-black/80 via-elite-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs uppercase tracking-widest text-elite-accent">{project.category}</span>
                      <span className="text-xs text-elite-text/50">•</span>
                      <span className="text-xs text-elite-text">{project.date}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-medium text-elite-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-elite-text/80 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-elite-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-elite-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-medium text-elite-white mb-8">
            Your project could be<br /><span className="italic text-elite-accent">next.</span>
          </h2>
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-elite-white text-elite-black rounded-full font-medium hover:bg-elite-accent transition-all duration-300"
          >
            Start a conversation
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// PROJECT DETAIL PAGE
export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const relatedProjects = projects.filter(p => p.id !== projectId).slice(0, 3);

  if (!project) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-elite-white mb-4">Project not found</h1>
          <Link to="/projects" className="text-elite-accent hover:underline">Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Back nav */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-elite-text hover:text-elite-white transition-colors">
          <ArrowLeft size={14} />
          All projects
        </Link>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-widest text-elite-accent">{project.category}</span>
              <span className="text-xs text-elite-text/50">•</span>
              <span className="text-xs text-elite-text">{project.client}</span>
              <span className="text-xs text-elite-text/50">•</span>
              <span className="text-xs text-elite-text">{project.date}</span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl xl:text-8xl font-medium text-elite-white leading-[0.9] mb-8">
              {project.title}
            </h1>
            <p className="text-xl text-elite-text max-w-3xl leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.services.map((s) => (
                <span key={s} className="px-4 py-1.5 rounded-full border border-elite-border text-sm text-elite-text">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="aspect-[21/9] rounded-2xl overflow-hidden img-zoom"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20 lg:py-32 border-t border-elite-border/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-elite-accent mb-3">Client</h4>
                  <p className="text-elite-white">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-elite-accent mb-3">Category</h4>
                  <p className="text-elite-white">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-elite-accent mb-3">Services</h4>
                  <p className="text-elite-white">{project.services.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-elite-accent mb-3">Year</h4>
                  <p className="text-elite-white">{project.date}</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-elite-white mb-6">The Challenge</h2>
                <p className="text-lg text-elite-text leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-elite-white mb-6">Our Approach</h2>
                <p className="text-lg text-elite-text leading-relaxed">{project.approach}</p>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-elite-white mb-6">The Solution</h2>
                <p className="text-lg text-elite-text leading-relaxed">{project.solution}</p>
              </div>

              {/* Results */}
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-elite-white mb-8">Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.results.map((result, i) => (
                    <div key={i} className="p-6 rounded-xl border border-elite-border/30 bg-elite-dark/30">
                      <p className="text-xl font-medium text-elite-accent">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-24 border-t border-elite-border/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-medium text-elite-white mb-12">
            More <span className="italic text-elite-accent">projects.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rp) => (
              <Link key={rp.id} to={`/projects/${rp.id}`} className="group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 img-zoom">
                  <img src={rp.image} alt={rp.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="text-xs text-elite-accent uppercase tracking-widest">{rp.category}</span>
                <h3 className="text-xl font-medium text-elite-white group-hover:text-elite-accent transition-colors mt-1">{rp.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-elite-border/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-medium text-elite-white mb-8">
            Like what you see?<br /><span className="italic text-elite-accent">Let's talk.</span>
          </h2>
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-elite-white text-elite-black rounded-full font-medium hover:bg-elite-accent transition-all duration-300"
          >
            Start your project
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
