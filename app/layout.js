import "./globals.css";

export const metadata = {
  title: "Super Furniture — Home, Office, Hospital & Restaurant Furniture",
  description:
    "Super Furniture designs, builds and delivers furniture for homes, offices, hospitals and restaurants. Showroom at 12, SS Khaled Road. Call 01819822833.",
  icons: { icon: "/images/logo-mark.png" },
};

export const viewport = { themeColor: "#F6F1EA" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
