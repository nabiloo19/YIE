import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ExternalLink, Palette, BookOpen, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const projectIcons = [Palette, BookOpen];
  const projectsItems = Array.isArray(t('projects.items')) ? t('projects.items') : [];

  return (
    <section id="projects" className={`py-32 relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-indigo-200 to-purple-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full opacity-20 animate-float animation-delay-3000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-8">
            <Palette className="text-indigo-600 dark:text-indigo-400" size={16} />
            <span className="text-indigo-800 dark:text-indigo-300 font-medium text-sm">Creative Works</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 dark:from-indigo-200 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent leading-tight ${isRTL ? 'font-arabic' : ''}`}>
            {t('projects.title')}
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                
                {/* Card */}
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-700 transform group-hover:scale-105">
                  <div className={`flex items-start gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="text-white" size={36} />
                        
                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <h3 className={`text-3xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                        {project.description}
                      </p>
                      
                      {/* CTA Button */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        <span>{project.cta}</span>
                        <ArrowUpRight className="group-hover/btn:scale-125 group-hover/btn:rotate-45 transition-transform duration-300" size={20} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-ping"></div>
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