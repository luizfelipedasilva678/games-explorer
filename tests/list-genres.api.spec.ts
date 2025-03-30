import { it, describe, expect, beforeAll } from "vitest";
import ListGenres from "../src/api/application/list-genres/list-genres";
import GenresRepositoryInMemory from "./doubles/genre-repository-in-memory.api";

describe(" List genres", () => {
	let useCase: ListGenres;

	beforeAll(() => {
		useCase = new ListGenres(new GenresRepositoryInMemory());
	});

	it("should paginate games correctly", async () => {
		const result = await useCase.perform({
			page: 2,
			pageSize: 10,
		});

		expect(result.count).toBeGreaterThan(0);
		expect(result.page).toBe(2);
		expect(result.results.length).toBe(0);
	});
});
