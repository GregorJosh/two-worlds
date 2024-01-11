import { errorResponse, successResponse } from "@/lib/helpers";
import { authSigninSchema } from "@/schemas";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    await authSigninSchema.validateAsync(data);

    return successResponse("ok");
  } catch (error) {
    return errorResponse(error);
  }
};
