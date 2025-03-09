import type { ListGamesArgs, ListGamesData } from ".";

interface GamesRepository {
	getGames(args: ListGamesArgs): Promise<ListGamesData>;
}

export default GamesRepository;
