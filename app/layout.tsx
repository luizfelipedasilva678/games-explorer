import { Oswald } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

const oswald = Oswald({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="light" className={oswald.className}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
