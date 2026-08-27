import React from 'react';
import { 
  Compass, BookOpen, Hotel, Calendar, Code2, 
  Heart, Sparkles, MapPin, ShieldCheck, CheckCircle2, 
  Home, Phone, Mail, ExternalLink, ArrowRight
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { City } from '../types';

export interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onFilterCity: (city: 'All' | City) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onFilterCity }) => {
  const handleCityClick = (city: 'All' | City) => {
    onFilterCity(city);
    setActiveTab('ziyarat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E332A] text-[#E5E1D3] border-t border-[#2D4A3E]">
      
      {/* Top blessing & Spiritual Hadith Callout */}
      <div className="bg-[#15231D] border-b border-[#2D4A3E] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8C734B]/20 text-[#EFE7DA] flex items-center justify-center border border-[#8C734B]/40 shrink-0">
              <Sparkles className="w-6 h-6 text-[#8C734B]" />
            </div>
            <div>
              <p className="text-base font-serif font-bold text-[#FDFCF6]">
                "An Umrah to another is an expiation for whatever occurred between them, and the accepted Hajj has no reward other than Paradise."
              </p>
              <p className="text-xs text-[#EFE7DA] font-arabic mt-1">
                الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا وَالْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلاَّ الْجَنَّةُ — (صحيح البخاري ومسلم)
              </p>
            </div>
          </div>
          
          <button
            onClick={() => handleTabClick('guide')}
            className="shrink-0 px-6 py-3 rounded-full bg-[#8C734B] hover:bg-[#755F3C] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center space-x-2 border border-[#8C734B]/40"
          >
            <BookOpen className="w-4 h-4 text-[#EFE7DA]" />
            <span>Master Umrah Rites & Duas</span>
          </button>
        </div>
      </div>

      {/* Main 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Ministry Alignment (Spans 2 cols on LG) */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2D4A3E] text-[#EFE7DA] flex items-center justify-center font-bold border border-[#8C734B]/40 shadow-xs">
                <Compass className="w-6 h-6 text-[#8C734B]" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-[#FDFCF6]">
                  Haramain<span className="text-[#8C734B]">&nbsp;</span>Guide
                </span>
                <span className="block text-[11px] text-[#C4B59D]">
                  Authentic Pilgrimage Companion • Umrah 1447H
                </span>
              </div>
            </div>

            <p className="text-xs text-[#C4B59D] leading-relaxed max-w-sm">
              The premier interactive companion for pilgrims to the Holy Sanctuaries of Makkah Al-Mukarramah and Al-Madinah Al-Munawwarah. Designed with authentic Sunnah precision, Seerah historical context, and practical travel guidance.
            </p>

            <div className="bg-[#15231D] rounded-2xl p-3.5 border border-[#8C734B]/30 flex items-center space-x-3 max-w-sm">
              <ShieldCheck className="w-5 h-5 text-[#8C734B] shrink-0" />
              <p className="text-[11px] text-[#EFE7DA]">
                Curated strictly in accordance with authenticated Hadith sources (Sahih al-Bukhari & Muslim) and Saudi Ministry of Hajj & Umrah guidelines.
              </p>
            </div>
          </div>

          {/* Col 2: Makkah Ziyarat Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EFE7DA] flex items-center space-x-1.5 border-b border-[#2D4A3E] pb-2">
              <span>🕋 Makkah Al-Mukarramah</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B59D]">
              <li>
                <button onClick={() => handleCityClick('Makkah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Al-Masjid al-Haram & Kaaba
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Makkah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Jabal al-Nour (Cave of Hira)
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Makkah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Jabal Thawr (Migration Cave)
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Makkah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Mount Arafat & Jabal ar-Rahmah
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Makkah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Jannat al-Mu'alla Cemetery
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Makkah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Masjid Aisha (Tan'eem Miqat)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Madinah Ziyarat Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EFE7DA] flex items-center space-x-1.5 border-b border-[#2D4A3E] pb-2">
              <span>🕌 Al-Madinah Al-Munawwarah</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B59D]">
              <li>
                <button onClick={() => handleCityClick('Madinah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Al-Masjid an-Nabawi & Rawdah
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Madinah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Masjid Quba (Full Umrah Reward)
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Madinah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Mount Uhud & Martyrs Cemetery
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Madinah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Masjid al-Qiblatayn
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Madinah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Jannat al-Baqi Cemetery
                </button>
              </li>
              <li>
                <button onClick={() => handleCityClick('Madinah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  The Seven Mosques (Khandaq)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Navigation & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EFE7DA] border-b border-[#2D4A3E] pb-2">
              Pilgrim Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B59D]">
              <li>
                <button onClick={() => handleTabClick('home')} className="hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer">
                  <Home className="w-3.5 h-3.5 text-[#8C734B]" />
                  <span>Home Landing Page</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('guide')} className="hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer">
                  <BookOpen className="w-3.5 h-3.5 text-[#8C734B]" />
                  <span>5-Pillar Umrah Rituals</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('packages')} className="hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer">
                  <Hotel className="w-3.5 h-3.5 text-[#8C734B]" />
                  <span>VIP Packages & Hotels</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('planner')} className="hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer">
                  <Calendar className="w-3.5 h-3.5 text-[#8C734B]" />
                  <span>Interactive Planner & Packing</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('architecture')} className="hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer">
                  <Code2 className="w-3.5 h-3.5 text-[#8C734B]" />
                  <span>Next.js Architecture Specs</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-14 pt-8 border-t border-[#2D4A3E] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C867A] gap-4">
          <div>
            © {new Date().getFullYear()} Haramain. All rights reserved. Natural Tones design for spiritual serenity.
          </div>
          <div className="flex items-center space-x-2 text-[#C4B59D]">
            <span>Dedicated to the Guests of Allah (ضيوف الرحمن)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
