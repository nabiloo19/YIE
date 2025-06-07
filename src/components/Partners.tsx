import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ExternalLink, Handshake, ArrowUpRight } from 'lucide-react';

const Partners: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const partners = [
    {
      name: 'Build Up',
      url: 'https://howtobuildup.org/',
      description: 'Supporting community development and empowerment',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      name: 'British Council',
      url: 'https://www.britishcouncil.org/',
      description: 'Promoting cultural understanding and education',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section id="partners" className={`py-32 relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-950 dark:to-teal-950"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-emerald-200/30 to-teal-300/30 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-indigo-300/30 rounded-full filter blur-3xl animate-float animation-delay-3000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full mb-8">
            <Handshake className="text-emerald-600 dark:text-emerald-400" size={16} />
            <span className="text-emerald-800 dark:text-emerald-300 font-medium text-sm">Collaboration</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-emerald-800 via-teal-700 to-blue-700 dark:from-emerald-300 dark:via-teal-300 dark:to-blue-300 bg-clip-text text-transparent leading-tight ${isRTL ? 'font-arabic' : ''}`}>
            {t('partners.title')}
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
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
              <div className={`absolute -inset-4 bg-gradient-to-r ${partner.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
              
              {/* Card */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-700 transform group-hover:scale-105">
                <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {/* Partner Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <ExternalLink className="text-white" size={24} />
                  </div>
                  
                  {/* Arrow */}
                  <ArrowUpRight 
                    className="text-gray-400 group-hover:text-emerald-500 group-hover:scale-125 group-hover:rotate-45 transition-all duration-500" 
                    size={24} 
                  />
                </div>
                
                <h3 className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}>
                  {partner.name}
                </h3>
                
                <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {partner.description}
                </p>
                
                {/* Progress Bar */}
                <div className={`mt-8 w-full h-1 bg-gradient-to-r ${partner.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                
                {/* Decorative Corner */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-2 h-2 bg-gradient-to-r ${partner.color} rounded-full animate-ping`}></div>
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