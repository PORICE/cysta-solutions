import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { Award, CheckCircle, ChevronRight, ArrowRight, ChevronDown, ChevronUp, Instagram } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  // Get and prepare featured data
  const [featuredProjects] = useState(() => getFeaturedProjects().slice(0, 6));
  const [featuredTestimonials] = useState(() => testimonials.slice(0, 3));
  const [featuredServices] = useState(() => services.slice(0, 4));
  
  // Track which service is currently open (null means none)
  const [openServiceId, setOpenServiceId] = useState<string | null>(featuredServices[0]?.id || null);
  
  // Toggle service accordion
  const toggleService = (serviceId: string) => {
    setOpenServiceId(prevId => prevId === serviceId ? null : serviceId);
  };

  const designProcess = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, needs, and project scope."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team creates initial design concepts for your space."
    },
    {
      step: "03",
      title: "Design Refinement",
      description: "We refine the design based on your feedback."
    },
    {
      step: "04",
      title: "Implementation",
      description: "We bring the design to life with careful project management."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[75vh] md:min-h-screen flex items-center justify-center text-center px-4 py-16 sm:py-0">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/40" />
          <img 
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Interior Design"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
          >
            Innovative Solutions. Exceptional Results.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
          >
            Delivering cutting-edge solutions that drive business growth and operational excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">About CYSTA SOLUTIONS LIMITED</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At CYSTA SOLUTIONS LIMITED, we are committed to delivering innovative and reliable solutions that help businesses thrive in today's competitive landscape. Our team of experts combines technical expertise with a deep understanding of industry needs.
              </p>
              <div className="space-y-4 mb-8">
                {["Cutting-Edge Technology", "Client-Focused Approach", "Proven Methodologies", "Sustainable Solutions"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline">
                <Link to="/about">Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1616486338815-7d8c6a346168?q=80&w=1932&auto=format&fit=crop" 
                alt="Lumina Interior Design"
                className="rounded-lg shadow-lg aspect-square object-cover"
                loading="lazy"
              />
              <img 
                src="https://images.unsplash.com/photo-1617802690658-1173f8ddf850?q=80&w=2070&auto=format&fit=crop" 
                alt="Lumina Interior Design"
                className="rounded-lg shadow-lg aspect-square object-cover mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-accent/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Our Featured Projects</h2>
            <p className="text-muted-foreground">Explore our curated selection of recent interior design projects that showcase our versatility and attention to detail.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                    
                    {/* Main image */}
                    <img 
                      src={project.coverImage}
                      alt={`${project.title} - ${project.category} project`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                      width={800}
                      height={600}
                    />
                    
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
                          <span className="text-xs font-medium text-primary">View Project →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <h2 className="heading-lg mb-4">Our Design Services</h2>
            <p className="text-muted-foreground">Comprehensive design solutions tailored to your unique needs and vision.</p>
          </div>
          
          {/* Mobile Accordion */}
          <div className="md:hidden space-y-4">
            {featuredServices.map((service, index) => {
              const isOpen = openServiceId === service.id;
              
              return (
                <div key={service.id} className="bg-card rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded-lg"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-controls={`service-${service.id}-content`}
                    type="button"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                        <Award className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-left">{service.title}</h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground ml-2 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground ml-2 flex-shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`service-${service.id}-content`}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto' },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>
                          <Button variant="link" className="p-0 h-auto text-sm" asChild>
                            <Link to={`/services/${service.slug}`} className="inline-flex items-center">
                              Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.shortDescription}</p>
                <div className="mt-auto">
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link to={`/services/${service.slug}`} className="text-sm">
                      Learn More <ArrowRight className="ml-1 h-4 w-4 inline" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#07070d] transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#c3b697] mb-4">What Our Clients Say</h2>
            <p className="text-[#a1a1aa]">Hear from those who've experienced the CYSTA SOLUTIONS difference.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111118] p-8 rounded-lg border border-[#3e3a38] hover:border-[#c3b697] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#c3b697]"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#a1a1aa]">{testimonial.position}</p>
                  </div>
                </div>
                <div className="text-[#c3b697] flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-0 top-0 text-4xl text-[#3e3a38] font-serif leading-none">"</span>
                  <p className="text-[#e2e2e2] italic">
                    {testimonial.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center gap-4">
            <button className="w-3 h-3 rounded-full bg-[#c3b697]" aria-label="Testimonial 1" />
            <button className="w-3 h-3 rounded-full bg-[#3e3a38]" aria-label="Testimonial 2" />
            <button className="w-3 h-3 rounded-full bg-[#3e3a38]" aria-label="Testimonial 3" />
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Our Design Process</h2>
            <p className="text-muted-foreground">A seamless journey from concept to completion.</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-12">
              {designProcess.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="md:flex items-start gap-8">
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-xl mb-4 md:mb-0">
                      {step.step}
                    </div>
                    <div className="md:pl-8">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-16 bg-accent/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">As Featured In</h2>
            <p className="text-muted-foreground">Recognized by leading publications in the design world</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {['Architectural Digest', 'Elle Decor', 'Dwell', 'AD Pro', 'Dezeen'].map((publication, index) => (
              <div key={index} className="text-muted-foreground font-medium">
                {publication}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container-custom text-center max-w-4xl">
          <h2 className="heading-lg mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">Let's create something exceptional together. Schedule your complimentary consultation today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-lg flex items-center gap-2">
              <Instagram className="h-6 w-6" />
              @cystsolutions
            </h2>
            <Button variant="ghost" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Follow Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img 
                  src={`https://source.unsplash.com/random/500x500/?interior,${item}`} 
                  alt={`Instagram post ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
