import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Sparkles, Heart, Globe, Users, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const About: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const features = [
    { 
      icon: Heart, 
      label: 'about.features.stories',
      description: 'about.features.storiesDesc',
      color: 'from-yie-red/40 to-yie-red/20' 
    },
    { 
      icon: Globe, 
      label: 'about.features.voices',
      description: 'about.features.voicesDesc',
      color: 'from-yie-red/30 to-yie-red/10' 
    },
    { 
      icon: Users, 
      label: 'about.features.resilience',
      description: 'about.features.resilienceDesc',
      color: 'from-yie-red/20 to-yie-red/5' 
    },
  ];

  return (
    <section id="about" className={cn(
      "py-32 relative overflow-hidden",
      isRTL ? 'text-right' : 'text-left'
    )}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yie-red/40 to-yie-red/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yie-red/30 to-yie-red/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yie-red/20 to-yie-red/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className={cn("space-y-8", isRTL ? 'lg:order-2' : '')}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yie-red/10 to-yie-red/5 rounded-full">
                <Sparkles className="text-yie-red" size={16} />
                <span className="text-yie-red font-medium text-sm">{t('about.mission')}</span>
              </div>
              
              <h2 className={cn(
                "text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight",
                isRTL ? 'font-arabic' : ''
              )}>
                {t('about.title')}
              </h2>
            </div>
            
            <div className="space-y-6">
              <p 
                className={cn(
                  "text-lg sm:text-xl leading-relaxed text-muted-foreground",
                  isRTL ? 'font-arabic' : ''
                )}
                dangerouslySetInnerHTML={{ __html: t('about.description') }}
              />
            </div>
            
            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-yie-red/20 transition-all duration-300"
                >
                  <div className={cn(
                    "w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                    feature.color
                  )}>
                    <feature.icon className="text-yie-light" size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t(feature.label)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(feature.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Embed */}
          <div className={cn("", isRTL ? 'lg:order-1' : '')}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Video Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-border/40">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/D5uVDQwkHw8"
                  title="Yemenis In Exile Introduction"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;