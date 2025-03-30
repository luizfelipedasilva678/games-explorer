import { it, describe, beforeEach, expect } from "vitest";
import GetGameController from "../src/frontend/presentation/controllers/get-game-controller";
import GetGame from "../src/frontend/application/get-game";
import GameRepositoryInMemory from "./doubles/game-repository-in-memory.frontend";
import type { ErrorObject } from "../src/frontend/presentation/ports";

describe("Get Game Controller", () => {
	let controller: GetGameController;

	beforeEach(() => {
		controller = new GetGameController(
			new GetGame(new GameRepositoryInMemory()),
		);
	});

	it("should return the game correctly", async () => {
		const result = await controller.perform({
			id: "1",
		});

		expect(result).not.toBeNull();
	});

	it("should return an error if the game does not exist", async () => {
		const result = await controller.perform({
			id: "-1",
		});

		expect((result as ErrorObject).message).toBeDefined();
	});
});
