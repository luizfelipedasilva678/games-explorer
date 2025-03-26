import makeListGamesController from "../src/frontend/main/factories/make-list-games-controller";
import GameCard from "./components/GameCard";
import {
	DEFAULT_PAGE_SIZE,
	DEFAULT_INITIAL_PAGE,
	isErrorObject,
} from "../src/frontend/shared";

export default async function Home() {
	const controller = makeListGamesController();
	const controllerResponse = await controller.perform({
		page: DEFAULT_INITIAL_PAGE,
		pageSize: DEFAULT_PAGE_SIZE,
	});

	if (isErrorObject(controllerResponse))
		throw new Error(controllerResponse.message);

	return (
		<main className="mt-[56] mb-[56] section w-full flex items-center justify-center flex-col">
			<section className="w-full max-w-[1600] grid lg:grid-cols-3 gap-4 grid-cols-1 max-[1024]:grid-cols-2 max-[640]:grid-cols-1 max-[1600]:pl-[16] max-[1600]:pr-[16]">
				{controllerResponse.results.map((game) => (
					<GameCard
						key={game.id}
						released={game.released}
						id={game.id}
						image={game.image}
						name={game.name}
					/>
				))}
			</section>
		</main>
	);
}
