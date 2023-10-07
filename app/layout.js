"use client";
import Header from "@components/header/Header";
import "@styles/globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@redux/provider";
import { appName } from "@utils/strings";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const poppy = Poppins({ weight: "500", subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <link rel="icon" href="/lg (2).png" />
      <title>{appName}</title>
      <body className={poppy.className}>
        <SessionProvider session={session}>
          <Toaster />
          <Providers>
            <Header />
            {children}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
