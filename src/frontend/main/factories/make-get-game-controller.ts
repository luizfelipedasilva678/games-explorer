import GetGame from "../../application/get-game/get-game";
import { GraphqlGameRepository } from "../../external/repositories/graphql/graphql-game-repository";
import GetGameController from "../../presentation/controllers/get-game-controller";

function makeGetGameController() {
	const repository = new GraphqlGameRepository();
	const useCase = new GetGame(repository);

	return new GetGameController(useCase);
}

export default makeGetGameController;
