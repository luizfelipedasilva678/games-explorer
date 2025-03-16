import { GetGame } from "../../application/get-game";
import { GraphqlGetGame } from "../../presentation/controllers";
import RawgGameRepository from "../../external/repositories/rawg/rawg-game-repository";

function makeGetGameController() {
	const repository = new RawgGameRepository();
	const useCase = new GetGame(repository);

	return new GraphqlGetGame(useCase);
}

export { makeGetGameController };
