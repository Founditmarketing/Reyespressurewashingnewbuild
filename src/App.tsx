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
  ChevronDown,
  Maximize2
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
          {["Services", "The Difference", "Our Work", "Our Process"].map((item) => (
            <a
              key={item}
              href={currentPage === 'home' ? `#${item.toLowerCase().replace(" ", "-")}` : '/'}
              onClick={(e) => {
                if (item === "Our Work") {
                  e.preventDefault();
                  onNavigate('gallery');
                  return;
                }
                if (item === "The Difference") {
                  e.preventDefault();
                  onNavigate('difference-page');
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
              {["Services", "The Difference", "Our Work", "Our Process"].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  href={item === "Our Work" || item === "Our Process" ? "#" : `#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-3xl font-display font-light text-white tracking-wide border-b border-white/10 pb-4"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (item === "Our Work") {
                      e.preventDefault();
                      onNavigate('gallery');
                    } else if (item === "The Difference") {
                      e.preventDefault();
                      onNavigate('difference-page');
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

  const infiniteServices = [...services, ...services, ...services];
  const [index, setIndex] = useState(services.length + 2); // Start in the middle set
  const [isTeleporting, setIsTeleporting] = useState(false);
  const isDragging = useRef(false);
  const x = useMotionValue(0);

  // Constants for layout
  const CARD_WIDTH = 400;
  const GAP = 32;

  // Handle seamless looping
  useEffect(() => {
    // If we reach the end of the third set or start of the first set, jump back to middle set
    if (index >= services.length * 2) {
      const timer = setTimeout(() => {
        setIsTeleporting(true);
        setIndex(index - services.length);
        setTimeout(() => setIsTeleporting(false), 50);
      }, 500);
      return () => clearTimeout(timer);
    } else if (index < services.length) {
      const timer = setTimeout(() => {
        setIsTeleporting(true);
        setIndex(index + services.length);
        setTimeout(() => setIsTeleporting(false), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [index, services.length]);

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
      setIndex((prev) => prev + 1);
    } else if (dragOffset > 100 || dragVelocity > 500) {
      setIndex((prev) => prev - 1);
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
                  onClick={() => setIndex(services.length + idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index % services.length === idx ? "w-8 bg-aqua" : "w-1.5 bg-white/20 hover:bg-white/40"
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
          animate={{ x: `calc(50vw - ${(index * (CARD_WIDTH + GAP)) + (CARD_WIDTH / 2)}px)` }}
          transition={isTeleporting ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
          style={{ x }}
          className="flex gap-8 touch-none cursor-grab active:cursor-grabbing"
        >
          {infiniteServices.map((service, idx) => {
            const isActive = index === idx;
            return (
              <motion.div
                key={idx}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={isTeleporting ? { duration: 0 } : { duration: 0.5 }}
                className="w-[320px] md:w-[400px] flex-shrink-0 group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 flex flex-col h-[520px] shadow-2xl transition-colors"
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

const ReyesDifference = ({ onLearnMore }: { onLearnMore: () => void }) => {
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
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Choosing a professional service means choosing reliability and expertise. We've built our reputation on a foundation of trust and uncompromising quality.
            </p>
            <button
              onClick={onLearnMore}
              className="group flex items-center gap-2 text-aqua font-bold uppercase tracking-widest text-sm mb-12 hover:gap-3 transition-all"
            >
              Learn more about our standards <ArrowRight className="w-4 h-4" />
            </button>
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
    <div className="pt-32 pb-24 min-h-screen bg-white relative">
      {/* Dark Header Section */}
      <div className="bg-slate-950 absolute top-0 left-0 right-0 h-[600px] z-0 rounded-b-[4rem] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: 'url("/images/water_spray_texture_1772669918002.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'sepia(100%) hue-rotate(190deg) saturate(300%) brightness(150%)'
          }}
        />
        <div className="absolute inset-0 bg-fluid-gradient opacity-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-32">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-white/50 hover:text-aqua transition-colors mb-8 text-sm font-semibold tracking-wider uppercase"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl mb-8 text-white">The <span className="text-aqua">Science</span> of Clean</h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Professional exterior care is more than just water and pressure. It's a calculated, three-pillar process designed to protect your property while delivering breathtaking results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-24 -mt-20">
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
                  <span className={`text-6xl font-display font-bold ${idx === 0 ? 'text-white' : 'text-slate-100'}`}>{step.id}</span>
                  <div className="w-12 h-px bg-aqua/30" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-aqua">{step.phase}</span>
                </div>
                <h2 className={`text-4xl font-display font-bold leading-tight ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>{step.title}</h2>
                <p className={`text-lg leading-relaxed ${idx === 0 ? 'text-white/80' : 'text-slate-500'}`}>{step.description}</p>
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

// New Helper: Interactive Comparison for Vertical Split Images
const InteractiveBeforeAfter = ({ splitImage }: { splitImage: string }) => {
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

  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging) handleMove(e.clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { if (isDragging) handleMove(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden cursor-ew-resize group shadow-2xl border-4 border-white shadow-aqua/10"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Bottom half of split, cropped/positioned to fill) */}
      <div className="absolute inset-0 w-full h-full bg-slate-100">
        <img
          src={splitImage}
          alt="After"
          className="absolute inset-0 w-full h-[200%] object-cover object-bottom"
        />
        <div className="absolute top-6 right-6 px-4 py-2 bg-aqua text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full z-10">After</div>
      </div>

      {/* Before Image (Top half of split, clipped horizontally) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={splitImage}
          alt="Before"
          className="absolute inset-0 w-full h-[200%] object-cover object-top"
        />
        <div className="absolute top-6 left-6 px-4 py-2 bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full z-10">Before</div>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <div className="flex -space-x-1">
            <ChevronDown className="w-4 h-4 text-aqua rotate-90" />
            <ChevronDown className="w-4 h-4 text-aqua -rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

// New Helper: Card with 3D Flip Animation
interface GalleryItemProps {
  item: any;
  isLarge?: boolean;
  key?: string | number;
}

const GalleryFlipCard = ({ item, isLarge }: GalleryItemProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative perspective-1000 ${isLarge ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => window.open(item.image || (item.after || item.before), '_blank')}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700 ease-out cursor-zoom-in"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-lg border border-slate-100">
          <img
            src={item.image || item.after || item.before}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white max-w-[80%]">
            <h3 className="text-xl font-bold truncate">{item.title}</h3>
            <p className="text-xs opacity-70 tracking-widest uppercase">{item.location}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-slate-950 p-8 flex flex-col justify-center items-center text-center border-2 border-aqua/30"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="w-12 h-12 rounded-2xl bg-aqua/20 flex items-center justify-center text-aqua mb-6">
            <Maximize2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">{item.description || "Uncompromising quality and professional restoration."}</p>
          <span className="text-aqua text-[10px] font-bold tracking-[0.3em] uppercase border-b border-aqua pb-1">Click to Expand</span>
        </div>
      </motion.div>
    </div>
  );
};

const GalleryPage = ({ onBack }: { onBack: () => void }) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;

  const galleryItems = [
    // Featured Splitting Image
    { id: 'roof-hero', type: 'interactive', splitImage: "/images/Projects/roof-restoration-split.jpg" },

    // Grid Items
    { title: "Siding Revitalization", location: "Baytown, TX", image: "/images/Projects/siding-washing-baytown-1.jpg", featured: true },
    { title: "Driveway Cleaning", location: "Houston, TX", image: "/images/Projects/house-washing-driveway-baytown/house-dribeway-baytown-2.webp" },
    { title: "Commercial Lot Striping", location: "Crosby, TX", image: "/images/Projects/concrete-cleaning-crosby-high-school/1-IMG_4584.webp" },
    { title: "Roof Preservation", location: "Pearland, TX", image: "/images/Projects/roof-washing-pearland-1.jpg", featured: true },
    { title: "Storage Facility Prep", location: "Houston, TX", image: "/images/Projects/storage-facility-cleaning-1.jpg" },
    { title: "Stone Masonry Wash", location: "Mont Belvieu, TX", image: "/images/Projects/concrete-cleaning-mont-belvieu-2.jpg" },
    { title: "Spring Curb Appeal", location: "Spring, TX", image: "/images/Projects/house-wash-concrete-cleaning-spring-tx.webp" },
    { title: "Baytown Roof Restore", location: "Baytown, TX", image: "/images/Projects/roof-washing-baytown.webp" },
    { title: "Patio Restoration", location: "Baytown, TX", image: "/images/Projects/concrete-patio-cleaning-baytown-tx.webp" },
    { title: "Concrete Revive", location: "Houston, TX", image: "/images/Projects/concrete-cleaning-baytown-tx.webp" },
    { title: "Siding Deep Clean", location: "Houston, TX", image: "/images/services/house-washing-houston.jpg" },
    { title: "Gutter Guard Polish", location: "Houston, TX", image: "/images/services/gutter-cleaning.webp" },
    { title: "Fence Restoration", location: "Pearland, TX", image: "/images/services/fence-cleaning.webp" },
    { title: "Sidewalk Safety Wash", location: "Houston, TX", image: "/images/services/sidewalk-cleaning-houston.jpg" }
  ];

  const totalPages = Math.ceil((galleryItems.length - 1) / itemsPerPage);
  const currentItems = galleryItems.slice(1 + page * itemsPerPage, 1 + (page + 1) * itemsPerPage);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Water Droplet Texture */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: 'url("/images/water_spray_texture_1772669918002.png")', // Using uploaded texture name, or fallback to radial
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'sepia(100%) hue-rotate(190deg) saturate(300%) brightness(150%)' // tinting light blue
        }}
      />
      <div className="absolute inset-0 bg-fluid-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-white/50 hover:text-aqua transition-colors mb-6 text-sm font-semibold tracking-wider uppercase"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </button>
            <h1 className="text-5xl md:text-7xl mb-6 font-display font-light text-white">Results That <span className="text-aqua font-bold">Speak</span></h1>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">Experience the visible impact of industrial-grade restoration. From residential siding to commercial concrete, we set the standard.</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase mb-4">
            <span className="text-aqua">Our Work</span>
            <span className="w-12 h-px bg-white/20" />
            <span className="text-white/40">Restoration Excellence</span>
          </div>
        </div>

        {/* First Image: Interactive Split */}
        <div className="mb-20">
          <InteractiveBeforeAfter splitImage={galleryItems[0].splitImage} />
        </div>

        {/* Collage Grid */}
        <div id="gallery-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {currentItems.map((item, idx) => (
            <GalleryFlipCard key={item.title || idx} item={item} isLarge={item.featured} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-8">
            <button
              disabled={page === 0}
              onClick={() => { setPage(p => p - 1); document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-aqua hover:text-aqua disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white/50 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${page === i ? 'w-8 bg-aqua' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button
              disabled={page === totalPages - 1}
              onClick={() => { setPage(p => p + 1); document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-aqua hover:text-aqua disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white/50 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
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
              <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('gallery'); }}>Our Work</a></li>
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
    <div className="min-h-screen bg-slate-950 relative overflow-hidden pt-32 pb-24">
      {/* Background Water Droplet Texture */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: 'url("/images/water_spray_texture_1772669918002.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'sepia(100%) hue-rotate(190deg) saturate(300%) brightness(150%)'
        }}
      />
      <div className="absolute inset-0 bg-fluid-gradient opacity-30 pointer-events-none" />

      {/* Hero Banner */}
      <div className="relative mb-16 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-white/50 hover:text-aqua transition-colors mb-10 text-sm font-semibold tracking-wider uppercase"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-aqua font-bold tracking-[0.2em] uppercase text-xs mb-4">Free Estimate</span>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">
              Let's <span className="text-aqua">Transform</span> Your Property
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
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
                      <p className="text-white font-semibold">(281) 683-0111</p>
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
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Location</p>
                      <p className="text-white font-semibold">Reyes Pressure Washing</p>
                      <p className="text-white/80 text-sm">115 Commerce Ln</p>
                      <p className="text-white/50 text-sm">Highlands, TX 77562</p>
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
                        placeholder="(281) 555-0100"
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

const DifferencePage = ({ onBack }: { onBack: () => void }) => {
  const pillars = [
    {
      title: "Scientific Soft-Wash",
      description: "We don't just blast away surface dirt. Our specialized solutions kill organic growth at the root, ensuring a longer-lasting clean while protecting your property's delicate materials.",
      icon: <Droplets className="w-8 h-8" />,
      tag: "Process"
    },
    {
      title: "Industrial-Grade Tech",
      description: "Our custom-built trailer rigs deliver precise pressure and heat control that consumer-grade units simply can't match, allowing us to tackle the toughest Houston grime safely.",
      icon: <Zap className="w-8 h-8" />,
      tag: "Equipment"
    },
    {
      title: "Property Protection",
      description: "Your landscaping is a multi-thousand dollar investment. We use pre-wetting, runoff diversion, and eco-conscious neutralizers to ensure your plants thrive after our visit.",
      icon: <ShieldCheck className="w-8 h-8" />,
      tag: "Commitment"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section - Dark Mode with Texture */}
      <div className="relative bg-slate-950 pt-32 pb-24 overflow-hidden">
        {/* Water Spray Texture Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("/images/layout/water-texture.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(3) contrast(1.5)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
          }}
        />

        {/* Animated Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-aqua/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-blue/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <button
                onClick={onBack}
                className="group flex items-center gap-2 text-white/50 hover:text-aqua transition-colors mb-6 text-sm font-semibold tracking-wider uppercase"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </button>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl mb-8 leading-tight font-display font-light text-white"
              >
                The <span className="text-aqua font-bold">Reyes</span> Standard.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-lg md:text-xl leading-relaxed font-light"
              >
                We believe every home deserves to look its best. At Reyes Pressure Washing, we don't just provide a service; we provide a total transformation backed by a commitment to uncompromising excellence.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase mb-4"
            >
              <span className="text-aqua">Commitment to Quality</span>
              <span className="w-12 h-px bg-white/10" />
              <span className="text-white/30">Since Day 1</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24">

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2">
              <img
                src="/images/Projects/roof-restoration-split.jpg"
                alt="Total Roof Transformation"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-aqua rounded-[2rem] p-8 text-white shadow-2xl flex flex-col justify-center">
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Satisfaction Guaranteed</div>
            </div>
          </motion.div>
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                To revitalize and protect the Greater Houston area's properties through advanced cleaning technology, scientific chemical processes, and a relentless attention to detail that sets the standard for our industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-aqua/10 text-aqua rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">Licensed & Insured</h4>
                <p className="text-sm text-slate-500">Fully protected ops for your complete peace of mind.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-aqua/10 text-aqua rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">Pro-Grade Results</h4>
                <p className="text-sm text-slate-500">Commercial equipment for a superior cleaning depth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Difference Pillars */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">What Sets Us <span className="text-aqua">Apart</span>.</h2>
            <p className="text-slate-500 italic">"The difference is in the details. We don't stop until every surface is pristine."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-aqua/20 transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,163,224,0.1)]"
              >
                <div className="w-16 h-16 bg-aqua/5 text-aqua rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-aqua group-hover:text-white">
                  {pillar.icon}
                </div>
                <span className="text-xs font-bold text-aqua uppercase tracking-[0.2em] mb-4 block">{pillar.tag}</span>
                <h3 className="text-2xl font-bold mb-6">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-950 rounded-[3rem] p-8 md:p-20 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-aqua/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-blue/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight">Ready to experience the <span className="text-aqua">difference?</span></h2>
            <p className="text-white/60 text-lg md:text-xl mb-12">Join hundreds of satisfied Houston homeowners who trust Reyes for their property's premium care.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => {
                  onBack();
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="premium-button py-4 px-10 text-lg w-full sm:w-auto"
              >
                Get Your Free Quote
              </button>
              <a href="tel:+12810000000" className="flex items-center gap-3 text-white font-bold hover:text-aqua transition-colors py-4 px-6">
                <Phone className="w-5 h-5" /> Speak with an Expert
              </a>
            </div>
          </div>
        </motion.div>
      </div>
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
            <ReyesDifference onLearnMore={() => setCurrentPage('difference-page')} />
            <Services onSelectService={handleSelectService} />
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
        ) : currentPage === 'difference-page' ? (
          <motion.div
            key="difference"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <DifferencePage onBack={handleBack} />
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
