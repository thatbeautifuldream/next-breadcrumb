export const breadcrumbsExample = `
import Breadcrumbs from "@/components/breadcrumbs";

<Breadcrumbs
  pages={[
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Category", href: "/products/category" },
  ]}
/>`;

export const customSeparatorExample = `
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

export const maxItemsExample = `
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

export const componentCode = `import { cn } from "@/lib/utils";
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
            <Link href="/" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
              {homeIcon}
              <span className="sr-only">Home</span>
            </Link>
          </li>
        )}
        {showEllipsis && (
          <li className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">...</span>
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
                  "ml-4 text-sm font-medium hover:text-gray-700 dark:hover:text-gray-300",
                  page.current ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"
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
