export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: 'code' | 'layers' | 'cart' | 'briefcase' | 'chart';
  title: string;
  description: string;
  points: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  result?: string;
  tags: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface Technology {
  id: string;
  name: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const site = {
  name: 'Beira',
  domain: 'beira.ar',
  url: import.meta.env.SITE.replace(/\/$/, '') + import.meta.env.BASE_URL,
  title: 'Consultora tecnológica B2B | Software a medida y productos digitales',
  description:
    'Beira es una consultora tecnológica B2B: desarrollamos software a medida, productos digitales, e-commerce y consultoría IT para empresas que quieren escalar. Conversá con nuestro equipo por WhatsApp.',
  ogTitle: 'Beira — Consultora tecnológica B2B',
  ogDescription:
    'Software a medida, productos digitales, e-commerce y consultoría IT para empresas. Conversá con nuestro equipo por WhatsApp.',
  contact: {
    email: 'hola@beira.ar',
    whatsappNumber: '5491100000000',
  },
  whatsappMessage:
    'Hola Beira, visité el sitio y quiero conversar sobre un proyecto tecnológico.',
  address: 'Argentina',
} as const;

export const nav: NavItem[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export const services: Service[] = [
  {
    id: 'productos-digitales',
    icon: 'layers',
    title: 'Productos digitales',
    description:
      'Acompañamos a empresas a crear, lanzar y evolucionar productos digitales desde el MVP hasta escala, con foco en el usuario y en el negocio.',
    points: ['Definición de producto y MVP', 'Arquitectura escalable', 'Evolución continua basada en datos'],
  },
  {
    id: 'e-commerce',
    icon: 'cart',
    title: 'E-commerce',
    description:
      'Plataformas de venta online sólidas, optimizadas para convertir visitas en ventas y operar a escala sin fricción.',
    points: ['Implementación y migraciones', 'Integración con pagos y logística', 'Optimización de conversión y performance'],
  },
  {
    id: 'gestion-de-proyectos',
    icon: 'briefcase',
    title: 'Gestión de proyectos',
    description:
      'Lideramos el ciclo completo del proyecto con metodologías ágiles, plazos claros, comunicación constante y entregas incrementales.',
    points: ['Planificación y alcance', 'Seguimiento ágil y reportes', 'Gestión de riesgos y entregas incrementales'],
  },
  {
    id: 'consultoria-it',
    icon: 'chart',
    title: 'Consultoría IT',
    description:
      'Evaluamos arquitectura, procesos y equipos para ayudarte a tomar decisiones tecnológicas informadas y seguras.',
    points: ['Auditoría y diagnóstico técnico', 'Definición de stack y arquitectura', 'Acompañamiento a equipos internos'],
  },
];

export const caseStudies: CaseStudy[] = [];

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export const clients: Client[] = [
  { id: 'abaco', name: 'Ábaco', logo: import.meta.env.BASE_URL + 'logos/abaco.webp' },
  { id: 'arcorencasa', name: 'Arcorencasa', logo: import.meta.env.BASE_URL + 'logos/arcorencasa.webp' },
  { id: 'biru', name: 'Biru', logo: import.meta.env.BASE_URL + 'logos/biru.webp' },
  { id: 'camile', name: 'Camile', logo: import.meta.env.BASE_URL + 'logos/camile.webp' },
  { id: 'gyms-ar', name: 'Gyms AR', logo: import.meta.env.BASE_URL + 'logos/gyms-ar.webp' },
  { id: 'mico', name: 'Mico', logo: import.meta.env.BASE_URL + 'logos/mico.webp' },
  { id: 'saphirus', name: 'Saphirus', logo: import.meta.env.BASE_URL + 'logos/saphirus.webp' },
  { id: 'sola-alsina', name: 'Sola Alsina', logo: import.meta.env.BASE_URL + 'logos/sola-alsina.webp' },
  { id: 'speakchill', name: 'SpeakChill', logo: import.meta.env.BASE_URL + 'logos/speakchill.webp' },
  { id: 'amnistia', name: 'Amnistía Argentina', logo: import.meta.env.BASE_URL + 'logos/amnistia.webp' },
  { id: 'roby', name: 'Roby', logo: import.meta.env.BASE_URL + 'logos/roby.webp' },
  { id: 'fontagro', name: 'Fontagro', logo: import.meta.env.BASE_URL + 'logos/fontagro.webp' },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'descubrimiento',
    title: 'Descubrimiento',
    description:
      'Entendemos el problema, el contexto y los objetivos de negocio para definir el alcance correcto antes de escribir código.',
  },
  {
    id: 'diseno',
    title: 'Diseño',
    description:
      'Prototipamos la solución y validamos la experiencia de usuario antes de avanzar a desarrollo.',
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo',
    description:
      'Construimos en ciclos ágiles con entregas incrementales, code review y pruebas continuas.',
  },
  {
    id: 'deploy',
    title: 'Deploy',
    description:
      'Desplegamos, medimos y evolucionamos el producto con monitoreo, documentación y soporte continuo.',
  },
];

export const technologies: Technology[] = [
  { id: 'php', name: 'PHP' },
  { id: 'laravel', name: 'Laravel' },
  { id: 'wordpress', name: 'WordPress' },
  { id: 'woocommerce', name: 'WooCommerce' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'react', name: 'React.js' },
  { id: 'jquery', name: 'jQuery' },
  { id: 'rest', name: 'REST APIs' },
  { id: 'mysql', name: 'MySQL' },
  { id: 'docker', name: 'Docker' },
  { id: 'git', name: 'Git / GitHub' },
  { id: 'linux', name: 'Linux' },
  { id: 'bash', name: 'Bash' },
  { id: 'jest', name: 'Jest' },
  { id: 'material-ui', name: 'Material UI' },
  { id: 'supabase', name: 'Supabase' },
  { id: 'n8n', name: 'n8n' },
];

export const team: TeamMember[] = [];

export const faq: FaqItem[] = [
  {
    id: 'como-empezamos',
    question: '¿Cómo empezamos a trabajar con ustedes?',
    answer:
      'Con una primera conversación por WhatsApp para entender tu contexto y tus objetivos. Con esa información definimos un plan de acción y un alcance claro antes de comenzar.',
  },
  {
    id: 'para-que-empresas',
    question: '¿Para qué tipo de empresas trabajan?',
    answer:
      'Trabajamos con empresas y organizaciones de distintos tamaños: equipos que necesitan construir su primer producto digital y compañías consolidadas que quieren desarrollar, mejorar o escalar sus soluciones tecnológicas.',
  },
  {
    id: 'sistema-existente',
    question: '¿Qué pasa si ya tenemos un sistema funcionando?',
    answer:
      'Podemos evaluarlo, integrarlo o evolucionarlo. Hacemos un diagnóstico técnico inicial para entender el punto de partida y proponer el camino más seguro.',
  },
  {
    id: 'tiempos-presupuestos',
    question: '¿Cómo manejan los tiempos y los presupuestos?',
    answer:
      'Planificación clara, alcance definido y entregas incrementales. Reportamos avances con transparencia para que siempre sepas qué se está construyendo y qué implica en tiempo y costo.',
  },
  {
    id: 'quien-trabaja',
    question: '¿Quién trabaja en el proyecto?',
    answer:
      'Un equipo senior multidisciplinario de ingeniería, producto y diseño, con un referente dedicado que actúa como punto de contacto directo durante todo el proyecto.',
  },
  {
    id: 'soporte-post-deploy',
    question: '¿Qué pasa después del lanzamiento?',
    answer:
      'Entregamos documentación, transferencia de conocimiento y soporte para que el producto continúe evolucionando con tu equipo o con nosotros.',
  },
];
