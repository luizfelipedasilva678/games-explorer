import { DEFAULT_ERROR_MESSAGE } from "../../shared";
import type { ErrorObject } from "../ports";
import type {
	ListGamesArgs,
	ListGamesData,
	UseCase,
} from "../../application/ports";

class ListGamesController {
	private readonly useCase: ListGamesUseCase;

	constructor(useCase: ListGamesUseCase) {
		this.useCase = useCase;
	}

	async perform(args: ListGamesArgs): Promise<ListGamesData | ErrorObject> {
		try {
			const useCaseResponse = await this.useCase.perform(args);

			return useCaseResponse;
		} catch (e) {
			return {
				message: DEFAULT_ERROR_MESSAGE,
			};
		}
	}
}

type ListGamesUseCase = UseCase<ListGamesArgs, ListGamesData>;

export default ListGamesController;
