import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translation {
  [key: string]: any;
}

interface TranslationContextType {
  language: 'en' | 'ar';
  translations: Translation;
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string, variables?: Record<string, any>) => any;
  isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [translations, setTranslations] = useState<Translation>({});

  const loadTranslations = async (lang: 'en' | 'ar') => {
    try {
      const response = await fetch(`/src/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to English if translation loading fails
      if (lang !== 'en') {
        const fallbackResponse = await fetch('/src/locales/en.json');
        const fallbackData = await fallbackResponse.json();
        setTranslations(fallbackData);
      }
    }
  };

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const t = (key: string, variables?: Record<string, any>): any => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    // If value is a string and variables are provided, do string replacement
    if (typeof value === 'string' && variables) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, varName) => {
        return variables[varName] || match;
      });
    }

    // Return the value as-is (could be string, array, object, etc.)
    return value !== undefined ? value : key;
  };

  const isRTL = language === 'ar';

  return (
    <TranslationContext.Provider 
      value={{ 
        language, 
        translations, 
        setLanguage, 
        t, 
        isRTL 
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};