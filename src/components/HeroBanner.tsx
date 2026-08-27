import React from 'react';
import { MapPin, Compass, BookOpen, Hotel, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';
import { ActiveTab } from './Navbar';

interface HeroBannerProps {
  setActiveTab: (tab: ActiveTab) => void;
  onFilterCity: (city: 'All' | 'Makkah' | 'Madinah') => void;
  activeCity: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ setActiveTab, onFilterCity, activeCity }) => {
  return (
    <div className="relative bg-[#2D4A3E] text-white overflow-hidden border-b border-[#1E332A]">
      {/* Subtle Islamic Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#8C734B 1px, transparent 1px), radial-gradient(#E5E1D3 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Core Vision */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1E332A] border border-[#8C734B]/40 text-[#EFE7DA] text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-[#8C734B]" />
              <span>Spiritual Precision & Authentic Sunnah Traditions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FDFCF6] leading-[1.15]">
              Journey of Faith in <br className="hidden sm:inline" />
              <span className="text-[#EFE7DA]">
                Makkah & Madinah
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#E5E1D3] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore historical Ziyarat landmarks, master step-by-step Umrah rituals with authenticated Duas, discover premier Haram-view hotels, and plan your custom sacred itinerary with ease.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-explore-ziyarat-btn"
                onClick={() => {
                  setActiveTab('ziyarat');
                  onFilterCity('All');
                }}
                className="px-6 py-3 rounded-full bg-[#8C734B] hover:bg-[#755F3C] text-white font-semibold text-sm shadow-md transition-all flex items-center space-x-2 border border-[#8C734B]/40 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#EFE7DA]" />
                <span>Explore All Ziyarat Sites</span>
              </button>

              <button
                id="hero-view-rituals-btn"
                onClick={() => setActiveTab('guide')}
                className="px-6 py-3 rounded-full bg-[#1E332A] hover:bg-[#15241E] text-[#FDFCF6] font-semibold text-sm transition-all flex items-center space-x-2 border border-[#8C734B]/30 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#8C734B]" />
                <span>Umrah Ritual Guide</span>
              </button>
            </div>

            {/* City Fast-Switcher Pills */}
            <div className="pt-3 flex items-center justify-center lg:justify-start space-x-2 text-xs">
              <span className="text-[#C4B59D] font-medium mr-1">Quick Filter:</span>
              <button
                id="hero-filter-all"
                onClick={() => onFilterCity('All')}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeCity === 'All'
                    ? 'bg-[#8C734B] text-white font-bold shadow-xs'
                    : 'bg-[#1E332A] text-[#E5E1D3] hover:bg-[#172720] border border-[#8C734B]/20'
                }`}
              >
                All Holy Sites
              </button>
              <button
                id="hero-filter-makkah"
                onClick={() => onFilterCity('Makkah')}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeCity === 'Makkah'
                    ? 'bg-[#8C734B] text-white font-bold shadow-xs'
                    : 'bg-[#1E332A] text-[#E5E1D3] hover:bg-[#172720] border border-[#8C734B]/20'
                }`}
              >
                🕋 Makkah (7 Sites)
              </button>
              <button
                id="hero-filter-madinah"
                onClick={() => onFilterCity('Madinah')}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeCity === 'Madinah'
                    ? 'bg-[#8C734B] text-white font-bold shadow-xs'
                    : 'bg-[#1E332A] text-[#E5E1D3] hover:bg-[#172720] border border-[#8C734B]/20'
                }`}
              >
                🕌 Madinah (6 Sites)
              </button>
            </div>
          </div>

          {/* Right Column: Two Grand Holy Sanctuaries Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Makkah Card */}
            <div 
              id="hero-card-makkah"
              onClick={() => {
                setActiveTab('ziyarat');
                onFilterCity('Makkah');
              }}
              className="group cursor-pointer rounded-3xl bg-[#1E332A]/90 border border-[#8C734B]/30 hover:border-[#8C734B] p-5 transition-all duration-200 hover:shadow-xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-[#EFE7DA] font-serif">Makkah Al-Mukarramah</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#8C734B]/20 text-[#EFE7DA] border border-[#8C734B]/40 font-arabic">
                      مكة المكرمة
                    </span>
                  </div>
                  <p className="text-xs text-[#C4B59D] mt-1">
                    Home of the Holy Kaaba & Al-Masjid al-Haram
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#8C734B]/20 text-[#EFE7DA] flex items-center justify-center group-hover:bg-[#8C734B] group-hover:text-white transition-colors">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-[#2D4A3E] text-xs">
                <div className="bg-[#15241E]/80 rounded-xl p-2.5 border border-[#8C734B]/10">
                  <div className="text-[#C4B59D] text-[10px] uppercase font-semibold tracking-wider">Haram Reward</div>
                  <div className="text-[#EFE7DA] font-bold text-sm">100,000× Prayer</div>
                </div>
                <div className="bg-[#15241E]/80 rounded-xl p-2.5 border border-[#8C734B]/10">
                  <div className="text-[#C4B59D] text-[10px] uppercase font-semibold tracking-wider">Key Landmarks</div>
                  <div className="text-[#FDFCF6] font-medium">Hira, Thawr, Arafat</div>
                </div>
              </div>
            </div>

            {/* Madinah Card */}
            <div 
              id="hero-card-madinah"
              onClick={() => {
                setActiveTab('ziyarat');
                onFilterCity('Madinah');
              }}
              className="group cursor-pointer rounded-3xl bg-[#1E332A]/90 border border-[#8C734B]/30 hover:border-[#8C734B] p-5 transition-all duration-200 hover:shadow-xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-[#EFE7DA] font-serif">Al-Madinah Al-Munawwarah</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#8C734B]/20 text-[#EFE7DA] border border-[#8C734B]/40 font-arabic">
                      المدينة المنورة
                    </span>
                  </div>
                  <p className="text-xs text-[#C4B59D] mt-1">
                    The City of the Prophet ﷺ & Rawdah ash-Sharifah
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#8C734B]/20 text-[#EFE7DA] flex items-center justify-center group-hover:bg-[#8C734B] group-hover:text-white transition-colors">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-[#2D4A3E] text-xs">
                <div className="bg-[#15241E]/80 rounded-xl p-2.5 border border-[#8C734B]/10">
                  <div className="text-[#C4B59D] text-[10px] uppercase font-semibold tracking-wider">Prophet's Mosque</div>
                  <div className="text-[#EFE7DA] font-bold text-sm">1,000× Prayer</div>
                </div>
                <div className="bg-[#15241E]/80 rounded-xl p-2.5 border border-[#8C734B]/10">
                  <div className="text-[#C4B59D] text-[10px] uppercase font-semibold tracking-wider">Sunnah Reward</div>
                  <div className="text-[#FDFCF6] font-medium">Quba = Umrah Reward</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
