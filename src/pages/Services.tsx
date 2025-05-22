
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import { Link } from "react-router-dom";
import { useState } from "react";

const projectImages = {
  "1": [
    "https://images.unsplash.com/photo-1600585154340-6b6d921bd0f4?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  ],
  "2": [
    "https://images.unsplash.com/photo-1497366216546-375f84a8dfda?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04ed?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009c2c1e87c3?q=80&w=2070&auto=format&fit=crop"
  ],
  "3": [
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2067&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555041463-a910a53af5a8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556911220-bda317e8a8af?q=80&w=2070&auto=format&fit=crop"
  ],
  "4": [
    "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687644-c3931f2342b6?q=80&w=2070&auto=format&fit=crop"
  ],
  "5": [
    "https://images.unsplash.com/photo-1574359411659-13be08e2cc64?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607686277-cdf6a69847a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  ],
  "6": [
    "https://images.unsplash.com/photo-1515169067868-538f94cf4c9b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216546-375f84a8dfda?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  ]
} as Record<string, string[]>;

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});

  const nextImage = (serviceId: string) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) + 1) % (projectImages[serviceId]?.length || 1)
    }));
  };

  const prevImage = (serviceId: string) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceId]: (prev[serviceId] || 0) === 0 
        ? (projectImages[serviceId]?.length || 1) - 1 
        : (prev[serviceId] || 0) - 1
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-background/80">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-xl mb-6 text-center"
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground text-center max-w-3xl mx-auto"
          >
            Comprehensive design solutions tailored to your unique needs and vision
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden relative group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex[service.id] || 0}
                        src={projectImages[service.id]?.[currentImageIndex[service.id] || 0] || service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                    
                    {projectImages[service.id]?.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(service.id);
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:ring-2 hover:ring-khaki hover:ring-offset-2"
                          aria-label="Previous image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(service.id);
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:ring-2 hover:ring-khaki hover:ring-offset-2"
                          aria-label="Next image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </button>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          {projectImages[service.id]?.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(prev => ({
                                  ...prev,
                                  [service.id]: idx
                                }));
                              }}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === (currentImageIndex[service.id] || 0)
                                  ? "bg-khaki w-6 scale-125" 
                                  : "bg-foreground/30 hover:bg-foreground/50"
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.shortDescription}</p>
                  <p className="mb-8">{service.fullDescription}</p>
                  
                  <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-200 group"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 0 15px rgba(210, 179, 127, 0.4)"
                        }}
                      >
                        <div className="p-1.5 rounded-full bg-khaki/10 group-hover:bg-khaki/20 transition-colors duration-200 mr-3">
                          <svg 
                            className="h-5 w-5 text-khaki" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.03,
                      filter: "drop-shadow(0 0 8px rgba(210, 179, 127, 0.6))"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="inline-block"
                      whileHover={{ 
                        scale: 1.03,
                        filter: "drop-shadow(0 0 8px rgba(210, 179, 127, 0.6))"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link 
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-khaki text-smoky_black rounded-full font-medium transition-all duration-300 hover:bg-khaki/90 hover:shadow-lg hover:shadow-khaki/20"
                      >
                        Learn More
                        <svg 
                          className="ml-2 h-4 w-4" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
