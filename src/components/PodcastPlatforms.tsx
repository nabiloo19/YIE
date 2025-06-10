import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ExternalLink, Headphones } from 'lucide-react';

// Platform type definition
type Platform = {
  name: string;
  color: string;
  url: string;
  delay: string;
  logo: string;
};

const PodcastPlatforms: React.FC = () => {
  const { t, isRTL } = useTranslation();

  const platforms: Platform[] = [
    { 
      name: 'SoundCloud', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://soundcloud.com/yemenisinexile', 
      delay: '0ms',
      logo: 'https://img.icons8.com/color/144/000000/soundcloud.png'
    },
    { 
      name: 'Google Podcast', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zb3VuZGNsb3VkLmNvbS91c2Vycy9zb3VuZGNsb3VkOnVzZXJzOjgzOTA1ODg2OC9zb3VuZHMucnNz?sa=X&ved=2ahUKEwinxrqq9IbsAhUG4hoKHffsB8oQ9sEGegQIARAC', 
      delay: '50ms',
      logo: 'https://img.icons8.com/color/144/000000/google-podcasts.png'
    },
    { 
      name: 'Apple Podcast', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://podcasts.apple.com/ye/podcast/yemenis-in-exile-podcast/id1530275893', 
      delay: '100ms',
      logo: 'https://i.ibb.co/Qcy6KP1/podcast.png'
    },
    { 
      name: 'Anghami', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://play.anghami.com/album/1016273709', 
      delay: '150ms',
      logo: 'https://i.ibb.co/dt4xBLc/Anghami-logo-New.png'
    },
    { 
      name: 'Spotify', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://open.spotify.com/show/1iAqervKoNOF1coPIgy6Nl', 
      delay: '200ms',
      logo: 'https://i.ibb.co/9c85fJk/spotify-removebg-preview.png'
    },
    { 
      name: 'CastBox', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://castbox.fm/channel/Yemenis-In-Exile-Podcast-id3314567', 
      delay: '250ms',
      logo: 'https://i.ibb.co/k6VkC0v/castbox-icon.png'
    },
    { 
      name: 'iHeart Radio', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://www.iheart.com/podcast/966-yemenis-in-exile-podcast-76474715/', 
      delay: '300ms',
      logo: 'https://i.ibb.co/GVkvC2L/iheart-Radio.png'
    },
    { 
      name: 'Deezer', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://www.deezer.com/show/2115012', 
      delay: '350ms',
      logo: 'https://i.ibb.co/5WFhK8t/deezer-Logo.png'
    },
    { 
      name: 'Spreaker', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://www.spreaker.com/show/yemenis-in-exile-podcast', 
      delay: '400ms',
      logo: 'https://i.ibb.co/pWsZC3n/spreaker-Logo.png'
    },
    { 
      name: 'PodBay', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://podbay.fm/p/yemenis-in-exile-podcast', 
      delay: '450ms',
      logo: 'https://i.ibb.co/zXBKnpz/podbay-Logo.jpg'
    },
    { 
      name: 'PodParadise', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://www.podparadise.com/Podcast/1530275893', 
      delay: '500ms',
      logo: 'https://i.ibb.co/nkNc89s/Pod-Pradaise.png'
    },
    { 
      name: 'ListenNotes', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://www.listennotes.com/podcasts/yemenis-in-exile-podcast-yemenis-in-exile-2vj7ZpyQeKD/', 
      delay: '550ms',
      logo: 'https://i.ibb.co/YQBkhTk/Listen-Notes-Pic-removebg-preview.png'
    },
    { 
      name: 'PodcastAddict', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://podcastaddict.com/podcast/3195831', 
      delay: '600ms',
      logo: 'https://i.ibb.co/LN1Zs94/podcast-Addict.png'
    },
    { 
      name: 'PodChaser', 
      color: 'from-yie-red to-yie-red/80', 
      url: 'https://www.podchaser.com/podcasts/yemenis-in-exile-podcast-1573299', 
      delay: '650ms',
      logo: 'https://i.ibb.co/G73BgJy/podchaser.jpg'
    }
  ];

  return (
    <section id="podcast" className={`py-32 relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yie-dark via-yie-dark/90 to-yie-dark/80 dark:from-yie-dark dark:via-yie-dark/90 dark:to-yie-dark/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yie-red/20 to-yie-red/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-yie-red/10 backdrop-blur-sm rounded-full mb-8">
            <Headphones className="text-yie-red" size={20} />
            <span className="text-yie-light font-medium">Available Everywhere</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-black mb-8 text-yie-light leading-tight ${isRTL ? 'font-arabic' : ''}`}>
            <span className="bg-gradient-to-r from-yie-red via-yie-red/90 to-yie-red/80 bg-clip-text text-transparent">
              {t('podcast.title')}
            </span>
          </h2>
          <p className={`text-xl text-yie-light/80 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('podcast.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:justify-items-stretch">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-4 py-8 md:px-8 bg-yie-dark/50 backdrop-blur-lg rounded-3xl border border-yie-red/20 hover:border-yie-red/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 ${isRTL ? 'text-right' : ''} lg:h-full`}
              style={{ animationDelay: platform.delay }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`}
                  className="w-10 h-10 object-contain bg-white rounded-lg shadow-md border border-yie-red/10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallbackIcon = document.createElement('div');
                      fallbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yie-light"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';
                      parent.appendChild(fallbackIcon);
                    }
                  }}
                />
              </div>
              
              {/* Platform Name */}
              <h3 className="relative font-bold text-yie-light mb-2 text-lg group-hover:text-yie-red transition-colors duration-300">
                {platform.name}
              </h3>
              
              {/* Hover Indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={18} className="text-yie-light/60" />
              </div>
              
              {/* Bottom Accent */}
              <div className={`absolute bottom-0 inset-x-4 md:inset-x-8 h-1 bg-gradient-to-r ${platform.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastPlatforms;