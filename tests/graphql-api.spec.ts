import { createYoga } from "graphql-yoga";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { describe, expect, it } from "vitest";
import { parse } from "graphql";
import resolvers from "../app/api/graphql/resolvers";
import path from "node:path";
import "./utils/loadEnvs.ts";

const dirname = process.cwd();
const typesArray = loadFilesSync(path.join(dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
	typeDefs: typesArray,
	resolvers: resolvers,
});

const yoga = createYoga({ schema });

const executor = buildHTTPExecutor({
	fetch: yoga.fetch,
});

describe("GraphQL API", () => {
	it("should return the games correctly", async () => {
		const response = await executor({
			document: parse(/* GraphQL */ `
				query {
					games {
						... on Games {
							count
							results {
								name
							}
      			}
    			}
				}
			`),
		});

		expect((response as any).data.games.results.length).toBeGreaterThan(0);
	});

	it("should return the genres correctly", async () => {
		const response = await executor({
			document: parse(/* GraphQL */ `
				query {
					genres {
						... on Genres {
							results {
								name
							}
						}
					}
				}
			`),
		});

		expect((response as any).data.genres.results.length).toBeGreaterThan(0);
	});

	it("should return the game correctly", async () => {
		const response = await executor({
			document: parse(/* GraphQL */ `
				query {
					game(id: 1) {
						... on Game {
							name
      			}
    			}
				}
			`),
		});

		expect((response as any).data.game.name).toBeDefined();
	});

	it("should return the error object correctly if the game does not exist", async () => {
		const response = await executor({
			document: parse(/* GraphQL */ `
				query {
					game(id: -100) {
						... on Game {
							name
      			}

						... on Error {
							statusCode
						}
    			}
				}
			`),
		});

		expect((response as any).data.game.statusCode).toBeDefined();
	});

	it("should return the game screenshots correctly", async () => {
		const response = await executor({
			document: parse(/* GraphQL */ `
				query {
					gameScreenShots(id: 3328) {
						... on ScreenShots {
							images
						}
					}
				}
			`),
		});

		expect(
			(response as any).data.gameScreenShots.images.length,
		).toBeGreaterThan(0);
	});

	it("should return null if the game screenshots are not found", async () => {
		const response = await executor({
			document: parse(/* GraphQL */ `
				query {
					gameScreenShots(id: -100) {
						... on ScreenShots {
							images
						}

						... on Error {
							statusCode
						}
					}
				}
			`),
		});

		expect((response as any).data.gameScreenShots.message).not.toBeNull();
	});
});
