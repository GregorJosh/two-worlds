import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { authenticate, db } from "@/libs";
import { authSigninSchema } from "@/schemas";

export const signIn = async (formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  await authSigninSchema.validateAsync({ username, password });

  const user = await db.User.findOne({ username }).lean();

  if (!(user && user.password === password)) {
    throw "Username or Password is incorrect!";
  }

  await authenticate({ sub: user._id, username });
};

export const getIsAuth = () => {
  try {
    const accessToken = cookies().get("accessToken")?.value ?? "";
    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY!);

    return decodedToken.sub as string;
  } catch {
    return false;
  }
};
