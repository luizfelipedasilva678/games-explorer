"use client";

import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function GlobalError() {
	return (
		<html lang="en" data-theme="light">
			<body>
				<Header />
				<main className="mt-[56] mb-[56] section w-full flex items-center justify-center flex-col h-[62vh] gap-[16]">
					<Image src={"/error.svg"} width={50} height={50} alt="error" />
					<h1 className="text-4xl font-bold">Something went wrong</h1>
					<Link href="/" className="btn btn-neutral">
						Return Home
					</Link>
				</main>
				<Footer />
			</body>
		</html>
	);
}
