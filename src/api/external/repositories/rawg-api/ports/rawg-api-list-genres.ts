import type { RawgApiGenre } from ".";

interface RawgApiListGenres {
	count: number;
	next: string;
	previous: string;
	results: RawgApiGenre[];
}

export default RawgApiListGenres;
