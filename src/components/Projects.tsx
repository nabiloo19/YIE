import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ExternalLink, Palette, BookOpen, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Projects: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const projectIcons = [Palette, BookOpen];
  const projectsItems = Array.isArray(t('projects.items')) ? t('projects.items') : [];

  return (
    <section id="projects" className={cn("py-32 relative overflow-hidden", isRTL ? 'text-right' : 'text-left')}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yie-red/40 to-yie-red/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yie-red/30 to-yie-red/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yie-red/20 to-yie-red/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yie-red/10 to-yie-red/5 rounded-full mb-8">
            <Palette className="text-yie-red" size={16} />
            <span className="text-yie-red font-medium text-sm">{t('projects.creativeWorks')}</span>
          </div>
          
          <h2 className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight",
            isRTL ? 'font-arabic' : ''
          )}>
            {t('projects.title')}
          </h2>
          <p className={cn(
            "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto",
            isRTL ? 'font-arabic' : ''
          )}>
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projectsItems.map((project: any, index: number) => {
            const Icon = projectIcons[index];
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                
                {/* Card */}
                <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-10 border border-border/40 hover:border-yie-red/20 transition-all duration-700 transform group-hover:scale-105">
                  <div className={cn("flex items-start gap-8", isRTL ? 'flex-row-reverse' : '')}>
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 bg-gradient-to-br from-yie-red/80 to-yie-red rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="text-yie-light" size={36} />
                        
                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yie-red/20 to-yie-red/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <h3 className={cn("text-3xl font-bold text-foreground group-hover:text-yie-red transition-colors duration-300", isRTL ? 'font-arabic' : '')}>
                        {project.title}
                      </h3>
                      
                      <p className={cn("text-lg text-muted-foreground leading-relaxed", isRTL ? 'font-arabic' : '')}>
                        {project.description}
                      </p>
                      
                      {/* CTA Button */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("group/btn inline-flex items-center gap-3 bg-gradient-to-r from-yie-red to-yie-red/80 hover:from-yie-red/90 hover:to-yie-red/70 text-yie-light px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 hover:shadow-xl", isRTL ? 'flex-row-reverse' : '')}
                      >
                        <span>{project.cta}</span>
                        <ArrowUpRight className="group-hover/btn:scale-125 group-hover/btn:rotate-45 transition-transform duration-300" size={20} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-yie-red/40 to-yie-red/20 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;