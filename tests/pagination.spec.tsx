import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Pagination from "../app/components/Pagination";

describe("Pagination", () => {
	it("should render the pagination if the prev button disabled", () => {
		render(
			<Pagination
				isFirstPage={true}
				isLastPage={false}
				nextPage={2}
				prevPage={1}
			/>,
		);

		const prevButton = screen.getByText("Previous page");

		expect(prevButton).toBeDefined();
		expect(prevButton).toHaveClass("btn-disabled");
	});

	it("should render the pagination if the next button disabled", () => {
		render(
			<Pagination
				isFirstPage={false}
				isLastPage={true}
				nextPage={2}
				prevPage={1}
			/>,
		);

		const nextButton = screen.getByText("Next");

		expect(nextButton).toBeDefined();
		expect(nextButton).toHaveClass("btn-disabled");
	});
});
