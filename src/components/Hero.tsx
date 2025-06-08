import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t, isRTL } = useTranslation();

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yie-dark via-yie-red/90 to-yie-dark" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yie-red/40 to-yie-red/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yie-red/30 to-yie-red/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yie-red/20 to-yie-red/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yie-light mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-yie-light/90 max-w-3xl mx-auto mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#podcast"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-yie-red to-yie-red/80 text-yie-light font-bold transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
          >
            {t('hero.cta')}
            <ArrowRight className="group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}