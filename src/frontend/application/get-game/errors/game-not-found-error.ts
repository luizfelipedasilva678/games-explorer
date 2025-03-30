class GameNotFoundError extends Error {
	constructor(gameId: string) {
		super(`Game with id ${gameId} not found`);
	}
}

export default GameNotFoundError;
