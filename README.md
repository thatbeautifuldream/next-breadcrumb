# Breadcrumbs for your everyday React apps

Breadcrumbs is a flexible and customizable breadcrumbs navigation component for React applications.

## Features

- Easy to integrate with React, Next.js, and TailwindCSS projects
- Customizable appearance (icons, separators, styles)
- Accessibility-friendly
- TypeScript support

## Usage

To use Breadcrumbs in your project, copy paste component from [`src/components/breadcrumbs.tsx`](./src/components/breadcrumbs.tsx) and include it in your component tree:

```tsx
import Breadcrumbs, { type BreadcrumbItem } from "@/components/breadcrumbs";

const pages: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return <Breadcrumbs pages={pages} />;
}
```

## Customization

You can customize the appearance of the breadcrumbs by passing props to the `Breadcrumbs` component. Here are some of the options:

- `homeIcon`: Custom icon for the home page.
- `separator`: Custom separator between breadcrumb items.
- `className`: Additional CSS classes to style the breadcrumbs.
- `maxItems`: Maximum number of breadcrumb items to display.
- `showHomeIcon`: Whether to show the home icon.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
