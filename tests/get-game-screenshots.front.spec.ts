import { it, describe, expect, beforeAll } from "vitest";
import type { GameRepository } from "../src/frontend/application/ports";
import GetGameScreenShots from "../src/frontend/application/get-game-screenshot/get-game-screenshot";
import GameRepositoryInMemory from "./doubles/game-repository-in-memory.frontend";

describe("Get game screenshots", () => {
	let repository: GameRepository;
	let useCase: GetGameScreenShots;

	beforeAll(() => {
		repository = new GameRepositoryInMemory();
		useCase = new GetGameScreenShots(repository);
	});

	it("should return the screenshots correctly", async () => {
		const screenshots = await useCase.perform({
			id: "1",
		});

		expect(screenshots?.images?.length).toBeGreaterThan(0);
	});

	it("should return an error if the game does not exist", async () => {
		const screenshots = await useCase.perform({
			id: "-1",
		});

		expect(screenshots instanceof Error).toBe(true);
	});
});
