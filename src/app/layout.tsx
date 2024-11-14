import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { html } from "framer-motion/client";

export const metadata: Metadata = {
  title: "CommunApp"
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
