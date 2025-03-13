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

	it("should return the genres correctly", async () => {
		const genres = await repository.getGenres({
			page: 1,
			pageSize: 10,
		});

		expect(genres.results.length).toBe(10);
	});

	it("should paginate the genres correctly", async () => {
		const genres = await repository.getGenres({
			page: 1,
			pageSize: 19,
		});

		expect(genres.results.length).toBe(19);
	});
});
