import type {
	GameRepository,
	GetGameScreenShotData,
	GetGameScreenshotsArgs,
	UseCase,
} from "../ports";
import { GameNotFoundError } from "./errors";

class GetGameScreenshots
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
		const screenshots = await this.repository.getGameScreenshots(args);

		if (!screenshots) {
			return new GameNotFoundError();
		}

		return screenshots;
	}
}

export default GetGameScreenshots;
