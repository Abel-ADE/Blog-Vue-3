export interface Translation {
  locale: string; // 'es', 'en', 'fr'...
  title: string; // Título del artículo
  excerpt: string; // Extracto corto para mostrar en la vista previa
  contentPath: string; // Ruta del contenido del artículo
}
