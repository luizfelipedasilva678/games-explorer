import { createErrorObject, HTTP_NOT_FOUND } from "../../shared";
import { GameNotFoundError } from "../../application/get-game-screenshots/errors";
import type { ErrorObject } from "../ports";
import type {
	GetGameScreenShotData,
	GetGameScreenshotsArgs,
	UseCase,
} from "../../application/ports";

class GraphqlGetGameScreenShots {
	private readonly useCase: GetGameScreenShotsUseCase;

	constructor(useCase: GetGameScreenShotsUseCase) {
		this.useCase = useCase;
	}

	async perform(
		args: GetGameScreenshotsArgs,
	): Promise<GetGameScreenShotData | ErrorObject> {
		try {
			const useCaseResponse = await this.useCase.perform(args);

			if (useCaseResponse instanceof GameNotFoundError) {
				return createErrorObject(HTTP_NOT_FOUND, useCaseResponse.message);
			}

			return useCaseResponse;
		} catch (e) {
			return createErrorObject();
		}
	}
}

type GetGameScreenShotsUseCase = UseCase<
	GetGameScreenshotsArgs,
	GetGameScreenShotData | GameNotFoundError
>;

export default GraphqlGetGameScreenShots;
