import type { Game } from "../../../entities";
import type {
	GetGameArgs,
	ListGamesArgs,
	ListGamesData,
	GetGameScreenShotData,
} from ".";

interface GameRepository {
	getGames(args: ListGamesArgs): Promise<ListGamesData>;
	getGame(args: GetGameArgs): Promise<Game | null>;
	getGameScreenshots(args: GetGameArgs): Promise<GetGameScreenShotData | null>;
}

export default GameRepository;
