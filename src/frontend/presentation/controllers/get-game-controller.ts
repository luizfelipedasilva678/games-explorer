import type { Game } from "../../../entities";
import type { GameNotFoundError } from "../../application/get-game/errors";
import type { UseCase, GetGameArgs } from "../../application/ports";
import { DEFAULT_ERROR_MESSAGE, isErrorObject } from "../../shared";
import type { ErrorObject, GetGameOutput } from "../ports";

class GetGameController {
	private readonly useCase: GetGameUse;

	constructor(useCase: GetGameUse) {
		this.useCase = useCase;
	}

	private presentGame(game: Game): GetGameOutput {
		return {
			id: String(game.id),
			name: game.name,
			image: game.image,
			released: game.released,
			description: game.description,
			genres: game.genres.map((genre) => ({
				id: String(genre.id),
				name: genre.name,
			})),
			platforms: game.platforms.map((platform) => ({
				id: String(platform.id),
				name: platform.name,
			})),
		};
	}

	async perform(args: GetGameArgs): Promise<GetGameOutput | ErrorObject> {
		try {
			const game = await this.useCase.perform(args);

			if (isErrorObject(game)) {
				return {
					message: game.message,
				};
			}

			return this.presentGame(game);
		} catch (e) {
			console.log(e);

			return {
				message: DEFAULT_ERROR_MESSAGE,
			};
		}
	}
}

type GetGameUse = UseCase<GetGameArgs, Game | GameNotFoundError>;

export default GetGameController;
