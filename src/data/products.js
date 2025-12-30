// ================================
// PRODUCT CATEGORIES
// ================================

export const PRODUCT_CATEGORIES = [
  "All Products",
  "Bakery Boxes",
  "Apple Cartons",
  "Bulk Sweet Packaging Boxes",
  "E-commerce & Logistics Packaging",
  "Part-Specific OEM Packaging",
  "Industrial Machinery Packaging",
  "Sports Equipment Packaging",
  "Gym Equipment Packaging",
  "Glass & Looking Mirror Packaging",
  "Master Cartons & Bulk Packaging",
  "Export-Ready Packaging",
];

// ================================
// PRODUCT CATALOGUE DATA
// ================================

export const PRODUCTS = [
  // ------------------------------------------------
  // 1. BAKERY BOXES
  // ------------------------------------------------
  {
    id: "bakery-boxes",
    category: "Bakery Boxes",
    title: "Bakery Boxes",
    image: "/images/products/bakery-boxes-corrugated.webp",
    shortDescription:
      "Corrugated boxes designed for bakery and dry food manufacturers.",
    description:
      "Bakery boxes are manufactured to support hygienic handling, stable stacking, and safe transportation of bakery and dry food products across distributor and retail supply chains.",
    applications: [
      "Biscuits packaging",
      "Rusk cartons",
      "Namkeen & bhujia boxes",
      "Dry snack secondary packaging",
    ],
    technicalSpecs: [
      "Single wall and double wall corrugated boards",
      "Custom and standard box dimensions",
      "Optimized stacking and compression strength",
      "Suitable for manual and automated packing",
    ],
    typicalUsers: [
      "Bakery manufacturers",
      "FMCG food brands",
      "Distributors and wholesalers",
    ],
  },

  // ------------------------------------------------
  // 2. APPLE CARTONS
  // ------------------------------------------------
  {
    id: "apple-cartons",
    category: "Apple Cartons",
    title: "Apple Cartons",
    image: "/images/products/apples-corrugated-packaging.webp",
    shortDescription:
      "High-strength corrugated cartons for apple packaging.",
    description:
      "Apple cartons are specifically developed for orchard-to-market movement, offering high stacking strength, ventilation support, and durability for long-distance agricultural transport.",
    applications: [
      "Fresh apple packaging",
      "Cold storage dispatch",
      "Long-distance produce transport",
    ],
    technicalSpecs: [
      "Ventilated corrugated carton structures",
      "High load-bearing and stacking strength",
      "Cold storage compatible designs",
      "Reinforced board combinations",
    ],
    typicalUsers: [
      "Apple growers",
      "Fruit traders",
      "Cold storage operators",
    ],
  },

  // ------------------------------------------------
  // 3. BULK SWEET PACKAGING BOXES
  // ------------------------------------------------
  {
    id: "bulk-sweet-packaging",
    category: "Bulk Sweet Packaging Boxes",
    title: "Bulk Sweet Packaging Boxes",
    image: "/images/products/sweets-packaging-corrugated-box.webp",
    shortDescription:
      "Corrugated boxes for bulk sweet manufacturing and distribution.",
    description:
      "Bulk sweet packaging boxes are developed for sweet manufacturers handling large quantities and distributor-level movement, ensuring structural strength and consistent performance.",
    applications: [
      "Wholesale sweet distribution",
      "Regional supply chains",
      "Bulk movement to distributors",
    ],
    technicalSpecs: [
      "Standard 3 kg and 5 kg box capacities",
      "Strong board combinations for bulk loads",
      "Designed for stacking and transport",
      "Suitable for repetitive dispatch cycles",
    ],
    typicalUsers: [
      "Sweet manufacturers",
      "Wholesale distributors",
    ],
  },

  // ------------------------------------------------
  // 4. E-COMMERCE & LOGISTICS PACKAGING
  // ------------------------------------------------
  {
    id: "ecommerce-logistics-packaging",
    category: "E-commerce & Logistics Packaging",
    title: "E-commerce & Logistics Packaging",
    image: "/images/products/ecommerce-delivery-box-corrugated.webp",
    shortDescription:
      "Corrugated packaging for warehousing and last-mile delivery.",
    description:
      "These packaging solutions are engineered for repeated handling, sorting, warehousing, and last-mile delivery environments commonly found in e-commerce and logistics operations.",
    applications: [
      "E-commerce fulfilment",
      "Warehouse storage",
      "Logistics and courier dispatch",
    ],
    technicalSpecs: [
      "Transit-safe box constructions",
      "Durability for repeated handling",
      "Consistent dimensions for logistics systems",
      "Optimized weight-to-strength ratio",
    ],
    typicalUsers: [
      "E-commerce brands",
      "Logistics service providers",
      "Warehousing operations",
    ],
  },

  // ------------------------------------------------
  // 5. PART-SPECIFIC OEM PACKAGING
  // ------------------------------------------------
  {
    id: "oem-part-specific-packaging",
    category: "Part-Specific OEM Packaging",
    title: "Part-Specific OEM Packaging",
    image: "/images/products/oem-tools-packaging-corrugate-box.webp",
    shortDescription:
      "Precision corrugated packaging for OEM and B2B components.",
    description:
      "Part-specific OEM packaging is developed for manufacturers requiring repeatable, dimensionally consistent corrugated packaging aligned with production and dispatch cycles.",
    applications: [
      "Component packaging",
      "Assembly and sub-assembly parts",
      "B2B manufacturing supply chains",
    ],
    technicalSpecs: [
      "Custom sizing and die-cut configurations",
      "Repeatable specifications for long-term supply",
      "Protection during handling and transport",
      "Aligned with OEM production workflows",
    ],
    typicalUsers: [
      "OEM manufacturers",
      "B2B suppliers",
      "Component vendors",
    ],
  },

  // ------------------------------------------------
  // 6. INDUSTRIAL MACHINERY & HEAVY PARTS PACKAGING
  // ------------------------------------------------
  {
    id: "industrial-machinery-packaging",
    category: "Industrial Machinery Packaging",
    title: "Industrial Machinery & Heavy Parts Packaging",
    image: "/images/products/heavy-machinery-corrugated-box.webp",
    shortDescription:
      "Heavy-duty corrugated packaging for industrial components.",
    description:
      "Industrial packaging solutions designed to support heavy machinery parts, tools, and industrial components requiring reinforced corrugated structures.",
    applications: [
      "Machinery components",
      "Industrial tools",
      "Heavy part transport",
    ],
    technicalSpecs: [
      "High load-bearing corrugated boards",
      "Support for heavy and irregular components",
      "Reinforced structural designs",
      "Suitable for industrial transit conditions",
    ],
    typicalUsers: [
      "Industrial manufacturers",
      "Machinery suppliers",
    ],
  },

  // ------------------------------------------------
  // 7. SPORTS EQUIPMENT PACKAGING
  // ------------------------------------------------
  {
    id: "sports-equipment-packaging",
    category: "Sports Equipment Packaging",
    title: "Sports Equipment Packaging",
    image: "/images/products/sports-packaging-corrugated-box.webp",
    shortDescription:
      "Corrugated packaging for sports goods and accessories.",
    description:
      "Sports equipment packaging solutions developed to protect sporting goods during handling, storage, and transport.",
    applications: [
      "Badminton racket boxes",
      "Cricket bat packaging",
      "Ball cartons",
      "Sports shoe boxes",
    ],
    technicalSpecs: [
      "Protective corrugated structures",
      "Custom box dimensions",
      "Designed for lightweight and bulky items",
      "Transit-safe packaging designs",
    ],
    typicalUsers: [
      "Sports goods manufacturers",
      "Distributors and retailers",
    ],
  },

  // ------------------------------------------------
  // 8. GYM EQUIPMENT PACKAGING
  // ------------------------------------------------
  {
    id: "gym-equipment-packaging",
    category: "Gym Equipment Packaging",
    title: "Gym Equipment Packaging",
    image: "/images/products/gym-packaging-corrugate-box.webp",
    shortDescription:
      "Heavy-duty corrugated boxes for gym and fitness equipment.",
    description:
      "Gym equipment packaging is designed to handle high-weight fitness products requiring strong compression strength and structural stability.",
    applications: [
      "Dumbbell packaging (various weights)",
      "Weight plate cartons",
      "Fitness accessories",
    ],
    technicalSpecs: [
      "High compression and stacking strength",
      "Suitable for heavy-weight items",
      "Reinforced corrugated boards",
      "Safe handling during transport",
    ],
    typicalUsers: [
      "Gym equipment manufacturers",
      "Fitness product distributors",
    ],
  },

  // ------------------------------------------------
  // 9. GLASS & LOOKING MIRROR PACKAGING
  // ------------------------------------------------
  {
    id: "glass-mirror-packaging",
    category: "Glass & Looking Mirror Packaging",
    title: "Glass & Looking Mirror Packaging",
    image: "/images/products/glass-mirror-packaging-box.webp",
    shortDescription:
      "Corrugated packaging for fragile glass and mirror products.",
    description:
      "Packaging solutions developed for fragile glass and mirror products requiring cushioning, reinforcement, and safe stacking during transport.",
    applications: [
      "Looking mirrors with frames",
      "Frameless mirrors",
      "Small, medium, and large mirror sizes",
    ],
    technicalSpecs: [
      "Reinforced corrugated board structures",
      "Cushioning support for fragile items",
      "Designed to minimize breakage risk",
      "Safe stacking and handling support",
    ],
    typicalUsers: [
      "Mirror manufacturers",
      "Interior and furnishing suppliers",
    ],
  },

  // ------------------------------------------------
  // 10. MASTER CARTONS & BULK PACKAGING
  // ------------------------------------------------
  {
    id: "master-cartons-bulk-packaging",
    category: "Master Cartons & Bulk Packaging",
    title: "Master Cartons & Bulk Packaging",
    image: "/images/products/master-carton-export-packaging.webp",
    shortDescription:
      "Large-format corrugated cartons for bulk consolidation.",
    description:
      "Master cartons are designed for bulk consolidation, palletized movement, and distributor-level handling.",
    applications: [
      "Bulk consolidation",
      "Distributor-level packaging",
      "Palletized transport",
    ],
    technicalSpecs: [
      "Large-format carton manufacturing capability",
      "Pallet-compatible dimensions",
      "Bulk handling support",
      "High stacking strength",
    ],
    typicalUsers: [
      "Bulk suppliers",
      "Distributors",
      "Exporters",
    ],
  },

  // ------------------------------------------------
  // 11. EXPORT-READY & LONG-DISTANCE PACKAGING
  // ------------------------------------------------
  {
    id: "export-ready-packaging",
    category: "Export-Ready Packaging",
    title: "Export-Ready & Long-Distance Packaging",
    image: "/images/products/export-corrugated-box.webp",
    shortDescription:
      "Corrugated packaging engineered for export and long transit.",
    description:
      "Export-ready corrugated packaging solutions designed to withstand extended transit durations, international shipping conditions, and multiple handling points.",
    applications: [
      "International shipping",
      "Long-distance domestic transport",
      "Export supply chains",
    ],
    technicalSpecs: [
      "Export-grade corrugated board selection",
      "High stacking and compression strength",
      "Designed for long-haul transport reliability",
      "Suitable for containerized shipments",
    ],
    typicalUsers: [
      "Exporters",
      "International suppliers",
    ],
  },
];
