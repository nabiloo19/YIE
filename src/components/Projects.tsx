import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ExternalLink, Palette, BookOpen, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectItem {
  title: string;
  description: string;
  cta: string;
  url: string;
}

const Projects: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const projectIcons = [Palette, BookOpen];
  const projectsItems = (Array.isArray(t('projects.items')) ? t('projects.items') : []) as ProjectItem[];

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
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yie-red/10 to-yie-red/5 rounded-full mb-8">
            <Palette className="text-yie-red" size={16} />
            <span className="text-yie-red font-medium text-sm">{t('projects.title')}</span>
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsItems.map((project: ProjectItem, index: number) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-card/50 backdrop-blur-sm rounded-3xl border border-border/40 hover:border-yie-red/20 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={index === 0 
                    ? "https://i.ibb.co/v4S5nq6/Clean-Shot-2023-08-22-at-13-46-07-2x.png"
                    : "https://i.ibb.co/TRcr7WY/1080x1080-Ya-Leed.jpg"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-2xl font-bold text-foreground mb-3 group-hover:text-yie-red transition-colors duration-300",
                      isRTL ? 'font-arabic' : ''
                    )}>
                      {project.title}
                    </h3>
                    <p className={cn(
                      "text-muted-foreground mb-6",
                      isRTL ? 'font-arabic' : ''
                    )}>
                      {project.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-yie-red/80 to-yie-red rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight className="text-yie-light" size={24} />
                  </div>
                </div>

                {/* CTA Button */}
                <div className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yie-red/10 to-yie-red/5 text-yie-red font-medium group-hover:from-yie-red/20 group-hover:to-yie-red/10 transition-all duration-300",
                  isRTL ? 'flex-row-reverse' : ''
                )}>
                  <span>{project.cta}</span>
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;