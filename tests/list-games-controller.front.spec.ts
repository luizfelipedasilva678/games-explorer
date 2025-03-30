import { it, describe, expect, beforeEach } from "vitest";
import ListGamesController from "../src/frontend/presentation/controllers/list-games-controller";
import { ListGames } from "../src/frontend/application/list-games";
import GameRepositoryInMemory from "./doubles/game-repository-in-memory.frontend";
import DateFormatterInLocaleDateString from "../src/frontend/external/date-formatter/date-formatter";

describe("List games controller", () => {
	let controller: ListGamesController;

	beforeEach(() => {
		controller = new ListGamesController(
			new ListGames(new GameRepositoryInMemory()),
			new DateFormatterInLocaleDateString(),
		);
	});

	it("should list games correctly", async () => {
		const result = await controller.perform({
			page: 1,
			pageSize: 10,
		});

		expect(result.count).toBeGreaterThan(0);
	});

	it("should return all items when pageSize is greater than count", async () => {
		const result = await controller.perform({
			page: 1,
			pageSize: 20,
		});

		expect(result.count).toBeGreaterThan(0);
		expect(result.results.length).toBe(12);
	});

	it("should return an error if something goes wrong", async () => {
		controller = new ListGamesController();
		const result = await controller.perform({
			page: -1,
			pageSize: 10,
		});

		expect((result as Error).message).toBeDefined();
	});
});
