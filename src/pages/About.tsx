import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";

const ArrowConnector = ({ isEven }: { isEven: boolean }) => (
  <div className={`absolute top-6 ${isEven ? 'right-0 md:right-1/2 md:mr-10' : 'left-0 md:left-1/2 md:ml-10'} w-6 h-6 flex items-center justify-center z-10`}>
    <svg 
      className={`w-5 h-5 text-gray-400 ${isEven ? 'rotate-180' : ''}`} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
);

const About = () => {
  const teamMembers = [
    {
      name: "Cynthia Luna",
      role: "Lead Designer & Co-Founder",
      bio: "Recognized as one of the top expo stand designers in East Africa, Cynthia transforms ideas into immersive physical spaces, blending innovation with elegance at every turn.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop"
    },
    {
      name: "Stacy Luna",
      role: "Operations Director & Co-Founder",
      bio: "With extensive experience in office administration, Stacy ensures CYSTA's day-to-day operations are seamless, professional, and always client-focused.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop"
    },
    {
      name: "Bennie Wambua",
      role: "Chief Contractor & Project Manager",
      bio: "With precision, an engineering mindset, and strong on-site leadership, Bennie ensures every vision is delivered exactly as imagined, and often better.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1370&auto=format&fit=crop"
    }
  ];

  const values = [
    {
      title: "Our Mission",
      description: "To craft unforgettable spaces and installations — from exhibition stands to custom interiors — that captivate, inspire, and function flawlessly."
    },
    {
      title: "Our Vision",
      description: "To be the leading force in innovative design solutions across East Africa, setting new standards in creativity, quality, and client satisfaction."
    },
    {
      title: "Our Approach",
      description: "We combine cutting-edge design with practical functionality, ensuring every project delivers both aesthetic appeal and real-world usability."
    },
    {
      title: "Our Promise",
      description: "To deliver exceptional quality, on-time project completion, and personalized service that exceeds our clients' expectations."
    }
  ];

  const [activeYear, setActiveYear] = useState<string | null>(null);

  const toggleYear = (year: string) => {
    setActiveYear(activeYear === year ? null : year);
  };

  const timeline = [
    {
      year: "2010",
      event: "CYSTA Solutions Founded",
      description: "Cynthia and Stacy Luna established CYSTA Solutions Limited, combining their expertise in design and operations to create a premier exhibition and interior design firm in East Africa.",
      icon: "🏗️",
      highlight: "Founding Vision"
    },
    {
      year: "2013",
      event: "First Major Exhibition Project",
      description: "Successfully delivered our first large-scale exhibition stand at the Nairobi International Trade Fair, earning industry recognition for innovative design and execution.",
      icon: "🏆",
      highlight: "Industry Recognition"
    },
    {
      year: "2015",
      event: "Custom Design Solutions Launch",
      description: "Expanded services to include bespoke furniture and interior design solutions, allowing us to offer comprehensive design services under one roof.",
      icon: "✨",
      highlight: "Service Expansion"
    },
    {
      year: "2018",
      event: "Regional Expansion",
      description: "Established partnerships across East Africa, completing projects in multiple countries, marking our growth into a regional design powerhouse.",
      icon: "🌍",
      highlight: "Market Growth"
    },
    {
      year: "2021",
      event: "Award-Winning Designs",
      description: "Received multiple industry awards for innovative exhibition stand designs and sustainable interior solutions, solidifying our reputation as industry leaders.",
      icon: "🏅",
      highlight: "Design Excellence"
    },
    {
      year: "2023",
      event: "Sector Leadership",
      description: "Became a recognized leader in the exhibition and interior design sector, serving a diverse clientele ranging from startups to multinational corporations across various industries.",
      icon: "🚀",
      highlight: "Industry Leadership"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-40 bg-primary/5 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-2/3 h-full z-0 opacity-30"
        >
          <svg 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full"
          >
            <path 
              fill="currentColor" 
              className="text-primary/30"
              d="M44.7,-76.4C58.9,-69.7,71.8,-59.2,79.6,-45.7C87.4,-32.3,90,-15.8,88.8,-0.2C87.6,15.5,82.5,30.7,74.2,44.4C65.9,58,54.3,70.2,40.3,77.7C26.3,85.3,9.9,88.1,-6.7,87.2C-23.2,86.3,-39.9,81.5,-53.6,72.3C-67.3,63.1,-78,49.3,-82.6,34.3C-87.3,19.2,-86,2.9,-81.2,-11.4C-76.5,-25.7,-68.2,-38,-57.6,-45.9C-47,-53.8,-33.9,-57.5,-21.6,-65C-9.3,-72.6,2.2,-84,15.8,-85.8C29.5,-87.6,59,-90,66.5,-82C74,-73.9,59.5,-56.7,44.7,-76.4Z" 
              transform="translate(100 100)" 
            />
          </svg>
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="heading-xl mb-6"
            >
              About <span className="text-primary">CYSTA</span> Solutions Ltd
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl mb-4 text-foreground/80"
            >
              Where Vision Meets Structure
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-muted-foreground"
            >
              Built on Vision. Driven by Design. Grounded in Family.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="heading-lg mb-6"
              >
                <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-4 text-lg"
                >
                  <p>
                    CYSTA Solutions Limited was born from a shared dream between two sisters — <strong>Cynthia Luna</strong> and <strong>Stacy Luna</strong> — to redefine the world of exhibition and interior design. The name <strong>CYSTA</strong> is a fusion of their names, but more deeply, it reflects the unbreakable bond and shared passion that brought this venture to life.
                  </p>
                  <p>
                    Before launching CYSTA, the sisters honed their craft under the banner of their family-run creative house, <strong>Luna Creatives</strong>. After years of delivering exceptional work across Kenya and East Africa, they saw a new opportunity — to create a company that could push boundaries, merge beauty with utility, and offer clients a personalized experience backed by proven expertise.
                  </p>
                  <p>
                    <strong>Cynthia Luna</strong>, now CYSTA's <strong>Lead Designer</strong>, is widely recognized as one of the top expo stand designers in East Africa. Her ability to transform ideas into immersive physical spaces is unmatched, blending innovation with elegance at every turn.
                  </p>
                  <p>
                    <strong>Stacy Luna</strong>, the <strong>Operations Director</strong>, brings a wealth of experience from her tenure in office administration across major firms. Her strategic leadership ensures that CYSTA's day-to-day execution is seamless, professional, and always client-focused.
                  </p>
                  <p>
                    Completing the leadership team is <strong>Bennie Wambua</strong>, <strong>Chief Contractor and Project Manager</strong>, whose precision, engineering mindset, and on-site leadership ensure that every vision is delivered — exactly as imagined, and often better.
                  </p>
                </motion.div>
              </motion.h2>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Lumina Studio team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-1/2 border-4 border-primary/20 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="heading-lg mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              The principles that guide our design approach and client relationships
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/80 p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="heading-lg mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              The talented professionals who bring our designs to life
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-5 mx-auto w-48 h-48">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/30 dark:to-gray-900 py-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold text-primary dark:text-primary-300 mb-3 px-4 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
              Milestones That Shaped Us
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto px-4">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-transparent -translate-x-1/2 -z-10"></div>
            <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 z-10"></div>
            
            <div className="relative space-y-12">
              {/* Vertical line connector */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-transparent -translate-x-1/2 -z-10"></div>
              {timeline.map((item, index) => {
                const isActive = activeYear === item.year;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative group ${isEven ? 'pr-0 md:pr-1/2' : 'pl-0 md:pl-1/2'}`}
                  >
                    {/* Arrow connector */}
                    {index > 0 && <ArrowConnector isEven={isEven} />}
                    
                    {/* Timeline dot */}
                    <div className="absolute top-6 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full bg-white dark:bg-gray-800 border-4 border-primary flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'scale-150 bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                    </div>

                    {/* Card */}
                    <div 
                      className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700
                        ${isEven ? 'md:pr-14 md:mr-8' : 'md:pl-14 md:ml-8'} 
                        ${isActive ? 'scale-[1.02] z-10' : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                      onClick={() => toggleYear(item.year)}
                      onKeyDown={(e) => e.key === 'Enter' && toggleYear(item.year)}
                      role="button"
                      tabIndex={0}
                    >
                      {/* Decorative accent */}
                      <div className={`absolute top-0 w-1 h-full ${isEven ? 'right-0' : 'left-0'} bg-primary`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${isActive ? 'bg-primary/10 text-primary' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'} transition-colors duration-300`}>
                            {item.icon}
                          </span>
                          <div>
                            <span className="text-sm font-medium text-primary dark:text-primary-300">{item.highlight}</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.event}</h3>
                          </div>
                        </div>
                        
                        <motion.div 
                          className="overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: isActive ? 'auto' : 0, 
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? '1rem' : 0
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-300">
                              {item.description}
                            </p>
                            <button 
                              className="mt-4 text-sm font-medium text-primary dark:text-primary-300 hover:underline focus:outline-none flex items-center gap-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleYear(item.year);
                              }}
                            >
                              {isActive ? 'Show less' : 'Read more'}
                              <svg className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                        
                        {!isActive && (
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-primary dark:text-primary-300">
                              {item.year}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Click to {isActive ? 'collapse' : 'expand'}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
