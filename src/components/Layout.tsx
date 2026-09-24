import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Preloader from './Preloader';
import ScrollProgress from './ScrollProgress';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById('cursor-glow');
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-elite-black text-elite-light relative noise-overlay">
      <Preloader />
      <ScrollProgress />
      <div className="cursor-glow" id="cursor-glow" />
      <Navigation />
      <main key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
