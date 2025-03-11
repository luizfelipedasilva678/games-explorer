import { createErrorObject } from "../../shared";
import type { ErrorObject } from "../ports";
import type {
	ListGamesArgs,
	ListGamesData,
	UseCase,
} from "../../application/ports";

class ListGames {
	private readonly useCase: ListGamesUseCase;

	constructor(useCase: ListGamesUseCase) {
		this.useCase = useCase;
	}

	async perform(args: ListGamesArgs): Promise<ListGamesData | ErrorObject> {
		try {
			return await this.useCase.perform(args);
		} catch (e) {
			return createErrorObject();
		}
	}
}

type ListGamesUseCase = UseCase<ListGamesArgs, ListGamesData>;

export default ListGames;
