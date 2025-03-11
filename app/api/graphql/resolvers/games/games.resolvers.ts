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
	},
	GamesResult: {
		__resolveType: (obj: Record<string, unknown>) => {
			if (Object.keys(obj).includes("message")) {
				return "GamesError";
			}

			return "Games";
		},
	},
};

export { gamesResolvers };
