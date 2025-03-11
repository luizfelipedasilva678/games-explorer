import { ListGames } from "../../application/list-games";
import { GraphqlListGames } from "../../presentation/controllers";
import RawgApiRepository from "../../external/repositories/rawg-api/rawg-api-repository";

function makeListGamesController() {
	const repository = new RawgApiRepository();
	const useCase = new ListGames(repository);

	return new GraphqlListGames(useCase);
}

export { makeListGamesController };
