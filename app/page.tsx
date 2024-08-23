"use client";
import { useEffect } from "react";
import { Tab, Tabs, DefaultTabButtons } from "./_components";
import { useState } from "react";
import styles from "./page.module.css";
import { Recipe } from "./_dtos/Recipe";

export default function Home() {
  const [tabId, setTabId] = useState("123");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const x = async () => {
      const res = await fetch("http://localhost:3000/api/recipes");
      const burgers = await res.json();
      setRecipes(burgers);
    };
    x();
  }, []);
  return (
    <main className={styles.main}>
      <div>
        <Tabs value={tabId} onChangeTab={(tabId) => setTabId(tabId as string)}>
          <Tab
            tabId="123"
            ButtonProps={{ children: "tab1" }}
            component={DefaultTabButtons.start}
          />
          <Tab
            tabId="234"
            ButtonProps={{ children: "tab2" }}
            component={DefaultTabButtons.middle}
          />
          <Tab
            tabId="13"
            ButtonProps={{ children: "tab5" }}
            component={DefaultTabButtons.end}
          />
        </Tabs>
        <div>
          {recipes?.map((recipe) => {
            return (
              <div key={recipe.name}>
                <p>{recipe.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
