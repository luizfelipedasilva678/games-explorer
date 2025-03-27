import Link from "next/link";

function Pagination({
	prevPage,
	nextPage,
	isFirstPage,
	isLastPage,
}: PaginationProps) {
	return (
		<section className="join grid grid-cols-2 mt-[56]">
			<Link
				href={`/?page=${prevPage}`}
				className={`join-item btn btn-outline ${isFirstPage && "btn-disabled"}`}
			>
				Previous page
			</Link>
			<Link
				href={`/?page=${nextPage}`}
				className={`join-item btn btn-outline ${isLastPage && "btn-disabled"}`}
			>
				Next
			</Link>
		</section>
	);
}

interface PaginationProps {
	readonly nextPage: number;
	readonly prevPage: number;
	readonly isFirstPage: boolean;
	readonly isLastPage: boolean;
}

export default Pagination;
