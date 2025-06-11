"use client";

import Link from "next/link";
import { Meal } from "@/types";
import { Sidebar as SidebarStyled, SidebarItem } from "./page.styled";

type SidebarProps = {
	category: string;
	recipes: Meal[];
};

export default function Sidebar({ category, recipes }: SidebarProps) {
	return (
		<SidebarStyled>
			<h3>More in {category}</h3>
			{recipes.map((r) => (
				<Link href={`/recipes/${r.idMeal}`} key={r.idMeal}>
					<SidebarItem>{r.strMeal}</SidebarItem>
				</Link>
			))}
		</SidebarStyled>
	);
}
