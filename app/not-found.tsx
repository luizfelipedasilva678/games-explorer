import Link from "next/link";

export default function NotFound() {
	return (
		<main className="mt-[56] mb-[56] section w-full flex items-center justify-center flex-col h-[62vh] gap-[16]">
			<h1 className="text-4xl font-bold">Not Found</h1>
			<p className="text-2xl">Could not find requested resource</p>
			<Link href="/" className="btn btn-neutral">
				Return Home
			</Link>
		</main>
	);
}
