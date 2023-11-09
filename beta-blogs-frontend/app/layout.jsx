import { Inter } from "next/font/google";
import "./globals.css";
import { CategoryProvider } from "./context/CategoryContext";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "By Ibrahim Abdullah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-screen-xl">
          <CategoryProvider>
            <Navbar />
            <div className="flex min-h-screen flex-col items-start p-20">
              {children}
            </div>
          </CategoryProvider>
        </div>
      </body>
    </html>
  );
}
