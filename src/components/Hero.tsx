import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Play, ArrowDown } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Hero: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const scrollToPodcast = () => {
    document.getElementById('podcast')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-6 md:p-8">
        <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
            <Play className="text-white fill-white" size={24} />
          </div>
          <span className="text-2xl font-bold text-white drop-shadow-lg">
            {t('hero.title')}
          </span>
        </div>
        
        <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </nav>

      {/* Hero Content */}
      <div className={`relative z-10 flex items-center justify-center min-h-[80vh] px-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h1 className={`text-6xl md:text-8xl font-black mb-8 text-white leading-tight tracking-tight ${isRTL ? 'font-arabic' : ''}`}>
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                {t('hero.title')}
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t('hero.subtitle')}
            </p>
            
            <button
              onClick={scrollToPodcast}
              className={`group relative bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 hover:from-amber-400 hover:via-orange-400 hover:to-pink-400 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl flex items-center gap-4 mx-auto overflow-hidden ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Play className="group-hover:scale-125 transition-transform duration-500 fill-white relative z-10" size={24} />
              <span className="relative z-10">{t('hero.cta')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm font-medium">Scroll</span>
          <ArrowDown className="text-white/70" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;