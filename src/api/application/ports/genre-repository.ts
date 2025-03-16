import type { ListGenresArgs, ListGenresData } from ".";

interface GenreRepository {
	getGenres(args: ListGenresArgs): Promise<ListGenresData>;
}

export default GenreRepository;
