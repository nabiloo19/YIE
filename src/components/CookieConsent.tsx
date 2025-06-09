import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { X, Cookie } from 'lucide-react';
import { cn } from '../lib/utils';
import { enableAnalytics, disableAnalytics } from '../lib/firebase';

const CookieConsent: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem('cookieConsentStatus');
    if (!consentStatus) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsentStatus', 'accepted');
    enableAnalytics();
    console.log("User accepted cookies. Analytics can be initialized.");
  };

  const handleDecline = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsentStatus', 'declined');
    disableAnalytics();
    console.log("User declined cookies. Analytics should not be initialized.");
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
                {t('cookies.title')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('cookies.message')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4 md:mt-0">
              <button
                onClick={handleAccept}
                className="px-4 py-2 rounded-lg bg-yie-red text-yie-light hover:bg-yie-red/90 transition-colors duration-200 text-sm font-medium"
              >
                {t('cookies.accept')}
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-lg border border-border/60 text-foreground hover:bg-muted transition-colors duration-200 text-sm font-medium"
              >
                {t('cookies.decline')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 