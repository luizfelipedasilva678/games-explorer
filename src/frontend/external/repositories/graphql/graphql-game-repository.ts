import { gql, type GraphQLClient } from "graphql-request";
import getClient from "./getClient";
import type { Game } from "../../../../entities";
import { isErrorObject } from "../../../shared";
import type {
	GameRepository,
	GetGameArgs,
	ListGamesArgs,
	ListGamesData,
} from "../../../application/ports";

class GraphqlGameRepository implements GameRepository {
	private readonly client: GraphQLClient;

	constructor() {
		this.client = getClient();
	}

	async getGame(args: GetGameArgs): Promise<Game | null> {
		const query = gql`
			query Game($id: ID!) {
				game(id: $id) {
					... on Game {
						id
						name
						description
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

					... on Error {
						message
						statusCode
					}
				}
			}
		`;

		const response = (await this.client.request(query, args)) as {
			game: Game | { message: string; statusCode: number };
		};

		if (isErrorObject(response.game)) return null;

		return response.game;
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
