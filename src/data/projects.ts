export interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  demo?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'E-Commerce App',
    description:
      'Tienda online completa con carrito de compras, autenticación y pasarela de pagos.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/',
    demo: 'https://demo.com',
  },
  {
    title: 'Operative System',
    description:
      'Aplicación de gestión de tareas con drag & drop, filtros y colaboración en tiempo real.',
    tags: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/',
    demo: 'https://demo.com',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Dashboard del clima con gráficos interactivos y pronóstico de 7 días usando la API de OpenWeather.',
    tags: ['React', 'Chart.js', 'REST API', 'Tailwind'],
    github: 'https://github.com/',
  },
  {
    title: 'Blog Platform',
    description:
      'Plataforma de blogging con editor de texto enriquecido, tags y sistema de comentarios.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/',
    demo: 'https://demo.com',
  },
]
