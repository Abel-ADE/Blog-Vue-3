import type { Translation } from './Translation';

export interface Post {
  id: number; // UUID o slug único
  slug: string; // Slug (URL) del artículo
  author: string; // Nombre del autor
  createdAt: string; // Fecha de creación (ISO format)
  updatedAt?: string; // Fecha de última edición (opcional)
  image: string; // Imagen destacada
  tags?: string[]; // Etiquetas o categorías
  isPublished: boolean; // Estado de publicación
  translations: Translation[];
}
