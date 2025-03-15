import type { Game } from ".";

interface GameWithPartialFields extends Omit<Game, "description"> {}

export default GameWithPartialFields;
