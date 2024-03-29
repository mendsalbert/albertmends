import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import Head

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albert Mends",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Add the favicon link tag within Head */}
        <link rel="icon" href="/favicon.ico" />
        <title>Albert Mends</title>
        {/* <meta name="description" content={metadata.description} /> */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
