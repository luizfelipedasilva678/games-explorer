import { it, describe, expect, beforeEach } from "vitest";
import RawgGenreRepository from "../src/api/external/repositories/rawg/rawg-genre-repository";
import "./utils/loadEnvs";

describe("RawgGameRepository", () => {
	let repository: RawgGenreRepository;

	beforeEach(() => {
		repository = new RawgGenreRepository();
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
