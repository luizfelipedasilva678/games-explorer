import { makeGetGameController } from "../../../../../src/api/main/factories/make-get-game-controller";
import { makeListGamesController } from "../../../../../src/api/main/factories/make-list-games-controller";

const gamesResolvers = {
	Query: {
		async games(_: {}, args: { page: number; pageSize: number }) {
			const controller = makeListGamesController();

			const response = await controller.perform({
				page: args.page,
				pageSize: args.pageSize,
			});

			return response;
		},
		async game(_: {}, args: { id: string }) {
			const controller = makeGetGameController();

			const response = await controller.perform({
				id: String(args.id),
			});

			return response;
		},
	},
	GameResult: {
		__resolveType: (obj: Record<string, unknown>) => {
			if ("message" in obj) {
				return "Error";
			}

			if ("description" in obj) {
				return "Game";
			}

			return null;
		},
	},
	GamesResult: {
		__resolveType: (obj: Record<string, unknown>) => {
			if ("message" in obj) {
				return "Error";
			}

			if ("results" in obj) {
				return "Games";
			}

			return null;
		},
	},
};

export { gamesResolvers };
