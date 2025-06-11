import axios from 'axios';
import { Meal, RecipesResponse } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3030';

type Filters = {
  ingredient?: string;
  country?: string;
  category?: string;
};

export const getRecipes = async (filters: Filters): Promise<RecipesResponse> => {
  const params = new URLSearchParams();

  if (filters.ingredient) params.append('ingredient', filters.ingredient);
  if (filters.country) params.append('country', filters.country);
  if (filters.category) params.append('category', filters.category);

  const res = await axios.get<RecipesResponse>(`${API_BASE_URL}/recipes?${params.toString()}`);
  return res.data;
};

export const getRecipeById = async (id: string): Promise<Meal | null> => {
  const res = await axios.get<Meal>(`${API_BASE_URL}/recipes/${id}`);
  return res.data ?? null;
};
