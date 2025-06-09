import React, { useEffect, useState, lazy, Suspense } from 'react';
import { TranslationProvider } from './contexts/TranslationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTranslation } from './contexts/TranslationContext';
import { Navbar } from './components/ui/navbar';
import CookieConsent from './components/CookieConsent';
import BackToTopButton from './components/BackToTopButton';
import { Toaster } from 'react-hot-toast';

// Utility to add a delay to lazy loading
const lazyWithDelay = (importFunc: () => Promise<{ default: React.ComponentType<any> }>, delay = 300) =>
  lazy(() =>
    Promise.all([
      importFunc(),
      new Promise(resolve => setTimeout(resolve, delay))
    ]).then(([moduleExports]) => moduleExports)
  );

// Lazy load components for code splitting with a small delay
const Hero = lazyWithDelay(() => import('./components/Hero'));
const About = lazyWithDelay(() => import('./components/About'));
const PodcastPlatforms = lazyWithDelay(() => import('./components/PodcastPlatforms'));
const Projects = lazyWithDelay(() => import('./components/Projects'));
const Testimonials = lazyWithDelay(() => import('./components/Testimonials'));
const Partners = lazyWithDelay(() => import('./components/Partners'));
const Contact = lazyWithDelay(() => import('./components/Contact'));
const Footer = lazyWithDelay(() => import('./components/Footer'));

function AppContent() {
  const { isRTL } = useTranslation();

  return (
    <div className={`min-h-screen bg-background text-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      <Navbar />
      <main className="pt-16 md:pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Suspense fallback={<div className="flex justify-center items-center h-screen text-2xl font-bold text-foreground">Loading...</div>}>
          <Hero />
          <About />
          <PodcastPlatforms />
          <Projects />
          <Testimonials />
          <Partners />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <CookieConsent />
      <BackToTopButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <AppContent />
        <Toaster position="bottom-center" reverseOrder={false} />
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;