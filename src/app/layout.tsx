import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breadcrumbs Component Documentation | Next.js UI Components",
  description:
    "Documentation and examples for the flexible Breadcrumbs component in Next.js applications. Learn how to implement and customize breadcrumb navigation in your web projects.",
  keywords:
    "Next.js, React, Breadcrumbs, Navigation, UI Component, Web Development",
  authors: [{ name: "Milind Mishra" }],
  openGraph: {
    title: "Next Breadcrumb",
    description:
      "Documentation and examples for the flexible Breadcrumbs component in Next.js applications. Learn how to implement and customize breadcrumb navigation in your web projects.",
    url: "https://next-breadcrumb.vercel.app",
    siteName: "Next.js UI Components",
    images: [
      {
        url: "https://next-breadcrumb.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Breadcrumbs Component Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breadcrumbs Component for Next.js",
    description:
      "Flexible and customizable breadcrumbs navigation for Next.js applications",
    images: ["https://your-website.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
