import { DEFAULT_ERROR_MESSAGE } from "../../shared";
import type { DateFormatter, ErrorObject } from "../ports";
import type {
	ListGamesArgs,
	ListGamesData,
	UseCase,
} from "../../application/ports";

class ListGamesController {
	private readonly useCase: ListGamesUseCase;
	private readonly dateFormatter: DateFormatter;

	constructor(useCase: ListGamesUseCase, dateFormatter: DateFormatter) {
		this.useCase = useCase;
		this.dateFormatter = dateFormatter;
	}

	private presentGames(games: ListGamesData): ListGamesData {
		return {
			...games,
			results: games.results.map((game) => ({
				...game,
				released: this.dateFormatter.format(game.released),
			})),
		};
	}

	async perform(args: ListGamesArgs): Promise<ListGamesData | ErrorObject> {
		try {
			const useCaseResponse = await this.useCase.perform(args);

			return this.presentGames(useCaseResponse);
		} catch (e) {
			return {
				message: DEFAULT_ERROR_MESSAGE,
			};
		}
	}
}

type ListGamesUseCase = UseCase<ListGamesArgs, ListGamesData>;

export default ListGamesController;
