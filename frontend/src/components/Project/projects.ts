export interface Project {
  id: number;
  name: string;
  images: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Proje 1',
    images: ['/assets/1.jpg'],
    description: 'Proje 1 Açıklaması',
  },
  {
    id: 2,
    name: 'Proje 2',
    images: ['/assets/2.jpg', '/assets/1.jpg', '/assets/3.jpeg'],
    description: 'Proje 2 Açıklaması',
  },
  {
    id: 3,
    name: 'Proje 3',
    images: ['/assets/3.jpeg'],
    description: 'Proje 3 Açıklaması',
  },
  {
    id: 4,
    name: 'Proje 4',
    images: ['/assets/4.jpg'],
    description: 'Proje 4 Açıklaması',
  },
  {
    id: 5,
    name: 'Proje 5',
    images: ['/assets/5.jpg'],
    description: 'Proje 5 Açıklaması',
  },
];
