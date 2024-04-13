import { Article, Card } from "@/components";

export const metadata = {
  title: "Two Worlds: Dev",
};

export default function DevPage() {
  return (
    <>
      <Article name="dev_welcome" />
      <Card title="Portfolio" />
    </>
  );
}
