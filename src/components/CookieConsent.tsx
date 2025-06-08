import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { X, Cookie } from 'lucide-react';
import { cn } from '../lib/utils';

const CookieConsent: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the alert
    const hasDismissed = localStorage.getItem('cookieConsentDismissed');
    if (!hasDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsentDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-container mx-auto">
        <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-border/40 shadow-lg p-6">
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-3xl blur-2xl opacity-20" />
          
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Cookie Icon */}
            <div className="w-12 h-12 bg-gradient-to-br from-yie-red/80 to-yie-red rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="text-yie-light" size={24} />
            </div>

            {/* Content */}
            <div className={cn("flex-1", isRTL ? 'text-right' : 'text-left')}>
              <p className="text-foreground mb-2">
                {t('cookies')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('haveproblem')} {t('contactAlert')}{' '}
                <a 
                  href="mailto:yemenisinexile@gmail.com" 
                  className="text-yie-red hover:text-yie-red/80 transition-colors duration-300 font-medium"
                >
                  {t('email')}
                </a>
              </p>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200 flex-shrink-0"
              aria-label="Dismiss cookie consent"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 