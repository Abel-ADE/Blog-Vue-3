export interface Tag {
  id: string; // ID única (puede ser un UUID o un slug)
  name: string; // Nombre visible (ej: "Vue", "JavaScript")
  color?: string; // Color opcional para visualización (ej: "#42b983")
  description?: string; // Breve descripción de la tag (opcional)
  createdAt: string; // Fecha de creación
}
