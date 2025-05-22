
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, SyntheticEvent, useMemo } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "@/styles/portfolio.module.css";

const Portfolio = () => {
  const location = useLocation();
  const [filter, setFilter] = useState<string>("All");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  
  // Utility function to get background image style
  const getBackgroundImageStyle = useMemo(() => (imageUrl: string): React.CSSProperties => ({
    backgroundImage: `url(${imageUrl}?w=20&q=20)`
  }), []);
  
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  
  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top when filter changes
  useEffect(() => {
    if (filterRef.current) {
      window.scrollTo({
        top: filterRef.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  }, [filter]);
  
  // Reset filter when navigating to the page
  useEffect(() => {
    setFilter("All");
  }, [location.pathname]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const filteredProjects = filter === "All" 
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-xl mb-6 text-center"
          >
            Our Portfolio
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground text-center max-w-3xl mx-auto"
          >
            Explore our collection of carefully crafted interior transformations
          </motion.p>
        </div>
      </section>
      
      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-lg shadow-sm py-3">
        <div className="container-custom px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-nowrap justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide touch-pan-x"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2.5 text-sm sm:text-base rounded-full transition-all whitespace-nowrap min-w-[100px] sm:min-w-0 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  filter === category 
                    ? "bg-primary text-white shadow-md font-medium" 
                    : "bg-accent hover:bg-accent/80 text-foreground/90"
                }`}
                aria-current={filter === category ? 'true' : undefined}
                aria-label={`Filter by ${category}`}
                tabIndex={0}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: Math.min(index * 0.05, 0.4) 
                  }}
                  layout
                >
                  <Link 
                    to={`/portfolio/${project.slug}`} 
                    className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded-xl"
                    aria-label={`View ${project.title} project details`}
                    tabIndex={0}
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-lg transition-all duration-300 h-full active:scale-[0.98]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <div className={styles.imageContainer}>
                        {/* Blur-up placeholder */}
                        <div 
                          className={`${styles.imagePlaceholder} ${styles.visible}`}
                          style={getBackgroundImageStyle(project.coverImage)}
                          aria-hidden="true"
                        />
                        {/* Main image */}
                        <img 
                          src={`${project.coverImage}?w=800&q=80`}
                          srcSet={`
                            ${project.coverImage}?w=400&q=80 400w,
                            ${project.coverImage}?w=600&q=80 600w,
                            ${project.coverImage}?w=800&q=80 800w,
                            ${project.coverImage}?w=1200&q=80 1200w
                          `}
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                          alt={`${project.title} - ${project.category} project in ${project.location}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                          loading={index < 3 ? 'eager' : 'lazy'}
                          decoding="async"
                          width={800}
                          height={600}
                          aria-describedby={`project-desc-${project.id}`}
                          onLoad={(e: SyntheticEvent<HTMLImageElement>) => {
                            const target = e.target as HTMLImageElement;
                            const placeholder = target.previousElementSibling as HTMLElement;
                            if (placeholder) {
                              placeholder.classList.add(styles.loaded);
                            }
                          }}
                        />
                      </div>
                      <span id={`project-desc-${project.id}`} className="sr-only">
                        {project.description}
                      </span>
                      
                      {/* Project Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                          <span className="text-xs sm:text-sm font-medium text-primary mb-1 block">{project.category}</span>
                          <h3 className="text-lg sm:text-xl font-bold line-clamp-1">{project.title}</h3>
                          <p className="text-xs sm:text-sm text-foreground/80 mt-1 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center text-foreground/70 text-xs sm:text-sm">
                              <span>{project.location}</span>
                              <span className="mx-1.5">•</span>
                              <span>{project.year}</span>
                            </div>
                            <span className="text-xs font-medium text-primary">View Details →</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* View Button - Always visible on mobile, hover on desktop */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-30 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-background/90 backdrop-blur-sm p-2 sm:p-2.5 rounded-full shadow-md">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className="text-foreground w-4 h-4 sm:w-5 sm:h-5"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium text-foreground/70">No projects found in this category</h3>
              <p className="mt-2 text-foreground/60">Check back later for new additions!</p>
            </motion.div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section 
        className="py-12 sm:py-16 bg-gradient-to-b from-background to-primary/5"
        aria-labelledby="cta-heading"
      >
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 id="cta-heading" className="heading-lg mb-6 text-gray-900">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate to bring your vision to life. Our team of experts is ready to create a space that reflects your style and meets your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
              <Button 
                size="lg" 
                asChild 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-base focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
              >
                <Link 
                  to="/contact" 
                  className="focus:outline-none"
                  aria-label="Get a free quote for your project"
                >
                  Get a Free Quote
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 text-base focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
              >
                <Link 
                  to="/services" 
                  className="focus:outline-none"
                  aria-label="View our services"
                >
                  View Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
