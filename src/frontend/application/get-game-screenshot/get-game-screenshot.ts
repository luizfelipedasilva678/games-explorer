import { GameNotFoundError } from "./errors";
import type {
	GameRepository,
	GetGameScreenshotsArgs,
	UseCase,
	GetGameScreenShotData,
} from "../ports";

class GetGameScreenShots
	implements
		UseCase<GetGameScreenshotsArgs, GetGameScreenShotData | GameNotFoundError>
{
	private readonly repository: GameRepository;

	constructor(repository: GameRepository) {
		this.repository = repository;
	}

	async perform(
		args: GetGameScreenshotsArgs,
	): Promise<GetGameScreenShotData | GameNotFoundError> {
		const game = await this.repository.getGameScreenshots(args);

		if (!game) {
			return new GameNotFoundError(args.id);
		}

		return game;
	}
}

export default GetGameScreenShots;
