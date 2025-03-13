import type { Game, Genre } from "../../src/entities";
import games from "../mocks/games";
import genres from "../mocks/genres";
import type {
	ListGamesArgs,
	ListGamesData,
	GamesRepository,
	ListGenresArgs,
	ListGenresData,
} from "../../src/api/application/ports";

class GamesRepositoryInMemory implements GamesRepository {
	private readonly games: Game[] = games;
	private readonly genres: Genre[] = genres;

	getGenres(args: ListGenresArgs): Promise<ListGenresData> {
		return Promise.resolve({
			count: this.games.length,
			page: args.page,
			results: this.genres.slice(
				(args.page - 1) * args.pageSize,
				args.page * args.pageSize,
			),
		});
	}

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
