import type { RawgApiGame } from ".";

interface RawgApiListGames {
	count: number;
	next: string;
	previous: string;
	results: RawgApiGame[];
}

export default RawgApiListGames;
