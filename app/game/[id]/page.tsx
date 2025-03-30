import Image from "next/image";
import { isErrorObject } from "../../../src/frontend/shared";
import Collapse from "../../components/Collapse";
import makeGetGameScreenShotsController from "../../../src/api/main/factories/make-get-game-screenshots-controller";
import makeGetGameController from "../../../src/frontend/main/factories/make-get-game-controller";

async function Page({ params }: PageProps) {
	const { id } = await params;
	const getGameController = makeGetGameController();
	const getGameScreenshotController = makeGetGameScreenShotsController();
	const getGameControllerResponse = await getGameController.perform({ id });
	const getGameScreenShotsControllerResponse =
		await getGameScreenshotController.perform({ id });

	if (isErrorObject(getGameControllerResponse)) {
		throw new Error(getGameControllerResponse.message);
	}

	const { name, image, description, genres, platforms } =
		getGameControllerResponse;

	const gameScreenShots = isErrorObject(getGameScreenShotsControllerResponse)
		? []
		: getGameScreenShotsControllerResponse.images;

	return (
		<main className="mt-[56] mb-[56] section w-full flex items-center justify-center flex-col">
			<section className="w-full max-w-[1600] max-[1600]:pl-[16] max-[1600]:pr-[16] overflow-x-auto">
				<h1 className="text-4xl font-bold mb-[16]">{name}</h1>
				<figure>
					<Image
						src={image || "/no-image.png"}
						alt={`${name} cover`}
						width={1600}
						height={900}
						className="rounded-xl"
					/>
				</figure>
				<Collapse content={description} title="Description" />
				<Collapse
					title="Platforms"
					content={
						<ul className="list bg-base-100 rounded-box shadow-md mt-[16] text-xl">
							{platforms.map((platform) => (
								<li className="list-row" key={platform.id}>
									{platform.name}
								</li>
							))}
						</ul>
					}
				/>
				<Collapse
					title="Genres"
					content={
						<ul className="list bg-base-100 rounded-box shadow-md mt-[16] text-xl">
							{genres.map((genre) => (
								<li className="list-row" key={genre.id}>
									{genre.name}
								</li>
							))}
						</ul>
					}
				/>
				{gameScreenShots.length > 0 && (
					<div className="mt-[16] w-full overflow-x-auto scroll-smooth thu">
						<h2 className="text-2xl font-bold mb-[16]">Screenshots</h2>
						<div className="carousel carousel-end rounded-box">
							{gameScreenShots.map((image, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<figure key={index} className={"carousel-item mr-[16]"}>
									<Image
										src={image || "/no-image.png"}
										alt={`${name} cover`}
										width={500}
										height={300}
										className="rounded-xl"
									/>
								</figure>
							))}
						</div>
					</div>
				)}
			</section>
		</main>
	);
}

interface PageProps {
	readonly params: Promise<{ id: string }>;
}

export default Page;
