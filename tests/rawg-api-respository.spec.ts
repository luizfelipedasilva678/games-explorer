import { it, describe, expect, beforeEach } from "vitest";
import RawgApiRepository from "../src/api/external/repositories/rawg-api/rawg-api-repository";
import "./utils/loadEnvs.ts";

describe("RawgApiRepository", () => {
	let repository: RawgApiRepository;

	beforeEach(() => {
		repository = new RawgApiRepository();
	});

	it("should return the games correctly", async () => {
		const games = await repository.getGames({
			page: 1,
			pageSize: 10,
		});

		expect(games.results.length).toBe(10);
	});
});
