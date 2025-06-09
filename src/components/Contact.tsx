import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Send, Mail, Facebook, X, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzQv-FaVo8hVCJPE_0TV_sX1swnIoGTMqgpqYKyOeTVh7unxPFbzeUFN9pa4kPDGXcc/exec';
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toISOString(),
    });
    try {
      const response = await fetch(`${scriptUrl}?${params.toString()}`);
      const result = await response.json();
      if (result.status === 'success') {
        toast.success(t('contact.form.submitSuccess'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(t('contact.form.submitError'));
      }
    } catch (error) {
      toast.error(t('contact.form.submitError'));
    } finally {
      setLoading(false);
    }
  };

  const subjects = t('contact.form.subjects');

  return (
    <section id="contact" className={cn("py-32 relative overflow-hidden", isRTL ? 'text-right' : 'text-left')}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yie-red/40 to-yie-red/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yie-red/30 to-yie-red/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yie-red/20 to-yie-red/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-container mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yie-red/10 to-yie-red/5 rounded-full mb-8">
            <MessageCircle className="text-yie-red" size={16} />
            <span className="text-yie-red font-medium text-sm">{t('contact.connectWithUsTag')}</span>
          </div>
          
          <h2 className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight",
            isRTL ? 'font-arabic' : ''
          )}>
            {t('contact.title')}
          </h2>
          <p className={cn(
            "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto",
            isRTL ? 'font-arabic' : ''
          )}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className={cn("w-full", isRTL ? 'lg:order-2' : '')}>
            <div className="relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-3xl blur-2xl opacity-20" />
              
              <form onSubmit={handleSubmit} className="relative bg-card/50 backdrop-blur-xl rounded-3xl py-4 sm:p-6 lg:p-8 border border-border/40 space-y-6">
                <div>
                  <label className={cn("block text-sm font-medium text-foreground mb-3", isRTL ? 'font-arabic' : '')}>
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={cn("w-full py-4 px-5 rounded-2xl border border-gray-200 bg-white shadow-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300", isRTL ? 'text-right' : 'text-left')}
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-medium text-foreground mb-3", isRTL ? 'font-arabic' : '')}>
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={cn("w-full py-4 px-5 rounded-2xl border border-gray-200 bg-white shadow-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300", isRTL ? 'text-right' : 'text-left')}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-medium text-foreground mb-3", isRTL ? 'font-arabic' : '')}>
                    {t('contact.form.subject')}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={cn("w-full py-4 px-5 rounded-2xl border border-gray-200 bg-white shadow-sm text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300", isRTL ? 'text-right' : 'text-left')}
                  >
                    <option value="" className="bg-white text-foreground">{t('contact.form.subjectPlaceholder')}</option>
                    {Array.isArray(subjects) && subjects.map((subject: string, index: number) => (
                      <option key={index} value={subject} className="bg-background text-foreground">
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={cn("block text-sm font-medium text-foreground mb-3", isRTL ? 'font-arabic' : '')}>
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={cn("w-full py-4 px-5 rounded-2xl border border-gray-200 bg-white shadow-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none", isRTL ? 'text-right' : 'text-left')}
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className={cn("group w-full bg-gradient-to-r from-yie-red to-yie-red/80 hover:from-yie-red/90 hover:to-yie-red/70 text-yie-light px-8 py-5 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3", isRTL ? 'flex-row-reverse' : '')}
                  disabled={loading}
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-yie-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  ) : (
                    <Send className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  )}
                  <span>{t('contact.form.submit')}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={cn("w-full", isRTL ? 'lg:order-1' : '')}>
            <div className="relative overflow-hidden">
              {/* Info Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-3xl blur-2xl opacity-20" />
              
              <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl py-4 sm:p-6 lg:p-8 border border-border/40">
                <div className={cn("flex items-center gap-3 mb-8", isRTL ? 'flex-row-reverse' : '')}>
                  <Sparkles className="text-yie-red" size={24} />
                  <h3 className={cn("text-2xl font-bold text-foreground", isRTL ? 'font-arabic' : '')}>
                    {t('contact.connectWithUsHeader')}
                  </h3>
                </div>

                {/* Email */}
                <div className={cn("flex items-center gap-6 mb-12", isRTL ? 'flex-row-reverse' : '')}>
                  <div className="w-16 h-16 bg-gradient-to-br from-yie-red/80 to-yie-red rounded-2xl flex items-center justify-center">
                    <Mail className="text-yie-light" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t('contact.info.emailLabel')}</p>
                    <a
                      href="mailto:yemenisinexile@gmail.com"
                      className="text-xl font-semibold text-foreground hover:text-yie-red transition-colors duration-300"
                    >
                      {t('contact.info.email')}
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="space-y-6">
                  <h4 className={cn("text-lg font-semibold text-foreground mb-6", isRTL ? 'font-arabic' : '')}>
                    {t('contact.info.social')}
                  </h4>
                  
                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, url: 'https://www.facebook.com/YIEPodcast/', color: 'from-yie-red/80 to-yie-red' },
                      { icon: X, url: 'https://twitter.com/YemenisInExile', color: 'from-yie-red/70 to-yie-red/90' },
                      { icon: Instagram, url: 'https://www.instagram.com/yemenisinexile/', color: 'from-yie-red/60 to-yie-red/80' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300`}
                      >
                        <social.icon className="text-yie-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;