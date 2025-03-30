import { GameNotFoundError } from "../../application/get-game-screenshot/errors";
import type {
	GetGameScreenShotData,
	GetGameScreenshotsArgs,
	UseCase,
} from "../../application/ports";
import { DEFAULT_ERROR_MESSAGE } from "../../shared";
import type { ErrorObject } from "../ports";

class GetGameScreenShotsController {
	private useCase: GetGameScreenShot;

	constructor(useCase: GetGameScreenShot) {
		this.useCase = useCase;
	}
	async perform(
		args: GetGameScreenshotsArgs,
	): Promise<GetGameScreenShotData | ErrorObject> {
		try {
			const useCaseResponse = await this.useCase.perform(args);

			if (useCaseResponse instanceof GameNotFoundError) {
				return {
					message: useCaseResponse.message,
				};
			}

			return useCaseResponse;
		} catch (e) {
			return {
				message: DEFAULT_ERROR_MESSAGE,
			};
		}
	}
}

type GetGameScreenShot = UseCase<
	GetGameScreenshotsArgs,
	GetGameScreenShotData | GameNotFoundError
>;

export default GetGameScreenShotsController;
