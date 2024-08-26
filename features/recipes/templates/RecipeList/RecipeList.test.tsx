import "@testing-library/jest-dom";
import { RecipesList } from "./RecipeList";
import { render, screen } from "@testing-library/react";
import { Recipe } from "@/dtos/Recipe";
import { recipeListMock, recipeServicesSuccessMock } from "@/mocks";
import "jest-styled-components";
import { AppProvider } from "@/providers/appProvider";

describe("Page", () => {
  it("should render cards succesully when status is success", () => {
    render(
      <AppProvider>
        <RecipesList
          recipes={recipeListMock as Recipe[]}
          refetch={jest.fn()}
          status="success"
          recipeService={{
            getRecipes: recipeServicesSuccessMock.getRecipes,
          }}
        />
      </AppProvider>
    );

    recipeListMock.forEach((recipe) => {
      const card = screen.getByTestId(recipe.id);
      expect(card).toBeInTheDocument();
    });
  });

  it("should sekeleton cards succesully when status is pending", () => {
    render(
      <AppProvider>
        <RecipesList
          recipes={undefined}
          refetch={jest.fn()}
          status="pending"
          recipeService={{
            getRecipes: recipeServicesSuccessMock.getRecipes,
          }}
        />
      </AppProvider>
    );

    Array(9).forEach((recipe, index) => {
      const skeletonCard = screen.getByTestId(index);
      expect(skeletonCard).toBeInTheDocument();
    });
  });

  it("should show error when status is error", () => {
    render(
      <AppProvider>
        <RecipesList
          recipes={undefined}
          refetch={jest.fn()}
          status="error"
          recipeService={{
            getRecipes: recipeServicesSuccessMock.getRecipes,
          }}
        />
      </AppProvider>
    );

    const skeletonCard = screen.getByTestId("error_loading_recipes");
    expect(skeletonCard).toBeInTheDocument();
  });

  it("should call refetch clicking on reload recipes button", () => {
    const stub = jest.fn();
    render(
      <AppProvider>
        <RecipesList
          recipes={undefined}
          refetch={stub}
          status="error"
          recipeService={{
            getRecipes: recipeServicesSuccessMock.getRecipes,
          }}
        />
      </AppProvider>
    );

    screen.getByTestId("reload_recipes_button").click();
    expect(stub).toHaveBeenCalledTimes(1);
  });
});
