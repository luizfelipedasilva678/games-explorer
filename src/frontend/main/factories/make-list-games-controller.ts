import { ListGames } from "../../application/list-games";
import DateFormatterInLocaleDateString from "../../external/date-formatter/date-formatter";
import { GraphqlGameRepository } from "../../external/repositories/graphql/graphql-game-repository";
import ListGamesController from "../../presentation/controllers/list-games-controller";

function makeListGamesController() {
	const repository = new GraphqlGameRepository();
	const useCase = new ListGames(repository);
	const dateFormatter = new DateFormatterInLocaleDateString();

	return new ListGamesController(useCase, dateFormatter);
}

export default makeListGamesController;
