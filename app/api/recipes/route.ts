import recipes from "../data/recipes.json";
export async function GET() {
  return Response.json(recipes);
}
