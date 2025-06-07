import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ArrowUp, Play, Heart } from 'lucide-react';

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
    <footer className={`relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            {/* Brand and Description */}
            <div className="md:col-span-2">
              <div className={`flex items-center gap-4 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Play className="text-white fill-white" size={24} />
                </div>
                <span className={`text-3xl font-black text-white ${isRTL ? 'font-arabic' : ''}`}>
                  {t('hero.title')}
                </span>
              </div>
              
              <p className={`text-gray-300 leading-relaxed max-w-2xl text-lg ${isRTL ? 'font-arabic' : ''}`}>
                {t('footer.description')}
              </p>
              
              {/* Made with Love */}
              <div className={`flex items-center gap-2 mt-8 text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>Made with</span>
                <Heart className="text-red-400 fill-red-400 animate-pulse" size={16} />
                <span>for our community</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className={`text-xl font-bold mb-8 text-white ${isRTL ? 'font-arabic' : ''}`}>
                Navigation
              </h3>
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className={`group block text-gray-400 hover:text-white transition-all duration-300 text-lg ${isRTL ? 'font-arabic' : ''}`}
                  >
                    <span className="relative">
                      {t(`navigation.${item.key}`)}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className={`text-gray-400 text-lg ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.copyright', { year: currentYear })}
            </p>
            
            <button
              onClick={scrollToTop}
              className={`group flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-xl ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <ArrowUp className="group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
              <span className={`font-bold text-white ${isRTL ? 'font-arabic' : ''}`}>
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