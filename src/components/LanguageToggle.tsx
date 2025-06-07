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
      className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white hover:scale-105 border border-white/20 hover:border-white/40"
      aria-label="Toggle Language"
    >
      <Globe className="group-hover:rotate-180 transition-transform duration-500" size={20} />
      <span className="font-semibold">
        {t('common.languageToggle')}
      </span>
    </button>
  );
};

export default LanguageToggle;