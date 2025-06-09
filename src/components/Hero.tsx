import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Play, ArrowRight } from 'lucide-react';
import { TextShimmer } from './ui/text-shimmer';

export default function Hero() {
  const { t, isRTL } = useTranslation();

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yie-dark via-yie-red/80 to-yie-dark animate-gradient-x" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-2xl animate-blob" />
        <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-br from-white/15 to-white/5 rounded-full blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-2xl animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-2xl animate-blob animation-delay-6000" />
        <div className="absolute bottom-1/4 right-1/2 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-white/0 rounded-full blur-2xl animate-blob animation-delay-8000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yie-light mb-6">
          <TextShimmer
            duration={2}
            className="text-yie-light"
            spread={1}
          >
            {t('hero.title')}
          </TextShimmer>
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