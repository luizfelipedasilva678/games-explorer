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
});
