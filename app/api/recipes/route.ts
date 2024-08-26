import { recipeListMock } from "@/mocks";

export async function GET() {
  return Response.json(recipeListMock);
}
