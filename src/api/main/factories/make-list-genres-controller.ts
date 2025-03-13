import { ListGenres } from "../../application/list-genres";
import { GraphqlListGenres } from "../../presentation/controllers";
import RawgApiRepository from "../../external/repositories/rawg-api/rawg-api-repository";

function makeListGenresController() {
	const repository = new RawgApiRepository();
	const useCase = new ListGenres(repository);

	return new GraphqlListGenres(useCase);
}

export { makeListGenresController };
