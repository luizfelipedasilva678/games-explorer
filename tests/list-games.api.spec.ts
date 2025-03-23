import { it, describe, expect, beforeEach } from "vitest";
import { ListGames } from "../src/api/application/list-games";
import GamesRepositoryInMemory from "./doubles/game-repository-in-memory";

describe("List games", () => {
	let listGames: ListGames;

	beforeEach(() => {
		listGames = new ListGames(new GamesRepositoryInMemory());
	});

	it("should list games correctly", async () => {
		const result = await listGames.perform();

		expect(result.count).toBeGreaterThan(0);
		expect(result.page).toBe(1);
		expect(result.results.length).toBeGreaterThan(0);
	});

	it("should paginate games correctly", async () => {
		const result = await listGames.perform({
			page: 2,
			pageSize: 10,
		});

		expect(result.count).toBeGreaterThan(0);
		expect(result.page).toBe(2);
		expect(result.results.length).toBe(2);
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
