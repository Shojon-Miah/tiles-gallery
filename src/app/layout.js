import "../styles/globals.css";
export const metadata = {
  title: "Tiles Gallery",
  description: "Discover your perfect tile aesthetic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}