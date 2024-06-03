import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar";
import Footer from "@/components/footer";
import { CartProvider } from "../components/cartcontext";
import { WishlistProvider } from "@/components/whitelistcontext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WOS",
  description: "A flown shop to enjoy new high quilty products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WishlistProvider>
      <CartProvider>
        <NavBar />
        {children}
        <Footer />
        </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
