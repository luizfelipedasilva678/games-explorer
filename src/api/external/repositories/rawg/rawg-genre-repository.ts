import type { RawgApiListGenres } from "./ports";
import type {
	GenreRepository,
	ListGenresArgs,
	ListGenresData,
} from "../../../application/ports";

class RawgGenreRepository implements GenreRepository {
	async getGenres(args: ListGenresArgs): Promise<ListGenresData> {
		const response = await fetch(
			`${process.env.API_BASE_URL}/genres?key=${process.env.API_KEY}&page=${args.page}&page_size=${args.pageSize}`,
		);

		const data = (await response.json()) as RawgApiListGenres;

		return {
			count: data.count,
			page: args.page,
			results: data.results
				.map((genre) => ({
					id: genre.id,
					name: genre.name,
				}))
				.sort((genre1, genre2) => genre1.name.localeCompare(genre2.name)),
		};
	}
}

export default RawgGenreRepository;
