import React, { useState } from 'react';
import { 
  Check, Copy, Sparkles, BookOpen, Compass, 
  RotateCw, Footprints, Scissors, ShieldAlert,
  HelpCircle, ChevronRight, ChevronLeft, Volume2, 
  Layers, CheckCircle2, Award, HeartHandshake, Eye
} from 'lucide-react';
import { DuaItem } from '../types';

export interface RitualStepData {
  stepNumber: number;
  id: string;
  stageName: string;
  title: string;
  arabicTitle: string;
  tagline: string;
  summary: string;
  location: string;
  ruling: 'Fard / Pillar (Rukn)' | 'Wajib (Obligatory)' | 'Sunnah Mu\'akkadah';
  estimatedDuration: string;
  iconName: 'ihram' | 'niyyah' | 'tawaf' | 'sai' | 'halq';
  instructions: {
    title: string;
    description: string;
    sunnahs: string[];
    warnings?: string[];
  }[];
  duas: DuaItem[];
  practicalTips: string[];
  mistakesToAvoid: string[];
}

export const UMRAH_RITUAL_STEPS: RitualStepData[] = [
  {
    stepNumber: 1,
    id: 'ihram-and-preparation',
    stageName: 'Step 1: Al-Ihram',
    title: 'Entering Ihram & Physical Preparation',
    arabicTitle: 'الإحرام والتجهيز',
    tagline: 'Physical purification and donning the consecrated pilgrim garments before the Meeqat boundary.',
    summary: 'Ihram is the sacred state of spiritual and physical sanctity. Before crossing the geographical boundary (Meeqat), the pilgrim purifies their body, wears the prescribed white unstitched garments, and prepares the heart for divine service.',
    location: 'At Home/Hotel or Designated Meeqat Station (e.g. Dhu al-Hulayfah, Yalamlam, Qarn al-Manazil)',
    ruling: 'Fard / Pillar (Rukn)',
    estimatedDuration: '45 - 60 Minutes',
    iconName: 'ihram',
    instructions: [
      {
        title: 'Bodily Hygiene & Ghusl',
        description: 'Perform full bodily hygiene before assuming Ihram. Clip nails, trim mustache, and perform a complete ritual bath (Ghusl) with the intention of Ihram.',
        sunnahs: [
          'Take a full Ghusl (Sunnah for both men and women, even if in ritual impurity).',
          'Clip fingernails and toenails.',
          'Men apply non-alcoholic perfume to hair and beard prior to Niyyah (no perfume on garments).'
        ],
        warnings: [
          'Do NOT apply perfume or scented soap after making the Niyyah for Umrah.',
          'Do NOT cut hair or remove body hair once in the state of Ihram.'
        ]
      },
      {
        title: 'Ihram Garments',
        description: 'Men put on two clean white unstitched sheets: the Izar (lower wrap) and the Rida (upper wrap), wearing footwear that leaves the ankles and top foot arch uncovered. Women wear modest, loose everyday clothing without face-veil (Niqab) or gloves.',
        sunnahs: [
          'Use white unstitched cotton sheets for men.',
          'Use a waist belt or pouch to secure the Izar and carry essentials (passport, money).',
          'Women wear comfortable loose abaya in any modest color.'
        ]
      }
    ],
    duas: [
      {
        id: 'dua-ghusl-ihram',
        title: 'Supplication Before Entering Sacred Boundary',
        occasion: 'During preparation before crossing Meeqat',
        arabic: 'اللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي',
        transliteration: "Allahumma innee ureedul-'Umrata fa-yassirhaa lee wa taqabbal-haa minnee",
        translation: 'O Allah, I intend to perform Umrah, so make it easy for me and accept it from me.'
      }
    ],
    practicalTips: [
      'If traveling by air (e.g. landing in Jeddah or Madinah), put on the Ihram cloth at your home airport or inside the aircraft 30-45 minutes before the captain announces the Meeqat crossing.',
      'Pack unscented soap, unscented moisturizer, and petroleum jelly to prevent inner-thigh chafing.',
      'Fasten the lower sheet (Izar) securely with a strong pilgrims buckle belt.'
    ],
    mistakesToAvoid: [
      'Passing the Meeqat boundary by plane or car without making the intention in Ihram (requires a penalty sacrifice / Dam).',
      'Men wearing stitched undergarments or socks inside Ihram.',
      'Using scented wet wipes or perfumes after pronouncing the intention.'
    ]
  },
  {
    stepNumber: 2,
    id: 'niyyah-and-talbiyah',
    stageName: 'Step 2: An-Niyyah & At-Talbiyah',
    title: 'Niyyah (Intention) & Continuous Talbiyah',
    arabicTitle: 'النية والتلبية',
    tagline: 'Formal verbal articulation of the Umrah intention and continuous sacred chant until the Kaaba is sighted.',
    summary: 'At the Meeqat boundary, the pilgrim vocalizes their intention for Umrah and raises their voice with the Talbiyah—the timeless declaration of obedience echoing Prophet Ibrahim (AS).',
    location: 'At or above the Meeqat Boundary',
    ruling: 'Wajib (Obligatory)',
    estimatedDuration: 'Continuous until Tawaf begins',
    iconName: 'niyyah',
    instructions: [
      {
        title: 'Making the Verbal Intention (Niyyah)',
        description: 'Facing the Qibla (if possible), articulate the intention to perform Umrah exclusively for Allah SWT.',
        sunnahs: [
          'Offer 2 Rak\'ahs of Sunnah prayer prior to making Niyyah if time and location allow (not during Makruh prayer times).',
          'Formulate the intention firmly in the heart and utter the prescribed prophetic phrase.'
        ]
      },
      {
        title: 'Continuous Recitation of the Talbiyah',
        description: 'Immediately after the intention, commence reciting the Talbiyah. Men recite with an elevated, audible voice; women recite softly to themselves.',
        sunnahs: [
          'Recite upon climbing slopes, descending valleys, meeting travelers, and after mandatory prayers.',
          'Follow the Talbiyah with Salawat upon the Prophet ﷺ and personal supplications.'
        ],
        warnings: [
          'Cease reciting the Talbiyah the exact moment you commence the first circuit of Tawaf at the Kaaba.'
        ]
      }
    ],
    duas: [
      {
        id: 'dua-niyyah-formal',
        title: 'Niyyah for Umrah (Intention)',
        occasion: 'At the Meeqat boundary',
        arabic: 'لَبَّيْكَ اللَّهُمَّ عُمْرَةً',
        transliteration: "Labbayk Allahumma 'Umrah",
        translation: 'Here I am, O Allah, answering Your call for Umrah.',
        repeatCount: 'Recited once at intention'
      },
      {
        id: 'dua-conditional-niyyah',
        title: 'Conditional Intention (Ishtirat - for those fearing illness or delay)',
        occasion: 'If elderly, sick, or concerned about obstacles',
        arabic: 'اللَّهُمَّ مَحِلِّي حَيْثُ حَبَسْتَنِي',
        transliteration: "Allahumma mahillee haythu habastanee",
        translation: 'O Allah, my place of exiting Ihram is wherever You prevent or restrain me.',
        reference: 'Sahih al-Bukhari 5089'
      },
      {
        id: 'dua-the-talbiyah',
        title: 'The Prophetic Talbiyah',
        occasion: 'Continuous chant throughout the journey to Makkah',
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ',
        transliteration: "Labbayka Allahumma Labbayk, Labbayka Laa Shareeka Laka Labbayk, Innal-Hamda Wan-Ni'mata Laka Wal-Mulk, Laa Shareeka Lak",
        translation: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace, and sovereignty belong to You. You have no partner.',
        repeatCount: 'Recite continuously with devotion'
      }
    ],
    practicalTips: [
      'Keep your tongue engaged in Talbiyah during airport transit, high-speed train, or bus journey from Jeddah/Madinah.',
      'Reflect deeply on the meaning of "Labbayk" (I am answering Your divine call, submission upon submission).',
      'Drink plenty of water before entering the Haram to maintain physical energy.'
    ],
    mistakesToAvoid: [
      'Chanting the Talbiyah in synchronized choruses led by a group leader in a disruptive shouting manner (the Sunnah is individual, continuous chanting).',
      'Continuing to chant the Talbiyah after beginning Tawaf.'
    ]
  },
  {
    stepNumber: 3,
    id: 'tawaf-around-kaaba',
    stageName: 'Step 3: At-Tawaf & Maqam Ibrahim',
    title: 'Tawaf (7 Circuits), Maqam Ibrahim & Zamzam',
    arabicTitle: 'الطواف حول الكعبة المشرفة',
    tagline: 'Seven counter-clockwise circumambulations starting and ending at the Black Stone (Hajar al-Aswad).',
    summary: 'Tawaf represents the celestial unity of creation worshipping the One Creator. The pilgrim circles the Kaaba 7 times in a state of Wudu, followed by 2 Rak\'ahs of prayer behind Maqam Ibrahim and drinking blessed Zamzam water.',
    location: 'Mataf Courtyard (or Upper Floors), Al-Masjid al-Haram',
    ruling: 'Fard / Pillar (Rukn)',
    estimatedDuration: '45 - 90 Minutes (depending on crowd and floor level)',
    iconName: 'tawaf',
    instructions: [
      {
        title: 'Preparatory Sunnahs for Men (Idtiba & Raml)',
        description: 'Prior to starting circuit 1, men uncover their right shoulder (Idtiba) by passing the upper sheet under the right armpit and throwing it over the left shoulder. For the first 3 circuits only, men perform Raml (brisk walking with short, energetic strides).',
        sunnahs: [
          'Ensure complete ritual purity (Wudu is mandatory for Tawaf according to the majority of scholars).',
          'Keep right shoulder uncovered during all 7 rounds of this specific Umrah Tawaf.',
          'Walk briskly with chest forward (Raml) during circuits 1, 2, and 3 only; normal walking for circuits 4 to 7.'
        ]
      },
      {
        title: 'Starting & Executing the 7 Circuits',
        description: 'Align with the Black Stone corner (indicated by the brown marble line and green indicator lights on the Haram wall). Face the Black Stone, raise your right hand, say "Bismillahi Allahu Akbar" (Istilam), and begin moving counter-clockwise keeping the Kaaba on your left.',
        sunnahs: [
          'Touch the Yemeni Corner (Rukn al-Yamani) with the right hand if accessible without pushing, saying "Bismillahi Allahu Akbar" without kissing it.',
          'Between the Yemeni Corner and the Black Stone, recite the famous Quranic Dua: "Rabbana atina fid-dunya hasanah..."',
          'Make personal supplications, Quran recitation, and Istighfar freely throughout the circuits.'
        ],
        warnings: [
          'Never push, shove, or harm fellow pilgrims to touch the Black Stone or Kaaba walls.',
          'Do NOT walk inside the semi-circular Hijr Ismail (Hateem) enclosure during Tawaf, as it is part of the Kaaba structure and will invalidate the circuit.'
        ]
      },
      {
        title: 'Prayer at Maqam Ibrahim & Zamzam Water',
        description: 'After completing circuit 7, cover your right shoulder. Proceed toward Maqam Ibrahim (or anywhere in the Haram if crowded) to offer 2 light Rak\'ahs. Afterward, drink Zamzam water to your fill.',
        sunnahs: [
          'Recite "Wattakhidhu mim-maqami Ibraheema musalla" when heading toward the station.',
          'Recite Surah Al-Kafirun in the 1st Rak\'ah and Surah Al-Ikhlas in the 2nd Rak\'ah.',
          'Drink Zamzam while standing, facing Qibla, making sincere du\'a for health, sustenance, and afterlife.'
        ]
      }
    ],
    duas: [
      {
        id: 'dua-start-each-circuit',
        title: 'Istilam (At the Black Stone line - Start of each circuit)',
        occasion: 'Facing the Black Stone at start of circuits 1 to 7',
        arabic: 'بِسْمِ اللَّهِ، وَاللَّهُ أَكْبَرُ',
        transliteration: 'Bismillahi, Allahu Akbar',
        translation: 'In the name of Allah, and Allah is the Greatest.'
      },
      {
        id: 'dua-yemeni-to-black-stone',
        title: 'Dua Between Yemeni Corner & Black Stone',
        occasion: 'Recited on the final side of every single circuit',
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
        translation: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good and save us from the punishment of the Fire. (Surah Al-Baqarah 2:201)',
        repeatCount: 'Recited in all 7 circuits'
      },
      {
        id: 'dua-maqam-ibrahim',
        title: 'Approaching Maqam Ibrahim for 2 Rak\'ahs',
        occasion: 'Walking behind the station of Ibrahim',
        arabic: 'وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى',
        transliteration: "Wattakhidhu mim-maqami Ibraheema musalla",
        translation: 'And take the Station of Ibrahim as a place of prayer. (Surah Al-Baqarah 2:125)'
      },
      {
        id: 'dua-zamzam-drinking',
        title: 'Dua When Drinking Zamzam',
        occasion: 'Before/during drinking Zamzam',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا وَاسِعًا، وَشِفَاءً مِنْ كُلِّ دَاءٍ',
        transliteration: "Allahumma innee as'aluka 'ilman naafi'an, wa rizqan waasi'an, wa shifaa'an min kulli daa'",
        translation: 'O Allah, I ask You for beneficial knowledge, abundant provision, and a cure for every disease.'
      }
    ],
    practicalTips: [
      'The ground floor Mataf courtyard is closest to the Kaaba and quickest, but can be crowded. For elderly or stroller users, use the 1st or 2nd floor elevated Mataf or electric carts.',
      'Use a physical or digital tally counter, or your 7 fingers, to avoid losing count of circuits.',
      'Hydrate well at the Zamzam dispensers before proceeding to the Sa\'i gallery.'
    ],
    mistakesToAvoid: [
      'Walking inside the Hateem (Hijr Ismail) - this cuts short the Kaaba boundary and does not count as a valid circuit.',
      'Keeping the right shoulder uncovered after Tawaf is finished (it is only Sunnah during Tawaf itself).',
      'Thinking there is a specific, mandatory scripted du\'a for each round (any authentic du\'a or remembrance is valid).'
    ]
  },
  {
    stepNumber: 4,
    id: 'sai-between-safa-marwah',
    stageName: 'Step 4: As-Sa\'i',
    title: 'Sa\'i (7 Laps Between Mount Safa & Marwah)',
    arabicTitle: 'السعي بين الصفا والمروة',
    tagline: 'Seven laps between Safa and Marwah, honoring Lady Hajar\'s unwavering faith and search for water.',
    summary: 'Sa\'i connects the pilgrim to the sacrifice and trust of Hajar (AS). Beginning at Mount Safa and concluding at Mount Marwah, the pilgrim completes 7 one-way journeys (approx. 2.8 km total) in the air-conditioned Mas\'a gallery.',
    location: 'The Mas\'a Gallery, Al-Masjid al-Haram',
    ruling: 'Fard / Pillar (Rukn)',
    estimatedDuration: '45 - 60 Minutes',
    iconName: 'sai',
    instructions: [
      {
        title: 'Ascending Mount Safa',
        description: 'Proceed from Zamzam to Mount Safa. As you approach, recite Surah Al-Baqarah 2:158 once. Climb onto Safa until facing the Kaaba, raise your hands in du\'a, and recite the Sunnah Takbeer and Tahlil 3 times, supplicating between each.',
        sunnahs: [
          'Recite "Innas-Safa wal-Marwata min sha\'a\'irillah... Nabda\'u bima bada\'allahu bih" when approaching Safa.',
          'Face the direction of the Kaaba with hands raised in humble supplication.',
          'Recite the famous Takbeer and Tahlil formula 3 times, making long personal du\'as after the 1st and 2nd recitation.'
        ]
      },
      {
        title: 'Traversing the Path & The Green Neon Zone',
        description: 'Walk toward Mount Marwah. In the valley section between the two green neon ceiling indicators (Batn al-Wadi), men jog briskly while women maintain a normal walking pace throughout.',
        sunnahs: [
          'Men jog briskly between the green lights with energy and humility.',
          'Maintain continuous remembrance, Istighfar, and personal du\'a during the walk.',
          'Upon reaching Marwah, face the Kaaba and repeat the identical 3-fold du\'a formula recited on Safa.'
        ],
        warnings: [
          'Remember: 1 lap is one-way! Safa to Marwah is Lap 1; Marwah to Safa is Lap 2. Lap 7 concludes at Mount Marwah.'
        ]
      }
    ],
    duas: [
      {
        id: 'dua-safa-approach-verse',
        title: 'Approaching Safa (Recited only once before starting)',
        occasion: 'As you walk up the ramp to Mount Safa',
        arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ ۖ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ. نَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ',
        transliteration: "Innas-Safaa wal-Marwata min sha'aa'irillaah. Faman hajjal-Bayta awi'tamara falaa junaaha 'alayhi an yattawwafa bihimaa. Wa man tatawwa'a khayran fa'innallaaha Shaakirun 'Aleem. Nabda'u bimaa bada'allaahu bih",
        translation: 'Indeed, as-Safa and al-Marwah are among the symbols of Allah... We begin with that which Allah began with.',
        reference: 'Surah Al-Baqarah 2:158'
      },
      {
        id: 'dua-safa-marwah-standing',
        title: 'Sunnah Remembrance on Safa and Marwah',
        occasion: 'Facing the Kaaba atop Mount Safa and Mount Marwah (Recite 3 times)',
        arabic: 'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الأَحْزَابَ وَحْدَهُ',
        transliteration: "Allahu Akbar, Allahu Akbar, Allahu Akbar. Laa ilaaha illallaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in Qadeer. Laa ilaaha illallaahu wahdah, anjaza wa'dah, wa nasara 'abdah, wa hazamal-ahzaaba wahdah",
        translation: 'Allah is Greatest, Allah is Greatest, Allah is Greatest. There is no deity except Allah alone, without partner. His is the sovereignty and praise, and He is over all things omnipotent. He fulfilled His promise, granted victory to His servant, and defeated the confederates alone.',
        repeatCount: 'Recited 3 times with personal du\'as in between'
      }
    ],
    practicalTips: [
      'The Mas\'a is fully climate-controlled with Zamzam drinking fountains available on every floor.',
      'Free electric cart rental and dedicated wheelchair tracks are available on the mezzanine and top floors for those with physical limitations.',
      'Count carefully: 1 (Safa -> Marwah), 2 (Marwah -> Safa), 3 (Safa -> Marwah), 4 (Marwah -> Safa), 5 (Safa -> Marwah), 6 (Marwah -> Safa), 7 (Safa -> Marwah).'
    ],
    mistakesToAvoid: [
      'Counting a round trip (Safa -> Marwah -> Safa) as 1 lap instead of 2. (Doing 7 round trips is 14 laps and unnecessary hardship).',
      'Women jogging between the green lights (jogging is Sunnah for men only).',
      'Exiting at Marwah before completing the full 7th lap.'
    ]
  },
  {
    stepNumber: 5,
    id: 'halq-or-taqseer',
    stageName: 'Step 5: Al-Halq / At-Taqseer',
    title: 'Halq or Taqseer (Hair Cutting & Exiting Ihram)',
    arabicTitle: 'الحلق أو التقصير والتحلل',
    tagline: 'Shaving or evenly trimming the hair to conclude the Umrah and officially exit the consecrated state.',
    summary: 'The final rite of Umrah is cutting the hair. Men may shave their head completely (Halq, which carries threefold blessings from the Prophet ﷺ) or trim hair evenly across the head (Taqseer). Women clip the length of a single fingertip from their hair.',
    location: 'Licensed Barbershops (Makkah Clock Tower, Safwa Center, Jabal Omar) or Private Hotel Room',
    ruling: 'Wajib (Obligatory)',
    estimatedDuration: '15 - 20 Minutes',
    iconName: 'halq',
    instructions: [
      {
        title: 'Guidelines for Men (Halq vs. Taqseer)',
        description: 'Men have the option between Halq (complete head shave) and Taqseer (trimming at least 1-2 cm evenly from all sides of the head). Halq is heavily superior in reward.',
        sunnahs: [
          'Choose Halq (shaving) as the Prophet ﷺ supplicated: "O Allah, forgive those who shave their heads" three times, and "and those who cut their hair short" once.',
          'If trimming (Taqseer), ensure hair is cut from every portion of the scalp, not just a few strands from the front.'
        ]
      },
      {
        title: 'Guidelines for Women',
        description: 'Women gather their hair into a braid or ponytail and clip the length of a single fingertip (approximately 1 to 2 cm) from the ends. Women do NOT shave their heads under any circumstances.',
        sunnahs: [
          'Clip in the privacy of a hotel room or dedicated female prayer/rest area.',
          'A woman may cut her own hair or have another female or Mahram cut it for her.'
        ]
      },
      {
        title: 'Full Tahallul (Lifting of Prohibitions)',
        description: 'Once the hair is cut, you have achieved full Tahallul. All Ihram prohibitions (wearing normal clothing, perfume, cutting nails) are immediately lifted, and your Umrah is complete! Alhamdulillah.',
        sunnahs: [
          'Praise Allah SWT for enabling you to complete the sacred pilgrimage.',
          'Take a fresh shower, change into clean clothes, and enjoy your stay in Makkah.'
        ]
      }
    ],
    duas: [
      {
        id: 'dua-gratitude-completion',
        title: 'Supplication of Gratitude Upon Completion',
        occasion: 'After trimming/shaving hair and completing Umrah',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ، اللَّهُمَّ تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
        transliteration: "Alhamdulillaahil-ladhee bi-ni'matihi tatimmus-saalihaat, Allahumma taqabbal minnaa innaka Antas-Samee'ul-'Aleem",
        translation: 'Praise be to Allah by Whose grace good deeds are completed. O Allah, accept this from us, for You are the All-Hearing, the All-Knowing.'
      }
    ],
    practicalTips: [
      'Ensure the barber uses a new, sterilized, single-use blade straight from the sealed package.',
      'Official hygienic municipal barbershops are located directly beneath the Clock Tower and Safwa towers facing the Haram.',
      'If you have scalp sensitivities or sunburn, carry your own clean electric trimmer or razor.'
    ],
    mistakesToAvoid: [
      'Snipping only 2 or 3 hairs from the front of the head with scissors (Taqseer must encompass hair from the entire circumference of the head).',
      'Removing Ihram attire or applying perfume BEFORE cutting the hair.',
      'Shaving the head for women (strictly prohibited in the Sunnah).'
    ]
  }
];

export const UmrahRitualsGuide: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeTawafCircuit, setActiveTawafCircuit] = useState<number>(1);
  const [activeSaiLap, setActiveSaiLap] = useState<number>(1);
  const [copiedDuaId, setCopiedDuaId] = useState<string | null>(null);
  const [activeTabSubView, setActiveTabSubView] = useState<'guide' | 'duas' | 'tips' | 'mistakes'>('guide');

  const currentStep = UMRAH_RITUAL_STEPS[activeStepIndex];
  const progressPercent = Math.round((completedSteps.length / UMRAH_RITUAL_STEPS.length) * 100);

  const toggleStepCompleted = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber) ? prev.filter(s => s !== stepNumber) : [...prev, stepNumber]
    );
  };

  const handleCopyDua = (dua: DuaItem) => {
    const textToCopy = `${dua.title}\n\nArabic:\n${dua.arabic}\n\nTransliteration:\n${dua.transliteration}\n\nTranslation:\n${dua.translation}${dua.reference ? `\n\nReference: ${dua.reference}` : ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedDuaId(dua.id);
    setTimeout(() => setCopiedDuaId(null), 2500);
  };

  const getStepIcon = (iconName: RitualStepData['iconName'], isCompleted: boolean, isActive: boolean) => {
    if (isCompleted) {
      return <Check className="w-4 h-4 text-white stroke-[3]" />;
    }
    switch (iconName) {
      case 'ihram': return <Layers className="w-4 h-4" />;
      case 'niyyah': return <Volume2 className="w-4 h-4" />;
      case 'tawaf': return <RotateCw className="w-4 h-4" />;
      case 'sai': return <Footprints className="w-4 h-4" />;
      case 'halq': return <Scissors className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section id="umrah-rituals-guide-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Top Header Card with Natural Tones */}
      <div className="bg-[#2D4A3E] text-[#FDFCF6] rounded-3xl p-6 sm:p-10 border border-[#1E332A] shadow-md relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8C734B]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#1E332A] text-[#EFE7DA] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#8C734B]/30">
              <Compass className="w-3.5 h-3.5 text-[#8C734B]" />
              <span>Interactive Step-by-Step Pilgrimage Rituals</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDFCF6] tracking-tight">
              The Five Sacred Pillars of Umrah
            </h2>
            
            <p className="text-sm sm:text-base text-[#E5E1D3] leading-relaxed">
              An authoritative, authentic interactive manual based on the Prophetic Sunnah. Track your pilgrimage progress through Ihram, Niyyah & Talbiyah, Tawaf, Sa'i, and Halq/Taqseer.
            </p>
          </div>

          {/* Overall Progress Widget */}
          <div className="bg-[#1E332A] border border-[#8C734B]/40 rounded-2xl p-5 shrink-0 w-full md:w-72 space-y-3 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C4B59D]">
                Pilgrimage Progress
              </span>
              <span className="text-lg font-bold font-serif text-[#EFE7DA]">
                {progressPercent}%
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-[#15231D] rounded-full h-3 overflow-hidden border border-[#8C734B]/30">
              <div 
                className="bg-[#8C734B] h-full rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#E5E1D3]">
              <span>{completedSteps.length} of {UMRAH_RITUAL_STEPS.length} Pillars Completed</span>
              {progressPercent === 100 && (
                <span className="text-[#8C734B] font-bold flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Mabroor!</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Visual Timeline / Stepper Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C867A]">
            Ritual Timeline Navigator
          </h3>
          <span className="text-xs text-[#5C564E]">
            Click any pillar to view detailed rites & duas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {UMRAH_RITUAL_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const isDone = completedSteps.includes(step.stepNumber);

            return (
              <button
                key={step.id}
                id={`timeline-step-btn-${step.stepNumber}`}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-[#2D4A3E] text-white border-[#1E332A] shadow-md ring-2 ring-[#8C734B]/40'
                    : isDone
                      ? 'bg-[#F8F5EB] text-[#2D4A3E] border-[#8C734B]/50 hover:bg-[#EFE7DA]'
                      : 'bg-white text-[#2D2A26] border-[#E5E1D3] hover:bg-[#F8F5EB]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    isDone 
                      ? 'bg-[#8C734B] text-white' 
                      : isSelected 
                        ? 'bg-[#1E332A] text-[#EFE7DA] border border-[#8C734B]' 
                        : 'bg-[#F8F5EB] text-[#5C564E] border border-[#E5E1D3]'
                  }`}>
                    {getStepIcon(step.iconName, isDone, isSelected)}
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-[#1E332A] text-[#EFE7DA]'
                      : isDone
                        ? 'bg-[#8C734B]/20 text-[#2D4A3E]'
                        : 'bg-[#F8F5EB] text-[#8C867A]'
                  }`}>
                    Pillar {step.stepNumber}
                  </span>
                </div>

                <div>
                  <div className={`text-xs font-bold font-serif line-clamp-1 ${
                    isSelected ? 'text-[#FDFCF6]' : 'text-[#2D2A26]'
                  }`}>
                    {step.title.split('&')[0].trim()}
                  </div>
                  <div className={`text-[11px] font-arabic truncate ${
                    isSelected ? 'text-[#EFE7DA]' : 'text-[#8C867A]'
                  }`}>
                    {step.arabicTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Comprehensive Details Container */}
      <div className="bg-white rounded-3xl border border-[#E5E1D3] shadow-sm overflow-hidden space-y-6">
        
        {/* Step Header Banner */}
        <div className="bg-[#2D4A3E] text-white p-6 sm:p-8 border-b border-[#1E332A] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#EFE7DA]">
              <span className="bg-[#1E332A] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[#8C734B] border border-[#8C734B]/30">
                {currentStep.stageName}
              </span>
              <span>•</span>
              <span className="font-medium">{currentStep.ruling}</span>
              <span>•</span>
              <span>Est. {currentStep.estimatedDuration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FDFCF6]">
              {currentStep.title}
            </h3>

            <p className="text-base sm:text-lg font-arabic text-[#EFE7DA]">
              {currentStep.arabicTitle}
            </p>

            <p className="text-xs sm:text-sm text-[#E5E1D3] max-w-2xl mt-1">
              {currentStep.tagline}
            </p>
          </div>

          {/* Mark Completed Toggle & Action */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              id={`mark-complete-btn-${currentStep.stepNumber}`}
              onClick={() => toggleStepCompleted(currentStep.stepNumber)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm ${
                completedSteps.includes(currentStep.stepNumber)
                  ? 'bg-[#8C734B] text-white hover:bg-[#78613C]'
                  : 'bg-white text-[#2D4A3E] hover:bg-[#F8F5EB]'
              }`}
            >
              <Check className={`w-4 h-4 ${completedSteps.includes(currentStep.stepNumber) ? 'stroke-[3]' : ''}`} />
              <span>
                {completedSteps.includes(currentStep.stepNumber) ? 'Pillar Completed ✓' : 'Mark Pillar as Completed'}
              </span>
            </button>
          </div>
        </div>

        {/* Sub-tab Filter for Deep Content Exploration */}
        <div className="px-6 sm:px-8">
          <div className="inline-flex p-1 rounded-2xl bg-[#F8F5EB] border border-[#E5E1D3] overflow-x-auto max-w-full">
            {[
              { id: 'guide', label: '📖 Step-by-Step Rites' },
              { id: 'duas', label: `🤲 Duas & Remembrances (${currentStep.duas.length})` },
              { id: 'tips', label: '💡 Practical Guidance & Location' },
              { id: 'mistakes', label: '⚠️ Common Mistakes to Avoid' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTabSubView(tab.id as any)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTabSubView === tab.id
                    ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                    : 'text-[#5C564E] hover:text-[#2D2A26]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 pt-0 space-y-6">
          
          {/* TAB 1: Step-by-Step Rites */}
          {activeTabSubView === 'guide' && (
            <div className="space-y-6">
              
              {/* Interactive Circuit/Lap Helper Widgets for Tawaf and Sa'i */}
              {currentStep.id === 'tawaf-around-kaaba' && (
                <div className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold font-serif text-[#2D4A3E] flex items-center space-x-2">
                        <RotateCw className="w-4 h-4 text-[#8C734B]" />
                        <span>Interactive Tawaf Circuit Counter (7 Circuits)</span>
                      </h4>
                      <p className="text-xs text-[#5C564E]">
                        Keep track of your circumambulations in real-time. Start & finish each circuit at the Black Stone line.
                      </p>
                    </div>

                    <span className="text-xs font-bold px-3 py-1 bg-[#2D4A3E] text-white rounded-full self-start sm:self-auto">
                      Circuit {activeTawafCircuit} of 7
                    </span>
                  </div>

                  {/* Circuit selector buttons */}
                  <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map(num => (
                      <button
                        key={num}
                        onClick={() => setActiveTawafCircuit(num)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center ${
                          activeTawafCircuit === num
                            ? 'bg-[#2D4A3E] text-white shadow-xs'
                            : 'bg-white text-[#2D2A26] border border-[#E5E1D3] hover:bg-[#EFE7DA]'
                        }`}
                      >
                        <span>C{num}</span>
                        {num <= 3 && <span className="text-[9px] font-normal opacity-80">Raml</span>}
                      </button>
                    ))}
                  </div>

                  {/* Circuit details card */}
                  <div className="bg-white rounded-2xl p-4 border border-[#E5E1D3] text-xs text-[#2D2A26] space-y-2">
                    <div className="flex items-center justify-between font-bold text-[#2D4A3E]">
                      <span>Current Focus for Circuit #{activeTawafCircuit}:</span>
                      <span>{activeTawafCircuit <= 3 ? '⚡ Men: Brisk Walk (Raml)' : '🚶 Normal Walk Pace'}</span>
                    </div>
                    <p className="text-[#5C564E]">
                      Point right hand to Black Stone corner at start ("Bismillahi Allahu Akbar"). Circle counter-clockwise keeping Kaaba on your left. On reaching the Yemeni corner, recite the prayer: <em>"Rabbana atina fid-dunya hasanatan..."</em> until reaching the Black Stone.
                    </p>
                  </div>
                </div>
              )}

              {currentStep.id === 'sai-between-safa-marwah' && (
                <div className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold font-serif text-[#2D4A3E] flex items-center space-x-2">
                        <Footprints className="w-4 h-4 text-[#8C734B]" />
                        <span>Interactive Sa'i Lap Tracker (7 One-Way Laps)</span>
                      </h4>
                      <p className="text-xs text-[#5C564E]">
                        Safa to Marwah is Lap 1; Marwah to Safa is Lap 2. Lap 7 concludes at Mount Marwah.
                      </p>
                    </div>

                    <span className="text-xs font-bold px-3 py-1 bg-[#2D4A3E] text-white rounded-full self-start sm:self-auto">
                      Lap {activeSaiLap} of 7: {activeSaiLap % 2 !== 0 ? 'Safa ➔ Marwah' : 'Marwah ➔ Safa'}
                    </span>
                  </div>

                  {/* Lap selector buttons */}
                  <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map(num => (
                      <button
                        key={num}
                        onClick={() => setActiveSaiLap(num)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center ${
                          activeSaiLap === num
                            ? 'bg-[#2D4A3E] text-white shadow-xs'
                            : 'bg-white text-[#2D2A26] border border-[#E5E1D3] hover:bg-[#EFE7DA]'
                        }`}
                      >
                        <span>Lap {num}</span>
                        <span className="text-[9px] font-normal opacity-80">
                          {num % 2 !== 0 ? 'S➔M' : 'M➔S'}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-[#E5E1D3] text-xs text-[#2D2A26] space-y-2">
                    <div className="flex items-center justify-between font-bold text-[#2D4A3E]">
                      <span>Direction: {activeSaiLap % 2 !== 0 ? 'Mount Safa to Mount Marwah' : 'Mount Marwah to Mount Safa'}</span>
                      <span className="text-[#8C734B]">Green Lights Zone: Jogging for men only</span>
                    </div>
                    <p className="text-[#5C564E]">
                      {activeSaiLap === 1 && "Start on Mount Safa after reciting the Quranic verse 2:158. Face the Kaaba, raise your hands, and recite the Sunnah remembrance 3 times."}
                      {activeSaiLap > 1 && activeSaiLap < 7 && `Walking lap #${activeSaiLap}. Engage in personal du'as and Quranic remembrance. Men jog between the illuminated green neon markers.`}
                      {activeSaiLap === 7 && "Final lap! Complete the journey on Mount Marwah. Face the Kaaba, make your concluding supplication, and proceed to the barbershop for Halq/Taqseer."}
                    </p>
                  </div>
                </div>
              )}

              {/* Instructional Blocks */}
              <div className="space-y-4">
                {currentStep.instructions.map((inst, i) => (
                  <div key={i} className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-3">
                    <h4 className="text-base font-bold text-[#2D2A26] font-serif flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <span>{inst.title}</span>
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                      {inst.description}
                    </p>

                    {inst.sunnahs && inst.sunnahs.length > 0 && (
                      <div className="pt-2 border-t border-[#E5E1D3] space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2D4A3E] block">
                          Recommended Sunnahs & Etiquettes:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#5C564E]">
                          {inst.sunnahs.map((sunnah, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Check className="w-3.5 h-3.5 text-[#8C734B] shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{sunnah}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {inst.warnings && inst.warnings.length > 0 && (
                      <div className="pt-2 border-t border-[#E5E1D3] space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center space-x-1">
                          <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
                          <span>Strict Prohibitions & Caution:</span>
                        </span>
                        <ul className="space-y-1.5 text-xs text-rose-900 bg-rose-50/70 p-3 rounded-2xl border border-rose-200">
                          {inst.warnings.map((warn, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="font-bold">•</span>
                              <span>{warn}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Duas & Remembrances */}
          {activeTabSubView === 'duas' && (
            <div className="space-y-4">
              {currentStep.duas.map((dua) => (
                <div
                  key={dua.id}
                  id={`dua-card-${dua.id}`}
                  className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-4 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E5E1D3]">
                    <div>
                      <h4 className="text-sm font-bold text-[#2D2A26] font-serif">
                        {dua.title}
                      </h4>
                      <p className="text-xs text-[#8C734B] font-medium">
                        Occasion: {dua.occasion}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopyDua(dua)}
                      className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-white hover:bg-[#EFE7DA] text-xs font-medium text-[#2D4A3E] border border-[#E5E1D3] flex items-center space-x-1.5 transition-colors cursor-pointer shadow-2xs"
                    >
                      {copiedDuaId === dua.id ? <Check className="w-3.5 h-3.5 text-[#8C734B]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDuaId === dua.id ? 'Copied to Clipboard' : 'Copy Supplication'}</span>
                    </button>
                  </div>

                  {/* Arabic Text */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E1D3] text-right">
                    <p className="text-lg sm:text-2xl font-arabic font-bold text-[#2D4A3E] leading-loose">
                      {dua.arabic}
                    </p>
                  </div>

                  {/* Transliteration & Translation */}
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#8C867A] block">
                        Transliteration:
                      </span>
                      <p className="text-[#2D2A26] italic mt-0.5">
                        "{dua.transliteration}"
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E5E1D3]">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#8C867A] block">
                        English Translation:
                      </span>
                      <p className="text-[#5C564E] mt-0.5">
                        {dua.translation}
                      </p>
                    </div>

                    {dua.reference && (
                      <div className="pt-1 text-[11px] text-[#8C734B] font-medium">
                        Source Reference: {dua.reference}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Practical Tips & Location */}
          {activeTabSubView === 'tips' && (
            <div className="space-y-4">
              <div className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D4A3E] flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-[#8C734B]" />
                  <span>Sanctuary Location & Practical Navigation</span>
                </h4>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  <strong>Designated Area:</strong> {currentStep.location}
                </p>
                
                <div className="pt-3 border-t border-[#E5E1D3] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C867A] block">
                    Essential Logistics & Pro Tips:
                  </span>
                  <ul className="space-y-2 text-xs text-[#5C564E]">
                    {currentStep.practicalTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Mistakes to Avoid */}
          {activeTabSubView === 'mistakes' && (
            <div className="bg-[#F8F5EB] rounded-3xl p-5 sm:p-6 border border-[#E5E1D3] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-rose-700" />
                <span>Common Errors & Juristic Precautions</span>
              </h4>
              <p className="text-xs text-[#5C564E]">
                Avoid these frequent misconceptions to ensure your Umrah is performed completely in accordance with the pure Sunnah.
              </p>

              <ul className="space-y-2.5 text-xs text-[#2D2A26] pt-2">
                {currentStep.mistakesToAvoid.map((mistake, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 bg-white p-3 rounded-2xl border border-[#E5E1D3]">
                    <span className="text-rose-600 font-bold text-sm shrink-0">✕</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Step Footer Navigation */}
        <div className="p-6 sm:p-8 bg-[#F8F5EB] border-t border-[#E5E1D3] flex items-center justify-between">
          <button
            onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
            disabled={activeStepIndex === 0}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer ${
              activeStepIndex === 0 
                ? 'opacity-40 cursor-not-allowed text-[#8C867A]' 
                : 'bg-white text-[#2D4A3E] hover:bg-[#EFE7DA] border border-[#E5E1D3]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Pillar</span>
          </button>

          <span className="text-xs font-medium text-[#5C564E]">
            Pillar {currentStep.stepNumber} of {UMRAH_RITUAL_STEPS.length}
          </span>

          <button
            onClick={() => setActiveStepIndex(prev => Math.min(UMRAH_RITUAL_STEPS.length - 1, prev + 1))}
            disabled={activeStepIndex === UMRAH_RITUAL_STEPS.length - 1}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer ${
              activeStepIndex === UMRAH_RITUAL_STEPS.length - 1 
                ? 'opacity-40 cursor-not-allowed text-[#8C867A]' 
                : 'bg-[#2D4A3E] text-white hover:bg-[#1E332A] shadow-xs'
            }`}
          >
            <span>Next Pillar</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
};
