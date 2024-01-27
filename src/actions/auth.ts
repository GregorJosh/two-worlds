"use server";

import { authenticate, db, isAuth } from "@/libs";
import { authSigninSchema } from "@/schemas";

export const signIn = async (formData: FormData): Promise<ActionResult> => {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    await authSigninSchema.validateAsync({ username, password });

    const user = await db.User.findOne({ username }).lean();

    if (!(user && user.password === password)) {
      throw "Username or Password is incorrect!";
    }

    await authenticate({ sub: user._id, username });

    return {
      status: "success",
      message: "User successfully logged in",
    };
  } catch (error: any) {
    return {
      status: "error",
      message: error.message ?? error,
    };
  }
};

export const getIsAuth = () => {
  return isAuth();
};
