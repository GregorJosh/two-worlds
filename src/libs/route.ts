import { errorResponse, successResponse } from ".";

export const highOrderRouteHandler = async (routeHandlers: RouteHandlers) => {
  const lowOrderRouteHandlers: RouteHandlers = {};
  const methods: string[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];

  methods.forEach((method) => {
    if (typeof routeHandlers[method] !== "function") {
      return;
    }

    lowOrderRouteHandlers[method] = async (req: Request, ...args: any) => {
      try {
        const responseBody = await routeHandlers[method](req, ...args);

        return Response.json(responseBody || {});
      } catch (error) {
        return errorResponse(error);
      }
    };
  });

  return lowOrderRouteHandlers;
};

export const apiRouteHandler = (routeHandler: RouteHandler) => {
  return async (request: Request, ...args: any) => {
    try {
      const body = await routeHandler(request, ...args);

      if (typeof body === "string") {
        return successResponse(body);
      }

      if (!body) {
        return successResponse();
      }

      return Response.json(body);
    } catch (error) {
      return errorResponse(error);
    }
  };
};
