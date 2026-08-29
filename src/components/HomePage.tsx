import React from 'react';
import { 
  Compass, BookOpen, Hotel, Calendar, Sparkles, 
  MapPin, ShieldCheck, Star, ArrowRight, CheckCircle2, 
  Clock, Footprints, Heart, Users, ExternalLink, Award,
  Navigation, Sun, Moon, Landmark, Check
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { City } from '../types';
import { ZIYARAT_PLACES } from '../data/ziyaratData';
import { PACKAGES_DATA } from '../data/hotelsAndPackagesData';

export interface HomePageProps {
  setActiveTab: (tab: ActiveTab) => void;
  onSelectCity: (city: 'All' | City) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onSelectCity }) => {
  const makkahPlacesCount = ZIYARAT_PLACES.filter(p => p.city === 'Makkah').length;
  const madinahPlacesCount = ZIYARAT_PLACES.filter(p => p.city === 'Madinah').length;

  const navigateToCity = (city: City) => {
    onSelectCity(city);
    setActiveTab('ziyarat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-container" className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#2D4A3E] text-white overflow-hidden border-b border-[#1E332A]">
        {/* Geometric Motif Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#8C734B 1px, transparent 1px), radial-gradient(#E5E1D3 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '0 0, 16px 16px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Spiritual Top Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1E332A] border border-[#8C734B]/40 text-[#EFE7DA] text-xs sm:text-sm font-medium shadow-xs">
                <Sparkles className="w-4 h-4 text-[#8C734B]" />
                <span className="font-serif">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</span>
                <span className="text-[#8C867A]">|</span>
                <span>Spiritual Companion 1447H</span>
              </div>

              {/* Grand Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FDFCF6] leading-[1.12]">
                Your Sacred Journey to the Two Holy Sanctuaries
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#E5E1D3] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Step-by-step authenticated Umrah rituals, in-depth historical Ziyarat guides with GPS coordinates, curated 5-star Haram-view packages, and personalized smart itinerary planning.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  id="hero-btn-start-rituals"
                  onClick={() => navigateToTab('guide')}
                  className="px-6 py-3.5 rounded-full bg-[#8C734B] hover:bg-[#755F3C] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-2 border border-[#8C734B]/40 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#EFE7DA]" />
                  <span>Master Umrah Rituals</span>
                  <ArrowRight className="w-4 h-4 text-[#EFE7DA]" />
                </button>

                <button
                  id="hero-btn-explore-ziyarat"
                  onClick={() => {
                    onSelectCity('All');
                    navigateToTab('ziyarat');
                  }}
                  className="px-6 py-3.5 rounded-full bg-[#1E332A] hover:bg-[#15241E] text-[#FDFCF6] font-semibold text-xs sm:text-sm transition-all flex items-center space-x-2 border border-[#8C734B]/30 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#8C734B]" />
                  <span>Explore Ziyarat Guides</span>
                </button>

                <button
                  id="hero-btn-plan-journey"
                  onClick={() => navigateToTab('planner')}
                  className="px-5 py-3.5 rounded-full bg-transparent hover:bg-[#1E332A]/50 text-[#E5E1D3] font-semibold text-xs sm:text-sm transition-all flex items-center space-x-2 border border-[#E5E1D3]/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C4B59D]" />
                  <span>Plan Itinerary</span>
                </button>
              </div>

              {/* Key Platform Highlights Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#1E332A] text-left">
                <div className="p-2.5 rounded-2xl bg-[#1E332A]/60 border border-[#8C734B]/20">
                  <div className="text-[10px] text-[#C4B59D] uppercase font-bold tracking-wider">Haram Reward</div>
                  <div className="text-sm font-bold text-[#FDFCF6]">100,000× Prayer</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#1E332A]/60 border border-[#8C734B]/20">
                  <div className="text-[10px] text-[#C4B59D] uppercase font-bold tracking-wider">Nabawi Reward</div>
                  <div className="text-sm font-bold text-[#FDFCF6]">1,000× Prayer</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#1E332A]/60 border border-[#8C734B]/20">
                  <div className="text-[10px] text-[#C4B59D] uppercase font-bold tracking-wider">Verified Sites</div>
                  <div className="text-sm font-bold text-[#FDFCF6]">13 GPS Locations</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#1E332A]/60 border border-[#8C734B]/20">
                  <div className="text-[10px] text-[#C4B59D] uppercase font-bold tracking-wider">Authenticity</div>
                  <div className="text-sm font-bold text-[#FDFCF6]">Sahih Hadith Only</div>
                </div>
              </div>

            </div>

            {/* Hero Right Visual: Dual Sacred Cities Showcase Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Makkah Quick Card */}
              <div 
                id="hero-makkah-card"
                onClick={() => navigateToCity('Makkah')}
                className="group cursor-pointer rounded-3xl bg-[#1E332A] border border-[#8C734B]/30 hover:border-[#8C734B] p-5 sm:p-6 transition-all duration-200 hover:shadow-xl relative overflow-hidden text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg sm:text-xl font-bold text-[#FDFCF6] font-serif">
                        Makkah Al-Mukarramah
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#8C734B] text-white font-bold font-arabic">
                        مكة المكرمة
                      </span>
                    </div>
                    <p className="text-xs text-[#C4B59D] mt-1">
                      Mother of Cities • Holy Kaaba & Safa-Marwah
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#8C734B]/20 text-[#EFE7DA] flex items-center justify-center group-hover:bg-[#8C734B] group-hover:text-white transition-colors">
                    <Navigation className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#E5E1D3] pt-3 border-t border-[#2D4A3E]">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8C734B]" />
                    <span>{makkahPlacesCount} Historical Landmarks</span>
                  </span>
                  <span className="text-[#8C734B] font-bold group-hover:translate-x-1 transition-transform flex items-center">
                    Explore Guide →
                  </span>
                </div>
              </div>

              {/* Madinah Quick Card */}
              <div 
                id="hero-madinah-card"
                onClick={() => navigateToCity('Madinah')}
                className="group cursor-pointer rounded-3xl bg-[#1E332A] border border-[#8C734B]/30 hover:border-[#8C734B] p-5 sm:p-6 transition-all duration-200 hover:shadow-xl relative overflow-hidden text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg sm:text-xl font-bold text-[#FDFCF6] font-serif">
                        Al-Madinah Al-Munawwarah
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#2D4A3E] text-[#EFE7DA] border border-[#8C734B]/40 font-bold font-arabic">
                        المدينة المنورة
                      </span>
                    </div>
                    <p className="text-xs text-[#C4B59D] mt-1">
                      The Radiant City • Masjid an-Nabawi & Rawdah
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#8C734B]/20 text-[#EFE7DA] flex items-center justify-center group-hover:bg-[#8C734B] group-hover:text-white transition-colors">
                    <Navigation className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#E5E1D3] pt-3 border-t border-[#2D4A3E]">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8C734B]" />
                    <span>{madinahPlacesCount} Sacred Landmarks</span>
                  </span>
                  <span className="text-[#8C734B] font-bold group-hover:translate-x-1 transition-transform flex items-center">
                    Explore Guide →
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK HIGHLIGHTS OF MAKKAH & MADINAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 text-[#8C734B] font-bold text-xs uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Sacred Sanctuaries & Historical Seerah</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2D2A26]">
            Historical Highlights of the Holy Cities
          </h2>
          <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
            Walk in the footsteps of the Prophet Muhammad ﷺ and his noble Companions with GPS-verified coordinates, authentic Hadith references, and visiting guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Makkah City Spotlight Card */}
          <div className="bg-white rounded-3xl border border-[#E5E1D3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Image Banner */}
              <div className="relative h-64 w-full bg-[#1E332A] overflow-hidden">
                <img
                  src="/makkah.jpg"
                  alt="Makkah Al-Mukarramah"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#8C734B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    🕋 Makkah Sanctuary
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-serif font-bold">Makkah Al-Mukarramah</h3>
                  <p className="text-xs text-[#EFE7DA] font-arabic">أُمُّ الْقُرَى • مكة المكرمة</p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                  The birthplace of revelation and the focal point of all Muslim prayers worldwide. Explore the Holy Kaaba, the Cave of Hira atop Jabal al-Nour, and the historical sanctuary of Jabal Thawr.
                </p>

                {/* Key Landmark Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#2D4A3E] uppercase tracking-wider block">
                    Essential Makkah Sites:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Al-Masjid al-Haram', 'Cave of Hira (Jabal al-Nour)', 'Jabal Thawr', 'Mount Arafat', 'Jannat al-Mu\'alla'].map((site, idx) => (
                      <span key={idx} className="bg-[#F8F5EB] border border-[#E5E1D3] text-[#2D4A3E] text-xs font-semibold px-3 py-1 rounded-full">
                        {site}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-6 pt-0 border-t border-[#E5E1D3]/60">
              <button
                onClick={() => navigateToCity('Makkah')}
                className="w-full py-3 rounded-2xl bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>View Makkah Ziyarat Guide ({makkahPlacesCount} Sites)</span>
                <ArrowRight className="w-4 h-4 text-[#8C734B]" />
              </button>
            </div>
          </div>

          {/* Madinah City Spotlight Card */}
          <div className="bg-white rounded-3xl border border-[#E5E1D3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Image Banner */}
              <div className="relative h-64 w-full bg-[#1E332A] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80"
                  alt="Al-Madinah Al-Munawwarah"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2D4A3E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs border border-[#8C734B]/40">
                    🕌 Madinah Nabawiyyah
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-serif font-bold">Al-Madinah Al-Munawwarah</h3>
                  <p className="text-xs text-[#EFE7DA] font-arabic">طَيْبَةُ الطَّيِّبَة • المدينة المنورة</p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                  The peaceful abode of the Prophet Muhammad ﷺ and the cradle of the first Islamic state. Experience the tranquility of the Rawdah ash-Sharifah, the sunnah of Masjid Quba, and the heroism of Uhud.
                </p>

                {/* Key Landmark Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#2D4A3E] uppercase tracking-wider block">
                    Essential Madinah Sites:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Masjid an-Nabawi & Rawdah', 'Masjid Quba', 'Mount Uhud & Martyrs', 'Masjid al-Qiblatayn', 'Jannat al-Baqi'].map((site, idx) => (
                      <span key={idx} className="bg-[#F8F5EB] border border-[#E5E1D3] text-[#2D4A3E] text-xs font-semibold px-3 py-1 rounded-full">
                        {site}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-6 pt-0 border-t border-[#E5E1D3]/60">
              <button
                onClick={() => navigateToCity('Madinah')}
                className="w-full py-3 rounded-2xl bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>View Madinah Ziyarat Guide ({madinahPlacesCount} Sites)</span>
                <ArrowRight className="w-4 h-4 text-[#8C734B]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FOUR CORE INTERACTIVE MODULES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F5EB] rounded-3xl p-8 sm:p-12 border border-[#E5E1D3] space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#8C734B] uppercase tracking-wider">
              Comprehensive Platform Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2A26]">
              Everything You Need for a Fulfilling Pilgrimage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1: Interactive Rituals */}
            <div 
              onClick={() => navigateToTab('guide')}
              className="bg-white rounded-2xl p-6 border border-[#E5E1D3] hover:border-[#8C734B] shadow-2xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F5EB] text-[#2D4A3E] group-hover:bg-[#2D4A3E] group-hover:text-white transition-colors flex items-center justify-center border border-[#E5E1D3]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#2D2A26] group-hover:text-[#2D4A3E]">
                  5-Pillar Umrah Rituals
                </h3>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  Interactive step-by-step rites with authentic Arabic Duas, phonetic transliterations, and digital Tawaf/Sa'i lap counters.
                </p>
              </div>
              <span className="text-xs font-bold text-[#8C734B] flex items-center space-x-1 pt-2 border-t border-[#E5E1D3]">
                <span>Launch Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Feature 2: Historical Ziyarat */}
            <div 
              onClick={() => { onSelectCity('All'); navigateToTab('ziyarat'); }}
              className="bg-white rounded-2xl p-6 border border-[#E5E1D3] hover:border-[#8C734B] shadow-2xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F5EB] text-[#2D4A3E] group-hover:bg-[#2D4A3E] group-hover:text-white transition-colors flex items-center justify-center border border-[#E5E1D3]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#2D2A26] group-hover:text-[#2D4A3E]">
                  Ziyarat Explorer & GPS
                </h3>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  13 Seerah landmarks across Makkah & Madinah with precise navigation coordinates, Seerah background, and visiting etiquettes.
                </p>
              </div>
              <span className="text-xs font-bold text-[#8C734B] flex items-center space-x-1 pt-2 border-t border-[#E5E1D3]">
                <span>Explore Sites</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Feature 3: Packages & Hotels */}
            <div 
              onClick={() => navigateToTab('packages')}
              className="bg-white rounded-2xl p-6 border border-[#E5E1D3] hover:border-[#8C734B] shadow-2xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F5EB] text-[#2D4A3E] group-hover:bg-[#2D4A3E] group-hover:text-white transition-colors flex items-center justify-center border border-[#E5E1D3]">
                  <Hotel className="w-6 h-6" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#2D2A26] group-hover:text-[#2D4A3E]">
                  5-Star Hotels & Packages
                </h3>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  Direct Haram-view hotels and all-inclusive curated packages with transparent pricing, instant booking inquiries, and VIP support.
                </p>
              </div>
              <span className="text-xs font-bold text-[#8C734B] flex items-center space-x-1 pt-2 border-t border-[#E5E1D3]">
                <span>Browse Packages</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Feature 4: Smart Trip Planner */}
            <div 
              onClick={() => navigateToTab('planner')}
              className="bg-white rounded-2xl p-6 border border-[#E5E1D3] hover:border-[#8C734B] shadow-2xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F5EB] text-[#2D4A3E] group-hover:bg-[#2D4A3E] group-hover:text-white transition-colors flex items-center justify-center border border-[#E5E1D3]">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#2D2A26] group-hover:text-[#2D4A3E]">
                  Interactive Planner
                </h3>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  Custom day-by-day itinerary creator, interactive packing checklist, Nusuk permit manager, and emergency contacts.
                </p>
              </div>
              <span className="text-xs font-bold text-[#8C734B] flex items-center space-x-1 pt-2 border-t border-[#E5E1D3]">
                <span>Build Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TRUST BADGES & PILGRIM TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] flex items-start space-x-4 shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#F8F5EB] text-[#8C734B] flex items-center justify-center shrink-0 border border-[#E5E1D3]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-serif font-bold text-[#2D2A26]">Authentic Sunnah Citations</h4>
              <p className="text-xs text-[#5C564E] leading-relaxed">
                All Duas and ritual rulings are sourced directly from Sahih al-Bukhari, Sahih Muslim, and confirmed Sunnah traditions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] flex items-start space-x-4 shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#F8F5EB] text-[#8C734B] flex items-center justify-center shrink-0 border border-[#E5E1D3]">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-serif font-bold text-[#2D2A26]">Ministry Standards Aligned</h4>
              <p className="text-xs text-[#5C564E] leading-relaxed">
                Fully aligned with Saudi Ministry of Hajj & Umrah crowd safety, Nusuk appointment protocols, and Miqat regulations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] flex items-start space-x-4 shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#F8F5EB] text-[#8C734B] flex items-center justify-center shrink-0 border border-[#E5E1D3]">
              <Heart className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-serif font-bold text-[#2D2A26]">Pilgrim-First Resource</h4>
              <p className="text-xs text-[#5C564E] leading-relaxed">
                100% free community digital companion built with devotion for the guests of Allah (Duyuf ar-Rahman).
              </p>
            </div>
          </div>

        </div>

        {/* Real Pilgrim Testimonials Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#8C734B] uppercase tracking-wider">
              Pilgrim Experiences
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2D2A26]">
              Trusted by Pilgrims Across the Globe
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-[#8C734B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8C734B]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5C564E] italic leading-relaxed">
                  "The interactive Tawaf and Sa'i counter alongside the phonetic Duas made our first Umrah with our elderly parents completely stress-free. May Allah reward the creators."
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E1D3] flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center font-bold text-xs">
                  TR
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2D2A26] block">Tariq & Fatima Rahman</span>
                  <span className="text-[11px] text-[#8C867A]">London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-[#8C734B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8C734B]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5C564E] italic leading-relaxed">
                  "The Ziyarat guide's Seerah history and precise GPS links for Jabal al-Nour and Masjid Quba gave our visits real spiritual meaning rather than just standard sightseeing."
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E1D3] flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#8C734B] text-white flex items-center justify-center font-bold text-xs">
                  IK
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2D2A26] block">Dr. Imran Khan</span>
                  <span className="text-[11px] text-[#8C867A]">Chicago, United States</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-[#8C734B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8C734B]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5C564E] italic leading-relaxed">
                  "The hotel distance comparisons and packing checklist saved us hours of research. We booked the Clock Royal Tower package and the coordination was seamless."
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E1D3] flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center font-bold text-xs">
                  ZA
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2D2A26] block">Zainab Al-Husseini</span>
                  <span className="text-[11px] text-[#8C867A]">Toronto, Canada</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 5. GRAND FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#2D4A3E] text-white p-8 sm:p-14 overflow-hidden border border-[#8C734B]/40 shadow-xl text-center space-y-6">
          {/* Subtle Islamic Motif Background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#8C734B 1px, transparent 1px), radial-gradient(#E5E1D3 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px'
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block bg-[#8C734B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Start Planning Today
            </span>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDFCF6]">
              Begin Your Journey of Faith with Spiritual Clarity
            </h2>

            <p className="text-xs sm:text-sm text-[#E5E1D3] leading-relaxed">
              Whether you are preparing for your very first Umrah or returning to the Holy Sanctuaries,  provides everything you need from intention (Niyyah) to Farewell Tawaf.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                id="cta-grand-rituals-btn"
                onClick={() => navigateToTab('guide')}
                className="px-6 py-3.5 rounded-full bg-[#8C734B] hover:bg-[#755F3C] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-2 border border-[#8C734B]/40 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#EFE7DA]" />
                <span>Launch Umrah Rituals Guide</span>
              </button>

              <button
                id="cta-grand-planner-btn"
                onClick={() => navigateToTab('planner')}
                className="px-6 py-3.5 rounded-full bg-[#1E332A] hover:bg-[#15241E] text-white font-semibold text-xs sm:text-sm transition-all flex items-center space-x-2 border border-[#8C734B]/30 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C4B59D]" />
                <span>Open Trip Planner & Checklist</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
