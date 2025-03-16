import type { Game } from "../../../entities";
import type { GameRepository, GetGameArgs, UseCase } from "../ports";
import { GameNotFoundError } from "./errors";

class GetGame implements UseCase<GetGameArgs, Game | GameNotFoundError> {
	private readonly repository: GameRepository;

	constructor(repository: GameRepository) {
		this.repository = repository;
	}

	async perform(args: GetGameArgs): Promise<Game | GameNotFoundError> {
		const game = await this.repository.getGame(args);

		if (!game) {
			return new GameNotFoundError();
		}

		return game;
	}
}

export default GetGame;
