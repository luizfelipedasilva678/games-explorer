"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Pagination({ currentPage }: PaginationProps) {
	const [page, setPage] = useState(currentPage || 1);
	const { push } = useRouter();

	return (
		<div className="join mt-[56]">
			<button
				type="button"
				className="join-item btn"
				onClick={() => {
					if (page === 1) return;
					setPage(page - 1);
					push(`/?page=${page - 1}`);
				}}
			>
				«
			</button>
			<button type="button" className="join-item btn">
				Page {page}
			</button>
			<button
				type="button"
				className="join-item btn"
				onClick={() => {
					setPage(page + 1);
					push(`/?page=${page + 1}`);
				}}
			>
				»
			</button>
		</div>
	);
}

interface PaginationProps {
	readonly currentPage: number;
}

export default Pagination;
