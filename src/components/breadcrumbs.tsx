import { Home } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Page = {
  name: string;
  href?: Route;
  current?: boolean;
};

/**
 * Component for rendering breadcrumbs.
 *
 * @component
 * @param {Object[]} pages - The array of pages for the breadcrumbs.
 * @param {string} pages[].name - The name of the page.
 * @param {Route} pages[].href - The route of the page.
 * @param {boolean} pages[].current - Indicates if the page is the current page.
 */
export default function Breadcrumbs({ pages }: { pages: Page[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <Home aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-gray-300"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={page.href ? page.href : "#"}
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
}
