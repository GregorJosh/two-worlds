import { apiRouteHandler } from "@/libs";
import { getUser } from "@/controllers";

export const GET = apiRouteHandler(getUser);
