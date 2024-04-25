import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ícaro Alves | Portfólio",
  description: "Portfólio oficial do cientista de dados Ícaro Alves",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-950 antialiased flex flex-col items-center text-primary width-full $inter.className`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
