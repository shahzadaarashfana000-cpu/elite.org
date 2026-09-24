import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative border-t border-elite-border/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <span className="font-[family-name:var(--font-display)] text-2xl font-medium text-elite-white">
                Elite <span className="gradient-text">Minds</span>
              </span>
            </Link>
            <p className="text-elite-text text-base leading-relaxed max-w-md">
              We craft exceptional digital experiences through strategy, design, and technology. Every project is an opportunity to push boundaries.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-elite-text mb-6">Navigate</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-elite-text hover:text-elite-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-elite-text mb-6">Services</h4>
            <ul className="space-y-3">
              {['Strategy', 'Design', 'Technology', 'Creative', 'Growth'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/services/${item.toLowerCase()}`}
                    className="text-sm text-elite-text hover:text-elite-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-elite-text mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${siteData.email}`} className="text-sm text-elite-text hover:text-elite-white transition-colors duration-300">
                  {siteData.email}
                </a>
              </li>
              <li className="text-sm text-elite-text">{siteData.phone}</li>
              <li className="text-sm text-elite-text">{siteData.address}</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {['LinkedIn', 'Twitter', 'Dribbble', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-elite-text hover:text-elite-accent transition-colors duration-300"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-elite-border/30">
          <p className="text-xs text-elite-text">
            © {new Date().getFullYear()} Elite Minds. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-elite-text hover:text-elite-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-elite-text hover:text-elite-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <p className="text-[15vw] font-[family-name:var(--font-display)] font-bold text-center text-elite-white whitespace-nowrap">
          ELITE MINDS
        </p>
      </div>
    </footer>
  );
}
