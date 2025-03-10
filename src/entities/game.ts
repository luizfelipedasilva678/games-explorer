import type { Genre, Platform } from "./";

interface Game {
	id: number;
	name: string;
	image: string;
	released: string;
	genres: Genre[];
	platforms: Platform[];
}

export default Game;
