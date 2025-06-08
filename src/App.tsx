import React, { useEffect, useState, lazy, Suspense } from 'react';
import { TranslationProvider } from './contexts/TranslationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTranslation } from './contexts/TranslationContext';
import { Navbar } from './components/ui/navbar';
import CookieConsent from './components/CookieConsent';
import BackToTopButton from './components/BackToTopButton';

// Lazy load components for code splitting
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const PodcastPlatforms = lazy(() => import('./components/PodcastPlatforms'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Partners = lazy(() => import('./components/Partners'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function AppContent() {
  const { isRTL } = useTranslation();

  return (
    <div className={`min-h-screen bg-background text-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      <Navbar />
      <main className="pt-16 md:pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Suspense fallback={<div>Loading...</div>}>
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
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;