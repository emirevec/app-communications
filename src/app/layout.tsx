import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
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
