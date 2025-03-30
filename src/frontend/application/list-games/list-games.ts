import { DEFAULT_INITIAL_PAGE, DEFAULT_PAGE_SIZE } from "../../shared";
import type {
	ListGamesArgs,
	ListGamesData,
	UseCase,
	GameRepository,
} from "../ports";

class ListGames implements UseCase<ListGamesArgs, ListGamesData> {
	private readonly repository: GameRepository;

	constructor(repository: GameRepository) {
		this.repository = repository;
	}

	perform(
		args: ListGamesArgs = {
			page: DEFAULT_INITIAL_PAGE,
			pageSize: DEFAULT_PAGE_SIZE,
		},
	): Promise<ListGamesData> {
		return this.repository.getGames(args);
	}
}

export { ListGames };
