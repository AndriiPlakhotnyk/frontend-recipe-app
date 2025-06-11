import { create } from "zustand";
import { Meal } from "@/types";

interface RecipeFilterState {
  ingredient: string;
  country?: string;
  category?: string;
  recipes: Meal[];
  scrollY: number;
  setIngredient: (ingredient: string) => void;
  setCountry: (country?: string) => void;
  setCategory: (category?: string) => void;
  setRecipes: (recipes: Meal[]) => void;
  setScrollY: (y: number) => void;
  clearFilter: (type: "country" | "category") => void;
}

export const useRecipeStore = create<RecipeFilterState>((set) => ({
  ingredient: "",
  country: undefined,
  category: undefined,
  recipes: [],
  scrollY: 0,
  setIngredient: (ingredient) => set({ ingredient }),
  setCountry: (country) => set({ country }),
  setCategory: (category) => set({ category }),
  setRecipes: (recipes) => set({ recipes }),
  setScrollY: (scrollY) => set({ scrollY }),
  clearFilter: (type) =>
    set((state) => ({
      country: type === "country" ? undefined : state.country,
      category: type === "category" ? undefined : state.category,
    })),
}));
