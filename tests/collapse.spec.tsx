import { it, describe, expect } from "vitest";
import Collapse from "../app/components/Collapse";
import { render, screen } from "@testing-library/react";

describe("Collapse", () => {
	it("should render the collapse", () => {
		render(<Collapse content={"content"} title={"title"} />);

		expect(screen.getByText("title")).toBeDefined();
	});
});
