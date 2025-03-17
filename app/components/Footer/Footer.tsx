import Link from "next/link";
import { IoLogoGameControllerB } from "react-icons/io";

function Footer() {
	return (
		<footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10 shadow-[0px_-1px_6px_0px_rgba(0,_0,_0,_0.1)]">
			<h3 className="text-2xl font-bold">Games Explorer</h3>
			<IoLogoGameControllerB size={30} />
			<aside>
				<p>
					Data provided by{" "}
					<Link className="link" href="https://rawg.io/apidocs" target="_blank">
						RAWG
					</Link>
				</p>
			</aside>
		</footer>
	);
}

export default Footer;
