import { it, describe, expect, beforeAll } from "vitest";
import { GraphqlGameRepository } from "../src/frontend/external/repositories/graphql/graphql-game-repository";
import "./utils/loadEnvs";

describe("GraphqlGameRepository", () => {
	let repository: GraphqlGameRepository;

	beforeAll(() => {
		repository = new GraphqlGameRepository();
	});

	it("should return the game correctly", async () => {
		const response = await repository.getGames({
			page: 1,
			pageSize: 10,
		});

		expect(response.results).toBeDefined();
	});
});
