import { motion, AnimatePresence, useMotionValue } from "motion/react";
import {
  Droplets,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Home,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Waves,
  ArrowLeft,
  Clock,
  Shield,
  Zap,
  Target,
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronDown
} from "lucide-react";
import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-4" : "bg-white/10 backdrop-blur-md py-8 border-b border-white/10"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="relative p-1.5 bg-white rounded-full border-2 border-white/80 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo.webp"
              alt="Reyes Premium"
              className="h-10 md:h-12 w-auto object-contain rounded-full"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Services", "The Difference", "Gallery", "Our Process", "Portfolio"].map((item) => (
            <a
              key={item}
              href={currentPage === 'home' ? `#${item.toLowerCase().replace(" ", "-")}` : '/'}
              onClick={(e) => {
                if (item === "Gallery") {
                  e.preventDefault();
                  onNavigate('gallery');
                  return;
                }
                if (item === "Our Process") {
                  e.preventDefault();
                  onNavigate('process');
                  return;
                }
                if (currentPage !== 'home') {
                  e.preventDefault();
                  onNavigate('home');
                }
              }}
              className={`text-sm font-semibold tracking-wide transition-colors ${isScrolled ? "text-slate-600 hover:text-aqua" : "text-white/80 hover:text-white"}`}
            >
              {item}
            </a>
          ))}
          <button className="premium-button py-2 px-6 text-sm" onClick={() => onNavigate('contact')}>
            Get Started
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? "text-slate-950" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-950" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden pt-28 pb-8 px-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {["Services", "The Difference", "Gallery", "Our Process", "Portfolio"].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  href={item === "Gallery" || item === "Our Process" ? "#" : `#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-3xl font-display font-light text-white tracking-wide border-b border-white/10 pb-4"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (item === "Gallery") {
                      e.preventDefault();
                      onNavigate('gallery');
                    } else if (item === "Our Process") {
                      e.preventDefault();
                      onNavigate('process');
                    } else {
                      if (currentPage !== 'home') {
                        e.preventDefault();
                        onNavigate('home');
                        setTimeout(() => {
                          const el = document.getElementById(item.toLowerCase().replace(" ", "-"));
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 100;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }, 100);
                      } else {
                        const el = document.getElementById(item.toLowerCase().replace(" ", "-"));
                        if (el) {
                          e.preventDefault();
                          const y = el.getBoundingClientRect().top + window.scrollY - 100;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }
                    }
                  }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="premium-button w-full text-lg py-5 mt-4"
                onClick={() => { setIsMenuOpen(false); onNavigate('contact'); }}
              >
                Request Quote
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-12 space-y-8"
            >
              <div className="space-y-4">
                <a href="tel:1234567890" className="flex items-center gap-4 text-white/70 hover:text-aqua transition-colors text-lg">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>(123) 456-7890</span>
                </a>
                <a href="mailto:info@reyespremium.com" className="flex items-center gap-4 text-white/70 hover:text-aqua transition-colors text-lg">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@reyespremium.com</span>
                </a>
              </div>
              <div className="flex gap-4 pt-8 border-t border-white/10">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-aqua transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-aqua transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-aqua transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="relative h-[100svh] flex items-center overflow-hidden bg-deep-blue">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src="/images/layout/hero-clean.png"
          alt="Concrete Pressure Washing"
          className="w-full h-full object-cover opacity-80 scale-x-[-1]"
          referrerPolicy="no-referrer"
        />

        {/* Softening color integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/40 via-transparent to-deep-blue" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl md:bg-transparent bg-slate-900/40 md:p-0 p-8 pt-10 rounded-[2rem] md:backdrop-blur-none backdrop-blur-xl border md:border-transparent border-white/10 shadow-2xl md:shadow-none"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-aqua" />
            <span className="text-aqua font-bold tracking-widest uppercase text-xs">Smart Homeownership</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.05]">
            Revitalize Your <br />
            <span className="text-aqua">Property's</span> Pride.
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-normal leading-relaxed mb-10 max-w-xl">
            Professional exterior care that goes beyond a simple wash. We protect your investment, prevent permanent staining, and restore the vibrant look your home deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="premium-button flex items-center justify-center gap-2 group w-full sm:w-auto" onClick={() => onNavigate('contact')}>
              Refresh My Home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              className="premium-button-outline !text-white !border-white/30 hover:!bg-white/10 w-full sm:w-auto text-center"
              onClick={() => onNavigate('process')}
            >
              Our Process
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-7 h-12 rounded-full border-2 border-white/20 flex justify-center p-2 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-aqua rounded-full"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
};

const Services = ({ onSelectService }: { onSelectService: (id: string) => void }) => {
  const services = [
    {
      id: "home-revitalization",
      title: "Complete Home Exterior Revitalization",
      description: "A comprehensive soft-wash treatment that safely removes organic growth and pollutants from your home's siding, eaves, and trim.",
      icon: <Home className="w-6 h-6" />,
      image: "/images/services/house-washing-houston.webp"
    },
    {
      id: "driveway-refresh",
      title: "Driveway & Path Refresh",
      description: "Deep-cleansing for concrete and stone surfaces to lift oil, rust, and grime, leaving your entryways bright and welcoming.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/images/services/driveway-washing-houston.webp"
    },
    {
      id: "roof-preservation",
      title: "Roof Preservation & Soft-Wash",
      description: "Gentle chemical treatment to eliminate damaging moss and lichen, extending the life of your shingles and improving efficiency.",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "/images/services/roof-cleaning-houston.webp"
    },
    {
      id: "fence-restoration",
      title: "Fence & Deck Restoration",
      description: "Artisanal cleaning and sealing that brings weathered wood back to life while providing a durable barrier against the elements.",
      icon: <Waves className="w-6 h-6" />,
      image: "/images/services/fence-cleaning.webp"
    },
    {
      id: "commercial-striping",
      title: "Commercial Lot Striping & Safety",
      description: "Precision marking for commercial properties that ensures ADA compliance and creates a sharp, professional first impression.",
      icon: <Target className="w-6 h-6" />,
      image: "/images/services/parking-lot-striping-1.webp"
    }
  ];

  const [index, setIndex] = useState(0);
  const isDragging = useRef(false);
  const x = useMotionValue(0);

  // Constants for layout
  const CARD_WIDTH = 400;
  const GAP = 32;

  const handleDragStart = () => {
    isDragging.current = false;
  };

  const handleDrag = () => {
    isDragging.current = true;
  };

  const handleDragEnd = (_: any, info: any) => {
    const dragOffset = info.offset.x;
    const dragVelocity = info.velocity.x;

    if (dragOffset < -100 || dragVelocity < -500) {
      setIndex((prev) => Math.min(prev + 1, services.length - 1));
    } else if (dragOffset > 100 || dragVelocity > 500) {
      setIndex((prev) => Math.max(prev - 1, 0));
    }

    // Reset dragging flag after a short delay
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
  };

  return (
    <section id="services" className="section-padding bg-slate-950 relative overflow-hidden py-32">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aqua/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-blue/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-aqua font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Elite Treatments
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl text-white leading-tight"
            >
              Professional <br />
              <span className="text-aqua">Restoration</span> Services
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === idx ? "w-8 bg-aqua" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-4 text-white/30 text-sm font-medium">
              <span>Swipe to Explore</span>
              <div className="w-12 h-[2px] bg-white/10 relative overflow-hidden">
                <motion.div
                  animate={{ x: [-48, 48] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute inset-0 bg-aqua/40"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative h-[600px] flex items-center overflow-hidden">
        <motion.div
          drag="x"
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={{ x: `calc(50% - ${(index * (CARD_WIDTH + GAP)) + (CARD_WIDTH / 2)}px)` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ x }}
          className="flex gap-8 touch-none cursor-grab active:cursor-grabbing"
        >
          {services.map((service, idx) => {
            const isActive = index === idx;
            return (
              <motion.div
                key={idx}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ duration: 0.5 }}
                className="min-w-[320px] md:min-w-[400px] group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 flex flex-col h-[520px] shadow-2xl transition-colors"
                onClick={() => {
                  if (!isDragging.current) onSelectService(service.id);
                }}
              >
                <div className="relative h-[260px] rounded-[2rem] overflow-hidden mb-8">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-aqua/90 backdrop-blur-md text-white rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
                    {service.icon}
                  </div>
                </div>

                <div className="px-4 flex-1 flex flex-col">
                  <h3 className={`text-2xl font-bold mb-4 transition-colors ${isActive ? 'text-white group-hover:text-aqua' : 'text-white/60'}`}>
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-[15px] leading-relaxed mb-8 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mt-auto pb-4 flex items-center justify-between">
                    <span className={`font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors ${isActive ? 'text-aqua' : 'text-white/20'}`}>
                      Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${isActive ? 'border-white/10 text-white/20 group-hover:border-aqua/40 group-hover:text-aqua' : 'border-white/5 text-white/10'}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const ReyesDifference = () => {
  const points = [
    {
      title: "Attention to Detail",
      desc: "We don't just 'wash'—we revitalize. Our team treats every corner of your property as if it were our own, ensuring no spot is missed.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Professional-Grade Equipment",
      desc: "Utilizing the latest in soft-wash and high-flow technology to deliver superior results without the risk of surface damage.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Property Protection",
      desc: "Your landscaping and delicate surfaces are our priority. We use eco-friendly solutions and protective measures for total peace of mind.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  return (
    <section id="the-difference" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 ripple-texture opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">The <span className="text-aqua">Reyes</span> Difference.</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Choosing a professional service means choosing reliability and expertise. We've built our reputation on a foundation of trust and uncompromising quality.
            </p>
            <div className="space-y-10">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -150, scale: 0.3, filter: 'blur(15px)' }}
                  whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    delay: idx * 0.1
                  }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:shadow-[0_10px_40px_rgba(0,163,224,0.2)] flex items-center justify-center text-aqua flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 border border-slate-50">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-aqua transition-colors duration-300">{point.title}</h4>
                    <p className="text-slate-500 text-[15px] leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] md:h-[600px]">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-[85%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <img
                src="/images/Projects/house-wash-concrete-cleaning-spring-tx.jpg"
                alt="Premium House Wash Results"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-aqua/5 mix-blend-overlay" />
            </motion.div>

            {/* Layered/Offset Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-[60%] aspect-square rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-white"
            >
              <img
                src="/images/Projects/house-and-concrete-baytown (2).jpg"
                alt="Detailed Surface Cleaning"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-aqua/10 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-aqua/5 rounded-full blur-2xl opacity-30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicePage = ({ serviceId, onBack }: { serviceId: string, onBack: () => void }) => {
  const serviceData: Record<string, any> = {
    "home-revitalization": {
      title: "Complete Home Exterior Revitalization",
      subtitle: "Safe & Effective Siding Care",
      heroImage: "/images/services/house-washing-houston.webp",
      description: "Your home's exterior is constantly under attack from the elements. Our revitalization service uses a specialized soft-wash process to gently remove mold, mildew, and pollutants without the risk of high-pressure damage.",
      benefits: [
        { title: "Surface Safety", desc: "Low-pressure techniques protect your siding and seals." },
        { title: "Long-Lasting Clean", desc: "Our solutions kill organic growth at the root." },
        { title: "Enhanced Value", desc: "Instantly boost your home's curb appeal and market value." }
      ]
    },
    "driveway-refresh": {
      title: "Driveway & Path Refresh",
      subtitle: "Restoring Your Property's Entryways",
      heroImage: "/images/services/driveway-washing-houston.webp",
      description: "Concrete and stone surfaces are porous and trap dirt, oil, and grime over time. Our deep-cleansing refresh restores the bright, clean look of your driveways and walkways, making your entire property feel new again.",
      benefits: [
        { title: "Stain Removal", desc: "Lifting oil, rust, and tire marks with professional chemistry." },
        { title: "Slip Resistance", desc: "Removing algae and moss makes your paths safer for walking." },
        { title: "Professional Finish", desc: "Uniform cleaning without the 'tiger stripes' of amateur pressure washing." }
      ]
    }
  };

  const service = serviceData[serviceId] || serviceData["home-revitalization"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-32 pb-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-aqua transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold tracking-widest uppercase">Back to Services</span>
        </button>

        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-aqua font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            {service.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl mb-8 max-w-3xl leading-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] aspect-video mb-20"
          >
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.benefits.map((benefit: any, idx: number) => (
            <div key={idx} className="p-10 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-aqua/10 rounded-lg flex items-center justify-center text-aqua mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  const projects = [
    { title: "Residential House Wash", location: "Crosby, TX", img: "/images/Projects/house-wash-baytown (1).jpg" },
    { title: "Roof & Concrete Cleaning", location: "Baytown, TX", img: "/images/Projects/roof-house-driveway-cleaning-baytown-tx.jpg" },
    { title: "Driveway Revitalization", location: "Spring, TX", img: "/images/Projects/house-wash-concrete-cleaning-spring-tx.webp" },
    { title: "Professional Roof Washing", location: "Pearland, TX", img: "/images/Projects/roof-washing-pearland-1.jpg" },
    { title: "Concrete Patio Cleaning", location: "League City, TX", img: "/images/Projects/concrete-patio-cleaning-baytown-tx.webp" },
    { title: "Siding Rejuvenation", location: "Crosby, TX", img: "/images/Projects/siding-washing-baytown-1.jpg" },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Recent <span className="text-aqua">Projects</span></h2>
          <p className="text-slate-500 font-normal">Real results for real home owners in the Greater Houston area.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <p className="text-aqua font-bold text-xs uppercase tracking-widest mb-2">{project.location}</p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurProcess = ({ onBack }: { onBack: () => void }) => {
  const steps = [
    {
      id: "01",
      phase: "Precision Prep",
      title: "Surface Protection & Inspection",
      description: "Before a single drop of water is sprayed, we perform a comprehensive baseline inspection. This includes identifying specific surface vulnerabilities, securing electrical outlets, and ensuring that all landscaping, pets, and children are safely accounted for. We pride ourselves on property protection above all else.",
      items: ["Deliberate Area Protection", "Landscaping Shielding", "Electrical Safety Checks", "Material Analysis"],
      icon: <Shield className="w-8 h-8 text-aqua" />
    },
    {
      id: "02",
      phase: "Mastercraft Execution",
      title: "Advanced Cleaning Technology",
      description: "We deploy industry-specific methods tailored precisely to your surfaces. Whether it's our professional Soft Wash system for delicate siding and roofs or high-pressure surface cleaning for stubborn driveway stains, we use the right balance of pressure and specialized cleaning compounds to restore your property safely and effectively.",
      items: ["Tailored Pressure Management", "Soft-Wash Technology", "Specialized Stain Scouring", "Environmentally Conscious Products"],
      icon: <Zap className="w-8 h-8 text-aqua" />
    },
    {
      id: "03",
      phase: "Elite Restoration",
      title: "Thorough Rinse & Final Detail",
      description: "Our work isn't done until the entire property is flawless. We perform a deep rinse of all surfaces and surroundings, removing any traces of grime or cleaning agents. A final property inspection ensures that the results meet our elite standards before we declare the job complete.",
      items: ["Surrounding Area Rinsing", "Safety Perimeter Check", "Final Results Inspection", "Furniture Replacement"],
      icon: <CheckCircle2 className="w-8 h-8 text-aqua" />
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-500 hover:text-aqua transition-colors mb-8 text-sm font-semibold tracking-wider uppercase"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl mb-8">The <span className="text-aqua">Science</span> of Clean</h1>
          <p className="text-slate-500 text-xl leading-relaxed">
            Professional exterior care is more than just water and pressure. It's a calculated, three-pillar process designed to protect your property while delivering breathtaking results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-24">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-display font-bold text-slate-100">{step.id}</span>
                  <div className="w-12 h-px bg-aqua/30" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-aqua">{step.phase}</span>
                </div>
                <h2 className="text-4xl font-display font-bold text-slate-900 leading-tight">{step.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed">{step.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {step.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-aqua" />
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="absolute -inset-4 bg-aqua/5 rounded-3xl -rotate-2" />
                <div className="relative p-8 bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-aqua/10 flex items-center justify-center mb-8">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Pillar {step.id}</p>
                    <p className="text-xl font-display font-bold text-slate-900">Guaranteed Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-slate-950 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,255,242,0.1),transparent)]" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl text-white mb-6 leading-tight">Ready for a Property <span className="text-aqua">Transformation?</span></h2>
              <p className="text-white/60 text-lg">Experience the Reyes difference with our precision-engineered exterior care.</p>
            </div>
            <button className="premium-button py-6 px-12 text-lg min-w-[240px]" onClick={() => onBack()}>
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden select-none cursor-ew-resize group shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100"
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute top-4 right-4 md:top-6 md:right-6 px-4 py-2 bg-aqua/90 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg z-10 pointer-events-none border border-white/20">After</div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute top-4 left-4 md:top-6 md:left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg z-10 pointer-events-none border border-white/10">Before</div>
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-[4px] bg-white cursor-ew-resize pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center justify-center pointer-events-auto transition-transform group-hover:scale-110 active:scale-95 border-2 border-slate-100">
          <div className="flex -space-x-1">
            <ChevronDown className="w-5 h-5 text-slate-400 rotate-90" />
            <ChevronDown className="w-5 h-5 text-slate-400 -rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      title: "Driveway Restoration",
      location: "Baytown, TX",
      type: "pair",
      before: "/images/Projects/house-washing-driveway-baytown/house-dribeway-baytown-1.webp",
      after: "/images/Projects/house-washing-driveway-baytown/house-dribeway-baytown-2.webp"
    },
    {
      title: "Concrete Striping & Cleaning",
      location: "Crosby, TX",
      type: "pair",
      before: "/images/Projects/concrete-cleaning-crosby-high-school/0-IMG_4586.webp",
      after: "/images/Projects/concrete-cleaning-crosby-high-school/1-IMG_4584.webp"
    },
    {
      title: "Roof Algae Removal",
      location: "Pearland, TX",
      type: "single",
      image: "/images/Projects/roof-washing-pearland-1.jpg",
      label: "Before & After Split"
    },
    {
      title: "Siding Revitalization",
      location: "Baytown, TX",
      type: "single",
      image: "/images/Projects/siding-washing-baytown-1.jpg",
      label: "Before & After Split"
    },
    {
      title: "Commercial Storage Cleaning",
      location: "Houston, TX",
      type: "single",
      image: "/images/Projects/storage-facility-cleaning-1.jpg",
      label: "Before & After Split"
    },
    {
      title: "Stone Wall Cleaning",
      location: "Mont Belvieu, TX",
      type: "single",
      image: "/images/Projects/concrete-cleaning-mont-belvieu-2.jpg",
      label: "Before & After Split"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-slate-500 hover:text-aqua transition-colors mb-6 text-sm font-semibold tracking-wider uppercase"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </button>
            <h1 className="text-5xl md:text-6xl mb-6">Results That <span className="text-aqua">Speak</span></h1>
            <p className="text-slate-500 text-lg">Browse our latest projects and see the massive difference professional exterior care makes for your property.</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
            <span className="text-aqua">Professional Results</span>
            <span className="w-12 h-px bg-slate-200" />
            <span className="text-slate-400">Guaranteed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500">{item.location}</p>
                </div>
                {item.type === 'single' && (
                  <span className="px-3 py-1 bg-aqua/10 text-aqua text-xs font-bold tracking-widest uppercase rounded-full">
                    {item.label}
                  </span>
                )}
              </div>

              <div className="gallery-comparison-grid grid grid-cols-1 gap-8">
                {item.type === 'pair' ? (
                  <div className="relative group w-full">
                    <BeforeAfterSlider beforeImage={item.before!} afterImage={item.after!} />
                  </div>
                ) : (
                  <div className="md:col-span-2 relative group">
                    <div className="p-3 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
                      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-zoom-in" onClick={() => setSelectedImage(item.image)}>
                        <img src={item.image} className="w-full h-full object-cover" alt="Project Result" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                          <p className="text-sm font-bold tracking-widest uppercase mb-1">Detailed View</p>
                          <p className="text-white/80">Click to expand to full screen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-8 right-8 text-white hover:text-aqua transition-colors"
            >
              <X className="w-10 h-10" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain border-4 border-white/10"
              alt="Project Fullscreen"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Portfolio = () => {
  const images = [
    "/images/Projects/concrete-cleaning-baytown-tx.webp",
    "/images/Projects/house-wash-concrete-cleaning-spring-tx.webp",
    "/images/Projects/roof-washing-baytown.webp",
    "/images/Projects/concrete-patio-cleaning-baytown-tx.webp"
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our <span className="text-aqua">Work</span></h2>
          <p className="text-slate-500 font-normal">A glimpse into the properties we've had the pleasure of revitalizing.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Portfolio ${idx}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsMarquee = () => {
  const testimonials = [
    { name: "Sarah M.", text: "Absolutely blown away by the attention to detail. Our driveway and siding look brand new.", rating: 5 },
    { name: "John D.", text: "Professional, punctual, and delivered exactly what they promised. The best exterior cleaning service in Houston.", rating: 5 },
    { name: "Emily R.", text: "The soft wash completely removed the black streaks on our roof without any damage. Highly recommend!", rating: 5 },
    { name: "Michael T.", text: "Transformed our weathered deck back to life. It's ready for summer barbecues again.", rating: 5 },
    { name: "Jessica L.", text: "Their property protection guarantees gave me peace of mind. Not a single plant was harmed.", rating: 5 },
    { name: "David W.", text: "Night and day difference on our concrete patio. The team is top-notch and incredibly thorough.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-fluid-gradient opacity-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-12 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl text-white mb-4">Client <span className="text-aqua">Acclaim</span></h2>
        <p className="text-white/50 text-lg">Don't just take our word for it.</p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap py-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="inline-block w-[350px] md:w-[450px] mx-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl whitespace-normal flex-shrink-0 transition-transform hover:-translate-y-2">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-aqua" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-white font-bold font-display tracking-wide">- {t.name}</p>
            </div>
          ))}
        </div>

        {/* Gradient fades for the edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  return (
    <footer className="bg-slate-950 text-white section-padding pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="flex items-center mb-8">
              <div className="p-1.5 bg-white rounded-full border-2 border-white/20">
                <img
                  src="/logo.webp"
                  alt="Reyes Premium"
                  className="h-10 w-auto object-contain rounded-full"
                />
              </div>
            </div>
            <p className="text-white/50 font-normal leading-relaxed mb-8">
              Professional exterior care for homeowners who value quality and property longevity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-aqua transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-aqua transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-aqua">Services</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">House Washing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Surface Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roof Preservation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deck Restoration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-aqua">Company</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }}>About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }}>The Difference</a></li>
              <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('process'); }}>Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('gallery'); }}>Before &amp; After Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-aqua">Contact</h4>
            <p className="text-white/60 text-sm mb-6 font-normal">Ready to refresh your home? Let's talk.</p>
            <div className="space-y-3">
              <p className="text-xl font-display font-bold">800-REYES-CARE</p>
              <p className="text-white/40 text-sm">hello@reyespremium.com</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs tracking-widest uppercase">
          <p>© 2024 Reyes Premium Exterior Care. All Rights Reserved.</p>
          <p>Excellence in Every Drop.</p>
        </div>
      </div>
    </footer>
  );
};

const ContactPage = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Complete Home Exterior Revitalization",
    "Driveway & Path Refresh",
    "Roof Preservation & Soft-Wash",
    "Fence & Deck Restoration",
    "Commercial Lot Striping & Safety",
    "Other / Not Sure Yet"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Hero Banner */}
      <div className="relative mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-500 hover:text-aqua transition-colors mb-10 text-sm font-semibold tracking-wider uppercase"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-aqua font-bold tracking-[0.2em] uppercase text-xs mb-4">Free Estimate</span>
            <h1 className="text-5xl md:text-7xl mb-6">
              Let's <span className="text-aqua">Transform</span> Your Property
            </h1>
            <p className="text-slate-500 text-xl leading-relaxed">
              Fill out the form below and our team will reach out within 24 hours with a tailored estimate.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-950 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,242,0.08),transparent)]" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">Contact Details</h3>
                <p className="text-white/50 text-sm mb-8">Reach out directly or use the form.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-aqua/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-aqua" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Phone</p>
                      <p className="text-white font-semibold">(832) 409-5633</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-aqua/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-aqua" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Email</p>
                      <p className="text-white font-semibold">hello@reyespw.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-aqua/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-aqua" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Service Area</p>
                      <p className="text-white font-semibold">Greater Houston, TX</p>
                      <p className="text-white/50 text-sm">Baytown, Pearland, Crosby &amp; More</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Response Time</p>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-white/80 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "5-Star Rated", icon: <Sparkles className="w-5 h-5" /> },
                { label: "Insured", icon: <Shield className="w-5 h-5" /> },
                { label: "Fast Response", icon: <Zap className="w-5 h-5" /> }
              ].map(badge => (
                <div key={badge.label} className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-aqua/10 flex items-center justify-center text-aqua mx-auto mb-2">{badge.icon}</div>
                  <p className="text-xs font-bold text-slate-700">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm p-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-aqua/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-aqua" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Thanks, <strong>{formData.fullName.split(' ')[0]}</strong>! We'll be in touch within 24 hours to discuss your free estimate.
                </p>
                <button onClick={onBack} className="premium-button">
                  Back to Home
                </button>
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-2">Request Your Free Estimate</h2>
                <p className="text-slate-400 text-sm mb-8">All fields required. No spam, ever.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-bold tracking-widest uppercase text-slate-500">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua/40 focus:border-aqua transition-all"
                    />
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-bold tracking-widest uppercase text-slate-500">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(832) 555-0100"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua/40 focus:border-aqua transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-slate-500">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua/40 focus:border-aqua transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-xs font-bold tracking-widest uppercase text-slate-500">Service Desired</label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-aqua/40 focus:border-aqua transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-xs font-bold tracking-widest uppercase text-slate-500">Property Address</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      placeholder="123 Main St, Baytown, TX 77520"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aqua/40 focus:border-aqua transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="premium-button w-full py-5 text-base flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send My Request
                      </>
                    )}
                  </button>

                  <p className="text-center text-slate-400 text-xs">By submitting, you agree to be contacted about your request. No spam.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <button
        className="w-16 h-16 bg-aqua text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,163,224,0.4)] relative group transition-transform active:scale-95"
        onClick={() => window.location.href = "tel:1234567890"}
        aria-label="Call Now"
      >
        <span className="absolute inset-0 bg-aqua rounded-full animate-ping opacity-40 duration-1000"></span>
        <Phone className="w-7 h-7 relative z-10" />
      </button>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleSelectService = (id: string) => {
    setSelectedService(id);
    setCurrentPage('service-detail');
  };

  const BlastLoader = ({ onComplete }: { onComplete: () => void }) => {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed inset-0 z-[100] bg-slate-950 overflow-hidden flex items-center justify-center"
      >
        {/* Grimy Glass Background */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 2.5,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.8
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/layout/grimy-glass.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* The "Blast" revealed content */}
        <motion.div
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ clipPath: 'circle(150% at 50% 50%)' }}
          transition={{
            duration: 2.5,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.8
          }}
          className="absolute inset-0 z-10"
          onAnimationComplete={onComplete}
        >
          {/* We show a blurred version of the hero or just a clean 'reveal' layer */}
          <div className="absolute inset-0 bg-aqua/20 backdrop-blur-3xl" />

          {/* Animated Water Streaks / Mist during blast */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.5] }}
            transition={{ duration: 2, times: [0, 0.2, 1], delay: 0.8 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'url("/images/layout/water-texture.png")',
              backgroundSize: 'cover'
            }}
          />
        </motion.div>

        {/* Central Nozzle Glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="relative z-20 w-32 h-32 bg-aqua rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-30 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Droplets className="w-12 h-12 text-aqua animate-pulse" />
            <h2 className="text-4xl md:text-6xl text-white font-display font-light tracking-widest uppercase">
              Reyes <span className="font-bold">Premium</span>
            </h2>
          </div>
          <p className="text-white/40 tracking-[0.3em] uppercase text-xs">Initializing Revitalization...</p>
        </motion.div>
      </motion.div>
    );
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedService(null);
  };

  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="bg-white">
      <AnimatePresence>
        {showIntro && (
          <BlastLoader onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onNavigate={setCurrentPage} />
            <ReyesDifference />
            <Services onSelectService={handleSelectService} />
            <ProjectGallery />
            <Portfolio />
            <TestimonialsMarquee />
          </motion.div>
        ) : currentPage === 'gallery' ? (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <GalleryPage onBack={handleBack} />
          </motion.div>
        ) : currentPage === 'process' ? (
          <motion.div
            key="process"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <OurProcess onBack={handleBack} />
          </motion.div>
        ) : currentPage === 'contact' ? (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ContactPage onBack={handleBack} />
          </motion.div>
        ) : (
          <motion.div
            key="service-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ServicePage
              serviceId={selectedService || ""}
              onBack={handleBack}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <MobileCTA />
      <Footer onNavigate={setCurrentPage} />
    </main>
  );
}
