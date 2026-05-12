import { Nav } from "@/app/_components/nav";
import { Footer } from "@/app/_components/footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}