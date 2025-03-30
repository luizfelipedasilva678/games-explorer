import Image from "next/image";
import makeGetGameController from "../../../src/frontend/main/factories/make-get-game-controller";
import { isErrorObject } from "../../../src/frontend/shared";
import Collapse from "../../components/Collapse";

async function Page({ params }: PageProps) {
	const { id } = await params;
	const controller = makeGetGameController();
	const controllerResponse = await controller.perform({ id });

	if (isErrorObject(controllerResponse)) {
		throw new Error(controllerResponse.message);
	}

	const { name, image, description, genres, platforms } = controllerResponse;

	return (
		<main className="mt-[56] mb-[56] section w-full flex items-center justify-center flex-col">
			<section className="w-full max-w-[1600] max-[1600]:pl-[16] max-[1600]:pr-[16]">
				<h1 className="text-4xl font-bold mb-[16]">{name}</h1>
				<figure>
					<Image
						src={image}
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
			</section>
		</main>
	);
}

interface PageProps {
	readonly params: Promise<{ id: string }>;
}

export default Page;
