
interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string; // Optional thumbnail for videos
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  client: string;
  location: string;
  year: number;
  featured: boolean;
  coverImage: string;
  images: (string | MediaItem)[];
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: "molenaar-videojet-propak-2025",
    title: "Molenaar/VideoJet Stand",
    slug: "molenaar-videojet-propak-2025",
    category: "Exhibitions",
    description: "Custom exhibition stand design for Molenaar/VideoJet at Propak East Africa 2025. The stand was designed to showcase their industrial packaging and coding solutions with an open, inviting layout that encourages visitor engagement and product demonstrations.",
    client: "Molenaar/VideoJet",
    location: "Propak East Africa, Nairobi, Kenya",
    year: 2025,
    featured: true,
    coverImage: "/images/portfolio/molenaar-videojet-propak-2025/cover.jpg",
    images: [
      // Images 1-10
      "/images/portfolio/molenaar-videojet-propak-2025/1.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/2.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/3.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/4.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/5.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/6.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/7.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/8.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/9.jpg",
      "/images/portfolio/molenaar-videojet-propak-2025/10.jpg",
      
      // Video example (uncomment and add your video file)
      // {
      //   type: 'video',
      //   url: '/videos/portfolio/molenaar-videojet-propak-2025/demo.mp4',
      //   thumbnail: '/images/portfolio/molenaar-videojet-propak-2025/video-thumbnail.jpg'
      // }
    ],
    services: ["Exhibition Design", "Stand Construction", "Branding"],
    testimonial: {
      quote: "The stand design perfectly captured our brand identity and created an impressive presence at the exhibition. The team's attention to detail and professional execution made the event a great success.",
      author: "Event Manager",
      position: "Molenaar/VideoJet"
    }
  },
  {
    id: "1",
    title: "Azure Sky Penthouse",
    slug: "azure-sky-penthouse",
    category: "Residential",
    description: "A luxurious penthouse with panoramic city views, designed with a blend of modern minimalism and timeless elegance. The space features custom furniture, a stunning open-concept kitchen, and a seamless indoor-outdoor living experience with an expansive terrace.",
    client: "Private Client",
    location: "Downtown Metropolitan",
    year: 2023,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop"
    ],
    services: ["Interior Design", "Custom Furniture", "Space Planning"],
    testimonial: {
      quote: "Lumina transformed our penthouse into a sophisticated haven that perfectly reflects our lifestyle. Their attention to detail and ability to balance aesthetics with functionality exceeded our expectations.",
      author: "Alexandra Chen",
      position: "Homeowner"
    }
  },
  {
    id: "2",
    title: "Eco Modern Office",
    slug: "eco-modern-office",
    category: "Commercial",
    description: "A sustainable office space designed for a forward-thinking tech company. The project incorporated biophilic design principles, recycled materials, and energy-efficient solutions while creating a collaborative and inspiring work environment.",
    client: "GreenTech Innovations",
    location: "Tech District",
    year: 2022,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop"
    ],
    services: ["Commercial Design", "Sustainable Solutions", "Space Planning"],
    testimonial: {
      quote: "Lumina Studio created the perfect workspace that aligns with our company values and enhances our team's productivity. The sustainable approach and innovative design elements have made our office a showcase for clients and potential employees.",
      author: "Marcus Johnson",
      position: "CEO, GreenTech Innovations"
    }
  },
  {
    id: "3",
    title: "Serene Lakeside Retreat",
    slug: "serene-lakeside-retreat",
    category: "Residential",
    description: "A vacation home designed to connect with its natural surroundings and provide a peaceful escape from city life. The project features natural materials, large windows framing lake views, and comfortable, durable furnishings for family gatherings.",
    client: "Private Client",
    location: "Lake District",
    year: 2023,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
    ],
    services: ["Interior Design", "Custom Furniture", "Material Selection"],
    testimonial: {
      quote: "Our lakeside home has become our favorite place to be. Lumina Studio created a space that feels both luxurious and completely relaxed, with thoughtful details that make every weekend stay special.",
      author: "The Williams Family",
      position: "Homeowners"
    }
  },
  {
    id: "4",
    title: "Boutique Hotel Redesign",
    slug: "boutique-hotel-redesign",
    category: "Commercial",
    description: "A complete renovation of a historic boutique hotel, blending original architectural features with contemporary design elements. The project included guest rooms, public spaces, and a signature restaurant, all designed to create a unique and memorable guest experience.",
    client: "Heritage Hotels Group",
    location: "Historic District",
    year: 2022,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=2121&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=2121&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop"
    ],
    services: ["Commercial Design", "Renovation", "Custom Furniture"],
    testimonial: {
      quote: "Lumina Studio's redesign has transformed our property and significantly enhanced our guest experience. Their careful balance of historic preservation and modern comfort has earned us industry recognition and increased our bookings substantially.",
      author: "Elena Rodriguez",
      position: "Operations Director, Heritage Hotels Group"
    }
  },
  {
    id: "5",
    title: "Minimalist Urban Loft",
    slug: "minimalist-urban-loft",
    category: "Residential",
    description: "A converted loft space designed for a young professional with a focus on clean lines, smart storage solutions, and flexible living areas. The project maintained industrial elements while introducing warmth through textiles and natural materials.",
    client: "Private Client",
    location: "Arts District",
    year: 2023,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1964&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617098650990-217c7cf9e66c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613252021695-975ee2b31f6a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
    ],
    services: ["Interior Design", "Space Planning", "Furniture Selection"],
    testimonial: {
      quote: "Lumina created exactly what I wanted—a clean, modern space that still feels warm and personal. Their ingenious storage solutions and layout have made my compact loft feel spacious and perfectly suited to my lifestyle.",
      author: "David Kim",
      position: "Homeowner"
    }
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};
