import { GraphQLClient } from "graphql-request";

function getClient() {
	return new GraphQLClient(`${process.env.APP_URL}/api/graphql`);
}

export default getClient;
