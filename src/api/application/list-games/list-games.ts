import { DEFAULT_INITIAL_PAGE, DEFAULT_PAGE_SIZE } from "../../shared";
import type { GameRepository, ListGamesArgs, UseCase } from "../ports";
import type ListGamesData from "../ports/list-games-data";

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

export default ListGames;
