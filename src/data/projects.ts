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
    title: 'BadReview — Plataforma Web Full Stack',
    description:
      'Plataforma colaborativa de reseñas de videojuegos. Participé en backend, API, base de datos, frontend en Blazor y en tareas de deploy/mantenimiento.',
    tags: ['.NET', 'ASP.NET Core', 'Blazor', 'SQL', 'DevOps'],
    github: 'https://github.com/BadReview-Org/BadReview',
    demo: 'https://bad-review.tech',
  },
  {
    title: 'NachOS — Sistema Operativo para MIPS',
    description:
      'Implementé características fundamentales de sistemas operativos: memoria virtual, filesystem, system calls, sincronización y scheduler de procesos.',
    tags: ['C++', 'Operating Systems', 'Concurrency', 'MIPS'],
    github: 'https://github.com/lautaroperalta/NachOS',
  },
  {
    title: 'Graphix — DSL de Grafos en Haskell',
    description:
      'Desarrollé un lenguaje de dominio específico para modelar grafos dirigidos y no dirigidos, incluyendo algoritmos para ciclos Hamiltonianos y caminos Eulerianos.',
    tags: ['Haskell', 'DSL', 'Graph Theory', 'Backtracking'],
    github: 'https://github.com/lautaroperalta/graphix',
  },
]
