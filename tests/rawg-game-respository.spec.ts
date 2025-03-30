import { it, describe, expect, beforeEach } from "vitest";
import RawgGameRepository from "../src/api/external/repositories/rawg/rawg-game-repository";
import "./utils/loadEnvs";

describe("RawgGameRepository", () => {
	let repository: RawgGameRepository;

	beforeEach(() => {
		repository = new RawgGameRepository();
	});

	it("should return the games correctly", async () => {
		const games = await repository.getGames({
			page: 1,
			pageSize: 10,
		});

		expect(games.results.length).toBe(10);
	});

	it("should return the game screenshots correctly", async () => {
		const screenshots = await repository.getGameScreenshots({
			id: "3328",
		});

		expect(screenshots?.images.length).toBeGreaterThan(0);
	});

	it("should return an error if the game screenshots are not found", async () => {
		const screenshots = await repository.getGameScreenshots({
			id: "-10",
		});

		expect(screenshots).toBeNull();
	});

	it("should bring the games by query correctly", async () => {
		const games = await repository.getGames({
			query: "mortal kombat",
			page: 1,
			pageSize: 12,
		});

		expect(games.results.length).toBe(12);
		expect(games.results[0].name).toMatch(/mortal/i);
	});

	it("should return the game correctly", async () => {
		const result = await repository.getGame({
			id: "1",
		});

		expect(result).not.toBeNull();
		expect(result?.id).toBe(1);
	});

	it("should return null if the game is not found", async () => {
		repository = new RawgGameRepository();
		const result = await repository.getGame({
			id: "-100",
		});

		expect(result).toBeNull();
	});
});
