import React, { useState, useMemo } from 'react';
import { 
  Compass, MapPin, Search, Star, Sparkles, Clock, 
  Footprints, BookOpen, Info, ShieldCheck, ChevronRight, 
  ExternalLink, ArrowLeft, Building2, Sun, Moon, AlertCircle,
  Share2, Navigation, Check, Plus, Heart, Calendar
} from 'lucide-react';
import { ZiyaratPlace, City, ZiyaratCategory, ImportanceLevel } from '../types';
import { ZIYARAT_PLACES } from '../data/ziyaratData';

export interface CityGuidePageProps {
  initialCity?: 'All' | City;
  onSelectCity?: (city: 'All' | City) => void;
  onAddToPlanner?: (place: ZiyaratPlace) => void;
  savedPlaceIds?: string[];
}

export const CityGuidePage: React.FC<CityGuidePageProps> = ({
  initialCity = 'All',
  onSelectCity,
  onAddToPlanner,
  savedPlaceIds = []
}) => {
  const [selectedCityTab, setSelectedCityTab] = useState<'All' | City>(initialCity);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | ZiyaratCategory>('all');
  const [selectedImportance, setSelectedImportance] = useState<'all' | ImportanceLevel>('all');
  const [activeModalPlace, setActiveModalPlace] = useState<ZiyaratPlace | null>(null);
  const [activeTabSubView, setActiveTabSubView] = useState<'places' | 'overview' | 'etiquette'>('places');
  const [copyNotification, setCopyNotification] = useState<string | null>(null);

  // Sync tab change
  const handleCityChange = (city: 'All' | City) => {
    setSelectedCityTab(city);
    if (onSelectCity) {
      onSelectCity(city);
    }
  };

  // City Statistics & Metadata
  const cityMeta = useMemo(() => {
    const makkahCount = ZIYARAT_PLACES.filter(p => p.city === 'Makkah').length;
    const madinahCount = ZIYARAT_PLACES.filter(p => p.city === 'Madinah').length;
    return {
      all: { count: ZIYARAT_PLACES.length, title: 'Sacred Lands of the Two Holy Sanctuaries', arabic: 'الحرمين الشريفين' },
      Makkah: { 
        count: makkahCount, 
        title: 'Makkah Al-Mukarramah', 
        arabic: 'مكة المكرمة - أُمُّ الْقُرَى',
        subtitle: 'The Mother of Cities & Sanctuary of Divine Monotheism',
        badge: 'Haram Sanctuary (100,000x Reward)',
        description: 'The holiest city in Islam, birthplace of Prophet Muhammad ﷺ and home to the Holy Kaaba, Jabal al-Nour, and the historical hills of Safa & Marwah.',
        heroImg: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
        weatherAverage: '34°C - 38°C (Year-round Warm)',
        keyLandmarks: ['Al-Masjid al-Haram & Kaaba', 'Jabal al-Nour (Hira)', 'Jabal Thawr', 'Jannat al-Mu\'alla', 'Masjid Nimrah & Arafat']
      },
      Madinah: { 
        count: madinahCount, 
        title: 'Al-Madinah Al-Munawwarah', 
        arabic: 'المدينة المنورة - طَيْبَةُ الطَّيِّبَة',
        subtitle: 'The Illuminated City & Peaceful Abode of the Prophet ﷺ',
        badge: 'Prophetic City (1,000x Reward)',
        description: 'The radiant city of peace and Hijrah, home to Al-Masjid an-Nabawi, the Rawdah ash-Sharifah, the martyrs of Uhud, and the first mosque in Islam, Masjid Quba.',
        heroImg: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
        weatherAverage: '26°C - 32°C (Pleasant Evenings)',
        keyLandmarks: ['Masjid an-Nabawi & Rawdah', 'Jannat al-Baqi Cemetery', 'Masjid Quba', 'Mount Uhud & Martyrs', 'Masjid al-Qiblatayn']
      }
    };
  }, []);

  // Filter Categories
  const categoryOptions = useMemo(() => [
    { id: 'all', label: 'All Categories', count: ZIYARAT_PLACES.length },
    { id: 'holy_site', label: 'Holy Sanctuaries', count: ZIYARAT_PLACES.filter(p => p.category === 'holy_site').length },
    { id: 'masjid', label: 'Historic Mosques', count: ZIYARAT_PLACES.filter(p => p.category === 'masjid').length },
    { id: 'mountain', label: 'Mountains & Sacred Caves', count: ZIYARAT_PLACES.filter(p => p.category === 'mountain').length },
    { id: 'historical_battle', label: 'Battlefields & History', count: ZIYARAT_PLACES.filter(p => p.category === 'historical_battle').length },
    { id: 'cemetery', label: 'Historic Cemeteries', count: ZIYARAT_PLACES.filter(p => p.category === 'cemetery').length },
    { id: 'museum', label: 'Cultural Exhibitions', count: ZIYARAT_PLACES.filter(p => p.category === 'museum').length },
  ], []);

  // Filtered Places Query Engine
  const filteredPlaces = useMemo(() => {
    return ZIYARAT_PLACES.filter(place => {
      // 1. City Tab Filter
      if (selectedCityTab !== 'All' && place.city !== selectedCityTab) return false;

      // 2. Category Filter
      if (selectedCategory !== 'all' && place.category !== selectedCategory) return false;

      // 3. Importance Filter
      if (selectedImportance !== 'all' && place.importance !== selectedImportance) return false;

      // 4. Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = place.name.toLowerCase().includes(q);
        const matchesArabic = place.arabicName.includes(q);
        const matchesDesc = place.shortDescription.toLowerCase().includes(q) || place.fullDescription.toLowerCase().includes(q);
        const matchesHistory = place.historicalSignificance.toLowerCase().includes(q);
        const matchesTips = place.visitorTips.some(t => t.toLowerCase().includes(q));
        return matchesName || matchesArabic || matchesDesc || matchesHistory || matchesTips;
      }

      return true;
    });
  }, [selectedCityTab, selectedCategory, selectedImportance, searchQuery]);

  const copyPlaceLink = (place: ZiyaratPlace) => {
    const text = `${place.name} (${place.arabicName}) - ${place.location.address}`;
    navigator.clipboard.writeText(text);
    setCopyNotification(`Copied info for ${place.name}`);
    setTimeout(() => setCopyNotification(null), 3000);
  };

  return (
    <div id="city-guide-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Route Breadcrumbs / Dynamic Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E1D3] pb-6">
        <div>
          <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#8C734B]" />
            <span>Islamic Heritage & Ziyarat Explorer</span>
            <span>•</span>
            <span className="text-[#8C734B] font-mono text-[11px]">app/guide/[city]/page.tsx</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#2D2A26] mt-1.5 flex items-center flex-wrap gap-2">
            <span>Historical Ziyarat & City Guide</span>
            {selectedCityTab !== 'All' && (
              <span className="text-lg sm:text-2xl font-serif font-normal text-[#8C734B]">
                — {selectedCityTab === 'Makkah' ? 'Makkah Al-Mukarramah' : 'Al-Madinah Al-Munawwarah'}
              </span>
            )}
          </h1>
          
          <p className="text-xs sm:text-sm text-[#5C564E] max-w-3xl mt-1 leading-relaxed">
            Immerse yourself in authentic Seerah history with GPS coordinates, authentic Hadith citations, sunnah visiting etiquettes, and insider pilgrim tips for the Holy Sanctuaries.
          </p>
        </div>

        {/* City Filter Tabs Segmented Control */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[#F8F5EB] border border-[#E5E1D3] self-start md:self-auto shadow-2xs">
          {(['All', 'Makkah', 'Madinah'] as const).map((city) => {
            const isSelected = selectedCityTab === city;
            return (
              <button
                key={city}
                id={`tab-guide-city-${city.toLowerCase()}`}
                onClick={() => handleCityChange(city)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-[#2D4A3E] text-white shadow-xs font-bold'
                    : 'text-[#5C564E] hover:text-[#2D2A26] hover:bg-[#EFE7DA]'
                }`}
              >
                <span>{city === 'All' ? '🌐 All Cities' : city === 'Makkah' ? '🕋 Makkah' : '🕌 Madinah'}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-[#8C734B] text-white' : 'bg-[#E5E1D3] text-[#5C564E]'
                }`}>
                  {city === 'All' ? ZIYARAT_PLACES.length : city === 'Makkah' ? cityMeta.Makkah.count : cityMeta.Madinah.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic City Overview Hero Card (when Makkah or Madinah is selected) */}
      {selectedCityTab !== 'All' && (
        <div className="relative rounded-3xl overflow-hidden border border-[#E5E1D3] shadow-md bg-[#2D4A3E] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-[#8C734B] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                    {cityMeta[selectedCityTab].badge}
                  </span>
                  <span className="text-xs text-[#EFE7DA] font-arabic font-bold">
                    {cityMeta[selectedCityTab].arabic}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FDFCF6]">
                  {cityMeta[selectedCityTab].title}
                </h2>
                
                <p className="text-xs sm:text-sm text-[#E5E1D3] leading-relaxed">
                  {cityMeta[selectedCityTab].description}
                </p>
              </div>

              {/* City Quick Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#1E332A] text-xs">
                <div className="bg-[#1E332A] p-3 rounded-2xl border border-[#8C734B]/30 space-y-1">
                  <span className="text-[#8C734B] font-bold block flex items-center space-x-1">
                    <Sun className="w-3.5 h-3.5" />
                    <span>Average Climate & Wear</span>
                  </span>
                  <span className="text-[#EFE7DA]">{cityMeta[selectedCityTab].weatherAverage}</span>
                </div>

                <div className="bg-[#1E332A] p-3 rounded-2xl border border-[#8C734B]/30 space-y-1">
                  <span className="text-[#8C734B] font-bold block flex items-center space-x-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Total Historical Landmarks</span>
                  </span>
                  <span className="text-[#EFE7DA]">{cityMeta[selectedCityTab].count} Verified Sites Documented</span>
                </div>
              </div>
            </div>

            {/* Right Image Banner */}
            <div className="lg:col-span-5 relative h-56 lg:h-auto min-h-[220px]">
              <img
                src={cityMeta[selectedCityTab].heroImg}
                alt={cityMeta[selectedCityTab].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#2D4A3E] via-transparent to-transparent" />
            </div>

          </div>
        </div>
      )}

      {/* Search, Filter & View Controls */}
      <div className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-4">
        
        {/* Top Controls Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Input Bar */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C867A]" />
            <input
              id="guide-city-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search historical sites, Arabic names (e.g. حراء, أحد, قباء), or keywords..."
              className="w-full pl-10 pr-10 py-2.5 rounded-2xl border border-[#E5E1D3] bg-white text-[#2D2A26] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C867A] hover:text-[#2D2A26]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-3">
            <select
              id="guide-category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full py-2.5 px-3.5 rounded-2xl border border-[#E5E1D3] bg-white text-[#2D2A26] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] shadow-2xs"
            >
              {categoryOptions.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label} ({cat.count})
                </option>
              ))}
            </select>
          </div>

          {/* Importance Filter */}
          <div className="md:col-span-3">
            <select
              id="guide-importance-select"
              value={selectedImportance}
              onChange={(e) => setSelectedImportance(e.target.value as any)}
              className="w-full py-2.5 px-3.5 rounded-2xl border border-[#E5E1D3] bg-white text-[#2D2A26] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] shadow-2xs"
            >
              <option value="all">All Significance Levels</option>
              <option value="essential">⭐ Essential Pilgrimage Sites</option>
              <option value="highly_recommended">✨ Highly Recommended</option>
              <option value="recommended">📍 Recommended Landmarks</option>
            </select>
          </div>

        </div>

        {/* Filter Summary & Reset Action */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E5E1D3]/80 text-xs text-[#5C564E]">
          <div className="flex items-center space-x-2">
            <span>Showing <strong className="text-[#2D4A3E]">{filteredPlaces.length}</strong> of {ZIYARAT_PLACES.length} historical landmarks</span>
            {selectedCityTab !== 'All' && (
              <span className="bg-white px-2.5 py-0.5 rounded-full border border-[#E5E1D3] font-semibold text-[#2D4A3E]">
                City: {selectedCityTab}
              </span>
            )}
          </div>

          {(searchQuery || selectedCategory !== 'all' || selectedImportance !== 'all' || selectedCityTab !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedImportance('all');
                setSelectedCityTab('All');
              }}
              className="text-[#8C734B] hover:text-[#78613C] font-bold underline cursor-pointer text-xs"
            >
              Reset all filters
            </button>
          )}
        </div>

      </div>

      {/* Places Cards Grid */}
      {filteredPlaces.length === 0 ? (
        <div className="text-center py-16 px-4 bg-[#F8F5EB] rounded-3xl border border-dashed border-[#E5E1D3] space-y-3">
          <Info className="w-10 h-10 text-[#8C867A] mx-auto" />
          <h3 className="text-base font-serif font-bold text-[#2D2A26]">No Ziyarat Landmarks Found</h3>
          <p className="text-xs text-[#5C564E] max-w-md mx-auto">
            We couldn't find any places matching your current search query "{searchQuery}" in {selectedCityTab}.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedImportance('all');
              setSelectedCityTab('All');
            }}
            className="px-5 py-2.5 bg-[#2D4A3E] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1E332A] cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => {
            const isSaved = savedPlaceIds.includes(place.id);
            return (
              <div
                key={place.id}
                id={`guide-place-card-${place.id}`}
                className="group flex flex-col bg-white rounded-3xl border border-[#E5E1D3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 hover:border-[#8C734B]/60"
              >
                {/* Image Header with City Pill & Distance */}
                <div className="relative h-52 w-full overflow-hidden bg-[#F8F5EB]">
                  <img
                    src={place.images[0]}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-xs ${
                      place.city === 'Makkah' 
                        ? 'bg-[#8C734B] text-white' 
                        : 'bg-[#2D4A3E] text-white'
                    }`}>
                      {place.city === 'Makkah' ? '🕋 Makkah' : '🕌 Madinah'}
                    </span>

                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold shadow-xs ${
                      place.importance === 'essential' 
                        ? 'bg-[#8C734B] text-white'
                        : place.importance === 'highly_recommended'
                          ? 'bg-[#2D4A3E] text-white'
                          : 'bg-[#F8F5EB] text-[#2D4A3E]'
                    }`}>
                      {place.importance === 'essential' ? '⭐ Essential' : place.importance === 'highly_recommended' ? '✨ Priority' : '📍 Recommended'}
                    </span>
                  </div>

                  {/* Bottom Info inside Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="text-xs font-semibold text-[#EFE7DA] font-arabic drop-shadow-xs">
                        {place.arabicName}
                      </p>
                    </div>
                    <div className="text-[11px] bg-stone-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[#E5E1D3] flex items-center space-x-1 border border-stone-700/50">
                      <MapPin className="w-3 h-3 text-[#8C734B]" />
                      <span>{place.location.distanceToHaramKm === 0 ? 'Inside Sanctuary' : `${place.location.distanceToHaramKm} km`}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#2D2A26] font-serif group-hover:text-[#2D4A3E] transition-colors leading-snug">
                      {place.name}
                    </h3>
                    <p className="text-xs text-[#5C564E] line-clamp-3 leading-relaxed">
                      {place.shortDescription}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="pt-2 border-t border-[#E5E1D3] grid grid-cols-2 gap-2 text-xs text-[#8C867A]">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-[#8C734B] shrink-0" />
                      <span className="truncate">~{place.estimatedDurationMinutes} mins</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Footprints className="w-3.5 h-3.5 text-[#8C734B] shrink-0" />
                      <span className="capitalize truncate">{place.accessibility.physicalDifficulty} trail</span>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center space-x-2 pt-1">
                    <button
                      id={`btn-guide-view-${place.id}`}
                      onClick={() => setActiveModalPlace(place)}
                      className="flex-1 py-2.5 px-3.5 rounded-2xl bg-[#F8F5EB] hover:bg-[#EFE7DA] text-[#2D4A3E] text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 border border-[#E5E1D3] cursor-pointer shadow-2xs"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#8C734B]" />
                      <span>Historical Context & Tips</span>
                    </button>

                    {onAddToPlanner && (
                      <button
                        id={`btn-guide-planner-${place.id}`}
                        onClick={() => onAddToPlanner(place)}
                        title={isSaved ? 'In your Itinerary Planner' : 'Add to My Planner'}
                        className={`p-2.5 rounded-2xl text-xs font-medium transition-all cursor-pointer ${
                          isSaved
                            ? 'bg-[#EFE7DA] text-[#2D4A3E] border border-[#C4B59D]'
                            : 'bg-[#2D4A3E] text-white hover:bg-[#1E332A]'
                        }`}
                      >
                        {isSaved ? <Check className="w-4 h-4 text-[#2D4A3E] stroke-[3]" /> : <Plus className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* DETAILED PLACE MODAL */}
      {activeModalPlace && (
        <div 
          id="guide-place-modal-overlay"
          className="fixed inset-0 z-50 overflow-y-auto bg-[#15231D]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
        >
          <div className="relative bg-[#FDFCF6] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E5E1D3]">
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full bg-[#1E332A]">
              <img
                src={activeModalPlace.images[0]}
                alt={activeModalPlace.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E332A] via-[#1E332A]/50 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalPlace(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors shadow-md cursor-pointer border border-white/20"
              >
                ✕
              </button>

              {/* Title & Badge */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <div className="flex items-center space-x-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    activeModalPlace.city === 'Makkah' ? 'bg-[#8C734B] text-white' : 'bg-[#2D4A3E] text-white'
                  }`}>
                    {activeModalPlace.city}
                  </span>
                  <span className="text-xs text-[#EFE7DA] font-mono">
                    {activeModalPlace.category.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FDFCF6]">
                  {activeModalPlace.name}
                </h3>
                <p className="text-base font-arabic text-[#EFE7DA]">
                  {activeModalPlace.arabicName}
                </p>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Seerah & Historical Significance Box */}
              <div className="bg-[#F8F5EB] border border-[#E5E1D3] rounded-3xl p-5 space-y-2">
                <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-[#8C734B]" />
                  <span>Historical & Seerah Background</span>
                </div>
                <p className="text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  {activeModalPlace.historicalSignificance}
                </p>
              </div>

              {/* Quranic & Hadith Citations */}
              {activeModalPlace.references && activeModalPlace.references.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C867A]">
                    Quranic & Authentic Hadith References
                  </h4>
                  <div className="space-y-2">
                    {activeModalPlace.references.map((ref, idx) => (
                      <div key={idx} className="bg-[#F8F5EB] border-l-4 border-[#8C734B] p-3.5 rounded-r-2xl text-xs space-y-1">
                        <span className="font-bold text-[#2D4A3E] block">{ref.source}</span>
                        {ref.text && <p className="text-[#5C564E] italic">"{ref.text}"</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C867A]">
                  Detailed Narrative
                </h4>
                <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                  {activeModalPlace.fullDescription}
                </p>
              </div>

              {/* Practical Tips & Sacred Etiquettes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Practical Tips */}
                <div className="bg-white rounded-3xl p-5 border border-[#E5E1D3] space-y-2.5">
                  <div className="flex items-center space-x-1.5 text-[#2D4A3E] font-bold text-xs">
                    <Info className="w-4 h-4 text-[#8C734B]" />
                    <span>Pilgrim Visitor Tips</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#5C564E]">
                    {activeModalPlace.visitorTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#8C734B] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Islamic Sunnah Etiquette */}
                <div className="bg-white rounded-3xl p-5 border border-[#E5E1D3] space-y-2.5">
                  <div className="flex items-center space-x-1.5 text-[#2D4A3E] font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#8C734B]" />
                    <span>Sacred Sunnah Etiquette</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#5C564E]">
                    {activeModalPlace.etiquette.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#8C734B] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Transit & Coordinates Callout */}
              <div className="bg-[#2D4A3E] text-[#E5E1D3] rounded-3xl p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#8C734B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EFE7DA]">
                      Location & Accessibility
                    </span>
                  </div>
                  <span className="text-xs text-[#E5E1D3]">
                    Best Time: <strong className="text-[#EFE7DA]">{activeModalPlace.bestTimeToVisit}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-[#1E332A]">
                  <div>
                    <span className="text-[#C4B59D] block">Address:</span>
                    <span className="text-[#FDFCF6] font-medium">{activeModalPlace.location.address}</span>
                  </div>
                  <div>
                    <span className="text-[#C4B59D] block">Transit Advice:</span>
                    <span className="text-[#FDFCF6] font-medium">{activeModalPlace.location.transportTip}</span>
                  </div>
                </div>

                {activeModalPlace.permitsRequired && (
                  <div className="bg-[#1E332A] border border-[#8C734B]/40 rounded-2xl p-3 text-xs text-[#EFE7DA] flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#8C734B]" />
                    <span><strong>Permit Required:</strong> {activeModalPlace.permitsRequired}</span>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${activeModalPlace.location.coordinates.lat},${activeModalPlace.location.coordinates.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-[#E5E1D3] hover:bg-[#F8F5EB] text-[#5C564E] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#8C734B]" />
                    <span>Google Maps</span>
                  </a>

                  <button
                    onClick={() => copyPlaceLink(activeModalPlace)}
                    className="px-4 py-2.5 rounded-full border border-[#E5E1D3] hover:bg-[#F8F5EB] text-[#5C564E] text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#8C734B]" />
                    <span>Share</span>
                  </button>
                </div>

                {onAddToPlanner && (
                  <button
                    onClick={() => onAddToPlanner(activeModalPlace)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                  >
                    {savedPlaceIds.includes(activeModalPlace.id) ? (
                      <>
                        <Check className="w-4 h-4 text-[#8C734B] stroke-[3]" />
                        <span>Saved in My Itinerary</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Itinerary Planner</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Copy Floating Toast Notification */}
      {copyNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2D4A3E] text-white px-5 py-3 rounded-2xl shadow-xl border border-[#8C734B]/40 flex items-center space-x-2 animate-in slide-in-from-bottom-5">
          <Check className="w-4 h-4 text-[#8C734B] stroke-[3]" />
          <span className="text-xs font-semibold">{copyNotification}</span>
        </div>
      )}

    </div>
  );
};
