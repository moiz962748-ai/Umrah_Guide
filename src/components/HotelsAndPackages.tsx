import React, { useState } from 'react';
import { HOTELS_DATA, PACKAGES_DATA } from '../data/hotelsAndPackagesData';
import { Hotel, UmrahPackage, City } from '../types';
import { 
  Hotel as HotelIcon, Package, Star, MapPin, 
  Check, X, Sparkles, Clock, ShieldCheck, 
  ChevronRight, ArrowUpRight, Award, Compass, CreditCard
} from 'lucide-react';
import { PackageBookingModal } from './PackageBookingModal';

interface HotelsAndPackagesProps {
  onSelectPackage?: (pkg: UmrahPackage) => void;
}

export const HotelsAndPackages: React.FC<HotelsAndPackagesProps> = ({ onSelectPackage }) => {
  const [activeSubTab, setActiveSubTab] = useState<'packages' | 'hotels'>('packages');
  const [selectedCity, setSelectedCity] = useState<'All' | City>('All');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [activePackageModal, setActivePackageModal] = useState<UmrahPackage | null>(null);
  const [bookingPackage, setBookingPackage] = useState<UmrahPackage | null>(null);
  const [bookingNotification, setBookingNotification] = useState<string | null>(null);

  const filteredHotels = HOTELS_DATA.filter(hotel => {
    if (selectedCity !== 'All' && hotel.city !== selectedCity) return false;
    return true;
  });

  const filteredPackages = PACKAGES_DATA.filter(pkg => {
    if (selectedTier !== 'all' && pkg.tier !== selectedTier) return false;
    return true;
  });

  return (
    <section id="hotels-packages-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E5E1D3]">
        <div>
          <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#8C734B]" />
            <span>Premium Accommodations & Curated Itineraries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2A26] mt-1">
            Haram-Front Hotels & Comprehensive Packages
          </h2>
          <p className="text-sm text-[#5C564E] max-w-2xl mt-1">
            Experience unparalleled proximity to Al-Masjid al-Haram and Al-Masjid an-Nabawi with handpicked 5-star properties and verified transparent travel packages.
          </p>
        </div>

        {/* Sub-tab Selector */}
        <div className="inline-flex p-1 rounded-2xl bg-[#F8F5EB] border border-[#E5E1D3] self-start md:self-auto">
          <button
            id="tab-packages-btn"
            onClick={() => setActiveSubTab('packages')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activeSubTab === 'packages'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <Package className="w-4 h-4 text-[#8C734B]" />
            <span>Curated Packages ({PACKAGES_DATA.length})</span>
          </button>
          <button
            id="tab-hotels-btn"
            onClick={() => setActiveSubTab('hotels')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activeSubTab === 'hotels'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <HotelIcon className="w-4 h-4 text-[#8C734B]" />
            <span>Verified Hotels ({HOTELS_DATA.length})</span>
          </button>
        </div>
      </div>

      {/* Packages Tab Content */}
      {activeSubTab === 'packages' && (
        <div className="mt-8 space-y-6">
          
          {/* Tier Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs text-[#8C867A] font-medium mr-1">Package Class:</span>
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'vip_royal', label: '👑 Royal Platinum VIP' },
              { id: 'premium', label: '⭐ Classic Premium' },
              { id: 'standard', label: '🌱 Sunnah Economy' }
            ].map(tier => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedTier === tier.id
                    ? 'bg-[#2D4A3E] text-white font-semibold shadow-xs'
                    : 'bg-[#F8F5EB] text-[#5C564E] hover:bg-[#EFE7DA] border border-[#E5E1D3]'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* Packages List */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className="flex flex-col bg-white rounded-3xl border border-[#E5E1D3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 relative hover:border-[#8C734B]/60"
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C734B] text-white shadow-xs">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="p-6 bg-[#2D4A3E] text-white space-y-2 border-b border-[#1E332A]">
                  <div className="text-[#EFE7DA] text-xs font-bold uppercase tracking-wider">
                    {pkg.durationNights.total} Days Total • {pkg.durationNights.makkah}N Makkah + {pkg.durationNights.madinah}N Madinah
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#FDFCF6] leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-arabic text-[#EFE7DA]">
                    {pkg.arabicSubtitle}
                  </p>

                  <div className="pt-3 flex items-baseline space-x-2">
                    <span className="text-2xl font-extrabold text-[#EFE7DA]">${pkg.priceFromUsd}</span>
                    <span className="text-xs text-[#C4B59D] font-normal">/ person (double occ.)</span>
                  </div>
                </div>

                {/* Inclusions & Highlights */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    
                    {/* Hotel Stays info */}
                    <div className="bg-[#F8F5EB] rounded-3xl p-4 space-y-2 text-xs border border-[#E5E1D3]">
                      <div>
                        <span className="text-[#8C867A] font-semibold block uppercase tracking-wider text-[10px]">Makkah Hotel:</span>
                        <span className="text-[#2D2A26] font-bold">{pkg.makkahHotel}</span>
                      </div>
                      <div className="pt-1.5 border-t border-[#E5E1D3]">
                        <span className="text-[#8C867A] font-semibold block uppercase tracking-wider text-[10px]">Madinah Hotel:</span>
                        <span className="text-[#2D2A26] font-bold">{pkg.madinahHotel}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8C867A] block">
                        Included Key Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#5C564E]">
                        {pkg.features.slice(0, 4).map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#E5E1D3] flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <button
                      id={`btn-view-package-${pkg.id}`}
                      onClick={() => setActivePackageModal(pkg)}
                      className="flex-1 py-2.5 px-3.5 rounded-full bg-[#F8F5EB] hover:bg-[#EFE7DA] text-[#2D4A3E] border border-[#E5E1D3] text-xs font-semibold transition-colors flex items-center justify-center space-x-1 cursor-pointer shadow-2xs"
                    >
                      <span>Day-by-Day Itinerary</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#8C734B]" />
                    </button>
                    <button
                      id={`btn-book-package-${pkg.id}`}
                      onClick={() => setBookingPackage(pkg)}
                      className="flex-1 py-2.5 px-3.5 rounded-full bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                    >
                      <CreditCard className="w-3.5 h-3.5 text-[#8C734B]" />
                      <span>Book Package</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hotels Tab Content */}
      {activeSubTab === 'hotels' && (
        <div className="mt-8 space-y-6">
          
          {/* City Filter */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs text-[#8C867A] font-medium mr-1">Filter by Holy City:</span>
            {(['All', 'Makkah', 'Madinah'] as const).map(city => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedCity === city
                    ? 'bg-[#2D4A3E] text-white font-semibold shadow-xs'
                    : 'bg-[#F8F5EB] text-[#5C564E] hover:bg-[#EFE7DA] border border-[#E5E1D3]'
                }`}
              >
                {city === 'All' ? 'All Verified Hotels (7)' : city === 'Makkah' ? '🕋 Makkah (4)' : '🕌 Madinah (3)'}
              </button>
            ))}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                id={`hotel-card-${hotel.id}`}
                className="group flex flex-col bg-white rounded-3xl border border-[#E5E1D3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 hover:border-[#8C734B]/60"
              >
                {/* Hotel Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#F8F5EB]">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      hotel.city === 'Makkah' ? 'bg-[#8C734B] text-white' : 'bg-[#2D4A3E] text-white'
                    }`}>
                      {hotel.city}
                    </span>
                    {hotel.highlightBadge && (
                      <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-white text-[#2D2A26] shadow-xs">
                        {hotel.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Distance from Haram indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center space-x-1">
                      {[...Array(hotel.starRating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#8C734B] text-[#8C734B]" />
                      ))}
                    </div>
                    <div className="bg-stone-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-bold text-[#EFE7DA] border border-stone-700/50">
                      {hotel.distanceToHaramMeters}m to Haram ({hotel.walkTimeToHaramMinutes} min walk)
                    </div>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#2D2A26] font-serif group-hover:text-[#2D4A3E] transition-colors leading-snug">
                      {hotel.name}
                    </h3>
                    <p className="text-xs font-arabic text-[#5C564E]">
                      {hotel.arabicName}
                    </p>
                    <p className="text-[11px] text-[#5C564E] flex items-center">
                      <MapPin className="w-3 h-3 text-[#8C734B] mr-1 shrink-0" />
                      <span className="truncate">{hotel.address}</span>
                    </p>
                  </div>

                  {/* Amenities Tags */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C867A] block">Amenities:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#F8F5EB] text-[#5C564E] text-[11px] border border-[#E5E1D3]">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Rating Footer */}
                  <div className="pt-3 border-t border-[#E5E1D3] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-[#8C867A] font-semibold block">From</span>
                      <span className="text-lg font-bold text-[#2D2A26]">${hotel.pricePerNightUsd}</span>
                      <span className="text-xs text-[#5C564E]"> / night</span>
                    </div>

                    <div className="text-right">
                      <div className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#F8F5EB] text-[#2D4A3E] rounded-full text-xs font-bold border border-[#E5E1D3]">
                        <Star className="w-3 h-3 fill-[#8C734B] text-[#8C734B]" />
                        <span>{hotel.ratingScore}</span>
                      </div>
                      <span className="text-[10px] text-[#8C867A] block mt-0.5">
                        ({hotel.reviewsCount.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Package Day-by-Day Modal */}
      {activePackageModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="relative bg-[#FDFCF6] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E5E1D3]">
            
            {/* Modal Header */}
            <div className="bg-[#2D4A3E] text-white p-6 sm:p-8 relative">
              <button
                onClick={() => setActivePackageModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-[#EFE7DA] text-xs font-bold uppercase tracking-wider mb-1">
                {activePackageModal.durationNights.total}-Day Package Itinerary
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#FDFCF6]">
                {activePackageModal.title}
              </h3>
              <p className="text-sm font-arabic text-[#EFE7DA] mt-1">
                {activePackageModal.arabicSubtitle}
              </p>
              
              <div className="mt-4 flex items-center space-x-4 text-xs text-[#E5E1D3]">
                <span>🕋 {activePackageModal.durationNights.makkah} Nights in Makkah</span>
                <span>•</span>
                <span>🕌 {activePackageModal.durationNights.madinah} Nights in Madinah</span>
                <span>•</span>
                <span className="font-bold text-[#EFE7DA]">${activePackageModal.priceFromUsd} Starting</span>
              </div>
            </div>

            {/* Modal Itinerary Highlights */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C867A] flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-[#8C734B]" />
                  <span>Curated Day-by-Day Program</span>
                </h4>

                <div className="space-y-3">
                  {activePackageModal.itineraryHighlights.map((item, idx) => (
                    <div key={idx} className="bg-[#F8F5EB] rounded-3xl p-5 border border-[#E5E1D3] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-[#2D4A3E] text-white">
                          Day {item.day} • {item.city}
                        </span>
                        <span className="text-xs font-semibold text-[#2D2A26]">{item.title}</span>
                      </div>
                      <ul className="space-y-1 text-xs text-[#5C564E] pl-2">
                        {item.activities.map((act, actIdx) => (
                          <li key={actIdx} className="flex items-start space-x-2">
                            <span className="text-[#8C734B] font-bold">•</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#F8F5EB] rounded-3xl p-5 border border-[#E5E1D3] space-y-2">
                  <span className="text-xs font-bold text-[#2D4A3E] uppercase tracking-wider block">
                    What's Included:
                  </span>
                  <ul className="space-y-1 text-xs text-[#5C564E]">
                    {activePackageModal.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F8F5EB] rounded-3xl p-5 border border-[#E5E1D3] space-y-2">
                  <span className="text-xs font-bold text-[#8C734B] uppercase tracking-wider block">
                    Exclusions:
                  </span>
                  <ul className="space-y-1 text-xs text-[#5C564E]">
                    {activePackageModal.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <X className="w-3.5 h-3.5 text-[#8C867A] shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#E5E1D3]">
                <div className="text-xs text-[#5C564E]">
                  Starting from <span className="text-base font-serif font-bold text-[#2D4A3E]">${activePackageModal.priceFromUsd}</span> / person
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setActivePackageModal(null)}
                    className="px-5 py-2.5 rounded-full bg-[#F8F5EB] hover:bg-[#EFE7DA] text-[#2D4A3E] border border-[#E5E1D3] text-xs font-semibold cursor-pointer shadow-2xs"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const pkg = activePackageModal;
                      setActivePackageModal(null);
                      setBookingPackage(pkg);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer shadow-xs"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-[#8C734B]" />
                    <span>Customize & Book Package</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Package Booking Modal Component */}
      <PackageBookingModal
        packageData={bookingPackage}
        isOpen={Boolean(bookingPackage)}
        onClose={() => setBookingPackage(null)}
        onBookingSuccess={(ref) => {
          setBookingNotification(`Booking ${ref} confirmed! Check your email for full reservation itinerary.`);
          setTimeout(() => setBookingNotification(null), 6000);
        }}
      />

      {/* Booking Success Floating Toast */}
      {bookingNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2D4A3E] text-white px-5 py-3.5 rounded-2xl shadow-xl border border-[#8C734B]/40 flex items-center space-x-3 animate-in slide-in-from-bottom-5">
          <Check className="w-5 h-5 text-[#8C734B] stroke-[3]" />
          <span className="text-xs font-semibold">{bookingNotification}</span>
        </div>
      )}

    </section>
  );
};
