import { errorResponse, successResponse } from "@/lib/helpers";
import { db } from "@/lib/db";
import { authSigninSchema } from "@/schemas";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { username } = await authSigninSchema.validateAsync(data);
    const user = await db.user.findOne({ username }).lean();

    if (user) {
      return Response.json(user);
    }

    return errorResponse("No user");
  } catch (error) {
    return errorResponse(error);
  }
};
