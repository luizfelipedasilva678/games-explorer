import { ListGenres } from "../../application/list-genres";
import { GraphqlListGenres } from "../../presentation/controllers";
import RawgGenreRepository from "../../external/repositories/rawg/rawg-genre-repository";

function makeListGenresController() {
	const repository = new RawgGenreRepository();
	const useCase = new ListGenres(repository);

	return new GraphqlListGenres(useCase);
}

export { makeListGenresController };
