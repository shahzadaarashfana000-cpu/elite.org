import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-elite-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-8xl lg:text-9xl font-[family-name:var(--font-display)] font-medium gradient-text mb-6">404</p>
        <h1 className="text-2xl lg:text-3xl font-[family-name:var(--font-display)] font-medium text-elite-white mb-4">
          Page not found
        </h1>
        <p className="text-elite-text mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-elite-white text-elite-black rounded-full font-medium text-sm hover:bg-elite-accent transition-all duration-300"
        >
          Return home
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
