import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { getServiceBySlug, services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getServiceImages } from "@/config/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");
  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);
  
  useEffect(() => {
    if (!service) {
      console.error(`Service with slug ${slug} not found`);
    }
  }, [service, slug]);

  if (!service) {
    return (
      <Layout>
        <div className="container-custom py-40">
          <h1 className="heading-lg mb-6">Service not found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The service you are looking for does not exist.
          </p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              Residential Design
            </span>
            <h1 className="heading-xl mb-6 text-foreground">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#our-process">
                  Learn How It Works
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Comprehensive Residential Design Solutions</h2>
            <p className="text-lg text-muted-foreground">
              We transform houses into homes with thoughtful design that combines beauty, functionality, and personal expression.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.split(':')[0]}</h3>
                <p className="text-muted-foreground">{feature.split(':')[1] || feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Our {service.title} Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getServiceImages(service.slug).gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${service.title} project ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-lg font-medium mb-1">{service.title} Project {index + 1}</h3>
                    <p className="text-white/80 text-sm">View project details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to={`/portfolio?service=${service.slug}`}>
                View All {service.title} Projects
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="our-process" className="py-16 bg-muted/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Our Design Process</h2>
            <p className="text-lg text-muted-foreground">
              A seamless journey from concept to completion, tailored to your vision and lifestyle.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-transparent -translate-x-1/2" />
            
            {[
              { 
                title: 'Discovery & Consultation', 
                description: 'We start by understanding your vision, needs, and lifestyle to create a design that truly reflects you.' 
              },
              { 
                title: 'Concept Development', 
                description: 'Our designers create initial concepts and mood boards to bring your vision to life.' 
              },
              { 
                title: 'Design Presentation', 
                description: 'We present our design concepts and make adjustments based on your feedback.' 
              },
              { 
                title: 'Implementation', 
                description: 'Our team manages every detail to ensure flawless execution of the design.' 
              }
            ].map((step, i) => (
              <div key={i} className={`relative mb-12 md:mb-20 ${i % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                <div className={`bg-background p-6 rounded-xl shadow-sm relative z-10 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="absolute top-6 -left-2 w-4 h-4 rounded-full bg-primary" />
                  <div className="text-primary font-medium mb-2">Step {i + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 max-w-2xl mx-auto">Ready to Transform Your Home?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Schedule a free consultation with our design experts and take the first step towards your dream home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 hover:text-white">
              Call Us: +254 719 400 499
            </Button>
          </div>
        </div>
      </section>
      
      {/* Other Services */}
      <section className="py-16 bg-accent/10">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Explore Our Other Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((otherService, index) => (
              <motion.div
                key={otherService.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={otherService.imageUrl}
                    alt={otherService.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{otherService.title}</h3>
                  <p className="text-muted-foreground mb-4">{otherService.shortDescription}</p>
                  <Link 
                    to={`/services/${otherService.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More
                    <svg 
                      className="ml-2 h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 max-w-2xl mx-auto">Ready to Transform Your Space?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team of expert designers is ready to bring your vision to life
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
