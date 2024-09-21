"use client";

import Breadcrumbs, { BreadcrumbItem } from "@/components/breadcrumbs";
import { ChevronRight, Copy, Check } from "lucide-react";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const breadcrumbsExample = `
import Breadcrumbs from "@/components/breadcrumbs";

<Breadcrumbs
  pages={[
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Category", href: "/products/category" },
  ]}
/>`;

  const customSeparatorExample = `
import Breadcrumbs from "@/components/breadcrumbs";
import { ChevronRight } from "lucide-react";

<Breadcrumbs
  pages={[
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Category", href: "/products/category" },
  ]}
  separator={<ChevronRight className="h-4 w-4" />}
/>`;

  const maxItemsExample = `
<Breadcrumbs
  pages={[
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Category", href: "/products/category" },
    { name: "Subcategory", href: "/products/category/subcategory" },
    { name: "Item", href: "/products/category/subcategory/item" },
  ]}
  maxItems={3}
/>`;

  const examplePages: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Category", href: "/products/category" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Next Breadcrumb",
    description:
      "Documentation and examples for the flexible Breadcrumbs component in Next.js applications.",
    author: {
      "@type": "Person",
      name: "Milind Mishra",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Milind Mishra",
      logo: {
        "@type": "ImageObject",
        url: "https://www.milindmishra.com/_next/image?url=%2Fassets%2Fmilindmishra.png&w=256&q=75",
      },
    },
  };

  const [copied, setCopied] = useState(false);

  const componentCode = `import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  href?: string;
  current?: boolean;
};

type BreadcrumbsProps = {
  pages: BreadcrumbItem[];
  homeIcon?: React.ReactNode;
  separator?: React.ReactNode;
  className?: string;
  maxItems?: number;
  showHomeIcon?: boolean;
};

export default function Breadcrumbs({
  pages,
  homeIcon = <Home className="h-5 w-5 flex-shrink-0" />,
  separator = (
    <svg
      className="h-5 w-5 flex-shrink-0 text-gray-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
    </svg>
  ),
  className = "",
  maxItems = Infinity,
  showHomeIcon = true,
}: BreadcrumbsProps) {
  const visiblePages = pages.slice(-Math.min(maxItems, pages.length));
  const showEllipsis = pages.length > maxItems;

  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol role="list" className="flex items-center space-x-4">
        {showHomeIcon && (
          <li>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              {homeIcon}
              <span className="sr-only">Home</span>
            </Link>
          </li>
        )}
        {showEllipsis && (
          <li className="text-sm">
            <span className="text-gray-500">...</span>
          </li>
        )}
        {visiblePages.map((page, index) => (
          <li key={page.name}>
            <div className="flex items-center">
              {(index > 0 || showHomeIcon) && separator}
              <Link
                href={page.href ?? "#"}
                aria-current={page.current ? "page" : undefined}
                className={cn(
                  "ml-4 text-sm font-medium hover:text-gray-700",
                  page.current ? "text-gray-900" : "text-gray-500"
                )}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Script id="breadcrumbs-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          Breadcrumbs for your everyday React apps
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Created by{" "}
          <Link
            href="https://milindmishra.com"
            className="text-blue-600 hover:underline"
          >
            Milind Mishra
          </Link>
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="mb-4">
            The Breadcrumbs component is a flexible navigation tool for your
            pages. Here&apos;s a basic example:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md mb-4">
            <code>{breadcrumbsExample}</code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>pages</strong>: An array of BreadcrumbItem objects, each
              containing:
              <ul className="list-circle pl-6 mt-2">
                <li>
                  <code>name</code>: string (required) - The display name of the
                  breadcrumb item
                </li>
                <li>
                  <code>href</code>: Route (optional) - The link for the
                  breadcrumb item
                </li>
                <li>
                  <code>current</code>: boolean (optional) - Indicates if this
                  is the current page
                </li>
              </ul>
            </li>
            <li>
              <strong>homeIcon</strong>: React.ReactNode (optional) - Custom
              icon for the home link
            </li>
            <li>
              <strong>separator</strong>: React.ReactNode (optional) - Custom
              separator between items
            </li>
            <li>
              <strong>className</strong>: string (optional) - Additional CSS
              classes for the nav element
            </li>
            <li>
              <strong>maxItems</strong>: number (optional) - Maximum number of
              items to display
            </li>
            <li>
              <strong>showHomeIcon</strong>: boolean (optional) - Whether to
              show the home icon (default: true)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>

          <h3 className="text-xl font-semibold mb-2">Basic Usage</h3>
          <Breadcrumbs pages={examplePages} />
          <pre className="bg-gray-100 p-4 rounded-md my-4">
            <code>{breadcrumbsExample}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2 mt-6">Custom Separator</h3>
          <Breadcrumbs
            pages={examplePages}
            separator={<ChevronRight className="h-4 w-4" />}
          />
          <pre className="bg-gray-100 p-4 rounded-md my-4">
            <code>{customSeparatorExample}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2 mt-6">Max Items</h3>
          <Breadcrumbs
            pages={[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Category", href: "/products/category" },
              { name: "Subcategory", href: "/products/category/subcategory" },
              { name: "Item", href: "/products/category/subcategory/item" },
            ]}
            maxItems={3}
          />
          <pre className="bg-gray-100 p-4 rounded-md my-4">
            <code>{maxItemsExample}</code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <p className="mb-4">
            To get started quickly, you can copy and paste the Breadcrumbs
            component directly into your project:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              Create a new file at <code>src/components/Breadcrumbs.tsx</code>
            </li>
            <li>Copy and paste the following code into the file:</li>
          </ol>
          <div className="relative">
            <pre className="bg-gray-100 p-4 rounded-md mb-4">
              <code>{componentCode}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors"
              aria-label={copied ? "Copied" : "Copy to clipboard"}
            >
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
          <p className="mb-4">
            Make sure you have the required dependencies installed:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <code>lucide-react</code> for the Home icon
            </li>
            <li>
              <code>@/lib/utils</code> for the <code>cn</code> function (you may
              need to create this utility)
            </li>
          </ul>
          <p>
            Now you can import and use the Breadcrumbs component in your pages
            as shown in the examples above.
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Next Breadcrumb. Created and maintained
            by{" "}
            <Link
              href="https://milindmishra.com"
              className="text-blue-600 hover:underline"
            >
              Milind Mishra
            </Link>
            .
          </p>
          <p className="text-sm text-gray-600 mt-2">
            For more projects and information, visit{" "}
            <Link
              href="https://milindmishra.com"
              className="text-blue-600 hover:underline"
            >
              milindmishra.com
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
