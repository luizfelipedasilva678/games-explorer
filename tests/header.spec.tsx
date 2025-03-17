import React from "react";
import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../app/components/Header";

const mocks = vi.hoisted(() => {
	const push = vi.fn();

	return {
		push,
	};
});

vi.mock("next/navigation", () => ({
	useRouter: () => ({
		push: mocks.push,
	}),
}));

describe("Header", () => {
	it("should render the header", () => {
		render(<Header />);

		expect(screen.getByText("Games Explorer")).toBeDefined();
	});

	it("should open the searchbar on click", async () => {
		render(<Header />);

		const searchButton = screen.getByRole("button");

		await userEvent.click(searchButton);

		expect(screen.getByPlaceholderText("Search")).toBeDefined();
	});

	it("should call push when input is filled", async () => {
		render(<Header />);

		const searchButton = screen.getByRole("button");
		await userEvent.click(searchButton);

		const input = screen.getByPlaceholderText("Search");
		await userEvent.type(input, "test");
		await userEvent.click(searchButton);

		expect(mocks.push).toHaveBeenCalled();
	});
});
