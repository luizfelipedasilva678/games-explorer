import { HTTP_NOT_FOUND } from "../../../shared";
import type { Game } from "../../../../entities";
import type { RawgApiGame, RawgApiListGames } from "./ports";
import type {
	GameRepository,
	GetGameArgs,
	ListGamesArgs,
	ListGamesData,
} from "../../../application/ports";

class RawgGameRepository implements GameRepository {
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

	async getGame(args: GetGameArgs): Promise<Game | null> {
		const response = await fetch(
			`${process.env.API_BASE_URL}/games/${args.id}?key=${process.env.API_KEY}`,
		);

		if (response.status === HTTP_NOT_FOUND) {
			return null;
		}

		const data = (await response.json()) as RawgApiGame;

		return {
			id: data.id,
			description: data.description,
			name: data.name,
			image: data.background_image,
			released: data.released,
			platforms: data.platforms.map((platform) => ({
				id: platform.platform.id,
				name: platform.platform.name,
			})),
			genres: data.genres.map((genre) => ({
				id: genre.id,
				name: genre.name,
			})),
		};
	}
}

export default RawgGameRepository;
