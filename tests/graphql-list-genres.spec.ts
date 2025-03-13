import { it, describe, expect, beforeAll } from "vitest";
import { GraphqlListGenres } from "../src/api/presentation/controllers";
import ListGenres from "../src/api/application/list-genres/list-genres";
import GamesRepositoryInMemory from "./doubles/games-repository-in-memory";
import type { ListGenresData } from "../src/api/application/ports";
import type { ErrorObject } from "../src/api/presentation/ports";

describe("GraphqlListGenres", () => {
	let controller: GraphqlListGenres;

	beforeAll(() => {
		controller = new GraphqlListGenres(
			new ListGenres(new GamesRepositoryInMemory()),
		);
	});

	it("should the genres correctly", async () => {
		const result = (await controller.perform({
			page: 1,
			pageSize: 10,
		})) as ListGenresData;

		expect(result.count).toBeGreaterThan(0);
		expect(result.page).toBe(1);
		expect(result.results.length).toBeGreaterThan(0);
	});

	it("should return an error object if something goes wrong", async () => {
		controller = new GraphqlListGenres();
		const result = (await controller.perform({
			page: -1,
			pageSize: 10,
		})) as ErrorObject;

		expect(result.message).toBeDefined();
	});
});
