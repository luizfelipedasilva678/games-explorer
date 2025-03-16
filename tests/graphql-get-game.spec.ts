import { it, describe, expect, beforeEach } from "vitest";
import { GetGame } from "../src/api/application/get-game";
import type { Game } from "../src/entities";
import GamesRepositoryInMemory from "./doubles/game-repository-in-memory";
import { GraphqlGetGame } from "../src/api/presentation/controllers";
import type { ErrorObject } from "../src/api/presentation/ports";

describe("GraphqlGetGame", () => {
	let getGameController: GraphqlGetGame;

	beforeEach(() => {
		getGameController = new GraphqlGetGame(
			new GetGame(new GamesRepositoryInMemory()),
		);
	});

	it("should the games correctly", async () => {
		const result = (await getGameController.perform({
			id: "1",
		})) as Game;

		expect(result.id).toBeGreaterThan(0);
	});

	it("should return an error object the game does not exist", async () => {
		const result = (await getGameController.perform({
			id: "-100",
		})) as ErrorObject;

		expect(result.statusCode).toBe(404);
	});

	it("should return an error object if something goes wrong", async () => {
		getGameController = new GraphqlGetGame();
		const result = (await getGameController.perform({
			id: "-100",
		})) as ErrorObject;

		expect(result.statusCode).toBe(500);
	});
});
