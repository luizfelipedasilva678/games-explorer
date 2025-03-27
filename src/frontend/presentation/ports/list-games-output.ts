import type { GameWithPartialFields } from "../../../entities";

interface ListGamesOutput {
	results: GameWithPartialFields[];
	count: number;
	page: number;
	nextPage: number;
	prevPage: number;
	isLastPage: boolean;
	isFirstPage: boolean;
}

export default ListGamesOutput;
