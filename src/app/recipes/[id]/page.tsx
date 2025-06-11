"use client";

import { use, useCallback, useEffect, useState } from "react";
import { getRecipeById, getRecipes } from "@/service/recipes-service";
import { Meal } from "@/types";
import Image from "next/image";
import {
	Container,
	InfoText,
	IngredientItem,
	IngredientsList,
	Instructions,
	Title,
	YoutubeLink,
	ContentWrapper,
} from "./page.styled";
import Sidebar from "./sidebar.component";
import NavigationButtons from "@/components/navigation/navigation-buttons.component";

export default function RecipeDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const [recipe, setRecipe] = useState<Meal | null>(null);
	const [relatedRecipes, setRelatedRecipes] = useState<Meal[]>([]);
	const [loading, setLoading] = useState(true);
	const { id } = use(params);

	const loadRecipe = useCallback(async () => {
		setLoading(true);
		try {
			const data = await getRecipeById(String(id));
			setRecipe(data);

			if (data?.strCategory) {
				const recipesRes = await getRecipes({ category: data.strCategory });
				const filtered = recipesRes.meals.filter(
					(m) => m.idMeal !== data.idMeal
				);
				setRelatedRecipes(filtered);
			}
		} catch (e) {
			console.error("Failed to fetch recipe:", e);
		} finally {
			setLoading(false);
		}
	}, [id]);

	useEffect(() => {
		loadRecipe();
	}, [loadRecipe]);

	if (loading) {
		return (
			<Container>
				<p>Loading...</p>
			</Container>
		);
	}

	if (!recipe) {
		return (
			<Container>
				<p>Recipe not found.</p>
			</Container>
		);
	}

	const ingredients = Array.from({ length: 20 }, (_, i) => ({
		ingredient: recipe[`strIngredient${i + 1}` as keyof Meal],
		measure: recipe[`strMeasure${i + 1}` as keyof Meal],
	})).filter((i) => i.ingredient && i.ingredient.trim() !== "");

	return (
		<Container>
			<ContentWrapper>
				<div>
					<NavigationButtons />
					<Title>{recipe.strMeal}</Title>
					<Image
						src={recipe.strMealThumb}
						alt={recipe.strMeal}
						width={400}
						height={300}
						style={{ borderRadius: "8px" }}
					/>
					<InfoText>
						<strong>Category:</strong> {recipe.strCategory}
					</InfoText>
					<InfoText>
						<strong>Area:</strong> {recipe.strArea}
					</InfoText>

					<h2>Ingredients</h2>
					<IngredientsList>
						{ingredients.map((ing, index) => (
							<IngredientItem key={index}>
								{ing.ingredient} - {ing.measure}
							</IngredientItem>
						))}
					</IngredientsList>

					<h2>Instructions</h2>
					<Instructions>{recipe.strInstructions}</Instructions>

					{recipe.strYoutube && (
						<YoutubeLink
							href={recipe.strYoutube}
							target="_blank"
							rel="noopener noreferrer"
						>
							Watch on YouTube
						</YoutubeLink>
					)}
				</div>

				<Sidebar category={recipe.strCategory} recipes={relatedRecipes} />
			</ContentWrapper>
		</Container>
	);
}
