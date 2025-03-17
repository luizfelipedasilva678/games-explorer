import React from "react";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../app/components/Footer";

describe("Footer", () => {
	it("should render the footer", () => {
		render(<Footer />);

		expect(screen.getByText("Games Explorer")).toBeDefined();
	});
});
