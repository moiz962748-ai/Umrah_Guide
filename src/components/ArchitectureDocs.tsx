import React, { useState } from 'react';
import { Code2, FolderTree, FileCode, Database, Copy, Check, Sparkles, BookOpen, Layers, Terminal } from 'lucide-react';

export const ArchitectureDocs: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'structure' | 'types' | 'data'>('structure');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyCode = (sectionKey: string, codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const folderStructureCode = `my-umrah-app/
├── app/                              # Next.js App Router (File-system routing)
│   ├── (marketing)/                  # Route Group: Public Marketing & Landing
│   │   ├── page.tsx                  # Home Landing Page (Hero, quick search, featured Ziyarat)
│   │   ├── layout.tsx                # Marketing Layout with Navbar & Footer
│   │   └── about/page.tsx            # Mission, authenticity sources, scholar advisory
│   │
│   ├── ziyarat/                      # Ziyarat Directory & Place Details
│   │   ├── page.tsx                  # Interactive Ziyarat Grid with City/Category filters
│   │   └── [slug]/                   # Dynamic Route for individual Ziyarat landmark
│   │       ├── page.tsx              # Place page (History, Hadith, Map, Coordinates, Tips)
│   │       └── opengraph-image.tsx   # Dynamic social sharing OG preview card
│   │
│   ├── guide/                        # Umrah Step-by-Step Ritual Manual
│   │   ├── page.tsx                  # Interactive Ritual Timeline (Ihram -> Tahalul)
│   │   └── duas/page.tsx             # Audio-enabled Authenticated Duas library
│   │
│   ├── packages/                     # Packages & Hotel Directory
│   │   ├── page.tsx                  # Package comparison & Hotel proximity explorer
│   │   └── [packageId]/page.tsx      # Individual package breakdown & booking inquiry
│   │
│   ├── planner/                      # Interactive Umrah Planner & Packing Tracker
│   │   ├── page.tsx                  # Custom day-by-day scheduler & packing checklist
│   │   └── export/route.ts           # PDF/ICS calendar export generator
│   │
│   ├── api/                          # Server-side API Route Handlers
│   │   ├── ziyarat/route.ts          # Ziyarat search & Geo-distance calculation API
│   │   ├── packages/route.ts         # Travel packages querying endpoint
│   │   └── planner/save/route.ts     # Save user custom itinerary
│   │
│   ├── global-error.tsx              # Root error boundary
│   ├── not-found.tsx                 # Custom 404 page with spiritual guidance
│   ├── layout.tsx                    # Root Layout (Font optimization, metadata, providers)
│   └── globals.css                   # Global Tailwind CSS @import configuration
│
├── components/                       # Modular React UI Components
│   ├── ui/                           # Base headless primitives (Button, Modal, Drawer, Tabs)
│   ├── ziyarat/                      # ZiyaratCard, ZiyaratFilterBar, GeoMapViewer
│   ├── guide/                        # RitualStepCard, DuaAudioPlayer, LapCounter
│   ├── hotels/                       # HotelCard, DistanceBadge, ViewPill
│   ├── planner/                      # DailySlotItem, ChecklistProgress, ExportModal
│   └── layout/                       # Navbar, Footer, MobileNav, Breadcrumbs
│
├── types/                            # Strict TypeScript Type Definitions
│   ├── ziyarat.ts                    # ZiyaratPlace, Location, Category, Accessibility
│   ├── hotel.ts                      # Hotel, HotelView, Amenities
│   ├── package.ts                    # UmrahPackage, PackageTier, ItineraryHighlight
│   ├── guide.ts                      # UmrahStep, DuaItem, RitualStage
│   └── planner.ts                    # UserCustomPlan, ItinerarySlot, ChecklistItem
│
├── data/                             # Rich Seed & Mock Data Files
│   ├── ziyaratPlaces.ts              # Verified Makkah & Madinah historical landmarks
│   ├── umrahSteps.ts                 # Authentic 6-step Umrah guide with Arabic texts
│   ├── hotelsData.ts                 # Haram-front 5-star & 4-star hotels
│   └── packagesData.ts               # Curated travel packages & programs
│
├── lib/                              # Shared Utilities & Helpers
│   ├── utils.ts                      # cn() helper for Tailwind class merging
│   ├── geo.ts                        # Haversine distance calculator to Haram center
│   ├── arabic.ts                     # Tashkeel search normalizer & phonetics
│   └── constants.ts                  # Coordinates of Kaaba & Prophet's Mosque
│
├── hooks/                            # Custom React Hooks
│   ├── useLocalStorage.ts            # Local persistence for checklist and custom plans
│   └── useLapCounter.ts              # State tracker for Tawaf & Sa'ee
│
├── public/                           # Static assets, fonts, icons, manifests
├── .env.example                      # Documented environment variables
├── tailwind.config.ts                # Tailwind design system tokens & colors
├── tsconfig.json                     # Strict TypeScript compiler options
└── package.json                      # Project dependencies & build scripts`;

  const coreTypesCode = `// types/index.ts

export type City = 'Makkah' | 'Madinah' | 'Jeddah';

export type ZiyaratCategory = 
  | 'holy_site' 
  | 'masjid' 
  | 'mountain' 
  | 'cemetery' 
  | 'historical_battle' 
  | 'museum' 
  | 'well';

export type ImportanceLevel = 
  | 'essential' 
  | 'highly_recommended' 
  | 'recommended' 
  | 'historical';

export type PhysicalDifficulty = 'easy' | 'moderate' | 'strenuous';

export interface LocationCoordinates {
  lat: number;
  lng: number;
}

export interface ZiyaratLocation {
  address: string;
  coordinates: LocationCoordinates;
  distanceToHaramKm: number;
  walkingTimeMin?: number;
  transportTip: string;
}

export interface HistoricalReference {
  source: string;
  text?: string;
}

export interface AccessibilityInfo {
  wheelchairAccessible: boolean;
  physicalDifficulty: PhysicalDifficulty;
  stairsCount?: number;
  shadeAvailable: boolean;
}

export interface ZiyaratPlace {
  id: string;
  slug: string;
  name: string;
  arabicName: string;
  city: City;
  category: ZiyaratCategory;
  shortDescription: string;
  fullDescription: string;
  historicalSignificance: string;
  visitorTips: string[];
  location: ZiyaratLocation;
  importance: ImportanceLevel;
  estimatedDurationMinutes: number;
  bestTimeToVisit: string;
  etiquette: string[];
  images: string[];
  permitsRequired?: string;
  accessibility: AccessibilityInfo;
  references?: HistoricalReference[];
}

export type HotelViewType = 'kaaba' | 'haram' | 'city';

export interface Hotel {
  id: string;
  name: string;
  arabicName: string;
  city: City;
  starRating: 3 | 4 | 5;
  distanceToHaramMeters: number;
  walkTimeToHaramMinutes: number;
  viewTypes: HotelViewType[];
  amenities: string[];
  pricePerNightUsd: number;
  address: string;
  image: string;
  gallery: string[];
  ratingScore: number;
  reviewsCount: number;
  highlightBadge?: string;
}

export type PackageTier = 'economy' | 'standard' | 'premium' | 'vip_royal';

export interface ItineraryHighlight {
  day: number;
  city: City;
  title: string;
  activities: string[];
}

export interface UmrahPackage {
  id: string;
  title: string;
  arabicSubtitle: string;
  durationNights: {
    makkah: number;
    madinah: number;
    total: number;
  };
  tier: PackageTier;
  makkahHotel: string;
  madinahHotel: string;
  features: string[];
  inclusions: string[];
  exclusions: string[];
  priceFromUsd: number;
  rating: number;
  badge?: string;
  itineraryHighlights: ItineraryHighlight[];
}

export interface DuaItem {
  id: string;
  title: string;
  occasion: string;
  arabic: string;
  transliteration: string;
  translation: string;
  repeatCount?: string;
  reference?: string;
}

export interface UmrahStep {
  step: number;
  id: string;
  stage: 'preparation' | 'ihram' | 'meeqat' | 'tawaf' | 'maqam_ibrahim' | 'zamzam' | 'saee' | 'tahalul';
  title: string;
  arabicTitle: string;
  subtitle: string;
  description: string;
  sunnahs: string[];
  prohibitions?: string[];
  stepByStepGuide: string[];
  duas: DuaItem[];
}

export interface ChecklistItem {
  id: string;
  category: 'documents' | 'ihram_items' | 'health_care' | 'tech_misc' | 'spiritual';
  task: string;
  notes?: string;
  done: boolean;
}

export interface ItinerarySlot {
  id: string;
  dayNumber: number;
  timeSlot: 'morning' | 'afternoon' | 'evening' | 'night';
  city: City;
  placeId?: string;
  customTitle?: string;
  notes?: string;
}

export interface UserCustomPlan {
  tripTitle: string;
  totalDays: number;
  makkahDays: number;
  madinahDays: number;
  startDate: string;
  slots: ItinerarySlot[];
  customPlaces: string[];
}`;

  const sampleDataSnippet = `// data/sampleZiyaratData.ts
import { ZiyaratPlace } from '@/types';

export const SAMPLE_ZIYARAT_PLACES: ZiyaratPlace[] = [
  {
    id: 'makkah-masjid-al-haram',
    slug: 'masjid-al-haram-kaaba',
    name: 'Al-Masjid al-Haram & The Holy Kaaba',
    arabicName: 'المسجد الحرام والكعبة المشرفة',
    city: 'Makkah',
    category: 'holy_site',
    shortDescription: 'The most sacred mosque in Islam surrounding the Holy Kaaba, the focal point (Qibla) of Muslim prayers worldwide.',
    fullDescription: 'Al-Masjid al-Haram is the holiest sanctuary on Earth. At its center stands the Holy Kaaba (Bayt Allah), built by Prophet Ibrahim and Ismail (peace be upon them). It encompasses the Black Stone (Al-Hajar al-Aswad), Maqam Ibrahim, the Well of Zamzam, and the hills of Safa and Marwah.',
    historicalSignificance: 'Established as the first house of worship dedicated to the singular worship of Allah. Surah Al-Baqarah (2:127) commemorates Prophet Ibrahim and Ismail raising its foundations. A single prayer equals 100,000 prayers performed elsewhere.',
    visitorTips: [
      'Enter with humility leading with your right foot and recite the entry dua.',
      'The ground floor Mataf is often reserved for pilgrims wearing Ihram during peak seasons.',
      'Early morning (after Fajr until 9 AM) and late night (midnight to 3 AM) are typically less crowded for peaceful Tawaf.'
    ],
    location: {
      address: 'Al Haram, Makkah 24231, Saudi Arabia',
      coordinates: { lat: 21.422487, lng: 39.826206 },
      distanceToHaramKm: 0,
      walkingTimeMin: 0,
      transportTip: 'Directly accessible on foot from all surrounding central hotel corridors.'
    },
    importance: 'essential',
    estimatedDurationMinutes: 180,
    bestTimeToVisit: 'Between midnight and 4:00 AM, or 2 hours post-Isha',
    etiquette: [
      'Maintain extreme patience, modesty, and lowered gaze throughout.',
      'Do not push or cause distress to elderly and disabled pilgrims in the Mataf.'
    ],
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    },
    references: [
      { source: 'Sahih al-Bukhari 1190', text: 'A prayer in this mosque of mine is better than a thousand prayers elsewhere, except Al-Masjid al-Haram.' }
    ]
  },
  {
    id: 'madinah-masjid-quba',
    slug: 'masjid-quba-first-mosque',
    name: 'Masjid Quba (The First Mosque in Islam)',
    arabicName: 'مسجد قباء أول مسجد في الإسلام',
    city: 'Madinah',
    category: 'masjid',
    shortDescription: 'The very first mosque built in Islamic history, where praying 2 Rak\\'ah carries the divine reward equivalent to a complete Umrah.',
    fullDescription: 'Located 3.5 km south of the Prophet\\'s Mosque, Masjid Quba was established by Prophet Muhammad ﷺ upon arriving at the village of Quba during the Hijrah.',
    historicalSignificance: 'Praised in the Quran (Surah At-Tawbah 9:108): "A mosque founded on righteousness from the first day is more worthy for you to stand in." The Messenger of Allah ﷺ would visit Quba every Saturday to pray two units of prayer.',
    visitorTips: [
      'Walk along the beautiful pedestrianized Quba Boulevard (Darb as-Sunnah), a scenic 3 km walking promenade connecting Masjid an-Nabawi to Masjid Quba.',
      'Ensure you make Wudu at your hotel before departing to attain the full sunnah reward.'
    ],
    location: {
      address: '3949 Al Hijrah Rd, Al Khatim, Madinah 42318',
      coordinates: { lat: 24.439167, lng: 39.617222 },
      distanceToHaramKm: 3.2,
      walkingTimeMin: 40,
      transportTip: '7-minute taxi or a 35-minute pleasant stroll down Quba Pedestrian Avenue.'
    },
    importance: 'essential',
    estimatedDurationMinutes: 75,
    bestTimeToVisit: 'Saturday morning or any day between sunrise and Dhuhr',
    etiquette: [
      'Purify yourself at home/hotel first.',
      'Offer two rak\\'ahs of Nafl with sincere devotion.'
    ],
    images: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    },
    references: [
      { source: 'Sunan Ibn Majah 1412', text: 'Whoever purifies himself in his house, then comes to the mosque of Quba and prays in it, will have a reward like the Umrah.' }
    ]
  }
];`;

  return (
    <section id="architecture-docs-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E5E1D3]">
        <div>
          <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider">
            <Code2 className="w-4 h-4 text-[#8C734B]" />
            <span>Senior Full-Stack Architecture Specifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2A26] mt-1">
            Next.js App Router Structure & TypeScript Type System
          </h2>
          <p className="text-sm text-[#5C564E] max-w-2xl mt-1">
            Production-grade folder hierarchy, strict interfaces, and scalable patterns designed for high performance, SEO, accessibility, and clean code principles.
          </p>
        </div>

        {/* Sub-tabs */}
        <div className="inline-flex p-1 rounded-2xl bg-[#F8F5EB] border border-[#E5E1D3] self-start md:self-auto">
          <button
            id="tab-structure-btn"
            onClick={() => setActiveSubTab('structure')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeSubTab === 'structure'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <FolderTree className="w-4 h-4 text-[#8C734B]" />
            <span>1. Folder Structure</span>
          </button>
          <button
            id="tab-types-btn"
            onClick={() => setActiveSubTab('types')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeSubTab === 'types'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <FileCode className="w-4 h-4 text-[#8C734B]" />
            <span>2. TypeScript Types</span>
          </button>
          <button
            id="tab-data-btn"
            onClick={() => setActiveSubTab('data')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeSubTab === 'data'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <Database className="w-4 h-4 text-[#8C734B]" />
            <span>3. Sample Data File</span>
          </button>
        </div>
      </div>

      {/* Code Container */}
      <div className="mt-8">
        
        {/* Structure Tab */}
        {activeSubTab === 'structure' && (
          <div className="space-y-6">
            <div className="bg-[#1E332A] text-stone-100 rounded-3xl p-6 sm:p-8 border border-[#2D4A3E] shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#2D4A3E]">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-[#8C734B]" />
                  <span className="text-xs font-mono font-bold text-[#EFE7DA]">
                    Next.js (App Router) + TypeScript + Tailwind CSS Production Hierarchy
                  </span>
                </div>
                <button
                  onClick={() => handleCopyCode('structure', folderStructureCode)}
                  className="px-3.5 py-1.5 rounded-full bg-[#15231D] hover:bg-[#2D4A3E] text-xs font-medium text-[#EFE7DA] flex items-center space-x-1.5 transition-colors cursor-pointer border border-[#8C734B]/40"
                >
                  {copiedSection === 'structure' ? <Check className="w-3.5 h-3.5 text-[#8C734B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === 'structure' ? 'Copied' : 'Copy Structure'}</span>
                </button>
              </div>

              <pre className="mt-4 text-xs sm:text-sm font-mono leading-relaxed text-[#E5E1D3] overflow-x-auto p-2 scrollbar-none">
                {folderStructureCode}
              </pre>
            </div>

            {/* Architecture Highlights Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] shadow-xs space-y-2">
                <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs">
                  <Layers className="w-4 h-4 text-[#8C734B]" />
                  <span>Route Groups & Modularity</span>
                </div>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  Uses Next.js App Router route groups <code className="text-[#2D4A3E] font-bold bg-[#F8F5EB] px-1.5 py-0.5 rounded-md border border-[#E5E1D3]">(marketing)</code> to isolate landing layouts from transactional flows like <code className="text-[#2D4A3E] font-bold bg-[#F8F5EB] px-1.5 py-0.5 rounded-md border border-[#E5E1D3]">/planner</code> and dynamic SEO pages like <code className="text-[#2D4A3E] font-bold bg-[#F8F5EB] px-1.5 py-0.5 rounded-md border border-[#E5E1D3]">/ziyarat/[slug]</code>.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] shadow-xs space-y-2">
                <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs">
                  <Sparkles className="w-4 h-4 text-[#8C734B]" />
                  <span>Server Components & SEO</span>
                </div>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  Leverages React Server Components (RSC) for lightning-fast initial HTML rendering and automatic metadata generation with dynamic <code className="text-[#2D4A3E] font-bold bg-[#F8F5EB] px-1.5 py-0.5 rounded-md border border-[#E5E1D3]">opengraph-image.tsx</code> for social sharing.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#E5E1D3] shadow-xs space-y-2">
                <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs">
                  <BookOpen className="w-4 h-4 text-[#8C734B]" />
                  <span>Type-Safe Seed Architecture</span>
                </div>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  Decouples types into <code className="text-[#2D4A3E] font-bold bg-[#F8F5EB] px-1.5 py-0.5 rounded-md border border-[#E5E1D3]">/types</code> and seed data into <code className="text-[#2D4A3E] font-bold bg-[#F8F5EB] px-1.5 py-0.5 rounded-md border border-[#E5E1D3]">/data</code>, facilitating effortless transition to Supabase, Firestore, or PostgreSQL when needed.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Types Tab */}
        {activeSubTab === 'types' && (
          <div className="space-y-6">
            <div className="bg-[#1E332A] text-stone-100 rounded-3xl p-6 sm:p-8 border border-[#2D4A3E] shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#2D4A3E]">
                <div className="flex items-center space-x-2">
                  <FileCode className="w-4 h-4 text-[#8C734B]" />
                  <span className="text-xs font-mono font-bold text-[#EFE7DA]">
                    /src/types/index.ts (Complete TypeScript Interfaces)
                  </span>
                </div>
                <button
                  onClick={() => handleCopyCode('types', coreTypesCode)}
                  className="px-3.5 py-1.5 rounded-full bg-[#15231D] hover:bg-[#2D4A3E] text-xs font-medium text-[#EFE7DA] flex items-center space-x-1.5 transition-colors cursor-pointer border border-[#8C734B]/40"
                >
                  {copiedSection === 'types' ? <Check className="w-3.5 h-3.5 text-[#8C734B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === 'types' ? 'Copied' : 'Copy Types'}</span>
                </button>
              </div>

              <pre className="mt-4 text-xs sm:text-sm font-mono leading-relaxed text-[#EFE7DA] overflow-x-auto p-2 max-h-[600px] overflow-y-auto">
                {coreTypesCode}
              </pre>
            </div>
          </div>
        )}

        {/* Data Tab */}
        {activeSubTab === 'data' && (
          <div className="space-y-6">
            <div className="bg-[#1E332A] text-stone-100 rounded-3xl p-6 sm:p-8 border border-[#2D4A3E] shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#2D4A3E]">
                <div className="flex items-center space-x-2">
                  <Database className="w-4 h-4 text-[#8C734B]" />
                  <span className="text-xs font-mono font-bold text-[#EFE7DA]">
                    /src/data/sampleZiyaratData.ts (Rich Makkah & Madinah Mock Data)
                  </span>
                </div>
                <button
                  onClick={() => handleCopyCode('data', sampleDataSnippet)}
                  className="px-3.5 py-1.5 rounded-full bg-[#15231D] hover:bg-[#2D4A3E] text-xs font-medium text-[#EFE7DA] flex items-center space-x-1.5 transition-colors cursor-pointer border border-[#8C734B]/40"
                >
                  {copiedSection === 'data' ? <Check className="w-3.5 h-3.5 text-[#8C734B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === 'data' ? 'Copied' : 'Copy Sample Data'}</span>
                </button>
              </div>

              <pre className="mt-4 text-xs sm:text-sm font-mono leading-relaxed text-[#EFE7DA] overflow-x-auto p-2 max-h-[600px] overflow-y-auto">
                {sampleDataSnippet}
              </pre>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
