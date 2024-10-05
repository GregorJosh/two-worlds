import { Article } from "@/components";

export const metadata = {
  title: "Two Worlds: Home",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function HomePage() {
  console.log("Rendering home page...");

  return <Article name="home_welcome" />;
}
