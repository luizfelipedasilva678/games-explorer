import type { Genre } from "../../../entities";

interface ListGenresData {
	count: number;
	page: number;
	results: Genre[];
}

export default ListGenresData;
