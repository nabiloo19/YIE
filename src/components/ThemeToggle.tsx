import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../contexts/TranslationContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white hover:scale-105 border border-white/20 hover:border-white/40"
      aria-label="Toggle Theme"
    >
      <div className="relative">
        {isDark ? (
          <Sun className="group-hover:rotate-180 group-hover:scale-110 transition-transform duration-500\" size={20} />
        ) : (
          <Moon className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" size={20} />
        )}
      </div>
      <span className="font-semibold">
        {isDark ? t('common.lightMode') : t('common.darkMode')}
      </span>
    </button>
  );
};

export default ThemeToggle;