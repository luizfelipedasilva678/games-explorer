import { it, describe, expect, beforeAll } from "vitest";
import { ListGames } from "../src/frontend/application/list-games";
import GameRepositoryInMemory from "./doubles/game-repository-in-memory.frontend";

describe("List games", () => {
	let listGames: ListGames;

	beforeAll(() => {
		listGames = new ListGames(new GameRepositoryInMemory());
	});

	it("should list games correctly", async () => {
		const result = await listGames.perform();

		expect(result.count).toBeGreaterThan(0);
		expect(result.page).toBe(1);
		expect(result.results.length).toBeGreaterThan(0);
	});

	it("should return all items when pageSize is greater than count", async () => {
		const result = await listGames.perform({
			page: 1,
			pageSize: 20,
		});

		expect(result.count).toBeGreaterThan(0);
		expect(result.page).toBe(1);
		expect(result.results.length).toBe(12);
	});
});
