
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectBySlug, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");
  const [activeImage, setActiveImage] = useState<string>(
    project ? project.coverImage : ""
  );
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Set initial active image and index
  useEffect(() => {
    if (project) {
      setActiveImage(project.coverImage);
      const initialIndex = project.images.findIndex(img => img === project.coverImage);
      setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
    }
  }, [project]);
  
  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = useCallback(() => {
    if (!project) return;
    
    const diff = touchStart - touchEnd;
    const threshold = 50; // Minimum distance to trigger a swipe
    
    // Swipe left (next image)
    if (diff > threshold && currentIndex < project.images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setActiveImage(project.images[newIndex]);
    }
    // Swipe right (previous image)
    else if (diff < -threshold && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setActiveImage(project.images[newIndex]);
    }
  }, [touchStart, touchEnd, currentIndex, project]);
  
  // Update active image when currentIndex changes
  useEffect(() => {
    if (project && project.images[currentIndex]) {
      setActiveImage(project.images[currentIndex]);
    }
  }, [currentIndex, project]);
  
  // Navigation functions
  const goToNext = useCallback(() => {
    if (project && currentIndex < project.images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, project]);
  
  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  }, [currentIndex]);
  
  if (!project) {
    return (
      <Layout>
        <div className="container-custom py-40">
          <h1 className="heading-lg mb-6">Project not found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The project you are looking for does not exist.
          </p>
          <Button asChild>
            <Link to="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const similarProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);
    
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-xl mb-2 text-center"
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center items-center gap-4 mb-8 text-muted-foreground"
          >
            <span className="text-primary font-medium">{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <span>{project.location}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <span>{project.year}</span>
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 relative group"
            >
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden bg-accent/10 relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={sliderRef}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                {currentIndex > 0 && (
                  <button 
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}
                
                {project && currentIndex < project.images.length - 1 && (
                  <button 
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}
                
                {/* Image Counter */}
                {project && project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>
            </motion.div>
            
            {/* Project Info and Thumbnails */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Project Description */}
              <div>
                <h3 className="text-xl font-bold mb-3">Project Description</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              
              {/* Services Provided */}
              <div>
                <h3 className="text-xl font-bold mb-3">Services Provided</h3>
                <ul className="space-y-1">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <svg 
                        className="h-5 w-5 text-primary mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Client Info */}
              <div>
                <h3 className="text-xl font-bold mb-3">Client</h3>
                <p className="text-muted-foreground">{project.client}</p>
              </div>
              
              {/* Image Thumbnails */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Gallery</h3>
                <div className="relative">
                  <div className="flex space-x-3 pb-2 overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveImage(image);
                          setCurrentIndex(index);
                        }}
                        className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden transition-all duration-200 snap-center ${
                          activeImage === image 
                            ? "ring-2 ring-primary scale-105" 
                            : "opacity-70 hover:opacity-100 hover:ring-1 hover:ring-muted-foreground/30"
                        }`}
                        aria-label={`View image ${index + 1} of ${project.images.length}`}
                        aria-current={activeImage === image ? 'true' : 'false'}
                      >
                        <img 
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading={index < 2 ? 'eager' : 'lazy'}
                        />
                      </button>
                    ))}
                  </div>
                  {/* Gradient fade effect on the right side */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-background pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonial (if available) */}
      {project.testimonial && (
        <section className="py-16 bg-primary/5">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <svg 
                className="h-12 w-12 text-primary/30 mx-auto mb-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl font-light italic mb-6">"{project.testimonial.quote}"</p>
              <div className="font-medium">
                <span className="block text-lg">{project.testimonial.author}</span>
                <span className="text-muted-foreground">{project.testimonial.position}</span>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Similar Projects */}
      {similarProjects.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="heading-lg mb-12 text-center">Similar Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProjects.map((similarProject, index) => (
                <motion.div
                  key={similarProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/portfolio/${similarProject.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
                      <img 
                        src={similarProject.coverImage}
                        alt={similarProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg">
                          <h3 className="font-bold">{similarProject.title}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 max-w-2xl mx-auto">Inspired by This Project?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can create a similar transformation for your space
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
