import type { RawgApiListGames } from "./ports";
import type {
	GamesRepository,
	ListGamesArgs,
	ListGamesData,
} from "../../../application/ports";

class RawgApiRepository implements GamesRepository {
	async getGames(args: ListGamesArgs): Promise<ListGamesData> {
		const response = await fetch(
			`${process.env.API_BASE_URL}/games?key=${process.env.API_KEY}&page=${args.page}&page_size=${args.pageSize}`,
		);
		const data = (await response.json()) as RawgApiListGames;

		return {
			count: data.count,
			page: args.page,
			results: data.results.map((game) => ({
				id: game.id,
				slug: game.slug,
				image: game.background_image,
				name: game.name,
				released: game.released,
				platforms: game.platforms.map((platform) => ({
					id: platform.platform.id,
					name: platform.platform.name,
				})),
				genres: game.genres.map((genre) => ({
					id: genre.id,
					name: genre.name,
				})),
			})),
		};
	}
}

export default RawgApiRepository;
