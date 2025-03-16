class GameNotFoundError extends Error {
	constructor() {
		super("Game not found");
	}
}

export default GameNotFoundError;
