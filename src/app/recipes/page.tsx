"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getRecipes } from "@/service/recipes-service";

import {
	Container,
	FilterInput,
	RecipeItem,
	RecipeList,
	RecipeName,
	Title,
	FilterGroup,
	FilterTitle,
	ActiveFilters,
	FilterTag,
	DropdownHeader,
	DropdownContainer,
	DropdownContent,
	DropdownItem,
	DropdownButton,
} from "./page.styled";
import { useRecipeStore } from "../../store/recipe.store";

export default function RecipesPage() {
	const {
		ingredient,
		setIngredient,
		country,
		setCountry,
		category,
		setCategory,
		clearFilter,
		recipes,
		setRecipes,
		scrollY,
		setScrollY,
	} = useRecipeStore();

	const [loading, setLoading] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<
		"country" | "category" | null
	>(null);
	const [allCountries, setAllCountries] = useState<string[]>([]);
	const [allCategories, setAllCategories] = useState<string[]>([]);
	const countryRef = useRef<HTMLDivElement>(null);
	const categoryRef = useRef<HTMLDivElement>(null);

	const uniqueValues = (arr: string[]) =>
		Array.from(new Set(arr.filter(Boolean)));

	const toggleDropdown = (type: "country" | "category") => {
		setOpenDropdown((prev) => (prev === type ? null : type));
	};

	const loadRecipes = useCallback(async () => {
		setLoading(true);
		try {
			const data = await getRecipes({
				ingredient: ingredient || undefined,
				country: country || undefined,
				category: category || undefined,
			});

			const meals = data.meals ?? [];
			setRecipes(meals);

			const countries = uniqueValues(meals.map((m) => m.strArea));
			const categories = uniqueValues(meals.map((m) => m.strCategory));
			setAllCountries(countries);
			setAllCategories(categories);
		} catch (e) {
			console.error("Error loading recipes:", e);
			setRecipes([]);
		} finally {
			setLoading(false);
		}
	}, [ingredient, country, category, setRecipes]);

	useEffect(() => {
		loadRecipes();
	}, [loadRecipes]);

	useEffect(() => {
		window.scrollTo(0, scrollY);
		const saveScroll = () => setScrollY(window.scrollY);
		window.addEventListener("beforeunload", saveScroll);
		return () => {
			saveScroll();
			window.removeEventListener("beforeunload", saveScroll);
		};
	}, [scrollY, setScrollY]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as Node;
			console.log("TARGET: ", target, countryRef.current?.contains(target));
			if (
				(countryRef.current && countryRef.current.contains(target)) ||
				(categoryRef.current && categoryRef.current.contains(target))
			) {
				return;
			}

			setOpenDropdown(null);
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		loadRecipes();
	};

	return (
		<Container>
			<Title>Recipe Book</Title>

			<form onSubmit={handleSubmit}>
				<FilterInput
					type="text"
					placeholder="Filter by ingredient"
					value={ingredient}
					onChange={(e) => setIngredient(e.target.value)}
				/>
			</form>

			<FilterGroup>
				<FilterTitle>Filtered by:</FilterTitle>
				<ActiveFilters>
					{country && (
						<FilterTag>
							{country}{" "}
							<button onClick={() => clearFilter("country")}>✕</button>
						</FilterTag>
					)}
					{category && (
						<FilterTag>
							{category}{" "}
							<button onClick={() => clearFilter("category")}>✕</button>
						</FilterTag>
					)}
				</ActiveFilters>
			</FilterGroup>

			<DropdownContainer ref={countryRef}>
				<DropdownHeader onClick={() => toggleDropdown("country")}>
					Filter by Country
				</DropdownHeader>
				<DropdownContent $isOpen={openDropdown === "country"}>
					<ul>
						{allCountries.map((c) => (
							<DropdownItem key={c}>
								<DropdownButton
									onClick={() => {
										setCountry(c);
										setOpenDropdown(null);
									}}
								>
									{c}
								</DropdownButton>
							</DropdownItem>
						))}
					</ul>
				</DropdownContent>
			</DropdownContainer>

			<DropdownContainer ref={categoryRef}>
				<DropdownHeader onClick={() => toggleDropdown("category")}>
					Filter by Category
				</DropdownHeader>
				<DropdownContent $isOpen={openDropdown === "category"}>
					{allCategories.map((cat) => (
						<DropdownItem key={cat}>
							<DropdownButton
								onClick={() => {
									setCategory(cat);
									setOpenDropdown(null);
								}}
							>
								{cat}
							</DropdownButton>
						</DropdownItem>
					))}
				</DropdownContent>
			</DropdownContainer>

			{loading && <p>Loading...</p>}
			{!loading && recipes.length === 0 && <p>No recipes found.</p>}

			<RecipeList>
				{recipes.map((meal) => (
					<RecipeItem key={meal.idMeal}>
						<Link
							href={`/recipes/${meal.idMeal}`}
							onClick={() => setScrollY(window.scrollY)}
						>
							<RecipeName>{meal.strMeal}</RecipeName>
						</Link>
						<Image
							src={meal.strMealThumb}
							alt={meal.strMeal}
							width={200}
							height={200}
							style={{ objectFit: "cover" }}
						/>
					</RecipeItem>
				))}
			</RecipeList>
		</Container>
	);
}
