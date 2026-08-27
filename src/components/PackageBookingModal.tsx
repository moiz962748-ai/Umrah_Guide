import React, { useState } from 'react';
import { 
  X, Check, Calendar, Users, Hotel, ShieldCheck, 
  Sparkles, CreditCard, Plane, ArrowRight, ArrowLeft, 
  Car, Compass, Info, CheckCircle2, AlertCircle, Phone, Mail, Globe, Lock
} from 'lucide-react';
import { 
  UmrahPackage, RoomTypeId, RoomTypeOption, 
  BookingAddOn, PackageBookingFormData, BookingSummaryCalculation 
} from '../types';

export interface PackageBookingModalProps {
  packageData: UmrahPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess?: (bookingRef: string, formData: PackageBookingFormData) => void;
}

export const ROOM_TYPE_OPTIONS: RoomTypeOption[] = [
  {
    id: 'quad',
    name: 'Quad Sharing Room (4 Persons)',
    arabicName: 'غرفة رباعية مشتركة',
    occupancyDescription: 'Four single beds. Ideal for budget-conscious families or group travelers.',
    priceModifierPerPerson: -180
  },
  {
    id: 'triple',
    name: 'Triple Room (3 Persons)',
    arabicName: 'غرفة ثلاثية',
    occupancyDescription: 'Three single beds. Balanced privacy and value for family groups.',
    priceModifierPerPerson: -80
  },
  {
    id: 'double',
    name: 'Double / Twin Sharing (2 Persons)',
    arabicName: 'غرفة ثنائية / مزدوجة',
    occupancyDescription: 'One King bed or Two Twin beds. Most popular choice for couples and pairs.',
    priceModifierPerPerson: 0,
    popular: true
  },
  {
    id: 'single',
    name: 'Single Private Luxury Room (1 Person)',
    arabicName: 'غرفة مفردة خاصة',
    occupancyDescription: 'Complete private room for single occupancy with king-size bed.',
    priceModifierPerPerson: 420
  },
  {
    id: 'suite_haram_view',
    name: 'Executive Suite with Direct Haram View',
    arabicName: 'جناح تنفيذي بإطلالة مباشرة على الحرم',
    occupancyDescription: 'High-floor luxury suite with direct panoramic windows overlooking the Holy Kaaba & Haram courtyard.',
    priceModifierPerPerson: 750
  }
];

export const AVAILABLE_BOOKING_ADDONS: BookingAddOn[] = [
  {
    id: 'addon-vip-gmc',
    name: 'VIP Private GMC Yukon Airport Transfers',
    description: 'Private luxury GMC Yukon transfer between Jeddah Airport, Makkah Hotel, Madinah Hotel, and Madinah Airport.',
    priceUsd: 280,
    priceType: 'per_group',
    category: 'transport'
  },
  {
    id: 'addon-haramain-first',
    name: 'Haramain High-Speed Train First-Class Upgrade',
    description: 'First-class high-speed rail tickets between Makkah and Madinah with lounge access and refreshments.',
    priceUsd: 85,
    priceType: 'per_person',
    category: 'transport'
  },
  {
    id: 'addon-private-mutawwif',
    name: 'Dedicated Private Scholar / Mutawwif Guide',
    description: 'Certified bilingual Islamic scholar to personally guide your Tawaf, Sa\'i, and historical Ziyarat sites in Makkah and Madinah.',
    priceUsd: 190,
    priceType: 'per_group',
    category: 'spiritual'
  },
  {
    id: 'addon-wheelchair-mutawwif',
    name: 'Dedicated Wheelchair Assistance with Helper for Tawaf & Sa\'i',
    description: 'Full physical wheelchair service with an authorized attendant for all 7 circuits of Tawaf and 7 laps of Sa\'i.',
    priceUsd: 95,
    priceType: 'per_person',
    category: 'support'
  },
  {
    id: 'addon-rawdah-nusuk-assist',
    name: 'VIP Nusuk Permit Concierge & Slot Assurance',
    description: 'Personalized coordination for guaranteed Nusuk Rawdah Sharif permits and scheduling for men and women.',
    priceUsd: 40,
    priceType: 'per_person',
    category: 'spiritual'
  }
];

export const PackageBookingModal: React.FC<PackageBookingModalProps> = ({
  packageData,
  isOpen,
  onClose,
  onBookingSuccess
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingConfirmedRef, setBookingConfirmedRef] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<PackageBookingFormData>({
    packageId: packageData?.id || 'standard-umrah-10d',
    packageTitle: packageData?.title || 'Umrah Package',
    basePriceUsd: packageData?.priceFromUsd || 1450,
    fullName: '',
    email: '',
    phone: '',
    whatsappSameAsPhone: true,
    nationality: 'United States',
    passportNumber: '',
    passportExpiry: '',
    adultsCount: 2,
    childrenCount: 0,
    infantsCount: 0,
    departureCity: 'London (LHR)',
    departureDate: '2026-10-15',
    returnDate: '2026-10-25',
    isFlexibleDates: true,
    roomType: 'double',
    selectedAddOnIds: ['addon-vip-gmc', 'addon-rawdah-nusuk-assist'],
    specialRequests: '',
    needWheelchairAssistance: false,
    needAirportMeetAndAssist: true,
    paymentMethod: 'pay_on_arrival_deposit'
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  if (!isOpen || !packageData) return null;

  // Calculation Engine
  const calculatePricing = (): BookingSummaryCalculation => {
    const selectedRoom = ROOM_TYPE_OPTIONS.find(r => r.id === formData.roomType) || ROOM_TYPE_OPTIONS[2];
    const basePerPerson = packageData.priceFromUsd;
    const roomAdjustmentPerPerson = selectedRoom.priceModifierPerPerson;
    const effectivePerPerson = Math.max(200, basePerPerson + roomAdjustmentPerPerson);
    
    const adults = formData.adultsCount;
    const children = formData.childrenCount;
    const infants = formData.infantsCount;
    const totalTravelers = adults + children + infants;

    // Adults full price, children (2-11) 75% price, infants (<2) 15% visa/admin fee
    const travelersSubtotal = (adults * effectivePerPerson) + (children * (effectivePerPerson * 0.75)) + (infants * 150);

    // Addons calculation
    let addOnsSubtotal = 0;
    formData.selectedAddOnIds.forEach(id => {
      const addon = AVAILABLE_BOOKING_ADDONS.find(a => a.id === id);
      if (addon) {
        if (addon.priceType === 'per_person') {
          addOnsSubtotal += addon.priceUsd * (adults + children);
        } else {
          addOnsSubtotal += addon.priceUsd;
        }
      }
    });

    const taxesAndVisaFees = totalTravelers * 45; // Saudi Tourism & Municipal fees
    const totalPriceUsd = Math.round(travelersSubtotal + addOnsSubtotal + taxesAndVisaFees);
    const depositDueNow = Math.round(totalPriceUsd * 0.20); // 20% commitment deposit

    return {
      basePerPerson,
      roomAdjustmentPerPerson,
      effectivePerPerson,
      travelersCount: totalTravelers,
      travelersSubtotal,
      addOnsSubtotal,
      taxesAndVisaFees,
      totalPriceUsd,
      depositDueNow
    };
  };

  const pricing = calculatePricing();

  const handleInputChange = (field: keyof PackageBookingFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleAddOn = (addonId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedAddOnIds: prev.selectedAddOnIds.includes(addonId)
        ? prev.selectedAddOnIds.filter(id => id !== addonId)
        : [...prev.selectedAddOnIds, addonId]
    }));
  };

  const validateStep1 = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid Email Address is required';
    if (!formData.phone.trim()) errors.phone = 'Phone / WhatsApp number is required';
    if (!formData.departureCity.trim()) errors.departureCity = 'Departure City is required';
    if (!formData.departureDate) errors.departureDate = 'Departure date is required';
    if (formData.adultsCount < 1) errors.adultsCount = 'At least 1 adult traveler is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handleConfirmBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = `UMR-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingConfirmedRef(generatedRef);
      setIsSubmitting(false);
      if (onBookingSuccess) {
        onBookingSuccess(generatedRef, formData);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#15231D]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FDFCF6] rounded-3xl border border-[#E5E1D3] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="bg-[#2D4A3E] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#1E332A]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs text-[#EFE7DA]">
              <span className="bg-[#1E332A] px-3 py-0.5 rounded-full font-bold uppercase tracking-wider text-[#8C734B] border border-[#8C734B]/30">
                Direct Package Reservation
              </span>
              <span>•</span>
              <span className="capitalize">{packageData.tier} Tier</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#FDFCF6]">
              {packageData.title}
            </h2>
            <p className="text-xs text-[#E5E1D3]">
              {packageData.durationNights.makkah} Nights Makkah ({packageData.makkahHotel}) + {packageData.durationNights.madinah} Nights Madinah ({packageData.madinahHotel})
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1E332A] hover:bg-[#15231D] text-[#EFE7DA] flex items-center justify-center transition-colors cursor-pointer border border-[#8C734B]/30"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Step Stepper Bar (if not yet confirmed) */}
        {!bookingConfirmedRef && (
          <div className="bg-[#F8F5EB] border-b border-[#E5E1D3] px-6 py-3">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              
              {/* Step 1 */}
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 1 ? 'bg-[#2D4A3E] text-white' : 'bg-[#E5E1D3] text-[#5C564E]'
                }`}>
                  {currentStep > 1 ? <Check className="w-3.5 h-3.5" /> : '1'}
                </div>
                <span className={`text-xs font-semibold ${currentStep === 1 ? 'text-[#2D4A3E] font-bold' : 'text-[#5C564E]'}`}>
                  Pilgrim & Travel Dates
                </span>
              </div>

              <div className="w-8 sm:w-12 h-0.5 bg-[#E5E1D3]" />

              {/* Step 2 */}
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 2 ? 'bg-[#2D4A3E] text-white' : 'bg-[#E5E1D3] text-[#5C564E]'
                }`}>
                  {currentStep > 2 ? <Check className="w-3.5 h-3.5" /> : '2'}
                </div>
                <span className={`text-xs font-semibold ${currentStep === 2 ? 'text-[#2D4A3E] font-bold' : 'text-[#5C564E]'}`}>
                  Room & VIP Add-ons
                </span>
              </div>

              <div className="w-8 sm:w-12 h-0.5 bg-[#E5E1D3]" />

              {/* Step 3 */}
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep === 3 ? 'bg-[#2D4A3E] text-white' : 'bg-[#E5E1D3] text-[#5C564E]'
                }`}>
                  3
                </div>
                <span className={`text-xs font-semibold ${currentStep === 3 ? 'text-[#2D4A3E] font-bold' : 'text-[#5C564E]'}`}>
                  Review & Confirm
                </span>
              </div>

            </div>
          </div>
        )}

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* CONFIRMATION STATE */}
          {bookingConfirmedRef ? (
            <div className="text-center py-8 px-4 space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9 text-[#8C734B]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C734B] bg-[#F8F5EB] px-3.5 py-1 rounded-full border border-[#E5E1D3]">
                  Reservation Successfully Received
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#2D2A26]">
                  Jazak Allah Khayran, {formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-[#5C564E]">
                  Your reservation for <strong>{packageData.title}</strong> has been created. A certified pilgrimage advisor has been assigned to your booking.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-[#F8F5EB] rounded-3xl p-5 border border-[#E5E1D3] text-left space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#E5E1D3]">
                  <span className="text-[#8C867A] font-bold uppercase tracking-wider">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#2D4A3E] text-sm bg-white px-2 py-0.5 rounded-md border border-[#E5E1D3]">
                    {bookingConfirmedRef}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C564E]">Travel Dates:</span>
                  <span className="font-semibold text-[#2D2A26]">{formData.departureDate} to {formData.returnDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C564E]">Room Configuration:</span>
                  <span className="font-semibold text-[#2D2A26]">
                    {ROOM_TYPE_OPTIONS.find(r => r.id === formData.roomType)?.name.split('(')[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C564E]">Total Travelers:</span>
                  <span className="font-semibold text-[#2D2A26]">{pricing.travelersCount} Persons ({formData.adultsCount} Adults{formData.childrenCount > 0 ? `, ${formData.childrenCount} Children` : ''})</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E5E1D3] text-sm font-bold text-[#2D4A3E]">
                  <span>Total Estimated Cost:</span>
                  <span>${pricing.totalPriceUsd.toLocaleString()} USD</span>
                </div>
              </div>

              <div className="text-xs text-[#5C564E] bg-white p-4 rounded-2xl border border-[#E5E1D3]">
                An official confirmation invoice, visa verification checklist, and Nusuk permit guidelines have been sent to <strong>{formData.email}</strong> and WhatsApp <strong>{formData.phone}</strong>.
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-full bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
              >
                Return to Packages & Guide
              </button>
            </div>
          ) : (
            <>
              {/* STEP 1: Pilgrim & Travel Dates */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  
                  {/* Personal Contact Details */}
                  <div className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#2D4A3E] flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#8C734B]" />
                      <span>Primary Pilgrim / Lead Traveler Details</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      
                      {/* Full Name */}
                      <div className="space-y-1">
                        <label className="font-bold text-[#2D2A26] block">
                          Full Name (as in Passport) <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="e.g. Ibrahim Abdullah"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E1D3] focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] text-[#2D2A26]"
                        />
                        {formErrors.fullName && <p className="text-rose-600 text-[11px]">{formErrors.fullName}</p>}
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1">
                        <label className="font-bold text-[#2D2A26] block">
                          Email Address <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="pilgrim@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E1D3] focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] text-[#2D2A26]"
                        />
                        {formErrors.email && <p className="text-rose-600 text-[11px]">{formErrors.email}</p>}
                      </div>

                      {/* Phone / WhatsApp */}
                      <div className="space-y-1">
                        <label className="font-bold text-[#2D2A26] block">
                          Phone / WhatsApp Number <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 234-5678"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E1D3] focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] text-[#2D2A26]"
                        />
                        {formErrors.phone && <p className="text-rose-600 text-[11px]">{formErrors.phone}</p>}
                      </div>

                      {/* Nationality */}
                      <div className="space-y-1">
                        <label className="font-bold text-[#2D2A26] block">
                          Nationality / Country of Passport
                        </label>
                        <select
                          value={formData.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E1D3] focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] text-[#2D2A26]"
                        >
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="India">India</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Other">Other Country</option>
                        </select>
                      </div>

                    </div>
                  </div>

                  {/* Group Size Counts */}
                  <div className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#2D4A3E] flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#8C734B]" />
                      <span>Number of Travelers</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      
                      {/* Adults */}
                      <div className="bg-white p-3.5 rounded-2xl border border-[#E5E1D3] flex items-center justify-between">
                        <div>
                          <span className="font-bold text-[#2D2A26] block">Adults</span>
                          <span className="text-[#8C867A] text-[11px]">Age 12+</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => handleInputChange('adultsCount', Math.max(1, formData.adultsCount - 1))}
                            className="w-7 h-7 rounded-lg bg-[#F8F5EB] hover:bg-[#EFE7DA] text-[#2D4A3E] font-bold flex items-center justify-center border border-[#E5E1D3]"
                          >
                            -
                          </button>
                          <span className="font-bold text-sm text-[#2D2A26] w-4 text-center">{formData.adultsCount}</span>
                          <button
                            type="button"
                            onClick={() => handleInputChange('adultsCount', formData.adultsCount + 1)}
                            className="w-7 h-7 rounded-lg bg-[#2D4A3E] text-white font-bold flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="bg-white p-3.5 rounded-2xl border border-[#E5E1D3] flex items-center justify-between">
                        <div>
                          <span className="font-bold text-[#2D2A26] block">Children</span>
                          <span className="text-[#8C867A] text-[11px]">Age 2 - 11 (25% off)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => handleInputChange('childrenCount', Math.max(0, formData.childrenCount - 1))}
                            className="w-7 h-7 rounded-lg bg-[#F8F5EB] hover:bg-[#EFE7DA] text-[#2D4A3E] font-bold flex items-center justify-center border border-[#E5E1D3]"
                          >
                            -
                          </button>
                          <span className="font-bold text-sm text-[#2D2A26] w-4 text-center">{formData.childrenCount}</span>
                          <button
                            type="button"
                            onClick={() => handleInputChange('childrenCount', formData.childrenCount + 1)}
                            className="w-7 h-7 rounded-lg bg-[#2D4A3E] text-white font-bold flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Infants */}
                      <div className="bg-white p-3.5 rounded-2xl border border-[#E5E1D3] flex items-center justify-between">
                        <div>
                          <span className="font-bold text-[#2D2A26] block">Infants</span>
                          <span className="text-[#8C867A] text-[11px]">Under 2 ($150 fee)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => handleInputChange('infantsCount', Math.max(0, formData.infantsCount - 1))}
                            className="w-7 h-7 rounded-lg bg-[#F8F5EB] hover:bg-[#EFE7DA] text-[#2D4A3E] font-bold flex items-center justify-center border border-[#E5E1D3]"
                          >
                            -
                          </button>
                          <span className="font-bold text-sm text-[#2D2A26] w-4 text-center">{formData.infantsCount}</span>
                          <button
                            type="button"
                            onClick={() => handleInputChange('infantsCount', formData.infantsCount + 1)}
                            className="w-7 h-7 rounded-lg bg-[#2D4A3E] text-white font-bold flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Travel Dates & Origin */}
                  <div className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#2D4A3E] flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#8C734B]" />
                      <span>Travel Dates & Departure Airport</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      
                      <div className="space-y-1">
                        <label className="font-bold text-[#2D2A26] block">
                          Departure City / Airport <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.departureCity}
                          onChange={(e) => handleInputChange('departureCity', e.target.value)}
                          placeholder="e.g. New York (JFK), London (LHR)"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E1D3] focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] text-[#2D2A26]"
                        />
                        {formErrors.departureCity && <p className="text-rose-600 text-[11px]">{formErrors.departureCity}</p>}
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-[#2D2A26] block">
                          Target Departure Date <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.departureDate}
                          onChange={(e) => handleInputChange('departureDate', e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E1D3] focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] text-[#2D2A26]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-[#2D2A26] block">
                          Target Return Date
                        </label>
                        <input
                          type="date"
                          value={formData.returnDate}
                          onChange={(e) => handleInputChange('returnDate', e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E1D3] focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] text-[#2D2A26]"
                        />
                      </div>

                    </div>

                    <div className="pt-2 flex items-center space-x-2 text-xs text-[#5C564E]">
                      <input
                        type="checkbox"
                        id="chk-flexible"
                        checked={formData.isFlexibleDates}
                        onChange={(e) => handleInputChange('isFlexibleDates', e.target.checked)}
                        className="rounded border-[#E5E1D3] text-[#2D4A3E] focus:ring-[#2D4A3E]"
                      />
                      <label htmlFor="chk-flexible" className="cursor-pointer">
                        My travel dates are flexible by ±3 days for best airline pricing
                      </label>
                    </div>
                  </div>

                </div>
              )}

              {/* STEP 2: Room & VIP Add-ons */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  
                  {/* Room Type Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#2D4A3E] flex items-center space-x-2">
                        <Hotel className="w-4 h-4 text-[#8C734B]" />
                        <span>Select Hotel Room Occupancy Tier</span>
                      </h3>
                      <span className="text-xs text-[#8C867A]">
                        Both in Makkah & Madinah
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ROOM_TYPE_OPTIONS.map((room) => {
                        const isSelected = formData.roomType === room.id;
                        return (
                          <div
                            key={room.id}
                            onClick={() => handleInputChange('roomType', room.id)}
                            className={`p-4 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                              isSelected
                                ? 'bg-[#2D4A3E] text-white border-[#1E332A] shadow-md ring-2 ring-[#8C734B]/40'
                                : 'bg-[#F8F5EB] text-[#2D2A26] border-[#E5E1D3] hover:bg-[#EFE7DA]'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-serif font-bold text-sm">
                                    {room.name}
                                  </h4>
                                  {room.popular && (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#8C734B] text-white">
                                      Most Popular
                                    </span>
                                  )}
                                </div>
                                <p className={`text-[11px] font-arabic mt-0.5 ${isSelected ? 'text-[#EFE7DA]' : 'text-[#8C867A]'}`}>
                                  {room.arabicName}
                                </p>
                              </div>

                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 ${
                                isSelected ? 'bg-[#8C734B] border-transparent text-white font-bold' : 'border-[#C4B59D] bg-white'
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>

                            <p className={`text-xs leading-relaxed ${isSelected ? 'text-[#E5E1D3]' : 'text-[#5C564E]'}`}>
                              {room.occupancyDescription}
                            </p>

                            <div className="pt-2 border-t border-black/10 flex items-center justify-between text-xs font-semibold">
                              <span>Pricing:</span>
                              <span className={isSelected ? 'text-[#EFE7DA] font-bold' : 'text-[#2D4A3E] font-bold'}>
                                {room.priceModifierPerPerson === 0 
                                  ? 'Included in Base Price' 
                                  : room.priceModifierPerPerson > 0 
                                    ? `+$${room.priceModifierPerPerson}/person` 
                                    : `Save $${Math.abs(room.priceModifierPerPerson)}/person`}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Add-ons List */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#2D4A3E] flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#8C734B]" />
                      <span>Customizable VIP Logistics & Spiritual Add-ons</span>
                    </h3>

                    <div className="space-y-2.5">
                      {AVAILABLE_BOOKING_ADDONS.map((addon) => {
                        const isChecked = formData.selectedAddOnIds.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddOn(addon.id)}
                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                              isChecked
                                ? 'bg-white border-[#8C734B] shadow-xs'
                                : 'bg-[#F8F5EB] border-[#E5E1D3] hover:bg-white'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs mt-0.5 shrink-0 ${
                                isChecked ? 'bg-[#2D4A3E] border-[#2D4A3E] text-white' : 'border-[#C4B59D] bg-white'
                              }`}>
                                {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>

                              <div className="space-y-0.5">
                                <span className="font-bold text-xs text-[#2D2A26] block">
                                  {addon.name}
                                </span>
                                <p className="text-[11px] text-[#5C564E]">
                                  {addon.description}
                                </p>
                              </div>
                            </div>

                            <div className="text-right shrink-0">
                              <span className="text-xs font-bold text-[#2D4A3E] block">
                                +${addon.priceUsd}
                              </span>
                              <span className="text-[10px] text-[#8C867A] uppercase">
                                {addon.priceType === 'per_person' ? 'Per Person' : 'Per Group'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="bg-[#F8F5EB] rounded-3xl p-5 border border-[#E5E1D3] space-y-2 text-xs">
                    <label className="font-bold text-[#2D2A26] block">
                      Special Dietary, Accessibility, or Flight Coordination Notes:
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="e.g. Need adjacent rooms for family, wheelchair airport pickup, vegan meal preferences..."
                      className="w-full p-3 rounded-xl bg-white border border-[#E5E1D3] focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E] text-[#2D2A26]"
                    />
                  </div>

                </div>
              )}

              {/* STEP 3: Review & Instant Confirmation */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  
                  {/* Summary Comparison & Price Breakdown */}
                  <div className="bg-[#F8F5EB] rounded-3xl p-6 border border-[#E5E1D3] space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5E1D3]">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C867A] block">Selected Package:</span>
                        <h4 className="text-lg font-serif font-bold text-[#2D4A3E]">
                          {packageData.title}
                        </h4>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-[#2D4A3E] text-[#EFE7DA] rounded-full">
                        {packageData.durationNights.total} Nights Total
                      </span>
                    </div>

                    {/* Breakdown List */}
                    <div className="space-y-2.5 text-xs text-[#5C564E]">
                      <div className="flex justify-between">
                        <span>Lead Pilgrim:</span>
                        <span className="font-bold text-[#2D2A26]">{formData.fullName} ({formData.nationality})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contact Information:</span>
                        <span className="font-bold text-[#2D2A26]">{formData.email} • {formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Travelers:</span>
                        <span className="font-bold text-[#2D2A26]">
                          {formData.adultsCount} Adults{formData.childrenCount > 0 ? `, ${formData.childrenCount} Children` : ''}{formData.infantsCount > 0 ? `, ${formData.infantsCount} Infants` : ''}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Room Choice:</span>
                        <span className="font-bold text-[#2D2A26]">
                          {ROOM_TYPE_OPTIONS.find(r => r.id === formData.roomType)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Selected Add-ons ({formData.selectedAddOnIds.length}):</span>
                        <span className="font-bold text-[#2D2A26]">
                          {formData.selectedAddOnIds.length === 0 ? 'None' : `+ $${pricing.addOnsSubtotal}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxes, Ground Handling & Saudi Visa Fees:</span>
                        <span className="font-bold text-[#2D2A26]">${pricing.taxesAndVisaFees}</span>
                      </div>

                      {/* Total Calculation Line */}
                      <div className="pt-3 border-t border-[#E5E1D3] flex items-center justify-between text-base font-bold text-[#2D4A3E]">
                        <span>Grand Total (All In):</span>
                        <span className="text-xl font-serif text-[#2D4A3E]">
                          ${pricing.totalPriceUsd.toLocaleString()} USD
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#8C734B] font-semibold bg-white p-3 rounded-xl border border-[#E5E1D3]">
                        <span>Deposit Required to Secure Guaranteed Hotel Booking (20%):</span>
                        <span>${pricing.depositDueNow.toLocaleString()} USD</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Preference */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D4A3E]">
                      Select Reservation Payment Preference:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      {[
                        {
                          id: 'pay_on_arrival_deposit',
                          title: '20% Deposit Online',
                          desc: 'Secure hotels today, pay remaining balance upon arrival in Makkah'
                        },
                        {
                          id: 'credit_card',
                          title: 'Full Payment (Visa/MC)',
                          desc: 'Instant full settlement with 100% money-back booking guarantee'
                        },
                        {
                          id: 'bank_transfer',
                          title: 'Wire / Bank Transfer',
                          desc: 'Receive official invoice with SWIFT/IBAN corporate details'
                        }
                      ].map(pay => (
                        <div
                          key={pay.id}
                          onClick={() => handleInputChange('paymentMethod', pay.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                            formData.paymentMethod === pay.id
                              ? 'bg-white border-[#2D4A3E] ring-2 ring-[#2D4A3E]/30 shadow-xs'
                              : 'bg-[#F8F5EB] border-[#E5E1D3] hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[#2D2A26]">{pay.title}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                              formData.paymentMethod === pay.id ? 'bg-[#2D4A3E] text-white' : 'border-[#C4B59D]'
                            }`}>
                              {formData.paymentMethod === pay.id && <Check className="w-2.5 h-2.5" />}
                            </div>
                          </div>
                          <p className="text-[11px] text-[#5C564E]">{pay.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-[11px] text-[#5C564E] bg-[#F8F5EB] p-3 rounded-2xl border border-[#E5E1D3]">
                    <Lock className="w-4 h-4 text-[#8C734B] shrink-0" />
                    <span>256-bit Encrypted Reservation Engine • Official Ministry of Hajj & Umrah authorized partner standards.</span>
                  </div>

                </div>
              )}
            </>
          )}

        </div>

        {/* Modal Footer Controls */}
        {!bookingConfirmedRef && (
          <div className="bg-[#F8F5EB] border-t border-[#E5E1D3] p-4 sm:p-6 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => (prev - 1) as any)}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-[#EFE7DA] text-xs font-semibold text-[#2D4A3E] border border-[#E5E1D3] flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-[#EFE7DA] text-xs font-semibold text-[#5C564E] border border-[#E5E1D3] transition-colors cursor-pointer"
              >
                Cancel
              </button>
            )}

            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <span className="text-[10px] text-[#8C867A] uppercase font-bold block">Estimated Total:</span>
                <span className="text-sm font-bold font-serif text-[#2D4A3E]">${pricing.totalPriceUsd.toLocaleString()} USD</span>
              </div>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-2.5 rounded-full bg-[#2D4A3E] hover:bg-[#1E332A] text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Proceed to {currentStep === 1 ? 'Room & Add-ons' : 'Review & Confirm'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleConfirmBooking}
                  className="px-8 py-2.5 rounded-full bg-[#8C734B] hover:bg-[#78613C] text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Creating Reservation...</span>
                  ) : (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Confirm & Lock My Umrah Package</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
