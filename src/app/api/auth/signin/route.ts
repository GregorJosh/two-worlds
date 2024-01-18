import { apiRouteHandler } from "@/libs";
import { authSignin } from "@/controllers";

export const POST = apiRouteHandler(authSignin);
