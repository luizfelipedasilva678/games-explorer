import { createErrorObject, HTTP_NOT_FOUND } from "../../shared";
import type { Game } from "../../../entities";
import { GameNotFoundError } from "../../application/get-game/errors";
import type { ErrorObject } from "../ports";
import type { GetGameArgs, UseCase } from "../../application/ports";

class GraphqlGetGame {
	private readonly useCase: GetGameUseCase;

	constructor(useCase: GetGameUseCase) {
		this.useCase = useCase;
	}

	async perform(args: GetGameArgs): Promise<Game | ErrorObject> {
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

type GetGameUseCase = UseCase<GetGameArgs, Game | GameNotFoundError>;

export default GraphqlGetGame;
