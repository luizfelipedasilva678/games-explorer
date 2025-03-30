import { it, describe, expect, beforeAll } from "vitest";
import type { GameRepository } from "../src/frontend/application/ports";
import GameRepositoryInMemory from "./doubles/game-repository-in-memory.frontend";
import GetGame from "../src/frontend/application/get-game";

describe("Get game", () => {
	let repository: GameRepository;
	let useCase: GetGame;

	beforeAll(() => {
		repository = new GameRepositoryInMemory();
		useCase = new GetGame(repository);
	});

	it("should return the game correctly", async () => {
		const result = await useCase.perform({
			id: "1",
		});

		expect(result).not.toBeNull();
		expect((result as any).id).toBe(1);
	});

	it("should return an error if the game does not exist", async () => {
		const result = await useCase.perform({
			id: "-1",
		});

		expect(result instanceof Error).toBe(true);
	});
});
