import { DEFAULT_INITIAL_PAGE, DEFAULT_PAGE_SIZE } from "../../shared";
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
			page: DEFAULT_INITIAL_PAGE,
			pageSize: DEFAULT_PAGE_SIZE,
		},
	): Promise<ListGenresData> {
		return this.repository.getGenres(args);
	}
}

export default ListGenres;
