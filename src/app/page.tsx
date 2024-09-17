import Breadcrumbs, { BreadcrumbItem } from "@/components/breadcrumbs";
import { ChevronRight } from "lucide-react";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Breadcrumbs Component Documentation
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <p className="mb-4">
          The Breadcrumbs component is a flexible navigation tool for your
          pages. Here's a basic example:
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
                <code>current</code>: boolean (optional) - Indicates if this is
                the current page
              </li>
            </ul>
          </li>
          <li>
            <strong>homeIcon</strong>: React.ReactNode (optional) - Custom icon
            for the home link
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
            <strong>showHomeIcon</strong>: boolean (optional) - Whether to show
            the home icon (default: true)
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
    </div>
  );
}
