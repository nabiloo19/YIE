import React from 'react';
import { TranslationProvider } from './contexts/TranslationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTranslation } from './contexts/TranslationContext';
import Hero from './components/Hero';
import About from './components/About';
import PodcastPlatforms from './components/PodcastPlatforms';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { Navbar } from './components/ui/navbar';

function AppContent() {
  const { isRTL } = useTranslation();

  return (
    <div className={`min-h-screen bg-background text-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      <Navbar />
      <main className="pt-16 md:pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <About />
        <PodcastPlatforms />
        <Projects />
        <Testimonials />
        <Partners />
        <Contact />
        <Footer />
      </main>
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