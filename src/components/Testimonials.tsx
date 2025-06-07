import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const testimonialsItems = Array.isArray(t('testimonials.items')) ? t('testimonials.items') : [];

  return (
    <section id="testimonials" className={`py-32 relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 dark:from-gray-900 dark:via-amber-950 dark:to-orange-950"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200/30 to-orange-300/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-rose-300/30 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full mb-8">
            <Star className="text-amber-600 dark:text-amber-400" size={16} />
            <span className="text-amber-800 dark:text-amber-300 font-medium text-sm">Community Voices</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-amber-800 via-orange-700 to-pink-700 dark:from-amber-300 dark:via-orange-300 dark:to-pink-300 bg-clip-text text-transparent leading-tight ${isRTL ? 'font-arabic' : ''}`}>
            {t('testimonials.title')}
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsItems.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-700"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-700 transform group-hover:scale-105">
                {/* Quote Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Quote className="text-white" size={24} />
                  </div>
                  
                  {/* Floating Stars */}
                  <div className="absolute -top-2 -right-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 text-amber-400 fill-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Quote */}
                <blockquote className={`text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic font-medium ${isRTL ? 'font-arabic' : ''}`}>
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Author Info */}
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <cite className={`font-bold text-gray-900 dark:text-white not-italic text-lg ${isRTL ? 'font-arabic' : ''}`}>
                      {testimonial.author}
                    </cite>
                    <p className={`text-sm text-gray-500 dark:text-gray-400 mt-1 ${isRTL ? 'font-arabic' : ''}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;