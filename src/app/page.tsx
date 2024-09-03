import Breadcrumbs from "@/components/breadcrumbs";

export default function Home() {
  return (
    <>
      <Breadcrumbs
        pages={[
          {
            name: "Home",
            href: "/",
          },
        ]}
      />
    </>
  );
}
