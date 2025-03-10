import type { RawgApiGame } from "./index.js";

interface RawgApiListGames {
	count: number;
	next: string;
	previous: string;
	results: RawgApiGame[];
}

export default RawgApiListGames;
