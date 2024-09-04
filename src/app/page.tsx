import Breadcrumbs from "@/components/breadcrumbs";

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
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Breadcrumbs Component Documentation
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <p className="mb-4">
          The Breadcrumbs component is used to display a navigation trail for
          your pages. Here&apos;s an example of how to use it:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md mb-4">
          <code>{breadcrumbsExample}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>pages</strong>: An array of objects, each containing a{" "}
            <code>name</code> and <code>href</code> property.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <p className="mb-4">
          Here's a live example of the Breadcrumbs component:
        </p>

        <Breadcrumbs
          pages={[
            { name: "Home", href: "/" },
            { name: "Documentation", href: "#" },
          ]}
        />
      </section>
    </div>
  );
}
