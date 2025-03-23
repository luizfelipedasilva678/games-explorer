import { ListGames } from "../../application/list-games";
import { GraphqlGameRepository } from "../../external/repositories/graphql/graphql-game-repository";
import ListGamesController from "../../presentation/controllers/list-games-controller";

function makeListGamesController() {
	const repository = new GraphqlGameRepository();
	const useCase = new ListGames(repository);

	return new ListGamesController(useCase);
}

export default makeListGamesController;
