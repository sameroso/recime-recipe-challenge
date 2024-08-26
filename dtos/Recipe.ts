export interface Recipe {
  name: string;
  position: number;
  difficulty: "medium" | "hard" | "easy";
  imageSrc: string;
  id: string;
}
