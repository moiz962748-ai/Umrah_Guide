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
}

export type RoomTypeId = 'quad' | 'triple' | 'double' | 'single' | 'suite_haram_view';

export interface RoomTypeOption {
  id: RoomTypeId;
  name: string;
  arabicName: string;
  occupancyDescription: string;
  priceModifierPerPerson: number; // USD added/subtracted relative to base double occupancy
  popular?: boolean;
}

export interface BookingAddOn {
  id: string;
  name: string;
  description: string;
  priceUsd: number;
  priceType: 'per_person' | 'per_group';
  category: 'transport' | 'spiritual' | 'lodging' | 'support';
}

export interface PackageBookingFormData {
  packageId: string;
  packageTitle: string;
  basePriceUsd: number;
  // Step 1: Traveler Details
  fullName: string;
  email: string;
  phone: string;
  whatsappSameAsPhone: boolean;
  nationality: string;
  passportNumber: string;
  passportExpiry: string;
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;
  departureCity: string;
  departureDate: string;
  returnDate: string;
  isFlexibleDates: boolean;
  // Step 2: Room & Add-ons
  roomType: RoomTypeId;
  selectedAddOnIds: string[];
  specialRequests: string;
  needWheelchairAssistance: boolean;
  needAirportMeetAndAssist: boolean;
  // Payment preference
  paymentMethod: 'credit_card' | 'bank_transfer' | 'pay_on_arrival_deposit';
}

export interface BookingSummaryCalculation {
  basePerPerson: number;
  roomAdjustmentPerPerson: number;
  effectivePerPerson: number;
  travelersCount: number;
  travelersSubtotal: number;
  addOnsSubtotal: number;
  taxesAndVisaFees: number;
  totalPriceUsd: number;
  depositDueNow: number;
}
