import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOLL Studio",
  description: "ミニマルで高級感あるNOLL Studioのランディングページ"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
