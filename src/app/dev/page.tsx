import { Article, Card, Repository, Product } from "@/components";

export const metadata = {
  title: "Two Worlds: Dev",
};

export default async function DevPage() {
  const repos: GitHubRepo[] = await (
    await fetch("https://api.github.com/users/gregorjosh/repos", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.GH_TOKEN,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
  ).json();

  console.log("Rendering dev page...");

  return (
    <>
      <Article name="dev_welcome" />
      <Card title="Portfolio">
        {repos.map((repo) => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </Card>
      <Card title="Products">
        <Product product={{ name: "HSMS", url: "#" }} />
      </Card>
    </>
  );
}
