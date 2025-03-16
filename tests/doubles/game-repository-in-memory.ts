import type { Game } from "../../src/entities";
import games from "../mocks/games";
import type {
	ListGamesArgs,
	ListGamesData,
	GameRepository,
	GetGameArgs,
} from "../../src/api/application/ports";

class GameRepositoryInMemory implements GameRepository {
	private readonly games: Game[] = games;

	getGame(args: GetGameArgs): Promise<Game | null> {
		return Promise.resolve(
			this.games.find((game) => String(game.id) === args.id) || null,
		);
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

export default GameRepositoryInMemory;
