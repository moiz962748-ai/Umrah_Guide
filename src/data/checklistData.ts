import { ChecklistItem } from '../types';

export const DEFAULT_CHECKLIST: ChecklistItem[] = [
  // Documents & Visas
  {
    id: 'doc-passport',
    category: 'documents',
    task: 'Valid Passport (at least 6 months validity from travel date)',
    notes: 'Keep physical copies and scanned cloud backup',
    done: true
  },
  {
    id: 'doc-visa',
    category: 'documents',
    task: 'Saudi Tourist / Umrah eVisa printed & digital PDF',
    notes: 'Verify multiple vs single entry and stay duration',
    done: true
  },
  {
    id: 'doc-nusuk',
    category: 'documents',
    task: 'Nusuk App installed & Rawdah Permit booked',
    notes: 'Must be booked in advance as slots fill quickly',
    done: false
  },
  {
    id: 'doc-tickets',
    category: 'documents',
    task: 'Haramain High-Speed Train Tickets & Flight Boarding Passes',
    notes: 'Between Jeddah, Makkah, and Madinah',
    done: false
  },

  // Ihram & Clothing
  {
    id: 'ihram-towels',
    category: 'ihram_items',
    task: '2 Sets of Ihram (100% thick white cotton/bamboo unstitched towels for men)',
    notes: 'High absorbency prevents chafing in hot climate',
    done: true
  },
  {
    id: 'ihram-belt',
    category: 'ihram_items',
    task: 'Ihram Belt with secure zippered pouch for phone & passport',
    notes: 'Unstitched or buckle type permitted',
    done: false
  },
  {
    id: 'ihram-sandals',
    category: 'ihram_items',
    task: 'Comfortable unstitched sandals (ankles and top bone uncovered)',
    notes: 'Cushioned walking sandals for marble courtyards',
    done: false
  },
  {
    id: 'ihram-pin',
    category: 'ihram_items',
    task: 'Safety pins or clips for securing Ihram top sheet',
    notes: 'Handy during Tawaf to avoid slipping',
    done: false
  },

  // Health & Personal Care
  {
    id: 'health-unscented-toiletries',
    category: 'health_care',
    task: '100% Unscented Soap, Shampoo & Petroleum Jelly (for chafing)',
    notes: 'Strict requirement while in the state of Ihram',
    done: false
  },
  {
    id: 'health-meds',
    category: 'health_care',
    task: 'Personal prescription medications + travel first-aid kit',
    notes: 'Include lozenges, pain relief, rehydration salts, band-aids',
    done: false
  },
  {
    id: 'health-sun-protection',
    category: 'health_care',
    task: 'UV Umbrella & sunglasses for daytime sun exposure',
    notes: 'White or reflective umbrella recommended',
    done: false
  },

  // Tech & Travel Misc
  {
    id: 'tech-powerbank',
    category: 'tech_misc',
    task: 'High-capacity portable Power Bank (10,000–20,000 mAh)',
    notes: 'Essential for long days inside the Harams',
    done: false
  },
  {
    id: 'tech-shoe-bag',
    category: 'tech_misc',
    task: 'Drawstring Shoe Bag for carrying footwear into the mosque',
    notes: 'Never lose your shoes; keep them with you at all times',
    done: false
  },
  {
    id: 'tech-water-bottle',
    category: 'tech_misc',
    task: 'Compact reusable water bottle or mister spray for Wudu cooling',
    notes: 'Fill with chilled Zamzam water from dispensers',
    done: false
  },

  // Spiritual Essentials
  {
    id: 'spiritual-dua-book',
    category: 'spiritual',
    task: 'Pocket Dua list with personal supplications for family and friends',
    notes: 'Write down names in advance so you don\'t forget during Tawaf',
    done: false
  },
  {
    id: 'spiritual-pocket-quran',
    category: 'spiritual',
    task: 'Pocket Quran or digital Quran app with bookmarking',
    notes: 'Set daily recitation goals while resting in the mosque',
    done: false
  },
  {
    id: 'spiritual-tasbeeh',
    category: 'spiritual',
    task: 'Digital finger counter or traditional Tasbeeh beads',
    notes: 'Helpful for counting Istighfar and Salawat',
    done: false
  }
];
