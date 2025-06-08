import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ExternalLink, Handshake, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Partners: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const partners = [
    {
      name: 'Build Up',
      url: 'https://howtobuildup.org/',
      description: 'partners.buildupDescription',
    },
    {
      name: 'British Council',
      url: 'https://www.britishcouncil.org/',
      description: 'partners.britishCouncilDescription',
    }
  ];

  return (
    <section id="partners" className={cn("py-32 relative overflow-hidden", isRTL ? 'text-right' : 'text-left')}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yie-red/40 to-yie-red/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yie-red/30 to-yie-red/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yie-red/20 to-yie-red/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yie-red/10 to-yie-red/5 rounded-full mb-8">
            <Handshake className="text-yie-red" size={16} />
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
              
              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-10 border border-border/40 hover:border-yie-red/20 transition-all duration-700 transform group-hover:scale-105">
                <div className={cn("flex items-center justify-between mb-6", isRTL ? 'flex-row-reverse' : '')}>
                  {/* Partner Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yie-red/80 to-yie-red rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ExternalLink className="text-yie-light" size={24} />
                  </div>
                  
                  {/* Arrow */}
                  <ArrowUpRight 
                    className="text-muted-foreground group-hover:text-yie-red group-hover:scale-125 group-hover:rotate-45 transition-all duration-500" 
                    size={24} 
                  />
                </div>
                
                <h3 className={cn("text-3xl font-bold text-foreground mb-4 group-hover:text-yie-red transition-colors duration-300", isRTL ? 'font-arabic' : '')}>
                  {partner.name}
                </h3>
                
                <p className={cn("text-lg text-muted-foreground leading-relaxed", isRTL ? 'font-arabic' : '')}>
                  {t(partner.description)}
                </p>
                
                {/* Progress Bar */}
                <div className={cn("mt-8 w-full h-1 bg-gradient-to-r from-yie-red/40 to-yie-red/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left")} />
                
                {/* Decorative Corner */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-gradient-to-r from-yie-red/40 to-yie-red/20 rounded-full animate-ping" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;