import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-muted/10 hover:bg-muted/20 backdrop-blur-sm transition-all duration-300 text-foreground hover:scale-105 border border-border/40 hover:border-border/80"
      aria-label="Toggle Language"
    >
      <Globe className="group-hover:rotate-180 transition-transform duration-500 text-yie-red" size={20} />
      <span className="font-semibold">
        {t('common.languageToggle')}
      </span>
    </button>
  );
};

export default LanguageToggle;