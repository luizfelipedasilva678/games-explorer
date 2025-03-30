import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Page from "../app/game/[id]/page";
import "./utils/loadEnvs";

describe("Game Page", () => {
	it("should render the game page", async () => {
		const page = await Page({
			params: Promise.resolve({ id: "3498" }),
		});

		render(page);

		expect(screen.getByText("Grand Theft Auto V")).toBeDefined();
	});
});
