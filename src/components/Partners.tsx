import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { HandshakeIcon } from 'lucide-react';
import { cn } from '../lib/utils';

const Partners: React.FC = () => {
  const { t, isRTL } = useTranslation();

  return (
    <section id="partners" className={cn("py-32 relative overflow-hidden", isRTL ? 'text-right' : 'text-left')}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yie-red/40 to-yie-red/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yie-red/30 to-yie-red/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yie-red/20 to-yie-red/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yie-red/10 to-yie-red/5 rounded-full mb-8">
            <HandshakeIcon className="text-yie-red" size={16} />
            <span className="text-yie-red font-medium text-sm">{t('partners.collaboration')}</span>
          </div>
          
          <h2 className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight",
            isRTL ? 'font-arabic' : ''
          )}>
            {t('partners.title')}
          </h2>
          <p className={cn(
            "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto",
            isRTL ? 'font-arabic' : ''
          )}>
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* BuildUp */}
          <a
            href="https://howtobuildup.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            
            {/* Card */}
            <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-10 border border-border/40 transition-shadow duration-300 hover:shadow-xl">
              <div className="relative w-48 h-24 mb-8 mx-auto">
                <img
                  src="https://howtobuildup.org/wp-content/uploads/sites/3/2020/08/buildup-1.png"
                  alt="BuildUp"
                  className="w-full h-full object-contain filter dark:invert"
                />
              </div>
              
              {/* Progress Bar */}
              <div className={cn("mt-8 w-full h-1 bg-gradient-to-r from-yie-red/40 to-yie-red/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left")} />
              
              {/* Decorative Corner */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-gradient-to-r from-yie-red/40 to-yie-red/20 rounded-full animate-ping" />
              </div>
            </div>
          </a>

          {/* British Council */}
          <a
            href="https://www.britishcouncil.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            
            {/* Card */}
            <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-10 border border-border/40 transition-shadow duration-300 hover:shadow-xl">
              <div className="relative w-48 h-24 mb-8 mx-auto">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/British_Council_logo.svg"
                  alt="British Council"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Progress Bar */}
              <div className={cn("mt-8 w-full h-1 bg-gradient-to-r from-yie-red/40 to-yie-red/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left")} />
              
              {/* Decorative Corner */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-gradient-to-r from-yie-red/40 to-yie-red/20 rounded-full animate-ping" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;