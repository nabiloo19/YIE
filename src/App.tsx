import React from 'react';
import { TranslationProvider } from './contexts/TranslationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import PodcastPlatforms from './components/PodcastPlatforms';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Hero />
          <About />
          <PodcastPlatforms />
          <Projects />
          <Testimonials />
          <Contact />
          <Partners />
          <Footer />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;