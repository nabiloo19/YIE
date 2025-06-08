import { useEffect, useState } from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { Menu, X } from 'lucide-react';
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

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
          <a href="#hero" onClick={() => scrollToSection('hero')} className={cn("flex items-center gap-3", isRTL ? 'flex-row-reverse' : '')}>
            {/* Desktop Logo */}
            <img 
              src="/images/HeaderDesktop.png" 
              alt="Yemenis In Exile Logo" 
              className="hidden md:block h-12 w-auto"
            />
            {/* Mobile Logo */}
            <img 
              src="/images/HeaderMobile.png" 
              alt="Yemenis In Exile Logo" 
              className="block md:hidden h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className={cn("flex items-center gap-6", isRTL ? 'flex-row-reverse' : '')}>
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="group text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  <span className="relative">
                    {t(item.label)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yie-red/60 to-yie-red/80 group-hover:w-full transition-all duration-300" />
                  </span>
                </button>
              ))}
            </div>
            <div className={cn("flex items-center gap-4", isRTL ? 'flex-row-reverse' : '')}>
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */} 
      {isMobileMenuOpen && (
        <> 
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar Content */}
          <div
            className={cn(
              "fixed top-0 min-h-screen w-full max-w-xs bg-card shadow-2xl z-50 transition-all duration-500 ease-in-out flex flex-col overflow-y-auto",
              isRTL ? 'left-0 border-r border-border/40' : 'right-0 border-l border-border/40',
              isMobileMenuOpen
                ? 'transform translate-x-0'
                : (isRTL ? 'transform -translate-x-full' : 'transform translate-x-full')
            )}
          >
            <div className="flex items-center justify-between p-8 border-b border-yie-red/40 bg-gradient-to-r from-yie-red/5 to-yie-red/0">
              {/* Logo and Brand in Sidebar */}
              <a href="#hero" onClick={() => scrollToSection('hero')} className={cn("flex items-center gap-3", isRTL ? 'flex-row-reverse' : '')}>
                {/* Desktop Logo in Sidebar */}
                <img 
                  src="/images/HeaderDesktop.png" 
                  alt="Yemenis In Exile Logo" 
                  className="hidden md:block h-12 w-auto"
                />
                {/* Mobile Logo in Sidebar */}
                <img 
                  src="/images/HeaderMobile.png" 
                  alt="Yemenis In Exile Logo" 
                  className="block md:hidden h-10 w-auto"
                />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Language and Theme Toggles moved here */}
            <div className={cn("flex items-center justify-between p-8 border-b border-yie-red/40 bg-gradient-to-r from-yie-red/5 to-yie-red/0", isRTL ? 'flex-row-reverse' : '')}> 
              <ThemeToggle isInSidebar={true} />
              <LanguageToggle isInSidebar={true} />
            </div>

            <div className="p-6 space-y-4 flex-1 overflow-y-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className={cn("w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-200 font-medium text-lg", isRTL ? 'text-right' : '')}
                >
                  {t(item.label)}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
} 