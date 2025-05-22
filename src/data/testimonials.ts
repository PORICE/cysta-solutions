
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  quote: string;
  image?: string;
  rating: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    position: "CEO, Molenaar East Africa",
    quote: "CYSTA SOLUTIONS LIMITED delivered an exceptional exhibition stand for us at Propak East Africa 2025. Their innovative design and attention to detail perfectly captured our brand's essence and helped us stand out at the event.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop",
    rating: 5,
    featured: true
  },
  {
    id: "2",
    name: "Sarah Johnson",
    position: "Operations Director",
    quote: "CYSTA SOLUTIONS LIMITED transformed our office space into a modern, functional work environment. Their attention to detail and ability to understand our operational needs was exceptional.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop",
    rating: 5,
    featured: true
  },
  {
    id: "3",
    name: "Michael Chen",
    position: "CEO, TechVision Africa",
    quote: "The CYSTA SOLUTIONS LIMITED team designed our regional headquarters to perfectly balance innovation and comfort. Our employees love the new space, and it truly represents our company culture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    rating: 5,
    featured: true
  },
  {
    id: "4",
    name: "Priya Patel",
    position: "Restaurant Owner",
    quote: "From concept to completion, CYSTA SOLUTIONS LIMITED captured the exact atmosphere we wanted for our restaurant. The space has become a talking point among our customers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
    rating: 5,
    featured: false
  },
  {
    id: "5",
    name: "James Wilson",
    position: "Art Collector",
    quote: "CYSTA SOLUTIONS LIMITED designed a space that not only showcases my collection perfectly but also feels comfortable and inviting. Their understanding of light, space, and flow is unmatched.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1370&auto=format&fit=crop",
    rating: 5,
    featured: false
  },
  {
    id: "6",
    name: "Elena Rodriguez",
    position: "Director, Heritage Hotels",
    quote: "The renovation of our historic boutique hotel was handled with incredible sensitivity to the original architecture while bringing in modern comfort. Bookings have increased by 40% since completion.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
    rating: 5,
    featured: false
  },
  {
    id: "7",
    name: "David Kariuki",
    position: "Facilities Manager, Corporate Solutions Ltd",
    quote: "CYSTA SOLUTIONS LIMITED's expertise in workspace optimization has significantly improved our office functionality and employee satisfaction. Their team was professional and delivered beyond our expectations.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    rating: 5,
    featured: true
  }
];
