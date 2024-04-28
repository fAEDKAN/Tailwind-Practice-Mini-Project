import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid min-h-screen transition-colors bg-gray-300 dark:bg-gray-800">
        {children}
      </body>
    </html>
  );
}
