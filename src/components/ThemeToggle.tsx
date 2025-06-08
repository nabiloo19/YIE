import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../contexts/TranslationContext';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

interface ThemeToggleProps {
  isInSidebar?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isInSidebar = false }) => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group flex items-center gap-3 rounded-2xl bg-yie-red/10 hover:bg-yie-red/20 backdrop-blur-sm transition-all duration-300 text-yie-light hover:scale-105 border border-yie-red/20 hover:border-yie-red/40",
        isInSidebar ? "px-4 py-2 text-sm" : "px-6 py-3 font-semibold"
      )}
      aria-label="Toggle Theme"
    >
      <div className="relative">
        {isDark ? (
          <Sun className="group-hover:rotate-180 group-hover:scale-110 transition-transform duration-500 text-yie-red" size={isInSidebar ? 16 : 20} />
        ) : (
          <Moon className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 text-yie-red" size={isInSidebar ? 16 : 20} />
        )}
      </div>
      <span className="font-semibold">
        {isDark ? t('common.lightMode') : t('common.darkMode')}
      </span>
    </button>
  );
};

export default ThemeToggle;