import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-elite-accent z-[60] origin-left"
      />

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-elite-white hover:text-elite-accent hover:border-elite-accent/30 transition-colors duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </>
  );
}
