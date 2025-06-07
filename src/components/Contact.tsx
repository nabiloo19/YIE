import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Send, Mail, Facebook, Twitter, Instagram, MessageCircle, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const subjects = t('contact.form.subjects');

  return (
    <section id="contact" className={`py-32 relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 dark:from-black dark:via-slate-900 dark:to-purple-900"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <MessageCircle className="text-purple-400" size={16} />
            <span className="text-white font-medium text-sm">Let's Connect</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-black mb-8 text-white leading-tight ${isRTL ? 'font-arabic' : ''}`}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`${isRTL ? 'lg:order-2' : ''}`}>
            <div className="relative">
              {/* Form Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-3xl blur-2xl opacity-20"></div>
              
              <form onSubmit={handleSubmit} className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 space-y-6">
                <div>
                  <label className={`block text-sm font-medium text-gray-300 mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-300 mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-300 mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.form.subject')}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <option value="" className="bg-gray-800 text-white">{t('contact.form.subject')}</option>
                    {Array.isArray(subjects) && subjects.map((subject: string, index: number) => (
                      <option key={index} value={subject} className="bg-gray-800 text-white">
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-300 mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder="Tell us your story..."
                  />
                </div>

                <button
                  type="submit"
                  className={`group w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 text-white px-8 py-5 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Send className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  <span>{t('contact.form.submit')}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative">
              {/* Info Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="text-cyan-400" size={24} />
                  <h3 className={`text-2xl font-bold text-white ${isRTL ? 'font-arabic' : ''}`}>
                    Connect With Us
                  </h3>
                </div>

                {/* Email */}
                <div className={`flex items-center gap-6 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:yemenisinexile@gmail.com"
                      className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors duration-300"
                    >
                      {t('contact.info.email')}
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="space-y-6">
                  <h4 className={`text-lg font-semibold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact.info.social')}
                  </h4>
                  
                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, url: '#', color: 'from-blue-500 to-blue-600' },
                      { icon: Twitter, url: '#', color: 'from-sky-400 to-sky-500' },
                      { icon: Instagram, url: '#', color: 'from-pink-500 to-rose-500' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 relative overflow-hidden`}
                      >
                        <social.icon className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" size={24} />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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