"use client";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { type MouseEvent, useCallback, useState } from "react";

function Header() {
	const { push } = useRouter();
	const [open, setOpen] = useState(false);
	const [term, setTerm] = useState("");

	const handleClick = useCallback(
		(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
			e.preventDefault();

			if (!open) {
				setOpen(true);
				return;
			}

			setOpen(false);

			if (term) {
				push(`/search/${term}`);
				setTerm("");
			}
		},
		[open, push, term],
	);

	return (
		<header className="navbar bg-base-100 shadow-sm relative flex-col gap-2">
			<div className="flex max-w-[1600] w-full">
				<div className="flex-1 flex items-center justify-start">
					<Link href="/" className="link  no-underline text-xl">
						Games Explorer
					</Link>
				</div>
				<div className="flex gap-2">
					<button
						type="button"
						className="btn sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg btn-ghost btn-circle"
						onClick={(e) => handleClick(e)}
					>
						<FiSearch />
					</button>
				</div>
			</div>
			<div className="w-full max-w-[1600]">
				{open && (
					<input
						type="text"
						placeholder="Search"
						className="input w-full"
						onChange={(e) => setTerm(e.target.value)}
						value={term}
					/>
				)}
			</div>
		</header>
	);
}

export default Header;
