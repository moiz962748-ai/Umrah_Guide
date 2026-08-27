import React, { useState, useMemo } from 'react';
import { ZiyaratPlace, City, ZiyaratCategory, ImportanceLevel } from '../types';
import { ZIYARAT_PLACES } from '../data/ziyaratData';
import { 
  Search, MapPin, Compass, Clock, Star, 
  Sparkles, ExternalLink, Plus, Check, ShieldCheck, 
  HelpCircle, ChevronRight, X, AlertCircle, Info, Footprints, BookOpen
} from 'lucide-react';

interface ZiyaratExplorerProps {
  cityFilter: 'All' | City;
  setCityFilter: (city: 'All' | City) => void;
  onAddToPlanner?: (place: ZiyaratPlace) => void;
  savedPlaceIds?: string[];
}

export const ZiyaratExplorer: React.FC<ZiyaratExplorerProps> = ({
  cityFilter,
  setCityFilter,
  onAddToPlanner,
  savedPlaceIds = []
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | ZiyaratCategory>('all');
  const [selectedImportance, setSelectedImportance] = useState<'all' | ImportanceLevel>('all');
  const [activeModalPlace, setActiveModalPlace] = useState<ZiyaratPlace | null>(null);

  const categories: { id: 'all' | ZiyaratCategory; label: string; count: number }[] = useMemo(() => {
    return [
      { id: 'all', label: 'All Categories', count: ZIYARAT_PLACES.length },
      { id: 'holy_site', label: 'Holy Sanctuaries', count: ZIYARAT_PLACES.filter(p => p.category === 'holy_site').length },
      { id: 'masjid', label: 'Historic Mosques', count: ZIYARAT_PLACES.filter(p => p.category === 'masjid').length },
      { id: 'mountain', label: 'Sacred Mountains & Caves', count: ZIYARAT_PLACES.filter(p => p.category === 'mountain').length },
      { id: 'historical_battle', label: 'Battlefields & History', count: ZIYARAT_PLACES.filter(p => p.category === 'historical_battle').length },
      { id: 'cemetery', label: 'Historic Cemeteries', count: ZIYARAT_PLACES.filter(p => p.category === 'cemetery').length },
      { id: 'museum', label: 'Museums & Exhibitions', count: ZIYARAT_PLACES.filter(p => p.category === 'museum').length },
    ];
  }, []);

  const filteredPlaces = useMemo(() => {
    return ZIYARAT_PLACES.filter(place => {
      // City match
      if (cityFilter !== 'All' && place.city !== cityFilter) return false;
      
      // Category match
      if (selectedCategory !== 'all' && place.category !== selectedCategory) return false;
      
      // Importance match
      if (selectedImportance !== 'all' && place.importance !== selectedImportance) return false;

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = place.name.toLowerCase().includes(query);
        const matchesArabic = place.arabicName.includes(query);
        const matchesDesc = place.shortDescription.toLowerCase().includes(query) || place.fullDescription.toLowerCase().includes(query);
        const matchesHistory = place.historicalSignificance.toLowerCase().includes(query);
        return matchesName || matchesArabic || matchesDesc || matchesHistory;
      }

      return true;
    });
  }, [cityFilter, selectedCategory, selectedImportance, searchQuery]);

  const importanceBadge = (importance: ImportanceLevel) => {
    switch (importance) {
      case 'essential':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#8C734B] text-white shadow-xs">
            <Star className="w-3 h-3 mr-1 fill-white text-white" />
            Essential Visit
          </span>
        );
      case 'highly_recommended':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#2D4A3E] text-white shadow-xs">
            <Sparkles className="w-3 h-3 mr-1 text-[#EFE7DA]" />
            Highly Recommended
          </span>
        );
      case 'recommended':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F8F5EB] text-[#2D4A3E] border border-[#E5E1D3]">
            Recommended
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F8F5EB] text-[#5C564E] border border-[#E5E1D3]">
            Historical Landmark
          </span>
        );
    }
  };

  return (
    <section id="ziyarat-explorer-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E5E1D3]">
        <div>
          <div className="flex items-center space-x-2 text-[#2D4A3E] font-semibold text-xs uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#8C734B]" />
            <span>Makkah & Madinah Ziyarat Directory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2A26] mt-1">
            Historical & Sacred Landmarks
          </h2>
          <p className="text-sm text-[#5C564E] max-w-2xl mt-1">
            Carefully curated directory with verified Islamic historical significance, authentic references, etiquette, and visitor guidance.
          </p>
        </div>

        {/* City Toggle Segmented Control */}
        <div className="inline-flex p-1 rounded-2xl bg-[#F8F5EB] border border-[#E5E1D3] self-start md:self-auto">
          {(['All', 'Makkah', 'Madinah'] as const).map((city) => (
            <button
              key={city}
              id={`city-filter-btn-${city.toLowerCase()}`}
              onClick={() => setCityFilter(city)}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                cityFilter === city
                  ? 'bg-white text-[#2D4A3E] font-bold shadow-xs border border-[#E5E1D3]'
                  : 'text-[#5C564E] hover:text-[#2D2A26]'
              }`}
            >
              {city === 'All' ? 'All Cities (13)' : city === 'Makkah' ? '🕋 Makkah (7)' : '🕌 Madinah (6)'}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="my-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C867A]" />
            <input
              id="ziyarat-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, Arabic name (e.g. حراء, قباء), or landmark..."
              className="w-full pl-10 pr-10 py-2.5 rounded-2xl border border-[#E5E1D3] bg-white text-[#2D2A26] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E]/20 focus:border-[#2D4A3E] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C867A] hover:text-[#2D2A26]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Importance Filter */}
          <div className="md:col-span-3">
            <select
              id="importance-filter-select"
              value={selectedImportance}
              onChange={(e) => setSelectedImportance(e.target.value as any)}
              className="w-full py-2.5 px-3 rounded-2xl border border-[#E5E1D3] bg-white text-[#2D2A26] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E]/20 focus:border-[#2D4A3E] shadow-xs"
            >
              <option value="all">All Importance Levels</option>
              <option value="essential">⭐ Essential Visit</option>
              <option value="highly_recommended">✨ Highly Recommended</option>
              <option value="recommended">📍 Recommended</option>
            </select>
          </div>

          {/* Results Counter Pill */}
          <div className="md:col-span-3 flex items-center justify-between md:justify-end text-xs text-[#8C867A] px-1">
            <span>Showing <strong className="text-[#2D2A26]">{filteredPlaces.length}</strong> landmarks</span>
            {(selectedCategory !== 'all' || selectedImportance !== 'all' || searchQuery || cityFilter !== 'All') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedImportance('all');
                  setSearchQuery('');
                  setCityFilter('All');
                }}
                className="text-[#8C734B] hover:text-[#755F3C] font-semibold underline text-xs ml-3"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#2D4A3E] text-white font-semibold shadow-xs'
                  : 'bg-[#F8F5EB] text-[#5C564E] hover:bg-[#EFE7DA] border border-[#E5E1D3]'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Places Grid */}
      {filteredPlaces.length === 0 ? (
        <div className="text-center py-16 px-4 bg-[#F8F5EB] rounded-3xl border border-dashed border-[#E5E1D3]">
          <Info className="w-10 h-10 text-[#8C867A] mx-auto mb-3" />
          <h3 className="text-base font-semibold text-[#2D2A26]">No Ziyarat sites found</h3>
          <p className="text-sm text-[#5C564E] mt-1">Try clearing your search query or selecting a different category filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedImportance('all');
              setCityFilter('All');
            }}
            className="mt-4 px-5 py-2.5 bg-[#2D4A3E] text-white rounded-full text-xs font-medium hover:bg-[#1E332A]"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => {
            const isSaved = savedPlaceIds.includes(place.id);
            return (
              <div
                key={place.id}
                id={`ziyarat-card-${place.id}`}
                className="group flex flex-col bg-white rounded-3xl border border-[#E5E1D3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 hover:border-[#8C734B]/60"
              >
                {/* Card Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F8F5EB]">
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
                    {importanceBadge(place.importance)}
                  </div>

                  {/* Bottom Arabic Name & Distance */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="text-xs font-semibold text-[#EFE7DA] font-arabic tracking-wide drop-shadow-xs">
                        {place.arabicName}
                      </p>
                    </div>
                    <div className="text-[11px] bg-stone-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[#E5E1D3] flex items-center space-x-1 border border-stone-700/50">
                      <MapPin className="w-3 h-3 text-[#8C734B]" />
                      <span>{place.location.distanceToHaramKm === 0 ? 'Inside Haram' : `${place.location.distanceToHaramKm} km to Haram`}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#2D2A26] font-serif group-hover:text-[#2D4A3E] transition-colors leading-snug">
                      {place.name}
                    </h3>
                    <p className="text-xs text-[#5C564E] line-clamp-3 leading-relaxed">
                      {place.shortDescription}
                    </p>
                  </div>

                  {/* Highlights Pill Info */}
                  <div className="pt-2 border-t border-[#E5E1D3] grid grid-cols-2 gap-2 text-xs text-[#8C867A]">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-[#8C734B] shrink-0" />
                      <span className="truncate">~{place.estimatedDurationMinutes} mins visit</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Footprints className="w-3.5 h-3.5 text-[#8C734B] shrink-0" />
                      <span className="capitalize">{place.accessibility.physicalDifficulty} trail</span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center space-x-2 pt-1">
                    <button
                      id={`btn-view-details-${place.id}`}
                      onClick={() => setActiveModalPlace(place)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#F8F5EB] hover:bg-[#EFE7DA] text-[#2D2A26] text-xs font-semibold transition-colors flex items-center justify-center space-x-1.5 border border-[#E5E1D3]"
                    >
                      <span>Explore History & Tips</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#8C734B]" />
                    </button>

                    {onAddToPlanner && (
                      <button
                        id={`btn-planner-toggle-${place.id}`}
                        onClick={() => onAddToPlanner(place)}
                        title={isSaved ? 'In your Itinerary' : 'Add to custom Itinerary'}
                        className={`p-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                          isSaved
                            ? 'bg-[#EFE7DA] text-[#2D4A3E] hover:bg-[#E5E1D3] border border-[#C4B59D]'
                            : 'bg-[#2D4A3E] text-white hover:bg-[#1E332A]'
                        }`}
                      >
                        {isSaved ? <Check className="w-4 h-4 text-[#2D4A3E]" /> : <Plus className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Place Detailed Modal Drawer */}
      {activeModalPlace && (
        <div 
          id="ziyarat-detail-modal"
          className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
        >
          <div className="relative bg-[#FDFCF6] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E5E1D3]">
            
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-72 w-full bg-[#1E332A]">
              <img
                src={activeModalPlace.images[0]}
                alt={activeModalPlace.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E332A] via-[#1E332A]/40 to-transparent" />
              
              {/* Close Button */}
              <button
                id="btn-close-modal"
                onClick={() => setActiveModalPlace(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Title inside Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    activeModalPlace.city === 'Makkah' ? 'bg-[#8C734B] text-white' : 'bg-[#2D4A3E] text-white'
                  }`}>
                    {activeModalPlace.city}
                  </span>
                  {importanceBadge(activeModalPlace.importance)}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FDFCF6]">
                  {activeModalPlace.name}
                </h3>
                <p className="text-base sm:text-lg font-arabic text-[#EFE7DA] mt-0.5">
                  {activeModalPlace.arabicName}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Historical Significance Callout */}
              <div className="bg-[#F8F5EB] border border-[#E5E1D3] rounded-3xl p-5 space-y-2">
                <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-[#8C734B]" />
                  <span>Historical Significance & Seerah Background</span>
                </div>
                <p className="text-sm text-[#2D2A26] leading-relaxed">
                  {activeModalPlace.historicalSignificance}
                </p>
              </div>

              {/* References / Hadith Quotes */}
              {activeModalPlace.references && activeModalPlace.references.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C867A]">
                    Quranic & Authentic Hadith References
                  </h4>
                  <div className="space-y-2">
                    {activeModalPlace.references.map((ref, idx) => (
                      <div key={idx} className="bg-[#F8F5EB] border-l-4 border-[#8C734B] p-3.5 rounded-r-2xl text-xs space-y-1">
                        <span className="font-bold text-[#2D4A3E]">{ref.source}</span>
                        {ref.text && <p className="text-[#5C564E] italic">"{ref.text}"</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C867A]">
                  Detailed Overview
                </h4>
                <p className="text-sm text-[#5C564E] leading-relaxed">
                  {activeModalPlace.fullDescription}
                </p>
              </div>

              {/* Grid: Visitor Tips & Etiquette */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Practical Tips */}
                <div className="bg-white rounded-3xl p-5 border border-[#E5E1D3] space-y-2.5">
                  <div className="flex items-center space-x-1.5 text-[#2D4A3E] font-bold text-xs">
                    <Info className="w-4 h-4 text-[#8C734B]" />
                    <span>Practical Visitor Tips</span>
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

                {/* Islamic Etiquette */}
                <div className="bg-white rounded-3xl p-5 border border-[#E5E1D3] space-y-2.5">
                  <div className="flex items-center space-x-1.5 text-[#2D4A3E] font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#8C734B]" />
                    <span>Sacred Etiquette & Sunnah Protocol</span>
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

              {/* Logistics & Location Details */}
              <div className="bg-[#2D4A3E] text-[#E5E1D3] rounded-3xl p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#8C734B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EFE7DA]">
                      Location & Transit
                    </span>
                  </div>
                  <span className="text-xs text-[#E5E1D3] font-medium">
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
                    <span><strong>Permit Notice:</strong> {activeModalPlace.permitsRequired}</span>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${activeModalPlace.location.coordinates.lat},${activeModalPlace.location.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#E5E1D3] hover:bg-[#F8F5EB] text-[#5C564E] text-xs font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#8C734B]" />
                  <span>Open in Google Maps ({activeModalPlace.location.coordinates.lat.toFixed(4)}, {activeModalPlace.location.coordinates.lng.toFixed(4)})</span>
                </a>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  {onAddToPlanner && (
                    <button
                      onClick={() => {
                        onAddToPlanner(activeModalPlace);
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-semibold transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                    >
                      {savedPlaceIds.includes(activeModalPlace.id) ? (
                        <>
                          <Check className="w-4 h-4 text-[#C4B59D]" />
                          <span>Saved in Itinerary</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to My Planner</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
