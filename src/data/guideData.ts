import { UmrahStep } from '../types';

export const UMRAH_STEPS: UmrahStep[] = [
  {
    step: 1,
    id: 'preparation-and-ihram',
    stage: 'ihram',
    title: 'Entering Ihram & Niyyah (Intention)',
    arabicTitle: 'الإحرام والنية',
    subtitle: 'Physical purification, donning the unstitched garments, and setting sincere intention before passing the Meeqat.',
    description: 'Ihram is the sacred spiritual state required to perform Umrah. Before crossing the boundary (Meeqat), the pilgrim purifies their body, trims nails, clips moustache, takes a full ghusl (bath), and dons the prescribed simple white attire.',
    sunnahs: [
      'Perform full Ghusl (ritual bath) with the intention of entering Ihram.',
      'Clip nails, trim moustache, and remove unwanted body hair before donning Ihram.',
      'Men apply fragrance to their head and beard before the intention (no fragrance on the cloth itself).',
      'Wear two clean white unstitched sheets (Izar and Rida) for men; women wear modest, loose regular clothing without face-veil (Niqab) or gloves.'
    ],
    prohibitions: [
      'Applying perfume or scented soap after making the Niyyah.',
      'Cutting hair, trimming nails, or removing any body hair.',
      'Men wearing stitched garments (shirts, trousers, underwear) or covering the head.',
      'Engaging in marital relations, arguments, or foul language.'
    ],
    stepByStepGuide: [
      'Perform Ghusl and put on the Ihram garments.',
      'Offer 2 Rak\'ah of Sunnah prayer (if not during prohibited prayer times).',
      'Recite the Niyyah (intention) for Umrah when reaching the Meeqat point or shortly before your flight crosses it.',
      'Begin loudly reciting the Talbiyah (for men) and softly (for women) continuously until reaching the Kaaba.'
    ],
    duas: [
      {
        id: 'dua-niyyah-umrah',
        title: 'Niyyah (Intention for Umrah)',
        occasion: 'Recite when crossing the Meeqat in Ihram',
        arabic: 'لَبَّيْكَ اللَّهُمَّ عُمْرَةً',
        transliteration: "Labbayk Allahumma 'Umrah",
        translation: 'Here I am, O Allah, answering Your call for Umrah.',
        repeatCount: 'Recited once at intention'
      },
      {
        id: 'dua-talbiyah',
        title: 'The Great Talbiyah',
        occasion: 'Recited continuously during travel and entry into Makkah',
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ',
        transliteration: "Labbayka Allahumma Labbayk, Labbayka Laa Shareeka Laka Labbayk, Innal-Hamda Wan-Ni'mata Laka Wal-Mulk, Laa Shareeka Lak",
        translation: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace, and dominion belong to You. You have no partner.',
        repeatCount: 'Repeat frequently with presence of heart'
      }
    ]
  },
  {
    step: 2,
    id: 'entering-masjid-al-haram',
    stage: 'meeqat',
    title: 'Entering Al-Masjid al-Haram',
    arabicTitle: 'دخول المسجد الحرام',
    subtitle: 'Entering the sanctuary of peace with humility, right foot first, and awe upon sighting the Kaaba.',
    description: 'Upon arriving in the holy city of Makkah, proceed to Al-Masjid al-Haram. Enter with deep veneration, keeping your tongue moist with remembrance and seeking the mercy of Allah.',
    sunnahs: [
      'Enter through any convenient gate (historically Bab As-Salam), leading with your right foot.',
      'Men uncover the right shoulder by tucking the upper sheet under the right armpit and throwing it over the left shoulder (Idtiba) for the upcoming Tawaf.'
    ],
    stepByStepGuide: [
      'Enter through the courtyard with right foot while reciting the mosque entry supplication.',
      'Upon seeing the Kaaba for the first time, make sincere du\'as, as supplications upon viewing the Kaaba are historically accepted.',
      'Stop reciting the Talbiyah once you commence the Tawaf.'
    ],
    duas: [
      {
        id: 'dua-entering-masjid',
        title: 'Dua for Entering the Mosque',
        occasion: 'Upon stepping right foot into the Grand Mosque',
        arabic: 'بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
        transliteration: "Bismillahi was-salatu was-salamu 'ala Rasulillah. Allahumma-ftah li abwaba rahmatika",
        translation: 'In the name of Allah, and peace and blessings be upon the Messenger of Allah. O Allah, open for me the gates of Your mercy.'
      },
      {
        id: 'dua-sighting-kaaba',
        title: 'Dua on Sighting the Kaaba',
        occasion: 'First glimpse of the blessed Kaaba',
        arabic: 'اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً، وَزِدْ مَنْ شَرَّفَهُ وَعَظَّمَهُ مِمَّنْ حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيفًا وَتَكْرِيمًا وَتَعْظِيمًا وَبِرًّا',
        transliteration: "Allahumma zid hadhal-bayta tashreefan wa ta'zeeman wa takreeman wa mahabah, wa zid man sharrafahu wa 'azzamahu mimman hajjahu awi'tamarahu tashreefan wa takreeman wa ta'zeeman wa birra",
        translation: 'O Allah, increase this House in honor, esteem, respect, and reverence. And increase those who honor and respect it, among those who perform Hajj or Umrah, in honor, esteem, and piety.'
      }
    ]
  },
  {
    step: 3,
    id: 'tawaf-around-kaaba',
    stage: 'tawaf',
    title: 'Tawaf (7 Circumambulations)',
    arabicTitle: 'الطواف حول الكعبة المشرفة',
    subtitle: 'Circling the Kaaba 7 times counter-clockwise, starting and ending at the Black Stone (Al-Hajar al-Aswad).',
    description: 'Tawaf is a profound act of devotion representing the celestial alignment of angels circling the Divine Throne. The pilgrim begins aligned with the green light indicator marking the Black Stone line, completes 7 circuits keeping the Kaaba on the left.',
    sunnahs: [
      'Idtiba (uncovering the right shoulder for men throughout all 7 rounds of Tawaf).',
      'Raml (brisk, purposeful walking with short paces) for men during the first 3 rounds only; normal walk for the remaining 4 rounds.',
      'Pointing the right hand toward the Black Stone and saying "Bismillahi Allahu Akbar" at the start of each circuit (Istilam) if unable to touch it without crowding.',
      'Touching the Yamani Corner (Rukn al-Yamani) with the right hand without kissing, or continuing without gesturing if crowded.'
    ],
    stepByStepGuide: [
      'Align yourself with the Black Stone corner (indicated by green lights on the mosque wall).',
      'Raise your right hand toward the Black Stone, say "Bismillahi Allahu Akbar", and begin circuit 1.',
      'Keep the Kaaba to your left and move counter-clockwise.',
      'Between the Yemeni Corner and the Black Stone, recite the famous Quranic dua.',
      'Complete exactly 7 circuits ending at the Black Stone line.'
    ],
    duas: [
      {
        id: 'dua-start-circuit',
        title: 'Istilam (Starting each Tawaf circuit)',
        occasion: 'Facing the Black Stone line',
        arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
        transliteration: 'Bismillahi Allahu Akbar',
        translation: 'In the name of Allah, Allah is the Greatest.'
      },
      {
        id: 'dua-between-rukn-yamani-and-black-stone',
        title: 'Dua between Yemeni Corner & Black Stone',
        occasion: 'Recited during the final stretch of every single circuit',
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
        translation: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire. (Surah Al-Baqarah 2:201)',
        reference: 'Sunan Abi Dawud 1892'
      }
    ]
  },
  {
    step: 4,
    id: 'maqam-ibrahim-and-zamzam',
    stage: 'maqam_ibrahim',
    title: 'Prayer at Maqam Ibrahim & Drinking Zamzam',
    arabicTitle: 'صلاة ركعتي الطواف والشرب من زمزم',
    subtitle: 'Praying 2 Rak\'ahs behind the Station of Ibrahim and drinking refreshing Zamzam water with du\'a.',
    description: 'After completing the 7 circuits of Tawaf, cover your right shoulder. Proceed to the area behind Maqam Ibrahim (or anywhere in the Haram if crowded) to pray 2 light rak\'ahs, then drink blessed Zamzam water until satisfied.',
    sunnahs: [
      'Cover both shoulders with the upper Ihram garment before prayer.',
      'Recite Surah Al-Kafirun in the 1st Rak\'ah and Surah Al-Ikhlas in the 2nd Rak\'ah.',
      'Drink Zamzam water while standing, facing the Qibla, and pour some water over your head.'
    ],
    stepByStepGuide: [
      'Walk toward Maqam Ibrahim reciting Surah Al-Baqarah 2:125.',
      'Perform 2 Rak\'ahs of Tawaf prayer.',
      'Head to the Zamzam water dispensing points, drink with deep intention and make supplications.'
    ],
    duas: [
      {
        id: 'dua-maqam-ibrahim-verse',
        title: 'Approaching Maqam Ibrahim',
        occasion: 'While walking to pray after Tawaf',
        arabic: 'وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى',
        transliteration: "Wattakhidhu mim-maqami Ibraheema musalla",
        translation: 'And take the Station of Ibrahim as a place of prayer. (Surah Al-Baqarah 2:125)'
      },
      {
        id: 'dua-drinking-zamzam',
        title: 'Dua When Drinking Zamzam',
        occasion: 'Before or while drinking Zamzam',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا وَاسِعًا، وَشِفَاءً مِنْ كُلِّ دَاءٍ',
        transliteration: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan wasi'an, wa shifa'an min kulli da'",
        translation: 'O Allah, I ask You for beneficial knowledge, abundant provision, and cure from every ailment.'
      }
    ]
  },
  {
    step: 5,
    id: 'saee-safa-marwah',
    stage: 'saee',
    title: 'Sa\'ee (7 Laps Between Safa & Marwah)',
    arabicTitle: 'السعي بين الصفا والمروة',
    subtitle: 'Walking 7 laps between Mount Safa and Mount Marwah, commemorating the devotion of Lady Hajar.',
    description: 'Proceed to the Mas\'a (the air-conditioned gallery connecting Safa and Marwah). The ritual begins at Mount Safa and concludes at Mount Marwah after 7 one-way journeys (Safa to Marwah is 1, Marwah to Safa is 2, etc.).',
    sunnahs: [
      'Ascend Mount Safa until the Kaaba is visible, face the Qibla, and declare the Takbeer and Tahlil 3 times.',
      'Men jog at a brisk pace between the green neon lights (Batn al-Wadi); women walk at normal pace throughout.',
      'Supplicate continuously with personal du\'as and remembrance along the walkway.'
    ],
    stepByStepGuide: [
      'Approach Mount Safa and recite Surah Al-Baqarah 2:158.',
      'Stand at Safa facing the Kaaba, raise your hands, and recite the Sunnah remembrance 3 times.',
      'Walk toward Marwah. Men run moderately between the two sets of green lights.',
      'Arrive at Marwah (1 lap completed), face the Qibla, and repeat the same remembrance as on Safa.',
      'Repeat until 7 laps are completed, ending on Mount Marwah.'
    ],
    duas: [
      {
        id: 'dua-safa-approach',
        title: 'Approaching Mount Safa',
        occasion: 'First climbing onto the rocks of Safa',
        arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ ۖ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ. نَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ',
        transliteration: "Innas-Safa wal-Marwata min sha'a'irillah. Famman hajjal-bayta awi'tamara fala junaha 'alayhi an yattawwafa bihima. Wa man tatawwa'a khayran fa'innallaha Shakirun 'Aleem. Nabda'u bima bada'allahu bih",
        translation: 'Indeed, Safa and Marwah are among the symbols of Allah... We begin with that which Allah began with.'
      },
      {
        id: 'dua-on-safa-and-marwah',
        title: 'Remembrance on Safa and Marwah',
        occasion: 'Facing the Kaaba atop Safa and Marwah (recited 3 times)',
        arabic: 'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الأَحْزَابَ وَحْدَهُ',
        transliteration: "Allahu Akbar, Allahu Akbar, Allahu Akbar. La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in Qadeer. La ilaha illallahu wahdah, anjaza wa'dah, wa nasara 'abdah, wa hazamal-ahzaba wahdah",
        translation: 'Allah is Greatest, Allah is Greatest, Allah is Greatest. There is no deity except Allah alone, without partner. His is the sovereignty and His is the praise, and He is over all things omnipotent. There is no deity except Allah alone; He fulfilled His promise, granted victory to His servant, and defeated the confederates alone.'
      }
    ]
  },
  {
    step: 6,
    id: 'tahalul-hair-cutting',
    stage: 'tahalul',
    title: 'Halq or Taqsir (Shaving or Trimming Hair)',
    arabicTitle: 'الحلق أو التقصير والتحلل',
    subtitle: 'Concluding the Umrah rites, shaving or trimming hair, and lifting all Ihram restrictions.',
    description: 'The final rite of Umrah is cutting the hair. Men may shave their entire head (Halq, which is superior and receives threefold blessings) or trim hair evenly around the entire head (Taqsir). Women clip the length of a fingertip (approx. 1-2 cm) from the end of their braid or gathered hair.',
    sunnahs: [
      'Halq (complete shaving) for men carries greater reward as the Prophet ﷺ supplicated for those who shave three times and those who trim once.',
      'Shaving or clipping should cover the entire head, not just patches.'
    ],
    stepByStepGuide: [
      'Visit any licensed barbershop located in the commercial centers surrounding Masjid al-Haram (Abraj Al-Bait, Safwa, Jabal Omar).',
      'Have your hair shaved or trimmed cleanly using hygienic, single-use blades.',
      'Women may trim their own fingertip-length section in the privacy of their hotel room.',
      'Say "Alhamdulillah" — your Umrah is now complete and all Ihram prohibitions are officially lifted!'
    ],
    duas: [
      {
        id: 'dua-umrah-completion',
        title: 'Gratitude upon Completion of Umrah',
        occasion: 'After cutting hair',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ، اللَّهُمَّ تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
        transliteration: "Alhamdulillahi-lladhi bi ni'matihi tatimmus-salihat. Allahumma taqabbal minna innaka Antas-Samee'ul-'Aleem",
        translation: 'Praise be to Allah by Whose grace good deeds are completed. O Allah, accept this from us, for You are indeed the All-Hearing, the All-Knowing.'
      }
    ]
  }
];
