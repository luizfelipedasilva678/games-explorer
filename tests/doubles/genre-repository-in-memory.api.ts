import type { Genre } from "../../src/entities";
import genres from "../mocks/genres";
import type {
	GenreRepository,
	ListGenresArgs,
	ListGenresData,
} from "../../src/api/application/ports";

class GenreRepositoryInMemory implements GenreRepository {
	private readonly genres: Genre[] = genres;

	getGenres(args: ListGenresArgs): Promise<ListGenresData> {
		return Promise.resolve({
			count: this.genres.length,
			page: args.page,
			results: this.genres.slice(
				(args.page - 1) * args.pageSize,
				args.page * args.pageSize,
			),
		});
	}
}

export default GenreRepositoryInMemory;
