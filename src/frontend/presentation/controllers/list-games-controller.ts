import { DEFAULT_ERROR_MESSAGE, DEFAULT_PAGE_SIZE } from "../../shared";
import type { DateFormatter, ErrorObject, ListGamesOutput } from "../ports";
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

	private presentGames(games: ListGamesData): ListGamesOutput {
		const maxNumberOfPages = Math.ceil(games.count / DEFAULT_PAGE_SIZE);
		const currentPage = games.page;
		const isLastPage = currentPage === maxNumberOfPages;
		const isFirstPage = currentPage === 1;
		const nextPage = isLastPage ? maxNumberOfPages : currentPage + 1;
		const prevPage = isFirstPage ? 1 : currentPage - 1;

		return {
			...games,
			nextPage,
			isFirstPage,
			isLastPage,
			prevPage,
			results: games.results.map((game) => ({
				...game,
				released: this.dateFormatter.format(game.released),
			})),
		};
	}

	async perform(args: ListGamesArgs): Promise<ListGamesOutput | ErrorObject> {
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
