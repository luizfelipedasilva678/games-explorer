import type { Game } from "../../../entities";
import type {
	GetGameArgs,
	ListGamesArgs,
	ListGamesData,
	GetGameScreenshotsArgs,
	GetGameScreenShotData,
} from ".";

interface GameRepository {
	getGames(args: ListGamesArgs): Promise<ListGamesData>;
	getGame(args: GetGameArgs): Promise<Game | null>;
	getGameScreenshots(
		args: GetGameScreenshotsArgs,
	): Promise<GetGameScreenShotData | null>;
}

export default GameRepository;
