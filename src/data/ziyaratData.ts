import { ZiyaratPlace } from '../types';

export const ZIYARAT_PLACES: ZiyaratPlace[] = [
  // ==========================================
  // MAKKAH AL-MUKARRAMAH PLACES
  // ==========================================
  {
    id: 'makkah-masjid-al-haram',
    slug: 'masjid-al-haram-kaaba',
    name: 'Al-Masjid al-Haram & The Holy Kaaba',
    arabicName: 'المسجد الحرام والكعبة المشرفة',
    city: 'Makkah',
    category: 'holy_site',
    shortDescription: 'The most sacred mosque in Islam surrounding the Holy Kaaba, the focal point (Qibla) of Muslim prayers worldwide.',
    fullDescription: 'Al-Masjid al-Haram is the holiest sanctuary on Earth. At its center stands the Holy Kaaba (Bayt Allah), built by Prophet Ibrahim (Abraham) and his son Ismail (peace be upon them). It encompasses the Black Stone (Al-Hajar al-Aswad), Maqam Ibrahim, the Well of Zamzam, and the hills of Safa and Marwah where the Sa\'ee ritual is performed.',
    historicalSignificance: 'Established as the first house of worship dedicated to the singular worship of Allah. Surah Al-Baqarah (2:127) commemorates Prophet Ibrahim and Ismail raising its foundations. A single prayer in Masjid al-Haram equals 100,000 prayers performed elsewhere.',
    visitorTips: [
      'Enter with humility leading with your right foot and recite the entry dua.',
      'The ground floor Mataf is often reserved for pilgrims wearing Ihram during peak seasons; upper Mataf levels are available for general tawaf.',
      'Zamzam dispensers and cooling stations are located every few meters throughout all floors and courtyards.',
      'Early morning (after Fajr until 9 AM) and late night (midnight to 3 AM) are typically less crowded for peaceful Tawaf.'
    ],
    location: {
      address: 'Al Haram, Makkah 24231, Saudi Arabia',
      coordinates: { lat: 21.422487, lng: 39.826206 },
      distanceToHaramKm: 0,
      walkingTimeMin: 0,
      transportTip: 'Directly accessible on foot from all surrounding central hotel districts (Abraj Al Bait, Jabal Omar, Ajyad).'
    },
    importance: 'essential',
    estimatedDurationMinutes: 180,
    bestTimeToVisit: 'Between midnight and 4:00 AM, or 2 hours post-Isha',
    etiquette: [
      'Perform Tahiyyat al-Masjid by initiating Tawaf if preparing for Umrah or voluntary prayer.',
      'Maintain extreme patience, modesty, and lowered gaze throughout.',
      'Do not push or cause distress to elderly and disabled pilgrims in the Mataf.'
    ],
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    },
    references: [
      { source: 'Sahih al-Bukhari 1190', text: 'A prayer in this mosque of mine is better than a thousand prayers elsewhere, except Al-Masjid al-Haram.' },
      { source: 'Quran Surah Ali Imran 3:96', text: 'Indeed, the first House [of worship] established for mankind was that at Makkah - blessed and a guidance for the worlds.' }
    ]
  },
  {
    id: 'makkah-cave-hira-jabal-nour',
    slug: 'jabal-al-nour-cave-of-hira',
    name: 'Jabal al-Nour & Cave of Hira',
    arabicName: 'جبل النور وغار حراء',
    city: 'Makkah',
    category: 'mountain',
    shortDescription: 'The mountain and cave where Prophet Muhammad ﷺ received the very first Quranic revelations of Surah Al-Alaq from Angel Jibreel.',
    fullDescription: 'Rising 642 meters above Makkah, Jabal al-Nour (Mountain of Light) houses the intimate Cave of Hira near its summit. Prior to prophethood, Muhammad ﷺ retreated to this secluded cavern for days of contemplation (tahannuth) away from pagan idolatry. In 610 CE, during the month of Ramadan, Angel Jibreel appeared with the divine command: "Iqra!" (Read!).',
    historicalSignificance: 'The birthplace of the final divine revelation to humanity. The cave is oriented such that one could historically see the Kaaba in the distance before modern urban development.',
    visitorTips: [
      'The modern Revelation Cultural District at the foot of Jabal al-Nour features world-class multimedia exhibitions and modern amenities.',
      'If ascending the peak, begin 1.5 hours before Fajr or right before sunset to avoid severe daytime heat.',
      'Wear sturdy walking shoes with ankle support; the steep paved path has over 1,200 steps.',
      'Carry at least 1.5L of water and light electrolyte snacks.'
    ],
    location: {
      address: 'Hira Cultural District, Jabal An Nur, Makkah 24238',
      coordinates: { lat: 21.458056, lng: 39.859167 },
      distanceToHaramKm: 5.2,
      transportTip: '15-minute taxi or Careem ride from central Makkah to Hira Cultural District entrance.'
    },
    importance: 'highly_recommended',
    estimatedDurationMinutes: 180,
    bestTimeToVisit: 'Early morning (5:00 AM - 7:30 AM) or late afternoon after Asr',
    etiquette: [
      'Treat the historical landmark with solemn reverence.',
      'No specific religious ritual or prayer is ordained specifically inside the cave, though contemplating the inception of the Quran is deeply moving.',
      'Keep the mountain clean; do not litter bottles or wrappings along the trail.'
    ],
    images: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: false,
      physicalDifficulty: 'strenuous',
      stairsCount: 1200,
      shadeAvailable: false
    },
    references: [
      { source: 'Sahih al-Bukhari 3', text: 'The commencement of the Divine Inspiration to Allah\'s Messenger was in the form of good dreams... Then the love of seclusion was bestowed upon him.' }
    ]
  },
  {
    id: 'makkah-cave-thawr',
    slug: 'jabal-thawr-cave',
    name: 'Jabal Thawr & The Migration Cave',
    arabicName: 'جبل ثور وغار ثور',
    city: 'Makkah',
    category: 'mountain',
    shortDescription: 'The mountain refuge where Prophet Muhammad ﷺ and Abu Bakr As-Siddiq (RA) took sanctuary for three days during the historic Hijrah to Madinah.',
    fullDescription: 'Located south of Makkah, Jabal Thawr stands 759 meters high. In 622 CE, when Quraysh chieftains conspired to assassinate the Prophet ﷺ, he slipped away with his loyal companion Abu Bakr (RA). They concealed themselves inside the hollow aperture of Cave Thawr for three nights while Quraysh search parties combed the surrounding hills.',
    historicalSignificance: 'Immortalized in Surah At-Tawbah (9:40): "When they were in the cave and he said to his companion, \'Do not grieve; indeed Allah is with us.\'" Allah sent spiders to weave webs and doves to nest at the entrance, blinding the trackers.',
    visitorTips: [
      'The hike is steeper and longer than Jabal al-Nour; expect a 2 to 2.5 hour ascent.',
      'Not suitable for individuals with cardiovascular conditions, knee issues, or vertigo.',
      'Ensure you begin with a guided group or experienced local companion.'
    ],
    location: {
      address: 'Jabal Thawr, Al Hijrah, Makkah 24241',
      coordinates: { lat: 21.378889, lng: 39.851944 },
      distanceToHaramKm: 7.8,
      transportTip: '20-minute taxi ride south from the Haram area.'
    },
    importance: 'recommended',
    estimatedDurationMinutes: 240,
    bestTimeToVisit: 'Pre-dawn (4:30 AM) to summit by sunrise',
    etiquette: [
      'Avoid tagging or writing on rock surfaces.',
      'Do not engage in un-Islamic practices (rubbing stones, tying cloth strips).'
    ],
    images: [
      'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: false,
      physicalDifficulty: 'strenuous',
      shadeAvailable: false
    },
    references: [
      { source: 'Quran Surah At-Tawbah 9:40', text: 'If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, "Do not grieve; indeed Allah is with us."' }
    ]
  },
  {
    id: 'makkah-jabal-rahmah-arafat',
    slug: 'mount-arafat-jabal-ar-rahmah',
    name: 'Mount Arafat & Jabal ar-Rahmah',
    arabicName: 'جبل الرحمة وصعيد عرفات',
    city: 'Makkah',
    category: 'holy_site',
    shortDescription: 'The Plain of Arafat where the cornerstone of Hajj takes place, and the Mount of Mercy where the Farewell Sermon was delivered.',
    fullDescription: 'The Plain of Arafat is situated approximately 20 km southeast of central Makkah. It is the defining station of the annual Hajj pilgrimage ("Al-Hajju Arafah"). Within the plain stands Jabal ar-Rahmah (The Mount of Mercy), a modest granitic hill topped by a commemorative white pillar, where Prophet Muhammad ﷺ delivered his historic Khutbat al-Wada (Farewell Sermon) in 10 AH.',
    historicalSignificance: 'Where the Prophet ﷺ proclaimed the equality of all human beings regardless of race or ethnicity, established women\'s rights, and affirmed the sanctity of life and property. Tradition also associates Arafat as the place where Adam and Hawwa (Eve) reunited on earth.',
    visitorTips: [
      'Easily accessible year-round for Ziyarat visitors outside the Hajj season.',
      'Visit nearby Masjid Nimrah at the boundary of Arafat and the panoramic pedestrian viewpoints.',
      'The modern landscaped plaza surrounding the base of the hill offers easy staircases and paved ramps.'
    ],
    location: {
      address: 'Wadi Namirah, Mount Arafat, Makkah 24256',
      coordinates: { lat: 21.354722, lng: 39.984167 },
      distanceToHaramKm: 19.5,
      transportTip: '30-minute vehicle ride via the Al-Hada / Taif Highway or Southern Ring Road.'
    },
    importance: 'highly_recommended',
    estimatedDurationMinutes: 90,
    bestTimeToVisit: 'Late afternoon (3:30 PM - 5:30 PM)',
    etiquette: [
      'Stand facing the Qibla and make sincere, prolonged supplications for yourself, your family, and the global Ummah.',
      'Writing names on the white pillar is not from the Sunnah.'
    ],
    images: [
      'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    },
    references: [
      { source: 'Sunan an-Nasa\'i 3016', text: 'The Prophet ﷺ said: "Hajj is Arafah."' },
      { source: 'Sahih Muslim 1348', text: 'There is no day on which Allah frees more servants from the Fire than the Day of Arafah.' }
    ]
  },
  {
    id: 'makkah-mina-and-jamarat',
    slug: 'mina-tent-city-jamarat',
    name: 'Mina Valley & The Jamarat Complex',
    arabicName: 'مشعر منى وجسر الجمرات',
    city: 'Makkah',
    category: 'holy_site',
    shortDescription: 'The historic tent valley of Mina, where pilgrims stay during Hajj and stone the Jamarat symbolizing rejection of Shaytan.',
    fullDescription: 'Mina is a picturesque valley cradled between rocky mountains 8 km east of Makkah. It is famous for its vast white flame-retardant tent city and the state-of-the-art multi-tiered Jamarat Bridge complex. Here, Prophet Ibrahim (AS) pelted stones at the devil who attempted to dissuade him from fulfilling Allah\'s command.',
    historicalSignificance: 'Site of the historic Pledges of al-Aqabah (Bay\'at al-Aqabah) where the early converts from Yathrib (Madinah) pledged allegiance to the Messenger of Allah ﷺ before the Hijrah. Also houses the ancient Masjid al-Khaif where 70 prophets prayed.',
    visitorTips: [
      'Outside of Hajj, you can drive through the valley and observe the historic landmarks including Masjid al-Khaif and Masjid al-Bay\'ah.',
      'Masjid al-Bay\'ah is located near Jamarat al-Aqaba, preserving the open-air early Islamic archways.'
    ],
    location: {
      address: 'Mina Valley, Makkah 24247',
      coordinates: { lat: 21.413611, lng: 39.893333 },
      distanceToHaramKm: 7.2,
      transportTip: '15-minute taxi ride eastward via the King Khalid Bridge tunnels.'
    },
    importance: 'recommended',
    estimatedDurationMinutes: 60,
    bestTimeToVisit: 'Morning hours',
    etiquette: [
      'Contemplate the ultimate obedience of Ibrahim and Ismail (peace be upon them).'
    ],
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    }
  },
  {
    id: 'makkah-jannat-al-mualla',
    slug: 'jannat-al-mualla-cemetery',
    name: 'Jannat al-Mu\'alla (Al-Hajun Cemetery)',
    arabicName: 'مقبرة جنة المعلاة',
    city: 'Makkah',
    category: 'cemetery',
    shortDescription: 'The ancient historic cemetery of Makkah where Umm al-Mu\'minin Khadijah (RA) and esteemed ancestors are resting.',
    fullDescription: 'Jannat al-Mu\'alla is the venerable burial ground of Makkah located north of the Grand Mosque at the foot of Mount Hajun. It contains the resting places of the Prophet\'s beloved first wife Khadijah bint Khuwaylid (RA), his maternal grandfather Abdul Muttalib, his uncle and protector Abu Talib, his eldest son Qasim, and numerous Sahabah.',
    historicalSignificance: 'Prophet Muhammad ﷺ frequently visited this graveyard and made du\'a for its inhabitants. Khadijah (RA) was laid to rest here during the Year of Sorrow (Aam al-Huzn), before the institution of funeral prayers (Salat al-Janazah).',
    visitorTips: [
      'Located within walking distance (approx. 15-20 min) north of the Marwah exit of Masjid al-Haram.',
      'Visiting hours are generally organized immediately after the daily congregational prayers (especially Asr and Fajr).',
      'Follow traditional Islamic cemetery etiquette without raising voices or seeking intercession from graves.'
    ],
    location: {
      address: 'Al Hujoon St, Al Maabdah, Makkah 24231',
      coordinates: { lat: 21.436111, lng: 39.830556 },
      distanceToHaramKm: 1.6,
      walkingTimeMin: 18,
      transportTip: 'Easy 5-minute taxi or a brisk 15-minute walk north along Al-Hujoon Street.'
    },
    importance: 'highly_recommended',
    estimatedDurationMinutes: 45,
    bestTimeToVisit: 'After Asr or Fajr prayers',
    etiquette: [
      'Recite the sunnah greeting: "As-Salamu \'alaykum ahlad-diyar minal-mu\'minin wal-muslimin..."',
      'Keep your hands raised facing the Qibla when supplicating for the deceased.'
    ],
    images: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: false
    }
  },
  {
    id: 'makkah-masjid-aisha-taneem',
    slug: 'masjid-aisha-al-taneem-meeqat',
    name: 'Masjid Aisha (Meeqat al-Tan\'eem)',
    arabicName: 'مسجد السيدة عائشة (التنعيم)',
    city: 'Makkah',
    category: 'masjid',
    shortDescription: 'The primary Meeqat station for residents and pilgrims already inside Makkah who wish to enter into Ihram for an additional Umrah.',
    fullDescription: 'Located 7.5 km north of Masjid al-Haram along the Madinah highway, Masjid Aisha marks the boundary of the Haram (Al-Hill). During the Farewell Pilgrimage, when Aisha (RA) missed her initial Umrah due to her menstrual cycle, the Prophet ﷺ instructed her brother Abdur-Rahman ibn Abi Bakr to take her to Tan\'eem to don her Ihram and perform Umrah.',
    historicalSignificance: 'The universally designated local Meeqat point for pilgrims renewing their Ihram. The grand modern mosque boasts extensive bathing facilities, spacious ablution plazas, and Ihram dressing rooms.',
    visitorTips: [
      'Taxis and minibuses run 24/7 directly between the underground Haram transport terminals and Masjid Aisha for a minimal fare.',
      'Ensure you perform ghusl, wear clean Ihram garments, and make the Niyyah (intention) and Talbiyah before departing the mosque back toward the Haram.'
    ],
    location: {
      address: 'Al-Madinah Al-Munawwarah Rd, At Taniem, Makkah 24412',
      coordinates: { lat: 21.493889, lng: 39.798611 },
      distanceToHaramKm: 7.5,
      transportTip: '10-minute taxi or frequent SAPTCO bus from Bab Ali/Ajyad terminal.'
    },
    importance: 'essential',
    estimatedDurationMinutes: 60,
    bestTimeToVisit: 'Any time of day or night when intending an additional Umrah',
    etiquette: [
      'Pray 2 Rak\'ah Sunnah after purification if not during disliked prayer times.',
      'Proclaim the Talbiyah: "Labbayka Allahumma \'Umrah".'
    ],
    images: [
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    }
  },

  // ==========================================
  // AL-MADINAH AL-MUNAWARAH PLACES
  // ==========================================
  {
    id: 'madinah-masjid-an-nabawi',
    slug: 'masjid-an-nabawi-rawdah-sharifah',
    name: 'Al-Masjid an-Nabawi & Rawdah ash-Sharifah',
    arabicName: 'المسجد النبوي الشريف والروضة المباركة',
    city: 'Madinah',
    category: 'holy_site',
    shortDescription: 'The Prophet\'s Mosque featuring the blessed Green Dome, the Sacred Chamber, and the Rawdah described as a garden from Paradise.',
    fullDescription: 'Al-Masjid an-Nabawi is the heart and sanctuary of the illuminated city of Madinah. Built originally by the Prophet ﷺ and his companions after the Hijrah in 622 CE, it has expanded into one of the largest architectural marvels in the world with iconic automated umbrella shades. It houses the Sacred Chamber (Hujrah) containing the resting places of Prophet Muhammad ﷺ, Abu Bakr (RA), and Umar ibn Al-Khattab (RA). Between the Prophet\'s minbar and his house lies Ar-Rawdah ash-Sharifah.',
    historicalSignificance: 'The administrative and spiritual center of the first Islamic commonwealth. A prayer here is superior to 1,000 prayers elsewhere. The Prophet ﷺ said: "Between my house and my pulpit is a garden from the gardens of Paradise."',
    visitorTips: [
      'Entry to Ar-Rawdah ash-Sharifah requires a pre-booked appointment permit via the official Nusuk app.',
      'The spacious marble courtyards with giant convertible umbrellas feature cool misters and chilled Zamzam jars throughout.',
      'Men can perform Salam at the Sacred Chamber (Bab As-Salam to Bab Al-Baqi) without a permit during designated non-prayer open windows.',
      'Women have designated visiting hours for the Rawdah (usually morning post-Ishraq and late evening).'
    ],
    location: {
      address: 'Al Haram, Madinah 42311, Saudi Arabia',
      coordinates: { lat: 24.467211, lng: 39.610853 },
      distanceToHaramKm: 0,
      walkingTimeMin: 0,
      transportTip: 'Directly at the core of all central Madinah northern, southern, and western hotel corridors.'
    },
    importance: 'essential',
    estimatedDurationMinutes: 240,
    bestTimeToVisit: 'Tahajjud hours before Fajr through mid-morning',
    etiquette: [
      'Maintain serene silence and lower your voice in honor of the Messenger of Allah ﷺ (Surah Al-Hujurat 49:2).',
      'Offer respectful greetings: "As-Salamu \'alayka ya Rasul Allah, wa rahmatullahi wa barakatuh."',
      'Pray 2 Rak\'ah in the Rawdah when blessed with a permit.'
    ],
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80'
    ],
    permitsRequired: 'Nusuk App permit required for Rawdah ash-Sharifah',
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    },
    references: [
      { source: 'Sahih al-Bukhari 1195', text: 'Between my house and my pulpit is one of the gardens of Paradise, and my pulpit is upon my cistern.' },
      { source: 'Sahih Muslim 1394', text: 'One prayer in my mosque is better than one thousand prayers anywhere else, except Al-Masjid al-Haram.' }
    ]
  },
  {
    id: 'madinah-masjid-quba',
    slug: 'masjid-quba-first-mosque',
    name: 'Masjid Quba (The First Mosque in Islam)',
    arabicName: 'مسجد قباء أول مسجد في الإسلام',
    city: 'Madinah',
    category: 'masjid',
    shortDescription: 'The very first mosque built in Islamic history, where praying 2 Rak\'ah carries the divine reward equivalent to a complete Umrah.',
    fullDescription: 'Located 3.5 km south of the Prophet\'s Mosque, Masjid Quba was established by Prophet Muhammad ﷺ upon arriving at the village of Quba during the Hijrah. The Prophet ﷺ personally participated in carrying rocks and building materials for its foundation.',
    historicalSignificance: 'Praised in the Quran (Surah At-Tawbah 9:108): "A mosque founded on righteousness from the first day is more worthy for you to stand in." The Messenger of Allah ﷺ would visit Quba every Saturday, walking or riding, to pray two units of prayer.',
    visitorTips: [
      'Walk along the beautiful pedestrianized Quba Boulevard (Darb as-Sunnah), a scenic paved 3 km walking promenade connecting Masjid an-Nabawi to Masjid Quba.',
      'Electric golf carts and shuttle buses are available along the walkway for seniors and families with children.',
      'Ensure you make Wudu (ablution) at your hotel before departing to attain the full sunnah reward.'
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
      'Offer two rak\'ahs of Nafl / Tahiyyat al-Masjid with sincere devotion.'
    ],
    images: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    },
    references: [
      { source: 'Sunan Ibn Majah 1412', text: 'Whoever purifies himself in his house, then comes to the mosque of Quba and prays in it, will have a reward like the Umrah.' }
    ]
  },
  {
    id: 'madinah-mount-uhud-and-martyrs',
    slug: 'mount-uhud-archers-hill-martyrs',
    name: 'Mount Uhud, Archers\' Hill & Martyrs Cemetery',
    arabicName: 'جبل أحد وجبل الرماة ومقبرة سيد الشهداء',
    city: 'Madinah',
    category: 'historical_battle',
    shortDescription: 'The mountain beloved by the Prophet ﷺ, the site of the Battle of Uhud, and the resting place of Sayyid ash-Shuhada Hamza (RA).',
    fullDescription: 'Mount Uhud is an iconic 7 km red-granite mountain range standing north of Madinah. In 3 AH (625 CE), the momentous Battle of Uhud took place at its base. The complex includes Jabal ar-Rumah (Archers\' Hill) where 50 archers were posted, and the fenced cemetery preserving the resting places of 70 noble martyrs, chief among them the Prophet\'s beloved uncle Hamza ibn Abdul Muttalib (RA) and Mus\'ab ibn Umair (RA).',
    historicalSignificance: 'Prophet Muhammad ﷺ declared: "Uhud is a mountain that loves us and we love it." He regularly visited the martyrs\' resting place to greet and supplicate for them. The battle offered timeless lessons in obedience, resilience, and faith.',
    visitorTips: [
      'Climb the gentle steps of Archers\' Hill (Jabal ar-Rumah) for a clear panoramic vantage point over the historic battlefield.',
      'Visit the newly constructed grand Sayyid ash-Shuhada Mosque adjacent to the plaza.',
      'Local date and mint vendors gather in the square with fresh authentic Madinah produce.'
    ],
    location: {
      address: 'Sayed Al Shuhada, Madinah 42321',
      coordinates: { lat: 24.503333, lng: 39.612222 },
      distanceToHaramKm: 4.8,
      transportTip: '12-minute taxi ride north or board the Madinah City Tour Hop-On Hop-Off bus.'
    },
    importance: 'essential',
    estimatedDurationMinutes: 90,
    bestTimeToVisit: 'Morning hours (8:00 AM - 10:30 AM) or after Asr',
    etiquette: [
      'Stand respectfully outside the viewing windows of the martyrs\' cemetery and recite Salam and prayers for Hamza (RA) and all the Shuhada.',
      'Refrain from stepping on the preserved grave plots.'
    ],
    images: [
      'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    },
    references: [
      { source: 'Sahih al-Bukhari 4084', text: 'The Prophet ﷺ looked at Uhud and said: "This is a mountain that loves us and we love it."' }
    ]
  },
  {
    id: 'madinah-masjid-al-qiblatayn',
    slug: 'masjid-al-qiblatayn-two-qiblas',
    name: 'Masjid al-Qiblatayn (Mosque of the Two Qiblas)',
    arabicName: 'مسجد القبلتين ذو القبلتين',
    city: 'Madinah',
    category: 'masjid',
    shortDescription: 'The historic mosque where the divine revelation commanded the change of prayer direction from Jerusalem (Al-Quds) to the Kaaba in Makkah.',
    fullDescription: 'In the 2nd year of Hijrah (624 CE), while Prophet Muhammad ﷺ was leading the congregation in Dhuhr or Asr prayer at this mosque in the Banu Salamah district, the divine command came in Surah Al-Baqarah (2:144): "Turn your face toward al-Masjid al-Haram." The Prophet ﷺ turned 180 degrees mid-prayer from facing Bayt al-Maqdis toward the Kaaba in Makkah, and the entire congregation followed seamlessly.',
    historicalSignificance: 'The physical embodiment of the Muslim community\'s unified spiritual orientation. The recently renovated dual-level mosque and visitor center showcases the architectural heritage and visual history of the Qibla redirection.',
    visitorTips: [
      'Features a newly upgraded plaza with shaded gardens, elevators, and multimedia historical galleries.',
      'Easily combined in a single morning itinerary alongside Masjid Quba and Mount Uhud.'
    ],
    location: {
      address: 'Al Qiblatayn, Madinah 42351',
      coordinates: { lat: 24.484167, lng: 39.578611 },
      distanceToHaramKm: 4.1,
      transportTip: '10-minute taxi ride northwest from central Madinah.'
    },
    importance: 'highly_recommended',
    estimatedDurationMinutes: 60,
    bestTimeToVisit: 'Mid-morning or between Maghrib and Isha',
    etiquette: [
      'Offer 2 Rak\'ah Tahiyyat al-Masjid facing the blessed Kaaba.'
    ],
    images: [
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    },
    references: [
      { source: 'Quran Surah Al-Baqarah 2:144', text: 'We have certainly seen the turning of your face, [O Muhammad], toward the heaven, and We will surely turn you to a Qibla with which you will be pleased. So turn your face toward al-Masjid al-Haram.' }
    ]
  },
  {
    id: 'madinah-jannat-al-baqi',
    slug: 'jannat-al-baqi-cemetery',
    name: 'Jannat al-Baqi (Baqi al-Gharqad)',
    arabicName: 'جنة البقيع (بقيع الغرقد)',
    city: 'Madinah',
    category: 'cemetery',
    shortDescription: 'The sacred main cemetery of Madinah adjacent to the Prophet\'s Mosque, containing over 10,000 Sahabah and members of the Ahl al-Bayt.',
    fullDescription: 'Directly bordering the eastern perimeter of Masjid an-Nabawi, Jannat al-Baqi is the most blessed burial ground in the Islamic world. Among those buried here are the Prophet\'s daughters Fatimah az-Zahra, Ruqayyah, Umm Kulthum, and Zaynab; his wives (Mothers of the Believers, except Khadijah and Maymunah); his grandson Al-Hasan (RA); third Caliph Uthman ibn Affan (RA); and Imam Malik.',
    historicalSignificance: 'Prophet Muhammad ﷺ was commanded by Allah to visit Baqi repeatedly at night to pray for their forgiveness. On the Day of Resurrection, the Prophet ﷺ said he would be the first to emerge from the earth, followed by the people of Baqi, then the people of Makkah.',
    visitorTips: [
      'The cemetery gates open for male visitors twice daily: immediately after Salat al-Fajr for approximately 1.5 hours, and again after Salat al-Asr.',
      'Visible from the exterior viewing railings and upper hotel rooms facing the eastern Haram courtyard for women.',
      'Walk calmly along the paved stone paths.'
    ],
    location: {
      address: 'Eastern Courtyard of Masjid an-Nabawi, Madinah 42311',
      coordinates: { lat: 24.467778, lng: 39.614444 },
      distanceToHaramKm: 0.1,
      walkingTimeMin: 2,
      transportTip: 'Directly accessible on foot exiting Bab al-Baqi or Bab Ali.'
    },
    importance: 'essential',
    estimatedDurationMinutes: 45,
    bestTimeToVisit: 'Immediately following Fajr or Asr prayer',
    etiquette: [
      'Recite the sunnah du\'a for the deceased with deep contemplation.',
      'Avoid weeping loudly or touching dirt mounds.'
    ],
    images: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: false
    },
    references: [
      { source: 'Sahih Muslim 974', text: 'Whenever it was the night of Aisha, the Messenger of Allah ﷺ would go out toward the end of the night to Al-Baqi...' }
    ]
  },
  {
    id: 'madinah-the-seven-mosques-khandaq',
    slug: 'seven-mosques-battle-of-trench-khandaq',
    name: 'The Seven Mosques & Battle of the Trench (Khandaq)',
    arabicName: 'المساجد السبعة وموقع غزوة الخندق',
    city: 'Madinah',
    category: 'historical_battle',
    shortDescription: 'The site of the Battle of Ahzab (The Trench), where Salman al-Farsi recommended digging a trench that protected Madinah from confederate armies.',
    fullDescription: 'Located on the western slopes of Mount Sela, this historic area marks the military command posts of the Battle of the Trench (5 AH / 627 CE). The complex preserves several historical small mosques named after the Prophet ﷺ and prominent companions (Masjid Al-Fath, Masjid Salman Al-Farsi, Masjid Abu Bakr, Masjid Umar, Masjid Ali, and Masjid Fatimah), alongside the majestic modern Al-Khandaq Mosque.',
    historicalSignificance: 'Where the Prophet ﷺ supplicated for three days at Masjid Al-Fath until Allah sent a fierce freezing wind that scattered the 10,000-strong confederate army of Quraysh and allied tribes without direct clash.',
    visitorTips: [
      'The modern Al-Khandaq Mosque serves as the central focal point with elevated courtyards overlooking Mount Sela.',
      'A wonderful educational location to reflect on Islamic strategic ingenuity and steadfast faith in adversity.'
    ],
    location: {
      address: 'Al Rayah, Madinah 42312',
      coordinates: { lat: 24.475833, lng: 39.593889 },
      distanceToHaramKm: 2.8,
      transportTip: '8-minute taxi northwest from the Grand Mosque.'
    },
    importance: 'recommended',
    estimatedDurationMinutes: 60,
    bestTimeToVisit: 'Late afternoon or early evening',
    etiquette: [
      'Reflect on the patience and unity of the Prophet and Sahabah during the harsh siege.'
    ],
    images: [
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    }
  },
  {
    id: 'madinah-prophets-biography-museum',
    slug: 'international-fair-prophets-biography-museum',
    name: 'International Fair & Museum of the Prophet\'s Biography',
    arabicName: 'معرض ومتحف السيرة النبوية والحضارة الإسلامية',
    city: 'Madinah',
    category: 'museum',
    shortDescription: 'State-of-the-art interactive museum adjacent to the Prophet\'s Mosque showcasing 3D replicas, holograms, and historical exhibits of the Seerah.',
    fullDescription: 'Located right in the southern plaza of Masjid an-Nabawi, this world-renowned exhibition uses cutting-edge VR, 3D architectural models, interactive touch displays, and cinematic theaters to bring the life and era of Prophet Muhammad ﷺ to life in multiple languages.',
    historicalSignificance: 'Features exact architectural reconstructions of the Prophet\'s original home, the construction phases of the mosque, the topography of ancient Madinah, and the virtues of Islamic civilization.',
    visitorTips: [
      'Book your timed-entry tickets online or at the entrance booth in the southern courtyard.',
      'Audio guides and multilingual guides (English, Arabic, Urdu, French, Indonesian, Turkish) are provided.'
    ],
    location: {
      address: 'Southern Courtyard, Masjid an-Nabawi, Madinah 42311',
      coordinates: { lat: 24.464722, lng: 39.610833 },
      distanceToHaramKm: 0.1,
      walkingTimeMin: 2,
      transportTip: 'Directly in the southern courtyard of the Prophet\'s Mosque.'
    },
    importance: 'highly_recommended',
    estimatedDurationMinutes: 90,
    bestTimeToVisit: 'Between 9:00 AM - 12:00 PM or 4:30 PM - 10:00 PM',
    etiquette: [
      'Maintain an inquisitive and respectful demeanor; photography is permitted in designated exhibition wings.'
    ],
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80'
    ],
    accessibility: {
      wheelchairAccessible: true,
      physicalDifficulty: 'easy',
      shadeAvailable: true
    }
  }
];
