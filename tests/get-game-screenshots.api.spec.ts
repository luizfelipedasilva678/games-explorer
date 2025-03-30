import { it, describe, expect, beforeEach } from "vitest";
import type { GameRepository } from "../src/api/application/ports";
import GameRepositoryInMemory from "./doubles/game-repository-in-memory.api";
import GetGameScreenshots from "../src/api/application/get-game-screenshots";

describe("Get game screenshots", () => {
	let repository: GameRepository;
	let useCase: GetGameScreenshots;

	beforeEach(() => {
		repository = new GameRepositoryInMemory();
		useCase = new GetGameScreenshots(repository);
	});

	it("should return the screenshots correctly", async () => {
		const screenshots = await useCase.perform({
			id: "1",
		});

		expect(screenshots?.images?.length).toBeGreaterThan(0);
	});

	it("should return an error if game was not found", async () => {
		const screenshots = await useCase.perform({
			id: "-1",
		});

		expect(screenshots instanceof Error).toBe(true);
	});
});
