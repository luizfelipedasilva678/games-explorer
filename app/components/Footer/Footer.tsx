import Link from "next/link";

function Footer() {
	return (
		<footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10 shadow-[0px_-1px_6px_0px_rgba(0,_0,_0,_0.1)]">
			<div className="max-w-[1600] w-full">
				<h3 className="text-2xl font-bold">Games Explorer</h3>
				<div className="divider w-full mt-0 mb-0" />
				<aside>
					<p>
						Data provided by{" "}
						<Link
							className="link"
							href="https://rawg.io/apidocs"
							target="_blank"
						>
							RAWG
						</Link>
					</p>
				</aside>
			</div>
		</footer>
	);
}

export default Footer;
