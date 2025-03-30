import type { GetGameArgs, ListGamesArgs, ListGamesData } from ".";
import type { Game } from "../../../entities";

interface GameRepository {
	getGames(args: ListGamesArgs): Promise<ListGamesData>;
	getGame(args: GetGameArgs): Promise<Game | null>;
}

export default GameRepository;
