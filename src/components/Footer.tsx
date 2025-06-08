import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ArrowUp, Play, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

const Footer: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationItems = [
    { key: 'home', id: 'hero' },
    { key: 'about', id: 'about' },
    { key: 'podcasts', id: 'podcast' },
    { key: 'projects', id: 'projects' },
    { key: 'testimonials', id: 'testimonials' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <footer className={cn("relative overflow-hidden", isRTL ? 'text-right' : 'text-left')}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yie-red/40 to-yie-red/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yie-red/30 to-yie-red/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yie-red/20 to-yie-red/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            {/* Brand and Description */}
            <div className="md:col-span-2">
              <div className={cn("flex items-center gap-4 mb-8", isRTL ? 'flex-row-reverse' : '')}>
                <div className="w-14 h-14 bg-gradient-to-br from-yie-red to-yie-red/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Play className="text-yie-light fill-yie-light" size={24} />
                </div>
                <span className={cn("text-3xl font-black text-foreground", isRTL ? 'font-arabic' : '')}>
                  {t('hero.title')}
                </span>
              </div>
              
              <p className={cn("text-muted-foreground leading-relaxed max-w-2xl text-lg", isRTL ? 'font-arabic' : '')}>
                {t('footer.description')}
              </p>
              
              {/* Made with Love */}
              <div className={cn("flex items-center gap-2 mt-8 text-muted-foreground", isRTL ? 'flex-row-reverse' : '')}>
                <span>{t('footer.madeWith')}</span>
                <Heart className="text-yie-red fill-yie-red animate-pulse" size={16} />
                <span>{t('footer.forOurCommunity')}</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className={cn("text-xl font-bold mb-8 text-foreground", isRTL ? 'font-arabic' : '')}>
                {t('navigation.title')}
              </h3>
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className={cn("group block text-muted-foreground hover:text-foreground transition-all duration-300 text-lg", isRTL ? 'font-arabic' : '')}
                  >
                    <span className="relative">
                      {t(`navigation.${item.key}`)}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yie-red/60 to-yie-red/80 group-hover:w-full transition-all duration-300" />
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={cn("border-t border-border/40 pt-12 flex flex-col md:flex-row justify-between items-center gap-6", isRTL ? 'md:flex-row-reverse' : '')}>
            <p className={cn("text-muted-foreground text-lg", isRTL ? 'font-arabic' : '')}>
              {t('footer.copyright', { year: currentYear })}
            </p>
            
            <button
              onClick={scrollToTop}
              className={cn("group flex items-center gap-3 bg-gradient-to-r from-yie-red to-yie-red/80 hover:from-yie-red/90 hover:to-yie-red/70 text-yie-light px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 hover:shadow-xl", isRTL ? 'flex-row-reverse' : '')}
            >
              <ArrowUp className="group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
              <span className={cn("font-bold text-yie-light", isRTL ? 'font-arabic' : '')}>
                {t('navigation.backToTop')}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;