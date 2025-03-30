import GetGameScreenshots from "../../application/get-game-screenshots";
import RawgGameRepository from "../../external/repositories/rawg/rawg-game-repository";
import { GraphqlGetGameScreenShots } from "../../presentation/controllers";

function makeGetGameScreenShotsController() {
	const repository = new RawgGameRepository();
	const useCase = new GetGameScreenshots(repository);

	return new GraphqlGetGameScreenShots(useCase);
}

export default makeGetGameScreenShotsController;
