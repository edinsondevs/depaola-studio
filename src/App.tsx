import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Palette, 
  Droplet, 
  Check, 
  Star, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  Clock, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  Award,
  ArrowUpRight,
  Info
} from 'lucide-react';
import Logo from './components/Logo';
import { GALLERY_DATA, SERVICES_DATA, BENEFITS_DATA, TESTIMONIALS_DATA} from './data/dataSet'


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [estimatorSelected, setEstimatorSelected] = useState<string[]>([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Handle transparent to blurred navbar conversion on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Gallery Items
  const filteredGallery = selectedCategory === 'Todos' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === selectedCategory || (selectedCategory === 'Nail Art' && item.category === 'Nail Art'));

  // Toggle service selection in custom session estimator
  const handleToggleEstimator = (id: string) => {
    if (estimatorSelected.includes(id)) {
      setEstimatorSelected(estimatorSelected.filter(item => item !== id));
    } else {
      setEstimatorSelected([...estimatorSelected, id]);
    }
  };

  // Helper function to build dynamic WhatsApp API links
  const getWhatsAppLink = (customText?: string) => {
    const defaultText = "¡Hola De'Paola Studio! Me gustaría reservar un turno para realizarme un servicio de manicuría profesional. ¿Qué turnos tienen disponibles?";
    const textToUse = customText ? customText : defaultText;
    const encodedText = encodeURIComponent(textToUse);
    // Real number placeholder or customizable
    return `https://wa.me/5491134567890?text=${encodedText}`;
  };

  // Triggered when reserving a specific service card
  const handleReserveService = (serviceName: string) => {
    const customText = `¡Hola De'Paola Studio! Me gustaría reservar un turno para el servicio de: *${serviceName}*. ¿Qué disponibilidad de días y horarios tienen para esta semana?`;
    window.open(getWhatsAppLink(customText), '_blank');
  };

  // Triggered when booking from the interactive session estimator
  const handleReserveEstimator = () => {
    if (estimatorSelected.length === 0) return;
    const selectedNames = estimatorSelected.map(id => {
      const s = SERVICES_DATA.find(serv => serv.id === id);
      return s ? s.name : '';
    }).filter(Boolean).join(' + ');

    const customText = `¡Hola De'Paola Studio! Estuve explorando su simulador interactivo y me gustaría reservar una sesión personalizada con el siguiente combo de servicios: *${selectedNames}*. ¿Tienen disponibilidad próximamente?`;
    window.open(getWhatsAppLink(customText), '_blank');
  };

  // Handle contact form placeholder
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customText = `¡Hola De'Paola Studio! Mi nombre es ${contactName}. Les escribo desde el sitio web con la siguiente consulta: "${contactMessage}"`;
    window.open(getWhatsAppLink(customText), '_blank');
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#090909] text-[#F6F6F6] font-sans antialiased selection:bg-[#C8A15A] selection:text-[#090909] min-h-screen flex flex-col relative overflow-x-hidden" id="depaola-studio-root">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A15A]/4 pointer-events-none rounded-full blur-[120px] -mr-60 -mt-60 z-0"></div>
      <div className="absolute top-[35%] left-0 w-[450px] h-[450px] bg-[#C8A15A]/3 pointer-events-none rounded-full blur-[140px] -ml-60 z-0"></div>
      <div className="absolute bottom-[10%] right-0 w-[600px] h-[600px] bg-[#C8A15A]/4 pointer-events-none rounded-full blur-[150px] -mr-60 z-0"></div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#090909]/85 backdrop-blur-xl border-b border-[#C8A15A]/12 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-6'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo and Name */}
          <a href="#inicio" className="flex items-center gap-3 group" id="nav-brand-link">
            <Logo size="custom" customWidth="45px" customHeight="45px" showText={false} />
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] text-[#C8A15A] group-hover:text-[#DDBE78] transition-colors uppercase leading-none font-medium">
                De'Paola
              </span>
              <span className="text-[8px] tracking-[0.45em] uppercase text-[#C7C7C7] mt-0.5">
                STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] text-[#C7C7C7]" id="desktop-menu">
            <a href="#inicio" className="hover:text-[#C8A15A] transition-colors duration-300">Inicio</a>
            <a href="#servicios" className="hover:text-[#C8A15A] transition-colors duration-300">Servicios</a>
            <a href="#por-que-elegirnos" className="hover:text-[#C8A15A] transition-colors duration-300">Nosotros</a>
            <a href="#galeria" className="hover:text-[#C8A15A] transition-colors duration-300">Galería</a>
            <a href="#ubicacion" className="hover:text-[#C8A15A] transition-colors duration-300">Ubicación</a>
            <a href="#contacto" className="hover:text-[#C8A15A] transition-colors duration-300">Contacto</a>
          </div>

          {/* Desktop CTA Action Button */}
          <div className="hidden lg:block">
            <a 
              href="#reservar" 
              className="relative inline-flex items-center justify-center border border-[#C8A15A]/40 px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#F6F6F6] font-medium hover:bg-[#C8A15A] hover:text-[#090909] hover:border-[#C8A15A] transition-all duration-300 shadow-[0_0_15px_rgba(200,161,90,0.05)] hover:shadow-[0_0_20px_rgba(200,161,90,0.2)]"
              id="desktop-reserve-cta"
            >
              Reservar Turno
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-[#C8A15A] hover:text-[#DDBE78] transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        <div 
          className={`fixed inset-x-0 top-0 bg-[#090909]/98 backdrop-blur-2xl border-b border-[#C8A15A]/20 transition-all duration-500 ease-in-out lg:hidden z-40 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[100vh] opacity-100 py-24 shadow-[0_10px_40px_rgba(0,0,0,0.9)]' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          id="mobile-menu-drawer"
        >
          <div className="flex flex-col items-center gap-8 px-6 text-center">
            {/* Logo in drawer */}
            <Logo size="custom" customWidth="90px" customHeight="90px" showText={false} className="mb-4" />
            
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-sm uppercase tracking-[0.25em] text-[#C7C7C7] hover:text-[#C8A15A] py-1 transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-sm uppercase tracking-[0.25em] text-[#C7C7C7] hover:text-[#C8A15A] py-1 transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#por-que-elegirnos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-sm uppercase tracking-[0.25em] text-[#C7C7C7] hover:text-[#C8A15A] py-1 transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="#galeria" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-sm uppercase tracking-[0.25em] text-[#C7C7C7] hover:text-[#C8A15A] py-1 transition-colors"
            >
              Galería
            </a>
            <a 
              href="#ubicacion" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-sm uppercase tracking-[0.25em] text-[#C7C7C7] hover:text-[#C8A15A] py-1 transition-colors"
            >
              Ubicación
            </a>
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-sm uppercase tracking-[0.25em] text-[#C7C7C7] hover:text-[#C8A15A] py-1 transition-colors"
            >
              Contacto
            </a>
            
            <a 
              href="#reservar" 
              onClick={() => setMobileMenuOpen(false)} 
              className="mt-4 bg-[#C8A15A] text-[#090909] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(200,161,90,0.25)] w-full max-w-xs transition-transform active:scale-95"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header 
        id="inicio" 
        className="relative min-h-screen pt-32 lg:pt-0 flex items-center justify-center max-w-7xl mx-auto px-6 md:px-12 z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full py-12">
          
          {/* Left Side Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8 md:gap-10 order-2 lg:order-1 text-left">
            <div className="space-y-5">
              
              {/* Soft gold tag indicator */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#C8A15A]"></div>
                <span className="text-[#DDBE78] text-[11px] md:text-[12px] uppercase tracking-[0.35em] font-semibold">
                  Bienvenida al Lujo y la Exclusividad
                </span>
              </div>
              
              {/* Premium Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light leading-[1.15] text-[#F6F6F6]" id="hero-title">
                Uñas que <span className="italic font-normal text-[#DDBE78] block sm:inline">elevan</span> tu estilo.
              </h1>
              
              {/* Paragraph */}
              <p className="text-[#C7C7C7] text-base md:text-lg max-w-2xl leading-relaxed font-light font-sans" id="hero-subtitle">
                Manicuría profesional con atención altamente personalizada en un entorno diseñado exclusivamente para tu bienestar. Disfruta de una experiencia de belleza incomparable desde el primer momento en nuestro atelier boutique de San Cristóbal.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="https://wa.me/5491134567890?text=%C2%A1Hola%20De'Paola%20Studio!%20Me%20gustar%C3%ADa%20reservar%20un%20turno%20para%20disfrutar%20de%20la%20experiencia%20de%20manicur%C3%ADa%20profesional.%20%C2%BFQu%C3%A9%20disponibilidad%20tienen%20disponible%20pr%C3%B3ximamente?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8A15A] text-[#090909] px-8 py-4 md:px-10 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-[0.25em] font-bold shadow-[0_0_20px_rgba(200,161,90,0.18)] hover:shadow-[0_0_30px_rgba(200,161,90,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-center"
                id="hero-primary-cta"
              >
                <MessageCircle size={18} className="text-[#090909]" />
                Reservar por WhatsApp
              </a>
              <a 
                href="#servicios" 
                className="border border-[#C8A15A]/30 text-[#C7C7C7] hover:text-[#F6F6F6] hover:bg-white/3 hover:border-[#C8A15A]/60 px-8 py-4 md:px-10 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-2 text-center"
                id="hero-secondary-cta"
              >
                Ver servicios
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Micro Rating Indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2" id="hero-rating-container">
              <div className="flex text-[#C8A15A] text-base">
                <Star size={16} fill="#C8A15A" className="mr-0.5" />
                <Star size={16} fill="#C8A15A" className="mr-0.5" />
                <Star size={16} fill="#C8A15A" className="mr-0.5" />
                <Star size={16} fill="#C8A15A" className="mr-0.5" />
                <Star size={16} fill="#C8A15A" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C7C7C7]/70 font-medium">
                Más de 100 clientas felices
              </span>
            </div>

            {/* Quick Benefits Badges */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-[#C8A15A]/12 w-full max-w-lg">
              <div className="space-y-1">
                <span className="block text-[#C8A15A] font-serif text-xl md:text-2xl font-light">01.</span>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#C7C7C7] leading-relaxed">
                  Atención<br/>Personalizada
                </p>
              </div>
              <div className="space-y-1">
                <span className="block text-[#C8A15A] font-serif text-xl md:text-2xl font-light">02.</span>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#C7C7C7] leading-relaxed">
                  Insumos<br/>Premium
                </p>
              </div>
              <div className="space-y-1">
                <span className="block text-[#C8A15A] font-serif text-xl md:text-2xl font-light">03.</span>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#C7C7C7] leading-relaxed">
                  Diseños<br/>Exclusivos
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Visual Portrait Column */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[620px] order-1 lg:order-2 flex justify-center items-center" id="hero-portrait-column">
            
            {/* Soft decorative background circles */}
            <div className="absolute inset-0 border border-[#C8A15A]/12 rounded-t-[160px] md:rounded-t-[240px] m-4 pointer-events-none"></div>
            
            {/* Core Image Container */}
            <div className="h-full w-full max-w-[450px] bg-[#121212] rounded-t-[160px] md:rounded-t-[240px] overflow-hidden relative border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              
              {/* Warm Golden Lighting Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#C8A15A]/5 z-10 pointer-events-none transition-opacity duration-500"></div>
              
              {/* Main Premium Photo of Hand Manicure */}
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200" 
                alt="Manicuría Premium De'Paola Studio" 
                className="w-full h-full object-cover object-center transform scale-102 hover:scale-105 transition-transform duration-700 pointer-events-none"
              />

              {/* Decorative Pulsing Golden Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-[85%] h-[85%] border border-[#C8A15A]/12 rounded-full flex items-center justify-center animate-[pulse_6s_infinite]">
                  <div className="w-5/6 h-5/6 border border-[#C8A15A]/5 rounded-full"></div>
                </div>
              </div>

              {/* Glowing Badge over Image */}
              <div className="absolute bottom-8 left-0 right-0 px-6 text-center z-20">
                <div className="inline-block px-5 py-2.5 bg-[#090909]/85 backdrop-blur-md rounded-full border border-[#C8A15A]/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-[#C8A15A] text-[9px] tracking-[0.35em] uppercase font-bold">
                    LUXURY BEAUTY BOUTIQUE
                  </span>
                </div>
              </div>
            </div>

            {/* Floating golden geometric element (star / sparkle icon) */}
            <div className="absolute -top-4 right-10 p-3 bg-[#181818] border border-[#C8A15A]/20 rounded-full text-[#C8A15A] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-20 animate-[bounce_5s_infinite]">
              <Sparkles size={16} />
            </div>

            <div className="absolute bottom-16 -left-4 p-3.5 bg-[#181818] border border-[#C8A15A]/20 rounded-full text-[#C8A15A] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-20 animate-[bounce_7s_infinite_1s]">
              <Award size={18} />
            </div>
          </div>

        </div>
      </header>

      {/* SERVICES SECTION */}
      <section 
        id="servicios" 
        className="py-24 md:py-32 bg-[#121212] border-y border-[#C8A15A]/10 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#C8A15A] text-xs uppercase tracking-[0.4em] font-semibold block">
              NUESTRA PROPUESTA DE ARTE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F6F6] font-light">
              Servicios <span className="italic font-normal text-[#DDBE78]">Exclusivos</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#C8A15A] mx-auto mt-6"></div>
            <p className="text-[#C7C7C7] text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed pt-2">
              Utilizamos técnicas internacionales avanzadas de cuidado y esmaltado. Cada sesión se enfoca en perfeccionar los detalles y asegurar una durabilidad excepcional para reflejar tu personalidad.
            </p>
          </div>

          {/* Services Cards Grid (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
            {SERVICES_DATA.map((service, idx) => {
              // Custom outlines for each service index
              const icons = [Sparkles, ShieldCheck, Palette, Droplet];
              const ServiceIcon = icons[idx] || Sparkles;

              return (
                <div 
                  key={service.id} 
                  className="bg-[#181818] border border-[#C8A15A]/12 hover:border-[#C8A15A]/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 group hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(200,161,90,0.08)] transform hover:-translate-y-1"
                  id={`service-card-${service.id}`}
                >
                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-full border border-[#C8A15A]/30 flex items-center justify-center text-[#C8A15A] group-hover:bg-[#C8A15A] group-hover:text-[#090909] group-hover:border-[#C8A15A] transition-all duration-500">
                      <ServiceIcon size={20} strokeWidth={1.5} />
                    </div>

                    <div className="space-y-3">
                      {/* Name & tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map(tag => (
                          <span key={tag} className="text-[8px] tracking-widest uppercase text-[#DDBE78]/80 bg-[#C8A15A]/5 px-2 py-0.5 rounded-full border border-[#C8A15A]/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="font-serif text-2xl text-[#F6F6F6] font-light group-hover:text-[#DDBE78] transition-colors duration-300 pt-1">
                        {service.name}
                      </h3>
                      
                      <p className="text-[#C7C7C7] text-xs leading-relaxed font-light font-sans pt-1">
                        {service.shortDesc}
                      </p>

                      <p className="text-[#C7C7C7]/60 text-[11px] leading-relaxed font-light font-sans pt-2 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                        {service.longDesc}
                      </p>
                    </div>
                  </div>

                  {/* Card Actions & Pricing */}
                  <div className="pt-8 border-t border-[#C8A15A]/10 mt-8 space-y-4">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-wider">
                      <div className="flex items-center gap-1.5 text-[#C7C7C7]/70">
                        <Clock size={12} className="text-[#C8A15A]" />
                        <span>{service.time}</span>
                      </div>
                      <div className="text-[#C8A15A] font-semibold tracking-widest bg-[#C8A15A]/10 px-2.5 py-1 rounded">
                        {service.price}
                      </div>
                    </div>

                    <button 
                      onClick={() => handleReserveService(service.name)}
                      className="w-full py-3 bg-transparent border border-[#C8A15A]/30 text-[#C7C7C7] hover:text-[#090909] hover:bg-[#C8A15A] hover:border-[#C8A15A] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_4px_15px_rgba(200,161,90,0.15)]"
                    >
                      Reservar Servicio
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Interactive Session Customizer (A Senior UX touch to drive conversion) */}
          <div className="mt-20 bg-[#181818] border border-[#C8A15A]/20 rounded-3xl p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.8)] relative overflow-hidden" id="interactive-pricing-calculator">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C8A15A]/3 pointer-events-none rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Calculator left */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8A15A]/10 border border-[#C8A15A]/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A15A] animate-ping"></span>
                  <span className="text-[#C8A15A] text-[9px] uppercase tracking-[0.25em] font-bold">Reserva Personalizada</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-[#F6F6F6] font-light">
                  Diseña tu <span className="italic text-[#DDBE78]">Sesión Perfecta</span>
                </h3>
                
                <p className="text-[#C7C7C7] text-xs md:text-sm font-light leading-relaxed">
                  Selecciona una o más opciones para combinar los tratamientos que desees en una sola cita. Nuestro calculador estimará el tiempo para optimizar tu agenda.
                </p>

                {/* Grid selection buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {SERVICES_DATA.map(service => {
                    const isSelected = estimatorSelected.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        onClick={() => handleToggleEstimator(service.id)}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left ${
                          isSelected 
                            ? 'bg-[#C8A15A]/8 border-[#C8A15A] text-[#F6F6F6]' 
                            : 'bg-[#090909]/60 border-white/5 hover:border-[#C8A15A]/30 text-[#C7C7C7]'
                        }`}
                      >
                        <div className="space-y-1 pr-4">
                          <span className="text-[11px] font-medium tracking-wide block">{service.name}</span>
                          <span className="text-[9px] text-[#C7C7C7]/60 font-sans block">{service.time}</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? 'bg-[#C8A15A] border-[#C8A15A] text-[#090909]' : 'border-white/10 text-transparent'
                        }`}>
                          <Check size={10} strokeWidth={3} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Calculator right results */}
              <div className="lg:col-span-5 bg-[#090909]/80 border border-[#C8A15A]/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full space-y-8" id="calculator-receipt">
                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C7C7C7]/50 block border-b border-white/5 pb-2">
                    Resumen del Ritual
                  </span>
                  
                  {estimatorSelected.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center text-[#C7C7C7]/40 space-y-2">
                      <Info size={28} strokeWidth={1} className="text-[#C8A15A]/50" />
                      <p className="text-xs font-light">Selecciona tus tratamientos favoritos para armar tu presupuesto personalizado.</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1">
                      {estimatorSelected.map(id => {
                        const s = SERVICES_DATA.find(serv => serv.id === id);
                        return s ? (
                          <div key={id} className="flex justify-between items-center text-xs">
                            <span className="font-light text-[#F6F6F6]">{s.name}</span>
                            <span className="text-[#DDBE78] font-mono">{s.time}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>

                <div className="space-y-4 border-t border-white/5 pt-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] uppercase tracking-widest text-[#C7C7C7]">Duración Total</span>
                    <span className="font-serif text-2xl text-[#C8A15A] font-light">
                      {estimatorSelected.length === 0 ? '0' : estimatorSelected.reduce((acc, id) => {
                        const s = SERVICES_DATA.find(serv => serv.id === id);
                        if (!s) return acc;
                        const t = parseInt(s.time);
                        return acc + (isNaN(t) ? 35 : t); // defaults to 35 if dynamic nail-art text
                      }, 0)} min
                    </span>
                  </div>

                  <button
                    disabled={estimatorSelected.length === 0}
                    onClick={handleReserveEstimator}
                    className={`w-full py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      estimatorSelected.length === 0 
                        ? 'bg-white/5 text-[#C7C7C7]/30 border border-white/5 cursor-not-allowed' 
                        : 'bg-[#C8A15A] text-[#090909] shadow-[0_0_20px_rgba(200,161,90,0.15)] hover:shadow-[0_0_25px_rgba(200,161,90,0.35)] hover:-translate-y-0.5 cursor-pointer'
                    }`}
                  >
                    <MessageCircle size={16} />
                    Reservar Ritual Combo
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section 
        id="por-que-elegirnos" 
        className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Why Left: Beautiful layout showcasing our core values */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#C8A15A]"></div>
              <span className="text-[#DDBE78] text-[11px] uppercase tracking-[0.35em] font-semibold">
                NUESTRO COMPROMISO
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F6F6] font-light leading-tight">
              ¿Por qué elegir <span className="italic text-[#DDBE78] block">De'Paola Studio?</span>
            </h2>
            
            <p className="text-[#C7C7C7] text-sm md:text-base font-light leading-relaxed">
              No se trata solamente de pintar uñas; es un ritual integral de cuidado. Ofrecemos excelencia técnica y los mejores productos internacionales en un espacio que prioriza tu relajación mental y física.
            </p>

            <div className="p-6 bg-[#121212] border border-[#C8A15A]/15 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-[#C8A15A]/10">
                <ShieldCheck size={80} strokeWidth={0.5} />
              </div>
              <p className="text-[#C8A15A] font-serif text-lg italic mb-2">Higiene Absoluta</p>
              <p className="text-[#C7C7C7] text-xs font-light leading-relaxed">
                Utilizamos esterilización química y física de grado quirúrgico en todo nuestro instrumental metálico. Tu seguridad y tranquilidad médica son indispensables en cada cita.
              </p>
            </div>
          </div>

          {/* Why Right: Benefits cards layout (3x2 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="benefits-grid">
            {BENEFITS_DATA.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="bg-[#121212] border border-[#C8A15A]/10 hover:border-[#C8A15A]/40 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C8A15A]/5 border border-[#C8A15A]/20 flex items-center justify-center text-[#C8A15A]">
                    <BenefitIcon size={18} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-base text-[#F6F6F6] font-medium tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-[#C7C7C7]/70 text-xs font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* GALLERY SECTION (Masonry / Editorial Visual Showcase) */}
      <section 
        id="galeria" 
        className="py-24 md:py-32 bg-[#121212] border-y border-[#C8A15A]/10 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Gallery Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="text-left space-y-4 max-w-xl">
              <span className="text-[#C8A15A] text-xs uppercase tracking-[0.4em] font-semibold block">
                ATELIER VISUAL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F6F6] font-light">
                Nuestra <span className="italic text-[#DDBE78]">Galería</span> de Arte
              </h2>
              <p className="text-[#C7C7C7] text-xs md:text-sm font-light leading-relaxed">
                Explora los trabajos reales realizados en nuestro salón. Diseños que combinan precisión milimétrica con elegancia atemporal.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-widest font-semibold" id="gallery-filters">
              {['Todos', 'Semi Permanente', 'Kapping Gel', 'Nail Art'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#C8A15A] text-[#090909] border-[#C8A15A] font-bold shadow-[0_4px_15px_rgba(200,161,90,0.15)]'
                      : 'bg-transparent text-[#C7C7C7] border-white/10 hover:border-[#C8A15A]/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid - Responsive Masonry style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
            {filteredGallery.map(item => (
              <div 
                key={item.id} 
                className="group relative bg-[#181818] rounded-2xl overflow-hidden border border-[#C8A15A]/12 transition-all duration-500 hover:border-[#C8A15A]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col"
                id={`gallery-item-${item.id}`}
              >
                {/* Image Wrap */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center transform scale-101 group-hover:scale-106 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Dark transparent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                    <div className="space-y-2 text-left">
                      <span className="text-[9px] uppercase tracking-widest text-[#C8A15A] bg-[#C8A15A]/10 px-3 py-1 rounded-full border border-[#C8A15A]/20">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-lg text-[#F6F6F6] font-light pt-2">
                        {item.title}
                      </h4>
                      <button 
                        onClick={() => handleReserveService(`${item.category} - Diseño ${item.id}`)}
                        className="mt-3 inline-flex items-center gap-2 text-[9px] uppercase tracking-widest text-[#DDBE78] hover:text-[#C8A15A] transition-colors"
                      >
                        Me interesa este diseño
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Always visible brief description for luxury layout */}
                <div className="p-5 flex justify-between items-center bg-[#181818] border-t border-white/5 z-0">
                  <div className="text-left">
                    <span className="text-[9px] text-[#C8A15A] uppercase tracking-widest font-mono block">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#C7C7C7] font-light mt-0.5 block">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-[#C7C7C7]/40 group-hover:text-[#C8A15A] transition-colors">
                    <Instagram size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Conversion Prompt */}
          <div className="mt-16 text-center" id="instagram-cta-container">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#181818] border border-[#C8A15A]/15 px-8 py-4 rounded-2xl max-w-2xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="p-2.5 bg-[#C8A15A]/10 text-[#C8A15A] rounded-full">
                <Instagram size={20} />
              </div>
              <p className="text-[#C7C7C7] text-xs md:text-sm font-light text-left">
                Compartimos diariamente tendencias, procesos e ideas exclusivas de nail art en nuestra comunidad. ¡Síguenos en <span className="text-[#C8A15A] font-semibold">@depaola.studio</span>!
              </p>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-bold text-[#C8A15A] hover:text-[#DDBE78] transition-colors flex items-center gap-1.5 shrink-0"
              >
                Seguir
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 relative z-10" id="testimonios">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#C8A15A] text-xs uppercase tracking-[0.4em] font-semibold block">
            VOCES QUE COMPARTEN NUESTRO ARTE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F6F6] font-light">
            Experiencias <span className="italic text-[#DDBE78]">Memorables</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A15A] mx-auto mt-6"></div>
          <p className="text-[#C7C7C7] text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed pt-2">
            La confianza y lealtad de nuestras clientas son nuestro mayor galardón. Descubre por qué eligen De'Paola Studio para vestir sus manos con excelencia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-[#121212] border border-[#C8A15A]/10 hover:border-[#C8A15A]/30 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] group"
            >
              <div className="space-y-6 text-left">
                {/* Elegant gold stars */}
                <div className="flex text-[#C8A15A]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#C8A15A" className="mr-0.5" />
                  ))}
                </div>
                
                {/* Quote review */}
                <p className="text-[#C7C7C7] text-xs md:text-sm font-light leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-[#F6F6F6] text-xs md:text-sm font-medium tracking-wide">{t.name}</h4>
                  <span className="text-[#C7C7C7]/40 text-[9px] uppercase tracking-wider block mt-0.5">Cliente Verificada</span>
                </div>
                <span className="text-[#C7C7C7]/40 text-[10px] font-mono">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING SECTION (Large Conversion Drive Banner) */}
      <section 
        id="reservar" 
        className="py-24 md:py-32 bg-[#121212] border-t border-[#C8A15A]/15 relative overflow-hidden z-10"
      >
        <div className="absolute inset-0 bg-radial-gradient from-[#C8A15A]/3 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Abstract framing lines */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-[#C8A15A]/10 pointer-events-none hidden md:block"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-[#C8A15A]/10 pointer-events-none hidden md:block"></div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          
          <Logo size="custom" customWidth="130px" customHeight="130px" showText={false} className="mx-auto" />
          
          <div className="space-y-4">
            <span className="text-[#C8A15A] text-xs uppercase tracking-[0.4em] font-bold block">
              RESERVA DE ATENCIÓN BOUTIQUE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F6F6] font-light leading-tight">
              ¿Lista para reservar tu <span className="italic text-[#DDBE78]">próximo turno?</span>
            </h2>
            <p className="text-[#C7C7C7] text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed pt-2">
              Haz clic en el botón de abajo y conéctate directamente con nosotras por WhatsApp. Estaremos encantadas de coordinar tu cita y asesorarte para definir la experiencia perfecta para tus manos.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            {/* Glowing Big WhatsApp CTA */}
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C8A15A] text-[#090909] px-12 py-5 rounded-full text-xs md:text-sm uppercase tracking-[0.25em] font-black shadow-[0_0_30px_rgba(200,161,90,0.25)] hover:shadow-[0_0_45px_rgba(200,161,90,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
              id="big-whatsapp-cta"
            >
              <MessageCircle size={20} fill="#090909" className="text-[#090909]" />
              Reservar Turno por WhatsApp
            </a>
            
            {/* Real-time scheduling notice */}
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#C7C7C7]/60">
              Respuesta inmediata • Cupos limitados para esta semana
            </p>
          </div>

        </div>
      </section>

      {/* LOCATION & DETAILS SECTION */}
      <section 
        id="ubicacion" 
        className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-10">
            
            <div className="space-y-5">
              <span className="text-[#C8A15A] text-xs uppercase tracking-[0.4em] font-semibold block">
                ATELIER EN CIUDAD DE BUENOS AIRES
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F6F6F6] font-light">
                Nuestra <span className="italic text-[#DDBE78]">Ubicación</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#C8A15A] mt-4"></div>
              <p className="text-[#C7C7C7] text-xs md:text-sm font-light leading-relaxed pt-2">
                Te esperamos en un entorno íntimo y elegante en el histórico barrio de San Cristóbal, CABA, diseñado para que disfrutes de absoluta tranquilidad durante tu ritual de manicuría.
              </p>
            </div>

            {/* Quick Contact & Info Details card */}
            <div className="bg-[#121212] border border-[#C8A15A]/15 rounded-2xl p-6 md:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#C8A15A]/10 text-[#C8A15A] rounded-lg mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C7C7C7]/60">Dirección</h4>
                  <p className="text-[#F6F6F6] text-sm font-medium mt-1">San Cristóbal, Ciudad Autónoma de Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#C8A15A]/10 text-[#C8A15A] rounded-lg mt-0.5">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C7C7C7]/60">Horario de Atención</h4>
                  <p className="text-[#F6F6F6] text-sm font-medium mt-1">Lunes a Sábado: 10:00 a 20:00 hs</p>
                  <span className="text-[10px] text-[#C8A15A] uppercase tracking-widest font-mono mt-0.5 block">Solo con cita previa</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#C8A15A]/10 text-[#C8A15A] rounded-lg mt-0.5">
                  <Instagram size={16} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C7C7C7]/60">Instagram Oficial</h4>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#C8A15A] text-sm hover:underline flex items-center gap-1 mt-1 font-medium">
                    @depaola.studio
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#C8A15A]/10 text-[#C8A15A] rounded-lg mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C7C7C7]/60">WhatsApp Directo</h4>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[#C8A15A] text-sm hover:underline flex items-center gap-1 mt-1 font-medium">
                    +54 9 11 3456-7890
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Map Display Column */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] relative rounded-3xl overflow-hidden border border-[#C8A15A]/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-stretch" id="map-column">
            
            {/* Extremely elegant Dark-styled Luxury Map placeholder */}
            <div className="absolute inset-0 bg-[#0e0e0e] flex flex-col items-center justify-center p-8 text-center z-10">
              {/* Luxury Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
              
              {/* Circle radar design */}
              <div className="relative w-28 h-28 border border-[#C8A15A]/20 rounded-full flex items-center justify-center mb-6 animate-[pulse_4s_infinite]">
                <div className="w-20 h-20 border border-[#C8A15A]/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#C8A15A]/10 border border-[#C8A15A]/40 rounded-full flex items-center justify-center text-[#C8A15A] shadow-[0_0_20px_rgba(200,161,90,0.3)]">
                    <MapPin size={22} className="animate-bounce" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 max-w-md relative z-20">
                <h4 className="font-serif text-xl text-[#F6F6F6] font-light">
                  San Cristóbal, CABA
                </h4>
                <p className="text-[#C7C7C7]/70 text-xs font-light leading-relaxed">
                  Para resguardar la privacidad y exclusividad de tu servicio, compartimos la dirección exacta del atelier por privado al confirmar tu turno por WhatsApp.
                </p>
                <div className="pt-4">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#181818] border border-[#C8A15A]/30 text-[#C8A15A] hover:bg-[#C8A15A] hover:text-[#090909] hover:border-[#C8A15A] px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 shadow-md"
                  >
                    Abrir en Google Maps
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DYNAMIC CONTACT FORM (To drive offline/direct messaging queries) */}
      <section 
        id="contacto" 
        className="py-24 md:py-32 bg-[#121212] border-t border-[#C8A15A]/12 relative z-10"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="text-[#C8A15A] text-xs uppercase tracking-[0.4em] font-semibold block">
              ATENCIÓN DE CONSULTAS
            </span>
            <h2 className="text-3xl font-serif text-[#F6F6F6] font-light">
              ¿Tienes alguna <span className="italic text-[#DDBE78]">pregunta?</span>
            </h2>
            <p className="text-[#C7C7C7] text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto">
              Escríbenos directamente o déjanos un mensaje. Te responderemos de forma personalizada para asesorarte sobre tu tratamiento ideal.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6" id="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-[#C7C7C7]/70 font-bold block pl-1">
                  Tu Nombre completo
                </label>
                <input 
                  type="text" 
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Ej: Sofía Martínez"
                  className="w-full bg-[#181818] border border-white/5 focus:border-[#C8A15A] rounded-xl px-5 py-3.5 text-sm text-[#F6F6F6] placeholder-[#C7C7C7]/30 focus:outline-none transition-all duration-300 font-sans"
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-[#C7C7C7]/70 font-bold block pl-1">
                  Canal de contacto favorito
                </label>
                <select className="w-full bg-[#181818] border border-white/5 focus:border-[#C8A15A] rounded-xl px-5 py-3.5 text-sm text-[#F6F6F6] focus:outline-none transition-all duration-300 font-sans cursor-pointer appearance-none">
                  <option value="whatsapp">WhatsApp (Recomendado)</option>
                  <option value="instagram">Mensaje Privado Instagram</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-[#C7C7C7]/70 font-bold block pl-1">
                Escribe tu consulta
              </label>
              <textarea 
                rows={4}
                required
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Ej: Hola, quería consultar si tienen disponibilidad de turnos para Kapping Gel este sábado a la tarde o si realizan diseños franceses..."
                className="w-full bg-[#181818] border border-white/5 focus:border-[#C8A15A] rounded-xl px-5 py-3.5 text-sm text-[#F6F6F6] placeholder-[#C7C7C7]/30 focus:outline-none transition-all duration-300 font-sans resize-none"
              ></textarea>
            </div>

            <div className="pt-4 flex justify-center">
              <button 
                type="submit"
                className="bg-transparent border border-[#C8A15A]/40 text-[#C8A15A] hover:bg-[#C8A15A] hover:text-[#090909] hover:border-[#C8A15A] px-12 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 flex items-center gap-2.5 shadow-md w-full sm:w-auto justify-center"
              >
                Enviar Consulta por WhatsApp
                <ArrowUpRight size={14} />
              </button>
            </div>

            {isFormSubmitted && (
              <p className="text-[11px] text-[#C8A15A] tracking-wider uppercase text-center animate-pulse">
                ¡Conectando con WhatsApp... Gracias por escribirnos!
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer 
        className="bg-[#090909] border-t border-[#C8A15A]/15 py-16 px-6 md:px-12 relative z-10"
        id="footer"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          
          {/* Logo centerpiece */}
          <Logo size="custom" customWidth="110px" customHeight="110px" showText={false} />
          
          {/* Studio Name Title */}
          <div className="flex flex-col items-center text-center -mt-4">
            <span className="font-serif text-2xl tracking-[0.25em] text-[#C8A15A] font-light uppercase">
              De'Paola
            </span>
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#C7C7C7] mt-1">
              STUDIO • ATELIER DE BELLEZA
            </span>
          </div>

          {/* Social Icons / Quick links */}
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-[#C7C7C7]" id="footer-links">
            <a href="#inicio" className="hover:text-[#C8A15A] transition-colors">Inicio</a>
            <span className="text-white/10">|</span>
            <a href="#servicios" className="hover:text-[#C8A15A] transition-colors">Servicios</a>
            <span className="text-white/10">|</span>
            <a href="#galeria" className="hover:text-[#C8A15A] transition-colors">Galería</a>
            <span className="text-white/10">|</span>
            <a href="#ubicacion" className="hover:text-[#C8A15A] transition-colors">Ubicación</a>
          </div>

          <div className="flex items-center gap-6" id="footer-social-links">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/5 hover:border-[#C8A15A]/40 flex items-center justify-center text-[#C7C7C7] hover:text-[#C8A15A] transition-all bg-[#121212]"
              aria-label="Instagram de De'Paola Studio"
            >
              <Instagram size={16} />
            </a>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/5 hover:border-[#C8A15A]/40 flex items-center justify-center text-[#C7C7C7] hover:text-[#C8A15A] transition-all bg-[#121212]"
              aria-label="WhatsApp de De'Paola Studio"
            >
              <MessageCircle size={16} />
            </a>
          </div>

          {/* Copyright, legal details */}
          <div className="text-center space-y-2 pt-4 border-t border-white/5 w-full max-w-md">
            <p className="text-[10px] uppercase tracking-widest text-[#C7C7C7]/40 leading-relaxed">
              &copy; {new Date().getFullYear()} De'Paola Studio. Todos los derechos reservados.
            </p>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#C8A15A]/50">
              Especialistas en Manicuría • San Cristóbal, CABA, Argentina
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
