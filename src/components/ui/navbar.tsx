import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { Play, Menu, X } from 'lucide-react';
import LanguageToggle from '../LanguageToggle';
import ThemeToggle from '../ThemeToggle';
import { cn } from '../../lib/utils';

const navigationItems = [
  { key: 'home', id: 'hero', label: 'navigation.home' },
  { key: 'about', id: 'about', label: 'navigation.about' },
  { key: 'podcasts', id: 'podcast', label: 'navigation.podcasts' },
  { key: 'projects', id: 'projects', label: 'navigation.projects' },
  { key: 'testimonials', id: 'testimonials', label: 'navigation.testimonials' },
  { key: 'contact', id: 'contact', label: 'navigation.contact' },
];

export function Navbar() {
  const { t, isRTL } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand */}
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yie-red to-yie-red/80 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
              <Play className="text-yie-light fill-yie-light" size={20} />
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">
              {t('hero.title')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  {t(item.label)}
                </button>
              ))}
            </div>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/40">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                {t(item.label)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 