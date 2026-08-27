import { Hotel, UmrahPackage } from '../types';

export const HOTELS_DATA: Hotel[] = [
  // Makkah Hotels
  {
    id: 'makkah-makkah-clock-royal-tower',
    name: 'Makkah Clock Royal Tower, A Fairmont Hotel',
    arabicName: 'فندق برج ساعة مكة فيرمونت',
    city: 'Makkah',
    starRating: 5,
    distanceToHaramMeters: 50,
    walkTimeToHaramMinutes: 1,
    viewTypes: ['kaaba', 'haram'],
    amenities: [
      'Direct Haram Courtyard Elevator',
      'Kaaba & Haram Panorama Suites',
      '9 World-Class Restaurants',
      '24-Hour Live Haram Audio Stream',
      'Full Concierge & VIP Luggage Service',
      'Executive Lounge with Kaaba View'
    ],
    pricePerNightUsd: 380,
    address: 'King Abdul Aziz Endowment, Abraj Al Bait Complex, Makkah 21955',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80'
    ],
    ratingScore: 4.9,
    reviewsCount: 3840,
    highlightBadge: 'Direct Kaaba Front'
  },
  {
    id: 'makkah-jabal-omar-hyatt-regency',
    name: 'Jabal Omar Hyatt Regency Makkah',
    arabicName: 'حياة ريجنسي مكة جبل عمر',
    city: 'Makkah',
    starRating: 5,
    distanceToHaramMeters: 120,
    walkTimeToHaramMinutes: 2,
    viewTypes: ['haram', 'city'],
    amenities: [
      'Seamless King Fahad Gate Access',
      'Spacious Family Suites',
      'The Oasis Restaurant with Live Cooking',
      'High-Speed Wi-Fi & Business Center',
      'Separate Fitness Facilities for Men & Women'
    ],
    pricePerNightUsd: 290,
    address: 'Ibrahim Al Khalil St, Jabal Omar, Makkah 21955',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    ratingScore: 4.8,
    reviewsCount: 2410,
    highlightBadge: 'Top Family Choice'
  },
  {
    id: 'makkah-swissotel-al-maqam',
    name: 'Swissôtel Al Maqam Makkah',
    arabicName: 'سويس أوتيل المقام مكة',
    city: 'Makkah',
    starRating: 5,
    distanceToHaramMeters: 80,
    walkTimeToHaramMinutes: 2,
    viewTypes: ['kaaba', 'haram'],
    amenities: [
      'Direct Private Indoor Access to Abraj Mall & Haram',
      'Al Ruwad International Buffet',
      'Pristine Contemporary Swiss Hospitality',
      'Spacious Quad Rooms for Groups'
    ],
    pricePerNightUsd: 310,
    address: 'Abraj Al Bait Complex, King Abdul Aziz Endowment, Makkah 24231',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80'
    ],
    ratingScore: 4.8,
    reviewsCount: 2980,
    highlightBadge: 'Best Value Luxury'
  },
  {
    id: 'makkah-dorrar-al-eman',
    name: 'Al Safwah Royale Orchid Hotel',
    arabicName: 'فندق الصفوة رويال أوركيد',
    city: 'Makkah',
    starRating: 5,
    distanceToHaramMeters: 30,
    walkTimeToHaramMinutes: 1,
    viewTypes: ['kaaba', 'haram'],
    amenities: [
      'Right in Front of King Abdulaziz Gate',
      'Panoramic Kaaba Window View Rooms',
      '3 Arabic & Asian Specialty Restaurants',
      'Wheelchair Ramps Directly to Courtyard'
    ],
    pricePerNightUsd: 260,
    address: 'Ajyad St, Facing King Abdulaziz Gate, Makkah 21955',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80'
    ],
    ratingScore: 4.7,
    reviewsCount: 1870
  },

  // Madinah Hotels
  {
    id: 'madinah-the-oberoi',
    name: 'The Oberoi, Madina',
    arabicName: 'فندق أوبروي المدينة',
    city: 'Madinah',
    starRating: 5,
    distanceToHaramMeters: 40,
    walkTimeToHaramMinutes: 1,
    viewTypes: ['haram', 'city'],
    amenities: [
      'Direct Northern Courtyard Step-out',
      'Unsurpassed 5-Star Butler Service',
      'Al Ansar & Kyoto Specialty Restaurants',
      'Dedicated Ladies Gate Proximity',
      'Luxury Health Spa & Steam Rooms'
    ],
    pricePerNightUsd: 420,
    address: 'Northern Central Area, Bada\'ah, Madinah 42311',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80'
    ],
    ratingScore: 4.9,
    reviewsCount: 2150,
    highlightBadge: 'Pinnacle of Elegance'
  },
  {
    id: 'madinah-dar-al-taqwa',
    name: 'Dar Al Taqwa Hotel Madinah',
    arabicName: 'فندق دار التقوى المدينة',
    city: 'Madinah',
    starRating: 5,
    distanceToHaramMeters: 20,
    walkTimeToHaramMinutes: 1,
    viewTypes: ['haram'],
    amenities: [
      'Directly Facing the Prophet\'s Mosque Ladies Gate',
      'Tea Garden Lounge with Courtyard View',
      'Al Marwa Restaurant with International Buffet',
      'VIP Personalized Check-in'
    ],
    pricePerNightUsd: 340,
    address: 'Facing the Prophet\'s Holy Mosque, Central Area, Madinah 42311',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    ratingScore: 4.8,
    reviewsCount: 1940,
    highlightBadge: 'Closest to Rawdah'
  },
  {
    id: 'madinah-anwar-al-madinah-movenpick',
    name: 'Anwar Al Madinah Mövenpick Hotel',
    arabicName: 'فندق أنوار المدينة موڤنبيك',
    city: 'Madinah',
    starRating: 5,
    distanceToHaramMeters: 80,
    walkTimeToHaramMinutes: 2,
    viewTypes: ['haram', 'city'],
    amenities: [
      'Integrated Shopping Center with 350+ Stores',
      'Four Distinct Culinary Dining Venues',
      'Extensive Underground Parking',
      'Dedicated Tour Booking Counter'
    ],
    pricePerNightUsd: 210,
    address: 'Central Area, Madinah 42311',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80'
    ],
    ratingScore: 4.7,
    reviewsCount: 4120,
    highlightBadge: 'Best for Groups'
  }
];

export const PACKAGES_DATA: UmrahPackage[] = [
  {
    id: 'royal-haram-view-10d',
    title: 'Royal Platinum Kaaba & Rawdah View',
    arabicSubtitle: 'الباقة الملكية البلاتينية مع إطلالة الكعبة والروضة',
    durationNights: { makkah: 5, madinah: 5, total: 10 },
    tier: 'vip_royal',
    makkahHotel: 'Makkah Clock Royal Tower, A Fairmont Hotel',
    madinahHotel: 'The Oberoi, Madina',
    badge: 'Exclusive Luxury',
    rating: 4.95,
    priceFromUsd: 2850,
    features: [
      'Guaranteed Direct Kaaba & Haram View Suites',
      'Private Haramain High-Speed Train VIP Class Transfers',
      'Dedicated Scholar / Guide for Private Ziyarat',
      'Pre-Arranged Nusuk Rawdah Permits with Flexible Time-Slots',
      'Full Board Gourmet Dining (Breakfast & Dinner Buffet)'
    ],
    inclusions: [
      '5 Nights at Makkah Clock Royal Tower (Kaaba View Suite)',
      '5 Nights at The Oberoi Madinah (Haram View Room)',
      'VIP Airport Meet & Greet with Luxury GMC Yukon XL Transfers',
      'Curated Private Ziyarat in Makkah (Hira, Thawr, Arafat, Mina)',
      'Curated Private Ziyarat in Madinah (Quba, Uhud, Qiblatayn, Baqi)',
      'Complimentary 5L Blessed Zamzam Water Box on Departure',
      'Saudi Umrah Tourist Visa Processing & Medical Insurance'
    ],
    exclusions: [
      'International Flight Airfares',
      'Personal Laundry and Room Service Incidentals',
      'Optional Taif day trip excursion'
    ],
    itineraryHighlights: [
      {
        day: 1,
        city: 'Makkah',
        title: 'Arrival in Jeddah & VIP Transfer to Makkah',
        activities: [
          'VIP Airport reception at King Abdulaziz International Airport Jeddah',
          'Private chauffeured transfer to Makkah Clock Royal Tower',
          'Hotel check-in and orientation with religious guide',
          'Perform Umrah with guide assistance at night'
        ]
      },
      {
        day: 3,
        city: 'Makkah',
        title: 'Historical Makkah Ziyarat Expedition',
        activities: [
          'Morning visit to Jabal al-Nour & Revelation Cultural District',
          'Panoramic view of Mount Arafat, Jabal ar-Rahmah, and Mina Valley',
          'Evening voluntary Tawaf and Quran recitation in the Haram'
        ]
      },
      {
        day: 6,
        city: 'Madinah',
        title: 'Haramain High-Speed Train to Madinah Al-Munawwarah',
        activities: [
          'First-Class Haramain bullet train journey (approx. 2 hours 15 mins)',
          'Check-in at The Oberoi Madinah',
          'Perform Salam at the Sacred Chamber of the Prophet ﷺ',
          'Scheduled appointment for prayer in Ar-Rawdah ash-Sharifah'
        ]
      },
      {
        day: 8,
        city: 'Madinah',
        title: 'Historic Madinah Sunnah & Battlefield Tour',
        activities: [
          'Saturday Sunnah walk/drive along Darb as-Sunnah to Masjid Quba (Umrah reward)',
          'Visit Mount Uhud, Archers\' Hill, and Martyrs Cemetery (Hamza RA)',
          'Explore Masjid al-Qiblatayn and the Seven Mosques site'
        ]
      }
    ]
  },
  {
    id: 'classic-family-blessing-12d',
    title: 'Classic Spiritual Journey for Families',
    arabicSubtitle: 'رحلة البركة العائلية الكلاسيكية',
    durationNights: { makkah: 6, madinah: 6, total: 12 },
    tier: 'premium',
    makkahHotel: 'Jabal Omar Hyatt Regency Makkah',
    madinahHotel: 'Dar Al Taqwa Hotel Madinah',
    badge: 'Most Popular',
    rating: 4.88,
    priceFromUsd: 1750,
    features: [
      'Within 2-Minute Walk to Both Harams',
      'Daily International Breakfast Buffet Included',
      'Group Air-Conditioned Cooled Coach Ziyarat Tours',
      'Assistance with Nusuk Registration & Umrah Slots'
    ],
    inclusions: [
      '6 Nights in Makkah at Jabal Omar Hyatt Regency',
      '6 Nights in Madinah at Dar Al Taqwa Hotel',
      'Comfortable Inter-City transfers via Haramain Train Economy Plus',
      'Guided comprehensive Ziyarat in Makkah & Madinah',
      'Electronic Visa assistance and arrival SIM card package'
    ],
    exclusions: [
      'International flights',
      'Lunches and dinners',
      'Wheelchair attendant services (available on request)'
    ],
    itineraryHighlights: [
      {
        day: 1,
        city: 'Makkah',
        title: 'Arrival and First Umrah',
        activities: [
          'Arrival at Jeddah, transfer to Makkah hotel, perform first Umrah at peaceful late evening.'
        ]
      },
      {
        day: 4,
        city: 'Makkah',
        title: 'Makkah Historical Sites',
        activities: [
          'Visit Cave of Hira Cultural District, Jannat al-Mualla cemetery, and Mount Arafat.'
        ]
      },
      {
        day: 7,
        city: 'Madinah',
        title: 'Transfer to Madinah & Salam at Rawdah',
        activities: [
          'Scenic Haramain train ride, hotel check-in, greeting the Prophet ﷺ.'
        ]
      },
      {
        day: 10,
        city: 'Madinah',
        title: 'Quba & Uhud Ziyarat Day',
        activities: [
          'Pray 2 Rak\'ah at Masjid Quba, pay respects at Uhud Shuhada cemetery, visit Date market.'
        ]
      }
    ]
  },
  {
    id: 'sunnah-economy-essential-7d',
    title: 'Sunnah Economy Essential Umrah',
    arabicSubtitle: 'باقة السنة الاقتصادية الأساسية',
    durationNights: { makkah: 4, madinah: 3, total: 7 },
    tier: 'standard',
    makkahHotel: 'Swissôtel Al Maqam Makkah',
    madinahHotel: 'Anwar Al Madinah Mövenpick Hotel',
    badge: 'Best Value',
    rating: 4.76,
    priceFromUsd: 1190,
    features: [
      'Prime Courtyard Proximity Without Shuttle Buses',
      'Ideal for Short Vacation or Weekend Spiritual Retreats',
      'Essential Guided Ziyarat Tours Included'
    ],
    inclusions: [
      '4 Nights in Makkah & 3 Nights in Madinah',
      'Daily Breakfast',
      'Private High-Speed Train Tickets between Makkah & Madinah',
      'Experienced English/Arabic Speaking Guide'
    ],
    exclusions: [
      'International Air Tickets',
      'Personal Expenses'
    ],
    itineraryHighlights: [
      {
        day: 1,
        city: 'Makkah',
        title: 'Arrival & Umrah Rites',
        activities: ['Arrive Makkah, complete Tawaf, Saee, and Tahalul.']
      },
      {
        day: 5,
        city: 'Madinah',
        title: 'Madinah Arrival & Rawdah Visit',
        activities: ['Haramain train to Madinah, prayer in Prophet\'s Mosque.']
      }
    ]
  }
];
