import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { services, projects } from '../data/content';

export function ServicesIndex() {
  return (
    <div className="pt-24">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
}

function ServicesHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-elite-accent/[0.03] blur-[120px]" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-6 block">Our services</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl xl:text-8xl font-medium text-elite-white leading-[0.9] mb-8 max-w-5xl">
            Capabilities that<br />
            <span className="italic text-elite-accent">drive results.</span>
          </h1>
          <p className="text-xl text-elite-text max-w-2xl leading-relaxed">
            We offer a comprehensive suite of services designed to transform your digital presence. Each discipline is led by specialists who bring deep expertise and fresh perspective.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border-b border-elite-border/50"
            >
              <button
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                className="w-full text-left py-10 lg:py-14 group"
              >
                <div className="flex items-start gap-6 lg:gap-12">
                  <span className={`service-number text-3xl lg:text-5xl ${expandedService === service.id ? 'active' : ''}`}>
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-medium text-elite-white group-hover:text-elite-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        size={24}
                        className={`text-elite-text transition-all duration-300 ${
                          expandedService === service.id ? 'rotate-0 text-elite-accent' : '-rotate-45'
                        }`}
                      />
                    </div>
                    <p className="text-elite-text mt-4 max-w-2xl">{service.description}</p>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedService === service.id ? 'auto' : 0,
                  opacity: expandedService === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="pb-10 pl-0 lg:pl-24">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-elite-accent mb-4">Capabilities</h4>
                      <ul className="space-y-3">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-3 text-elite-text">
                            <Check size={14} className="text-elite-accent" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-elite-accent mb-4">Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3 text-elite-text">
                            <div className="w-1.5 h-1.5 rounded-full bg-elite-accent" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-elite-white hover:text-elite-accent transition-colors group"
                      >
                        Learn more about {service.title}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-elite-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-elite-accent mb-4 block">How we work</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-medium text-elite-white">
            A proven <span className="italic">approach.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { num: "01", title: "Discover", desc: "Deep research & understanding" },
            { num: "02", title: "Define", desc: "Strategy & creative direction" },
            { num: "03", title: "Design", desc: "Visual & interaction design" },
            { num: "04", title: "Build", desc: "Development & engineering" },
            { num: "05", title: "Evolve", desc: "Optimization & growth" },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-xl border border-elite-border/30 hover:border-elite-accent/30 transition-colors duration-300"
            >
              <span className="text-3xl font-[family-name:var(--font-display)] font-medium text-elite-accent/50">{step.num}</span>
              <h3 className="text-lg font-medium text-elite-white mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-elite-text">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
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
            Let's build something<br /><span className="italic text-elite-accent">remarkable.</span>
          </h2>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-elite-white text-elite-black rounded-full font-medium hover:bg-elite-accent transition-all duration-300"
          >
            Start a project
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// SERVICE DETAIL PAGE
export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);
  const relatedProjects = projects.filter(p => p.services.includes(service?.title || '')).slice(0, 3);

  if (!service) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-elite-white mb-4">Service not found</h1>
          <Link to="/services" className="text-elite-accent hover:underline">Back to services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-elite-text hover:text-elite-white transition-colors mb-8">
              <ArrowRight size={14} className="rotate-180" />
              Back to services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl lg:text-8xl font-[family-name:var(--font-display)] font-medium gradient-text">{service.number}</span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl font-medium text-elite-white mb-8">
              {service.title}
            </h1>
            <p className="text-xl text-elite-text max-w-3xl leading-relaxed">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 border-t border-elite-border/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-medium text-elite-white mb-8">
                What we <span className="italic text-elite-accent">deliver.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 p-4 rounded-lg border border-elite-border/30 hover:border-elite-accent/30 transition-colors">
                    <Check size={16} className="text-elite-accent" />
                    <span className="text-elite-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-medium text-elite-white mb-8">
                Why it <span className="italic text-elite-accent">matters.</span>
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-elite-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-elite-accent" />
                    </div>
                    <p className="text-elite-text leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 border-t border-elite-border/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-medium text-elite-white mb-12">
              Related <span className="italic text-elite-accent">projects.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`} className="group">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 img-zoom">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <span className="text-xs text-elite-accent uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-xl font-medium text-elite-white group-hover:text-elite-accent transition-colors mt-1">{project.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 border-t border-elite-border/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-medium text-elite-white mb-8">
            Ready to get <span className="italic text-elite-accent">started?</span>
          </h2>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-elite-white text-elite-black rounded-full font-medium hover:bg-elite-accent transition-all duration-300"
          >
            Discuss your project
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
