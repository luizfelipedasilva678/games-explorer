import GetGameScreenShots from "../../application/get-game-screenshot/get-game-screenshot";
import { GraphqlGameRepository } from "../../external/repositories/graphql/graphql-game-repository";
import GetGameScreenShotsController from "../../presentation/controllers/get-game-screenshots-controller";

function makeGetGameScreenShots() {
	const repository = new GraphqlGameRepository();
	const useCase = new GetGameScreenShots(repository);

	return new GetGameScreenShotsController(useCase);
}

export default makeGetGameScreenShots;
