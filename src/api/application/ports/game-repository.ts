import type { ListGamesArgs, ListGamesData } from ".";

interface GameRepository {
	getGames(args: ListGamesArgs): Promise<ListGamesData>;
}

export default GameRepository;
