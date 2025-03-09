import type { Game } from "../../src/api/entities";
import games from "../mocks/games";
import type {
	ListGamesArgs,
	ListGamesData,
	GamesRepository,
} from "../../src/api/application/ports";

class GamesRepositoryInMemory implements GamesRepository {
	private readonly games: Game[] = games;

	getGames(
		args: ListGamesArgs = {
			page: 1,
			pageSize: 10,
		},
	): Promise<ListGamesData> {
		return Promise.resolve({
			count: this.games.length,
			page: args.page,
			results: this.games.slice(
				(args.page - 1) * args.pageSize,
				args.page * args.pageSize,
			),
		});
	}
}

export default GamesRepositoryInMemory;
