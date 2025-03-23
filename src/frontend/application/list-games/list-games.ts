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
		args: ListGamesArgs = { page: 1, pageSize: 10 },
	): Promise<ListGamesData> {
		return this.repository.getGames(args);
	}
}

export { ListGames };
