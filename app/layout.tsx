import type { Metadata } from "next";
import "./styles/globals.css";
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "Rater Dashboard",
  description: "Bibuain Tech Rater Dashboard for crypto rate management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
