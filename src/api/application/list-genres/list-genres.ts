import type {
	GamesRepository,
	ListGenresArgs,
	ListGenresData,
	UseCase,
} from "../ports";

class ListGenres implements UseCase<ListGenresArgs, ListGenresData> {
	private readonly repository: GamesRepository;

	constructor(repository: GamesRepository) {
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
