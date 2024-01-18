import { apiRouteHandler, highOrderRouteHandler } from "@/libs";
import { authSignin } from "@/controllers";

export const POST = apiRouteHandler(authSignin);

/* module.exports = highOrderRouteHandler({
  POST: authSignin,
}); */
