import { ListGames } from "../../application/list-games";
import { GraphqlListGames } from "../../presentation/controllers";
import RawgGameRepository from "../../external/repositories/rawg/rawg-game-repository";

function makeListGamesController() {
	const repository = new RawgGameRepository();
	const useCase = new ListGames(repository);

	return new GraphqlListGames(useCase);
}

export { makeListGamesController };
