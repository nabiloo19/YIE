import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { TestimonialsSection } from './ui/testimonials-with-marquee';

const Testimonials: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const testimonialsItems = Array.isArray(t('testimonials.items')) ? t('testimonials.items') : [];

  // Transform testimonials data to match the new component's format
  const transformedTestimonials = testimonialsItems.map((item: any) => ({
    author: {
      name: item.author,
      handle: item.location,
      avatar: `https://images.unsplash.com/photo-${Math.random().toString(36).substring(2, 15)}?w=150&h=150&fit=crop&crop=face`
    },
    text: item.quote,
  }));

  return (
    <TestimonialsSection
      id="testimonials"
      title={t('testimonials.title')}
      description={t('testimonials.subtitle')}
      testimonials={transformedTestimonials}
      className={`relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}
    />
  );
};

export default Testimonials;