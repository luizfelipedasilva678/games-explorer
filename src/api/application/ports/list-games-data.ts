import type { GameWithPartialFields } from "../../../entities";

interface ListGamesData {
	count: number;
	page: number;
	results: GameWithPartialFields[];
}

export default ListGamesData;
