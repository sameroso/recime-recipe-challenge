"use client";
import { useState } from "react";
import Image from "next/image";
import { Recipe } from "../../dtos/Recipe";
import {
  CardContainer,
  ImageWrapper,
  StyledCard,
  StyledTabs,
  TabEndButton,
  TabMiddleButton,
  TabStartButton,
} from "./styles";
import { Tab } from "@/components";
import { AxiosInstance } from "@/libs/axios";
import { RecipeService } from "@/services";

export interface RecipesListProps {
  recipes: Recipe[];
  error: boolean | undefined;
  recipeService: RecipeService;
  clientApi: AxiosInstance;
}

export function RecipesList(props: RecipesListProps) {
  const [tabId, setTabId] = useState<string>("");

  const [recipes, setRecipes] = useState<Recipe[]>(props.recipes || []);
  const [error, setError] = useState<boolean | undefined>(props.error);

  return (
    <div style={{ margin: "auto" }}>
      <StyledTabs
        value={tabId}
        onChangeTab={(tabId) => setTabId(tabId as string)}
      >
        <Tab tabId="123" component={TabStartButton}>
          Easy
        </Tab>
        <Tab tabId="234" component={TabMiddleButton}>
          Medium
        </Tab>
        <Tab tabId="13" component={TabEndButton}>
          Hard
        </Tab>
      </StyledTabs>
      {error && (
        <div
          onClick={async () => {
            props.recipeService
              .getRecipes(props.clientApi)
              .then((res) => {
                setRecipes(res.data);
                setError(false);
              })
              .catch((e) => {
                setError(true);
                setRecipes([]);
              });
          }}
        >
          Deu ruim pae
        </div>
      )}
      {!error && (
        <CardContainer>
          {recipes.map((recipe) => {
            return (
              <StyledCard key={recipe.name}>
                <ImageWrapper>
                  <Image
                    alt={recipe.name}
                    src={recipe.imageSrc}
                    fill
                    objectFit="cover"
                  />
                </ImageWrapper>
                <div>{recipe.name}</div>
                <div>{recipe.difficulty}</div>
              </StyledCard>
            );
          })}
        </CardContainer>
      )}
    </div>
  );
}
