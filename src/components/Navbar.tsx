import React, { useState } from 'react';
import { 
  Compass, BookOpen, Hotel, Calendar, 
  Menu, X, Sparkles, ChevronDown, MapPin, 
  CheckCircle2, ArrowRight, Home, Landmark
} from 'lucide-react';
import { City } from '../types';

export type ActiveTab = 'home' | 'ziyarat' | 'guide' | 'packages' | 'planner' | 'architecture';

export interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCityFilter?: 'All' | City;
  onCityQuickSelect?: (city: 'All' | City) => void;
  onPlanJourneyClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab,
  selectedCityFilter = 'All',
  onCityQuickSelect,
  onPlanJourneyClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState<boolean>(false);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setGuidesDropdownOpen(false);
  };

  const handleCitySelect = (city: 'All' | City) => {
    if (onCityQuickSelect) {
      onCityQuickSelect(city);
    }
    setActiveTab('ziyarat');
    setGuidesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handlePlanJourney = () => {
    if (onPlanJourneyClick) {
      onPlanJourneyClick();
    } else {
      setActiveTab('planner');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFCF6]/95 backdrop-blur-md border-b border-[#E5E1D3] shadow-xs">
      
      {/* Top micro bar with Islamic blessing & live status */}
      <div className="bg-[#2D4A3E] text-[#E5E1D3] text-xs py-1.5 px-4 sm:px-6 border-b border-[#1E332A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center text-[#EFE7DA] font-medium font-serif">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#8C734B]" />
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </span>
            <span className="hidden md:inline text-[#8C867A]">|</span>
            <span className="hidden md:inline text-[#E5E1D3] text-xs">
              The Definitive Pilgrim's Companion for Makkah Al-Mukarramah & Al-Madinah Al-Munawwarah
            </span>
          </div>
          
          <div className="flex items-center space-x-4 text-[11px] text-[#C4B59D]">
            <span className="flex items-center text-[#EFE7DA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C734B] mr-1.5 animate-pulse" />
              1447H / 2026 Verified Guide
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <button 
            id="nav-brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer focus:outline-hidden min-w-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#8C734B] text-white flex items-center justify-center font-serif text-lg sm:text-xl shadow-xs group-hover:scale-105 transition-transform duration-200 border border-[#755F3C]/40 shrink-0">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#2D4A3E] font-serif truncate">
                  Haramain<span className="text-[#8C734B] font-light">&nbsp;</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F8F5EB] text-[#8C734B] border border-[#E5E1D3] hidden xl:inline-block">
                  Umrah Guide
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#8C867A] font-medium font-arabic truncate hidden xs:block">
                دليل مناسك العمرة وزيارة مكة والمدينة
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            {/* 1. Home Link */}
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'home'
                  ? 'text-[#2D4A3E] bg-[#F8F5EB] border border-[#E5E1D3] font-bold shadow-2xs'
                  : 'text-[#5C564E] hover:text-[#2D4A3E] hover:bg-[#F8F5EB]/60'
              }`}
            >
              <Home className={`w-4 h-4 ${activeTab === 'home' ? 'text-[#8C734B]' : 'text-[#8C867A]'}`} />
              <span>Home</span>
            </button>

            {/* 2. Guides Dropdown (Makkah & Madinah) */}
            <div className="relative">
              <button
                id="nav-link-guides-dropdown"
                onClick={() => setGuidesDropdownOpen(!guidesDropdownOpen)}
                onBlur={() => setTimeout(() => setGuidesDropdownOpen(false), 200)}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center space-x-1.5 cursor-pointer ${
                  activeTab === 'ziyarat'
                    ? 'text-[#2D4A3E] bg-[#F8F5EB] border border-[#E5E1D3] font-bold shadow-2xs'
                    : 'text-[#5C564E] hover:text-[#2D4A3E] hover:bg-[#F8F5EB]/60'
                }`}
              >
                <Compass className={`w-4 h-4 ${activeTab === 'ziyarat' ? 'text-[#8C734B]' : 'text-[#8C867A]'}`} />
                <span>City Guides</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${guidesDropdownOpen ? 'rotate-180 text-[#8C734B]' : 'text-[#8C867A]'}`} />
              </button>

              {/* Guides Dropdown Menu */}
              {guidesDropdownOpen && (
                <div 
                  id="nav-guides-popover"
                  className="absolute left-0 mt-2 w-64 bg-[#FDFCF6] rounded-2xl shadow-xl border border-[#E5E1D3] p-2 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <button
                    onClick={() => handleCitySelect('All')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#F8F5EB] text-xs font-semibold text-[#2D2A26] flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <Landmark className="w-4 h-4 text-[#8C734B]" />
                      <span>All Historical Landmarks</span>
                    </div>
                    <span className="text-[10px] text-[#8C867A] bg-[#E5E1D3] px-2 py-0.5 rounded-full">13 Sites</span>
                  </button>

                  <button
                    onClick={() => handleCitySelect('Makkah')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#F8F5EB] text-xs font-semibold text-[#2D2A26] flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span>🕋</span>
                      <span>Makkah Al-Mukarramah</span>
                    </div>
                    <span className="text-[10px] text-[#8C867A] bg-[#8C734B]/10 px-2 py-0.5 rounded-full font-bold">7 Sites</span>
                  </button>

                  <button
                    onClick={() => handleCitySelect('Madinah')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#F8F5EB] text-xs font-semibold text-[#2D2A26] flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span>🕌</span>
                      <span>Al-Madinah Al-Munawwarah</span>
                    </div>
                    <span className="text-[10px] text-[#2D4A3E] bg-[#2D4A3E]/10 px-2 py-0.5 rounded-full font-bold">6 Sites</span>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Rituals Link */}
            <button
              id="nav-link-rituals"
              onClick={() => handleNavClick('guide')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'guide'
                  ? 'text-[#2D4A3E] bg-[#F8F5EB] border border-[#E5E1D3] font-bold shadow-2xs'
                  : 'text-[#5C564E] hover:text-[#2D4A3E] hover:bg-[#F8F5EB]/60'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${activeTab === 'guide' ? 'text-[#8C734B]' : 'text-[#8C867A]'}`} />
              <span>Umrah Rituals</span>
            </button>

            {/* 4. Packages Link */}
            <button
              id="nav-link-packages"
              onClick={() => handleNavClick('packages')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'packages'
                  ? 'text-[#2D4A3E] bg-[#F8F5EB] border border-[#E5E1D3] font-bold shadow-2xs'
                  : 'text-[#5C564E] hover:text-[#2D4A3E] hover:bg-[#F8F5EB]/60'
              }`}
            >
              <Hotel className={`w-4 h-4 ${activeTab === 'packages' ? 'text-[#8C734B]' : 'text-[#8C867A]'}`} />
              <span>Packages & Hotels</span>
            </button>

            {/* 5. Trip Planner */}
            <button
              id="nav-link-planner"
              onClick={() => handleNavClick('planner')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'planner'
                  ? 'text-[#2D4A3E] bg-[#F8F5EB] border border-[#E5E1D3] font-bold shadow-2xs'
                  : 'text-[#5C564E] hover:text-[#2D4A3E] hover:bg-[#F8F5EB]/60'
              }`}
            >
              <Calendar className={`w-4 h-4 ${activeTab === 'planner' ? 'text-[#8C734B]' : 'text-[#8C867A]'}`} />
              <span>Itinerary</span>
            </button>
          </nav>

          {/* Action CTAs: "Plan Journey" Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* CTA Button: Plan Journey */}
            <button
              id="nav-cta-plan-journey"
              onClick={handlePlanJourney}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#2D4A3E]/10 transition-all cursor-pointer border border-[#8C734B]/30 shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C4B59D]" />
              <span className="whitespace-nowrap">Plan Journey</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C4B59D] hidden sm:inline-block" />
            </button>

            {/* Mobile Hamburger Toggle Button (lg:hidden) */}
            <button
              id="nav-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#2D4A3E] text-[#FDFCF6] hover:bg-[#1E332A] transition-all cursor-pointer shrink-0 border-2 border-[#8C734B] shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8C734B]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#EFE7DA]" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6 text-[#EFE7DA]" strokeWidth={2.5} />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer / Slide-Down Navigation Panel */}
      {mobileMenuOpen && (
        <div 
          id="nav-mobile-menu-panel"
          className="lg:hidden bg-[#FDFCF6] border-t border-[#E5E1D3] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200"
        >
          {/* Main Mobile Navigation Links */}
          <div className="grid grid-cols-1 gap-1">
            
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between ${
                activeTab === 'home'
                  ? 'bg-[#2D4A3E] text-white font-bold'
                  : 'text-[#2D2A26] hover:bg-[#F8F5EB]'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Home className="w-4 h-4 text-[#8C734B]" />
                <span>Home Page</span>
              </div>
              {activeTab === 'home' && <CheckCircle2 className="w-4 h-4 text-[#8C734B]" />}
            </button>

            <button
              id="mobile-nav-rituals"
              onClick={() => handleNavClick('guide')}
              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between ${
                activeTab === 'guide'
                  ? 'bg-[#2D4A3E] text-white font-bold'
                  : 'text-[#2D2A26] hover:bg-[#F8F5EB]'
              }`}
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-4 h-4 text-[#8C734B]" />
                <span>Umrah Rituals & Duas</span>
              </div>
              {activeTab === 'guide' && <CheckCircle2 className="w-4 h-4 text-[#8C734B]" />}
            </button>

            <button
              id="mobile-nav-packages"
              onClick={() => handleNavClick('packages')}
              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between ${
                activeTab === 'packages'
                  ? 'bg-[#2D4A3E] text-white font-bold'
                  : 'text-[#2D2A26] hover:bg-[#F8F5EB]'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Hotel className="w-4 h-4 text-[#8C734B]" />
                <span>5-Star Hotels & Packages</span>
              </div>
              {activeTab === 'packages' && <CheckCircle2 className="w-4 h-4 text-[#8C734B]" />}
            </button>

            <button
              id="mobile-nav-planner"
              onClick={() => handleNavClick('planner')}
              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between ${
                activeTab === 'planner'
                  ? 'bg-[#2D4A3E] text-white font-bold'
                  : 'text-[#2D2A26] hover:bg-[#F8F5EB]'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-[#8C734B]" />
                <span>Trip Planner & Checklist</span>
              </div>
              {activeTab === 'planner' && <CheckCircle2 className="w-4 h-4 text-[#8C734B]" />}
            </button>
          </div>

          {/* City Guides Sub-Box */}
          <div className="bg-[#F8F5EB] rounded-2xl p-3 border border-[#E5E1D3] space-y-2">
            <div className="text-xs font-bold text-[#2D4A3E] flex items-center space-x-1 px-1">
              <Compass className="w-3.5 h-3.5 text-[#8C734B]" />
              <span>Historical City Guides (Ziyarat)</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                id="mobile-city-makkah"
                onClick={() => handleCitySelect('Makkah')}
                className="p-2.5 bg-white rounded-xl border border-[#E5E1D3] text-left hover:border-[#8C734B] transition-colors cursor-pointer"
              >
                <span className="text-xs font-bold block text-[#2D2A26]">🕋 Makkah</span>
                <span className="text-[10px] text-[#8C867A]">7 Holy Landmarks</span>
              </button>

              <button
                id="mobile-city-madinah"
                onClick={() => handleCitySelect('Madinah')}
                className="p-2.5 bg-white rounded-xl border border-[#E5E1D3] text-left hover:border-[#8C734B] transition-colors cursor-pointer"
              >
                <span className="text-xs font-bold block text-[#2D2A26]">🕌 Madinah</span>
                <span className="text-[10px] text-[#8C867A]">6 Sacred Sites</span>
              </button>
            </div>
          </div>

          {/* Bottom Primary Plan Journey CTA */}
          <button
            id="mobile-nav-cta-plan"
            onClick={handlePlanJourney}
            className="w-full py-3 rounded-2xl bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#8C734B]" />
            <span>Plan My Umrah Journey</span>
          </button>
        </div>
      )}

    </header>
  );
};
