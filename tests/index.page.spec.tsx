import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../app/page";
import "./utils/loadEnvs";

describe("Index", () => {
	it("should render the index correctly", async () => {
		const page = await Home({ searchParams: Promise.resolve({}) });

		render(page);

		const cards = document.querySelectorAll(".card");

		expect(cards.length).toEqual(12);
	});
});
