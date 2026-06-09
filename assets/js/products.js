// 91GI Products Database — Geographical Indication Products of India
// Each product carries a story of heritage, soil, hands, and history.

const PRODUCTS = [
  // ============ BEFACH SPECIAL ============
  {
    id: 'befach-low-diabetic-rice',
    name: 'Befach Low Diabetic Rice',
    category: 'Rice',
    region: 'India',
    state: 'Special',
    price: 449,
    mrp: 599,
    unit: '1 kg',
    badge: 'Befach Special',
    featured: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=900&q=85',
    tagline: 'Rice that loves you back.',
    shortDesc: 'A low-glycemic-index rice crafted for the modern Indian — keeps the taste, drops the spike.',
    story: `For decades, Indian households have shared one quiet ache at the dinner table: the love for rice, and the fear of what it does to the body. Befach Low Diabetic Rice was born from that conflict — a careful answer to a generational compromise.\n\nGrown using a low-GI varietal protocol, slow-aged, and hand-finished, this rice keeps the fragrance of a freshly cooked pot of biryani and the comfort of a simple home meal, while staying gentle on blood sugar. It is rice for the family elder who was told to give it up, for the young professional who is watching their numbers, for the mother feeding a family of different needs from one pot.\n\nThis is not a substitute. It is rice — only kinder.`,
    keyFacts: [
      'Low Glycemic Index (≈ 52)',
      'Slow-aged for 6 months',
      'No polishing chemicals',
      'Diabetic-friendly tested'
    ]
  },

  // ============ RICE ============
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    category: 'Rice',
    region: 'Indo-Gangetic plains',
    state: 'India (Punjab)',
    price: 599,
    mrp: 749,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=900&q=85',
    tagline: 'The queen of fragrance.',
    shortDesc: 'Long-grain, slow-aged, perfumed Basmati from the foothills of the Himalayas.',
    story: `There is a moment, just before a Basmati grain swells in boiling water, when the kitchen catches a scent that has travelled centuries — through Mughal courts, through grandmothers' brass pots, through wedding feasts under tents. That scent is its signature.\n\nThe Indo-Gangetic plains — fed by Himalayan snowmelt and held by alluvial soil — grow this rice in conditions that simply cannot be replicated elsewhere. Try to grow Basmati outside this belt and it forgets how to smell like itself.\n\nGiven its GI tag in 2016 after a long legal battle to protect it from imitators abroad, Basmati is more than a grain. It is the proof that the land you are grown on, decides who you are.`,
    keyFacts: [
      'GI Tag: 2016',
      'Aged 12+ months for aroma',
      'Extra-long grain (>7mm cooked)',
      'Grown in 7 Indian states'
    ]
  },
  {
    id: 'seeraga-samba',
    name: 'Seeraga Samba Rice',
    category: 'Rice',
    region: 'Seeraga Samba',
    state: 'Tamil Nadu',
    price: 389,
    mrp: 469,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1626197031507-c17099753214?w=900&q=85',
    tagline: 'The soul of South Indian biryani.',
    shortDesc: 'Tiny pearl-grain rice — the secret behind every legendary Tamil Nadu biryani.',
    story: `In the small towns of Tamil Nadu — Dindigul, Ambur, Vaniyambadi — biryani is religion. And the rice it is made with is not Basmati. It is Seeraga Samba: tiny, dense, the size of cumin seeds, holding spice the way a sponge holds water.\n\nFor generations, this rice has refused to grow soft. It stands its ground in heat, soaks up ghee and masala, and yet — bite into it — it still has texture. That stubbornness is exactly what makes it beloved.\n\nIts GI recognition came late, but the people of Tamil Nadu have known its worth for over 150 years. Every Sunday biryani in a Tamil home is a quiet vote of confidence in this grain.`,
    keyFacts: [
      'Cumin-sized grain',
      'High absorption for biryani',
      'Native to Tamil Nadu',
      'Traditional Sunday-feast rice'
    ]
  },
  {
    id: 'ambemohar-rice',
    name: 'Ambemohar Rice',
    category: 'Rice',
    region: 'Ambemohar',
    state: 'Maharashtra',
    price: 279,
    mrp: 349,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1568347877321-f8935c7dc5a8?w=900&q=85',
    tagline: 'Rice that smells of mango blossom.',
    shortDesc: 'A heritage Maharashtrian rice whose aroma is famously compared to mango flowers.',
    story: `Ambemohar takes its name from two Marathi words — "Amba" (mango) and "Mohar" (blossom). In the rice belts of western Maharashtra, when the new harvest is cooked, the steam carries an unmistakable floral note that locals have always sworn smells exactly like a mango tree in bloom.\n\nThis is everyday rice for Pune households — soft, sticky, ideal with varan-bhaat and a spoon of ghee. It is the rice your grandmother served you when you visited in summer holidays, the one no five-star restaurant ever managed to imitate.\n\nThe GI tag protects what was almost lost — Ambemohar acreage had been shrinking for decades, replaced by higher-yielding hybrids. Buying it now means farmers keep planting it.`,
    keyFacts: [
      'Mango-blossom aroma',
      'Soft, sticky texture',
      'Best with varan-bhaat',
      'Grown in Western Ghats foothills'
    ]
  },
  {
    id: 'gobindobhog-rice',
    name: 'Gobindobhog Rice',
    category: 'Rice',
    region: 'Gobindobhog',
    state: 'West Bengal',
    price: 329,
    mrp: 419,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1601001815853-3835274403b3?w=900&q=85',
    tagline: 'Rice fit for the gods.',
    shortDesc: "Bengal's heritage short-grain rice — the rice of temple offerings and Sunday payesh.",
    story: `Gobindobhog literally means "an offering to Lord Govinda" — Krishna himself. In Bengali households, this rice is reserved for occasions: pujas, weddings, the slow-cooked payesh on a winter afternoon, the khichuri on a rainy Sunday.\n\nGrown primarily in the Burdwan district, it is short, fragrant, slightly sticky — and impossibly comforting. Bengali grandmothers will tell you it is the only rice whose aroma can travel through a closed kitchen door and find you in the next room.\n\nIt earned its GI tag in 2017. For Bengalis, the tag confirmed what they had always known: this is not just rice, it is memory.`,
    keyFacts: [
      'GI Tag: 2017',
      'Short, aromatic grain',
      'Ideal for khichuri & payesh',
      'Grown in Burdwan, Bengal'
    ]
  },

  // ============ WHEAT ============
  {
    id: 'sharbati-gehu',
    name: 'Sharbati Gehu (Wheat)',
    category: 'Wheat',
    region: 'Sharbati',
    state: 'Madhya Pradesh',
    price: 249,
    mrp: 319,
    unit: '2 kg',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=900&q=85',
    tagline: 'The golden wheat of Sehore.',
    shortDesc: 'A naturally sweet, amber-coloured wheat — the gold standard for Indian rotis.',
    story: `In the black-soil belt of Madhya Pradesh — Sehore, Vidisha, Ashoknagar — a particular wheat grows that the trade calls "Sharbati" for its honey-sweet finish. Each grain is fatter, more golden, and naturally sweeter than ordinary wheat.\n\nIt cannot be irrigated heavily. It must be grown on the residual moisture of monsoons, which keeps yields modest but the grain dense with nutrients and flavour. A roti made from Sharbati atta puffs up differently — softer, sweeter, with a chew that lasts.\n\nFor Indian households that grew up with mother's rotis as a non-negotiable, Sharbati is the wheat that feels like home — even when home is now a city apartment.`,
    keyFacts: [
      'Naturally sweet finish',
      'Rain-fed, low water',
      'Golden amber grains',
      'Highest protein wheat in India'
    ]
  },

  // ============ MILLETS & PSEUDO-CEREALS ============
  {
    id: 'dagdi-jowar-jalna',
    name: 'Dagdi Jowar of Jalna',
    category: 'Millets & Pseudo-cereals',
    region: 'Jalna',
    state: 'Maharashtra',
    price: 219,
    mrp: 279,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1626198717662-4ce0c5fe7f9b?w=900&q=85',
    tagline: 'The hard millet of the Marathwada sun.',
    shortDesc: 'A drought-hardy jowar from Jalna — what makes a Marathwada bhakri taste right.',
    story: `In Marathwada, the sun does not negotiate. Yet from this hard land comes Dagdi Jowar — "Dagdi" literally meaning stone-hard. The grain is dense, the flour heavy in the hand, and the bhakri made from it carries a slightly nutty, earthy warmth no other jowar quite matches.\n\nA farmer in Jalna once said: "Our jowar is hard because our land is hard. You eat it, and you understand our village." The GI tag, given in recent years, was the country's way of saying — yes, we understand too.`,
    keyFacts: [
      'Drought-hardy variety',
      'Dense, nutty flour',
      'Traditional bhakri grain',
      'Heritage Marathwada crop'
    ]
  },
  {
    id: 'mangalwedha-jowar',
    name: 'Mangalwedha Jowar',
    category: 'Millets & Pseudo-cereals',
    region: 'Mangalwedha',
    state: 'Maharashtra',
    price: 239,
    mrp: 299,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1622894931999-b6d3da1abf78?w=900&q=85',
    tagline: 'The pearl-white millet of Solapur.',
    shortDesc: "Mangalwedha taluka's prized pearl-white jowar — chewy bhakris, deep flavour.",
    story: `Mangalwedha, a small taluka in Solapur, has grown this distinctive pearl-white jowar for centuries. Local lore tells that even Saint Damaji, the 14th-century granary keeper, distributed Mangalwedha jowar during famine — feeding lakhs.\n\nThe grain is plumper, whiter, and gives a bhakri that stays soft for hours, lunchbox to dinner. The GI tag protects what generations of Solapuri farmers had been quietly preserving as their own family seed bank.`,
    keyFacts: [
      'Pearl-white grain',
      'Centuries-old variety',
      'Long-lasting soft bhakri',
      'Saint Damaji heritage'
    ]
  },

  // ============ PULSES & LEGUMES ============
  {
    id: 'gurez-rajmash',
    name: 'Gurez Rajmash of Kashmir',
    category: 'Pulses & Legumes',
    region: 'Kashmir',
    state: 'Jammu & Kashmir',
    price: 489,
    mrp: 619,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Rajma from the valley of the Kishanganga.',
    shortDesc: 'High-altitude red kidney beans from Gurez — creamier, sweeter, no soaking needed.',
    story: `The Gurez valley sits high in Kashmir, walled in by snow, opened to the world only for a few months each year. The rajma grown here, in cold mountain soil at 8,000 feet, is not the rajma you know — it cooks in half the time, splits open into a creamy interior, and has a natural sweetness that needs little masala to shine.\n\nFor decades, Gurez residents traded this rajma with passing travellers on the old Silk Route extension. Today, a GI tag protects this heritage bean from imitation — and from being lost as glacial recession threatens the valley's farming season.`,
    keyFacts: [
      'Grown at 8,000+ ft',
      'No overnight soaking needed',
      'Naturally sweet, creamy',
      'GI-tagged Kashmir heritage'
    ]
  },
  {
    id: 'thalanadan-grambu',
    name: 'Thalanadan Grambu (Clove)',
    category: 'Pulses & Legumes',
    region: 'Thalanadan Grambu',
    state: 'Kerala',
    price: 599,
    mrp: 749,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Spice village of the Western Ghats.',
    shortDesc: 'A unique heritage spice-legume crop from Idukki — earthy, aromatic, irreplaceable.',
    story: `Thalanadan is a small village tucked into the Idukki hills, where clove and unique heritage pulses have been grown together for over a hundred years. The shade of the spice canopy gives the pulses below a peculiar earthy aroma — found nowhere else in Kerala.\n\nThe GI tag recognises not just a crop but a way of farming — multi-layered, low-input, almost forest-like — that modern agriculture has largely forgotten.`,
    keyFacts: [
      'Shade-grown heritage crop',
      'Multi-layer cultivation',
      'Idukki hills heritage',
      'Earthy spice notes'
    ]
  },
  {
    id: 'amravati-chana',
    name: 'Amravati Chana',
    category: 'Pulses & Legumes',
    region: 'Amravati',
    state: 'Maharashtra',
    price: 169,
    mrp: 219,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'The Vidarbha bengal gram.',
    shortDesc: 'Bold, dark Bengal gram from Amravati — the workhorse of every Maharashtrian kitchen.',
    story: `Vidarbha's farmers have grown chana for generations on rain-fed black cotton soil. Amravati chana is darker, fatter, and richer in flavour than the standard chana found in supermarket bins.\n\nIt makes a chana masala that does not need disguise — just onions, tomato, and time. The GI recognition is also a quiet gesture of solidarity with Vidarbha's farmers, who deserve a premium price for what is genuinely their best.`,
    keyFacts: [
      'Black cotton soil grown',
      'Bold, dark grains',
      'Rich, full-bodied flavour',
      'Vidarbha heritage pulse'
    ]
  },
  {
    id: 'borsuri-tur-dal',
    name: 'Borsuri Tur Dal',
    category: 'Pulses & Legumes',
    region: 'Borsuri Tur',
    state: 'Maharashtra',
    price: 249,
    mrp: 319,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Latur\'s legendary tur dal.',
    shortDesc: 'Hand-picked tur from Borsuri village — the kind that turns a simple dal into dinner-table royalty.',
    story: `Around Latur, in the village of Borsuri, the tur dal is graded differently. Farmers separate the bigger, glossier dals into their own bag — that bag goes to the household, never to market.\n\nWhat you taste in a Borsuri tur dal is what farming families have been keeping for themselves for generations — until the GI tag pulled it out into the open.`,
    keyFacts: [
      'Hand-graded for size',
      'Glossy golden grains',
      'Latur heritage tur',
      'Cooks to creamy finish'
    ]
  },
  {
    id: 'gulbarga-tur-dal',
    name: 'Gulbarga Tur Dal',
    category: 'Pulses & Legumes',
    region: 'Gulbarga Tur',
    state: 'Karnataka',
    price: 239,
    mrp: 309,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'North Karnataka\'s pride.',
    shortDesc: 'The black-soil tur of Gulbarga — high-protein, full-bodied, the heart of every Kannada thali.',
    story: `Gulbarga, on the Deccan plateau, has the kind of black soil and dry heat that tur dal seems to love. The result is a tur that is darker, more savoury, and cooks down into a dal so rich you could mistake it for a stew.\n\nIt is the dal of the Kannada thali — paired with jolada rotti, eaten with the fingers, eaten slowly.`,
    keyFacts: [
      'Deccan black-soil grown',
      'Rich, savoury depth',
      'Heart of Kannada thali',
      'High-protein heritage tur'
    ]
  },
  {
    id: 'mokama-masoor',
    name: 'Mokama Masoor',
    category: 'Pulses & Legumes',
    region: 'Mokama',
    state: 'Bihar',
    price: 189,
    mrp: 249,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'The Tal land\'s gift.',
    shortDesc: 'Masoor dal grown on the flood-replenished Tal lands of Mokama — silky, fast-cooking, ancestral.',
    story: `Mokama in Bihar sits along the Tal — a low-lying belt that the Ganga floods every monsoon. When the water recedes, it leaves behind a thin layer of silt that grows masoor unlike any other.\n\nThis is the dal your Bihari grandmother makes "patli" — thin, almost broth-like, with a final tarka of garlic and dry red chilli. Simple. Inarguable.`,
    keyFacts: [
      'Flood-replenished Tal land',
      'Silky, fast-cooking',
      'Bihari heritage dal',
      'Natural silt nutrition'
    ]
  },
  {
    id: 'tandur-redgram',
    name: 'Tandur Redgram',
    category: 'Pulses & Legumes',
    region: 'Tandur',
    state: 'Telangana',
    price: 269,
    mrp: 339,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: "Telangana's red gold.",
    shortDesc: 'The famed redgram of Tandur — the hero of every authentic Telangana pappu.',
    story: `Tandur, in the Vikarabad district of Telangana, gives the country one of its most distinctive redgrams — slightly smaller, deeper coloured, and so dense in flavour that locals say "Tandur pappu, oka chinna kanda chaalu" — one small bowl is enough.\n\nThe GI tag, awarded in 2024, was a long-awaited recognition for a crop that has carried Telangana's kitchens for centuries.`,
    keyFacts: [
      'Deep red, dense grains',
      'GI Tag: 2024',
      'Heart of Telangana pappu',
      'Tandur–Vikarabad heritage'
    ]
  },

  // ============ TURMERIC ============
  {
    id: 'lakadong-turmeric',
    name: 'Lakadong Turmeric',
    category: 'Turmeric (Haldi)',
    region: 'Lakadong, Jaintia Hills',
    state: 'Meghalaya',
    price: 549,
    mrp: 699,
    unit: '250 g',
    badge: 'Best Seller',
    featured: true,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=900&q=85',
    tagline: 'The world\'s most potent turmeric.',
    shortDesc: 'Lakadong turmeric from the Jaintia Hills — over 7% curcumin, the world standard.',
    story: `In the Jaintia Hills of Meghalaya, in a few villages around Lakadong, grows the turmeric that the world's pharmaceutical industry quietly considers the gold standard. With curcumin levels often crossing 7% — versus 2–3% in ordinary turmeric — this is the haldi that does the medicinal work the rest only promises.\n\nThe Khasi and Jaintia farmers who grow it have known its potency for generations. A pinch in warm milk before sleep. A paste on a cut. A spoon in the family pot. Now, the GI tag is helping the world understand what the hills already knew.\n\nBuy a small jar of Lakadong, and you will smell the difference the moment you open it — sharp, almost peppery, sun-warm. This is haldi the way it was meant to be.`,
    keyFacts: [
      'Curcumin: 7–9%',
      'GI-tagged Meghalaya heritage',
      'Sun-dried, hand-pounded',
      'Used in global pharma research'
    ]
  },
  {
    id: 'armoor-turmeric',
    name: 'Armoor Turmeric',
    category: 'Turmeric (Haldi)',
    region: 'Armoor',
    state: 'Telangana',
    price: 329,
    mrp: 419,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=900&q=85',
    tagline: 'Telangana\'s turmeric heartland.',
    shortDesc: 'Bright, bold turmeric from Armoor — Telangana\'s long-standing haldi belt.',
    story: `Armoor in Nizamabad district is sometimes called the "turmeric capital of India". The region's basaltic soil and short, sharp summers produce a haldi that is bright orange, fragrant, and finds its way into kitchens across South India and beyond.\n\nThe Armoor farmer's market is a sight — sacks of turmeric stacked higher than men, traders shouting prices, the air faintly yellow.`,
    keyFacts: [
      'Bright orange colour',
      'Basaltic soil grown',
      'Long-aged for aroma',
      'Telangana heritage crop'
    ]
  },
  {
    id: 'kandhamal-haladi',
    name: 'Kandhamal Haladi',
    category: 'Turmeric (Haldi)',
    region: 'Kandhamal',
    state: 'Odisha',
    price: 449,
    mrp: 569,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=900&q=85',
    tagline: 'The tribal turmeric of Odisha.',
    shortDesc: 'Organic, tribal-grown haldi from Kandhamal — earthy, full-spectrum, untouched.',
    story: `In the Kandhamal hills of Odisha, the Kondh tribal community has been growing turmeric for centuries without a single drop of fertiliser. It is rain-fed, forest-shaded, and harvested with hand tools.\n\nThe colour is a deeper, more amber orange. The aroma is wilder. The story is that of an indigenous community that the GI tag finally credited.`,
    keyFacts: [
      'Tribal-grown, organic',
      'GI Tag: 2019',
      'Forest-shaded cultivation',
      'Kondh community heritage'
    ]
  },

  // ============ CHILLI ============
  {
    id: 'kashmiri-long-chilli',
    name: 'Kashmiri Long Chilli',
    category: 'Chilli (Dried Spice)',
    region: 'Kashmiri Long',
    state: 'Jammu & Kashmir',
    price: 499,
    mrp: 639,
    unit: '250 g',
    featured: true,
    image: 'https://images.unsplash.com/photo-1583224944844-5b268c057b72?w=900&q=85',
    tagline: 'The deep red of every dream curry.',
    shortDesc: 'Mild heat, deep colour — Kashmiri chilli is what makes rogan josh, rogan josh.',
    story: `Kashmiri chilli does not want to burn your tongue. It wants to colour your gravy. That is its discipline.\n\nIn the high valleys of Kashmir, this long, deep-red chilli is sun-dried over weeks until the skin wrinkles and the colour deepens to a near-crimson. Grind it, sprinkle it into hot oil, and watch your dish acquire a hue no kitchen trick can fake.\n\nFrom a Kashmiri rogan josh to a Bengali macher jhol to a Goan vindaloo — half of Indian cuisine secretly leans on this chilli.`,
    keyFacts: [
      'Deep red colour, mild heat',
      'Sun-dried for 3+ weeks',
      'Heart of rogan josh',
      'Kashmir Valley heritage'
    ]
  },
  {
    id: 'nandurbar-mirchi',
    name: 'Nandurbar Mirchi',
    category: 'Chilli (Dried Spice)',
    region: 'Nandurbar',
    state: 'Maharashtra',
    price: 269,
    mrp: 339,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1583224944844-5b268c057b72?w=900&q=85',
    tagline: 'Khandesh\'s fiery red.',
    shortDesc: "Nandurbar's iconic chilli — colour, pungency, and Khandeshi character in one pod.",
    story: `Nandurbar in northern Maharashtra is home to one of India's largest chilli markets. Its dried red chilli is famous for striking the right balance — bright enough for colour, hot enough for character, not so hot you lose taste.\n\nThe weekly Nandurbar mirchi market is so iconic that locals call it just "the mirchi bazaar" — no further introduction needed.`,
    keyFacts: [
      'Balanced heat & colour',
      'Khandesh signature chilli',
      'Famous mirchi market origin',
      'Sun-dried, hand-sorted'
    ]
  },

  // ============ OTHER SPICES ============
  {
    id: 'kashmir-saffron',
    name: 'Kashmir Saffron',
    category: 'Other Spices',
    region: 'Pampore (Kashmir)',
    state: 'Jammu & Kashmir',
    price: 1499,
    mrp: 1899,
    unit: '2 g',
    badge: 'Most Premium',
    featured: true,
    image: 'https://images.unsplash.com/photo-1631209121750-a9f656d28db6?w=900&q=85',
    tagline: 'The red gold of Pampore.',
    shortDesc: 'World\'s finest saffron, hand-plucked at dawn from the violet fields of Pampore.',
    story: `On a few autumn mornings in Pampore, just outside Srinagar, the fields turn violet. The Crocus sativus blooms — small, delicate, lasting only hours — and entire families step out at sunrise to pluck them before the sun ruins the stigma.\n\nIt takes nearly 1,50,000 flowers to make a single kilogram of Kashmir saffron. The threads are longer, darker, more pungent than any saffron grown elsewhere — Iranian, Spanish, none compare on the chemistry.\n\nThe GI tag, awarded in 2020, protects something Mughal emperors prized in their kitchens and apothecaries five centuries ago. To use Kashmir saffron is to taste history.`,
    keyFacts: [
      'GI Tag: 2020',
      '1,50,000 flowers per kg',
      'Hand-plucked at sunrise',
      'Highest crocin content globally'
    ]
  },
  {
    id: 'arunachal-bebo',
    name: 'Arunachal Bebo (Large Cardamom)',
    category: 'Other Spices',
    region: 'Arunachal Bebo',
    state: 'Arunachal Pradesh',
    price: 699,
    mrp: 879,
    unit: '100 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: "The smoky cardamom of the East.",
    shortDesc: 'Smoke-cured large cardamom from Arunachal — bold, smoky, the soul of mountain cooking.',
    story: `The Monpa and Apatani communities of Arunachal Pradesh grow Bebo on forest-edge slopes and cure it over slow wood smoke for days. The result is a cardamom that is darker, smokier, and more assertive than green cardamom.\n\nThis is the spice that gives Tibetan butter tea and northeastern stews their unmistakable depth.`,
    keyFacts: [
      'Smoke-cured for days',
      'Forest-edge cultivation',
      'Bold smoky aroma',
      'Northeastern heritage spice'
    ]
  },
  {
    id: 'himachali-kala-zeera',
    name: 'Himachali Kala Zeera',
    category: 'Other Spices',
    region: 'Himachali Kala Zeera',
    state: 'Himachal Pradesh',
    price: 599,
    mrp: 769,
    unit: '100 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'The black cumin of the mountains.',
    shortDesc: 'A rare wild cumin from Himachal — darker, sweeter, more aromatic than regular jeera.',
    story: `Kala zeera grows wild on the upper reaches of the Himachal mountains. It cannot be commercially farmed easily — only carefully hand-collected by villagers during a short window each year.\n\nIn a Kashmiri pulao, a Himachali madra, or a sprinkle on dahi — kala zeera transforms the dish with one spoon. The flavour is sweeter, more floral than ordinary cumin, with a smoky undertone.`,
    keyFacts: [
      'Wild high-altitude harvest',
      'Sweeter than ordinary cumin',
      'Smoky-floral notes',
      'Hand-collected by villagers'
    ]
  },
  {
    id: 'kanniyakumari-clove',
    name: 'Kanniyakumari Clove',
    category: 'Other Spices',
    region: 'Kanniyakumari',
    state: 'Tamil Nadu',
    price: 429,
    mrp: 549,
    unit: '100 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Clove from the edge of India.',
    shortDesc: 'Plump, oil-rich cloves from the southernmost hills — bursting with aroma.',
    story: `Where the three seas meet, the Western Ghats taper into a final flourish of clove plantations. Kanniyakumari cloves are plumper than typical, with oil so high they release fragrance the moment you crush one.\n\nA single clove from here can perfume a pot of biryani. Use it well — it is concentrated tropical heritage.`,
    keyFacts: [
      'Plump, high-oil cloves',
      'Western Ghats grown',
      'Intensely aromatic',
      'Hand-picked at full maturity'
    ]
  },
  {
    id: 'kasti-coriander',
    name: 'Kasti Coriander',
    category: 'Other Spices',
    region: 'Kasti',
    state: 'Maharashtra',
    price: 199,
    mrp: 259,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=900&q=85',
    tagline: 'Solapur\'s fragrant coriander.',
    shortDesc: 'A Maharashtrian heritage coriander with a citrussy, lifting aroma.',
    story: `The Kasti village belt around Solapur grows a coriander whose seeds carry a distinct citrus note. Crush a few between your fingers and you'll smell lemon zest where ordinary dhania gives only earthiness.\n\nThis is what gives Maharashtrian masalas their characteristic brightness.`,
    keyFacts: [
      'Citrussy aroma',
      'Solapur heritage variety',
      'Brightens any masala',
      'Hand-sorted seeds'
    ]
  },
  {
    id: 'kolli-hills-pepper',
    name: 'Kolli Hills Pepper',
    category: 'Other Spices',
    region: 'Kolli Hills',
    state: 'Tamil Nadu',
    price: 569,
    mrp: 729,
    unit: '100 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Black gold from the hills of death.',
    shortDesc: 'The famed pepper of Kolli Hills — bold, heat-packed, slow-grown in misty forests.',
    story: `Kolli Hills — once feared by outsiders for their dense, almost impassable forests — are home to one of South India's most coveted peppers. Grown in the mist, sun-dried on village rooftops, this pepper bites differently — sharper, deeper, with a heat that builds rather than blasts.\n\nThe Malayali tribe of Kolli Hills has guarded this crop for generations.`,
    keyFacts: [
      'Misty forest-grown',
      'Slow-building heat',
      'Tribal heritage spice',
      'Sun-dried on rooftops'
    ]
  },
  {
    id: 'pollachi-nutmeg',
    name: 'Pollachi Nutmeg',
    category: 'Other Spices',
    region: 'Pollachi',
    state: 'Tamil Nadu',
    price: 549,
    mrp: 699,
    unit: '100 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Sweet nutmeg of the Anaimalai foothills.',
    shortDesc: 'Pollachi nutmeg — sweeter, more aromatic, the chef\'s first choice for desserts.',
    story: `In the foothills of the Anaimalai range, Pollachi's nutmeg trees have grown alongside coconut groves for over a century. The fruit ripens slowly, drying naturally in the south Indian sun, producing a nutmeg whose first scrape is unmistakably sweeter — perfect for kheers, custards, and morning lattes.`,
    keyFacts: [
      'Sweeter nutmeg variety',
      'Anaimalai grown',
      'Ideal for desserts',
      'Naturally sun-dried'
    ]
  },
  {
    id: 'rajasthan-jeera',
    name: 'Rajasthan Jeera',
    category: 'Other Spices',
    region: 'Rajasthan',
    state: 'Rajasthan',
    price: 239,
    mrp: 309,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=900&q=85',
    tagline: 'The desert cumin.',
    shortDesc: 'Plump, oil-rich cumin from the arid plains of Rajasthan — the gold standard for tarka.',
    story: `Rajasthan grows nearly 70% of India's cumin. The desert sun, the sandy soil, the cold nights — together produce a jeera that is plumper, oilier, and more aromatic than any other Indian cumin.\n\nA tablespoon hits hot ghee and the whole house knows dinner is being made.`,
    keyFacts: [
      'Desert-sun ripened',
      'High essential oil content',
      'Plumper than average jeera',
      'India\'s largest cumin region'
    ]
  },
  {
    id: 'rani-pepper',
    name: 'Rani Pepper',
    category: 'Other Spices',
    region: 'Rani',
    state: 'Karnataka',
    price: 519,
    mrp: 659,
    unit: '100 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'The queen of peppercorns.',
    shortDesc: 'A rare Karnataka pepper — Rani-class, dense, aromatic, oil-rich.',
    story: `"Rani" — meaning queen — is the trade name for the highest grade Karnataka pepper, denoting the densest, heaviest, most uniform black peppercorns of a harvest.\n\nGrown in the high ranges of Karnataka, this pepper is reserved for the most discerning kitchens.`,
    keyFacts: [
      'Top-grade peppercorn',
      'High oil density',
      'Hand-selected grade',
      'Karnataka highlands'
    ]
  },
  {
    id: 'sikkim-large-cardamom',
    name: 'Sikkim Large Cardamom',
    category: 'Other Spices',
    region: 'Sikkim',
    state: 'Sikkim',
    price: 749,
    mrp: 949,
    unit: '100 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'The black cardamom of the East.',
    shortDesc: "Sikkim's smoky black cardamom — the soul of every Himalayan kitchen.",
    story: `Sikkim is the largest producer of large cardamom in India, and the variety grown here is considered the world's finest. The pods are cured over wood smoke, giving them their distinctive deep-brown skin and a flavour that is simultaneously smoky, resinous, and slightly minty.\n\nThis is the spice that lifts a dal makhani, a slow nihari, a Himalayan thukpa.`,
    keyFacts: [
      'World\'s finest large cardamom',
      'Wood-smoke cured',
      'Sikkim is India\'s largest producer',
      'Smoky, resinous flavour'
    ]
  },

  // ============ NUTS & DRY FRUITS ============
  {
    id: 'goa-cashew',
    name: 'Goa Cashew (Kaju)',
    category: 'Nuts & Dry Fruits',
    region: 'Goa',
    state: 'Goa',
    price: 699,
    mrp: 879,
    unit: '500 g',
    featured: true,
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=900&q=85',
    tagline: 'The Konkan cashew.',
    shortDesc: 'Buttery, crisp, sweet cashews from Goa\'s Konkan coast — origin of India\'s cashew story.',
    story: `When the Portuguese brought the cashew tree from Brazil to Goa in the 16th century, they did not realise they were planting the future flavour of half of India's celebrations. Today, Goa's cashews are renowned for being whiter, sweeter, and more delicate than any other.\n\nA roasted Goan kaju, salted with a touch of black pepper, is a Sunday afternoon along the Konkan coast in a single bite. The GI tag in 2023 was overdue recognition.`,
    keyFacts: [
      'GI Tag: 2023',
      'Whiter, crisper, sweeter',
      'Konkan coast origin',
      'Lower moisture for crunch'
    ]
  },
  {
    id: 'jammu-kashmir-walnut',
    name: 'Jammu & Kashmir Walnut',
    category: 'Nuts & Dry Fruits',
    region: 'Jammu Kashmir',
    state: 'Jammu & Kashmir',
    price: 949,
    mrp: 1189,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=900&q=85',
    tagline: 'Akhrot from the valley.',
    shortDesc: 'Lighter shell, larger kernel, oil-rich walnuts from the Kashmir Valley.',
    story: `In the Kashmir Valley, walnut trees can live for over 200 years. The walnuts they produce are larger, paler, and richer in good fats than commercial varieties.\n\nA spoonful in winter, with honey, is what grandmothers in Kashmir have been giving children for generations to keep the cold out.`,
    keyFacts: [
      '200-year-old heritage trees',
      'Light shell, large kernel',
      'High Omega-3 content',
      'Valley-sun ripened'
    ]
  },
  {
    id: 'ladakh-apricot',
    name: 'Ladakh Apricot & Apricot Nut',
    category: 'Nuts & Dry Fruits',
    region: 'Ladakh',
    state: 'Ladakh (UT)',
    price: 799,
    mrp: 999,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=900&q=85',
    tagline: 'Sun-dried gold of the high desert.',
    shortDesc: 'Ladakh\'s wild apricots — sun-dried, naturally sweet, with the rare bitter-almond apricot nut.',
    story: `Ladakh's apricot trees grow at altitudes most fruit could never survive. The cold nights and intense sun pull sugars to a concentration found nowhere else — and the apricot, once dried on slate roofs, becomes a sweet so dense it tastes almost like caramel.\n\nThe apricot nut — the kernel inside the stone — is a Ladakhi delicacy, eaten dry or pressed for oil. It is the food that has kept Ladakhis going through impossible winters.`,
    keyFacts: [
      'High-altitude grown',
      'Roof-dried in the sun',
      'Includes apricot nuts',
      'Naturally caramel-sweet'
    ]
  },
  {
    id: 'sangli-raisins',
    name: 'Sangli Raisins',
    category: 'Nuts & Dry Fruits',
    region: 'Sangli',
    state: 'Maharashtra',
    price: 329,
    mrp: 419,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1605976912275-d50e0bb6e26f?w=900&q=85',
    tagline: 'The raisin capital of India.',
    shortDesc: 'Plump, naturally sweet Thompson Seedless raisins from Sangli — India\'s raisin heartland.',
    story: `Sangli is to raisins what Nashik is to grapes. Almost 80% of India's raisins come from this district — and the Thompson Seedless variety, sun-dried in open-air drying yards, is plumper and sweeter than anything imported.\n\nSangli farmers have been refining the art of raisin-making for four generations.`,
    keyFacts: [
      '80% of India\'s raisins',
      'Open-air sun-dried',
      'Thompson Seedless heritage',
      'Plump, naturally sweet'
    ]
  },
  {
    id: 'kachchhi-kharek',
    name: 'Kachchhi Kharek',
    category: 'Nuts & Dry Fruits',
    region: 'Kachchhi',
    state: 'Gujarat',
    price: 269,
    mrp: 339,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1611080627054-8b48ffd76864?w=900&q=85',
    tagline: 'The fresh date of Kutch.',
    shortDesc: 'Crunchy, fresh, semi-dried dates from Kutch — Gujarat\'s own monsoon-season treat.',
    story: `Kutch in Gujarat is one of the few places outside the Middle East where dates flourish. Kharek — the semi-dried, slightly crunchy stage of the date — is harvested through the monsoon and eaten fresh, never imported.\n\nA few in your pocket on a Kutchi road trip is tradition.`,
    keyFacts: [
      'GI Tag: 2024',
      'Semi-dried, fresh dates',
      'Kutch monsoon harvest',
      'Crunchy yet sweet'
    ]
  },
  {
    id: 'kishtwar-chilgoga',
    name: 'Kishtwar Chilgoga (Pine Nuts)',
    category: 'Nuts & Dry Fruits',
    region: 'Jammu',
    state: 'Jammu & Kashmir',
    price: 1899,
    mrp: 2399,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=900&q=85',
    tagline: 'Pine nuts of the high Pir Panjal.',
    shortDesc: 'Wild-harvested pine nuts (chilgoza) from Kishtwar — buttery, intense, rare.',
    story: `In the Pir Panjal range above Kishtwar, the chilgoza pine grows wild. Local communities trek into the forests at season's end, carry down sacks of cones, and roast them open over fires to extract the nuts.\n\nIt is one of the most labour-intensive nuts in the world. A handful is a luxury earned by patience.`,
    keyFacts: [
      'Wild-harvested',
      'Hand-roasted from cones',
      'Among the rarest pine nuts',
      'High-altitude Pir Panjal'
    ]
  },
  {
    id: 'kishtwar-hazlenuts',
    name: 'Kishtwar Hazelnuts',
    category: 'Nuts & Dry Fruits',
    region: 'Kishtwar Hazlenuts',
    state: 'Jammu & Kashmir',
    price: 1099,
    mrp: 1389,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=900&q=85',
    tagline: 'Hazelnuts from the Indian Himalayas.',
    shortDesc: 'Rare Indian-grown hazelnuts from Kishtwar — crisp, sweet, world-class.',
    story: `Few people know India grows its own hazelnuts. Kishtwar's narrow valleys, cool nights, and southern exposure have nurtured hazelnut plantations whose nuts are now beginning to compete with the famous Turkish and Italian varieties.\n\nA quiet success story of Indian Himalayan farming.`,
    keyFacts: [
      'Rare Indian hazelnut',
      'Kishtwar valley grown',
      'Crisp, sweet, fragrant',
      'World-class quality'
    ]
  },
  {
    id: 'pangi-ki-thangi',
    name: 'Pangi Ki Thangi',
    category: 'Nuts & Dry Fruits',
    region: 'Pangi',
    state: 'Himachal Pradesh',
    price: 1299,
    mrp: 1649,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=900&q=85',
    tagline: "The hidden valley's nut.",
    shortDesc: "Wild walnuts from Himachal's remote Pangi Valley — accessible only a few months a year.",
    story: `Pangi Valley in Himachal is cut off from the world for nearly seven months a year. When the roads open, traders trek in and out — carrying back walnuts so wild and rare they barely make it to mainstream markets.\n\nPangi ki Thangi is what mountain isolation tastes like.`,
    keyFacts: [
      'Wild walnut variety',
      'Remote valley harvest',
      'Limited annual supply',
      'Himalayan heritage'
    ]
  },

  // ============ COCONUT & COPRA ============
  {
    id: 'pollachi-tall-coconut',
    name: 'Pollachi Tall Coconut',
    category: 'Coconut & Copra',
    region: 'Pollachi',
    state: 'Tamil Nadu',
    price: 399,
    mrp: 499,
    unit: '500 g (Copra)',
    image: 'https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?w=900&q=85',
    tagline: 'The tall coconut of the Anaimalai.',
    shortDesc: 'Pollachi\'s heritage tall coconut variety — rich oil, sweet copra, full-bodied.',
    story: `The Pollachi tall coconut is a heritage variety, taller and slower-growing than commercial dwarf hybrids. Its copra has higher oil content, its water sweeter, and its tender meat thicker.\n\nFor Tamil Nadu's traditional cuisine — from Kongu chettinad to filter kaapi — this is the coconut that matters.`,
    keyFacts: [
      'Heritage tall variety',
      'High oil-content copra',
      'Sweeter water',
      'Kongu region grown'
    ]
  },

  // ============ OILSEEDS ============
  {
    id: 'jagtial-sesame',
    name: 'Jagtial Sesame of Telangana',
    category: 'Oilseeds',
    region: 'Telangana',
    state: 'Telangana',
    price: 249,
    mrp: 319,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'White gold of Jagtial.',
    shortDesc: 'Plump, white sesame seeds from Jagtial — high oil, classic nutty aroma.',
    story: `Jagtial in Telangana grows a white sesame famous for its uniform plumpness and high oil content. The till oil pressed from these seeds is the base of Telangana's classic chutneys and the till laddoos eaten at every Sankranti.`,
    keyFacts: [
      'Plump, uniform grade',
      'High oil yield',
      'Til laddoo heritage',
      'Sankranti tradition'
    ]
  },
  {
    id: 'onattukara-ellu',
    name: 'Onattukara Ellu',
    category: 'Oilseeds',
    region: 'Onattukara',
    state: 'Kerala',
    price: 289,
    mrp: 369,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: "Kerala's heritage sesame.",
    shortDesc: 'GI-tagged sesame from Onattukara — small, oily, with a uniquely Kerala flavour.',
    story: `In the coastal belt of Alappuzha and Kollam — known as Onattukara — sesame has been grown for generations on sandy alluvial soil. The seeds are smaller, the oil more golden, and the flavour faintly different from north Indian sesame.\n\nThis is the sesame your Kerala grandmother used for her morning oil bath and the till to crush into a curry.`,
    keyFacts: [
      'GI Tag: 2010',
      'Coastal-soil grown',
      'Distinctly Kerala flavour',
      'Heritage oil seed'
    ]
  },
  {
    id: 'ananthapuramu-groundnuts',
    name: 'Ananthapuramu Groundnuts',
    category: 'Oilseeds',
    region: 'Ananthapuramu',
    state: 'Andhra Pradesh',
    price: 229,
    mrp: 289,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Peanuts of the Rayalaseema sun.',
    shortDesc: 'Plump, sweet, oil-rich groundnuts from Anantapur — Rayalaseema\'s pride.',
    story: `Anantapur, in the dry Rayalaseema region of Andhra Pradesh, is India's largest groundnut-producing district. The harsh sun and red soil yield peanuts that are plump, sweet, and so oil-rich they almost feel buttery to chew.\n\nA handful, roasted with salt, is a stand-in for an entire meal in many Rayalaseema villages.`,
    keyFacts: [
      'India\'s largest groundnut district',
      'Red-soil sweetness',
      'High oil content',
      'Rayalaseema heritage'
    ]
  },

  // ============ COFFEE ============
  {
    id: 'araku-valley-coffee',
    name: 'Araku Valley Arabica Coffee',
    category: 'Coffee',
    region: 'Araku Valley',
    state: 'India (Andhra Pradesh & Odisha)',
    price: 649,
    mrp: 829,
    unit: '250 g',
    featured: true,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&q=85',
    tagline: 'Coffee grown by tribes, won by the world.',
    shortDesc: 'Organic, tribal-grown Arabica from Araku — winner of multiple international taste awards.',
    story: `In the Araku Valley, the Adivasi farmers of the Eastern Ghats grow coffee at altitudes around 3,000 feet, in the shade of native forests, without any chemical input.\n\nIn 2018, an Araku coffee won the Prix Epicures Or in Paris — declared one of the world's best. The tribal cooperatives behind it are now among India's proudest agricultural stories.\n\nBuy Araku coffee, and you are buying directly into a story of indigenous farmers proving they could play — and win — at the highest level.`,
    keyFacts: [
      'Organic, shade-grown',
      'Tribal cooperative grown',
      'International award winner',
      'Eastern Ghats heritage'
    ]
  },
  {
    id: 'chikmagalur-coffee',
    name: 'Chikmagalur Arabica Coffee',
    category: 'Coffee',
    region: 'Chikmagalur',
    state: 'Karnataka',
    price: 599,
    mrp: 749,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&q=85',
    tagline: "Where Indian coffee began.",
    shortDesc: 'Arabica from Chikmagalur — the birthplace of Indian coffee.',
    story: `In 1670, a Sufi saint named Baba Budan smuggled seven coffee beans from Yemen into the hills above Chikmagalur. Every cup of Indian coffee since traces back to those seven beans.\n\nThree and a half centuries later, the same Baba Budan hills still grow some of the finest Arabica in the world.`,
    keyFacts: [
      'Birthplace of Indian coffee',
      'Baba Budan hills heritage',
      'Shade-grown Arabica',
      'GI-tagged region'
    ]
  },
  {
    id: 'coorg-coffee',
    name: 'Coorg Arabica Coffee',
    category: 'Coffee',
    region: 'Coorg',
    state: 'Karnataka',
    price: 619,
    mrp: 779,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&q=85',
    tagline: 'The Scotland of India in your cup.',
    shortDesc: 'Coorg\'s mist-grown Arabica — smooth, full-bodied, lightly floral.',
    story: `Coorg — Kodagu — is what poets call the Scotland of India: misty, rolling, green. The Arabica here grows in cardamom-and-pepper shade, sipping mist for half the year.\n\nThe result is a coffee that is smoother and more full-bodied than its more famous Chikmagalur neighbour. Many would say Coorg is the connoisseur's pick.`,
    keyFacts: [
      'Mist-grown',
      'Shade with spice canopy',
      'Smooth, full body',
      'Kodagu heritage'
    ]
  },

  // ============ TEA ============
  {
    id: 'himalayan-nettle-tea',
    name: 'Himalayan Nettle Tea',
    category: 'Tea',
    region: 'Himalayan Nettle',
    state: 'Uttarakhand',
    price: 399,
    mrp: 499,
    unit: '100 g',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=900&q=85',
    tagline: 'The healing tea of the mountains.',
    shortDesc: 'A wild Himalayan nettle infusion — iron-rich, mineral-dense, traditional mountain medicine.',
    story: `For centuries, Himalayan villagers have collected wild nettle (kandali) from forest edges and brewed it as a daily medicinal drink. Iron-rich, mineral-dense, and gently grassy in flavour, it is a tea that does its work quietly.\n\nThe modern world is just discovering what mountain grandmothers always knew.`,
    keyFacts: [
      'Iron & mineral rich',
      'Wild-harvested',
      'Caffeine free',
      'Traditional mountain medicine'
    ]
  },

  // ============ MAKHANA ============
  {
    id: 'mithila-makhana',
    name: 'Mithila Makhana',
    category: 'Makhana (Fox Nut)',
    region: 'Darbhanga–Madhubani (Mithila)',
    state: 'Bihar',
    price: 449,
    mrp: 569,
    unit: '250 g',
    featured: true,
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=900&q=85',
    tagline: 'The lotus seed of Mithila.',
    shortDesc: 'Hand-popped fox nuts from Mithila — the world\'s best makhana, GI-protected.',
    story: `In the ponds of Mithila — Darbhanga, Madhubani — farmers wade waist-deep into water in summer to harvest the prickly seeds of the foxnut lotus. Each seed is then sun-dried, roasted on hot sand, and popped by hand.\n\nA single farmer might pop only a few kilograms in a day. Mithila Makhana, GI-tagged in 2022, is one of the few foods in the world still made entirely by hand, in water, in the open sun.\n\nLight, crunchy, with a flavour that asks for nothing but a touch of ghee and pink salt — it is the rare snack that is also a centuries-old craft.`,
    keyFacts: [
      'GI Tag: 2022',
      'Hand-popped on hot sand',
      'Mithila pond cultivation',
      'Light, crunchy texture'
    ]
  },

  // ============ MEDICINAL & HERBAL ============
  {
    id: 'ladakh-seabuckthorn',
    name: 'Ladakh Seabuckthorn',
    category: 'Medicinal & Herbal',
    region: 'Ladakh Seabuckthorn',
    state: 'Ladakh (UT)',
    price: 549,
    mrp: 699,
    unit: '250 ml',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=900&q=85',
    tagline: 'The wonder berry of the cold desert.',
    shortDesc: 'Seabuckthorn from Ladakh — the antioxidant powerhouse of the world\'s highest valleys.',
    story: `Seabuckthorn grows wild along the Indus and Nubra rivers in Ladakh, at altitudes where almost nothing else fruits. The orange berries are so dense in Vitamin C, omega oils, and antioxidants that the Indian Army has long included them in soldiers' supplements at high altitude.\n\nA tonic, a tea, a juice — Ladakhi seabuckthorn is a piece of high-desert resilience you can drink.`,
    keyFacts: [
      'Highest Vitamin C density',
      'Omega-7 rich',
      'Wild-harvested Ladakh',
      'Indian Army supplement source'
    ]
  },
  {
    id: 'nagori-ashwagandha',
    name: 'Nagori Ashwagandha',
    category: 'Medicinal & Herbal',
    region: 'Nagaur',
    state: 'Rajasthan',
    price: 449,
    mrp: 569,
    unit: '200 g',
    image: 'https://images.unsplash.com/photo-1576675784432-994941412b3d?w=900&q=85',
    tagline: 'The original Indian adaptogen.',
    shortDesc: 'Nagaur\'s famous ashwagandha — the gold standard root for Ayurvedic resilience.',
    story: `In the arid plains around Nagaur, the wild horse-smelling root that Ayurveda calls ashwagandha grows in its most potent form. The desert stress makes the plant pour its energy into the root — and that root, dried and powdered, is what Ayurvedic doctors across India still prefer.\n\nA spoon in warm milk before sleep. An age-old answer to stress.`,
    keyFacts: [
      'GI-tagged Nagaur heritage',
      'Highest withanolide content',
      'Ayurvedic gold standard',
      'Stress-grown for potency'
    ]
  },

  // ============ ONION, GARLIC & ROOTS ============
  {
    id: 'himalayan-snow-garlic',
    name: 'Himalayan Snow Mountain Garlic',
    category: 'Onion, Garlic & Roots',
    region: 'Himalayan',
    state: 'Jammu & Kashmir',
    price: 449,
    mrp: 569,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1576675784432-994941412b3d?w=900&q=85',
    tagline: 'Single-clove garlic of the Himalayas.',
    shortDesc: 'Rare single-clove "snow mountain" garlic — small bulb, vast potency.',
    story: `High in the Himalayan slopes, a curious form of garlic grows — a single, round clove the size of a pea, with allicin levels reportedly seven times that of regular garlic.\n\nVillagers have long used it as both food and medicine. The world is finally noticing.`,
    keyFacts: [
      'Single-clove variety',
      '7x allicin content',
      'Wild Himalayan grown',
      'Traditional medicine root'
    ]
  },
  {
    id: 'lasalgaon-onion',
    name: 'Lasalgaon Onion',
    category: 'Onion, Garlic & Roots',
    region: 'Lasalgaon',
    state: 'Maharashtra',
    price: 119,
    mrp: 149,
    unit: '2 kg',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Asia\'s onion capital.',
    shortDesc: 'Pungent, long-keeping onions from Asia\'s largest onion mandi — Lasalgaon, Nashik.',
    story: `Lasalgaon, in the Nashik district of Maharashtra, hosts Asia's largest onion market. The onions grown around here are pungent, long-keeping, and the benchmark by which Indian onion prices are set nationally.\n\nWhen the Lasalgaon mandi sneezes, the rest of India's onion market catches a cold.`,
    keyFacts: [
      'Asia\'s largest onion mandi',
      'Long shelf life',
      'High pungency variety',
      'National benchmark onion'
    ]
  },
  {
    id: 'karbi-anglong-ginger',
    name: 'Assam Karbi Anglong Ginger',
    category: 'Onion, Garlic & Roots',
    region: 'Assam Karbi Anglong',
    state: 'Assam',
    price: 299,
    mrp: 379,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1573414405723-d6df9eb83b69?w=900&q=85',
    tagline: 'Tribal-grown ginger of the Northeast.',
    shortDesc: 'Karbi Anglong\'s GI-tagged ginger — fibre-free, bursting with aroma and gingerol.',
    story: `In the hills of Karbi Anglong, the Karbi tribal community has been growing this distinctive ginger for centuries. Larger, less fibrous, and higher in essential oil than ordinary ginger, it is the gold standard for both cooking and pharma extraction.`,
    keyFacts: [
      'GI-tagged tribal ginger',
      'Low fibre, high oil',
      'Karbi community heritage',
      'High gingerol content'
    ]
  },
  {
    id: 'baruasagar-adrak',
    name: 'Baruasagar Adrak (Ginger)',
    category: 'Onion, Garlic & Roots',
    region: 'Baruasagar',
    state: 'Uttar Pradesh',
    price: 269,
    mrp: 339,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1573414405723-d6df9eb83b69?w=900&q=85',
    tagline: 'Bundelkhand\'s heritage ginger.',
    shortDesc: 'Aromatic ginger from Baruasagar in Jhansi — Bundelkhand\'s long-standing heritage crop.',
    story: `Baruasagar, a quiet town near Jhansi, has cultivated a ginger that is fragrant, sharp, and far older than the GI tag that recently recognised it. Bundelkhand villagers chew a piece in winter mornings — and walk into their fields warmed.`,
    keyFacts: [
      'Bundelkhand heritage crop',
      'Sharp, warming flavour',
      'Jhansi region grown',
      'Traditional winter remedy'
    ]
  },
  {
    id: 'chettikulam-small-onion',
    name: 'Chettikulam Small Onion',
    category: 'Onion, Garlic & Roots',
    region: 'Chettikulam',
    state: 'Tamil Nadu',
    price: 189,
    mrp: 239,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Tamil Nadu\'s sambar onion.',
    shortDesc: 'The famed sambar onion of Chettikulam — small, sweet, pungent, irreplaceable.',
    story: `If you have ever wondered why a sambar at a temple kitchen tastes different from one at home, the answer might be Chettikulam small onions. Smaller than shallots, sweet, slightly sharp — they are what give an authentic Tamil sambar its depth.`,
    keyFacts: [
      'Native Chettikulam variety',
      'Sweet & pungent balance',
      'Heritage sambar onion',
      'Hand-sorted bulbs'
    ]
  },
  {
    id: 'farrukhabad-fulwa-aloo',
    name: 'Farrukhabad Fulwa Aloo',
    category: 'Onion, Garlic & Roots',
    region: 'Farrukhabad Fulwa',
    state: 'Uttar Pradesh',
    price: 149,
    mrp: 189,
    unit: '2 kg',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=900&q=85',
    tagline: 'The flowering potato of Farrukhabad.',
    shortDesc: 'A heritage starchy potato from Farrukhabad — the chosen kachori potato of UP.',
    story: `Farrukhabad's Fulwa potato is a heritage variety whose flesh is creamier and starchier than the common potato. It is what UP halwais have been quietly buying for the perfect kachori filling — and finally, a GI tag has put it on the national stage.`,
    keyFacts: [
      'Heritage UP variety',
      'Creamy starchy flesh',
      'Halwai-preferred for kachoris',
      'GI-tagged heritage'
    ]
  },
  {
    id: 'sikar-pyaj',
    name: 'Sikar Pyaj',
    category: 'Onion, Garlic & Roots',
    region: 'Sikar',
    state: 'Rajasthan',
    price: 129,
    mrp: 169,
    unit: '2 kg',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: "Shekhawati's red onion.",
    shortDesc: "Deep-red Sikar onion — Rajasthan's sweet-pungent heritage variety.",
    story: `In the Shekhawati region around Sikar, a deep red, slightly flatter onion is grown that locals swear is the only correct base for laal maas. Sweeter on first bite, pungent on the second.`,
    keyFacts: [
      'Deep red Shekhawati onion',
      'Sweet-pungent balance',
      'Laal maas heritage onion',
      'Sun-cured for storage'
    ]
  },

  // ============ PROCESSED / OTHER ============
  {
    id: 'assam-supari',
    name: 'Assam Supari',
    category: 'Processed / Other',
    region: 'Assam',
    state: 'Assam',
    price: 249,
    mrp: 319,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'The traditional betel nut of Assam.',
    shortDesc: 'Heritage Assam supari — sun-dried, hand-graded, the traditional way.',
    story: `Across Assamese households, "tamul-paan" — supari and betel leaf — is the gesture of welcome offered before tea. The supari that goes with it is Assam-grown, sun-dried, and graded by hand. It is hospitality, packaged.`,
    keyFacts: [
      'Sun-dried heritage supari',
      'Hand-graded',
      'Assamese hospitality ritual',
      'Traditional tamul-paan'
    ]
  },
  {
    id: 'bastar-tamarind',
    name: 'Bastar Tamarind',
    category: 'Processed / Other',
    region: 'Bastar',
    state: 'Chhattisgarh',
    price: 239,
    mrp: 309,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=900&q=85',
    tagline: 'Forest tamarind of Bastar.',
    shortDesc: 'Wild-collected, seedless tamarind from the Bastar forests — naturally sweet-sour.',
    story: `In the Bastar forests of Chhattisgarh, tribal communities collect wild tamarind that is sweeter and less acidic than commercial varieties. It cooks into sambar, rasam, and chutneys with a softer, rounder sourness — the kind that makes you go back for seconds.`,
    keyFacts: [
      'Wild-collected tamarind',
      'Tribal forest harvest',
      'Softer, rounder sourness',
      'Bastar heritage'
    ]
  },
  {
    id: 'madanapalle-tamarind',
    name: 'Madanapalle Tamarind',
    category: 'Processed / Other',
    region: 'Madanapalle',
    state: 'Andhra Pradesh',
    price: 219,
    mrp: 279,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=900&q=85',
    tagline: 'The tamarind of the Chittoor hills.',
    shortDesc: 'Heritage tamarind from Madanapalle — sharp, dark, the base of every Andhra pulusu.',
    story: `Madanapalle, in the Chittoor district of Andhra Pradesh, has been a major tamarind trading centre for over a hundred years. The local tamarind is darker, sharper, and the only one Andhra pulusu makers will swear by.`,
    keyFacts: [
      'Heritage trading centre',
      'Sharp, dark variety',
      'Andhra pulusu heritage',
      'Sun-cured for years'
    ]
  },
  {
    id: 'sindhudurg-ratnagiri-kokum',
    name: 'Sindhudurg & Ratnagiri Kokum',
    category: 'Processed / Other',
    region: 'Sindhudurg',
    state: 'Maharashtra',
    price: 289,
    mrp: 369,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=900&q=85',
    tagline: 'The cooling fruit of the Konkan.',
    shortDesc: 'Sun-dried kokum from the Konkan coast — souring agent, summer cooler, gut soother.',
    story: `Across the Konkan coast — Sindhudurg, Ratnagiri — the kokum tree gives a deep purple fruit that locals have been turning into sols, sharbat, and curry base for centuries. A kokum drink in May feels like air conditioning from inside.\n\nThe Konkan summer simply does not work without it.`,
    keyFacts: [
      'Konkan coast heritage',
      'Natural cooling agent',
      'Souring base for solkadhi',
      'Sun-dried for years'
    ]
  },
  {
    id: 'sirsi-supari',
    name: 'Sirsi Supari',
    category: 'Processed / Other',
    region: 'Sirsi',
    state: 'Karnataka',
    price: 269,
    mrp: 339,
    unit: '250 g',
    image: 'https://images.unsplash.com/photo-1599909533730-15e58a98f74f?w=900&q=85',
    tagline: 'Heritage betel nut of Sirsi.',
    shortDesc: 'GI-tagged Sirsi supari — hand-processed in the traditional Uttara Kannada way.',
    story: `Sirsi, in Karnataka's Uttara Kannada district, has cultivated betel nut for centuries on terraced plantations. The local processing — boiled, dried, polished — gives Sirsi supari its distinctive smooth finish and flavour, recognised by a GI tag.`,
    keyFacts: [
      'GI Tag: 2019',
      'Traditional Uttara Kannada method',
      'Boiled-and-polished finish',
      'Terraced plantation grown'
    ]
  },
  {
    id: 'badri-cow-ghee',
    name: 'Uttarakhand Badri Cow Ghee',
    category: 'Processed / Other',
    region: 'Uttarakhand Badri Cow',
    state: 'Uttarakhand',
    price: 1499,
    mrp: 1899,
    unit: '500 ml',
    badge: 'A2 Bilona',
    featured: true,
    image: 'https://images.unsplash.com/photo-1587049352847-31151ad4ad22?w=900&q=85',
    tagline: 'A2 ghee from the cow of the gods.',
    shortDesc: 'Traditional bilona ghee from Uttarakhand\'s indigenous Badri cow — golden, fragrant, sacred.',
    story: `The Badri cow is an indigenous Himalayan breed, named for the sacred Badrinath. Small, hardy, and producing modest amounts of A2 milk, she has fed the Uttarakhand hills for generations.\n\nThe ghee made from her milk — using the slow bilona method, where curd is churned by hand, butter slowly melted, and the residue cooked down for hours — is golden, deeply fragrant, and considered medicinal in Ayurveda.\n\nOne small spoon on hot rice. One drop in warm milk before sleep. This is ghee the way it was meant to be — slow, sacred, simple.`,
    keyFacts: [
      'A2 Badri cow milk',
      'Traditional bilona method',
      'GI-tagged Uttarakhand heritage',
      'Ayurveda-grade ghee'
    ]
  }
];

// Helper functions
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

function getProductsByState(state) {
  return PRODUCTS.filter(p => p.state === state);
}

function getAllCategories() {
  return [...new Set(PRODUCTS.map(p => p.category))];
}

function getAllStates() {
  return [...new Set(PRODUCTS.map(p => p.state))];
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

// State to category mapping for the state hero pages
const STATE_INFO = {
  'India (Punjab)': { region: 'North India', emoji: 'Punjab' },
  'Tamil Nadu': { region: 'South India', emoji: 'Tamil Nadu' },
  'Maharashtra': { region: 'West India', emoji: 'Maharashtra' },
  'West Bengal': { region: 'East India', emoji: 'West Bengal' },
  'Madhya Pradesh': { region: 'Central India', emoji: 'Madhya Pradesh' },
  'Jammu & Kashmir': { region: 'North India', emoji: 'Kashmir' },
  'Kerala': { region: 'South India', emoji: 'Kerala' },
  'Karnataka': { region: 'South India', emoji: 'Karnataka' },
  'Bihar': { region: 'East India', emoji: 'Bihar' },
  'Telangana': { region: 'South India', emoji: 'Telangana' },
  'Meghalaya': { region: 'Northeast India', emoji: 'Meghalaya' },
  'Odisha': { region: 'East India', emoji: 'Odisha' },
  'Arunachal Pradesh': { region: 'Northeast India', emoji: 'Arunachal' },
  'Himachal Pradesh': { region: 'North India', emoji: 'Himachal' },
  'Rajasthan': { region: 'West India', emoji: 'Rajasthan' },
  'Sikkim': { region: 'Northeast India', emoji: 'Sikkim' },
  'Goa': { region: 'West India', emoji: 'Goa' },
  'Ladakh (UT)': { region: 'North India', emoji: 'Ladakh' },
  'Gujarat': { region: 'West India', emoji: 'Gujarat' },
  'Andhra Pradesh': { region: 'South India', emoji: 'Andhra Pradesh' },
  'India (Andhra Pradesh & Odisha)': { region: 'South India', emoji: 'Araku' },
  'Uttarakhand': { region: 'North India', emoji: 'Uttarakhand' },
  'Assam': { region: 'Northeast India', emoji: 'Assam' },
  'Uttar Pradesh': { region: 'North India', emoji: 'UP' },
  'Chhattisgarh': { region: 'Central India', emoji: 'Chhattisgarh' },
  'Special': { region: 'Befach Curated', emoji: 'Special' }
};
