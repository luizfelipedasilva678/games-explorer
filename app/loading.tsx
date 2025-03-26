export default function Loading() {
	return (
		<main className="mt-[56] mb-[56] section w-full flex items-center justify-center flex-col">
			<section className="w-full max-w-[1600] grid lg:grid-cols-3 gap-4 grid-cols-1 max-[1024]:grid-cols-2 max-[640]:grid-cols-1 max-[1600]:pl-[16] max-[1600]:pr-[16]">
				{Array.from({ length: 12 }).map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div className="skeleton w-full h-[290]" key={index} />
				))}
			</section>
			<div className="skeleton w-[100] h-[40] mt-[56]" />
		</main>
	);
}
