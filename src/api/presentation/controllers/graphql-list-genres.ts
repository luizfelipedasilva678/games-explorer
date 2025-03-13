import { createErrorObject } from "../../shared";
import type { ErrorObject } from "../ports";
import type {
	ListGenresArgs,
	ListGenresData,
	UseCase,
} from "../../application/ports";

class GraphqlListGenres {
	private readonly useCase: ListGenresUseCase;

	constructor(useCase: ListGenresUseCase) {
		this.useCase = useCase;
	}

	async perform(args: ListGenresArgs): Promise<ListGenresData | ErrorObject> {
		try {
			return await this.useCase.perform(args);
		} catch (e) {
			return createErrorObject();
		}
	}
}

type ListGenresUseCase = UseCase<ListGenresArgs, ListGenresData>;

export default GraphqlListGenres;
