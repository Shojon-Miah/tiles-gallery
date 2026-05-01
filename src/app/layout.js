import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "../styles/globals.css";
export const metadata = {
  title: "Tiles Gallery",
  description: "Discover your perfect tile aesthetic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

