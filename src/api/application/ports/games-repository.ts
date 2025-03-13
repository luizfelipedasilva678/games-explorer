import type {
	ListGamesArgs,
	ListGamesData,
	ListGenresArgs,
	ListGenresData,
} from "./index.js";

interface GamesRepository {
	getGames(args: ListGamesArgs): Promise<ListGamesData>;
	getGenres(args: ListGenresArgs): Promise<ListGenresData>;
}

export default GamesRepository;
