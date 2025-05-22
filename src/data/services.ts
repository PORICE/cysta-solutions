
export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  iconName: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Residential Interior Design",
    slug: "residential",
    shortDescription: "Transform your home into a personalized sanctuary that reflects your unique style and needs.",
    fullDescription: "We create beautiful, functional living spaces tailored to your lifestyle. Our comprehensive residential design service covers everything from single rooms to complete homes, ensuring each space tells your personal story while maintaining perfect harmony and flow throughout.",
    imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
    iconName: "home",
    features: [
      "Personalized design consultations",
      "Space planning and furniture layouts",
      "Material and finish selections",
      "Custom furniture design",
      "Art and accessory curation",
      "Project management and implementation"
    ]
  },
  {
    id: "2",
    title: "Commercial Spaces",
    slug: "commercial",
    shortDescription: "Create inspiring workplaces that boost productivity and embody your brand identity.",
    fullDescription: "Our commercial design services help businesses create spaces that enhance productivity, reflect brand values, and leave lasting impressions. From offices and retail stores to restaurants and hospitality venues, we integrate functionality with distinctive design to support your business objectives.",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    iconName: "building",
    features: [
      "Workplace strategy and space planning",
      "Brand integration in physical spaces",
      "Furniture specification and procurement",
      "Lighting design for optimal work environments",
      "Custom millwork and built-ins",
      "Acoustic solutions and privacy considerations"
    ]
  },
  {
    id: "3",
    title: "Custom Furniture Design",
    slug: "furniture",
    shortDescription: "Commission bespoke pieces that perfectly fit your space and express your personal aesthetic.",
    fullDescription: "When standard options don't meet your specific needs, our custom furniture design service creates unique pieces that perfectly complement your space. Working with skilled craftspeople, we design and produce furniture that balances form, function, and sustainability while reflecting your personal style.",
    imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2067&auto=format&fit=crop",
    iconName: "sofa",
    features: [
      "Bespoke furniture design",
      "Material selection and sourcing",
      "Prototype development and refinement",
      "Production oversight and quality control",
      "Installation and placement",
      "Care and maintenance guidance"
    ]
  },
  {
    id: "4",
    title: "Design Consultation",
    slug: "consultation",
    shortDescription: "Get expert guidance on your design challenges without committing to a full-service project.",
    fullDescription: "Our design consultation service offers professional guidance when you need specific advice without a full design project. Perfect for DIY enthusiasts, these focused sessions help solve design dilemmas, provide direction on color schemes, layouts, or material selections, and create actionable plans for your space.",
    imageUrl: "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2070&auto=format&fit=crop",
    iconName: "clipboard-list",
    features: [
      "In-person or virtual consultations",
      "Space planning recommendations",
      "Color and material suggestions",
      "Furniture arrangement advice",
      "Shopping lists and product recommendations",
      "DIY guidance and resource sharing"
    ]
  },
  {
    id: "5",
    title: "Renovation Management",
    slug: "renovation",
    shortDescription: "Execute your renovation project with expert oversight from concept to completion.",
    fullDescription: "Our renovation management service takes the stress out of home transformations by coordinating all aspects of your project. From initial concepts and technical drawings to contractor selection and construction supervision, we ensure your renovation is completed on time, within budget, and to the highest quality standards.",
    imageUrl: "https://images.unsplash.com/photo-1574359411659-13be08e2cc64?q=80&w=2000&auto=format&fit=crop",
    iconName: "hammer",
    features: [
      "Comprehensive project planning",
      "Technical drawings and specifications",
      "Contractor vetting and selection",
      "Permitting assistance",
      "Construction oversight and quality control",
      "Timeline and budget management"
    ]
  },
  {
    id: "6",
    title: "Exhibition Design & Setup",
    slug: "exhibitions",
    shortDescription: "We turn spaces into stories through immersive exhibition environments that captivate and educate visitors.",
    fullDescription: "Our exhibition services are designed to captivate, educate, and leave a lasting impression. Whether it's a trade fair, art show, or corporate event, we design immersive environments that tell your brand's story through space, light, and structure. From concept to execution, we handle every aspect of creating memorable exhibition experiences.",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    iconName: "layout-grid",
    features: [
      "Exhibition Booth Design & Fabrication",
      "Spatial Planning & Floor Layouts",
      "Thematic Design Concepts",
      "Installation & Dismantling",
      "Multimedia & Digital Integration",
      "Furniture & Decor for Exhibitions"
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};
