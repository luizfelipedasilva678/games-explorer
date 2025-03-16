import type {
	GenreRepository,
	ListGenresArgs,
	ListGenresData,
	UseCase,
} from "../ports";

class ListGenres implements UseCase<ListGenresArgs, ListGenresData> {
	private readonly repository: GenreRepository;

	constructor(repository: GenreRepository) {
		this.repository = repository;
	}

	perform(
		args: ListGenresArgs = {
			page: 1,
			pageSize: 10,
		},
	): Promise<ListGenresData> {
		return this.repository.getGenres(args);
	}
}

export default ListGenres;
