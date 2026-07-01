import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Heart,
  Award,
  Coffee,
} from 'lucide-react';

// Services Data with estimated time, price guidance, and Unsplash premium placeholder
interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  time: string;
  price: string;
  tags: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'semi-permanente',
    name: 'Semi Permanente',
    shortDesc: 'Brillo impecable y duradero por semanas.',
    longDesc: 'Esmaltado de larga duración con curado en lámpara LED de última generación. Utilizamos bases niveladoras que protegen la uña natural, logrando un acabado impecable, fino y resistente por más de 15 días.',
    time: '60 min',
    price: 'Premium',
    tags: ['Esmaltado', 'Cuidado']
  },
  {
    id: 'kapping',
    name: 'Kapping Gel',
    shortDesc: 'Fuerza extrema para tu uña natural.',
    longDesc: 'Una fina capa protectora de gel de alta resistencia que se aplica directamente sobre tu uña. Ideal para uñas débiles o escamadas, aportando una estructura rígida que previene quiebres y asiste en un crecimiento saludable.',
    time: '90 min',
    price: 'Elite',
    tags: ['Nivelación', 'Estructura']
  },
  {
    id: 'nail-art',
    name: 'Nail Art Exclusivo',
    shortDesc: 'Diseños únicos hechos 100% a mano.',
    longDesc: 'Expresión artística sin límites. Desde trazos geométricos minimalistas y detalles metalizados en oro, hasta composiciones complejas hechas a mano alzada. Cada diseño es una obra de arte personalizada para tus manos.',
    time: '30-45 min extra',
    price: 'Bespoke',
    tags: ['Arte', 'Diseño']
  },
  {
    id: 'esmaltado-tradicional',
    name: 'Esmaltado Tradicional',
    shortDesc: 'Cuidado clásico con productos de alta gama.',
    longDesc: 'Manicuría de alta gama con esmaltes clásicos de secado rápido y calidad profesional. Perfecto para quienes disfrutan de cambiar su tono con regularidad sin comprometer la salud ni la respiración natural de la uña.',
    time: '45 min',
    price: 'Clásico',
    tags: ['Clásico', 'Cuidado']
  }
];


// Benefits Data
export const BENEFITS_DATA = [
  {
    title: 'Atención personalizada',
    desc: 'Diseñamos cada servicio a la medida de la anatomía, salud y estilo único de tus manos.',
    icon: Heart
  },
  {
    title: 'Productos profesionales',
    desc: 'Insumos de marcas premium internacionales, hipoalergénicos, libres de crueldad y de alta durabilidad.',
    icon: Award
  },
  {
    title: 'Ambiente cómodo',
    desc: 'Un oasis boutique con música suave, aroma de autor, iluminación cálida y café gourmet de cortesía.',
    icon: Coffee
  },
  {
    title: 'Diseños exclusivos',
    desc: 'Llevamos las últimas tendencias de París, Milán y Nueva York directamente a tus manos.',
    icon: Sparkles
  },
  {
    title: 'Turnos rápidos',
    desc: 'Sistema de reserva ágil e inmediato para garantizarte el horario que mejor se adapte a tu rutina.',
    icon: Clock
  },
  {
    title: 'Excelente atención',
    desc: 'Compromiso absoluto con la puntualidad, la higiene de grado médico y una calidez insuperable.',
    icon: ShieldCheck
  }
];


// Gallery Images

export const GALLERY_DATA = [
  {
    id: 1,
    title: 'Minimalist Nude with Gold Accent',
    category: 'Nail Art',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800'
  },
  {
    id: 2,
    title: 'Elegant Almond Kapping',
    category: 'Kapping Gel',
    image: 'https://images.unsplash.com/photo-1736434518489-0eb84070017f?q=80&w=800'
  },
  {
    id: 3,
    title: 'Classic Red Semi-Permanent',
    category: 'Semi Permanente',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800'
  },
  {
    id: 4,
    title: 'Abstract Metallic Details',
    category: 'Nail Art',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800'
  },
  {
    id: 5,
    title: 'Nude Nivelador Glossy',
    category: 'Kapping Gel',
    image: 'https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?q=80&w=800'
  },
  {
    id: 6,
    title: 'Emerald Luxury Glaze',
    category: 'Semi Permanente',
    image: 'https://images.unsplash.com/photo-1662047919566-ec742f5e15a4?q=80&w=800'
  }
];


// Testimonials
export const TESTIMONIALS_DATA = [
  {
    name: 'Camila Rodriguez',
    review: 'Excelente atención en De\'Paola Studio. Mis uñas quedaron impecables y el kapping gel realmente me cambió la vida. El servicio es sumamente profesional y detallista.',
    rating: 5,
    date: 'Hace 3 días'
  },
  {
    name: 'Valentina Perez',
    review: 'El mejor nail art de Buenos Aires sin dudas. Le llevé una referencia súper difícil y la artista lo superó por completo a mano alzada. El café gourmet de cortesía es un 10.',
    rating: 5,
    date: 'Hace 1 semana'
  },
  {
    name: 'Mariana Sosa',
    review: 'Súper recomendable. Muy profesional, prolijo y puntual. Las medidas de higiene de los instrumentos se notan desde el primer segundo. La durabilidad del semi permanente superó las 3 semanas.',
    rating: 5,
    date: 'Hace 2 semanas'
  }
];