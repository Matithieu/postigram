import { MenuBar } from "@/components/MenuBar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Postigram",
  description: "App showing posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description?.toString()} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header>
          <MenuBar />
        </header>
        {children}
      </body>
    </html>
  );
}
