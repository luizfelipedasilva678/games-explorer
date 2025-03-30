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

	it("should return the game screenshots correctly", async () => {
		const response = await repository.getGameScreenshots({
			id: "3328",
		});

		expect(response?.images).toBeDefined();
	});

	it("should an error if the game screenshots are not found", async () => {
		const response = await repository.getGameScreenshots({
			id: "-10",
		});

		expect(response?.images).not.toBeDefined();
	});

	it("should return the game by id correctly", async () => {
		const response = await repository.getGame({
			id: "3328",
		});

		expect(response).toBeDefined();
	});

	it("should return an error if can't find the game by id correctly", async () => {
		const response = await repository.getGame({
			id: "-10",
		});

		expect(response).toBeNull();
	});
});
