import Link from "next/link";

function Pagination({ maxPage, currentPage }: PaginationProps) {
	const isLastPage = currentPage === maxPage;
	const isFirstPage = currentPage === 1;
	const nextPage = isLastPage ? maxPage : currentPage + 1;
	const prevPage = isFirstPage ? 1 : currentPage - 1;

	return (
		<section className="join grid grid-cols-2 mt-[56]">
			<Link
				href={`/?page=${prevPage}`}
				type="button"
				className={`join-item btn btn-outline ${isFirstPage && "btn-disabled"}`}
			>
				Previous page
			</Link>
			<Link
				href={`/?page=${nextPage}`}
				type="button"
				className={`join-item btn btn-outline ${isLastPage && "btn-disabled"}`}
			>
				Next
			</Link>
		</section>
	);
}

interface PaginationProps {
	readonly maxPage: number;
	readonly currentPage: number;
}

export default Pagination;
