import { authenticate, db } from "@/libs";
import { authSigninSchema } from "@/schemas";

export const authSignin = async (request: Request) => {
  const data = await request.json();
  const { username, password } = await authSigninSchema.validateAsync(data);
  const user = await db.User.findOne<User>({ username }).lean();

  if (!(user && user.password === password)) {
    throw "Username or Password is incorrect!";
  }

  await authenticate({ sub: user._id, username });
};
