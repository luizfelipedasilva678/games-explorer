import { makeListGenresController } from "../../../../../src/api/main/factories/make-list-genres-controller";

const genresResolvers = {
	Query: {
		async genres(_: {}, args: { page: number; pageSize: number }) {
			const controller = makeListGenresController();

			const response = await controller.perform({
				page: args.page,
				pageSize: args.pageSize,
			});

			return response;
		},
	},
	GenresResult: {
		__resolveType: (obj: Record<string, unknown>) => {
			if ("message" in obj) {
				return "Error";
			}

			if ("results" in obj) {
				return "Genres";
			}

			return null;
		},
	},
};

export { genresResolvers };
