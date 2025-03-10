import type { ListGamesArgs, ListGamesData } from "./index.js";

interface GamesRepository {
	getGames(args: ListGamesArgs): Promise<ListGamesData>;
}

export default GamesRepository;
