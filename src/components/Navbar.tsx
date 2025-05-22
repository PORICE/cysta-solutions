
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Set mounted state for animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    closeMenu();
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center h-12" onClick={closeMenu}>
          <img 
            src="/images/logo.svg" 
            alt="CYSTA SOLUTIONS LIMITED" 
            className="h-full w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-khaki font-semibold"
                  : "text-foreground/70 hover:text-khaki"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div 
            className="relative" 
            ref={servicesRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/services') || isServicesOpen
                  ? "text-khaki font-semibold"
                  : "text-foreground/70 hover:text-khaki"
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div 
                className="absolute left-0 mt-1 w-64 rounded-lg bg-background shadow-lg ring-1 ring-foreground/10 py-1 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-khaki transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
                <div className="border-t border-foreground/10 my-1"></div>
                <Link
                  to="/services"
                  className="block px-4 py-2 text-sm text-khaki font-medium hover:bg-foreground/5 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            )}
          </div>
          
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-khaki font-semibold"
                  : "text-foreground/70 hover:text-khaki"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <ThemeToggle />
          <Button size="sm" className="ml-4 bg-khaki text-smoky_black hover:bg-khaki/90" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            {isOpen ? (
              <button
                onClick={toggleMenu}
                className="p-2 text-foreground relative z-50"
                aria-label="Close menu"
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                className="p-2 text-foreground relative z-50"
                aria-label="Open menu"
                type="button"
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen Overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={cn(
          "fixed inset-0 h-screen w-full bg-background z-40 flex flex-col transition-all duration-300 ease-in-out transform md:hidden overflow-y-auto overscroll-contain touch-pan-y",
          isMounted 
            ? isOpen 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-full opacity-0" 
            : "opacity-0 -translate-y-full",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header with logo */}
        <div className="flex justify-center items-center p-4 border-b border-border">
          <img 
            src="/images/logo.svg" 
            alt="CYSTA SOLUTIONS LIMITED" 
            className="h-10 w-auto"
          />
        </div>
        
        {/* Menu Content */}
        <div className="flex-1 p-6 overflow-y-auto">
        <nav className="flex flex-col gap-2">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`py-3 text-lg font-medium border-b border-border ${
                isActive(link.path)
                  ? "text-khaki font-semibold"
                  : "text-foreground/70 hover:text-khaki"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Services Dropdown */}
          <div className="border-b border-border">
            <button
              onClick={toggleMobileServices}
              className={`w-full text-left py-3 text-lg font-medium flex justify-between items-center ${
                isActive('/services') || mobileServicesOpen
                  ? 'text-khaki font-semibold'
                  : 'text-foreground/70 hover:text-khaki'
              }`}
            >
              <span>Services</span>
              <ChevronDown 
                className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {mobileServicesOpen && (
              <div className="pl-4 pb-2 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="block py-2 text-base text-foreground/80 hover:text-khaki transition-colors"
                    onClick={closeMenu}
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="block py-2 text-base text-khaki font-medium hover:opacity-80 transition-colors"
                  onClick={closeMenu}
                >
                  View All Services
                </Link>
              </div>
            )}
          </div>
          
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`py-3 text-lg font-medium border-b border-border ${
                isActive(link.path)
                  ? "text-khaki font-semibold"
                  : "text-foreground/70 hover:text-khaki"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-6">
            <Button className="w-full bg-khaki text-smoky_black hover:bg-khaki/90" size="lg" asChild>
              <Link to="/contact" onClick={closeMenu}>Get a Quote</Link>
            </Button>
          </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
