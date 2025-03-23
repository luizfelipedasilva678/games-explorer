import { gql, type GraphQLClient } from "graphql-request";
import getClient from "./getClient";
import type {
	GameRepository,
	ListGamesArgs,
	ListGamesData,
} from "../../../application/ports";

class GraphqlGameRepository implements GameRepository {
	private readonly client: GraphQLClient;

	constructor() {
		this.client = getClient();
	}

	async getGames(args: ListGamesArgs): Promise<ListGamesData> {
		const query = gql`
			query Games($page: Int!, $pageSize: Int!) {
				games(page: $page, pageSize: $pageSize) {
					... on Games {
            count
            page
            results {
              id
              name
              image
              released
              genres {
                id
                name
              }
              platforms {
                id
                name
              }
            }
					}
				}
			}
		`;

		const response = (await this.client.request(query, args)) as {
			games: ListGamesData;
		};

		return response.games;
	}
}

export { GraphqlGameRepository };
