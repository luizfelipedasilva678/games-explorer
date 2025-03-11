import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createYoga } from "graphql-yoga";
import resolvers from "./resolvers";
import path from "node:path";

interface NextContext {
	params: Promise<Record<string, string>>;
}

const dirname = process.cwd();
const typesArray = loadFilesSync(path.join(dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
	typeDefs: typesArray,
	resolvers: resolvers,
});

const { handleRequest } = createYoga<NextContext>({
	schema: schema,
	graphqlEndpoint: "/api/graphql",
	fetchAPI: { Response },
});

export {
	handleRequest as GET,
	handleRequest as POST,
	handleRequest as OPTIONS,
};
