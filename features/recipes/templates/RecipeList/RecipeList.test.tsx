import "@testing-library/jest-dom";
import { RecipesList } from "./RecipeList";
import { render, screen } from "@testing-library/react";
import { Recipe } from "@/dtos/Recipe";
import { recipeListMock } from "@/mocks";
import { AxiosResponse } from "@/libs/axios";
import "jest-styled-components";
import { AppProvider } from "@/providers/appProvider";

const mockRequest = async () => {
  return new Promise<AxiosResponse<Recipe[]>>((res, rej) => {
    return setTimeout(() => {
      return res({
        config: {} as AxiosResponse["config"],
        data: recipeListMock as Recipe[],
        headers: {},
        status: 200,
        statusText: "",
      });
    });
  });
};

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <AppProvider>
        <RecipesList
          recipes={recipeListMock as Recipe[]}
          refetch={jest.fn()}
          status="success"
          recipeService={{
            getRecipes: mockRequest,
          }}
        />
      </AppProvider>
    );

    recipeListMock.forEach((recipe) => {
      const card = screen.getByTestId(recipe.id);
      expect(card).toBeInTheDocument();
    });
  });
});
