import { DEFAULT_PAGE_SIZE, HTTP_NOT_FOUND } from "../../../shared";
import type { Game } from "../../../../entities";
import type {
	RawgApiGame,
	RawgApiGameScreenshots,
	RawgApiListGames,
} from "./ports";
import type {
	GameRepository,
	GetGameArgs,
	GetGameScreenShotData,
	ListGamesArgs,
	ListGamesData,
} from "../../../application/ports";

class RawgGameRepository implements GameRepository {
	async getGameScreenshots(
		args: GetGameArgs,
	): Promise<GetGameScreenShotData | null> {
		const response = await fetch(
			`${process.env.RAWG_BASE_URL}/games/${args.id}/screenshots?key=${process.env.API_KEY}&page_size=${DEFAULT_PAGE_SIZE}`,
		);

		if (response.status === HTTP_NOT_FOUND) {
			return null;
		}

		const data = (await response.json()) as RawgApiGameScreenshots;

		return { images: data.results.map((screenshot) => screenshot.image) };
	}

	async getGames(args: ListGamesArgs): Promise<ListGamesData> {
		const response = await fetch(
			`${process.env.RAWG_BASE_URL}/games?key=${process.env.API_KEY}&page=${args.page}&page_size=${args.pageSize}${
				args.query ? `&search=${args.query}` : ""
			}`,
		);
		const data = (await response.json()) as RawgApiListGames;

		return {
			count: data.count,
			page: args.page,
			results: data.results.map((game) => ({
				id: game.id,
				slug: game.slug,
				image: game.background_image ?? "",
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
			`${process.env.RAWG_BASE_URL}/games/${args.id}?key=${process.env.API_KEY}`,
		);

		if (response.status === HTTP_NOT_FOUND) {
			return null;
		}

		const data = (await response.json()) as RawgApiGame;

		return {
			id: data.id,
			description: data.description_raw,
			name: data.name,
			image: data.background_image ?? "",
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
