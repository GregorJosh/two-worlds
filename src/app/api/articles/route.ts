import { apiRouteHandler } from "@/libs";
import { getArticle, updateArticle } from "@/controllers";

export const GET = apiRouteHandler(getArticle);
export const PATCH = apiRouteHandler(updateArticle);
