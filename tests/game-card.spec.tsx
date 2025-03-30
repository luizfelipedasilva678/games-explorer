import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GameCard from "../app/components/GameCard";

describe("Game Card", () => {
	it("should render the game card", () => {
		render(
			<GameCard
				id={1}
				name={"Test test"}
				image={"/image.png"}
				released={"2020-01-01"}
			/>,
		);

		expect(screen.getByText("Test test")).toBeDefined();
	});

	it("should render the game card with no image", () => {
		render(
			<GameCard id={1} name={"Test test"} image={""} released={"2020-01-01"} />,
		);

		expect(screen.getByText("Test test")).toBeDefined();
	});
});
