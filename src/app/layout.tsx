import type { Metadata } from "next";
import { Sulphur_Point } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

const sulphur = Sulphur_Point({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Nodify",
  description: "Automate your entire workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sulphur.className} antialiased`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
