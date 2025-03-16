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

	it("should return the game correctly", async () => {
		repository = new RawgGameRepository();
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
