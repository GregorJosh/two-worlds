import { isAuth } from "@/libs";
import { getArticle } from "@/actions";
import { Article, ArticleEditor } from "@/components";

export const metadata = {
  title: "Two Worlds: Home",
};

export default async function HomePage() {
  const articleName = "home_welcome";
  const article = await getArticle(articleName);
  const auth = isAuth();

  return (
    <>
      {auth && <ArticleEditor article={article} />}
      <Article content={article.content}></Article>
    </>
  );
}
