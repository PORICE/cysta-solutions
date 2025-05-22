
export interface FurnitureItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  price: number;
  description: string;
  materials: string[];
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
  colors: string[];
  mainImage: string;
  galleryImages: string[];
  inStock: boolean;
  featured: boolean;
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: "1",
    name: "Azure Lounge Chair",
    slug: "azure-lounge-chair",
    category: "Seating",
    type: "Chair",
    price: 1299,
    description: "A statement lounge chair that combines comfort with modern design. The gently curved silhouette and premium upholstery create a luxurious seating experience, while the solid wood frame provides durability and a touch of natural warmth.",
    materials: ["Solid Walnut Frame", "Premium Wool Upholstery", "High-Resilience Foam"],
    dimensions: {
      width: 75,
      depth: 85,
      height: 80
    },
    colors: ["Ocean Blue", "Charcoal Gray", "Ivory"],
    mainImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Luna Coffee Table",
    slug: "luna-coffee-table",
    category: "Tables",
    type: "Coffee Table",
    price: 899,
    description: "A sculptural coffee table inspired by lunar phases. The marble top features a subtle gradient pattern, while the brass-finished base provides both stability and visual lightness. An elegant centerpiece for any living space.",
    materials: ["Marble", "Brass-Finished Steel"],
    dimensions: {
      width: 100,
      depth: 100,
      height: 40
    },
    colors: ["White Marble/Brass", "Black Marble/Brass"],
    mainImage: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=2003&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=2003&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566475955546-7f4d56e1970b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611464908623-07f19927264e?q=80&w=2070&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "3",
    name: "Cascade Bookshelf",
    slug: "cascade-bookshelf",
    category: "Storage",
    type: "Bookshelf",
    price: 1599,
    description: "A dramatic bookshelf with staggered shelves that create a waterfall effect. Combining form and function, this piece provides ample storage while serving as a striking room divider or statement wall piece.",
    materials: ["Solid Oak", "Powder-Coated Steel"],
    dimensions: {
      width: 180,
      depth: 40,
      height: 200
    },
    colors: ["Natural Oak/Black", "Walnut/Black", "White Oak/Brass"],
    mainImage: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752654-7a0a9d8b1f1c?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609842947419-ba4f04d5d60d?q=80&w=1974&auto=format&fit=crop"
    ],
    inStock: false,
    featured: true
  },
  {
    id: "4",
    name: "Serene Dining Table",
    slug: "serene-dining-table",
    category: "Tables",
    type: "Dining Table",
    price: 2299,
    description: "A sophisticated dining table that combines a sleek silhouette with natural materials. The live-edge tabletop showcases the wood's natural beauty, while the geometric base provides modern contrast and stability.",
    materials: ["Solid Acacia Wood", "Blackened Steel"],
    dimensions: {
      width: 200,
      depth: 100,
      height: 75
    },
    colors: ["Natural Acacia", "Smoked Oak"],
    mainImage: "https://images.unsplash.com/photo-1615067784537-7a1d3442dd65?q=80&w=2071&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1615067784537-7a1d3442dd65?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617325710236-8f37dc0b6d76?q=80&w=2062&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false
  },
  {
    id: "5",
    name: "Meridian Floor Lamp",
    slug: "meridian-floor-lamp",
    category: "Lighting",
    type: "Floor Lamp",
    price: 749,
    description: "A sleek floor lamp with adjustable positioning for versatile lighting. The minimalist design features a slender frame that arches gracefully over seating areas, providing both ambient and task lighting as needed.",
    materials: ["Brass", "Spun Aluminum", "Marble Base"],
    dimensions: {
      width: 40,
      depth: 40,
      height: 180
    },
    colors: ["Brushed Brass/White", "Matte Black/Black Marble"],
    mainImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2066&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2066&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false
  },
  {
    id: "6",
    name: "Vitality Bed Frame",
    slug: "vitality-bed-frame",
    category: "Bedroom",
    type: "Bed Frame",
    price: 1899,
    description: "A platform bed that elevates sleeping spaces with its floating design and integrated lighting. The gentle upholstered headboard provides comfort for reading, while the solid wood frame ensures lasting durability.",
    materials: ["Solid Ash Wood", "Premium Linen Upholstery"],
    dimensions: {
      width: 180,
      depth: 210,
      height: 100
    },
    colors: ["Natural Ash/Oatmeal", "Walnut/Charcoal"],
    mainImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=1932&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false
  }
];

export const getFurnitureItemBySlug = (slug: string): FurnitureItem | undefined => {
  return furnitureItems.find((item) => item.slug === slug);
};

export const getFeaturedFurniture = (): FurnitureItem[] => {
  return furnitureItems.filter((item) => item.featured);
};

export const getFurnitureCategories = (): string[] => {
  const categories = new Set(furnitureItems.map((item) => item.category));
  return Array.from(categories);
};

export const getFurnitureTypes = (): string[] => {
  const types = new Set(furnitureItems.map((item) => item.type));
  return Array.from(types);
};
