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
});
