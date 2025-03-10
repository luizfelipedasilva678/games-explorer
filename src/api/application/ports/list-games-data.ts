import type { Game } from "../../../entities";

interface ListGamesData {
	count: number;
	page: number;
	results: Game[];
}

export default ListGamesData;
