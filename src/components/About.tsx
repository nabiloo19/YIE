import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Sparkles, Heart, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const features = [
    { icon: Heart, label: 'Storytelling', color: 'from-red-400 to-pink-500' },
    { icon: Globe, label: 'Cultural Preservation', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, label: 'Community', color: 'from-green-400 to-emerald-500' },
    { icon: Sparkles, label: 'Diaspora', color: 'from-purple-400 to-violet-500' },
  ];

  return (
    <section id="about" className={`py-32 relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-amber-200 to-orange-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-300 rounded-full opacity-20 animate-float animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className={`${isRTL ? 'lg:order-2' : ''} space-y-8`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full">
                <Sparkles className="text-amber-600 dark:text-amber-400" size={16} />
                <span className="text-amber-800 dark:text-amber-300 font-medium text-sm">Our Mission</span>
              </div>
              
              <h2 className={`text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent leading-tight ${isRTL ? 'font-arabic' : ''}`}>
                {t('about.title')}
              </h2>
            </div>
            
            <p className={`text-xl leading-relaxed text-gray-700 dark:text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>
              {t('about.description')}
            </p>
            
            {/* Feature Tags */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white text-sm">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Embed */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Video Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
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