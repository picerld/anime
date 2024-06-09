import Navbar from "./components/Navbar";
import "./globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeList",
  description: "Website Anime using Reactjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ gabarito.className } bg-base-300`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}