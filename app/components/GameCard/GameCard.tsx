import Link from "next/link";

function GameCard({ id, name, image, released }: GameCardProps) {
	return (
		<div className="card bg-base-100 shadow-sm w-full image-full max-h-[290]">
			<figure>
				<img src={image} alt={`${name} cover`} className="w-full" />
			</figure>
			<div className="card-body w-full">
				<h2 className="card-title">{name}</h2>
				<p>Release date: {released} </p>
				<div className="card-actions justify-end">
					<Link href={`/game/${id}`} className="btn btn-neutral">
						Details
					</Link>
				</div>
			</div>
		</div>
	);
}

type GameCardProps = {
	readonly id: number;
	readonly name: string;
	readonly image: string;
	readonly released: string;
};

export default GameCard;
