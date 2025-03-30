import { describe, it, expect } from "vitest";
import Search from "../app/search/[slug]/page";
import { render, screen } from "@testing-library/react";
import "./utils/loadEnvs";

describe("Search Page", () => {
	it("should render the search page", async () => {
		const page = await Search({
			params: Promise.resolve({ slug: "Mortal Kombat" }),
			searchParams: Promise.resolve({}),
		});

		render(page);

		expect(screen.getByText("Mortal Kombat")).toBeDefined();
	});
});
