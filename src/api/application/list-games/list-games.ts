import type { GameRepository, ListGamesArgs, UseCase } from "../ports";
import type ListGamesData from "../ports/list-games-data";

class ListGames implements UseCase<ListGamesArgs, ListGamesData> {
	private readonly repository: GameRepository;

	constructor(repository: GameRepository) {
		this.repository = repository;
	}

	perform(
		args: ListGamesArgs = {
			page: 1,
			pageSize: 10,
		},
	): Promise<ListGamesData> {
		return this.repository.getGames(args);
	}
}

export default ListGames;
