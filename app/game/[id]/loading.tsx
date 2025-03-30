export default function Loading() {
	return (
		<main className="mt-[56] mb-[56] section w-full flex items-center justify-center flex-col">
			<div className="flex flex-col gap-4 w-full max-w-[1600]">
				<div className="skeleton h-4 w-50" />
				<div className="skeleton h-[900] w-full" />
				<div className="skeleton h-20 w-full" />
				<div className="skeleton h-20 w-full" />
				<div className="skeleton h-20 w-full" />
			</div>
		</main>
	);
}
