import { it, describe, expect, beforeEach } from "vitest";
import { GetGame } from "../src/api/application/get-game";
import GameRepositoryInMemory from "./doubles/game-repository-in-memory";
import type { Game } from "../src/entities";
import type { GameNotFoundError } from "../src/api/application/get-game/errors";

describe("Get game", () => {
	let getGame: GetGame;

	beforeEach(() => {
		getGame = new GetGame(new GameRepositoryInMemory());
	});

	it("should return the game correctly", async () => {
		const result = await getGame.perform({
			id: "1",
		});

		expect(result).not.toBeNull();
		expect((result as Game).id).toBe(1);
	});

	it("should return an error if the game does not exist", async () => {
		const result = await getGame.perform({
			id: "-1",
		});

		expect((result as GameNotFoundError).message).toBe("Game not found");
	});
});
