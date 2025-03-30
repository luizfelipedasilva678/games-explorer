import { it, describe, expect, beforeEach } from "vitest";
import GetGameScreenShotsController from "../src/frontend/presentation/controllers/get-game-screenshots-controller";
import GetGameScreenShots from "../src/frontend/application/get-game-screenshot/get-game-screenshot";
import GameRepositoryInMemory from "./doubles/game-repository-in-memory.frontend";
import type { ErrorObject } from "../src/frontend/presentation/ports";

describe("Get game screenshots controller", () => {
	let controller: GetGameScreenShotsController;

	beforeEach(() => {
		controller = new GetGameScreenShotsController(
			new GetGameScreenShots(new GameRepositoryInMemory()),
		);
	});

	it("should return the screenshots correctly", async () => {
		const screenshots = await controller.perform({
			id: "1",
		});

		expect(screenshots?.images?.length).toBeGreaterThan(0);
	});

	it("should return an error if the game does not exist", async () => {
		const screenshots = await controller.perform({
			id: "-1",
		});

		expect((screenshots as ErrorObject).message).toBeDefined();
	});
});
