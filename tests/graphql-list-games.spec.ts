import { it, describe, expect, beforeEach } from "vitest";
import type { ListGamesData } from "../src/api/application/ports";
import { GraphqlListGames } from "../src/api/presentation/controllers";
import { ListGames } from "../src/api/application/list-games";
import GamesRepositoryInMemory from "./doubles/game-repository-in-memory.api";

describe("GraphqlListGames", () => {
	let listGamesController: GraphqlListGames;

	beforeEach(() => {
		listGamesController = new GraphqlListGames(
			new ListGames(new GamesRepositoryInMemory()),
		);
	});

	it("should the games correctly", async () => {
		const result = (await listGamesController.perform({
			page: 1,
			pageSize: 10,
		})) as ListGamesData;

		expect(result.count).toBeGreaterThan(0);
		expect(result.page).toBe(1);
		expect(result.results.length).toBeGreaterThan(0);
	});

	it("should return an error object if something goes wrong", async () => {
		listGamesController = new GraphqlListGames();
		const result = await listGamesController.perform({
			page: -1,
			pageSize: 10,
		});

		expect("message" in result).toBe(true);
	});
});
