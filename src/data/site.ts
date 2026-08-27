// Central content source for Panacea Pharmaceuticals Pakistan
// Extracted & modernized from the original WordPress site (panaceapharmagroup.com)

export const company = {
  name: "Panacea Pharmaceuticals",
  region: "Pakistan",
  tagline: "The Remedy of Healing",
  slogan: "Committed to Superior Quality",
  established: "Serving Pakistan for over 12 years",
  short:
    "Panacea Pharmaceuticals is one of the fastest-growing nationwide companies in the pharmaceutical industry, delivering international-quality medicines with a dedicated team of experienced professionals.",
  copyright: "Panacea Pharmaceuticals Pakistan",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Production", href: "/production" },
  { label: "Products", href: "/products" },
  {
    label: "Quality",
    href: "/quality",
    children: [
      { label: "Quality Control", href: "/quality/quality-control" },
      { label: "Quality Assurance", href: "/quality/quality-assurance" },
      { label: "Environment, Health & Safety", href: "/quality/ehs" },
    ],
  },
  { label: "R&D", href: "/rnd" },
  { label: "Export", href: "/export" },
  { label: "Contact", href: "/contact" },
];

export const highlights = [
  {
    icon: "Factory",
    title: "State-of-the-Art Facility",
    text: "Modern production plant equipped with the latest technology and green, clean processes.",
  },
  {
    icon: "CalendarClock",
    title: "12+ Years Experience",
    text: "Over a decade of quality healthcare product manufacturing across Pakistan.",
  },
  {
    icon: "BadgeCheck",
    title: "Certified Company",
    text: "ISO 9001 & Moody Certified — we deliver what we promise.",
  },
  {
    icon: "Boxes",
    title: "Dynamic Products",
    text: "Tablets, fluids, ointments, creams & injectables across many therapeutic areas.",
  },
];

export const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "100+", label: "Registered Products" },
  { value: "ISO", label: "9001 Certified" },
  { value: "24/7", label: "Distribution Network" },
];

export const about = {
  heading: "Leading Pharmaceutical Company",
  intro:
    "Over 12 years of experience in producing international-quality medicines in Pakistan. We have a dedicated team of experienced healthcare professionals committed to the good health and well-being of our valued customers.",
  paragraphs: [
    "Our diverse product range includes everything from tablets to fluids, ointments and injectables. Our mission is to improve the quality of human life by enabling people to do more, feel better and live longer.",
    "For this, we have dedicated teams and procedures in place for adherence to strict quality control and the latest state-of-the-art equipment for top performance. We are always searching for new ways of doing things in order to improve our performance and raise our integrity to the level of excellence.",
    "Our nationwide distribution network also ensures that all our products are delivered timely and effectively to all our customers.",
  ],
  mission:
    "To improve the quality of human life by enabling people to do more, feel better and live longer.",
  vision:
    "To be at the forefront of our region in supplying innovative, international-quality healthcare solutions to our customers.",
  values: [
    "Uncompromising Quality",
    "Integrity & Ethics",
    "Patient-Focused Care",
    "Continuous Improvement",
  ],
};

export const management = [
  { name: "Irfan Afzal", role: "Founder & CEO" },
  { name: "Adnan Afzal", role: "Managing Director" },
  { name: "Muneeb Irfan", role: "Sales Director" },
];

export const production = {
  intro:
    "Panacea Pharma uses state-of-the-art technological facilities, admirable standards of quality and safety practices, and environmentally green and clean processes — supported by the most consistent operating procedures and a highly motivated, technically proficient team.",
  detail:
    "Panacea Pharma produces specialty products at its high-tech plant. Our production is driven by highly qualified scientists, pharmacists and chemists in operational areas, supported by skilled engineers and technicians, in an environment that celebrates continuous improvement.",
  dosageForms: [
    "Tablets",
    "Capsules",
    "Sachets",
    "Dry Powder Suspensions",
    "Sterile Dry Powders for Injection",
    "Ointments",
    "Lotions",
    "Creams",
  ],
};

// Representative product portfolio (brand — active ingredient — form)
export const productCategories = [
  {
    name: "Anti-Infectives",
    products: [
      { brand: "Apro", ingredient: "Clarithromycin", form: "Suspension" },
      { brand: "Artemef", ingredient: "Artemether + Lumefantrine", form: "Tablet / Suspension" },
      { brand: "Cipser", ingredient: "Ciprofloxacin", form: "Suspension" },
      { brand: "Etec", ingredient: "Entecavir", form: "Tablet" },
    ],
  },
  {
    name: "Pain & Inflammation",
    products: [
      { brand: "Arthrotop", ingredient: "Diclofenac Sodium", form: "Tablet" },
      { brand: "Eclotec", ingredient: "Aceclofenac", form: "Tablet" },
      { brand: "Celtex", ingredient: "Celecoxib", form: "Capsule" },
      { brand: "Difnac", ingredient: "Diclofenac Sodium", form: "Tablet" },
    ],
  },
  {
    name: "Gastro & Acidity",
    products: [
      { brand: "Cimser", ingredient: "Cimetidine HCl", form: "Tablet" },
      { brand: "Clap Plus", ingredient: "Clopidogrel", form: "Tablet" },
    ],
  },
  {
    name: "CNS & Psychiatry",
    products: [
      { brand: "Atiser", ingredient: "Lorazepam", form: "Tablet" },
      { brand: "Cloztec", ingredient: "Clozapine", form: "Tablet" },
      { brand: "Dulox", ingredient: "Duloxetine HCl", form: "Capsule" },
      { brand: "Efexiv", ingredient: "Venlafaxine HCl", form: "Tablet" },
    ],
  },
  {
    name: "Dermatology",
    products: [
      { brand: "Acitec", ingredient: "Acitretin", form: "Capsule" },
      { brand: "Biflon", ingredient: "Bifonazole", form: "Cream" },
      { brand: "Calinol Plus", ingredient: "Benzoyl Peroxide + Clindamycin", form: "Gel" },
      { brand: "Calinol-V", ingredient: "Clindamycin", form: "Cream" },
    ],
  },
  {
    name: "Nutrition & Others",
    products: [
      { brand: "Dewfer", ingredient: "Iron Poly Maltose Complex", form: "Tablet" },
      { brand: "Dewfer-F", ingredient: "Iron Salts + Folic Acid", form: "Tablet" },
      { brand: "Cromin", ingredient: "Sodium Cromoglycate", form: "Drops" },
      { brand: "Deslort", ingredient: "Desloratadine", form: "Tablet" },
    ],
  },
];

export const quality = {
  control: {
    title: "Quality Control",
    intro:
      "Our Quality Control laboratory verifies the purity, potency and stability of every product using advanced analytical technologies.",
    points: [
      "Raw material testing before entering production",
      "In-process checks at every critical stage",
      "Finished-product release testing against specifications",
      "Stability studies to guarantee shelf-life integrity",
    ],
  },
  assurance: {
    title: "Quality Assurance",
    intro:
      "Quality Assurance is the backbone of our operations, ensuring every medicine we produce is safe, effective and reliable — from raw material sourcing to final distribution.",
    points: [
      "Comprehensive QA program across the full production lifecycle",
      "Rigorous testing protocols and batch validation",
      "Regular internal and external audits",
      "Culture of continuous improvement and staff training",
    ],
  },
  ehs: {
    title: "Environment, Health & Safety",
    intro:
      "We are committed to environmentally green and clean processes that protect our people, our community and our planet.",
    points: [
      "Green, clean manufacturing processes",
      "Safe working environment for all employees",
      "Responsible waste management and effluent treatment",
      "Compliance with health, safety and environmental regulations",
    ],
  },
};

export const rnd = {
  intro:
    "Research & Development is at the heart of Panacea Pharma. We continuously explore new formulations and improve existing ones through science-led innovation.",
  points: [
    "Formulation development and continuous improvement based on science",
    "Highly qualified team of scientists, pharmacists and chemists",
    "Post-marketing monitoring for ongoing improvement",
    "Focus on affordable, accessible, international-quality medicine",
  ],
};

export const exportInfo = {
  intro:
    "Panacea Pharmaceuticals is expanding its reach beyond Pakistan, delivering international-quality medicines to markets around the world through a reliable supply chain.",
  points: [
    "International-quality products manufactured to global standards",
    "Reliable, traceable and compliant supply chain",
    "Growing footprint across multiple international markets",
    "Dedicated export team for partner support",
  ],
};

export const contact = {
  offices: [
    {
      label: "Head Office",
      address: "Office 15, 1st Floor, Rose Plaza, I-8 Markaz, Islamabad.",
      phone: "+92 (0)331 5006681",
      email: "panaceapharmaceutical01@gmail.com",
    },
    {
      label: "Production Plant",
      address: "Plot 4, Street S-6, National Industrial Zone, Rawat, Islamabad.",
      phone: "+92 324 5036781",
      email: "muneebroyal200@gmail.com",
    },
  ],
  hours: "Mon – Fri: 10:00 AM to 5:00 PM",
};
