import makeListGamesController from "../../../src/frontend/main/factories/make-list-games-controller";
import GameCard from "../../components/GameCard";
import Pagination from "../../components/Pagination";
import {
	DEFAULT_PAGE_SIZE,
	DEFAULT_INITIAL_PAGE,
	isErrorObject,
} from "../../../src/frontend/shared";

export default async function Search({ params, searchParams }: SearchProps) {
	const { page } = await searchParams;
	const { slug } = await params;
	const controller = makeListGamesController();
	const query = decodeURIComponent(slug || "");
	const controllerResponse = await controller.perform({
		page: Number(page) || DEFAULT_INITIAL_PAGE,
		query: query,
		pageSize: DEFAULT_PAGE_SIZE,
	});

	if (isErrorObject(controllerResponse))
		throw new Error(controllerResponse.message);

	const { results, nextPage, prevPage, isFirstPage, isLastPage } =
		controllerResponse;

	return (
		<main className="mt-[56] mb-[56] section w-full flex items-center justify-center flex-col">
			<h1 className="text-4xl font-bold mb-[16] w-full max-w-[1600]  max-[1600]:pl-[16] max-[1600]:pr-[16]">
				Search results for: {query}
			</h1>
			<section className="w-full max-w-[1600] grid lg:grid-cols-3 gap-4 grid-cols-1 max-[1024]:grid-cols-2 max-[640]:grid-cols-1 max-[1600]:pl-[16] max-[1600]:pr-[16]">
				{results.map((game) => (
					<GameCard
						key={game.id}
						released={game.released}
						id={game.id}
						image={game.image}
						name={game.name}
					/>
				))}
			</section>
			<Pagination
				isFirstPage={isFirstPage}
				isLastPage={isLastPage}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</main>
	);
}

interface SearchProps {
	readonly searchParams: Promise<Record<string, string>>;
	readonly params: Promise<Record<string, string>>;
}
