import styles from "./page.module.css";
import { Recipe } from "./_dtos/Recipe";
import { TrendingRecipes } from "@/templates/RecipeList";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/recipes", {
    next: { revalidate: 3600 },
  });
  const recipes: Recipe[] = await res.json();

  return (
    <main className={styles.main}>
      <TrendingRecipes recipes={recipes} />
    </main>
  );
}
